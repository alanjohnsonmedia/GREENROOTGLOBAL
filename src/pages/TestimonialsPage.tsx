import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import FloatingCTA from "@/components/FloatingCTA";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: "Ahmed Al-Farsi",
    company: "GreenFields LLC",
    flag: "🇦🇪",
    country: "UAE",
    rating: 5,
    text: "Consistent quality and on-time delivery every single shipment. Their vermicompost boosted our farm yield by 30% in the first season alone. We've now expanded our order to cover three additional farms.",
  },
  {
    name: "Sarah Thompson",
    company: "OrganicRoots Inc.",
    flag: "🇺🇸",
    country: "USA",
    rating: 5,
    text: "The best organic manure supplier we've worked with. Fully certified, professional documentation, and their team handles all export paperwork seamlessly. Highly recommend for any US-based agribusiness.",
  },
  {
    name: "Mohammed Al-Rashid",
    company: "Desert Bloom Farms",
    flag: "🇸🇦",
    country: "Saudi Arabia",
    rating: 5,
    text: "Reliable exports with excellent packaging that survives long transit. We've been ordering for two years straight without a single quality issue. Their dung cakes are unmatched.",
  },
  {
    name: "James Okonkwo",
    company: "AfriGreen Organics",
    flag: "🇳🇬",
    country: "Nigeria",
    rating: 5,
    text: "We switched from chemical fertilizers to their vermicompost and saw remarkable soil health improvements. The customer support team is responsive and genuinely helpful.",
  },
  {
    name: "Elena Petrova",
    company: "EuroHarvest GmbH",
    flag: "🇩🇪",
    country: "Germany",
    rating: 4,
    text: "Impressed by the ISO certification and quality control processes. Shipping to Europe was smooth and all customs documentation was perfectly in order. Great partnership.",
  },
  {
    name: "Raj Patel",
    company: "OmniAgri Solutions",
    flag: "🇬🇧",
    country: "UK",
    rating: 5,
    text: "As a distributor, we need consistent supply and quality. GreenRoot Global Ventures delivers both flawlessly. Our UK customers love the product and keep reordering.",
  },
  {
    name: "Fatima Al-Zahra",
    company: "Oasis Agriculture",
    flag: "🇴🇲",
    country: "Oman",
    rating: 5,
    text: "The raw organic manure transformed our date palm plantations. Excellent bulk pricing for large orders and the logistics team coordinates everything end-to-end.",
  },
  {
    name: "Carlos Rivera",
    company: "LatAm Organic Farms",
    flag: "🇲🇽",
    country: "Mexico",
    rating: 4,
    text: "Professional from start to finish. The product quality exceeded our expectations and our crop yields improved significantly. Looking forward to a long-term partnership.",
  },
];

const stats = [
  { label: "Countries Served", value: 50, suffix: "+" },
  { label: "Tons Exported", value: 10000, suffix: "+" },
  { label: "Satisfaction Rate", value: 98, suffix: "%" },
  { label: "Years in Business", value: 12, suffix: "+" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1 },
  }),
};

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const TestimonialsPage = () => {
  const navigate = useNavigate();

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
            What Our Clients Say
          </h1>
          <p className="text-forest-foreground/70 max-w-2xl mx-auto text-lg">
            Trusted by agribusinesses across 50+ countries. Here's what our partners have to say about working with us.
          </p>
        </div>
      </motion.section>

      {/* Stats */}
      <section className="bg-forest border-t border-forest-foreground/10 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-black text-terracotta">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </p>
                <p className="text-forest-foreground/60 text-sm mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="bg-sage py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-xl p-6 shadow-sm border border-border flex flex-col"
              >
                <Quote size={20} className="text-terracotta/40 mb-3" />
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className={j < t.rating ? "fill-terracotta text-terracotta" : "text-muted-foreground/30"}
                    />
                  ))}
                </div>
                <p className="text-card-foreground text-sm leading-relaxed mb-4 italic flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <span className="text-2xl">{t.flag}</span>
                  <div>
                    <p className="font-semibold text-card-foreground text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {t.company} · {t.country}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Join Our Growing List of Partners
            </h2>
            <p className="text-forest-foreground/70 max-w-xl mx-auto mb-10 text-lg">
              Get a customized export quote in under 24 hours.
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

export default TestimonialsPage;
