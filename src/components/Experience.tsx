import { Card, CardContent } from "@/components/ui/card";
import { Building, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "AI Product Strategy Consultant",
    company: "Founder Institute (Business Practicum)",
    dates: "May 2025 – Aug 2025",
    description: "• Led competitive analysis and market research to shape the go-to-market strategy for AI partnerships, positioning Founder Institute as a preferred partner for emerging AI accelerators\n• Designed a scalable partnership model after identifying 25+ high-value opportunities across higher education, healthcare, and government\n• Built a revenue model and projections estimating $5M+ in institutional revenue from new AI specialization programs, and delivered a multi-quarter implementation roadmap"
  },
  {
    id: 2,
    title: "Product Strategy Consultant",
    company: "FACES Consulting, UIUC, Champaign, IL",
    dates: "Aug 2024 – Jul 2025",
    description: "• Partnered with two AI-driven startups (Cascade & DataPull) on go-to-market and launch strategy, driving 15% increase in pilot adoption across 3 cross-functional teams (50+ users)\n• Conducted stakeholder interviews and user research; delivered RICE-prioritized product roadmaps and MVP scopes that shaped founders' feature sets and onboarding process\n• Produced competitive benchmarks and actionable GTM reports in Notion, Tableau, and SQL, supporting fundraising narratives and product demos for executive buy-in"
  },
  {
    id: 3,
    title: "Product Operations Manager",
    company: "Flora Pharmaceuticals, Mumbai, India",
    dates: "Nov 2023 – May 2024",
    description: "• Launched operational dashboards that reduced downtime by 10%, directly improving production KPIs and efficiency tracking\n• Standardized compliance workflows across 3 departments, cutting reporting delays by 20% and enabling faster root-cause analysis; introduced daily standups and workflow tracking to improve cross-team execution"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-display mb-4 font-poppins">Career Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building product strategy and driving measurable impact across diverse industries
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className="relative flex items-start gap-8"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <Card className="flex-1 bg-card border-border/50 hover-lift transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-title font-poppins font-semibold mb-2 text-foreground">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-medium mb-2">
                          <Building className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        {exp.dates}
                      </div>
                    </div>
                    
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;