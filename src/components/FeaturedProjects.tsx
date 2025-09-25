import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, TrendingUp } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Onboarding Copilot",
    impact: "-50% Repetitive Tickets",
    description: "A full-cycle product plan for an AI assistant designed to automate new hire provisioning, accelerate productivity, and slash repetitive HR/IT support tickets.",
    tags: ["Product Strategy", "PRD", "AI/ML", "Automation"],
    metrics: "-50% Repetitive Tickets",
    color: "from-blue-500/20 to-cyan-500/20",
    link: "https://living-sink-0dd.notion.site/AI-Onboarding-Copilot-2736c5ae56df809f8c04d7cd475f6faa"
  },
  {
    id: 2,
    title: "Personalized RecSys-LLM Platform",
    impact: "+20% Pilot Engagement",
    description: "Shipped a cloud-based recommendation MVP with LLM onboarding and explainable AI to boost user adoption and trust.",
    tags: ["AI/ML", "LLM", "Cloud", "A/B Testing"],
    metrics: "+20% Pilot Engagement",
    color: "from-emerald-500/20 to-teal-500/20",
    link: "https://github.com/Nstar9/Personalized-RecSys-LLM"
  },
  {
    id: 3,
    title: "AWS-Powered Airbnb Insights Platform",
    impact: "-80% Manual Analysis Time",
    description: "Automated a data pipeline for 10K+ listings using AWS, and designed Tableau dashboards to enable pricing and occupancy optimization.",
    tags: ["AWS", "Data Pipeline", "Tableau", "Data Analytics"],
    metrics: "-80% Manual Analysis Time",
    color: "from-emerald-500/20 to-teal-500/20",
    link: "https://github.com/Nstar9/AWS-Powered-Airbnb-Insights-Platform"
  },
  {
    id: 4,
    title: "Federated Healthcare Recommendation System",
    impact: "80%+ Accuracy",
    description: "Developed a privacy-preserving federated engine for 10K+ health records with explainable AI features to meet compliance needs.",
    tags: ["Healthcare", "Federated Learning", "AI/ML", "Privacy"],
    metrics: "80%+ Accuracy",
    color: "from-violet-500/20 to-purple-500/20",
    link: "https://github.com/Nstar9/Federated-Healthcare-Recommendation-System"
  }
];

const FeaturedProjects = () => {
  return (
    <section id="work" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-display mb-4 font-poppins">Featured Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strategic product initiatives that transformed user experiences and delivered measurable business impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group relative overflow-hidden bg-gradient-to-br from-card to-surface border-border/50 hover-lift hover-glow cursor-pointer transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(project.link, '_blank')}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardContent className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2 text-primary">
                    <TrendingUp size={20} />
                    <span className="text-sm font-medium">{project.metrics}</span>
                  </div>
                  <ExternalLink 
                    size={20} 
                    className="text-muted-foreground group-hover:text-primary transition-colors duration-300 opacity-0 group-hover:opacity-100" 
                  />
                </div>

                <h3 className="text-title font-poppins font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-primary font-medium mb-4 text-sm">
                  {project.impact}
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-surface text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to dive deeper into my product strategy and process?
          </p>
          <div className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors duration-300 cursor-pointer">
            <span className="font-medium">View detailed case studies</span>
            <ExternalLink size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;