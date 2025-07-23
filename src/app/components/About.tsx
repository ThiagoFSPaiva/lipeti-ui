'use client';

import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref: contentRef, controls: contentControls } = useScrollAnimation(0.2);
  const { ref: valuesRef, controls: valuesControls } = useScrollAnimation(0.1);

  const values = [
    {
      icon: Users,
      title: 'Foco no Cliente',
      description: 'Colocamos as necessidades dos nossos clientes em primeiro lugar, desenvolvendo soluções personalizadas.'
    },
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Entregamos projetos com os mais altos padrões de qualidade, usando as melhores práticas do mercado.'
    },
    {
      icon: Clock,
      title: 'Agilidade',
      description: 'Metodologias ágeis garantem entregas no prazo sem comprometer a qualidade do resultado final.'
    },
    {
      icon: Heart,
      title: 'Paixão por Tecnologia',
      description: 'Nossa equipe é apaixonada por tecnologia e está sempre atualizada com as últimas tendências.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            ref={contentRef}
            initial="hidden"
            animate={contentControls}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInLeft} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre a{' '}
              <span className="gradient-lipeti-text">
                Lipeti
              </span>
            </motion.h2>
            
            <motion.p variants={fadeInLeft} className="text-lg text-gray-600 mb-8 leading-relaxed">
              Somos uma empresa especializada em desenvolvimento de soluções digitais inovadoras. 
              Com mais de 5 anos de experiência no mercado, já entregamos mais de 200 projetos 
              para empresas de diversos segmentos.
            </motion.p>
            
            <motion.p variants={fadeInLeft} className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa missão é transformar ideias em soluções tecnológicas que geram resultados 
              reais para nossos clientes, sempre priorizando a excelência técnica e a satisfação 
              do cliente.
            </motion.p>

            <motion.div variants={fadeInLeft} className="grid grid-cols-2 gap-6 mb-8">
              <motion.div 
                variants={fadeInUp}
                className="text-center p-4 bg-white rounded-lg border border-gray-200"
              >
                <div className="text-2xl font-bold text-blue-700 mb-1">200+</div>
                <div className="text-gray-600 text-sm">Projetos Entregues</div>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="text-center p-4 bg-white rounded-lg border border-gray-200"
              >
                <div className="text-2xl font-bold text-cyan-600 mb-1">98%</div>
                <div className="text-gray-600 text-sm">Taxa de Satisfação</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Values */}
          <motion.div 
            ref={valuesRef}
            initial="hidden"
            animate={valuesControls}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInRight}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 gradient-lipeti rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;