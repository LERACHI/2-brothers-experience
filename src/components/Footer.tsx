import logo from "@/assets/logo.jpg";
import { Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="group flex items-center gap-3">
            <img
              src={logo}
              alt="2 Brothers"
              className="w-10 h-10 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:brightness-110 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]"
            />
            <span className="font-display text-xl text-foreground">2 BROTHERS</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/2brothersfoz/photos?locale=pt_BR"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm text-center">
              © 2024 2 Brothers. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
