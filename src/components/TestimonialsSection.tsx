import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    text: "Melhor smash burger de Foz! A carne é suculenta e o queijo derrete perfeitamente. Virei cliente fiel!",
    rating: 5,
  },
  {
    name: "Ana Paula",
    text: "Atendimento incrível e burger surreal. As fritas são viciantes! Recomendo demais.",
    rating: 5,
  },
  {
    name: "Ricardo S.",
    text: "Finalmente um burger que vale cada centavo. Qualidade nota 10, entrega rápida e sabor incomparável.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            Avaliações
          </span>
          <h2 className="section-title text-foreground mt-4">
            O QUE DIZEM <span className="text-gradient">NOSSOS CLIENTES</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
