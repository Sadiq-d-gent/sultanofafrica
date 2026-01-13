import { Crown } from "lucide-react";
import { TypewriterText } from "./TypewriterText";
import sultanAvatar from "@/assets/sultan-avatar.png";

const skills = ["Pro Raider", "Growth Manager", "Marketer", "KOL"];

export function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <Crown className="w-10 h-10 text-primary mb-6 mx-auto lg:mx-0" />
            </div>
            
            <h1 
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <span className="gold-gradient">Sultan of Africa</span>
            </h1>
            
            <p 
              className="text-xl md:text-2xl text-muted-foreground mb-6 font-sans animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              Founder of <span className="text-primary font-semibold">Hunters DAO</span>
            </p>
            
            <div 
              className="text-lg md:text-xl font-sans mb-10 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <TypewriterText words={skills} />
            </div>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "500ms" }}
            >
              <a
                href="#hunters-dao"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 gold-glow shine-effect"
              >
                Join Hunters DAO
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-primary text-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-primary/10"
              >
                Work With Me
              </a>
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Glow aura */}
              <div className="absolute inset-0 -m-8 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-3xl animate-pulse-glow" />
              
              {/* Crown icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 animate-float" style={{ animationDelay: "-2s" }}>
                <Crown className="w-14 h-14 text-primary drop-shadow-lg" fill="currentColor" />
              </div>
              
              {/* Avatar */}
              <div className="relative animate-float">
                <img
                  src="sultan.jpg"
                  alt="Sultan of Africa - Royal Avatar"
                  className="w-72 h-auto md:w-96 rounded-2xl shadow-2xl gold-glow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
          <div className="w-2 h-2 bg-primary rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
}
