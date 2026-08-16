import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  Send
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "batif7003@gmail.com",
      href: "mailto:batif7003@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+971 504529214",
      href: "https://wa.me/971504529214"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Abu Dhabi, UAE",
      href: null
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "muhammad-atif",
      href: "https://www.linkedin.com/in/muhammad-atif-ab34031a5/"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "ATIF2001",
      href: "https://github.com/ATIF2001/"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Web3Forms configuration with to_email to ensure delivery
    const web3FormsData = {
      access_key: "81da43d2-546b-4874-a61e-84fb338c14e9",
      to_email: "batif7003@gmail.com", // Ensures messages reach your Gmail
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      from_name: "Portfolio Contact Form",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(web3FormsData)
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        console.log("Web3Forms success:", result);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorMsg = result.message || "Failed to send message";
        console.error("Web3Forms error:", result);
        throw new Error(errorMsg);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      toast({
        title: "Error sending message",
        description: `${errorMessage}. Please try again or email me directly at batif7003@gmail.com`,
        variant: "destructive"
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-secondary relative">
      <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)", opacity: 0.5 }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  Whether you have a project in mind, need technical consultation, or want to explore 
                  collaboration opportunities, I'm always open to discussing how we can work together.
                </p>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
            
            {/* Contact Form */}
            <div className="glass-panel rounded-xl p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              
                <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden bot protection field */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="bg-background border-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="bg-background border-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className="bg-background border-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-background resize-none border-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
