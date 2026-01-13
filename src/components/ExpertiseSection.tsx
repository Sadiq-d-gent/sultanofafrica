import { Target, TrendingUp, Megaphone, Star } from "lucide-react";

const expertise = [
  {
    icon: Target,
    title: "Pro Raider",
    description: "Strategic coordination and execution of community raids across Web3 ecosystems.",
  },
  {
    icon: TrendingUp,
    title: "Growth Manager",
    description: "Scaling communities from zero to thousands with proven growth frameworks.",
  },
  {
    icon: Megaphone,
    title: "Marketer",
    description: "Crafting narratives that resonate and convert in the decentralized space.",
  },
  {
    icon: Star,
    title: "KOL",
    description: "Influential voice trusted by protocols and communities alike.",
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-gradient">Expertise</span>
          </h2>
          <div className="royal-divider max-w-xs mx-auto" />
        </div>

        {/* Expertise cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <div
              key={item.title}
              className="group relative p-6 bg-card rounded-xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 shine-effect animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br-xl" />

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
