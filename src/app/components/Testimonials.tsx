/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer, scaleIn } from '@/hooks/useScrollAnimation';

const Testimonials = () => {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation();
  const { ref: testimonialsRef, controls: testimonialsControls } = useScrollAnimation();
  const { ref: statsRef, controls: statsControls } = useScrollAnimation();

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'CEO - TechStart',
      content: 'A TechSolutions transformou completamente nossa presença digital. O sistema desenvolvido aumentou nossa produtividade em 300% e a qualidade do trabalho é excepcional.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'João Santos',
      role: 'Diretor - InnovateCorp',
      content: 'Profissionais extremamente competentes e dedicados. O projeto foi entregue no prazo, dentro do orçamento e superou todas as nossas expectativas. Recomendo sem hesitar.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ana Costa',
      role: 'Fundadora - GrowthLab',
      content: 'A landing page desenvolvida gerou um aumento de 250% na nossa taxa de conversão. O trabalho da equipe foi impecável do início ao fim.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
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
            O que nossos clientes dizem
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que eles têm a dizer sobre nosso trabalho.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          ref={testimonialsRef}
          initial="hidden"
          animate={testimonialsControls}
          variants={staggerContainer} 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300 relative flex flex-col h-full"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-700/20" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
          "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center mt-auto">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-gray-600 text-sm">{testimonial.role}</p>
          </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          ref={statsRef}
          initial="hidden"
          animate={statsControls}
          variants={staggerContainer}
          className="grid grid-cols-3 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <div className="text-3xl font-bold text-blue-700 mb-2">98%</div>
            <div className="text-gray-600">Taxa de Satisfação</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">200+</div>
            <div className="text-gray-600">Projetos Concluídos</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Clientes Ativos</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;