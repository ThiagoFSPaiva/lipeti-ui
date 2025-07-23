'use client';

import { fadeInUp, scaleIn, staggerContainer, useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { Code2, Globe, Smartphone, TrendingUp, Zap } from 'lucide-react';

const Services = () => {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation();
  const { ref: servicesRef, controls: servicesControls } = useScrollAnimation();
  const { ref: ctaRef, controls: ctaControls } = useScrollAnimation();

  const services = [
    {
      icon: Code2,
      title: 'Sistemas Web',
      description: 'Desenvolvimento de sistemas web robustos e escaláveis, adaptados às necessidades específicas do seu negócio.',
      features: ['Arquitetura moderna', 'Alta performance', 'Segurança avançada', 'Integração com APIs'],
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Globe,
      title: 'Sites Institucionais',
      description: 'Sites profissionais que representam sua marca com elegância e funcionalidade, otimizados para conversão.',
      features: ['Design responsivo', 'SEO otimizado', 'CMS integrado', 'Analytics'],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: TrendingUp,
      title: 'Landing Pages',
      description: 'Páginas de alta conversão focadas em resultados, com design persuasivo e otimização contínua.',
      features: ['Conversão otimizada', 'A/B Testing', 'Integração CRM', 'Analytics avançado'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Automações',
      description: 'Automatize processos repetitivos e integre seus sistemas para máxima eficiência operacional.',
      features: ['Workflows personalizados', 'Integração de sistemas', 'Relatórios automáticos', 'Notificações'],
      color: 'from-cyan-600 to-blue-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
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
            Nossos Serviços
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia para impulsionar seu negócio 
            no mundo digital com qualidade e inovação.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          ref={servicesRef}
          initial="hidden"
          animate={servicesControls}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-transparent hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 gradient-lipeti rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 gradient-lipeti rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
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
            className="gradient-lipeti text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
          >
            Solicitar Orçamento
            <Smartphone className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;