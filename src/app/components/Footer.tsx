/* eslint-disable @next/next/no-img-element */
'use client';

import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Sistemas Web', href: '#services' },
      { label: 'Sites Institucionais', href: '#services' },
      { label: 'Landing Pages', href: '#services' },
      { label: 'Automações', href: '#services' }
    ],
    company: [
      { label: 'Sobre Nós', href: '#about' },
      // { label: 'Portfólio', href: '#portfolio' },
      { label: 'Depoimentos', href: '#testimonials' },
      { label: 'Contato', href: '#contact' }
    ],
    support: [
      { label: 'FAQ', href: '#' },
      { label: 'Suporte Técnico', href: '#' },
      { label: 'Documentação', href: '#' },
      { label: 'Política de Privacidade', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/lipetisolutions/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/lipeti', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/logo_white.svg" alt="Lipeti Logo" className="h-10 w-auto" />
          
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Transformamos ideias em soluções digitais inovadoras. 
              Especializados em desenvolvimento web, automações e tecnologias que impulsionam negócios.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-cyan-400" />
                contato@lipeti.com.br
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-cyan-400" />
                +55 (81) 9999-9999
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-cyan-400" />
                Recife, PE - Brasil
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-6">Suporte</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>*/}
        </div> 

        {/* Bottom Section */}
        <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © {currentYear} Lipeti. Todos os direitos reservados.
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <IconComponent className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;