import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Briefcase, Home, Users, Building2, FileText } from "lucide-react";

const specialties = [
  {
    icon: Scale,
    title: "Direito Civil",
    description: "Atuação completa em questões civis, contratos e responsabilidade civil.",
  },
  {
    icon: Briefcase,
    title: "Direito Empresarial",
    description: "Assessoria jurídica empresarial, contratos comerciais e governança corporativa.",
  },
  {
    icon: Home,
    title: "Direito Imobiliário",
    description: "Especialização em transações imobiliárias, locações e regularizações.",
  },
  {
    icon: Users,
    title: "Direito de Família",
    description: "Suporte em questões familiares com sensibilidade e profissionalismo.",
  },
  {
    icon: Building2,
    title: "Direito Trabalhista",
    description: "Defesa de direitos trabalhistas para empregados e empregadores.",
  },
  {
    icon: FileText,
    title: "Direito Previdenciário",
    description: "Orientação completa em questões previdenciárias e benefícios.",
  },
];

const Specialties = () => {
  return (
    <section id="especialidades" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossas Especialidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos serviços jurídicos especializados em diversas áreas do direito
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <specialty.icon className="w-7 h-7 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {specialty.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {specialty.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
