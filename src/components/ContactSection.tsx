
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send the form data to a server
    console.log({ name, email, message });
    alert("Mensagem recebida! Entraremos em contato em breve.");
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 bg-blackhub-black relative" ref={inViewRef}>
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blackhub-lime/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left side - Contact info */}
            <div 
              className="lg:w-2/5 transition-all duration-1000"
              style={{ 
                opacity: inView ? 1 : 0, 
                transform: inView ? 'translateX(0)' : 'translateX(-20px)' 
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pronto para revolucionar seus <span className="text-blackhub-lime">pagamentos</span>?
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Entre em contato com nossa equipe e descubra como a BlackHub pode transformar seu negócio.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fale Conosco</h3>
                  <p className="text-gray-400">
                    Nossa equipe está pronta para responder todas as suas dúvidas e mostrar como podemos ajudar.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Contato Direto</h3>
                  <a href="mailto:contato@blackhub.com.br" className="text-blackhub-lime block mb-1">
                    contato@blackhub.com.br
                  </a>
                  <a href="tel:+5501234567890" className="text-blackhub-lime block">
                    +55 (01) 2345-67890
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                  <p className="text-gray-400">
                    Av. Paulista, 1000<br />
                    Bela Vista, São Paulo - SP<br />
                    CEP: 01310-100
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Contact form */}
            <div 
              className="lg:w-3/5 transition-all duration-1000"
              style={{ 
                opacity: inView ? 1 : 0, 
                transform: inView ? 'translateX(0)' : 'translateX(20px)' 
              }}
            >
              <div className="bg-blackhub-dark-gray/40 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-6">Envie uma mensagem</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-blackhub-dark-gray border border-gray-700 rounded-lg focus:outline-none focus:border-blackhub-lime transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-blackhub-dark-gray border border-gray-700 rounded-lg focus:outline-none focus:border-blackhub-lime transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-blackhub-dark-gray border border-gray-700 rounded-lg focus:outline-none focus:border-blackhub-lime transition-colors resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full py-6 bg-blackhub-lime hover:bg-blackhub-lime-dark text-black font-medium text-lg"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
