import { Badge } from "@/components/ui/badge";
import Reveal from "./Reveal";
import { 
  Code, 
  Layers, 
  Database, 
  Cloud, 
  Workflow, 
  Wrench,
  Sparkles
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["TypeScript", "JavaScript/ES6+", "Python", "PHP", "SQL", "HTML5", "CSS3"],
      color: "primary"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-5 h-5" />,
      skills: ["Next.js", "React.js", "Node.js", "Express.js", "Django", "Laravel"],
      color: "primary"
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Supabase"],
      color: "primary"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-5 h-5" />,
      skills: ["AWS", "AWS S3", "Docker", "Git", "GitHub", "CI/CD"],
      color: "primary"
    },
    {
      title: "Low-Code & Automation",
      icon: <Workflow className="w-5 h-5" />,
      skills: ["WeWeb", "WordPress", "Bubble.io", "Xano", "n8n", "Make.com", "Zapier"],
      color: "primary"
    },
    {
      title: "Other Expertise",
      icon: <Wrench className="w-5 h-5" />,
      skills: [
        "SaaS Development",
        "API Design & Integration",
        "Workflow Automation",
        "CRM Systems",
        "RAG-based AI Applications",
        "Testing & Debugging"
      ],
      color: "primary"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-secondary relative">
      <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)", opacity: 0.5 }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning modern web development, cloud technologies, and automation platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skillCategories.map((category, index) => (
              <Reveal key={index} variant="up" delay={(index % 3) * 120} className="h-full">
              <div 
                className="group h-full bg-card border border-border rounded-xl p-6 hover-lift gradient-ring shine"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-primary/20 hover:text-primary border-border hover:border-primary/50 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              </Reveal>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Always eager to learn and adapt to new technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;