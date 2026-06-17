import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, TrendingUp } from "lucide-react";

const projects = [
  {
    id: 0,
    title: "HawkAI — Autonomous Entity Intelligence Agent",
    impact: "Analyst-grade reports in <90s",
    description: "Defined and shipped a full KYC/AML intelligence product solo in 25 days — from problem framing and architecture to deployment — generating analyst-grade risk reports in under 90 seconds. Entered Google Cloud Agent Hackathon competing against 10k+ teams.",
    tags: ["FastAPI", "Next.js", "Gemini 2.0", "MCP", "MongoDB Atlas"],
    metrics: "Shipped solo in 25 days",
    color: "from-amber-500/20 to-orange-500/20",
    link: "https://github.com/Nstar9/HawkAI"
  },
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
  },
  {
    id: 5,
    title: "AlphaForge — ML-Powered Financial Forecasting Tool",
    impact: "<5% Prediction Error",
    description: "Scoped and shipped a quantitative ML prototype predicting next-day equity prices with under 5% error — defined model requirements, validated results with stakeholders, and packaged findings into a Flask demo for non-technical audiences.",
    tags: ["Python", "Random Forest", "XGBoost", "Flask"],
    metrics: "<5% Prediction Error",
    color: "from-rose-500/20 to-pink-500/20",
    link: "https://github.com/Nstar9/AlphaForge-ML-Stock-Predictor"
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

        <div className="text-center mt-16">
          <p className="text-lg text-foreground mb-6 font-medium">
            Want to dive deeper into my product strategy and process?
          </p>
          <button
            onClick={() => window.open('https://living-sink-0dd.notion.site/Niraj-s-Product-Case-Studies-2736c5ae56df802b8f37f5a9b0a5c497', '_blank')}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
          >
            <span>View Detailed Case Studies</span>
            <ExternalLink size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;