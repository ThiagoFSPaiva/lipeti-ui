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
} from 'lucide-react';

const Solutions = () => {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation();
  const { ref: gridRef, controls: gridControls } = useScrollAnimation();
  const { ref: ctaRef, controls: ctaControls } = useScrollAnimation();

  const solutions = [
    {
      icon: Building2,
      title: 'Empresas Corporativas',
      description:
        'Automatizamos fluxos internos, criamos dashboards e sistemas personalizados para grandes organizações.',
      stats: '💼 85% das empresas Fortune 500 usam soluções similares.',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description:
        'Landing pages e plataformas otimizadas para conversão, integradas a ferramentas de pagamento e logística.',
      stats: '🛒 Aumento médio de 240% nas conversões.',
    },
    {
      icon: Users,
      title: 'Startups',
      description:
        'Ajudamos a tirar ideias do papel com sites, sistemas e automações sob demanda, prontos para crescer com você.',
      stats: '🚀 Startups aceleram até 3x com tecnologia sob medida.',
    },
    {
      icon: Briefcase,
      title: 'Advocacia e Escritórios',
      description:
        'Sites institucionais, sistemas de agendamento e automações de atendimento para melhorar a rotina de escritórios.',
      stats: '⚖️ Escritórios reduzem até 60% do tempo com tarefas administrativas.',
    },
    {
      icon: Heart,
      title: 'Saúde',
      description:
        'Automatizamos o atendimento em clínicas com sistemas para agendamento, prontuários, follow-ups e WhatsApp.',
      stats: '❤️ Eficiência 45% maior no fluxo de pacientes com automação integrada.',
    },
    {
      icon: GraduationCap,
      title: 'Educação',
      description:
        'Plataformas EAD, landing pages para cursos e fluxos automatizados de matrícula e comunicação com alunos.',
      stats: '🎓 Engajamento 3x maior com experiências digitais personalizadas.',
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-4">
            Soluções por Segmento
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvemos soluções específicas para cada tipo de negócio, com expertise comprovada em diversos setores
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridControls}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 gradient-lipeti-claro rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600 mb-2">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          ref={ctaRef}
          initial="hidden"
          animate={ctaControls}
          variants={fadeInUp}
          className="mt-16 gradient-lipeti rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Não encontrou seu segmento?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Desenvolvemos soluções personalizadas para qualquer tipo de negócio. Nossa equipe tem experiência em diversos segmentos.
          </p>
          <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Fale conosco
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;