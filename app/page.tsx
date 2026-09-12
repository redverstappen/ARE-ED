"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import About from "@/components/About";
import IridescentBackground from "@/components/IridescentBackground";



type IntroPhase = "loading" | "glitch" | "done";

export default function Home() {
  const [language, setLanguage] = useState<"EN" | "TH">("EN");

  const [introPhase, setIntroPhase] =
    useState<IntroPhase>("loading");

  const isEnglish = language === "EN";

  useEffect(() => {
    /*
      =========================
      INTRO TIMELINE
      =========================

      0.0s - 1.8s
      Loading screen

      1.8s - 2.8s
      Glitch transition

      2.8s+
      Website appears
      + Hero starts typing immediately
    */

    const loadingTimer = setTimeout(() => {
      setIntroPhase("glitch");
    }, 1800);

    const glitchTimer = setTimeout(() => {
      setIntroPhase("done");
    }, 2800);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(glitchTimer);
    };
  }, []);

  const hasEntered = introPhase === "done";

  return (
    <>
      {/* =================================
          LOADING SCREEN
      ================================= */}
      {introPhase === "loading" && <LoadingScreen />}

      {/* =================================
          GLITCH TRANSITION
      ================================= */}
      {introPhase === "glitch" && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: [1, 1, 0.92, 1, 0.85, 0],
          }}
          transition={{
            duration: 1,
            ease: "linear",
          }}
          className="fixed inset-0 z-[110] overflow-hidden bg-[#050505]"
        >
          {/* Grid */}
          <div className="absolute inset-0 tech-grid-dark opacity-40" />

          {/* Noise */}
          <div className="noise absolute inset-0 opacity-[0.12]" />

          {/* Scanline */}
          <motion.div
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 0.9,
              ease: "linear",
            }}
            className="absolute left-0 right-0 h-[2px] bg-white/10"
          />

          {/* Horizontal glitch lines */}
          <motion.div
            animate={{
              x: [0, -40, 25, -15, 30, 0],
              scaleX: [1, 1.05, 0.97, 1.04, 0.98, 1],
            }}
            transition={{
              duration: 0.8,
              ease: "linear",
            }}
            className="absolute left-0 top-[32%] h-[2px] w-full bg-white/50"
          />

          <motion.div
            animate={{
              x: [0, 35, -25, 15, -10, 0],
              scaleX: [1, 0.96, 1.04, 0.98, 1.03, 1],
            }}
            transition={{
              duration: 0.7,
              ease: "linear",
              delay: 0.1,
            }}
            className="absolute left-0 top-[57%] h-px w-full bg-white/40"
          />

          <motion.div
            animate={{
              x: [0, -20, 30, -5, 15, 0],
              opacity: [0.1, 0.8, 0.2, 0.7, 0.2, 0],
            }}
            transition={{
              duration: 0.65,
              ease: "linear",
              delay: 0.2,
            }}
            className="absolute left-0 top-[72%] h-[3px] w-full bg-white/30"
          />

          {/* Glitch blocks */}
          <motion.div
            animate={{
              x: [0, 30, -15, 20, 0],
              opacity: [0, 0.7, 0, 0.5, 0],
            }}
            transition={{
              duration: 0.7,
              ease: "linear",
            }}
            className="absolute left-[12%] top-[42%] h-4 w-32 bg-white/30"
          />

          <motion.div
            animate={{
              x: [0, -25, 10, -15, 0],
              opacity: [0, 0.5, 0, 0.7, 0],
            }}
            transition={{
              duration: 0.8,
              ease: "linear",
              delay: 0.15,
            }}
            className="absolute right-[10%] top-[62%] h-2 w-40 bg-white/20"
          />

          {/* Center signal */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                opacity: [0.2, 1, 0.3, 1, 0.4, 0],
                x: [0, -4, 5, -3, 2, 0],
                scaleX: [1, 1.08, 0.95, 1.04, 0.98, 1],
              }}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
              className="font-mono text-sm tracking-[0.5em] text-white/70"
            >
              ARE_ED
            </motion.div>
          </div>

          {/* Tiny coordinates */}
          <div className="absolute right-8 top-1/2 font-mono text-[9px] leading-5 tracking-[0.25em] text-white/25">
            <div>X : 0042</div>
            <div>Y : 0188</div>
            <div>SYS_01</div>
          </div>

          {/* Bottom technical line */}
          <div className="absolute bottom-8 left-8 right-8 flex items-center gap-4">
            <span className="font-mono text-[9px] tracking-[0.3em] text-white/25">
              ARE_ED / INIT
            </span>

            <div className="h-px flex-1 bg-white/10" />

            <span className="font-mono text-[9px] text-white/25">
              01 / 01
            </span>
          </div>
        </motion.div>
      )}
      
      <div className="site-effects" />

      <Navbar
          language={language}
          onLanguageChange={() =>
            setLanguage(isEnglish ? "TH" : "EN")
          }
        />


      {/* =================================
          MAIN WEBSITE
      ================================= */}
      <motion.main
        id="top"
        initial={{
          opacity: 0,
          scale: 1.02,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: hasEntered ? 1 : 0,
          scale: hasEntered ? 1 : 1.02,
          filter: hasEntered
            ? "blur(0px)"
            : "blur(10px)",
        }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
      >
        <IridescentBackground />

        
        <Hero
          isEnglish={isEnglish}
          startTyping={hasEntered}
        />

        <Works isEnglish={isEnglish} />


        <About isEnglish={isEnglish} />

        <footer className="relative border-t border-white/10 bg-[#050505] px-6 py-8 text-white/40 md:px-10">
          <div className="mx-auto flex max-w-[1500px] items-center justify-between">
            <span className="micro-text-light">
              © 2026 ARE_ED
            </span>

            <span className="micro-text-light">
              03 / 03
            </span>
          </div>
        </footer>
      </motion.main>
    </>
  );
}