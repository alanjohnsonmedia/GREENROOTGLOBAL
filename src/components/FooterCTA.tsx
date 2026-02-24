import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FooterCTA = () => {
  const navigate = useNavigate();
  const goToContact = () => navigate("/contact");

  return (
    <footer id="quote" className="bg-forest py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-forest-foreground mb-6">
          Ready to order bulk organic fertilizer?
        </h2>
        <p className="text-forest-foreground/70 max-w-xl mx-auto mb-10 text-lg">
          Get a customized export quote in under 24 hours. We handle everything from sourcing to shipping.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              onClick={goToContact}
              size="lg"
              className="bg-terracotta hover:bg-terracotta/90 text-terracotta-foreground font-semibold text-lg px-12 py-7"
            >
              Request Export Quote
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              onClick={goToContact}
              size="lg"
              variant="outline"
              className="bg-transparent border-forest-foreground/50 text-forest-foreground hover:bg-forest-foreground/10 hover:text-forest-foreground font-semibold text-lg px-12 py-7"
            >
              Become a Distributor
            </Button>
          </motion.div>
        </div>

        <div className="border-t border-forest-foreground/10 pt-10 flex flex-col md:flex-row items-center justify-center gap-8 text-forest-foreground/60 text-sm">
          <a href="https://wa.me/919894851206" className="flex items-center gap-2 hover:text-forest-foreground transition-colors">
            <Phone size={16} /> +91 98948 51206
          </a>
          <a href="tel:+971567678499" className="flex items-center gap-2 hover:text-forest-foreground transition-colors">
            <Phone size={16} /> +971 56 767 8499 (UAE)
          </a>
          <a href="mailto:export@greenrootglobal.com" className="flex items-center gap-2 hover:text-forest-foreground transition-colors">
            <Mail size={16} /> export@greenrootglobal.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} /> Jaipur, Rajasthan, India
          </span>
        </div>

        <p className="text-forest-foreground/30 text-xs mt-8">
          © 2026 GreenRoot Global Ventures. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterCTA;
