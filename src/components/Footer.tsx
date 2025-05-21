
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blackhub-dark-gray border-t border-gray-800 pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded bg-blackhub-lime flex items-center justify-center">
                <span className="text-black font-bold text-lg">B</span>
              </div>
              <span className="ml-2 text-lg font-bold">
                Black<span className="text-blackhub-lime">Hub</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Soluções de pagamento white label para o mercado de tecnologia. Transforme seu negócio com nossa plataforma completa.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-400 hover:text-blackhub-lime">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blackhub-lime">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.012 10.012 0 01-3.127 1.184A4.92 4.92 0 0016.953 2a4.93 4.93 0 00-4.929 4.929c0 .39.044.765.125 1.126A13.98 13.98 0 013.06 3.11a4.942 4.942 0 00-.67 2.483c0 1.71.87 3.213 2.188 4.096a4.891 4.891 0 01-2.23-.616v.061a4.931 4.931 0 003.95 4.828 4.957 4.957 0 01-2.224.085 4.935 4.935 0 004.6 3.42A9.878 9.878 0 010 19.289a13.941 13.941 0 007.548 2.209c9.054 0 14.004-7.5 14.004-14.001 0-.21-.005-.42-.015-.632A10.002 10.002 0 0024 4.57h-.047z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blackhub-lime">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.84 9.49.5.09.68-.22.68-.485 0-.236-.008-.866-.013-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.608.07-.608 1.003.07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.833.09-.645.35-1.084.634-1.335-2.22-.252-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.03-2.683-.104-.253-.448-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.908-1.296 2.747-1.026 2.747-1.026.548 1.377.204 2.394.1 2.647.64.7 1.03 1.592 1.03 2.683 0 3.842-2.34 4.687-4.566 4.935.36.31.68.92.68 1.852 0 1.336-.01 2.415-.01 2.743 0 .267.18.58.688.482C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blackhub-lime">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blackhub-lime transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blackhub-lime transition-colors">Clientes</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blackhub-lime transition-colors">Carreira</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blackhub-lime transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blackhub-lime transition-colors">Notícias</a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blackhub-lime transition-colors">Plataforma</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blackhub-lime transition-colors">Documentação API</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blackhub-lime transition-colors">Integrações</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blackhub-lime transition-colors">Segurança</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blackhub-lime transition-colors">Status</a>
              </li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blackhub-lime transition-colors">Central de Ajuda</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blackhub-lime transition-colors">Entre em Contato</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blackhub-lime transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blackhub-lime transition-colors">Termos de Serviço</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blackhub-lime transition-colors">Política de Privacidade</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 mt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} BlackHub. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* WhatsApp Button (Fixed) */}
      <a 
        href="https://api.whatsapp.com/send?phone=5512345678901&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20BlackHub"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-blackhub-lime hover:bg-blackhub-lime-dark text-black rounded-full p-4 shadow-lg transition-all hover:scale-110 z-50"
      >
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.015 14.921c-.263-.137-1.555-.767-1.796-.854-.241-.087-.416-.131-.591.131-.175.262-.679.854-.833 1.029-.154.175-.308.196-.57.066-.263-.131-1.107-.41-2.107-1.303-.778-.695-1.303-1.553-1.456-1.815-.153-.263-.016-.404.115-.535.119-.118.263-.308.395-.462.131-.153.175-.262.262-.437.088-.175.044-.328-.022-.462-.065-.133-.59-1.437-.81-1.966-.213-.51-.43-.441-.591-.449-.153-.008-.328-.01-.503-.01-.175 0-.459.065-.699.327-.24.262-.917.895-.917 2.183 0 1.287.918 2.53 1.046 2.705.13.175 1.828 2.919 4.516 3.958.631.275 1.125.44 1.509.563.634.201 1.211.173 1.667.105.508-.076 1.555-.636 1.774-1.25.22-.615.22-1.141.154-1.252-.066-.11-.241-.175-.504-.284z"/>
          <path d="M12.05 0C5.4 0 0 5.399 0 12.049c0 2.101.541 4.15 1.563 5.959L.054 24l6.128-1.499c1.742.949 3.704 1.449 5.697 1.45h.005c6.649 0 12.05-5.399 12.05-12.048C23.934 5.399 18.75 0 12.05 0zm-4.49 18.6c-1.016-.324-1.919-.811-2.692-1.438l-.193-.143-1.998.515.525-1.924-.157-.25c-.699-.903-1.069-1.999-1.069-3.124 0-3.121 2.539-5.66 5.66-5.66 1.511 0 2.931.588 3.999 1.656a5.621 5.621 0 011.644 3.998c0 3.122-2.54 5.661-5.661 5.661-.186 0-.235-.006-.468-.042z" />
        </svg>
      </a>
    </footer>
  );
}
