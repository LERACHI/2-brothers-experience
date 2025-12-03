import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const MENU_URL = "https://anota.ai/home/funcionalidade/cardapio-digital/";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Nossa História", href: "#historia" },
  { label: "Destaques", href: "#destaques" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "nav-blur py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToSection("inicio")}
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full"
        >
          <img
            src={logo}
            alt="2 Brothers"
            className="h-12 w-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-110 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] group-focus-visible:scale-110 group-focus-visible:brightness-110 group-focus-visible:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]"
          />
          <span className="font-display text-2xl tracking-wider text-foreground hidden sm:block">
            2 BROTHERS
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => scrollToSection(item.href.replace("#", ""))}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.label}
            </button>
          ))}
          <a
            href={MENU_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform"
          >
            Ver Cardápio
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden nav-blur border-t border-border mt-3">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                className="text-foreground hover:text-primary transition-colors py-2 text-lg text-left"
                onClick={() => {
                  scrollToSection(item.href.replace("#", ""));
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
            <a
              href={MENU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-center mt-2"
            >
              Ver Cardápio
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
