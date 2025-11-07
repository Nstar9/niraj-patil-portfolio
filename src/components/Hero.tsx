import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-title font-poppins font-bold">Niraj Patil</div>
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#work" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Work
              </a>
              <a 
                href="#flagship-project" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('flagship-project')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Flagship Project
              </a>
              <a 
                href="#experience" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Experience
              </a>
              <a 
                href="#education" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Education
              </a>
              <a 
                href="#about" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </a>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden md:flex items-center gap-2"
              onClick={() => window.open('/Niraj_Patil_Resume.pdf', '_blank')}
            >
              <Download size={16} />
              View Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-hero mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            Niraj Patil
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-inter">
            Crafting user-centric products that drive business impact at the intersection of 
            <span className="text-primary font-medium"> data</span>, 
            <span className="text-secondary font-medium"> design</span>, and 
            <span className="text-primary font-medium"> technology</span>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button 
              variant="hero"
              size="xl" 
              className="group"
              onClick={() => {
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-primary/50 text-primary hover:bg-primary/10"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;