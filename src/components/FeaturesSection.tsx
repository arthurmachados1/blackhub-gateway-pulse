
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { 
  CircleCheck, 
  CreditCard, 
  BarChart3, 
  Lock, 
  RefreshCcw, 
  SmartphoneIcon, 
  Bell 
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={inViewRef}
      className={`bg-blackhub-dark-gray/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 card-highlight transition-all duration-700 ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-blackhub-lime/20 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
        <div className="text-blackhub-lime">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-blackhub-black relative">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blackhub-lime/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recursos poderosos para seu negócio</h2>
          <p className="text-gray-400 text-lg">
            Soluções white label completas para modernizar seu sistema de pagamentos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<CreditCard size={24} />}
            title="Checkout Personalizado"
            description="Checkout totalmente personalizado com sua marca e identidade visual para uma experiência perfeita."
            delay={100}
          />
          <FeatureCard
            icon={<BarChart3 size={24} />}
            title="Analytics em Tempo Real"
            description="Acompanhe todas as métricas importantes do seu negócio em tempo real com dashboards avançados."
            delay={200}
          />
          <FeatureCard
            icon={<Lock size={24} />}
            title="Segurança Avançada"
            description="Proteção de dados e transações com criptografia de ponta a ponta e conformidade PCI DSS."
            delay={300}
          />
          <FeatureCard
            icon={<RefreshCcw size={24} />}
            title="Integração Automática"
            description="API robusta e fácil integração com seu sistema atual sem complicações técnicas."
            delay={400}
          />
          <FeatureCard
            icon={<SmartphoneIcon size={24} />}
            title="Mobile First"
            description="Experiência otimizada para dispositivos móveis com responsividade completa."
            delay={500}
          />
          <FeatureCard
            icon={<Bell size={24} />}
            title="Aplicativo com Notificações"
            description="Aplicativo próprio com notificações em tempo real para todas as transações do seu negócio."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
}
