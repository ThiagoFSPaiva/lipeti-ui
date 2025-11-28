import React from 'react';
import { Hexagon, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img alt="Lipeti Logo" width="120" height="35" className="h-[35px] w-auto" src="/logo_white.svg"/>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Criando o futuro digital com design de ponta e código robusto.
            </p>
            <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/lipeti" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
                <a href="https://www.instagram.com/lipetisolutions/" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Links Columns */}
          {/* <div>
            <h4 className="text-white font-semibold mb-6">Empresa</h4>
            <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-lipeti-400 transition-colors">Sobre nós</a></li>
                <li><a href="#" className="hover:text-lipeti-400 transition-colors">Contato</a></li>
            </ul>
          </div> */}

          <div>
            <h4 className="text-white font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-lipeti-400 transition-colors">Desenvolvimento Web</a></li>
                <li><a href="#" className="hover:text-lipeti-400 transition-colors">Apps Mobile</a></li>
                <li><a href="#" className="hover:text-lipeti-400 transition-colors">Automação</a></li>
                <li><a href="#" className="hover:text-lipeti-400 transition-colors">Consultoria</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs">
                &copy; 2025 Lipeti. Todos os direitos reservados.
            </p>
  
        </div>
      </div>
    </footer>
  );
};