// Troca de estilos entre os componentes Services e Solutions
// +2 novos cards no Services, -2 no Solutions, conforme solicitado

'use client';

import { motion } from 'framer-motion';
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  useScrollAnimation,
} from '@/hooks/useScrollAnimation';
import {
  Code2,
  Zap,
  Globe,
  TrendingUp,
  Smartphone,
  ShieldCheck,
  ServerCog,
  Building2,
  ShoppingCart,
  Users,
  Briefcase,
  Heart,
  GraduationCap,
} from 'lucide-react';

// SERVICES
export default function Services() {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation();
  const { ref: servicesRef, controls: servicesControls } = useScrollAnimation();
  const { ref: ctaRef, controls: ctaControls } = useScrollAnimation();

  const services = [
    {
      icon: Code2,
      title: 'Desenvolvimento Web',
      description: 'Sites modernos, responsivos e sob medida — pensados para encantar e converter.',
    },

    {
      icon: Zap,
      title: 'Automação Inteligente',
      description: 'Automatize tarefas repetitivas, reduza custos e ganhe escala com soluções que funcionam por você.',
    },
    {
      icon: Building2,
      title: 'Sistemas Empresariais',
      description: 'Automatize processos e tome decisões com mais segurança por meio de sistemas sob medida.',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Lojas virtuais com foco em performance, segurança e experiência de compra envolvente.',
    },
    {
      icon: Smartphone,
      title: 'Aplicativos Mobile',
      description: 'Apps nativos para Android e iOS que conectam sua marca ao dia a dia do seu público.',
    },
    {
      icon: TrendingUp,
      title: 'Landing Pages',
      description: 'Páginas otimizadas para capturar leads e gerar resultados — com design e estratégia alinhados.',
    },

  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
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
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Nossos Serviços
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Soluções personalizadas em tecnologia para todos os tipos de projeto.
          </motion.p>
        </motion.div>

        <motion.div
          ref={servicesRef}
          initial="hidden"
          animate={servicesControls}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 gradient-lipeti-claro rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-2">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={ctaRef}
          initial="hidden"
          animate={ctaControls}
          variants={fadeInUp}
          className="mt-16 gradient-lipeti rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Pronto para inovar?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Fale com nossa equipe e leve sua ideia ao próximo nível com tecnologia sob medida.
          </p>
          <a
            href="#contact"
            className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center"
          >
            Solicitar Orçamento <Smartphone className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};