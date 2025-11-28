import React from 'react';
import Image from 'next/image';
import { Button } from './Button';
import { ArrowRight, ChevronRight, Shield, BarChart3 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-16 lg:pt-0 lg:pb-0 overflow-hidden bg-dark-950 text-white flex items-center min-h-[85vh]">
      {/* Background Gradients & Effects */}
      <div className="absolute inset-0 w-full h-full bg-dark-950 pointer-events-none">
        {/* Central/Top Highlight */}
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-lipeti-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-royal-600/10 rounded-full blur-[100px]"></div>

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-grid-pattern bg-size-[60px_60px] opacity-[0.02]"></div>
      </div>

       
                {/* Visual Side (Right) - Floating Glass Cards Composition */}
              <div className="absolute right-0 bottom-0 w-[600px] pr-12">
              <Image
                src="/man-blue.png"
                width={500}
                height={500}
                alt="Homem futurista blue"
                className="w-full h-auto object-contain select-none pointer-events-none"
                priority
              />
              </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Content Side (Left) */}
          <div className="w-full lg:w-1/2 z-10 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Badge Pill */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-lipeti-400/20 bg-lipeti-500/10 backdrop-blur-md mb-8 group cursor-default transition-all hover:border-lipeti-400/40">
              <span className="flex h-2 w-2 relative mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lipeti-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lipeti-400"></span>
              </span>
              <span className="text-xs md:text-sm font-medium text-lipeti-300 uppercase tracking-wider">
                Especialistas em Alta Performance
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight mb-6">
              Transforme ideias em <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lipeti-300 via-lipeti-400 to-royal-500">
                softwares de elite
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed font-light">
              Desenvolvemos ecossistemas digitais sob medida para escalar o faturamento do seu projeto com segurança, agilidade e design futurista.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button className="w-full sm:w-auto rounded-full px-8 !py-4 text-base shadow-lg shadow-lipeti-500/20 hover:shadow-lipeti-500/40">
                Iniciar Projeto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

            </div>
          </div>


        </div>
      </div>
      

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slow {
           0%, 100% { transform: translateY(0px); }
           50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite 1s; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
};