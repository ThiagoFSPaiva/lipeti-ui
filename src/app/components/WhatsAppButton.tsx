"use client";

import React, { useEffect, useState } from "react";
import { X, Send, ChevronRight } from "lucide-react";
import Image from "next/image";

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // controla montagem para animação
  const [showMessage, setShowMessage] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const phoneNumber = "5581979083470";
  const TRANSITION_MS = 300; // deve bater com duration-300

  useEffect(() => {
    if (isOpen) {
      setMounted(true); // monta imediatamente ao abrir
      setShowMessage(false);
      setIsTyping(true);

      setTimeout(() => {
        setIsTyping(false);
        setShowMessage(true);
      }, 800);
    } else {
      // ao fechar, espera a animação e então desmonta
      setTimeout(() => setMounted(false), TRANSITION_MS);
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  const handleOptionClick = (message: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window: somente quando mounted === true */}
      {mounted && (
        <div
          className={`
            mb-4 w-[320px] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right border border-gray-100
            ${isOpen ? "scale-100 opacity-100 translate-y-0 pointer-events-auto" : "scale-95 opacity-0 translate-y-10 pointer-events-none"}
          `}
          aria-hidden={!isOpen}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-dark-900 to-dark-800 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-white font-bold border-2 border-white/10">
                  <Image src="/vercel.svg" alt="Vercel" width={24} height={24} />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-dark-900"></div>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Equipe Lipeti</p>
                <p className="text-lipeti-400 text-xs">Online agora</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-gray-50 h-[320px] overflow-y-auto flex flex-col gap-4">
            <div className="text-center text-xs text-gray-400 my-2">Hoje</div>

            {isTyping && (
              <div className="self-start bg-white p-3 rounded-tl-none rounded-2xl shadow-sm border border-gray-100 w-16">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            {showMessage && (
              <div className="self-start bg-white p-4 rounded-tl-none rounded-2xl shadow-sm border border-gray-100 max-w-[90%] animate-fade-in-up">
                <p className="text-dark-900 text-sm leading-relaxed">
                  Olá! 👋 <br />
                  Somos especialistas em transformar ideias em softwares de alta performance. Como podemos ajudar seu negócio hoje?
                </p>
                <span className="text-[10px] text-gray-400 block text-right mt-1">Agora</span>
              </div>
            )}

            {showMessage && (
              <div className="flex flex-col gap-2 mt-auto animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <button
                  onClick={() => handleOptionClick("Olá! Gostaria de fazer um orçamento para um projeto.")}
                  className="bg-white hover:bg-lipeti-50 border border-lipeti-200 p-3 rounded-xl text-left text-sm text-dark-800 shadow-sm flex items-center justify-between group transition-all"
                >
                  <span>Quero fazer um orçamento</span>
                  <ChevronRight size={16} className="text-lipeti-500 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleOptionClick("Tenho dúvidas sobre os serviços da Lipeti.")}
                  className="bg-white hover:bg-lipeti-50 border border-lipeti-200 p-3 rounded-xl text-left text-sm text-dark-800 shadow-sm flex items-center justify-between group transition-all"
                >
                  <span>Falar com especialista</span>
                  <ChevronRight size={16} className="text-lipeti-500 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>

          {/* Footer (Input simulation) */}
          <div className="p-3 bg-white border-t border-gray-100" onClick={() => handleOptionClick("Olá!")}>
            <div className="w-full bg-gray-100 rounded-full h-10 flex items-center px-4 justify-between cursor-pointer hover:bg-gray-200 transition-colors">
              <span className="text-sm text-gray-500">Digite uma mensagem...</span>
              <Send size={16} className="text-lipeti-500" />
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className={`
          w-14 h-14 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center transition-all duration-300 hover:scale-110
          ${isOpen ? "bg-dark-900 rotate-90" : "bg-[#25D366] animate-pulse-slow"}
        `}
      >
        {isOpen ? <X className="text-white w-6 h-6" /> : (
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        )}
      </button>
    </div>
  );
};