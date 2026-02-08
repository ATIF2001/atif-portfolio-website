import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, Sparkles, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    challenge: string;
    solution: string;
    impact: string;
    tools: string[];
    category: string;
    images?: string[];
    liveUrl?: string;
    githubUrl?: string;
  };
  onTitleClick: (project: any) => void;
}

const ProjectCard = ({ project, onTitleClick }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images || [];
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Project Image with slider */}
      <div className="relative h-56 bg-gradient-secondary overflow-hidden">
        {images.length > 0 ? (
          <>
            <img 
              src={images[currentImageIndex]} 
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
            
            {/* Image Navigation */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background/90 transition-all opacity-0 group-hover:opacity-100 z-10"
                  aria-label="Previous image"
                  type="button"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background/90 transition-all opacity-0 group-hover:opacity-100 z-10"
                  aria-label="Next image"
                  type="button"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                
                {/* Image Indicators */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        index === currentImageIndex 
                          ? 'bg-primary w-4' 
                          : 'bg-primary/30 hover:bg-primary/50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                      type="button"
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 bg-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">{project.category}</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-background/95 backdrop-blur-md border-primary/30 px-3 py-1">
            <span className="text-xs font-medium">{project.category}</span>
          </Badge>
        </div>
        
        {/* Impact Indicator */}
        {project.impact.includes("%") && (
          <div className="absolute top-4 right-4">
            <div className="bg-background/95 backdrop-blur-md rounded-full px-3 py-1 border border-primary/30 flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-primary" />
              <span className="text-xs font-bold text-primary">
                {project.impact.match(/\d+%/)?.[0] || "High Impact"}
              </span>
            </div>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="relative p-6 space-y-4 flex-1 flex flex-col">
        {/* Title and Description */}
        <div>
          <h3 
            className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 cursor-pointer"
            onClick={() => onTitleClick(project)}
          >
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
        
        {/* Mini Case Study */}
        <div className="space-y-3 py-3 border-y border-border/50">
          <div className="flex items-start gap-2">
            <div className="w-1 h-12 bg-gradient-primary rounded-full mt-1" />
            <div className="flex-1">
              <h4 className="text-xs font-semibold text-primary mb-1 uppercase tracking-wider">Challenge</h4>
              <p className="text-xs text-muted-foreground line-clamp-2">{project.challenge}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <div className="w-1 h-12 bg-gradient-primary rounded-full mt-1 opacity-60" />
            <div className="flex-1">
              <h4 className="text-xs font-semibold text-primary mb-1 uppercase tracking-wider">Solution</h4>
              <p className="text-xs text-muted-foreground line-clamp-2">{project.solution}</p>
            </div>
          </div>
        </div>
        
        {/* Tech Stack */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Tech Stack</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tools.slice(0, 5).map((tool, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-[10px] px-2 py-0.5 bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors"
              >
                {tool}
              </Badge>
            ))}
            {project.tools.length > 5 && (
              <Badge 
                variant="secondary" 
                className="text-[10px] px-2 py-0.5 bg-primary/10 text-primary"
              >
                +{project.tools.length - 5}
              </Badge>
            )}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2 pt-2 mt-auto">
          {project.liveUrl && (
            <Button 
              variant="default" 
              size="sm"
              className="flex-1 bg-gradient-primary hover:shadow-lg hover:shadow-primary/25 transition-all group/btn"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <span className="flex items-center gap-1">
                View Live
                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </Button>
          )}
          {project.githubUrl && (
            <Button 
              variant="outline" 
              size="sm"
              className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github className="w-4 h-4 mr-1" />
              Code
            </Button>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <div className="flex-1 text-center py-2">
              <Badge variant="secondary" className="bg-secondary/30">
                Enterprise Project
              </Badge>
            </div>
          )}
        </div>
      </div>
      
      {/* Hover effect gradient border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-500 pointer-events-none" />
    </div>
  );
};

export default ProjectCard;