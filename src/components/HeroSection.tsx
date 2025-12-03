import { ChevronDown } from "lucide-react";
import heroBurger from "@/assets/hero-burger.jpg";
import logo from "@/assets/logo.jpg";

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
        <div className="animate-fade-up">
          <img
            src={logo}
            alt="2 Brothers Logo"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full shadow-2xl"
          />
        </div>

        <h1 className="animate-fade-up-delay-1 section-title text-foreground mb-4">
          BURGERS <span className="text-gradient">&</span> FRIES
        </h1>

        <p className="animate-fade-up-delay-2 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Dois irmãos, uma paixão: criar o melhor smash burger de Foz do Iguaçu desde 2020.
        </p>

        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/5545991472777?text=Olá! Vim pelo site e gostaria de fazer um pedido! 🍔"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            🍔 Peça Agora
          </a>
          <a
            href="https://share.google/UI2GmIBdLhMwnhHy1"
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
