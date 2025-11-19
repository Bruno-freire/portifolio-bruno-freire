import { Code2, Rocket, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Código Limpo",
      description: "Escrevo código maintível e escalável seguindo as melhores práticas",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Otimizo aplicações para máxima velocidade e eficiência",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Sempre buscando novas tecnologias e soluções criativas",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre <span className="text-primary">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Profile image */}
            <div className="flex justify-center animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-full blur-2xl opacity-30" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* About text */}
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou um desenvolvedor apaixonado por criar soluções tecnológicas
                que fazem a diferença. Com experiência em desenvolvimento
                Full Stack, trabalho com as mais modernas tecnologias do
                mercado.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Meu foco está em construir aplicações web robustas, escaláveis
                e com excelente experiência do usuário. Adoro aprender novas
                tecnologias e enfrentar desafios complexos.
              </p>

              {/* Highlights */}
              <div className="grid gap-4 pt-4">
                {highlights.map((item, index) => (
                  <Card
                    key={index}
                    className="p-4 border-border hover:border-primary transition-colors duration-300 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent rounded-lg">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
