import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Empresário",
    content: "Excelente atendimento! A equipe da Advocacia Vogt resolveu meu caso empresarial com muita competência e profissionalismo. Recomendo fortemente!",
    rating: 5,
  },
  {
    name: "Ana Paula Mendes",
    role: "Professora",
    content: "Fui muito bem atendida em uma questão familiar delicada. A Dra. Juliana foi extremamente sensível e profissional durante todo o processo.",
    rating: 5,
  },
  {
    name: "Roberto Santos",
    role: "Comerciante",
    content: "Precisava resolver uma questão trabalhista complexa e o Dr. Felipe foi excepcional. Resultado além das expectativas!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A confiança e satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-accent/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;