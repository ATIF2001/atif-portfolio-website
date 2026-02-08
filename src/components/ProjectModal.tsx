import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    challenge: string;
    solution: string;
    impact: string;
    tools: string[];
    liveUrl?: string;
    githubUrl?: string;
    images: string[];
    fullCaseStudy?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Image Slider */}
          {project.images && project.images.length > 0 && (
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {project.images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur"
                    onClick={handlePreviousImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur"
                    onClick={handleNextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>

                  {/* Dots indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex 
                            ? 'bg-primary w-6' 
                            : 'bg-primary/30 hover:bg-primary/50'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Category and Impact */}
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              {project.category}
            </span>
            {project.impact && (
              <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                {project.impact}
              </span>
            )}
          </div>

          {/* Full Case Study */}
          {project.fullCaseStudy && (
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Complete Case Study</h3>
              <p className="text-muted-foreground whitespace-pre-wrap">{project.fullCaseStudy}</p>
            </div>
          )}

          {/* Challenge */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Challenge</h3>
            <p className="text-muted-foreground">{project.challenge}</p>
          </div>

          {/* Solution */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Solution</h3>
            <p className="text-muted-foreground">{project.solution}</p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex gap-4 pt-4">
              {project.liveUrl && (
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;