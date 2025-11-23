'use client';

import React, { useState } from 'react';
import { FAQ_ITEMS } from '@/app/constants/constants';
import { Plus, X } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-6">
            Veja como a Lipeti pode te ajudar
          </h2>
          <p className="text-gray-600">
            Dúvidas frequentes sobre nosso processo e metodologia.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="bg-dark-900 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-white font-semibold text-lg pr-8">
                  {item.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded flex items-center justify-center transition-colors ${openIndex === index ? 'bg-lipeti-400 text-dark-900' : 'bg-white/10 text-white'}`}>
                    {openIndex === index ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2 text-gray-300 text-sm leading-relaxed border-t border-white/10 mx-6">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};