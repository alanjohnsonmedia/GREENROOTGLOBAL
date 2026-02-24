import { motion } from "framer-motion";
import { ShieldCheck, Award, FileCheck, Leaf } from "lucide-react";

const certificates = [
  {
    icon: ShieldCheck,
    title: "ISO 9001:2015",
    issuer: "International Organization for Standardization",
    desc: "Quality management systems certification ensuring consistent product quality and continuous improvement.",
    certNo: "ISO-QMS-2024-IN-87432",
  },
  {
    icon: Leaf,
    title: "USDA Organic",
    issuer: "United States Department of Agriculture",
    desc: "Certified organic products meeting USDA National Organic Program standards for international export.",
    certNo: "USDA-ORG-2024-5591",
  },
  {
    icon: Award,
    title: "FSSAI Certified",
    issuer: "Food Safety & Standards Authority of India",
    desc: "Compliance with Indian food safety regulations for organic fertilizer and agricultural by-products.",
    certNo: "FSSAI-10024031002847",
  },
  {
    icon: FileCheck,
    title: "Phytosanitary Certificate",
    issuer: "Directorate of Plant Protection, India",
    desc: "Export-grade phytosanitary clearance certifying products are free from pests and meet importing country standards.",
    certNo: "PHYTO-EXP-2024-RJ-1129",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Certificates = () => {
  return (
    <section id="certificates" className="bg-sage py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-sage-foreground mb-4">
            Our Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every shipment is backed by internationally recognized certifications ensuring quality, safety, and compliance.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.title}
              variants={item}
              whileHover={{ y: -4 }}
              className="bg-card rounded-xl shadow-sm border border-border p-6 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center mb-4">
                <cert.icon size={22} className="text-forest-foreground" />
              </div>
              <h3 className="font-serif text-lg font-bold text-card-foreground mb-1">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground font-medium mb-3">
                {cert.issuer}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {cert.desc}
              </p>
              <div className="bg-sage rounded-lg px-3 py-2 border border-border">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">
                  Certificate No.
                </p>
                <p className="text-xs font-mono text-sage-foreground font-medium">
                  {cert.certNo}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
