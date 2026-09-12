"use client";

import { motion } from "framer-motion";

export default function TerminalProfile() {
  return (
    <div className="pointer-events-none absolute right-5 top-5 z-20 hidden font-mono text-[8px] tracking-[0.2em] text-white/35 md:block">
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        TERMINAL // ACCESS
      </motion.div>
    </div>
  );
}