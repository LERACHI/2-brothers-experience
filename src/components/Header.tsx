import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Nossa História", href: "#historia" },
    { label: "Destaques", href: "#destaques" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "nav-blur py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="2 Brothers" className="h-12 w-12 rounded-full object-cover" />
          <span className="font-display text-2xl tracking-wider text-foreground hidden sm:block">
            2 BROTHERS
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://share.google/UI2GmIBdLhMwnhHy1"
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
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors py-2 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://share.google/UI2GmIBdLhMwnhHy1"
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
