import { ArrowRight, Users, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Power your community with{" "}
            <span className="gold-gradient">strategy, structure,</span> and{" "}
            <span className="gold-gradient">dominance.</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ready to elevate your project? Whether you're looking to join forces 
            with Hunters DAO or seeking strategic partnership, the throne awaits.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 gold-glow shine-effect"
            >
              <Users className="w-5 h-5" />
              Join Hunters DAO
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary text-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-primary/10"
            >
              <MessageCircle className="w-5 h-5" />
              Work With Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
