"use client";

import { motion } from "framer-motion";

type TechnicalDecorationsProps = {
  variant?: "hero" | "section";
};

export default function TechnicalDecorations({
  variant = "section",
}: TechnicalDecorationsProps) {
  if (variant === "hero") {
    return (
      <>
        {/* TOP LINE */}

        <div className="pointer-events-none absolute left-6 right-6 top-6 z-20 hidden items-center md:flex">
          <div className="h-px flex-1 bg-white/15" />

          <div className="ml-6 flex gap-5 text-xs text-white/35">
            <span>+</span>
            <span>×</span>
            <span>○</span>
            <span>✦</span>
            <span>///</span>
          </div>

          <div className="ml-6 h-px w-20 bg-white/15" />

          <span className="ml-4 font-mono text-[8px] tracking-[0.2em] text-white/30">
            01 / 04
          </span>
        </div>

        {/* RIGHT COORDINATE */}

        <div className="pointer-events-none absolute right-7 top-1/2 z-10 hidden -translate-y-1/2 md:block">
          <div className="flex flex-col items-end gap-2 font-mono text-[8px] tracking-[0.2em] text-white/25">
            <span>X: 0042</span>
            <span>Y: 0188</span>
            <span>SYS_01</span>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="pointer-events-none absolute bottom-6 left-6 right-6 z-20 hidden items-center gap-4 md:flex">
          <span className="font-mono text-[8px] tracking-[0.25em] text-white/30">
            ARE_ED / 001
          </span>

          <div className="h-px flex-1 bg-white/15" />

          <motion.span
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-xs text-white/35"
          >
            +
          </motion.span>
        </div>
      </>
    );
  }

  return (
    <>
      {/* TOP SYSTEM LINE */}

      <div className="pointer-events-none absolute left-6 right-6 top-6 hidden items-center md:flex">
        <span className="font-mono text-[8px] tracking-[0.25em] text-black/20">
          ARE_ED / SYSTEM
        </span>

        <div className="ml-5 h-px flex-1 bg-black/10" />

        <div className="ml-5 flex gap-4 text-xs text-black/20">
          <span>+</span>
          <span>×</span>
          <span>○</span>
          <span>✦</span>
        </div>
      </div>

      {/* RIGHT COORDINATE */}

      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 md:block">
        <div className="flex flex-col items-end gap-2 font-mono text-[7px] uppercase tracking-[0.3em] text-black/15">
          <span>COORD</span>
          <span>01.0042</span>
          <span>ACTIVE</span>
        </div>
      </div>
    </>
  );
}