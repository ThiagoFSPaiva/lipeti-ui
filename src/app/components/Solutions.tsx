'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, scaleIn, staggerContainer } from '@/hooks/useScrollAnimation';
import {
  Building2,
  ShoppingCart,
  Users,
  Briefcase,
  Heart,
  GraduationCap,
  Smartphone,
} from 'lucide-react';

export default function Solutions() {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation();
  const { ref: solutionsRef, controls: solutionsControls } = useScrollAnimation();
  const { ref: ctaRef, controls: ctaControls } = useScrollAnimation();

  const solutions = [
    {
      icon: Building2,
      title: 'Empresas Corporativas',
      description:
        'Automatizamos fluxos internos e criamos sistemas sob demanda.',
      features: ['Dashboards', 'ERP', 'APIs internas', 'Compliance'],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description:
        'Plataformas otimizadas para conversão e escalabilidade online.',
      features: ['Checkout otimizado', 'Gateways', 'Integrações logísticas', 'Análises'],
    },
    {
      icon: Users,
      title: 'Startups',
      description:
        'Sites, sistemas e automações para validar e escalar ideias.',
      features: ['MVP rápido', 'Design System', 'A/B Testing', 'CI/CD'],
    },
    {
      icon: Briefcase,
      title: 'Escritórios',
      description:
        'Sites institucionais, automações e CRM para advogados e contadores.',
      features: ['Agendamento', 'Chatbots', 'Painel administrativo', 'Segurança'],
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Soluções por Segmento
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Atuamos com foco em resultados em diversos nichos do mercado.
          </motion.p>
        </motion.div>

        <motion.div
          ref={solutionsRef}
          initial="hidden"
          animate={solutionsControls}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-transparent hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 gradient-lipeti rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {solution.description}
              </p>
              <ul className="space-y-2">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 gradient-lipeti rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

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
            Solicite uma proposta <Smartphone className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

