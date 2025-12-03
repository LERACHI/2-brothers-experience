import burger1 from "@/assets/burger-1.jpg";
import fries from "@/assets/fries.jpg";
import heroBurger from "@/assets/hero-burger.jpg";

const MENU_URL = "https://anota.ai/home/funcionalidade/cardapio-digital/";

const highlights = [
  {
    title: "Smash Clássico",
    description: "Blend bovino, queijo cheddar, cebola caramelizada e molho especial",
    image: burger1,
    badge: "Mais Pedido",
  },
  {
    title: "Bacon Crispy",
    description: "Duplo blend, bacon crocante, queijo americano e alface fresca",
    image: heroBurger,
    badge: "Favorito",
  },
  {
    title: "Fritas Especiais",
    description: "Crocantes por fora, macias por dentro, com molhos artesanais",
    image: fries,
    badge: "Combo",
  },
];

export const HighlightsSection = () => {
  return (
    <section id="destaques" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            O Melhor de Foz
          </span>
          <h2 className="section-title text-foreground mt-4">
            NOSSOS <span className="text-gradient">DESTAQUES</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="card-highlight group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {item.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={MENU_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform"
          >
            📋 Ver Cardápio Completo
          </a>
        </div>
      </div>
    </section>
  );
};
