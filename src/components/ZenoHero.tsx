import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ExternalLink, ChevronDown, TrendingUp, Users, Clock } from "lucide-react";
import { useState } from "react";

const ZenoHero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="zeno-hero" className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#17B5BD] to-[#0d9488] py-20 px-6">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-poppins">
              Zeno: AI-Powered Expense Management
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Built from 0→1 | Solo Product Manager & Technical Lead
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["AI/ML", "SaaS", "Fintech", "Full-Stack", "0→1 Launch"].map((tag) => (
                <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-sm px-4 py-1">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-8 mt-12">
            {/* Left Column - 60% width */}
            <div className="md:col-span-3 space-y-8">
              {/* Problem Statement */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Problem Statement</h3>
                  <p className="text-white/90 leading-relaxed">
                    Small businesses waste 3-5 hours monthly on manual expense tracking. Existing solutions are enterprise-focused, overcomplicated, and lack modern AI.
                  </p>
                </CardContent>
              </Card>

              {/* Solution */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Solution</h3>
                  <p className="text-white/90 leading-relaxed">
                    Built production-ready expense management platform with Claude AI-powered receipt extraction (90%+ accuracy), real-time analytics, budget tracking, and accountant-ready exports—all in 5-minute setup vs 30-60 min competitors.
                  </p>
                </CardContent>
              </Card>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
                  <CardContent className="p-4">
                    <TrendingUp className="w-8 h-8 text-white mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">90%+</div>
                    <div className="text-sm text-white/80">AI Receipt Extraction</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
                  <CardContent className="p-4">
                    <Users className="w-8 h-8 text-white mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">1,000+</div>
                    <div className="text-sm text-white/80">Built for Scale</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
                  <CardContent className="p-4">
                    <Clock className="w-8 h-8 text-white mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">8 Weeks</div>
                    <div className="text-sm text-white/80">Concept to Beta</div>
                  </CardContent>
                </Card>
              </div>

              {/* My Role */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">My Role</h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="text-[#17B5BD] mt-1">•</span>
                      <span>End-to-end product strategy: market research, competitive analysis, user research</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#17B5BD] mt-1">•</span>
                      <span>Technical architecture: Flask/Python backend, React frontend, PostgreSQL, Claude API, AWS S3</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#17B5BD] mt-1">•</span>
                      <span>UX design: 5-page dashboard (Dashboard, Expenses, Analytics, Budget, Settings)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#17B5BD] mt-1">•</span>
                      <span>Go-to-market: pricing strategy, beta acquisition, domain acquisition (getzeno.io)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Tech Stack */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Flask", "React", "PostgreSQL", "Claude AI", "AWS S3", "Tailwind CSS"].map((tech) => (
                    <Badge key={tech} className="bg-white text-[#17B5BD] border-0 font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-[#17B5BD] hover:bg-white/90 font-semibold"
                  onClick={() => window.open('https://getzeno.io', '_blank')}
                >
                  View Live Product <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  onClick={() => {
                    setIsExpanded(true);
                    setTimeout(() => {
                      document.getElementById('zeno-case-study')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Read Full Case Study <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right Column - 40% width */}
            <div className="md:col-span-2">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden hover:shadow-glow transition-all duration-500 animate-float">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center text-white/60">
                    {/* Placeholder for mockup image */}
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">💰</div>
                      <div className="text-lg font-medium">Zeno Dashboard</div>
                      <div className="text-sm text-white/40 mt-2">Replace with actual screenshot</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Full Case Study - Expandable Section */}
      <div id="zeno-case-study" className="bg-background py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-center gap-4 text-center mb-8 cursor-pointer group">
                <h2 className="text-3xl font-bold font-poppins group-hover:text-primary transition-colors">
                  Full Case Study
                </h2>
                <ChevronDown 
                  className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                />
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent className="space-y-16">
              {/* Section 1: Discovery & Strategy */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary font-poppins">Discovery & Strategy</h3>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-muted">
                          <tr>
                            <th className="text-left p-4 font-semibold">Feature</th>
                            <th className="text-left p-4 font-semibold text-primary">Zeno</th>
                            <th className="text-left p-4 font-semibold">Expensify</th>
                            <th className="text-left p-4 font-semibold">QuickBooks</th>
                            <th className="text-left p-4 font-semibold">Zoho</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-4">Setup Time</td>
                            <td className="p-4 text-primary font-medium">5 min</td>
                            <td className="p-4">30-60 min</td>
                            <td className="p-4">45-90 min</td>
                            <td className="p-4">30-45 min</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4">AI Receipt Extraction</td>
                            <td className="p-4 text-primary font-medium">90%+ (Claude AI)</td>
                            <td className="p-4">85%</td>
                            <td className="p-4">75%</td>
                            <td className="p-4">80%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4">Pricing</td>
                            <td className="p-4 text-primary font-medium">$30/month flat</td>
                            <td className="p-4">$5/user/month</td>
                            <td className="p-4">$30/month base</td>
                            <td className="p-4">$3/user/month</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4">Target Audience</td>
                            <td className="p-4 text-primary font-medium">Small Business</td>
                            <td className="p-4">Enterprise</td>
                            <td className="p-4">Accounting Firms</td>
                            <td className="p-4">Enterprise</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Section 2: Product Development Timeline */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary font-poppins">Product Development Timeline</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { weeks: "Week 1-2", title: "Backend", desc: "Flask API, PostgreSQL, Claude AI integration" },
                    { weeks: "Week 3-4", title: "Dashboard", desc: "React frontend, expense entry, receipt upload" },
                    { weeks: "Week 5-6", title: "Analytics", desc: "Real-time charts, budget tracking, exports" },
                    { weeks: "Week 7-8", title: "Polish & Beta", desc: "UX refinement, testing, beta launch" }
                  ].map((phase, idx) => (
                    <Card key={idx} className="bg-gradient-to-br from-card to-surface border-border/50">
                      <CardContent className="p-6">
                        <div className="text-primary font-semibold mb-2">{phase.weeks}</div>
                        <h4 className="font-semibold text-lg mb-2">{phase.title}</h4>
                        <p className="text-sm text-muted-foreground">{phase.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Section 3: Key Product Decisions */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary font-poppins">Key Product Decisions</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "AI-First with Human Override",
                      desc: "Chose Claude API for 90%+ accuracy while maintaining manual editing capability for edge cases and user control."
                    },
                    {
                      title: "Production-Ready from Day 1",
                      desc: "Built for scale with proper architecture, security, and performance rather than quick MVP prototype."
                    },
                    {
                      title: "Flat Pricing for Simplicity",
                      desc: "$30/month flat rate eliminates per-user complexity, making it predictable and accessible for small businesses."
                    }
                  ].map((decision, idx) => (
                    <Card key={idx} className="bg-gradient-to-br from-[#17B5BD]/10 to-[#0d9488]/10 border-[#17B5BD]/20">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-3 text-primary">{decision.title}</h4>
                        <p className="text-muted-foreground">{decision.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Section 4: Design Process */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary font-poppins">Design Process</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {["Dashboard", "Expenses", "Analytics"].map((screen, idx) => (
                    <Card key={idx} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center text-white/60">
                          <div className="text-center p-4">
                            <div className="text-3xl mb-2">📊</div>
                            <div className="font-medium">{screen} View</div>
                            <div className="text-xs text-white/40 mt-1">Screenshot placeholder</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Section 5: Results & Impact */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary font-poppins">Results & Impact</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-br from-card to-surface border-border/50">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-4">Key Metrics</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Receipt Processing Accuracy</span>
                          <span className="font-semibold text-primary">90%+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">User Base</span>
                          <span className="font-semibold text-primary">1,000+ users</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Time to Market</span>
                          <span className="font-semibold text-primary">8 weeks</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Setup Time vs Competitors</span>
                          <span className="font-semibold text-primary">6x faster</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-card to-surface border-border/50">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-4">What I Learned</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">1.</span>
                          <span>AI accuracy matters less than user trust—manual override was crucial for adoption</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">2.</span>
                          <span>Pricing simplicity {'>'} revenue optimization in early stage—flat rate drove conversions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">3.</span>
                          <span>Production-ready architecture from day 1 enabled faster scaling than MVP-first approach</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default ZenoHero;