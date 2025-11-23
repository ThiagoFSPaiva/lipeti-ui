import React from 'react';
import { ServiceItem } from '@/types/types';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CTA } from './CTA';
import { Button } from './Button';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';


interface ServiceDetailProps {
  service: ServiceItem;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-lipeti-500 selection:text-white">
      <Navbar />
      
      <main>
        {/* Hero Section Específico do Serviço */}
        <section className="relative pt-32 pb-20 bg-dark-900 text-white overflow-hidden">
           <div className="absolute inset-0 bg-dark-950">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
             <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-royal-600/20 rounded-full blur-[100px] pointer-events-none"></div>
           </div>

           <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
             <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors cursor-pointer">
                <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para Início
             </Link>
             
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-lipeti-400 to-royal-600 flex items-center justify-center shadow-lg shadow-royal-500/30">
                   <service.icon className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold">{service.title}</h1>
             </div>
             
             <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                {service.description}
             </p>
           </div>
        </section>

        {/* Conteúdo Detalhado */}
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    
                    {/* Texto */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl font-display font-bold text-dark-900 mb-6">
                            Sobre o serviço
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {service.longDescription}
                        </p>

                        <h3 className="text-xl font-bold text-dark-900 mb-4">Principais benefícios:</h3>
                        <ul className="space-y-4">
                            {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-lipeti-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <div className="mt-10">
                            <a href="#contact">
                                <Button>Solicitar Orçamento</Button>
                            </a>
                        </div>
                    </div>

                    {/* Imagem */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100 group">
                            <img 
                                src={service.image} 
                                alt={service.title} 
                                className="w-full h-full object-cover aspect-[4/3] transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent opacity-60"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <CTA />
      </main>

      <Footer />
    </div>
  );
};