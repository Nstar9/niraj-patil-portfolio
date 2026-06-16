import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Target, BarChart3, Code, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Product Management",
    icon: Target,
    skills: [
      "Roadmap Planning",
      "Backlog Prioritization",
      "PRD & User Story Writing",
      "Sprint Planning",
      "Acceptance Criteria",
      "OKRs",
      "Product Positioning",
      "GTM Strategy",
      "Jira",
      "Agile/Scrum"
    ],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Data Science & Analytics",
    icon: BarChart3,
    skills: [
      "Python (Pandas, NumPy, Scikit-learn)",
      "SQL",
      "Statistical Analysis",
      "Machine Learning (Random Forest, XGBoost)",
      "A/B Testing",
      "Feature Engineering",
      "Time-Series Modeling",
      "Causal Inference",
      "Tableau"
    ],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Engineering & Cloud",
    icon: Code,
    skills: [
      "AWS (S3, Lambda, Glue/PySpark, Athena)",
      "Google Cloud",
      "REST APIs",
      "Flask",
      "PostgreSQL",
      "React",
      "ETL Pipelines",
      "GenAI/LLM Integration (Claude API, Gemini)",
      "CI/CD (GitHub Actions)"
    ],
    color: "from-violet-500/20 to-purple-500/20"
  },
  {
    title: "Consulting & Leadership",
    icon: Users,
    skills: [
      "Technical Discovery",
      "Requirements Gathering",
      "Stakeholder Management",
      "Solution Architecture",
      "Feasibility Analysis",
      "Cross-functional Collaboration"
    ],
    color: "from-amber-500/20 to-orange-500/20"
  }
];


const Skills = () => {
  return (
    <section className="py-20 px-6 bg-gradient-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-display mb-4 font-poppins">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical expertise and product leadership capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group relative overflow-hidden bg-card border-border/50 hover-lift transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardContent className="relative p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-title font-poppins font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-surface text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300 text-sm px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;