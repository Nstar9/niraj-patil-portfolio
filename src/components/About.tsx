import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Database, Target, Users, Zap } from "lucide-react";
import nirajHeadshot from "@/assets/niraj-headshot.jpg";

const skills = [
  { name: "Product Strategy", icon: Target, description: "Strategic roadmapping and market positioning" },
  { name: "Data Analysis", icon: Database, description: "Python, SQL, AWS for data-driven decisions" },
  { name: "User Research", icon: Users, description: "Qualitative & quantitative user insights" },
  { name: "Technical Leadership", icon: Code, description: "Cross-functional team coordination" },
  { name: "AI/ML Products", icon: Brain, description: "ML-powered product development" },
  { name: "Growth Strategy", icon: Zap, description: "Metrics-driven growth optimization" }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image & Stats */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-glow bg-gradient-primary">
                <img 
                  src={nirajHeadshot} 
                  alt="Niraj Patil - Product Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-surface rounded-xl p-4 border border-border shadow-elegant">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Building Products</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">$10M+</div>
                  <div className="text-sm text-muted-foreground">Revenue Impact</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">50%</div>
                  <div className="text-sm text-muted-foreground">Avg. Metric Improvement</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Bio & Skills */}
          <div className="space-y-8">
            <div>
              <h2 className="text-display mb-6 font-poppins">The Architect of What's Next</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a Product Manager driven by a fascination with how technology can solve real-world human problems. My journey led me to a Master's in <span className="text-secondary font-medium">Technology Management</span> from the University of Illinois Urbana-Champaign, where I honed my ability to bridge the gap between complex technical challenges and seamless user experiences.
                </p>
                <p>
                  I thrive on digging into user data, crafting data-driven strategies, and collaborating with cross-functional teams to ship products that not only work but feel intuitive and essential. I'm particularly passionate about the challenges and opportunities within the <span className="text-primary font-medium">AI</span> and <span className="text-secondary font-medium">fintech</span> spaces.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="text-title font-poppins font-semibold mb-6">Core Competencies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="flex items-start gap-3 p-4 rounded-lg bg-surface/50 hover:bg-surface transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                      <skill.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">{skill.name}</div>
                      <div className="text-sm text-muted-foreground">{skill.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-title font-poppins font-semibold mb-4">Technical Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "SQL", "AWS", "Figma", "Amplitude", "Mixpanel", "Jupyter", "Tableau", "Git", "Jira"].map((tech) => (
                  <Badge key={tech} variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;