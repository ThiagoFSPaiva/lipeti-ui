import { useEffect, useRef } from 'react';
import { useInView, useAnimation, Variants, easeInOut, easeOut } from 'framer-motion';

export const useScrollAnimation = (once = true) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return { ref, controls };
};

// Animações com easing corrigido
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    transition: { duration: 0.3, ease: easeOut },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: easeOut },
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
    transition: { duration: 0.6, ease: easeInOut },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeInOut },
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
    transition: { duration: 0.3, ease: easeOut },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: easeOut },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.3, ease: easeOut },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: easeOut },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};