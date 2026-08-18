import { Badge } from "@/components/ui/badge";
import Reveal from "./Reveal";
import logoReact from "@/assets/tech/react.svg";
import logoNode from "@/assets/tech/nodedotjs.svg";
import logoMongo from "@/assets/tech/mongodb.svg";
import logoPostgres from "@/assets/tech/postgresql.svg";
import logoPython from "@/assets/tech/python.svg";
import logoXano from "@/assets/tech/xano.png";
import logoN8n from "@/assets/tech/n8n.svg";
import logoMake from "@/assets/tech/make.svg";
import logoOpenAI from "@/assets/tech/openai.svg";
import logoBubble from "@/assets/tech/bubble.png";
import logoWeWeb from "@/assets/tech/weweb.png";
import logoAWS from "@/assets/tech/amazonwebservices.svg";
import logoDocker from "@/assets/tech/docker.svg";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  Code2, 
  Workflow, 
  Bot, 
  Globe, 
  Zap,
  ArrowRight,
  CheckCircle2,
  Users
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "End-to-end web applications using MERN stack, Django, Laravel, and modern frameworks.",
      features: ["React.js & Node.js", "MongoDB & PostgreSQL", "REST APIs", "Responsive Design"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Workflow Automation",
      description: "Streamline your business processes with powerful automation tools.",
      features: ["n8n Workflows", "Make.com Scenarios", "Zapier Integrations", "Custom APIs"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Integration",
      description: "Leverage AI to enhance your applications with intelligent features.",
      features: ["OpenAI & LangChain", "RAG Chatbots", "AI Automation", "Custom AI Solutions"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Low-Code Solutions",
      description: "Rapid development using powerful no-code/low-code platforms.",
      features: ["Bubble.io Apps", "WeWeb & Xano", "WordPress/WooCommerce", "Webflow Sites"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "0 to 1 Product Development",
      description: "Transform your idea into a fully functional product ready for launch.",
      features: ["MVP Development", "SaaS Platforms", "Scalable Architecture", "Launch Support"],
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Deployment & DevOps",
      description: "Get your applications live with proper infrastructure and CI/CD.",
      features: ["AWS Deployment", "Docker Containers", "CI/CD Pipelines", "Performance Optimization"],
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  const techLogos = [
    { name: "React", logo: logoReact },
    { name: "Node.js", logo: logoNode },
    { name: "MongoDB", logo: logoMongo },
    { name: "PostgreSQL", logo: logoPostgres },
    { name: "Python", logo: logoPython },
    { name: "Xano", logo: logoXano },
    { name: "n8n", logo: logoN8n },
    { name: "Make.com", logo: logoMake },
    { name: "OpenAI", logo: logoOpenAI },
    { name: "Bubble.io", logo: logoBubble },
    { name: "WeWeb", logo: logoWeWeb },
    { name: "AWS", logo: logoAWS },
    { name: "Docker", logo: logoDocker }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-gradient-secondary relative">
      <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)", opacity: 0.3 }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              What I Offer
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Services That <span className="text-primary">Drive Results</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, I deliver complete solutions that help your business grow
            </p>
          </div>

          {/* Tech Stack Carousel */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-3">
              {techLogos.map((tech, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <span className="text-xl">{tech.icon}</span>
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {services.map((service, index) => (
              <Reveal key={index} variant="up" delay={(index % 3) * 120} className="h-full">
              <div 
                className="group h-full bg-card border border-border rounded-xl p-6 hover-lift gradient-ring shine"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center p-6 bg-card border border-primary/30 rounded-2xl">
              <div className="text-left">
                <h3 className="text-xl font-bold mb-1">Ready to Build Something Great?</h3>
                <p className="text-muted-foreground text-sm">Let's discuss your project and bring your vision to life</p>
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                onClick={scrollToContact}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
