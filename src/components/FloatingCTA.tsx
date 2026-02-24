import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FloatingCTA = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        onClick={() => navigate("/contact")}
        className="bg-terracotta hover:bg-terracotta/90 text-terracotta-foreground font-semibold shadow-lg rounded-full px-6 py-6 text-sm"
      >
        Get Quote
      </Button>
    </div>
  );
};

export default FloatingCTA;
