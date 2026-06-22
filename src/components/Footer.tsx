import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download, Github, ExternalLink } from "lucide-react";
import resumeAsset from "@/assets/Niraj_Patil_Resume.pdf.asset.json";

const resumeUrl = new URL(resumeAsset.url, "https://niraj-architect-next.lovable.app").toString();

const Footer = () => {
  return (
    <footer id="contact" className="py-24 px-6 bg-background border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
              Get in touch
            </div>
            <h2 className="text-display font-poppins leading-tight">
              Have an idea worth <span className="text-secondary">shipping</span>?
            </h2>
          </div>
          <div className="space-y-3">
            <a
              href="mailto:bnirajpatil9@gmail.com"
              className="group flex items-center justify-between gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-medium text-foreground">bnirajpatil9@gmail.com</div>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://www.linkedin.com/in/nirajpatil01/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Nstar9"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <Github className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <Download className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Resume</span>
              </a>
            </div>
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
              <a href="#education" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Education
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