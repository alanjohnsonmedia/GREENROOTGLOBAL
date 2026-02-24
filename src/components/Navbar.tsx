import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const anchorLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Certificates", href: "#certificates" },
  { label: "Logistics", href: "#logistics" },
];

const routeLinks = [
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navigate = useNavigate();
  const goToContact = () => navigate("/contact");

  const handleAnchorClick = (href: string) => {
    if (isHome) {
      document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/" + href;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-forest border-b border-forest/80">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <Link to="/" className="font-serif text-xl md:text-2xl font-black tracking-tight text-forest-foreground">
          GREENROOT GLOBAL
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {anchorLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleAnchorClick(link.href)}
              className="text-forest-foreground/80 hover:text-forest-foreground transition-colors text-sm font-medium story-link"
            >
              {link.label}
            </button>
          ))}
          {routeLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-forest-foreground/80 hover:text-forest-foreground transition-colors text-sm font-medium story-link"
            >
              {link.label}
            </Link>
          ))}
          <Button
            onClick={goToContact}
            className="bg-terracotta hover:bg-terracotta/90 text-terracotta-foreground font-semibold px-6"
          >
            Request Export Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-forest-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-forest border-t border-forest-foreground/10 px-4 pb-4">
          {anchorLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => { handleAnchorClick(link.href); setMobileOpen(false); }}
              className="block w-full text-left py-3 text-forest-foreground/80 hover:text-forest-foreground text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
          {routeLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-forest-foreground/80 hover:text-forest-foreground text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Button
            onClick={() => { goToContact(); setMobileOpen(false); }}
            className="w-full mt-2 bg-terracotta hover:bg-terracotta/90 text-terracotta-foreground font-semibold"
          >
            Request Export Quote
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
