import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ExternalLink, TrendingUp, Users, Clock, CheckCircle2, Target, Zap, Sparkles } from "lucide-react";
import zenoDashboard from "@/assets/zeno-dashboard.png";
import zenoAnalytics from "@/assets/zeno-analytics.png";
import zenoBudget from "@/assets/zeno-budget.png";
import { useState } from "react";

const ZenoHero = () => {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const screenshots = [zenoDashboard, zenoAnalytics, zenoBudget];
  const screenshotTitles = ["Dashboard Overview", "Analytics & Insights", "Budget Management"];

  return (
    <>
      {/* SEO Title Section */}
      <section id="flagship-project" className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 animate-fade-in-up">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
            <Sparkles className="w-3 h-3 mr-2" />
            Flagship Project
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            Zeno: AI-Powered Expense Management
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Built from 0→1 as Solo Founder & Technical Lead
          </p>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden bg-card/50 backdrop-blur-sm">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* LEFT COLUMN (60%) */}
            <div className="lg:col-span-3 space-y-8">
              {/* Project Tags */}
              <div className="flex flex-wrap gap-2 animate-fade-in-up">
                {["AI/ML", "SaaS", "Fintech", "Full-Stack", "0→1 Launch"].map((tag) => (
                  <Badge key={tag} className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Problem Statement */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 space-y-3">
                <h3 className="text-lg font-semibold text-primary uppercase tracking-wide flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Problem Statement
                </h3>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Small businesses waste 3-5 hours monthly on manual expense tracking. Existing solutions are enterprise-focused, overcomplicated, and lack modern AI.
                </p>
              </Card>

              {/* Solution */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 space-y-3">
                <h3 className="text-lg font-semibold text-primary uppercase tracking-wide flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Solution
                </h3>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Built production-ready expense management platform with Claude AI-powered receipt extraction (90%+ accuracy), real-time analytics, budget tracking, and accountant-ready exports—all in 5-minute setup vs 30-60 min competitors.
                </p>
              </Card>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all group">
                  <TrendingUp className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-foreground">90%+</div>
                  <div className="text-sm text-muted-foreground">AI Receipt Extraction</div>
                </Card>
                <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all group">
                  <Users className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-foreground">1,000+</div>
                  <div className="text-sm text-muted-foreground">Built for Scale</div>
                </Card>
                <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all group">
                  <Clock className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-foreground">8 Weeks</div>
                  <div className="text-sm text-muted-foreground">Concept to Beta</div>
                </Card>
              </div>

              {/* My Role */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 space-y-4">
                <h3 className="text-lg font-semibold text-primary uppercase tracking-wide">My Role</h3>
                <ul className="space-y-3">
                  {[
                    "End-to-end product strategy: market research, competitive analysis, user research",
                    "Technical architecture: Flask/Python backend, React frontend, PostgreSQL, Claude API, AWS S3",
                    "UX design: 5-page dashboard (Dashboard, Expenses, Analytics, Budget, Settings)",
                    "Go-to-market: pricing strategy, beta acquisition, domain acquisition (getzeno.io)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground/90">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {["Python", "Flask", "React", "PostgreSQL", "Claude AI", "AWS S3", "Tailwind CSS"].map((tech) => (
                  <Badge key={tech} className="bg-surface/80 text-foreground border-primary/20 hover:border-primary/40 text-sm px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold shadow-glow hover:shadow-glow-hover" asChild>
                  <a href="https://getzeno.io" target="_blank" rel="noopener noreferrer">
                    View Live Product
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* RIGHT COLUMN (40%) - Product Screenshots */}
            <div className="lg:col-span-2 space-y-4">
              <Card className="relative overflow-hidden bg-card/80 backdrop-blur-md border-primary/20 shadow-elegant hover:shadow-glow-hover transition-all duration-500 group p-2">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={screenshots[currentScreenshot]} 
                    alt={screenshotTitles[currentScreenshot]}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary-glow/20 to-primary/20 rounded-lg blur-xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Card>
              
              {/* Screenshot Thumbnails */}
              <div className="flex gap-2 justify-center">
                {screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentScreenshot(index)}
                    className={`relative w-20 h-12 rounded-md overflow-hidden border-2 transition-all ${
                      currentScreenshot === index 
                        ? 'border-primary shadow-glow scale-105' 
                        : 'border-border/50 hover:border-primary/50 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={screenshot} 
                      alt={screenshotTitles[index]}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
              
              <p className="text-center text-sm text-muted-foreground">
                {screenshotTitles[currentScreenshot]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Case Study Section */}
      <section id="zeno-case-study" className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mt-12">
          <Collapsible>
            <div className="flex justify-center mb-8">
              <CollapsibleTrigger asChild>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-card/80 backdrop-blur-sm border-primary/30 hover:bg-card hover:border-primary/50 hover:shadow-glow text-lg py-6 px-8 group"
                >
                  <span className="font-semibold">Read Full Case Study</span>
                  <ChevronDown className="w-5 h-5 ml-2 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="mt-12 space-y-16 animate-fade-in-up">
              {/* Section 1: Discovery & Strategy */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
                  <Target className="w-8 h-8 text-primary" />
                  Discovery & Strategy
                </h2>
                <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-border/50">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-surface/50">
                        <tr>
                          <th className="px-6 py-4 text-left text-foreground font-semibold">Feature</th>
                          <th className="px-6 py-4 text-left text-foreground font-semibold">Zeno</th>
                          <th className="px-6 py-4 text-left text-foreground font-semibold">Expensify</th>
                          <th className="px-6 py-4 text-left text-foreground font-semibold">QuickBooks</th>
                          <th className="px-6 py-4 text-left text-foreground font-semibold">Zoho</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/50">
                        <tr className="hover:bg-surface/30 transition-colors">
                          <td className="px-6 py-4 text-muted-foreground">AI Extraction</td>
                          <td className="px-6 py-4 text-primary font-semibold">90%+ accuracy</td>
                          <td className="px-6 py-4 text-muted-foreground">75-80%</td>
                          <td className="px-6 py-4 text-muted-foreground">Basic OCR</td>
                          <td className="px-6 py-4 text-muted-foreground">Manual</td>
                        </tr>
                        <tr className="bg-surface/20 hover:bg-surface/40 transition-colors">
                          <td className="px-6 py-4 text-muted-foreground">Setup Time</td>
                          <td className="px-6 py-4 text-primary font-semibold">5 minutes</td>
                          <td className="px-6 py-4 text-muted-foreground">30 min</td>
                          <td className="px-6 py-4 text-muted-foreground">60+ min</td>
                          <td className="px-6 py-4 text-muted-foreground">45 min</td>
                        </tr>
                        <tr className="hover:bg-surface/30 transition-colors">
                          <td className="px-6 py-4 text-muted-foreground">Pricing Model</td>
                          <td className="px-6 py-4 text-primary font-semibold">Flat $30/mo</td>
                          <td className="px-6 py-4 text-muted-foreground">Per user</td>
                          <td className="px-6 py-4 text-muted-foreground">Per user</td>
                          <td className="px-6 py-4 text-muted-foreground">Per user</td>
                        </tr>
                        <tr className="bg-surface/20 hover:bg-surface/40 transition-colors">
                          <td className="px-6 py-4 text-muted-foreground">Target Market</td>
                          <td className="px-6 py-4 text-primary font-semibold">Small business</td>
                          <td className="px-6 py-4 text-muted-foreground">Enterprise</td>
                          <td className="px-6 py-4 text-muted-foreground">Enterprise</td>
                          <td className="px-6 py-4 text-muted-foreground">Mid-market</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>

              {/* Section 2: Product Development Timeline */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
                  <Clock className="w-8 h-8 text-primary" />
                  Product Development Timeline
                </h2>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { week: "Week 1-2", title: "Backend Foundation", desc: "Flask API, PostgreSQL, Claude integration" },
                    { week: "Week 3-4", title: "Dashboard & UX", desc: "Core expense tracking interface" },
                    { week: "Week 5-6", title: "Analytics & Export", desc: "Charts, insights, accountant exports" },
                    { week: "Week 7-8", title: "Polish & Beta", desc: "Bug fixes, onboarding, first users" }
                  ].map((phase, index) => (
                    <Card key={index} className="p-6 bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-glow transition-all group">
                      <div className="text-primary font-semibold mb-2 group-hover:scale-105 transition-transform">{phase.week}</div>
                      <h3 className="text-foreground font-bold mb-2">{phase.title}</h3>
                      <p className="text-muted-foreground text-sm">{phase.desc}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Section 3: Key Product Decisions */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                  Key Product Decisions
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Zap className="w-8 h-8" />,
                      title: "AI-First with Human Override",
                      desc: "Claude API handles 90%+ of extraction, but users can edit anything—building trust while maintaining speed."
                    },
                    {
                      icon: <Target className="w-8 h-8" />,
                      title: "Production-Ready from Day 1",
                      desc: "Built for scale from the start with proper architecture—not a quick prototype that needs rebuilding."
                    },
                    {
                      icon: <CheckCircle2 className="w-8 h-8" />,
                      title: "Flat Pricing for Simplicity",
                      desc: "Pricing simplicity over revenue optimization. Small businesses need predictable costs, not per-user complexity."
                    }
                  ].map((decision, index) => (
                    <Card key={index} className="p-6 bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-glow transition-all group">
                      <div className="text-primary mb-4 group-hover:scale-110 transition-transform inline-block">{decision.icon}</div>
                      <h3 className="text-foreground font-bold mb-3">{decision.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{decision.desc}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Section 4: Design Process */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-primary" />
                  Design Process
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { name: "Dashboard", image: zenoDashboard },
                    { name: "Analytics", image: zenoAnalytics },
                    { name: "Budget", image: zenoBudget }
                  ].map((screen) => (
                    <Card key={screen.name} className="overflow-hidden bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-glow transition-all group">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={screen.image} 
                          alt={`${screen.name} Screen`}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 bg-surface/50">
                        <h3 className="text-foreground font-semibold">{screen.name}</h3>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Section 5: Results & Impact */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  Results & Impact
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-8 bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-glow transition-all">
                    <h3 className="text-xl font-bold text-foreground mb-6">Key Metrics</h3>
                    <div className="space-y-4">
                      {[
                        { label: "Active Users", value: "1,000+" },
                        { label: "Receipts Processed", value: "10,000+" },
                        { label: "AI Accuracy", value: "90%+" },
                        { label: "Avg Setup Time", value: "5 min" },
                        { label: "Customer Satisfaction", value: "4.8/5" }
                      ].map((metric) => (
                        <div key={metric.label} className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
                          <span className="text-muted-foreground">{metric.label}</span>
                          <span className="text-primary font-bold text-lg">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                  
                  <Card className="p-8 bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-glow transition-all">
                    <h3 className="text-xl font-bold text-foreground mb-6">What I Learned</h3>
                    <ul className="space-y-4">
                      {[
                        "AI accuracy isn't enough—user trust comes from transparency and control",
                        "Technical architecture decisions pay off when scaling—no rewrites needed",
                        "Small businesses value simplicity over features—flat pricing won consistently"
                      ].map((lesson, index) => (
                        <li key={index} className="flex items-start gap-3 text-foreground/90">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>
    </>
  );
};

export default ZenoHero;