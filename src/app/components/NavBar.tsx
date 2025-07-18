"use client";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-indigo-700">
          Lipeti
        </Link>
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-indigo-600 transition">Sobre</a>
          <a href="#services" className="hover:text-indigo-600 transition">Serviços</a>
          <a href="#differentials" className="hover:text-indigo-600 transition">Diferenciais</a>
          <a href="#testimonials" className="hover:text-indigo-600 transition">Clientes</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contato</a>
        </nav>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="text-indigo-700 text-2xl">☰</span>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-700 font-medium">
          <a href="#about" className="hover:text-indigo-600 transition">Sobre</a>
          <a href="#services" className="hover:text-indigo-600 transition">Serviços</a>
          <a href="#differentials" className="hover:text-indigo-600 transition">Diferenciais</a>
          <a href="#testimonials" className="hover:text-indigo-600 transition">Clientes</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contato</a>
        </div>
      )}
    </header>
  );
}