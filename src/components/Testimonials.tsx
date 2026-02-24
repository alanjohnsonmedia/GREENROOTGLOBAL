import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al-Farsi",
    company: "GreenFields LLC",
    flag: "🇦🇪",
    country: "UAE",
    text: "Consistent quality and on-time delivery. Their vermicompost boosted our farm yield by 30%.",
  },
  {
    name: "Sarah Thompson",
    company: "OrganicRoots Inc.",
    flag: "🇺🇸",
    country: "USA",
    text: "The best organic manure supplier we've worked with. Fully certified and professional.",
  },
  {
    name: "Mohammed Al-Rashid",
    company: "Desert Bloom Farms",
    flag: "🇸🇦",
    country: "Saudi Arabia",
    text: "Reliable exports with excellent packaging. We've been ordering for two years straight.",
  },
];

const Testimonials = () => (
  <section className="bg-sage py-20 md:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-black text-sage-foreground mb-4">
          Trusted by 50+ Global Agribusinesses
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-14">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-card rounded-xl p-6 shadow-sm border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="fill-terracotta text-terracotta" />
              ))}
            </div>
            <p className="text-card-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{t.flag}</span>
              <div>
                <p className="font-semibold text-card-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.company} · {t.country}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default Testimonials;
