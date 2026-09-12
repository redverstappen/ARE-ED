"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import TechLightField from "@/components/TechLightField";
import TerminalProfile from "@/components/TerminalProfile";

type AboutProps = {
  isEnglish: boolean;
};

export default function About({
  isEnglish,
}: AboutProps) {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-[#050505]
        px-5
        py-20
        text-white
        sm:px-6
        md:px-10
        md:py-32
      "
    >
      {/* LIGHT SYSTEM */}
      <TechLightField />

      {/* GRID */}
      <div className="pointer-events-none absolute inset-0 tech-grid-dark opacity-40" />

      {/* IRIDESCENT */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-gradient-to-br
          from-cyan-400/10
          via-purple-500/10
          to-pink-400/10
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* HEADER */}
        <Reveal>
          <div
            className="
              mb-12
              flex
              items-end
              justify-between
              border-b
              border-white/10
              pb-8
              md:mb-14
            "
          >
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="micro-text-light">
                  02
                </span>

                <div className="h-px w-12 bg-white/20" />

                <span className="micro-text-light">
                  ABOUT
                </span>
              </div>

              <h2
                className="
                  text-4xl
                  font-semibold
                  tracking-[-0.07em]
                  sm:text-5xl
                  md:text-7xl
                  lg:text-8xl
                "
              >
                {isEnglish
                  ? "About Me"
                  : "เกี่ยวกับผม"}
              </h2>
            </div>

            <div className="hidden items-center gap-5 md:flex">
              <span className="font-mono text-xs text-white/30">
                ///
              </span>

              <span className="micro-text-light">
                {isEnglish
                  ? "A little bit about me"
                  : "A little bit about me"}
              </span>
            </div>
          </div>
        </Reveal>

        {/* CONTENT */}
        <div className="grid gap-6 lg:grid-cols-[390px_1fr]">

          {/* PHOTO */}
          <Reveal>
            <div className="relative">

              <div
                className="
                  relative
                  aspect-square
                  overflow-hidden
                  border
                  border-white/10
                  bg-[#0b0b0b]
                "
              >

                {/* Corner brackets */}
                <span className="absolute left-0 top-0 z-20 h-5 w-5 border-l-2 border-t-2 border-white/70" />

                <span className="absolute right-0 top-0 z-20 h-5 w-5 border-r-2 border-t-2 border-white/70" />

                <span className="absolute bottom-0 left-0 z-20 h-5 w-5 border-b-2 border-l-2 border-white/70" />

                <span className="absolute bottom-0 right-0 z-20 h-5 w-5 border-b-2 border-r-2 border-white/70" />

                <img
                  src="/profile.jpg"
                  alt="ARE_ED profile"
                  className="h-full w-full object-cover transition duration-700"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/5" />

                <div className="pointer-events-none absolute inset-0 tech-grid-dark opacity-20" />

                <div className="absolute bottom-4 left-4 font-mono text-[9px] leading-4 text-white/50">
                  <div>27.01</div>
                  <div>ARE_ED</div>
                  <div>PIC</div>
                </div>

                <div className="absolute bottom-4 right-4 font-mono text-xs text-white/40">
                  ▦
                </div>

              </div>

              {/* Side marker */}
              <div className="mt-4 flex items-center gap-3">
                <span className="font-mono text-[9px] text-white/30">
                  // CODE: W2K3R +
                </span>

                <div className="h-px flex-1 bg-white/10" />
              </div>

            </div>
          </Reveal>

          {/* PROFILE */}
          <Reveal delay={0.12}>
            <motion.div
              whileHover={{
                y: -3,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                group
                terminal-card
                relative
                min-h-full
                overflow-hidden
                rounded-[1.5rem]
                border
                border-white/10
                bg-[#0a0a0a]
                p-6
                sm:p-7
                md:p-10
              "
            >

              {/* TERMINAL SCAN */}
              <div className="terminal-scan" />

              {/* GRID */}
              <div className="pointer-events-none absolute inset-0 tech-grid-dark opacity-20" />

              {/* IRIDESCENT GLOW */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-80
                  w-80
                  rounded-full
                  bg-gradient-to-br
                  from-cyan-300/10
                  via-purple-400/15
                  to-pink-300/10
                  blur-3xl
                  transition
                  duration-700
                  group-hover:scale-125
                "
              />

              {/* TERMINAL STATUS */}
              <div
                className="
                  terminal-status
                  pointer-events-none
                  absolute
                  right-6
                  top-5
                  z-20
                  flex
                  items-center
                  gap-2
                  font-mono
                  text-[8px]
                  tracking-[0.25em]
                  text-white/30
                  md:right-10
                  md:top-7
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                ONLINE
              </div>

              <div className="relative">

                {/* TOP */}
                <div className="flex flex-col justify-between gap-8 md:flex-row">

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="micro-text-light">
                        PROFILE
                      </span>

                      <span className="terminal-cursor" />
                    </div>

                    <h3
                      className="
                        mt-5
                        text-3xl
                        font-semibold
                        tracking-[-0.04em]
                        md:text-5xl
                      "
                    >
                      {isEnglish ? (
                        <>
                          Watthanaphong Rungruang
                        </>
                      ) : (
                        <>
                          วัฒนพงศ์ รุ่งเรือง
                        </>
                      )}
                    </h3>
                  </div>

                  <div className="md:text-right">
                    <span className="micro-text-light">
                      NICKNAME
                    </span>

                    <p className="mt-4 text-2xl font-medium">
                      {isEnglish
                        ? "Plub/Red"
                        : "พลับ/เรด"}
                    </p>
                  </div>

                </div>

                {/* DIVIDER */}
                <div className="my-9 h-px bg-white/10" />

                {/* INFO */}
                <div
                  className="
                    grid
                    grid-cols-1
                    gap-7
                    border-t
                    border-white/10
                    pt-7
                    sm:grid-cols-3
                    sm:gap-5
                  "
                >

                  <div>
                    <span className="micro-text-light">
                      BIRTHDAY
                    </span>

                    <p className="mt-3 text-lg font-medium">
                      27 / 01
                    </p>
                  </div>

                  <div>
                    <span className="micro-text-light">
                      FAVORITE FOOD
                    </span>

                    <p className="mt-3 text-lg font-medium">
                      {isEnglish
                        ? "Ramen"
                        : "ราเมง"}
                    </p>
                  </div>

                  <div>
                    <span className="micro-text-light">
                      CURRENTLY
                    </span>

                    <p className="mt-3 text-lg font-medium">
                      {isEnglish
                        ? "Learning & Building"
                        : "กำลังสร้างมองข้ามไปก่อน"}
                    </p>
                  </div>

                </div>

                {/* SYMBOLS */}
                <div className="mt-14 flex gap-6 font-mono text-xl text-white/25">

                  <motion.span
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    +
                  </motion.span>

                  <motion.span
                    animate={{
                      y: [0, 5, 0],
                      rotate: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    ×
                  </motion.span>

                  <motion.span
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    ○
                  </motion.span>

                  <motion.span
                    animate={{
                      y: [0, -7, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    ✦
                  </motion.span>

                </div>

              </div>
            </motion.div>
          </Reveal>

        </div>

        {/* FOOTER LINE */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center gap-5 border-t border-white/10 pt-5">

            <span className="micro-text-light">
              ARE_ED / ABOUT
            </span>

            <div className="h-px flex-1 border-t border-dashed border-white/10" />

            <span className="micro-text-light">
              02 / 02
            </span>

          </div>
        </Reveal>

      </div>
    </section>
  );
}