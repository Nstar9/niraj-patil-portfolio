import { Card, CardContent } from "@/components/ui/card";
import { Building, Calendar } from "lucide-react";

const experiences = [
  {
    id: 0,
    title: "Product Engineer",
    company: "Kahana, Remote, USA",
    link: "https://kahana.io/",
    dates: "May 2026 – Present",
    description: "• Worked directly inside the Oasis AI browser codebase alongside engineering — wrote and reviewed feature-level code while translating AI capabilities into technical requirements, resolving deployment blockers as they surfaced.\n• Owned the technical handoff between product intent and shipped code for the MVP launch, contributing to a #4 Product Hunt launch with 295 upvotes and 7,000+ trusted users worldwide with zero critical launch-day bugs.\n• Acted as the direct technical point of contact between design and engineering — diagnosing integration gaps in real time and driving them to resolution across the full product surface."
  },
  {
    id: 1,
    title: "Founder & Full-Stack Engineer",
    company: "Zeno (getzeno.io), Chicago, IL",
    link: "https://getzeno.io/",
    dates: "Jul 2025 – May 2026",
    description: "• Architected and deployed a full-stack AI fintech platform (Python/Flask, PostgreSQL, AWS S3, React) from 0→1, owning the entire lifecycle from technical discovery to processing 10K+ monthly transactions in production.\n• Built a document-parsing integration layer (Claude API OCR + LLM) with custom schema-mapping logic in Python/PostgreSQL to reliably standardize unstructured receipt and transaction data into a normalized format — reaching 90%+ extraction accuracy.\n• Designed a confidence-scoring and human-in-the-loop validation system to catch low-confidence extractions before they reached production data, maintaining data integrity for 200+ beta users."
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Saayam for All, Remote, USA",
    dates: "Oct 2025 – Present",
    description: "• Defined full MVP product scope across 15+ service categories (housing, healthcare, finance, legal) — wrote detailed use case specs, user flows, and safety guardrails that were adopted directly by engineering as the build foundation and as ground-truth data for downstream ML model training\n• Led end-to-end requirements for volunteer geolocation feature: conducted user research with disaster relief coordinators, translated findings into GeoSpatial API integration specs, and managed engineering trade-offs across competing priorities from stakeholders"
  },
  {
    id: 3,
    title: "Strategy Consultant",
    company: "Founder Institute (Internship Practicum)",
    dates: "May 2025 – Aug 2025",
    description: "• Identified a $5M+ revenue opportunity across 25+ institutional targets; delivered a strategic feasibility roadmap that prioritized 3 high-potential pilot programs for executive review within 60 days\n• Uncovered an underserved $108B academic R&D market segment, providing the data-driven justification to redefine competitive positioning against major industry players\n• Engineered an automated financial model and evaluation framework for institutional partnerships, increasing assessment efficiency by 40% through streamlined data-driven workflows"
  },
  {
    id: 4,
    title: "Senior Consultant",
    company: "FACES Consulting, UIUC, Champaign, IL",
    dates: "Aug 2024 – Jul 2025",
    description: "• Drove 15% pilot adoption across 50+ users within 90-day trial by designing GTM strategy and tiered pricing model for 2 AI startups\n• Unlocked $8B+ market opportunity by analyzing 8 competitors; led founder to pivot GTM strategy and secure commitments from 5+ pilot partners within 60 days\n• Engineered a $200K ARR revenue model featuring unit economics analysis to support seed fundraising; adopted as the firm-wide deliverable template now used across 10+ client engagements"
  },
  {
    id: 5,
    title: "Business Operations Consultant",
    company: "Flora Pharmaceuticals, Mumbai, India",
    dates: "Nov 2023 – May 2024",
    description: "• Reduced production downtime by 10% ($20K annual savings) by designing real-time operational dashboards adopted across 3 departments within 50 days\n• Cut reporting delays by 25% by leading cross-departmental process reengineering, ensuring continuous audit readiness for complex regulatory submissions and mitigating operational risks\n• Established operational cadence (daily standups, workflow tracking) now used company-wide by 50+ employees, reducing project delivery delays by 20%"
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
                          {(exp as any).link ? (
                            <a
                              href={(exp as any).link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {exp.company}
                            </a>
                          ) : (
                            exp.company
                          )}
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