import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import office1 from "@/assets/office-1.png";
import office2 from "@/assets/office-2.png";
import office3 from "@/assets/office-3.png";
import office4 from "@/assets/office-4.png";
import office5 from "@/assets/office-5.png";

const officeImages = [
  { src: office1, alt: "Escritório Vogt Advocacia - Sala principal" },
  { src: office2, alt: "Escritório Vogt Advocacia - Área de atendimento" },
  { src: office3, alt: "Escritório Vogt Advocacia - Sala de recepção" },
  { src: office4, alt: "Escritório Vogt Advocacia - Ambiente de trabalho" },
  { src: office5, alt: "Escritório Vogt Advocacia - Vista geral" },
];

const Office = () => {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">Nosso Escritório</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça nosso espaço moderno e acolhedor, preparado para oferecer o melhor atendimento aos nossos clientes
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {officeImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Office;
