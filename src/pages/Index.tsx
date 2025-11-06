import Hero from "@/components/Hero";
import ZenoHero from "@/components/ZenoHero";
import FeaturedProjects from "@/components/FeaturedProjects";
import MoreProjects from "@/components/MoreProjects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ZenoHero />
      <FeaturedProjects />
      <MoreProjects />
      <Experience />
      <Skills />
      <Education />
      <About />
      <Footer />
    </div>
  );
};

export default Index;