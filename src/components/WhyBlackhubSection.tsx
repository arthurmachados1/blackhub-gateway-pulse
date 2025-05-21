
import { CheckCircle, Shield, Zap, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function WhyBlackhubSection() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const advantages = [
    {
      icon: <Zap className="text-blackhub-lime" size={24} />,
      title: "Tecnologia de Ponta",
      description: "Infraestrutura robusta e moderna para processamento rápido e confiável.",
    },
    {
      icon: <Shield className="text-blackhub-lime" size={24} />,
      title: "Segurança Total",
      description: "Certificações de segurança e proteção contra fraudes em todos os níveis.",
    },
    {
      icon: <CheckCircle className="text-blackhub-lime" size={24} />,
      title: "Sem Taxas Extras",
      description: "Serviço completo sem custos adicionais ou taxas escondidas.",
    },
    {
      icon: <CheckCircle className="text-blackhub-lime" size={24} />,
      title: "Personalização Completa",
      description: "Adapte a plataforma à sua marca e necessidades específicas.",
    },
    {
      icon: <Users className="text-blackhub-lime" size={24} />,
      title: "Suporte Exclusivo",
      description: "Equipe dedicada que conhece seu negócio em profundidade.",
    },
  ];

  return (
    <section 
      id="why-blackhub" 
      className="py-20 bg-gradient-to-b from-blackhub-black to-blackhub-dark-gray"
      ref={inViewRef}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Mockup */}
          <div 
            className={`lg:w-1/2 transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            {/* Dashboard Mockup */}
            <div className="relative">
              <div className="bg-blackhub-dark-gray rounded-xl border border-gray-800 shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-blackhub-black p-4 border-b border-gray-800 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-blackhub-lime"></div>
                    <span className="text-sm font-medium">Painel Administrativo</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                    <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                    <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blackhub-black/50 rounded-lg p-4">
                      <h4 className="text-sm text-gray-400 mb-1">Saldo Disponível</h4>
                      <p className="text-2xl font-bold">R$ 128.450,00</p>
                      <div className="flex items-center mt-1">
                        <span className="text-blackhub-lime text-xs">+12% esta semana</span>
                      </div>
                    </div>
                    <div className="bg-blackhub-black/50 rounded-lg p-4">
                      <h4 className="text-sm text-gray-400 mb-1">Total Processado</h4>
                      <p className="text-2xl font-bold">R$ 3.482.917,50</p>
                      <div className="flex items-center mt-1">
                        <span className="text-blackhub-lime text-xs">+8% este mês</span>
                      </div>
                    </div>
                  </div>

                  {/* Transactions */}
                  <h4 className="text-sm font-medium mb-3">Transações Recentes</h4>
                  <div className="space-y-3">
                    {[
                      { name: "Assinatura Premium", amount: "R$ 297,00", status: "Aprovado", time: "Hoje, 14:23" },
                      { name: "Serviço de Consultoria", amount: "R$ 1.750,00", status: "Aprovado", time: "Hoje, 11:15" },
                      { name: "Plano Empresarial", amount: "R$ 3.500,00", status: "Processando", time: "Hoje, 09:47" },
                      { name: "Upgrade de Licença", amount: "R$ 890,00", status: "Aprovado", time: "Ontem, 17:32" },
                    ].map((tx, i) => (
                      <div key={i} className="bg-blackhub-black/30 rounded-lg p-3 flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">{tx.name}</p>
                          <p className="text-xs text-gray-400">{tx.time}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{tx.amount}</p>
                          <p className={`text-xs ${
                            tx.status === "Aprovado" ? "text-blackhub-lime" : "text-yellow-500"
                          }`}>
                            {tx.status}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating crypto card */}
              <div className="absolute -bottom-10 -right-10 md:right-[-40px] w-64 bg-blackhub-black border border-gray-800 rounded-lg p-4 shadow-lg animate-float">
                <h3 className="text-sm font-medium mb-2">Saque em Crypto</h3>
                <div className="bg-blackhub-dark-gray/80 rounded-lg p-3 mb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Valor</span>
                    <span className="text-sm font-medium">R$ 5.000,00</span>
                  </div>
                </div>
                <div className="bg-blackhub-dark-gray/80 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Wallet</span>
                    <span className="text-xs font-medium truncate w-28">0x71C...F39B</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-blackhub-lime rounded-lg text-black text-sm font-medium">
                  Processar Saque
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div 
            className={`lg:w-1/2 transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher a <span className="text-blackhub-lime">BlackHub</span>?</h2>
            <p className="text-gray-400 text-lg mb-8">
              Desenvolvemos uma plataforma robusta e segura que se adapta perfeitamente ao seu negócio, aumentando suas conversões e simplificando a gestão financeira.
            </p>

            <div className="space-y-5">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">{advantage.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{advantage.title}</h3>
                    <p className="text-gray-400">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a 
                href="https://api.whatsapp.com/send?phone=5512345678901&text=Olá,%20gostaria%20de%20saber%20por%20que%20a%20BlackHub%20é%20a%20melhor%20escolha"
                className="inline-flex items-center gap-2 bg-blackhub-lime hover:bg-blackhub-lime-dark text-black font-medium px-6 py-3 rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saiba Mais
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
