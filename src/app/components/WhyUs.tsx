import React from 'react';
import Image from 'next/image';
import { WHY_US_POINTS } from '../constants/constants';
import { ChevronRight } from 'lucide-react';
import { Button } from './Button';




export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                <div className="aspect-[4/4] bg-dark-900 relative group overflow-hidden">
                    <Image 
                        src="/whyus.webp" 
                        alt="Dashboard Analysis"
                        fill
                        className="object-cover  group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-royal-600/60 to-lipeti-400/30 mix-blend-multiply"></div>
                </div>
            </div>
            
            {/* Decorative outline behind */}
            <div className="absolute -z-10 top-8 -right-8 w-full h-full border-2 border-lipeti-400/20 rounded-2xl hidden md:block"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-3 py-1 bg-lipeti-500 text-white text-sm font-medium rounded mb-4">
                Diferenciais
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-900 mb-6 leading-tight">
              Veja porque escolher a <span className="text-royal-600">Lipeti</span>
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Na Lipeti, tratamos cada projeto como único. Nossa combinação de design futurista e engenharia robusta garante que seu negócio se destaque no mercado.
            </p>

            <ul className="space-y-4 mb-10">
              {WHY_US_POINTS.map((point, idx) => (
                <li key={idx} className="flex items-center group">
      
                  <ChevronRight className="w-5 h-5 text-royal-600 mr-2" />
                  <span className="text-dark-900 font-medium text-lg">{point}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full sm:w-auto bg-royal-600 hover:bg-royal-700 text-white shadow-lg shadow-royal-600/20">
                Conversar com especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};