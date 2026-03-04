import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import historyImage from "@/assets/history-intro.jpg";

const History = () => {
  const navigate = useNavigate();

  return (
    <section id="historia" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={historyImage}
                  alt="História da Advocacia Vogt"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Vogt Advocacia está sediada na cidade de Itajaí, no estado de Santa Catarina, e atua com dedicação e comprometimento no atendimento de clientes de todo o Brasil. Mais do que um escritório de advocacia, a Vogt se consolida como uma parceira estratégica de seus clientes, oferecendo suporte jurídico personalizado, eficiente e de alta qualidade.
                </p>
                <p className="text-lg">
                  Desde sua fundação, o escritório tem como propósito oferecer soluções jurídicas que unam técnica, experiência e sensibilidade, compreendendo que cada cliente e cada caso possuem particularidades únicas. Essa abordagem individualizada permite à Vogt Advocacia construir estratégias sob medida, sempre orientadas pela ética, pela transparência e pela busca incessante dos melhores resultados.
                </p>
              </div>

              <Button
                size="lg"
                variant="accent"
                onClick={() => navigate("/nossa-historia")}
                className="mt-8 group"
              >
                Conheça Nossa História Completa
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
