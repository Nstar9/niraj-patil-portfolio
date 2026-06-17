import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";

import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <main>
        <FeaturedProjects />
        
        <Experience />
        <Skills />
        <Education />
        <About />
      </main>
      <Footer />
    </div>
  );
};


export default Index;