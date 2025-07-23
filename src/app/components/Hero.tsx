'use client';

import { fadeInRight, fadeInUp, staggerContainer, useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  const { ref: heroRef, controls: heroControls } = useScrollAnimation();
  const { ref: statsRef, controls: statsControls } = useScrollAnimation();
  const { ref: visualRef, controls: visualControls } = useScrollAnimation();

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            ref={heroRef}
            initial="hidden"
            animate={heroControls}
            variants={staggerContainer}
            className="lg:pr-8"
          >
            <motion.div variants={fadeInUp} className="flex items-center space-x-2 mb-6">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">+200 projetos entregues</span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Transformamos suas{' '}
              <span className="gradient-lipeti-text">
                ideias digitais
              </span>{' '}
              em realidade
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Desenvolvemos sistemas web, sites institucionais, landing pages de alta conversão 
              e automações que impulsionam o crescimento do seu negócio.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                className="gradient-lipeti text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center"
              >
                Iniciar Projeto
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              ref={statsRef}
              initial="hidden"
              animate={statsControls}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200"
            >
              <motion.div variants={fadeInUp}>
                <div className="text-3xl font-bold text-blue-700">200+</div>
                <div className="text-gray-600">Projetos</div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <div className="text-3xl font-bold text-cyan-600">98%</div>
                <div className="text-gray-600">Satisfação</div>
              </motion.div>

            </motion.div>
          </motion.div>

          <motion.div 
            ref={visualRef}
            initial="hidden"
            animate={visualControls}
            variants={fadeInRight}
            className="relative"
          >
            <div className="gradient-lipeti rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-6 transform -rotate-3">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 gradient-lipeti rounded w-3/4 opacity-60"></div>
                    <div className="h-4 gradient-lipeti rounded w-1/2 opacity-40"></div>
                    <div className="h-4 gradient-lipeti rounded w-5/6 opacity-60"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-20 gradient-lipeti-br rounded-lg opacity-20"></div>
                    <div className="h-20 gradient-lipeti-br rounded-lg opacity-30"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;