import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { useNavigate } from "react-router-dom";

// Single source of truth for the primary WhatsApp number.
// We normalize it to digits for the wa.me URL at runtime.
const WHATSAPP_NUMBER = "+91 98948 51206";

const contactInfo = [
  { icon: Phone, label: "WhatsApp (India)", value: "+91 98948 51206", href: "https://wa.me/919894851206" },
  { icon: Phone, label: "UAE Contact", value: "+971 56 767 8499", href: "tel:+971567678499" },
  { icon: Mail, label: "Email", value: "export@greenrootglobal.com", href: "mailto:export@greenrootglobal.com" },
  { icon: MapPin, label: "Address", value: "Jaipur, Rajasthan, India", href: undefined },
  { icon: Clock, label: "Office Hours", value: "Mon–Sat, 9 AM – 6 PM IST", href: undefined },
];

const productOptions = [
  "Cow Dung Manure",
  "Earthworm Organic (Vermicompost)",
  "Bone Meal Organic",
  "Custom / Mixed Order",
];

const fieldDelay = (i: number) => ({ opacity: 0, y: 16, transition: { duration: 0.4, delay: i * 0.05 } });

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  country: "",
  product: "",
  message: "",
};

const validateForm = (form: typeof initialFormState) => {
  const name = form.name.trim();
  const email = form.email.trim();
  const phone = form.phone.trim();
  const country = form.country.trim();
  const product = form.product.trim();
  const message = form.message.trim();

  if (!name || !email || !country || !product || !message) {
    return "Please fill in all required fields marked with *.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return "Please enter a valid email address.";
  }

  if (phone) {
    // Strictly reject letters/symbols beyond typical phone formatting characters.
    if (!/^[\d\s()+-]+$/.test(phone)) {
      return "Phone must be numeric.";
    }
    const digitsOnly = phone.replace(/\D/g, "");
    if (!digitsOnly) return "Phone must be numeric.";
  }

  return null;
};

const buildWhatsAppMessage = (form: typeof initialFormState) => {
  const name = form.name.trim();
  const email = form.email.trim();
  const phone = form.phone.trim();
  const message = form.message.trim();

  // WhatsApp supports simple markdown like *bold*.
  const lines = [
    "🌿 *New Website Enquiry*",
    "",
    `👤 Name: ${name}`,
    `📞 Phone: ${phone || "-"}`,
    `📧 Email: ${email}`,
    "",
    "📝 Message:",
    message,
  ];

  return lines.join("\n");
};

const buildWhatsAppUrl = (encodedMessage: string) => {
  const waMeNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${waMeNumber}?text=${encodedMessage}`;
};

const openInNewTab = (url: string) => {
  const win = window.open(url, "_blank", "noopener,noreferrer");
  return !!win;
};

const ContactPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    const validationError = validateForm(form);
    if (validationError) {
      toast(validationError);
      return;
    }

    setSubmitting(true);

    try {
      const message = buildWhatsAppMessage(form);
      const encodedMessage = encodeURIComponent(message);
      const url = buildWhatsAppUrl(encodedMessage);

      // Must be called directly from the user gesture to avoid popup blocking.
      const opened = openInNewTab(url);

      if (!opened) {
        toast("Unable to open WhatsApp.", {
          description: "Please check your popup settings or contact us using the WhatsApp number shown on this page.",
          action: {
            label: "Open WhatsApp",
            onClick: () => openInNewTab(url),
          },
        });
        return;
      }

      toast("Your enquiry has been redirected to WhatsApp.", {
        description: "Please complete and send the message in WhatsApp to reach our team.",
      });
      setForm(initialFormState);
    } catch (error) {
      console.error(error);
      toast("Something went wrong.", {
        description: "We couldn't redirect to WhatsApp. Please try again or contact us via WhatsApp or email directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <motion.section
        className="bg-forest pt-28 pb-16 md:pt-36 md:pb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-forest-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-forest-foreground/70 max-w-2xl mx-auto text-lg">
            Have questions about our products or need a custom quote? We'd love to hear from you.
          </p>
        </div>
      </motion.section>

      {/* Form + Info */}
      <section className="bg-sage py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              className="lg:col-span-3 bg-card rounded-xl p-8 shadow-sm border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-black text-card-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {[
                  { label: "Full Name", name: "name", type: "text", placeholder: "John Doe", required: true },
                  { label: "Email Address", name: "email", type: "email", placeholder: "john@example.com", required: true },
                  { label: "Phone Number", name: "phone", type: "tel", placeholder: "+1 234 567 8900", required: false },
                  { label: "Country", name: "country", type: "text", placeholder: "United States", required: true },
                ].map((f, i) => (
                  <motion.div
                    key={f.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <Label htmlFor={f.name} className="text-card-foreground font-medium">
                      {f.label} {f.required && <span className="text-terracotta">*</span>}
                    </Label>
                    <Input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      placeholder={f.placeholder}
                      value={(form as any)[f.name]}
                      onChange={handleChange}
                      required={f.required}
                      className="mt-1"
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <Label htmlFor="product" className="text-card-foreground font-medium">
                    Product Interest <span className="text-terracotta">*</span>
                  </Label>
                  <select
                    id="product"
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                  >
                    <option value="">Select a product</option>
                    {productOptions.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                >
                  <Label htmlFor="message" className="text-card-foreground font-medium">
                    Message <span className="text-terracotta">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements, quantity needed, preferred delivery timeline..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-1"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-terracotta hover:bg-terracotta/90 text-terracotta-foreground font-semibold text-base py-6"
                  >
                    <Send size={18} className="mr-2" />
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div>
                <h2 className="text-2xl font-black text-sage-foreground mb-6">Contact Details</h2>
                <div className="space-y-5">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-forest-foreground" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-sage-foreground/60 uppercase tracking-wider">{label}</p>
                        {href ? (
                          <a href={href} className="text-sage-foreground font-medium hover:text-terracotta transition-colors">
                            {value}
                          </a>
                        ) : (
                          <p className="text-sage-foreground font-medium">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin size={32} className="mx-auto mb-2 opacity-40" />
                    <p className="text-sm font-medium">Jaipur, Rajasthan, India</p>
                    <p className="text-xs">Map view coming soon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-forest-foreground mb-6">
              Prefer a Quick Quote?
            </h2>
            <p className="text-forest-foreground/70 max-w-xl mx-auto mb-10 text-lg">
              Skip the form — get a customized export quote in under 24 hours.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={() => navigate("/")}
                size="lg"
                className="bg-terracotta hover:bg-terracotta/90 text-terracotta-foreground font-semibold text-lg px-12 py-7"
              >
                Request Export Quote
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FloatingCTA />
      <WhatsAppCTA />
    </div>
  );
};

export default ContactPage;
