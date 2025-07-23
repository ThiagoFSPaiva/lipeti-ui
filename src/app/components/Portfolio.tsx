/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer, scaleIn } from '@/hooks/useScrollAnimation';

const Portfolio = () => {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation();
  const { ref: projectsRef, controls: projectsControls } = useScrollAnimation();
  const { ref: ctaRef, controls: ctaControls } = useScrollAnimation();

  const projects = [
    {
      title: 'Sistema de Gestão ERP',
      category: 'Sistema Web',
      description: 'Sistema completo de gestão empresarial com módulos de vendas, estoque, financeiro e relatórios.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'E-commerce Moderno',
      category: 'Site Institucional',
      description: 'Plataforma de vendas online com design responsivo, pagamento integrado e painel administrativo.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Next.js', 'Stripe', 'MongoDB', 'Vercel'],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'Landing Page de Conversão',
      category: 'Landing Page',
      description: 'Página otimizada para conversão de leads com formulários inteligentes e analytics avançado.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Tailwind', 'Analytics', 'A/B Test'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Automação de Marketing',
      category: 'Automação',
      description: 'Sistema de automação de email marketing com segmentação avançada e relatórios detalhados.',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Python', 'APIs', 'Machine Learning', 'Docker'],
      color: 'from-cyan-600 to-blue-600'
    },
    {
      title: 'App de Delivery',
      category: 'Sistema Web',
      description: 'Aplicação completa para delivery com geolocalização, pagamentos e sistema de avaliações.',
      image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React Native', 'Firebase', 'Maps API', 'PayPal'],
      color: 'from-blue-600 to-cyan-400'
    },
    {
      title: 'Dashboard Analítico',
      category: 'Sistema Web',
      description: 'Dashboard interativo com visualizações de dados em tempo real e relatórios personalizados.',
      image: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['D3.js', 'React', 'GraphQL', 'Redis'],
      color: 'from-blue-700 to-cyan-500'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nosso Portfólio
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e os resultados 
            que alcançamos para nossos clientes.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          ref={projectsRef}
          initial="hidden"
          animate={projectsControls}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 px-3 py-1 gradient-lipeti text-white text-xs font-medium rounded-full">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Ver Projeto
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-gray-700 font-medium text-sm">
                    <Github className="h-4 w-4 mr-1" />
                    Código
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          ref={ctaRef}
          initial="hidden"
          animate={ctaControls}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="gradient-lipeti text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-block"
          >
            Quero um Projeto Assim
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;