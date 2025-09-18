import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download, Github, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-20 px-6 bg-background border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-display mb-4 font-poppins">Let's Build Something Amazing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your product vision into measurable impact? 
            Let's discuss how we can drive growth together.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <Button 
            variant="hero"
            size="xl" 
            className="group"
            onClick={() => window.open('mailto:bnirajpatil9@gmail.com', '_blank')}
          >
            <Mail className="mr-2 h-5 w-5" />
            bnirajpatil9@gmail.com
          </Button>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="xl" className="border-border hover:border-primary/50">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            
            <Button variant="outline" size="xl" className="border-border hover:border-primary/50">
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">24h</div>
            <div className="text-sm text-muted-foreground">Typical Response Time</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-secondary">Remote</div>
            <div className="text-sm text-muted-foreground">Open to Global Opportunities</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">MAANG</div>
            <div className="text-sm text-muted-foreground">Target Companies</div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-muted-foreground">
              © 2024 Niraj Patil. Crafted with precision and purpose.
            </div>
            <div className="flex items-center gap-6">
              <a href="#work" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Work
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Experience
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                About
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;