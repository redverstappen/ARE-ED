"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#050505] text-white">
      {/* GRID */}
      <div className="absolute inset-0 tech-grid-dark opacity-50" />

      {/* IRIDESCENT */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-400/20 blur-3xl"
      />

      {/* NOISE */}
      <div className="noise absolute inset-0 opacity-[0.06]" />

      {/* SCANLINE */}
      <motion.div
        animate={{
          y: ["-50vh", "50vh"],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 right-0 h-px bg-white/[0.08]"
      />

      {/* CONTENT */}
      <div className="relative z-10 w-[min(560px,82vw)]">
        {/* TOP */}
        <div className="mb-5 flex items-center justify-between">
          <span className="micro-text-light">
            ARE_ED
          </span>

          <span className="micro-text-light">
            SYS_01
          </span>
        </div>

        {/* MAIN */}
        <div className="border-y border-white/10 py-7">
          <motion.h1
            animate={{
              opacity: [0.7, 1, 0.75, 1],
            }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-5xl font-semibold tracking-[-0.08em] md:text-7xl"
          >
            ARE_ED
          </motion.h1>

          <div className="mt-5 flex items-center justify-between">
            <span className="micro-text-light">
              System Initializing
            </span>

            <span className="font-mono text-[10px] text-white/30">
              01
            </span>
          </div>
        </div>

        {/* PROGRESS */}
        <div className="mt-7">
          <div className="mb-2 flex justify-between">
            <span className="micro-text-light">
              Loading
            </span>

            <span className="micro-text-light">
              100%
            </span>
          </div>

          <div className="h-px overflow-hidden bg-white/10">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.1,
                ease: "easeInOut",
              }}
              className="h-full bg-white"
            />
          </div>
        </div>

        {/* SYMBOLS */}
        <div className="mt-8 flex gap-5 font-mono text-sm text-white/25">
          <span>+</span>
          <span>×</span>
          <span>○</span>
          <span>✦</span>
          <span>///</span>
        </div>
      </div>
    </div>
  );
}