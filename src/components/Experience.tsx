import { Card, CardContent } from "@/components/ui/card";
import { Building, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "AI Product Strategy Consultant",
    company: "Founder Institute",
    dates: "May 2025 – Aug 2025",
    description: "Led market research to shape GTM strategy for AI partnerships, designed a scalable partnership model, and built a revenue model estimating $5M+ in new revenue."
  },
  {
    id: 2,
    title: "Product Strategy Consultant",
    company: "FACES Consulting",
    dates: "Aug 2024 – Jul 2025",
    description: "Partnered with two AI startups on GTM strategy, driving a 15% increase in pilot adoption. Delivered RICE-prioritized roadmaps and produced competitive benchmarks to support fundraising."
  },
  {
    id: 3,
    title: "Product Operations Manager",
    company: "Flora Pharmaceuticals",
    dates: "Nov 2023 – May 2024",
    description: "Launched operational dashboards reducing downtime by 10%. Standardized compliance workflows, cutting reporting delays by 20%."
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
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
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