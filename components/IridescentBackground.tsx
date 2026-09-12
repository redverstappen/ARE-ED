"use client";

import { motion } from "framer-motion";

export default function IridescentBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        className="
          absolute
          -right-40
          top-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-gradient-to-br
          from-cyan-400/10
          via-purple-500/10
          to-pink-400/10
          blur-3xl
        "
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          willChange: "transform",
          transform: "translate3d(0, 0, 0)",
        }}
      />

      <motion.div
        className="
          absolute
          -left-60
          top-[55%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-gradient-to-br
          from-cyan-300/5
          via-purple-400/10
          to-pink-300/5
          blur-3xl
        "
        animate={{
          x: [0, 30, 0],
          y: [0, -25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          willChange: "transform",
          transform: "translate3d(0, 0, 0)",
        }}
      />
    </div>
  );
}