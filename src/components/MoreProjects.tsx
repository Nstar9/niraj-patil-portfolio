import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const moreProjects = [
  {
    id: 1,
    title: "Smart Analytics Dashboard",
    description: "Built real-time analytics platform with predictive insights.",
    githubLink: "https://github.com/Nstar9/analytics-dashboard"
  },
  {
    id: 2,
    title: "AI-Powered Content Generator",
    description: "Developed automated content creation system using NLP.",
    githubLink: "https://github.com/Nstar9/ai-content-generator"
  },
  {
    id: 3,
    title: "Product Roadmap Optimizer",
    description: "Created RICE-based prioritization tool for product teams.",
    githubLink: "https://github.com/Nstar9/roadmap-optimizer"
  },
  {
    id: 4,
    title: "User Feedback Analytics Engine",
    description: "Built sentiment analysis system for customer feedback processing.",
    githubLink: "https://github.com/Nstar9/feedback-analytics"
  }
];

const MoreProjects = () => {
  return (
    <section className="py-20 px-6 bg-gradient-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-display mb-4 font-poppins">More Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Additional work demonstrating technical implementation and product thinking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {moreProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group relative overflow-hidden bg-card border-border/50 hover-lift transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <h3 className="text-title font-poppins font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <Button 
                  variant="outline" 
                  className="border-primary/50 text-primary hover:bg-primary/10 w-full"
                  onClick={() => window.open(project.githubLink, '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreProjects;