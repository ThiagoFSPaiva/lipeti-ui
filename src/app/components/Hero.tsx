"use client";
import React from "react";
import { motion } from "framer-motion";
import { FloatingRectangles } from "./FloatingRectangles";

export function Hero() {
  return (
    <section
      className="w-full flex items-center justify-center"
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(ellipse at 10% 20%, #1B5AC6 0%, rgba(233, 128, 252, 0) 40%), radial-gradient(ellipse at 50% 0%, #2E82D7 25%, #0B0F20 75%)',
      }}
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-center items-center px-6 py-12 gap-10 md:gap-0">
        {/* Texto principal */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-normal mb-4 text-white">
            Clone seu{" "}
            <span className="text-gradient">
              melhor{" "}
              <span className="text-gradient  title-slider">
                vendedor
              </span>
            </span>{" "}
            com IA
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-xl mb-6">
            Tecnologia sob medida para impulsionar sua empresa e daiane linda.
          </p>
          <a
            href="#contact"
            className="mt-2 px-6 py-3 text-white rounded-2xl btn-gradient transition"
          >
            Solicitar orçamento
          </a>
        </motion.div>
        <motion.div
          className="flex-1 flex items-center justify-center md:ml-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Retângulos animados */}
          <FloatingRectangles
            primaryBackgroundImage="/foto7.avif"
            secondaryBackgroundImage="/foto4.webp"
          />
        </motion.div>
      </div>
    </section>
  );
}
