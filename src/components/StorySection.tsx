import bastidores from "@/assets/bastidores.jpg";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const StorySection = () => {
  return (
    <section id="historia" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="card-highlight overflow-hidden">
              <img
                src={bastidores}
                alt="2 BROTHERS preparando burgers na cozinha"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-display text-2xl">
              DESDE 2020
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">
              Nossa História
            </span>
            <h2 className="section-title text-foreground">
              2 BROTHERS,<br />
              <span className="text-gradient">UMA PAIXÃO</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Em 2020, 2 BROTHERS decidiram transformar uma paixão em realidade. 
                O sonho? Criar o smash burger perfeito em Foz do Iguaçu.
              </p>
              <p>
                Nascido no coração da Vila A, o <strong className="text-foreground">2 Brothers</strong> rapidamente 
                conquistou paladares exigentes com carne 100% bovina, queijo derretido 
                na medida e pães artesanais fresquinhos.
              </p>
              <p>
                Cada burger é preparado com amor, cuidado e a receita secreta 
                que só 2 BROTHERS podem compartilhar.
              </p>
            </div>
            <button
              type="button"
              onClick={() => scrollToSection("destaques")}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
            >
              Conheça nossos destaques →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
