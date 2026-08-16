import { lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, ChevronDown, Code2, Terminal, Cpu } from "lucide-react";

const Web3Visual = lazy(() => import("./Web3Visual"));

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-secondary" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)" }} />
      
      {/* Web3 Blockchain Visual */}
      <Suspense fallback={null}>
        <Web3Visual />
      </Suspense>
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      {/* Floating tech icons */}
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: "0.5s" }}>
        <div className="p-3 bg-primary/10 backdrop-blur-sm rounded-lg border border-primary/20">
          <Code2 className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="p-3 bg-accent/10 backdrop-blur-sm rounded-lg border border-accent/20">
          <Terminal className="w-6 h-6 text-accent" />
        </div>
      </div>
      <div className="absolute top-1/2 right-40 animate-float" style={{ animationDelay: "2s" }}>
        <div className="p-3 bg-primary/10 backdrop-blur-sm rounded-lg border border-primary/20">
          <Cpu className="w-6 h-6 text-primary" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-up [animation-fill-mode:backwards]">
            Your Vision, <span className="text-gradient-animated">Fully Built</span>
          </h1>
          
          <h2 className="text-lg sm:text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-up [animation-fill-mode:backwards]" style={{ animationDelay: "0.2s" }}>
            Frontend Expert | Full Stack Developer | AI Integration Specialist
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-2 animate-fade-up [animation-fill-mode:backwards]" style={{ animationDelay: "0.3s" }}>
            I craft high-performance frontend experiences, build complete full-stack products, 
            and integrate AI to deliver intelligent, scalable solutions end-to-end.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 px-2">
            {["TypeScript", "JavaScript", "React", "Node.js", "AWS", "PostgreSQL", "Laravel", "MongoDB", "Python", "WeWeb", "Xano", "n8n", "Make.com", "OpenAI", "Supabase"].map((tech, i) => (
              <span 
                key={tech}
                style={{ animationDelay: `${0.4 + i * 0.05}s` }}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 border border-primary/30 rounded-full text-xs sm:text-sm font-medium text-primary animate-scale-in [animation-fill-mode:backwards] transition-all duration-300 hover:scale-110 hover:bg-primary/20 hover:border-primary hover:shadow-glow cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up [animation-fill-mode:backwards]" style={{ animationDelay: "1.2s" }}>
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8"
              onClick={() => scrollToSection("contact")}
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Let's Work Together
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={() => scrollToSection("about")}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;