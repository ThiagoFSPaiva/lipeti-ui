"use client"
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

function handleContactClick() {
  const phoneNumber = "5581979083470";
  const url = `https://wa.me/${phoneNumber}?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Lipeti.`;
  window.open(url, "_blank");
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Updated colors to Lipeti Brand (Cyan + Royal Blue)
  const variants = {
    primary: "bg-gradient-to-r from-lipeti-400 to-royal-600 hover:from-lipeti-300 hover:to-royal-500 text-white shadow-[0_0_20px_rgba(34,193,237,0.3)] hover:shadow-[0_0_30px_rgba(34,193,237,0.5)] border border-transparent",
    secondary: "bg-white text-dark-900 hover:bg-gray-100 border border-transparent",
    outline: "bg-transparent border border-lipeti-400/30 text-lipeti-400 hover:border-lipeti-400 hover:text-white hover:bg-lipeti-400/10",
  };

  return (
    <button 
      onClick={handleContactClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};