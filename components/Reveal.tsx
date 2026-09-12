"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
};

export default function Reveal({
  children,
  delay = 0,
}: RevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
        margin: "0px 0px -10% 0px",
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        willChange: "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  );
}