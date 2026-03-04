import { Scale, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold">Advocacia Vogt</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Excelência em serviços jurídicos com compromisso, ética e dedicação aos nossos
              clientes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#especialidades" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#historia" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  História
                </a>
              </li>
              <li>
                <a href="#localizacao" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Localização
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Advocacia Vogt. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
