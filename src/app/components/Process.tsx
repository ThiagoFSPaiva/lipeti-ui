import React from 'react';
import { PROCESS_STEPS } from '@/app/constants/constants';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-lipeti-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-dark-900 mb-6">
            Como desenvolvemos seu software?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            A metodologia Lipeti foca em agilidade e transparência. Aceleramos o desenvolvimento mantendo o mais alto padrão de qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <div 
              key={index}
              className="bg-dark-900 rounded-2xl p-8 md:p-10 text-white flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-xl shadow-dark-900/10 border border-dark-800"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-lipeti-500 to-royal-600 rounded-lg flex items-center justify-center shadow-lg shadow-royal-900/50">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold font-display mb-4">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};