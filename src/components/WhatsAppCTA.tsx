import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppCTA = () => {
  return (
    <motion.a
      href="https://wa.me/919894851206?text=Hi%2C%20I%27m%20interested%20in%20your%20organic%20fertilizer%20products.%20Please%20share%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white font-semibold shadow-lg rounded-full px-5 py-4 text-sm transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={22} fill="white" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </motion.a>
  );
};

export default WhatsAppCTA;
