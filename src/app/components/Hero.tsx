"use client";
import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="w-full flex items-center justify-center text-center px-6"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse at 10% 20%, #1B5AC6 0%, rgba(233, 128, 252, 0) 40%), radial-gradient(ellipse at 50% 0%, #2E82D7 25%, #0B0F20 75%)",
      }}
    >
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Lipeti</h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-xl mb-6">
          Tecnologia sob medida para impulsionar sua empresa.
        </p>
        <a
          href="#contact"
          className="mt-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl shadow hover:bg-indigo-700 transition"
        >
          Solicitar orçamento
        </a>
      </motion.div>
    </section>
  );
}