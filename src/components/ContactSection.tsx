import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            Visite-nos
          </span>
          <h2 className="section-title text-foreground mt-4">
            ONDE <span className="text-gradient">ESTAMOS</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  R. Sagui, 359-291 - Vila A<br />
                  Foz do Iguaçu - PR, 85861-320
                </p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">Telefone</h3>
                <p className="text-muted-foreground">(45) 99147-2777</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">Horário</h3>
                <p className="text-muted-foreground">
                  Terça a Domingo<br />
                  18h às 23h
                </p>
              </div>
            </div>

            {/* Big CTA */}
            <a
              href="https://wa.me/5545991472777?text=Olá! Vim pelo site e gostaria de fazer um pedido! 🍔"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-5 rounded-xl bg-primary text-primary-foreground font-bold text-xl hover:scale-[1.02] transition-transform"
            >
              <MessageCircle className="w-7 h-7" />
              Fazer Pedido pelo WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="card-highlight overflow-hidden h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.1234567890!2d-54.5432!3d-25.5234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMxJzI0LjQiUyA1NMKwMzInMzUuNSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização 2 Brothers"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
