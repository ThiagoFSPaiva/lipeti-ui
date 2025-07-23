/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        if (window.innerWidth >= 823) {
            const timer = setTimeout(() => {
                setShowMessage(true);
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, []);

  const openWhatsApp = () => {
    const phoneNumber = '558179083470';
    const message = encodeURIComponent('Olá! Estou com um projeto em mente, podemos falar sobre isso?');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
    setShowMessage(false);
  };

  const closeMessage = () => {
    setShowMessage(false);
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50">
      {showMessage && (
        <div className="mb-4 animate-fade-in-up duration-700 ease-out transition-all max-w-[90vw] sm:max-w-xs">
          <div className="bg-gradient-to-br from-white via-gray-50 to-slate-100 border border-gray-200 rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] relative animate-float overflow-hidden">
            <div className="flex items-center gap-3 p-4 border-b border-gray-200">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/atendente.webp"
                  alt="atendente"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 text-sm">Atendimento</p>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Online agora
                </p>
              </div>
              <button
                onClick={closeMessage}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4">
              <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-3 mb-3">
                <p className="text-sm text-gray-800">Olá! Tudo bem? 👋 Precisa de ajuda?</p>
                <p className="text-xs text-gray-500 mt-1">Agora</p>
              </div>

              <button
                onClick={openWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
                Conversar no WhatsApp
              </button>
            </div>
          </div>

          {/* Seta abaixo da caixa */}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
        </div>
      )}

      {/* Botão flutuante */}
      <div className="relative">
        <button
          onClick={() => setShowMessage(true)}
          className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative"
          aria-label="Falar no WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
          </svg>

          {!showMessage && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">1</span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default WhatsAppFloat;