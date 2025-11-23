import React from 'react';
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

          {/* Visual Side (Right) - Floating Glass Cards Composition */}
          <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] flex items-center justify-center lg:justify-end perspective-1000">
            
            {/* Main Abstract Element (Center Glow) */}
            <div className="absolute top-1/2 left-1/2 lg:left-2/3 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-gradient-to-tr from-royal-600 to-lipeti-500 rounded-full blur-[90px] opacity-30 animate-pulse"></div>

            {/* Card 1: Code/Tech (Main) */}
            <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-20 transform -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-80 bg-dark-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/50 z-20 animate-float-slow">
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                    <div className="flex space-x-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">main.tsx</span>
                </div>
                <div className="space-y-2 font-mono text-xs">
                    <div className="text-gray-400">{'// Otimizando conversão'}</div>
                    <div className="flex"><span className="text-royal-400 mr-2">const</span> <span className="text-white">results</span> <span className="text-royal-400 mx-2">=</span> <span className="text-lipeti-400">await</span></div>
                    <div className="flex pl-4"><span className="text-white">Lipeti.</span><span className="text-yellow-300">scale</span><span className="text-white">({'{'}</span></div>
                    <div className="flex pl-8"><span className="text-gray-300">performance:</span> <span className="text-green-400 ml-1">100,</span></div>
                    <div className="flex pl-8"><span className="text-gray-300">security:</span> <span className="text-green-400 ml-1">true</span></div>
                    <div className="flex pl-4"><span className="text-white">{'}'});</span></div>
                </div>
            </div>

            {/* Card 2: Metrics (Bottom Right) */}
            <div className="absolute bottom-12 lg:bottom-24 right-0 lg:right-0 bg-dark-800/90 backdrop-blur-md border border-lipeti-500/20 p-4 rounded-xl shadow-xl flex items-center gap-4 z-30 animate-float-delayed w-64">
                <div className="w-10 h-10 rounded-lg bg-lipeti-500/20 flex items-center justify-center text-lipeti-400">
                    <BarChart3 size={20} />
                </div>
                <div>
                    <p className="text-xs text-gray-400 uppercase font-semibold">Taxa de Conversão</p>
                    <p className="text-lg font-bold text-white">+ 158% <span className="text-xs font-normal text-green-400">↑</span></p>
                </div>
            </div>

            {/* Card 3: Security (Top Left) */}
            <div className="absolute top-12 lg:top-24 left-0 lg:left-10 bg-dark-800/90 backdrop-blur-md border border-royal-500/20 p-4 rounded-xl shadow-xl flex items-center gap-4 z-10 animate-float w-56">
                <div className="w-10 h-10 rounded-lg bg-royal-600/20 flex items-center justify-center text-royal-400">
                    <Shield size={20} />
                </div>
                <div>
                    <p className="text-xs text-gray-400 uppercase font-semibold">Segurança</p>
                    <p className="text-sm font-bold text-white">Nível Bancário</p>
                </div>
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