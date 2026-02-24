import { motion } from "framer-motion";
import { ClipboardList, SearchCheck, Package, Ship } from "lucide-react";

const steps = [
  { icon: ClipboardList, label: "Order Placed", desc: "Submit your export requirements and quantities." },
  { icon: SearchCheck, label: "Quality Check", desc: "Every batch tested for organic certification." },
  { icon: Package, label: "Packaging", desc: "Export-grade packaging with fumigation compliance." },
  { icon: Ship, label: "Global Shipping", desc: "Door-to-port delivery via trusted logistics partners." },
];

const LogisticsTimeline = () => (
  <section id="logistics" className="bg-background py-20 md:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
          Our Export Process
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A streamlined, transparent process from order to delivery.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="mx-auto w-16 h-16 rounded-full bg-forest flex items-center justify-center mb-4">
              <step.icon className="text-forest-foreground" size={28} />
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xs font-bold bg-sage text-sage-foreground w-6 h-6 rounded-full flex items-center justify-center">
                {i + 1}
              </span>
              <h3 className="font-serif text-lg font-bold text-foreground">{step.label}</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LogisticsTimeline;
