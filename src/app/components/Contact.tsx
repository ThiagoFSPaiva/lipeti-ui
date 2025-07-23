'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation();
  const { ref: contactRef, controls: contactControls } = useScrollAnimation();
  const { ref: formRef, controls: formControls } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio do formulário
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@lipeti.com.br',
      href: 'mailto:contato@lipeti.com.br'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 (81) 97908-3470',
      href: 'tel:+5581979083470'
    },
    // {
    //   icon: MapPin,
    //   title: 'Endereço',
    //   content: 'Recife, PE - Brasil',
    //   href: '#'
    // }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
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
            Vamos conversar sobre seu projeto?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco e vamos transformar suas ideias em soluções digitais 
            que geram resultados reais para seu negócio.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            ref={contactRef}
            initial="hidden"
            animate={contactControls}
            variants={staggerContainer}
          >
            <motion.h3 variants={fadeInLeft} className="text-2xl font-bold text-gray-900 mb-8">
              Fale Conosco
            </motion.h3>
            
            <motion.div variants={fadeInLeft} className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={index}
                    variants={fadeInLeft}
                    href={info.href}
                    className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 gradient-lipeti rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div variants={fadeInLeft} className="gradient-lipeti rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Pronto para começar?</h4>
              <p className="mb-6">
                Nossa equipe está pronta para transformar suas ideias em realidade. 
                Vamos começar seu projeto hoje mesmo!
              </p>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-5 w-5 mr-2" />
                Resposta em até 24 horas
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            ref={formRef}
            initial="hidden"
            animate={formControls}
            variants={staggerContainer}
          >
            <motion.form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={fadeInRight} className="grid md:grid-cols-2 gap-6">
                <motion.div variants={fadeInRight}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200"
                    placeholder="Seu nome"
                  />
                </motion.div>
                
                <motion.div variants={fadeInRight}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200"
                    placeholder="seu@email.com"
                  />
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="grid md:grid-cols-2 gap-6">
                <motion.div variants={fadeInRight}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200"
                    placeholder="(81) 99999-9999"
                  />
                </motion.div>
                
                <motion.div variants={fadeInRight}>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="sistema-web">Sistema Web</option>
                    <option value="site-institucional">Site Institucional</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="automacao">Automação</option>
                    <option value="consultoria">Consultoria</option>
                  </select>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Conte-nos mais sobre seu projeto..."
                ></textarea>
              </motion.div>

              <motion.button
                variants={fadeInRight}
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                  isSubmitted
                    ? 'bg-green-600 text-white'
                    : 'gradient-lipeti text-white hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Mensagem Enviada!
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;