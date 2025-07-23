'use client';

import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';
import { motion, Variants, easeInOut } from 'framer-motion';
import { useScrollAnimation, staggerContainer } from '@/hooks/useScrollAnimation';

const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};

const About = () => {
  const { ref: contentRef, controls: contentControls } = useScrollAnimation();
  const { ref: valuesRef, controls: valuesControls } = useScrollAnimation();

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
              Somos uma equipe especializada em desenvolvimento web, automações e soluções tecnológicas de ponta. Nosso objetivo é transformar ideias em experiências digitais excepcionais.
            </motion.p>
          </motion.div>

          {/* Valores */}
          <motion.div 
            ref={valuesRef}
            initial="hidden"
            animate={valuesControls}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition-shadow"
              >
                <value.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;