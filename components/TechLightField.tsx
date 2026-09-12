"use client";

import { motion } from "framer-motion";

export default function TechLightField() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* BACKGROUND GRID */}

      <div className="absolute inset-0 tech-light-grid opacity-60" />

      {/* HORIZONTAL LIGHT BEAM */}

      <motion.div
        initial={{
          x: "-120%",
          opacity: 0,
        }}
        animate={{
          x: ["-120%", "120%"],
          opacity: [0, 0.8, 0.8, 0],
        }}
        transition={{
          duration: 5.5,
          delay: 1.5,
          repeat: Infinity,
          repeatDelay: 6,
          ease: "easeInOut",
        }}
        style={{
          willChange: "transform, opacity",
          transform: "translate3d(0, 0, 0)",
        }}
        className="
          absolute
          left-0
          top-[27%]
          h-px
          w-[70%]
          bg-gradient-to-r
          from-transparent
          via-cyan-300/70
          to-transparent
          blur-[0.5px]
        "
      />

      {/* HORIZONTAL BEAM GLOW */}

      <motion.div
        initial={{
          x: "-120%",
          opacity: 0,
        }}
        animate={{
          x: ["-120%", "120%"],
          opacity: [0, 0.18, 0.18, 0],
        }}
        transition={{
          duration: 5.5,
          delay: 1.5,
          repeat: Infinity,
          repeatDelay: 6,
          ease: "easeInOut",
        }}
        style={{
          willChange: "transform, opacity",
          transform: "translate3d(0, 0, 0)",
        }}
        className="
          absolute
          left-0
          top-[27%]
          h-20
          w-[50%]
          bg-gradient-to-r
          from-transparent
          via-purple-500/30
          to-transparent
          blur-3xl
        "
      />

      {/* SECOND LIGHT LINE */}

      <motion.div
        initial={{
          x: "120%",
          opacity: 0,
        }}
        animate={{
          x: ["120%", "-120%"],
          opacity: [0, 0.45, 0.45, 0],
        }}
        transition={{
          duration: 7,
          delay: 4,
          repeat: Infinity,
          repeatDelay: 9,
          ease: "easeInOut",
        }}
        style={{
          willChange: "transform, opacity",
          transform: "translate3d(0, 0, 0)",
        }}
        className="
          absolute
          right-0
          top-[64%]
          h-px
          w-[55%]
          bg-gradient-to-l
          from-transparent
          via-purple-300/50
          to-transparent
        "
      />

      {/* DIAGONAL SCAN BEAM */}

      <motion.div
        initial={{
          x: "-20%",
          y: "120%",
          opacity: 0,
        }}
        animate={{
          x: ["-20%", "120%"],
          y: ["120%", "-20%"],
          opacity: [0, 0.35, 0],
        }}
        transition={{
          duration: 10,
          delay: 3,
          repeat: Infinity,
          repeatDelay: 10,
          ease: "easeInOut",
        }}
        style={{
          willChange: "transform, opacity",
          transform: "translate3d(0, 0, 0)",
        }}
        className="
          absolute
          left-0
          top-0
          h-px
          w-[65%]
          rotate-[-28deg]
          bg-gradient-to-r
          from-transparent
          via-cyan-200/45
          to-transparent
          blur-[0.5px]
        "
      />

      {/* VERTICAL SCAN */}

      <motion.div
        initial={{
          y: "-120%",
          opacity: 0,
        }}
        animate={{
          y: ["-120%", "120%"],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 9,
          delay: 2,
          repeat: Infinity,
          repeatDelay: 11,
          ease: "linear",
        }}
        style={{
          willChange: "transform, opacity",
          transform: "translate3d(0, 0, 0)",
        }}
        className="
          absolute
          right-[20%]
          top-0
          h-[35%]
          w-px
          bg-gradient-to-b
          from-transparent
          via-cyan-200/35
          to-transparent
        "
      />

      {/* PURPLE AMBIENT GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.06, 0.13, 0.06],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          willChange: "transform, opacity",
          transform: "translate3d(0, 0, 0)",
        }}
        className="
          absolute
          -right-40
          top-[8%]
          h-[480px]
          w-[480px]
          rounded-full
          bg-purple-500
          blur-[150px]
        "
      />

      {/* CYAN AMBIENT GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          willChange: "transform, opacity",
          transform: "translate3d(0, 0, 0)",
        }}
        className="
          absolute
          -left-40
          bottom-[-100px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-400
          blur-[150px]
        "
      />

      {/* SMALL LIGHT PARTICLES */}

      <motion.div
        animate={{
          opacity: [0.1, 0.5, 0.1],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          willChange: "transform, opacity",
        }}
        className="
          absolute
          left-[18%]
          top-[22%]
          h-1
          w-1
          rounded-full
          bg-cyan-200
          shadow-[0_0_12px_rgba(103,232,249,0.7)]
        "
      />

      <motion.div
        animate={{
          opacity: [0.1, 0.45, 0.1],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 5,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          willChange: "transform, opacity",
        }}
        className="
          absolute
          right-[28%]
          top-[48%]
          h-1
          w-1
          rounded-full
          bg-purple-200
          shadow-[0_0_12px_rgba(192,132,252,0.7)]
        "
      />

      <motion.div
        animate={{
          opacity: [0.1, 0.4, 0.1],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 4.5,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          willChange: "transform, opacity",
        }}
        className="
          absolute
          left-[72%]
          top-[76%]
          h-1
          w-1
          rounded-full
          bg-cyan-200
          shadow-[0_0_12px_rgba(103,232,249,0.7)]
        "
      />
    </div>
  );
}