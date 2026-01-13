import { Shield, Users, Zap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Building influence, growth, and{" "}
              <span className="gold-gradient">power</span> in Web3 communities.
            </h2>
            <div className="royal-divider max-w-xs mx-auto mb-8" />
          </div>

          {/* Description */}
          <div className="text-center mb-16">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              As a strategic operator and DAO founder, I navigate the complex landscape of 
              decentralized communities with precision and purpose. My mission is to build 
              sustainable growth engines that empower projects to achieve lasting influence 
              in the Web3 ecosystem.
            </p>
          </div>

          {/* Value pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Authority",
                description: "Commanding respect through proven results and strategic leadership.",
              },
              {
                icon: Users,
                title: "Community",
                description: "Building tribes that rally behind a shared vision and mission.",
              },
              {
                icon: Zap,
                title: "Execution",
                description: "Moving fast with precision—strategies that deliver measurable impact.",
              },
            ].map((pillar, index) => (
              <div
                key={pillar.title}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 150 + 300}ms` }}
              >
                <div className="w-14 h-14 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto mb-4 bg-card">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
