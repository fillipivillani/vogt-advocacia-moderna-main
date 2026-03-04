import { Button } from "@/components/ui/button";
import { ArrowLeft, Scale } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import historyImage from "@/assets/history-intro.jpg";

const OurHistory = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar ao Início
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
                <Scale className="w-5 h-5 text-accent" />
                <span className="text-accent font-semibold">Nossa Trajetória</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                A História da Advocacia Vogt
              </h1>
              <p className="text-xl text-muted-foreground">
                Uma jornada de compromisso, excelência e transformação
              </p>
            </div>

            <div className="mb-12 animate-fade-in">
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={historyImage}
                  alt="História da Advocacia Vogt"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="space-y-8 text-muted-foreground leading-relaxed animate-fade-in">
              <p className="text-lg">
                Vogt Advocacia está sediada na cidade de Itajaí, no estado de Santa Catarina, e atua com dedicação e comprometimento no atendimento de clientes de todo o Brasil. Mais do que um escritório de advocacia, a Vogt se consolida como uma parceira estratégica de seus clientes, oferecendo suporte jurídico personalizado, eficiente e de alta qualidade.
              </p>

              <p className="text-lg">
                Desde sua fundação, o escritório tem como propósito oferecer soluções jurídicas que unam técnica, experiência e sensibilidade, compreendendo que cada cliente e cada caso possuem particularidades únicas. Essa abordagem individualizada permite à Vogt Advocacia construir estratégias sob medida, sempre orientadas pela ética, pela transparência e pela busca incessante dos melhores resultados.
              </p>

              <p className="text-lg">
                O escritório atende tanto pessoas físicas quanto empresários de diversos segmentos econômicos, assessorando clientes nas mais variadas áreas do Direito. Essa diversidade de atuação reforça o compromisso da Vogt Advocacia em oferecer um serviço completo, moderno e alinhado às necessidades do mercado e às constantes transformações sociais e jurídicas.
              </p>

              <p className="text-lg">
                A missão da Vogt Advocacia é prestar serviços jurídicos de excelência, pautados pela ética, pela responsabilidade e pela busca contínua da inovação. O escritório acredita que o exercício da advocacia vai além da simples aplicação da lei — trata-se de compreender o contexto humano, empresarial e social que envolve cada demanda, a fim de oferecer soluções eficazes, sustentáveis e seguras.
              </p>

              <p className="text-lg">
                Com uma equipe comprometida com o aprimoramento constante e o atendimento próximo e humanizado, a Vogt Advocacia se diferencia por unir tradição e modernidade, técnica e sensibilidade, construindo relacionamentos duradouros baseados na confiança e na credibilidade.
              </p>
            </div>

            <div className="mt-12 text-center animate-fade-in">
              <Button
                size="lg"
                variant="accent"
                onClick={() => navigate("/")}
                className="group"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Voltar à Página Inicial
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurHistory;
