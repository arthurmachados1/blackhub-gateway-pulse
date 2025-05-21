
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blackhub-dark-gray border-t border-gray-800 pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Logo and Description */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded bg-blackhub-lime flex items-center justify-center">
                <span className="text-black font-bold text-lg">B</span>
              </div>
              <span className="ml-2 text-lg font-bold">
                Black<span className="text-blackhub-lime">Hub</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 text-center">
              Soluções de pagamento white label para o mercado de tecnologia. Transforme seu negócio com nossa plataforma completa, sem taxas extras e com suporte especializado.
            </p>
            
            {/* Instagram Icon - Will be editable for user to add their link */}
            <div className="flex space-x-4">
              {/* Instagram Icon - Change the href to your Instagram profile URL */}
              <a 
                href="#" 
                id="instagram-link" 
                className="text-gray-400 hover:text-blackhub-lime transition-colors"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 mt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} BlackHub. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
