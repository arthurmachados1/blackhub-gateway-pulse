
import { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    id: 1,
    name: "Carlos Eduardo",
    position: "CEO, TechPay",
    image: "/placeholder.svg",
    text: "A BlackHub transformou completamente nossa operação de pagamentos. A integração foi simples e os resultados foram imediatos com um aumento de 32% nas conversões.",
  },
  {
    id: 2,
    name: "Ana Luiza",
    position: "Diretora Financeira, E-Shop",
    image: "/placeholder.svg",
    text: "A qualidade do suporte técnico e a robustez da plataforma são impressionantes. Nossos clientes adoram a experiência de checkout personalizada.",
  },
  {
    id: 3,
    name: "Rafael Mendes",
    position: "CTO, FinTech Solutions",
    image: "/placeholder.svg",
    text: "Depois de testar várias soluções de pagamento, a BlackHub foi claramente superior. A API é muito bem documentada e a estabilidade do sistema é notável.",
  },
  {
    id: 4,
    name: "Mariana Costa",
    position: "Diretora de Operações, Shopify Partners",
    image: "/placeholder.svg",
    text: "A BlackHub nos permitiu oferecer uma solução de pagamento white label aos nossos clientes, aumentando nossa receita em mais de 45% no último trimestre.",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  // Auto rotate testimonials
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [inView, handleNext]);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blackhub-dark-gray to-blackhub-black" ref={inViewRef}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-gray-400 text-lg">
            Empresas de todos os tamanhos confiam na BlackHub para suas soluções de pagamento
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main testimonial */}
          <div 
            className="bg-blackhub-dark-gray/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 transition-all duration-500"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-blackhub-lime/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blackhub-lime">
                    {testimonials[activeIndex].name.charAt(0)}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div>
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="inline-block w-5 h-5 text-blackhub-lime" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-xl italic mb-6">
                  "{testimonials[activeIndex].text}"
                </blockquote>
                
                <div>
                  <p className="font-semibold text-lg">{testimonials[activeIndex].name}</p>
                  <p className="text-gray-400">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full border border-gray-700 hover:border-blackhub-lime hover:bg-blackhub-lime/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === activeIndex 
                      ? "bg-blackhub-lime w-6" 
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="p-3 rounded-full border border-gray-700 hover:border-blackhub-lime hover:bg-blackhub-lime/10 transition-colors"
              aria-label="Next testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Logos */}
        <div className="mt-16 opacity-70">
          <p className="text-center text-sm text-gray-500 mb-6">EMPRESAS QUE CONFIAM NA BLACKHUB</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["TechPay", "E-Shop", "FinTech", "Shopify Partners", "PaySolutions"].map((company, idx) => (
              <div key={idx} className="text-gray-400 font-bold text-lg">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
