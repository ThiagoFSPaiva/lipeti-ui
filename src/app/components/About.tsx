import React from 'react';
import { FEATURES, STATS } from '../constants/constants';


export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -left-64 top-1/4 w-96 h-96 bg-lipeti-900/20 rounded-full blur-[128px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image / Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                {/* Placeholder for office/team photo */}
                <div className="aspect-[4/3] bg-dark-800 relative">
                    <img 
                        src="https://images.unsplash.com/photo-1504384308090-c54be3852f33?q=80&w=2000&auto=format&fit=crop" 
                        alt="Modern Tech Workspace" 
                        className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-dark-900/90 backdrop-blur border border-white/10 p-6 rounded-xl">
                    <div className="flex justify-between text-center divide-x divide-white/10">
                        {STATS.map((stat, idx) => (
                            <div key={idx} className="px-4 first:pl-0 last:pr-0 flex-1">
                                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[radial-gradient(#38bdf8_2px,transparent_2px)] [background-size:16px_16px] opacity-50"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-lipeti-400 font-medium tracking-wider uppercase mb-3 text-sm">Quem Somos</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">
              Desenvolvemos o motor digital do seu crescimento
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Na Lipeti, não escrevemos apenas linhas de código; criamos ecossistemas digitais. 
              Somos uma equipe de engenheiros, designers e estrategistas obcecados por performance e design.
              Nossa missão é clara: eliminar ineficiências e criar interfaces que encantam.
            </p>

            <div className="space-y-6">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-lipeti-500/10 flex items-center justify-center border border-lipeti-500/20">
                        <feature.icon className="w-4 h-4 text-lipeti-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};