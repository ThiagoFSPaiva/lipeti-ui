import React from 'react';
import { TESTIMONIALS } from '@/app/constants/constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
              O que dizem nossos parceiros
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A confiança é a base do nosso código. Veja como estamos impulsionando negócios.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/50 relative hover:-translate-y-2 transition-all duration-300 group">
                    <Quote className="absolute top-8 right-8 w-8 h-8 text-lipeti-100 group-hover:text-lipeti-200 transition-colors" />
                    
                    <div className="flex items-center mb-6">
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-12 h-12 rounded-full border-2 border-lipeti-400/20"
                        />
                        <div className="ml-4">
                            <h4 className="text-dark-900 font-bold text-sm">{item.name}</h4>
                            <p className="text-royal-600 text-xs uppercase tracking-wide font-semibold">{item.company}</p>
                        </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm italic leading-relaxed">
                        "{item.content}"
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};