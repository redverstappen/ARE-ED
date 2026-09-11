"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type HeroProps = {
    isEnglish: boolean;
    startTyping: boolean;
};

export default function Hero({
    isEnglish,
    startTyping,
}: HeroProps) {
    const text = "ARE_ED";

    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(false);

    useEffect(() => {
        // ยังไม่เริ่มจนกว่า intro จะจบ
        if (!startTyping) return;

        let index = 0;

        setDisplayText("");
        setShowCursor(true);

        const typing = setInterval(() => {
            setDisplayText(text.slice(0, index + 1));

            index++;

            if (index >= text.length) {
                clearInterval(typing);

                setTimeout(() => {
                    setShowCursor(false);
                }, 1000);
            }
        }, 110);

        return () => {
            clearInterval(typing);
        };
    }, [startTyping]);

    return (
        <section className="
  relative
  flex
  min-h-[100svh]
  items-center
  overflow-hidden
  bg-black
  px-5
  pt-[72px]
  pb-16
  sm:px-6
  md:min-h-screen
  md:px-10
  md:pt-[80px]
">

            {/* =========================
          VIDEO BACKGROUND
      ========================= */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <video
                    className="absolute inset-0 h-full w-full scale-105 object-cover opacity-[0.8]"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source
                        src="/hero-video.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* Dark */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Iridescent */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/10 via-transparent to-purple-200/20" />
            </div>

            {/* =========================
          IRIDESCENT GLOW
      ========================= */}
            <motion.div
                className="pointer-events-none absolute right-[10%] top-[18%] h-64 w-64 rounded-full bg-gradient-to-br from-cyan-200 via-purple-200 to-pink-200 opacity-40 blur-3xl"
                animate={{
                    scale: [1, 1.08, 1],
                    x: [0, -20, 0],
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* =========================
          CONTENT
      ========================= */}
            <div className="relative z-10">

                {/* LABEL */}
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}
                    animate={{
                        opacity: startTyping ? 1 : 0,
                        y: startTyping ? 0 : 15,
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                    }}
                    className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-white/80"
                >
                    {isEnglish
                        ? "Developer / Creator"
                        : "นักพัฒนา / ครีเอเตอร์"}
                </motion.p>

                {/* =========================
            ARE_ED
        ========================= */}
                <div>
                    <h1 className="glitch text-[clamp(4rem,18vw,10rem)] font-semibold leading-[0.85] tracking-[-0.07em]  text-white
">
                        {displayText}

                        {showCursor && (
                            <motion.span
                                animate={{
                                    opacity: [1, 0, 1],
                                }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                }}
                                className="ml-3 inline-block h-[0.72em] w-[3px] translate-y-[0.05em] bg-white"
                            />
                        )}
                    </h1>
                </div>

                {/* DESCRIPTION */}
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: startTyping ? 1 : 0,
                        y: startTyping ? 0 : 20,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.9,
                        ease: "easeOut",
                    }}
                    className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl"
                >
                    {isEnglish
                        ? "I build things. Games, websites and random experiments."
                        : "ผมชอบสร้างสิ่งต่าง ๆ ทั้งเกม เว็บไซต์ และโปรเจกต์ทดลองต่าง ๆ (ไม่จริงหนาๆ)"}
                </motion.p>

                {/* BUTTONS */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: startTyping ? 1 : 0,
                        y: startTyping ? 0 : 20,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 1.05,
                        ease: "easeOut",
                    }}
                    className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
                >
                    <a
                        href="https://www.twitch.tv/are_ed/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-xl active:translate-y-0 active:scale-95 w-full sm:w-auto"
                    >
                        Twitch ↗
                    </a>

                    <a
                        href="https://play.unity.com/en/games/4051e925-9d49-4db8-803c-6ccbdbbe0707/best-game-ever-02"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-xl active:translate-y-0 active:scale-95 w-full sm:w-auto"
                    >
                        {isEnglish
                            ? "Play My Game ↗"
                            : "เล่นเกมของผม ↗"}
                    </a>
                </motion.div>
            </div>

            {/* =========================
          SCROLL
      ========================= */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: startTyping ? 1 : 0,
                }}
                transition={{
                    delay: 1.5,
                    duration: 0.6,
                }}
                className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/60 md:flex"
            >
                <span>Scroll</span>

                <motion.span
                    animate={{
                        y: [0, 5, 0],
                    }}
                    transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    ↓
                </motion.span>
            </motion.div>
        </section>
    );
}