import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Target, Users, BarChart3, Lightbulb, Rocket, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseStudyProps {
  title: string;
  role: string;
  impact: string;
  problem: string;
  userQuote: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  tags: string[];
  timeline: string;
  team: string;
}

const CaseStudyTemplate = ({ 
  title, 
  role, 
  impact, 
  problem, 
  userQuote, 
  solution, 
  results, 
  tags, 
  timeline, 
  team 
}: CaseStudyProps) => {
  const processSteps = [
    { icon: Target, title: "Discovery & Research", description: "User interviews, market analysis, competitive research" },
    { icon: BarChart3, title: "Data Analysis", description: "Quantitative analysis, user behavior patterns, metrics baseline" },
    { icon: Lightbulb, title: "Ideation & Strategy", description: "Solution brainstorming, prioritization framework, roadmap planning" },
    { icon: Rocket, title: "Execution & Roadmapping", description: "Feature development, cross-functional coordination, launch strategy" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" className="p-0 hover:bg-transparent">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Portfolio
            </Button>
            <div className="text-title font-poppins font-bold">Niraj Patil</div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 px-6 bg-gradient-hero">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-display font-poppins mb-4">{title}</h1>
            <div className="flex flex-wrap justify-center items-center gap-4 mb-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Users size={16} />
                {role}
              </span>
              <span>•</span>
              <span>{timeline}</span>
              <span>•</span>
              <span>{team}</span>
            </div>
            <div className="text-2xl font-bold text-primary mb-8">{impact}</div>
            <div className="flex flex-wrap justify-center gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-primary/30 text-primary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-heading font-poppins mb-8 text-center">The Problem</h2>
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                {problem}
              </p>
              <Card className="bg-gradient-surface border-primary/20">
                <CardContent className="p-8">
                  <blockquote className="text-xl italic text-center text-foreground">
                    "{userQuote}"
                  </blockquote>
                  <p className="text-center text-muted-foreground mt-4">— User Research Insight</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-6 bg-surface/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-heading font-poppins mb-12 text-center">My Process & Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={step.title} className="bg-card border-border/50 hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-heading font-poppins mb-8 text-center">The Solution</h2>
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                {solution}
              </p>
              
              {/* Placeholder for product mockups/prototypes */}
              <Card className="bg-gradient-primary p-1 rounded-2xl">
                <div className="bg-background rounded-xl p-12 text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-muted-foreground">
                    Interactive product mockups, Figma prototypes, or demo videos would be embedded here
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 px-6 bg-surface/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-heading font-poppins mb-12 text-center">Results & Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {results.map((result, index) => (
                <Card key={result.metric} className="bg-card border-border/50 text-center">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-primary mb-2">{result.value}</div>
                    <div className="text-lg font-semibold text-foreground mb-2">{result.metric}</div>
                    <div className="text-sm text-muted-foreground">{result.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-surface border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-title font-poppins font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="text-primary" />
                  Key Learnings
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Data-driven decisions consistently outperformed assumption-based approaches</li>
                  <li>• Cross-functional collaboration was critical for successful implementation</li>
                  <li>• Iterative testing and user feedback accelerated product-market fit</li>
                  <li>• Technical constraints drove creative solutions that improved overall UX</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-heading font-poppins mb-4">Ready to drive similar impact?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help transform your product vision into measurable business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Get In Touch
              </Button>
              <Button variant="outline" size="xl">
                View More Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CaseStudyTemplate;