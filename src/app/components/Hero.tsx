"use client";
import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl md:text-6xl font-bold text-indigo-700 mb-4">Lipeti</h1>
      <p className="text-xl md:text-2xl text-gray-600 max-w-xl">
        Tecnologia sob medida para impulsionar sua empresa
      </p>
      <a
        href="#contact"
        className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-2xl shadow hover:bg-indigo-700 transition"
      >
        Solicitar orçamento
      </a>
    </motion.section>
  );
}
