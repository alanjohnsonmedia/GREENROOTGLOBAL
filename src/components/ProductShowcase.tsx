import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import productCowdung from "@/assets/product-cowdung-new.png";
import productVermi from "@/assets/product-vermicompost-new.png";
import productBonemeal from "@/assets/product-bonemeal.png";

const WHATSAPP_URL = "https://wa.me/919894851206?text=Hi%2C%20I%27m%20interested%20in%20your%20organic%20fertilizer%20products.%20Please%20share%20details.";

const products = [
  {
    title: "Cow Dung Manure",
    desc: "Rich in NPK and beneficial microbes. Improves soil texture and water retention. Balances soil pH. 100% natural and chemical-free. Suitable for farms, gardens and plantations.",
    moq: "MOQ: 1 Ton",
    img: productCowdung,
  },
  {
    title: "Earthworm Organic (Vermicompost)",
    desc: "Improves aeration and soil structure. Boosts root growth and nutrient absorption. Enhances plant immunity. Increases yield naturally. Ideal for organic farming.",
    moq: "MOQ: 2 Tons",
    img: productVermi,
  },
  {
    title: "Bone Meal Organic",
    desc: "High in phosphorus and calcium. Strong root development. Better flowering and fruiting. Strengthens plant structure. Slow-release for long-term fertility.",
    moq: "MOQ: 5 Tons",
    img: productBonemeal,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProductShowcase = () => {
  const navigate = useNavigate();

  return (
    <section id="products" className="bg-sage py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-sage-foreground mb-4">
            Our Export Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Premium quality, certified organic fertilizer products sourced directly from Indian farms.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {products.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              whileHover={{ y: -4 }}
              className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-square bg-sage flex items-center justify-center p-8">
                <img src={p.img} alt={p.title} className="max-h-56 object-contain" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-card-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{p.desc}</p>
                <span className="inline-block text-xs font-semibold bg-sage text-sage-foreground px-3 py-1 rounded-full mb-4">
                  {p.moq}
                </span>
                <div className="flex flex-col gap-2">
                  <Button
                    asChild
                    className="w-full bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white font-semibold"
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      Enquire on WhatsApp
                    </a>
                  </Button>
                  <Button
                    onClick={() => navigate("/contact")}
                    variant="outline"
                    className="w-full border-forest text-forest hover:bg-forest hover:text-forest-foreground font-semibold"
                  >
                    Request Bulk Order
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
