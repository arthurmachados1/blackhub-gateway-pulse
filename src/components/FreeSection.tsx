
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";

export default function FreeSection() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    "Checkout personalizado",
    "Dashboard completo",
    "Transações ilimitadas",
    "API completa",
    "Suporte dedicado",
    "Notificações em tempo real",
    "Processamento rápido",
    "Múltiplos usuários",
    "100% Gratuito",
  ];

  return (
    <section id="free" className="py-20 bg-blackhub-black" ref={inViewRef}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Uma plataforma <span className="text-blackhub-lime">100% gratuita</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Desfrute de todas as funcionalidades sem pagar nenhuma taxa
          </p>
        </div>

        <div 
          className="transition-all duration-1000 max-w-4xl mx-auto" 
          style={{ 
            opacity: inView ? 1 : 0, 
            transform: inView ? 'translateY(0)' : 'translateY(20px)' 
          }}
        >
          <Card className="bg-gradient-to-b from-blackhub-dark-gray/80 to-black border border-blackhub-lime/20 shadow-lg shadow-blackhub-lime/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blackhub-lime/20 rounded-full blur-[80px] -z-0" />
            
            <div className="p-8 md:p-12 relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">BlackHub Gateway</h3>
                  <div className="flex items-center bg-blackhub-lime/20 text-blackhub-lime rounded-full px-4 py-1 text-sm font-medium w-fit mb-6">
                    <span className="mr-1">✓</span> Sempre Gratuito
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    Aproveite nossa plataforma completa de pagamentos sem custos ocultos ou taxas adicionais. Uma solução white label gratuita para revolucionar seus negócios.
                  </p>
                  
                  <a 
                    href="https://api.whatsapp.com/send?phone=5512345678901&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20plataforma%20gratuita%20BlackHub" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      className="bg-blackhub-lime hover:bg-blackhub-lime-dark text-black px-8 py-6 text-base font-medium rounded-xl"
                    >
                      Começar Agora
                    </Button>
                  </a>
                </div>
                
                <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle 
                        size={18} 
                        className="text-blackhub-lime" 
                        fill="rgba(198,255,0,0.2)" 
                      />
                      <span className="text-white">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Tem alguma dúvida? <a href="#contact" className="text-blackhub-lime underline">Entre em contato</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
