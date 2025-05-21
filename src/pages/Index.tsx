
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyBlackhubSection from "@/components/WhyBlackhubSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  // Create a ref for the element we want to apply the intersection observer to
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preload any assets or perform any initialization
    console.log("BlackHub Landing Page loaded");
    
    // Example of how to handle sections visibility on scroll with IntersectionObserver
    // This could be expanded to add more animation effects
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is visible in the viewport
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    // Select all sections for animations
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("transition-all", "duration-1000");
      observer.observe(section);
    });

    return () => {
      // Clean up the observer when the component unmounts
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div ref={mainRef} className="bg-blackhub-black text-white font-sora overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WhyBlackhubSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
