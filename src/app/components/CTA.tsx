import React from 'react';
import { Button } from './Button';
import { Mail } from 'lucide-react';

export const CTA: React.FC = () => {
    return (
        <section className="py-20 relative overflow-hidden">
             {/* Background Gradient - Royal Blue dominance for footer transition */}
             <div className="absolute inset-0 bg-royal-800">
                <div className="absolute inset-0 bg-dark-900/60"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-royal-900 to-lipeti-900 opacity-80"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
             </div>

             <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                    Pronto para elevar seu nível?
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Vamos construir algo extraordinário juntos. Agende uma reunião gratuita de 30 minutos com os especialistas da Lipeti.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button className="px-8 py-4 text-lg shadow-xl shadow-lipeti-500/20">
                        Agendar Consultoria
                    </Button>
                    <Button variant="outline" className="px-8 py-4 text-lg border-white/20 text-white hover:bg-white hover:text-dark-900">
                        <Mail className="mr-2 w-5 h-5" />
                        Entrar em Contato
                    </Button>
                </div>
             </div>
        </section>
    )
}