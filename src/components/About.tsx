import { Code2, Rocket, Users, Target } from "lucide-react";
import profileImg from "@/assets/profile-new.png";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full Stack Expertise",
      description: "Proficient in both frontend and backend technologies"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation Driven",
      description: "Always exploring cutting-edge technologies and solutions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative",
      description: "Strong team player with excellent communication skills"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results Focused",
      description: "Committed to delivering high-quality, impactful solutions"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>
          
          {/* Profile Image - Now at the top */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 w-64 h-64">
                <img 
                  src={profileImg} 
                  alt="Muhammad Atif"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </div>

          {/* Text Content - Now below the image */}
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Developer with a proven track record of building scalable web applications 
              and implementing intelligent automation solutions. With expertise spanning from traditional web development 
              to cutting-edge low-code platforms and AI integrations, I bring a unique blend of technical depth and 
              practical problem-solving skills.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in software engineering has equipped me with proficiency in JavaScript ecosystems (React, Node.js), 
              Python frameworks (Django), and modern DevOps practices. I specialize in creating seamless API integrations, 
              workflow automations, and SaaS solutions that drive measurable business growth.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              What sets me apart is my adaptability and eagerness to embrace new technologies. Whether it's implementing 
              RAG-based AI applications, optimizing CRM systems, or architecting complex automation workflows with tools 
              like n8n and Make.com, I thrive on turning challenging requirements into elegant, efficient solutions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="group p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-gradient-secondary rounded-2xl border border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">30%</div>
                <div className="text-sm text-muted-foreground">Revenue Growth Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;