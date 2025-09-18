import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import MoreProjects from "@/components/MoreProjects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProjects />
      <MoreProjects />
      <Experience />
      <Skills />
      <About />
      <Footer />
    </div>
  );
};

export default Index;