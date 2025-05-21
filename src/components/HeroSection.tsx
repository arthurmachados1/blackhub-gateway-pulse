
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [highlightAnimation, setHighlightAnimation] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Create animation effect for the highlighted text
    const intervalId = setInterval(() => {
      setHighlightAnimation(prev => !prev);
    }, 2000);
    
    return () => clearInterval(intervalId);
  }, []);

  const features = [
    "Sem taxa de manutenção ou custos extras",
    "Conversão direta para saque em cripto",
    "Tecnologia exclusiva com código próprio",
    "Checkout e pixel altamente otimizado",
  ];

  return (
    <section className="min-h-screen bg-blackhub-black pt-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blackhub-lime/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blackhub-lime/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-80px)] gap-12">
        {/* Text Content */}
        <div 
          className={`md:w-1/2 space-y-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Seu próprio gateway de pagamentos. <br />
            <span className="flex flex-wrap items-center">
              <span className={`text-blackhub-lime transition-all duration-500 ${highlightAnimation ? 'opacity-80 scale-105' : 'opacity-100 scale-100'}`}>
                Sem taxas.
              </span>
              <span className="mx-2"></span>
              <span className={`text-blackhub-lime transition-all duration-500 ${!highlightAnimation ? 'opacity-80 scale-105' : 'opacity-100 scale-100'}`}>
                Sem limites.
              </span>
            </span>
          </h1>
          
          <div className="pt-4 space-y-3">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 text-gray-200 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CheckCircle size={18} className="text-blackhub-lime" fill="rgba(198,255,0,0.2)" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://api.whatsapp.com/send?phone=5512345678901&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20BlackHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blackhub-lime hover:bg-blackhub-lime-dark text-black font-medium text-lg px-8 py-6 rounded-xl w-full sm:w-auto">
                Falar com Especialista
              </Button>
            </a>
            <a href="#free">
              <Button 
                variant="outline" 
                className="border-white/20 hover:bg-white/5 text-lg px-8 py-6 rounded-xl w-full sm:w-auto"
              >
                Conheça BlackHub
              </Button>
            </a>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div 
          className={`md:w-1/2 relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="relative">
            {/* Main dashboard mockup */}
            <div className="bg-blackhub-dark-gray border border-gray-800 rounded-xl shadow-2xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="px-6 py-4 border-b border-gray-800 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blackhub-lime"></div>
                  <span className="text-sm font-medium text-white">BlackHub Dashboard</span>
                </div>
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-gray-600"></div>
                  <div className="h-3 w-3 rounded-full bg-gray-600"></div>
                  <div className="h-3 w-3 rounded-full bg-gray-600"></div>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Visão Geral</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blackhub-light-gray/50 p-4 rounded-lg">
                      <p className="text-sm text-gray-400">Transações</p>
                      <p className="text-xl font-bold">R$ 23.450</p>
                      <p className="text-xs text-blackhub-lime">+12,5%</p>
                    </div>
                    <div className="bg-blackhub-light-gray/50 p-4 rounded-lg">
                      <p className="text-sm text-gray-400">Clientes</p>
                      <p className="text-xl font-bold">1,245</p>
                      <p className="text-xs text-blackhub-lime">+7,8%</p>
                    </div>
                    <div className="bg-blackhub-light-gray/50 p-4 rounded-lg">
                      <p className="text-sm text-gray-400">Conversão</p>
                      <p className="text-xl font-bold">89%</p>
                      <p className="text-xs text-blackhub-lime">+3,2%</p>
                    </div>
                  </div>
                </div>
                
                {/* Chart area */}
                <div className="bg-blackhub-light-gray/30 rounded-lg p-4 h-48">
                  <div className="h-full flex items-end justify-between gap-1">
                    {[40, 65, 35, 85, 55, 70, 90, 45, 65, 80, 35, 60].map((height, index) => (
                      <div 
                        key={index} 
                        className="bg-gradient-to-t from-blackhub-lime/70 to-blackhub-lime rounded-t-sm w-full"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating checkout card - Updated to show it's free */}
            <div className="absolute -bottom-10 -right-10 w-56 bg-blackhub-dark-gray border border-gray-800 rounded-lg shadow-lg p-3 animate-float">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-medium">Checkout</h4>
                <div className="h-2 w-2 rounded-full bg-blackhub-lime"></div>
              </div>
              <div className="bg-blackhub-light-gray/30 p-2 rounded-md mb-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Valor:</span>
                  <span className="font-medium">R$ 299,90</span>
                </div>
              </div>
              <div className="bg-blackhub-light-gray/30 p-2 rounded-md mb-3">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Status:</span>
                  <span className="font-medium text-blackhub-lime">Gratuito</span>
                </div>
              </div>
              <button className="w-full py-1.5 bg-blackhub-lime rounded-md text-xs font-medium text-black">
                Processar Pagamento
              </button>
            </div>

            {/* Floating notifications card */}
            <div className="absolute -top-5 -left-5 w-48 bg-blackhub-dark-gray border border-gray-800 rounded-lg shadow-lg p-3 animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-2 w-2 rounded-full bg-blackhub-lime animate-pulse-light"></div>
                <h4 className="text-xs font-medium">Notificações</h4>
              </div>
              <div className="space-y-2">
                <div className="bg-blackhub-light-gray/30 p-2 rounded-md">
                  <p className="text-xs">Nova transação: R$ 1.299</p>
                  <p className="text-[10px] text-gray-400">2 min atrás</p>
                </div>
                <div className="bg-blackhub-light-gray/30 p-2 rounded-md">
                  <p className="text-xs">Saque realizado: R$ 5.600</p>
                  <p className="text-[10px] text-gray-400">15 min atrás</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
