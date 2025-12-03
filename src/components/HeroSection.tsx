import { ChevronDown } from "lucide-react";
import heroBurger from "@/assets/hero-burger.jpg";

const MENU_URL = "https://anota.ai/home/funcionalidade/cardapio-digital/";

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBurger}
          alt="Burger artesanal 2 Brothers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="animate-fade-up-delay-1 section-title text-foreground mb-4">
          BURGERS <span className="text-gradient">&</span> FRIES
        </h1>

        <p className="animate-fade-up-delay-2 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
          2 BROTHERS, uma paixão: criar o melhor smash burger de Foz do Iguaçu desde 2020.
        </p>

        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={MENU_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            🍔 Peça Agora
          </a>
          <a
            href={MENU_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border-2 border-foreground/30 text-foreground font-semibold hover:border-primary hover:text-primary transition-all"
          >
            Ver Cardápio
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#historia"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
        aria-label="Scroll para baixo"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};
