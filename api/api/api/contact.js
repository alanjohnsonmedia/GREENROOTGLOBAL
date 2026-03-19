import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

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

    const recipient =
      process.env.CONTACT_RECIPIENT || "export@greenrootglobal.com";

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
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Email failed" });
  }
}