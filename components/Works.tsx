"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

type WorksProps = {
  isEnglish: boolean;
};

export default function Works({
  isEnglish,
}: WorksProps) {
  return (
    <section
      id="works"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-24 text-white md:px-10 md:py-32"
    >
      {/* GRID */}
      <div className="pointer-events-none absolute inset-0 tech-grid-dark opacity-40" />

      {/* IRIDESCENT */}
      <div className="pointer-events-none absolute right-[-120px] top-[10%] h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400/10 via-purple-500/15 to-pink-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* HEADER */}
        <Reveal>
          <div className="mb-14 flex items-end justify-between border-b border-white/10 pb-8">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="micro-text-light">
                  01
                </span>

                <div className="h-px w-12 bg-white/20" />

                <span className="micro-text-light">
                  WORKS
                </span>
              </div>

              <h2 className="text-5xl font-semibold tracking-[-0.07em] md:text-7xl lg:text-8xl">
                {isEnglish
                  ? "Selected Works"
                  : "ผลงานบางส่วน"}
              </h2>
            </div>

            <div className="hidden items-center gap-5 md:flex">
              <span className="font-mono text-xs text-white/30">
                ///
              </span>

              <span className="micro-text-light">
                {isEnglish
                  ? "Things I've made"
                  : "Things I've made"}
              </span>
            </div>
          </div>
        </Reveal>

        {/* CARDS */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* UNITY */}
          <Reveal>
            <motion.a
              href="https://play.unity.com/en/games/4051e925-9d49-4db8-803c-6ccbdbbe0707/best-game-ever-02"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group relative flex min-h-[320px] sm:min-h-[360px] flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a0a0a] p-7 md:p-9"
            >
              <div className="absolute inset-0 tech-grid-dark opacity-20" />

              <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-400/10 via-purple-500/25 to-pink-400/10 blur-3xl transition duration-700 group-hover:scale-125" />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="micro-text-light">
                      01 / UNITY
                    </span>

                    <span className="technical-symbol-light text-2xl">
                      +
                    </span>
                  </div>

                  <h3 className="mt-8 text-3xl font-semibold tracking-tight md:text-4xl">
                    Best Game Ever
                  </h3>

                  <p className="mt-3 max-w-md text-white/45">
                    {isEnglish
                      ? "A first game project made with Unity."
                      : "โปรเจกต์เกมแรกที่สร้างด้วย Unity"}
                  </p>
                </div>

                <div>
                  <div className="mb-5 h-px bg-white/10" />

                  <div className="flex items-center justify-between">
                    <div className="flex gap-3 font-mono text-xs text-white/40">
                      <span>
                        {isEnglish
                          ? "First Project"
                          : "โปรเจกต์แรก"}
                      </span>

                      <span>·</span>

                      <span>
                        {isEnglish
                          ? "No prior knowledge"
                          : "ไม่มีความรู้มาก่อน"}
                      </span>
                    </div>

                    <span className="micro-text-light">
                      01 / 02
                    </span>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="font-mono text-xs text-white/35">
                      ///
                    </span>

                    <span className="flex gap-2">
                      <i className="h-1.5 w-1.5 bg-white/30" />
                      <i className="h-1.5 w-1.5 bg-white/20" />
                      <i className="h-1.5 w-1.5 bg-white/10" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          </Reveal>

          {/* AI */}
          <Reveal delay={0.12}>
            <motion.div
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group relative flex min-h-[320px] sm:min-h-[360px] flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a0a0a] p-7 md:p-9"
            >
              <div className="absolute inset-0 tech-grid-dark opacity-20" />

              <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-300/10 via-purple-400/20 to-pink-300/10 blur-3xl transition duration-700 group-hover:scale-125" />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="micro-text-light">
                      02 / WEB
                    </span>

                    <span className="technical-symbol-light text-2xl">
                      ×
                    </span>
                  </div>

                  <h3 className="mt-8 text-3xl font-semibold tracking-tight md:text-4xl">
                    AI Shooting Trainer
                  </h3>

                  <p className="mt-3 max-w-md text-white/45">
                    {isEnglish
                      ? "An experimental web project using AI."
                      : "โปรเจกต์เว็บไซต์ทดลองที่นำ AI มาใช้"}
                  </p>
                </div>

                <div>
                  <div className="mb-5 h-px bg-white/10" />

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-white/40">
                      {isEnglish
                        ? "Coming Soon..."
                        : "เร็ว ๆ นี้..."}
                    </span>

                    <span className="micro-text-light">
                      02 / 02
                    </span>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="font-mono text-xs text-white/35">
                      ///
                    </span>

                    <span className="font-mono text-xs tracking-[0.3em] text-white/20">
                      ···
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* FOOTER DECORATION */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center gap-5 border-t border-white/10 pt-5">
            <span className="micro-text-light">
              ARE_ED / WORKS
            </span>

            <div className="h-px flex-1 border-t border-dashed border-white/10" />

            <div className="hidden gap-5 text-lg text-white/30 sm:flex">
              <span>+</span>
              <span>×</span>
              <span>○</span>
              <span>✦</span>
            </div>

            <span className="micro-text-light">
              01 / 02
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}