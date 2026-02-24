import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, country, product, message } = req.body || {};

  if (!name || !email || !country || !product || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const recipient = process.env.CONTACT_RECIPIENT || "export@greenrootglobal.com";

    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Country: ${country}`,
      `Product: ${product}`,
      "",
      "Message:",
      message,
    ].filter(Boolean);

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: recipient,
      subject: `New export enquiry from ${name}`,
      text: lines.join("\n"),
      html: lines.map((l) => `<p>${l}</p>`).join(""),
    });

    return res.json({ success: true });
  } catch (error) {
    console.error("Error sending contact email", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Contact backend listening on port ${PORT}`);
});

