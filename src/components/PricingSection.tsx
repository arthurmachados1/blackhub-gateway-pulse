
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  popular?: boolean;
  price: string;
  description: string;
  features: PlanFeature[];
  buttonText: string;
}

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans: PricingPlan[] = [
    {
      name: "Inicial",
      price: "Gratuito",
      description: "Ideal para negócios em fase inicial com volume moderado de transações",
      features: [
        { text: "Checkout personalizado", included: true },
        { text: "Dashboard básico", included: true },
        { text: "Até 100 transações/mês", included: true },
        { text: "Sem taxas adicionais", included: true },
        { text: "Suporte por e-mail", included: true },
        { text: "Notificações por e-mail", included: true },
        { text: "Processamento em até 14 dias", included: true },
        { text: "API básica", included: false },
        { text: "Múltiplos usuários", included: false },
      ],
      buttonText: "Começar Agora",
    },
    {
      name: "Profissional",
      popular: true,
      price: "Gratuito",
      description: "Perfeito para empresas em crescimento que buscam escalabilidade",
      features: [
        { text: "Checkout personalizado", included: true },
        { text: "Dashboard completo", included: true },
        { text: "Até 1.000 transações/mês", included: true },
        { text: "Sem taxas adicionais", included: true },
        { text: "Suporte prioritário", included: true },
        { text: "Notificações em tempo real", included: true },
        { text: "Processamento em até 7 dias", included: true },
        { text: "API completa", included: true },
        { text: "Múltiplos usuários", included: true },
      ],
      buttonText: "Escolha Profissional",
    },
    {
      name: "Empresarial",
      price: "Gratuito",
      description: "Solução completa para grandes empresas com alto volume de transações",
      features: [
        { text: "Checkout totalmente customizável", included: true },
        { text: "Dashboard white label completo", included: true },
        { text: "Transações ilimitadas", included: true },
        { text: "Sem taxas adicionais", included: true },
        { text: "Suporte dedicado 24/7", included: true },
        { text: "Sistema de notificações avançado", included: true },
        { text: "Processamento diário", included: true },
        { text: "API avançada com webhooks", included: true },
        { text: "Gerenciamento de equipe", included: true },
      ],
      buttonText: "Fale com Consultor",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-blackhub-black" ref={inViewRef}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos que se adaptam ao seu negócio</h2>
          <p className="text-gray-400 text-lg mb-8">
            Escolha o plano ideal para o tamanho e necessidades da sua empresa
          </p>
          
          {/* Billing toggle - Removed since all plans are free */}
          {/* <div className="flex items-center justify-center gap-4 mb-10">
            <span className={`text-sm ${!isAnnual ? "text-gray-400" : "text-white"}`}>Mensal</span>
            
            <button 
              onClick={() => setIsAnnual(!isAnnual)} 
              className="relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none bg-blackhub-dark-gray"
              aria-checked={isAnnual}
            >
              <span className="sr-only">Toggle annual billing</span>
              <span
                className={`${
                  isAnnual ? 'translate-x-6 bg-blackhub-lime' : 'translate-x-0.5 bg-gray-500'
                } inline-block h-5 w-5 transform rounded-full transition-transform`}
              />
            </button>
            
            <span className={`text-sm ${isAnnual ? "text-white" : "text-gray-400"}`}>
              Anual <span className="text-blackhub-lime">(-15%)</span>
            </span>
          </div> */}
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 transition-all duration-1000" 
          style={{ 
            opacity: inView ? 1 : 0, 
            transform: inView ? 'translateY(0)' : 'translateY(20px)' 
          }}
        >
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`rounded-xl border ${
                plan.popular 
                  ? "border-blackhub-lime shadow-lg shadow-blackhub-lime/20" 
                  : "border-gray-800"
              } bg-blackhub-dark-gray/50 backdrop-blur-sm p-8 relative overflow-hidden card-highlight`}
            >
              {plan.popular && (
                <div className="absolute -right-12 top-6 bg-blackhub-lime text-black px-12 py-1 rotate-45 text-sm font-medium">
                  Recomendado
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Gratuito" && (
                  <span className="text-gray-400">/mês</span>
                )}
              </div>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-2">
                    <CheckCircle 
                      size={18} 
                      className={feature.included ? "text-blackhub-lime" : "text-gray-600"} 
                      fill={feature.included ? "rgba(198,255,0,0.2)" : "transparent"} 
                    />
                    <span className={feature.included ? "text-white" : "text-gray-600"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://api.whatsapp.com/send?phone=5512345678901&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  className={`w-full py-6 text-base ${
                    plan.popular 
                      ? "bg-blackhub-lime hover:bg-blackhub-lime-dark text-black" 
                      : "bg-transparent border border-gray-700 hover:bg-gray-800"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Precisa de um plano personalizado? <a href="#contact" className="text-blackhub-lime underline">Entre em contato</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
