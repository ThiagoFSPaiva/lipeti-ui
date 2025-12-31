'use client';

import React, { useState } from 'react';
import { FAQ_ITEMS } from '@/app/constants/constants';
import { ArrowRight } from 'lucide-react'; // Troquei os ícones para fazer mais sentido neste layout

export const FAQ: React.FC = () => {
  // Inicializa sempre com o primeiro aberto para não ficar um buraco vazio
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-6">
            Veja como a Lipeti pode te ajudar
          </h2>
          <p className="text-gray-600">
            Dúvidas frequentes sobre nosso processo e metodologia.
          </p>
        </div>

        {/* Layout Grid: 1 coluna no mobile, 12 colunas no desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Coluna da Esquerda: Lista de Perguntas */}
          <div className="lg:col-span-5 space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <button
                key={index}
                onClick={() => setOpenIndex(index)}
                className={`w-full px-6 py-4 flex items-center justify-between text-left rounded-xl transition-all duration-300 border ${
                  openIndex === index 
                    ? 'bg-dark-900 text-white border-dark-900 shadow-lg scale-105' 
                    : 'bg-white text-dark-900 border-gray-200 hover:border-dark-900/30'
                }`}
              >
                <span className="font-semibold pr-4">
                  {item.question}
                </span>
                {/* Ícone que aparece apenas se estiver ativo ou no hover se preferir */}
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'opacity-100 translate-x-0 text-lipeti-400' : 'opacity-0 -translate-x-2'}`} />
              </button>
            ))}
          </div>

          {/* Coluna da Direita: Painel de Resposta Fixo */}
          <div className="lg:col-span-7">
            <div className="bg-dark-900 rounded-2xl p-8 h-full min-h-[300px] flex flex-col justify-center relative overflow-hidden shadow-xl">
               {/* Decoração de fundo opcional */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-lipeti-400/10 rounded-bl-full -mr-8 -mt-8" />
               
               {/* Animação suave de troca de conteúdo */}
               <div key={openIndex} className="animate-in fade-in slide-in-from-right-4 duration-300 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {FAQ_ITEMS[openIndex].question}
                  </h3>
                  <div className="w-12 h-1 bg-lipeti-400 mb-6 rounded-full" />
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {FAQ_ITEMS[openIndex].answer}
                  </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};