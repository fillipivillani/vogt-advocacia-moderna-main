import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";
import team3 from "@/assets/team-3.png";
import team4 from "@/assets/team-4.png";
import team5 from "@/assets/team-5.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const teamMembers = [
  {
    name: "Dr. Jaime Antônio Miotto",
    role: "Sócio Fundador",
    specialties: ["Direito Tributário", "Direito Empresarial", "Direito Imobiliário"],
    image: team1,
    oab: "OAB/SC 8.672",
    additionalOabs: ["SP-172839-A", "PR-29852-A", "RS-49428-A", "MS-8196-A", "MT-6248-A", "PA-10569-A"],
    shortDescription: "MBA pela FGV em Direito da Empresa e da Economia. Atua em Direito Tributário e Empresarial desde 1998.",
    fullDescription: `Formado em 1993, pela UNOESC de Chapecó – SC. Possui MBA pela Fundação Getúlio Vargas, em Direito da Empresa e da Economia e em Direito Tributário.

Foi Procurador Geral dos Municípios de Guatambú, Planalto Alegre, Nova Itaberaba e Caxambú do Sul, no período de 1993 a 1997. Atua em Direito Tributário e Empresarial desde 1998, com atuação nos Estados de SP, PR, RS, MS, MT e PA. Com conhecimento e experiência em Direito Administrativo, Tributário e Empresarial, e, especialização em Imobiliário e Recuperação Judicial de Empresas.`,
  },
  {
    name: "Dr. Rafael Machado",
    role: "Advogado Parceiro",
    specialties: ["Direito Penal", "Direito Processual Penal", "Compliance"],
    image: team2,
    oab: "OAB/SC 47.231",
    credentials: ["Membro AACRIMESC", "Membro ABRACRIM-SC", "Conselheiro Titular Subseção Tijucas"],
    shortDescription: "Advogado Criminalista, Professor Universitário e Especialista em Direito Penal e Processual Penal.",
    fullDescription: `- Advogado Criminalista

- Membro do AACRIMESC

- Membro da ABRACRIM-SC

- Professor Universitário

- Conselheiro Titular da Subseção de Tijucas

- Pós-Graduando em Direito Penal, Anticorrupção e Compliance

- Especialista em Direito Penal e Processual Penal`,
  },
  {
    name: "Dr. Maximiliano Vogt",
    role: "Sócio-Proprietário",
    specialties: ["Direito Trabalhista", "Direito Previdenciário"],
    image: team3,
    oab: "OAB/SC",
    shortDescription: "Advogado graduado em Direito pela UNIVALI em 2017, pós-graduado em Direito Previdenciário.",
    fullDescription: `Advogado graduado em Direito pela Universidade do Vale do Itajaí (UNIVALI) em 2017 e pós-graduado em Direito Previdenciário, com sólida trajetória profissional marcada pela união entre excelência técnica e visão estratégica.

Atua como especialista em Direito Trabalhista e Previdenciário, com vasta experiência na defesa de direitos, elaboração de estratégias jurídicas e no assessoramento de empresas e clientes individuais. Sua carreira inclui a atuação como consultor jurídico na PSS Química (2012-2015), experiência que ampliou sua visão empresarial e de gestão de riscos legais. Atualmente, é responsável jurídico e chefe do departamento de estratégia e inteligência do Genética Group, onde exerce papel de liderança e planejamento estratégico.

Além disso, é sócio-proprietário da Vogt Advocacia, consolidando sua atuação autônoma e empreendedora. Sua experiência também abrange a área de segurança do trabalho e participação ativa em processos de licitação no Observatório Social de Itajaí, o que reforça seu perfil versátil e multidisciplinar.

Em constante busca por atualização, participou de cursos e congressos sobre Direito Processual Civil, métodos de solução de conflitos, Lei Maria da Penha, oratória forense, propriedade intelectual e Direito da Criança e do Adolescente. Essa dedicação ao aperfeiçoamento contínuo reflete seu compromisso em oferecer soluções jurídicas inovadoras, eficazes e personalizadas.

Reconhecido por sua capacidade de liderança, visão estratégica e profundo conhecimento nas áreas trabalhista e previdenciária, destaca-se como um profissional preparado para enfrentar desafios complexos e agregar valor tanto ao cliente individual quanto às organizações.`,
  },
  {
    name: "Dra. Gabriele Vogt",
    role: "Sócia-Proprietária",
    specialties: ["Direito Trabalhista", "Direito Civil", "Direito Tributário"],
    image: team4,
    oab: "OAB/SC",
    shortDescription: "Graduada em Matemática em 2010 e atualmente Advogada, sócia-proprietária da Vogt Advocacia.",
    fullDescription: `Graduada em Matemática em 2010 e atualmente Advogada, sócia-proprietária da Vogt Advocacia, construiu uma trajetória marcada pela precisão técnica e pela dedicação ao Direito. Sua primeira formação lhe conferiu rigor analítico e sólida base em cálculos, habilidade que hoje potencializa sua atuação em processos judiciais, especialmente na elaboração e conferência de cálculos trabalhistas e liquidações de sentença.

Com ampla experiência no Direito Trabalhista, atua de forma estratégica na condução de processos, assessorando empresas e clientes em demandas preventivas e contenciosas, sempre com foco na diminuição e prevenção de riscos judiciais. Além do trabalhista, presta assessoria jurídica nas áreas comercial, cível e tributária, oferecendo soluções que conciliam segurança jurídica e eficiência prática.

Sua atuação não se restringe à esfera técnica: exerce também papel de coordenação e gestão, sendo responsável por questões de recursos humanos, planejamento financeiro, organização e logística do escritório. Essa visão integrada reforça sua capacidade de aliar estratégia jurídica com gestão empresarial.

Possui formação complementar em cursos de destaque, como Realização de Cálculos Trabalhistas, Cálculo de Liquidação e Sentença, PJe-Calc, Reforma Trabalhista, Rescisão do Contrato de Trabalho, Auditoria Fiscal e Gestão de Riscos. Essa constante atualização reflete seu compromisso com a excelência e com a entrega de soluções jurídicas sólidas e inovadoras.

Hoje, é reconhecida como advogada dedicada e especializada, unindo experiência prática, domínio técnico e visão multidisciplinar, consolidando-se como referência no Direito Trabalhista e em áreas correlatas.`,
  },
  {
    name: "Dra. Tainá Fernanda Pedrini",
    role: "Advogada Parceira",
    specialties: ["Direito Constitucional", "Direito Tributário", "Direito Notarial"],
    image: team5,
    oab: "OAB/SC 52.237",
    shortDescription: "Advogada, Juíza Leiga, Coordenadora do Curso de Direito e Professora Universitária.",
    fullDescription: `Advogada. Juíza Leiga na Comarca do Continente, Florianópolis. Coordenadora do Curso de Direito, Uniasselvi, Brusque/SC. Coordenadora de Extensão e Iniciação Científica da Uniasselvi. Professora Universitária. Doutoranda em Ciência Jurídica pela Università degli Studi di Perugia/ITA e pela Universidade do Vale do Itajaí (UNIVALI). Mestre em Ciência Jurídica pela Widener University, Delaware Law School/EUA e pela UNIVALI. Pós-graduada em Direito Tributário pelo Instituto Brasileiro de Estudos Tributários (IBET), em Direito Constitucional pela Academia Brasileira de Direito Constitucional (ABDConst) e em Direito Notarial e Registral pela Faculdade Damásio. Graduada em Direito na UNIVALI, com Mérito Estudantil. Graduanda em Ciências Contábeis. Autora dos livros "Homicídio de Crianças Indígenas: Colonialidades e Direitos Fundamentais" e "Ecoeficiência: como a Sustentabilidade pode acrescer à atividade empresarial". Membro da Rede para o Constitucionalismo Democrático Latino-Americano e do Grupos de Estudos em Direito Tributário do IBET Florianópolis. Fundadora e Coordenadora do Paideia Accademia e do Voz & Elas.`,
  },
];

const Team = () => {
  return (
    <section id="equipe" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossa Equipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais qualificados e dedicados ao seu sucesso
          </p>
        </div>

        <div className="mb-16 max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {teamMembers.map((member, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-elegant transition-all duration-300 overflow-hidden border-border/50 h-full flex flex-col">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="relative overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{member.oab}</p>
                        {member.additionalOabs && (
                          <p className="text-xs text-muted-foreground mb-2">
                            Suplementares: {member.additionalOabs.join(", ")}
                          </p>
                        )}
                        <p className="text-accent font-semibold mb-3">{member.role}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {member.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                        {member.credentials && (
                          <div className="text-xs text-muted-foreground mb-4 space-y-1">
                            {member.credentials.map((credential, idx) => (
                              <p key={idx}>• {credential}</p>
                            ))}
                          </div>
                        )}
                        <p className="text-sm text-muted-foreground mb-4 flex-grow">{member.shortDescription}</p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="w-full">
                              Ler mais
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl mb-2">{member.name}</DialogTitle>
                              <p className="text-sm text-muted-foreground">{member.oab}</p>
                              {member.additionalOabs && (
                                <p className="text-xs text-muted-foreground mt-1">
                                  Suplementares: {member.additionalOabs.join(", ")}
                                </p>
                              )}
                              <p className="text-accent font-semibold mt-2">{member.role}</p>
                            </DialogHeader>
                            <div className="mt-4">
                              <div className="flex flex-wrap gap-2 mb-4">
                                {member.specialties.map((specialty, idx) => (
                                  <Badge key={idx} variant="secondary">
                                    {specialty}
                                  </Badge>
                                ))}
                              </div>
                              <div className="prose prose-sm max-w-none text-foreground whitespace-pre-line">
                                {member.fullDescription}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in">
          <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all">
            <div className="text-4xl font-bold text-accent mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Anos de Experiência</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all">
            <div className="text-4xl font-bold text-accent mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Profissionais</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all">
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Casos Resolvidos</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all">
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfação</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
