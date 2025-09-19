import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    id: 1,
    institution: "University of Illinois at Urbana-Champaign",
    degree: "Master's: Technology Management",
    date: "Aug 2025",
    gpa: "GPA: 3.93/4.0",
    coursework: "Data Science, Big Data Infrastructure, Data Storytelling, Technology Strategy"
  },
  {
    id: 2,
    institution: "University of Mumbai",
    degree: "Bachelor's: Mechanical Engineering",
    date: "Jul 2022",
    gpa: "",
    coursework: ""
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-gradient-surface">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-display mb-4 font-poppins">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in technology management and engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <Card 
              key={edu.id}
              className="group relative overflow-hidden bg-card border-border/50 hover-lift transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    {edu.date}
                  </div>
                </div>

                <h3 className="text-title font-poppins font-semibold mb-2 text-foreground">
                  {edu.institution}
                </h3>
                
                <p className="text-primary font-medium mb-2">
                  {edu.degree}
                </p>

                {edu.gpa && (
                  <p className="text-muted-foreground mb-2">
                    {edu.gpa}
                  </p>
                )}

                {edu.coursework && (
                  <p className="text-muted-foreground text-sm">
                    <span className="font-medium">Relevant Coursework: </span>
                    {edu.coursework}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;