import { motion } from "framer-motion";
import { Leaf, Sprout, Bone } from "lucide-react";

const specializations = [
  {
    icon: Sprout,
    title: "Earthworm (Vermicompost) Fertilizer",
    desc: "Enhances soil structure, microbial activity, and nutrient absorption.",
  },
  {
    icon: Bone,
    title: "Bone Meal",
    desc: "A natural source of phosphorus and calcium for strong roots and flowering.",
  },
  {
    icon: Leaf,
    title: "Cow Dung Manure",
    desc: "Improves soil fertility and organic matter for sustainable crop growth.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-sage py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-sage-foreground mb-6">
            About GreenRoot Global Ventures
          </h2>
          <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-4 text-left">
            <p>
              GreenRoot Global Ventures was founded with a strong commitment to sustainable and organic agriculture. After years in the corporate sector, our founder felt a deeper purpose in promoting eco-friendly farming and soil regeneration.
            </p>
            <p>
              With the guidance of experienced traditional farmers, the company was built to transform modern agriculture by replacing chemical fertilizers with natural, organic, and sustainable alternatives.
            </p>
            <p className="font-semibold text-sage-foreground">
              We believe healthy soil is the foundation of healthy crops.
            </p>
            <p>Our mission is to provide natural and eco-friendly fertilizers that:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Restore soil fertility</li>
              <li>Improve crop yield naturally</li>
              <li>Enable chemical-free cultivation</li>
              <li>Support long-term environmental sustainability</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {specializations.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center mx-auto mb-4">
                <Icon size={22} className="text-forest-foreground" />
              </div>
              <h3 className="font-serif text-lg font-bold text-card-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-sage-foreground font-semibold text-base md:text-lg mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          We are not just supplying fertilizers — we are building a future rooted in sustainable farming and environmental responsibility.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
