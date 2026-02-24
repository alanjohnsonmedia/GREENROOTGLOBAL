import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImg from "@/assets/hero-illustration.png";

const badges = [
  { icon: ShieldCheck, label: "ISO Certified" },
  { icon: Leaf, label: "Eco-Friendly" },
  { icon: Globe, label: "Global Shipping" },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const goToContact = () => navigate("/contact");

  return (
    <section id="home" className="bg-forest pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-forest-foreground leading-tight mb-6">
            Certified Organic Fertilizer Export from&nbsp;India.
          </h1>
          <p className="text-forest-foreground/80 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
            Natural and eco-friendly fertilizers that restore soil fertility, improve crop yield, and support long-term environmental sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={goToContact}
                size="lg"
                className="bg-terracotta hover:bg-terracotta/90 text-terracotta-foreground font-semibold text-lg px-10 py-6"
              >
                Request Export Quote
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-forest-foreground/50 text-forest-foreground hover:bg-forest-foreground/10 hover:text-forest-foreground font-semibold text-lg px-10 py-6"
              >
                <a href="https://wa.me/919894851206?text=Hi%2C%20I%27m%20interested%20in%20your%20organic%20fertilizer%20products." target="_blank" rel="noopener noreferrer">
                  Enquire on WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-10">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-forest-foreground/70">
                <Icon size={20} />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1 max-w-md md:max-w-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={heroImg}
            alt="Indian farmer holding organic cow dung compost with a desi cow"
            className="w-full h-auto rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
