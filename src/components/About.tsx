import nirajGraduation from "@/assets/niraj-graduation.jpg";

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
                  src={nirajGraduation} 
                  alt="Niraj Patil - Product Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-surface rounded-xl p-4 border border-border shadow-elegant">
                <div className="text-lg font-bold text-secondary">Tenaciously Optimistic</div>
              </div>
            </div>
          </div>

          {/* Right Column - Bio */}
          <div className="space-y-8">
            <div>
              <h2 className="text-display mb-6 font-poppins">The Architect of What's Next</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a Product Engineer driven by a fascination with how technology can solve real-world human problems. My journey led me to a Master's in <span className="text-secondary font-medium">Technology Management</span> from the University of Illinois Urbana-Champaign, where I honed my ability to bridge the gap between complex technical challenges and seamless user experiences.
                </p>
                <p>
                  I thrive on digging into user data, crafting data-driven strategies, and collaborating with cross-functional teams to ship products that not only work but feel intuitive and essential. I'm particularly passionate about the challenges and opportunities within the <span className="text-primary font-medium">AI</span> and <span className="text-secondary font-medium">fintech</span> spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
