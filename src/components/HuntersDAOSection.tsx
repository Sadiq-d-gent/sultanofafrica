import { Crown, Users, Target, Rocket } from "lucide-react";

export function HuntersDAOSection() {
  return (
    <section id="hunters-dao" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Royal divider top */}
        <div className="royal-divider max-w-lg mx-auto mb-16" />

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - DAO Icon & Info */}
            <div className="text-center lg:text-left">
              {/* DAO Logo/Icon */}
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 mb-8 gold-glow">
                <Crown className="w-12 h-12 text-primary" />
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                <span className="gold-gradient">Hunters DAO</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A community-driven DAO focused on growth, raids, and influence 
                across Web3 ecosystems. We hunt opportunities, coordinate with 
                precision, and build lasting power together.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 gold-glow shine-effect"
              >
                <Users className="w-5 h-5" />
                Join the Hunt
              </a>
            </div>

            {/* Right - Features */}
            <div className="space-y-6">
              {[
                {
                  icon: Target,
                  title: "Strategic Raids",
                  description: "Coordinated community actions that amplify project visibility.",
                },
                {
                  icon: Rocket,
                  title: "Growth Missions",
                  description: "Organized campaigns designed to maximize engagement and reach.",
                },
                {
                  icon: Crown,
                  title: "Elite Network",
                  description: "Connect with top operators, KOLs, and builders in Web3.",
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-5 bg-card rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150 + 400}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Royal divider bottom */}
        <div className="royal-divider max-w-lg mx-auto mt-16" />
      </div>
    </section>
  );
}
