import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Principles from "@/components/sections/Principles";
import CollaborationModels from "@/components/sections/CollaborationModels";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import AnimatedSection from "@/components/AnimatedSection";

export default function Page() {
  return (
    <>
      <Hero />
      
      <AnimatedSection animation="slideUp">
        <Services />
      </AnimatedSection>
      
      <AnimatedSection animation="fade">
        <About />
      </AnimatedSection>
      
      <AnimatedSection animation="slideUp">
        <Principles />
      </AnimatedSection>
      
      <AnimatedSection animation="fade">
        <CollaborationModels />
      </AnimatedSection>
      
      <AnimatedSection animation="slideUp">
        <Projects />
      </AnimatedSection>
      
      <AnimatedSection animation="fade">
        <Certifications />
      </AnimatedSection>
      
      <AnimatedSection animation="slideUp">
        <Contact />
      </AnimatedSection>
    </>
  );
}