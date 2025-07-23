"use client";
import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

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
        className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
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
        </div>
        <div className="flex-1 flex items-center justify-center mt-8 md:mt-0 md:ml-8">
          <img
            src="https://uxagency.com.br/wp-content/uploads/2022/10/Banner-experiencia-usuario.png"
            alt="Banner experiência do usuário"
            width={1068}
            height={804}
            className="w-full max-w-md rounded-2xl"
            srcSet="https://uxagency.com.br/wp-content/uploads/2022/10/Banner-experiencia-usuario.png 1068w, https://uxagency.com.br/wp-content/uploads/2022/10/Banner-experiencia-usuario-300x226.png 300w, https://uxagency.com.br/wp-content/uploads/2022/10/Banner-experiencia-usuario-1024x771.png 1024w, https://uxagency.com.br/wp-content/uploads/2022/10/Banner-experiencia-usuario-768x578.png 768w"
            sizes="(max-width: 1068px) 100vw, 1068px"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </motion.div>
    </section>
  );
}