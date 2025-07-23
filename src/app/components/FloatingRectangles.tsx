'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface FloatingRectanglesProps {
  primaryBackgroundImage?: string;
  secondaryBackgroundImage?: string;
}

export const FloatingRectangles: React.FC<FloatingRectanglesProps> = ({
  primaryBackgroundImage,
  secondaryBackgroundImage
}) => {
  return (
    <div className="relative w-[90vw] max-w-[600px] h-[400px] flex-shrink-0">
      {/* Branco */}
      <motion.div
        className="absolute top-0 left-[16%] w-[80%] h-[355px] shadow-xl rounded-lg"
        animate={{ y: [0, -8, 0], scale: [1, 1.01, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        {primaryBackgroundImage && (
          <Image
            src={primaryBackgroundImage}
            alt="quadro de imagem 1"
            fill
            className="object-cover"
          />
        )}
        <div className="absolute bottom-[-18px] right-[-23px] w-[100px] h-[40px] bg-cyan-400 opacity-80 z-10" />
      </motion.div>

      {/* Azul */}
      <motion.div
        className="absolute top-[185px] left-[8%] w-[65%] h-[228px] shadow-lg z-10 rounded-lg"
        animate={{ y: [0, -6, 0], scale: [1, 1.01, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {secondaryBackgroundImage && (
          <Image
            src={secondaryBackgroundImage}
            alt="quadro de imagem 1"
            fill
            className="object-cover"
          />
        )}
        <div className="absolute top-0 left-1/12 transform -translate-x-1/2 rotate-[238deg] w-[80px] h-[40px] bg-cyan-300 rounded-t-[80px] z-20" />
      </motion.div>
    </div>
  );
};