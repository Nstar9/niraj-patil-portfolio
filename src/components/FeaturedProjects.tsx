import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, TrendingUp } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI-Powered Recommendation Engine",
    impact: "Increased user retention by 15% in Q3",
    description: "Revolutionized content discovery through advanced machine learning algorithms, delivering personalized experiences at scale.",
    tags: ["AI/ML", "Personalization", "SaaS", "Python"],
    metrics: "+15% Retention",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    title: "Fintech Mobile Banking Platform",
    impact: "Reduced customer onboarding time by 60%",
    description: "Streamlined digital banking experience with biometric authentication and intelligent financial insights.",
    tags: ["Fintech", "Mobile First", "Security", "UX"],
    metrics: "-60% Onboarding Time",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: 3,
    title: "B2B Analytics Dashboard",
    impact: "Generated $2M+ in additional revenue",
    description: "Transformed complex data into actionable insights with real-time reporting and predictive analytics.",
    tags: ["Analytics", "B2B", "Data Viz", "AWS"],
    metrics: "$2M+ Revenue",
    color: "from-violet-500/20 to-purple-500/20"
  },
  {
    id: 4,
    title: "Cross-Platform E-commerce Suite",
    impact: "Improved conversion rate by 25%",
    description: "Unified shopping experience across web and mobile with advanced personalization and checkout optimization.",
    tags: ["E-commerce", "Cross-Platform", "Optimization"],
    metrics: "+25% Conversion",
    color: "from-orange-500/20 to-red-500/20"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group relative overflow-hidden bg-gradient-to-br from-card to-surface border-border/50 hover-lift hover-glow cursor-pointer transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
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