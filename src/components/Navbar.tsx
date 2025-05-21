
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={cn("fixed top-0 w-full z-50 transition-all duration-300", 
      scrolled ? "bg-blackhub-dark-gray/90 backdrop-blur-lg py-3 shadow-lg" : "bg-transparent py-4 sm:py-5")}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-8 w-8 sm:h-9 sm:w-9 rounded bg-blackhub-lime flex items-center justify-center">
            <span className="text-black font-bold text-lg sm:text-xl">B</span>
          </div>
          <span className="ml-2 text-lg sm:text-xl font-bold">
            Black<span className="text-blackhub-lime">Hub</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <a href="#features" className="text-gray-300 hover:text-blackhub-lime transition-colors text-sm lg:text-base">
            Recursos
          </a>
          <a href="#why-blackhub" className="text-gray-300 hover:text-blackhub-lime transition-colors text-sm lg:text-base">
            Por que BlackHub?
          </a>
          <a href="#free" className="text-gray-300 hover:text-blackhub-lime transition-colors text-sm lg:text-base">
            Gratuito
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-blackhub-lime transition-colors text-sm lg:text-base">
            Depoimentos
          </a>
          <a href="#contact" className="mobile-button px-4 lg:px-5 py-2 rounded-lg bg-blackhub-lime text-black font-semibold hover:bg-blackhub-lime-dark transition-colors text-sm lg:text-base">
            Contato
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu} 
            className="mobile-button text-white focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-blackhub-dark-gray/95 backdrop-blur-lg",
        mobileMenuOpen ? "max-h-[300px] py-4" : "max-h-0")}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#features" className="text-gray-300 hover:text-blackhub-lime transition-colors py-3 text-center" onClick={closeMenu}>
            Recursos
          </a>
          <a href="#why-blackhub" className="text-gray-300 hover:text-blackhub-lime transition-colors py-3 text-center" onClick={closeMenu}>
            Por que BlackHub?
          </a>
          <a href="#free" className="text-gray-300 hover:text-blackhub-lime transition-colors py-3 text-center" onClick={closeMenu}>
            Gratuito
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-blackhub-lime transition-colors py-3 text-center" onClick={closeMenu}>
            Depoimentos
          </a>
          <a href="#contact" className="mobile-button px-5 py-3 rounded-lg bg-blackhub-lime text-black font-semibold hover:bg-blackhub-lime-dark transition-colors mx-auto text-center w-full" onClick={closeMenu}>
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}
