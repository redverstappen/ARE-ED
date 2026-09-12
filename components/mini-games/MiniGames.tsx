"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import LifeGenerator from "./LifeGenerator";
import WhatsInTheBox from "./WhatsInTheBox";

type Language = "EN" | "TH";

type ActiveGame = "hub" | "life" | "box";

export default function MiniGames() {
  const [language, setLanguage] =
    useState<Language>("EN");

  const [activeGame, setActiveGame] =
    useState<ActiveGame>("hub");

  const isEnglish = language === "EN";

  const toggleLanguage = () => {
    setLanguage((prev) =>
      prev === "EN" ? "TH" : "EN"
    );
  };

  return (
    <main className="mini-games-page">
      {/* BACKGROUND */}

      <div className="mini-games-light mini-games-light-1" />
      <div className="mini-games-light mini-games-light-2" />

      <div className="mini-games-global-grid" />
      <div className="mini-games-scanline" />

      {/* =================================================
          NAVBAR
      ================================================= */}

      <motion.nav
        initial={{
          y: -25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          fixed
          left-0
          right-0
          top-0
          z-[999]
          border-b
          px-5
          py-3.5
          backdrop-blur-xl
          sm:px-8
          sm:py-4
        "
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">
          <a
            href="/"
            className="
              text-sm
              font-semibold
              tracking-[0.2em]
            "
          >
            ARE_ED
          </a>

          <div className="flex items-center gap-2">
            <a
              href="/"
              className="
                rounded-full
                border
                bg-white/40
                px-4
                py-2
                text-[10px]
                font-medium
                tracking-[0.14em]
                backdrop-blur-md
                transition-all
                duration-300
              "
            >
              HOME
            </a>

            <button
              onClick={toggleLanguage}
              className="
                rounded-full
                border
                bg-white/40
                px-4
                py-2
                text-[10px]
                font-medium
                tracking-[0.14em]
                backdrop-blur-md
                transition-all
                duration-300
              "
            >
              {language}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          mini-games-content
          mx-auto
          max-w-[1250px]
          px-5
          sm:px-8
        "
      >
        {/* =================================================
            HUB
        ================================================= */}

        {activeGame === "hub" && (
          <div className="flex h-full flex-col">
            {/* HEADER */}

            <motion.header
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mini-hub-header"
            >
              <div className="w-full">
                <div className="mini-micro mb-4">
                  ARE_ED&nbsp;&nbsp;//&nbsp;&nbsp;MINI GAMES
                </div>

                <div className="flex items-end justify-between gap-6">
                  <div>
                    <h1
                      className="
                        mini-page-title
                        text-6xl
                        sm:text-8xl
                      "
                    >
                      {isEnglish
                        ? "Mini Games"
                        : "มินิเกม"}
                    </h1>

                    <p
                      className="
                        mini-page-description
                        mt-4
                        max-w-xl
                        text-sm
                        sm:text-base
                      "
                    >
                      {isEnglish
                        ? "Small games. Random outcomes. Questionable decisions."
                        : "เกมเล็ก ๆ ผลลัพธ์สุ่ม ๆ และการตัดสินใจที่อาจไม่ควรเกิดขึ้น"}
                    </p>
                  </div>

                  <div className="mini-micro hidden sm:block">
                    02 / GAMES
                  </div>
                </div>
              </div>
            </motion.header>

            {/* CARDS */}

            <div className="grid min-h-0 flex-none gap-4 md:flex-1 md:grid-cols-2">
              <GameCard
                number="01"
                symbol="◎"
                title={
                  isEnglish
                    ? "Fortune Teller 'Red'"
                    : "เรด เดอะ หมอดู"
                }
                description={
                  isEnglish
                    ? "Lemme tell your future."
                    : "เด่วผมดูอนาคตให้นะ ..."
                }
                tags={
                  isEnglish
                    ? "JOB · MONEY · LOVE"
                    : "การงาน · การเงิน · ความรัก"
                }
                button={
                  isEnglish
                    ? "PLAY GAME"
                    : "เริ่มเกม"
                }
                onClick={() =>
                  setActiveGame("life")
                }
              />

              <GameCard
                number="02"
                symbol="□"
                title={
                  isEnglish
                    ? "What's in the Box?"
                    : "ในกล่องมีอะไร?"
                }
                description={
                  isEnglish
                    ? "You have absolutely no idea what's inside."
                    : "คุณไม่มีทางรู้ว่าข้างในมีอะไร"
                }
                tags={
                  isEnglish
                    ? "RANDOM · RARITY · ???"
                    : "สุ่ม · ระดับ · ???"
                }
                button={
                  isEnglish
                    ? "OPEN BOX"
                    : "เปิดกล่อง"
                }
                onClick={() =>
                  setActiveGame("box")
                }
              />
            </div>

            {/* FOOTER */}

            <div
              className="
                mt-4
                flex
                items-center
                justify-between
                border-t
                border-black/10
                pt-3
                text-[9px]
                text-black/35
              "
            >
              <span>ARE_ED / MINI GAMES</span>
              <span>02 GAMES AVAILABLE</span>
            </div>
          </div>
        )}

        {/* LIFE */}

        {activeGame === "life" && (
          <LifeGenerator
            language={language}
            onBack={() =>
              setActiveGame("hub")
            }
          />
        )}

        {/* BOX */}

        {activeGame === "box" && (
          <WhatsInTheBox
            language={language}
            onBack={() =>
              setActiveGame("hub")
            }
          />
        )}
      </div>
    </main>
  );
}

/* =========================================================
   GAME CARD
========================================================= */

type GameCardProps = {
  number: string;
  symbol: string;
  title: string;
  description: string;
  tags: string;
  button: string;
  onClick: () => void;
};

function GameCard({
  number,
  symbol,
  title,
  description,
  tags,
  button,
  onClick,
}: GameCardProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -5,
      }}
      whileTap={{
        scale: 0.99,
      }}
      className="
        mini-game-card
        group
        relative
        min-h-[250px]
        w-full
        min-w-0
        overflow-hidden
        border
        p-6
        text-left
        sm:min-h-0
        sm:p-8
        "
    >
      <div className="mini-game-card-grid" />
      <div className="mini-game-card-glow" />

      <div className="relative z-10 flex h-full min-h-0 flex-col">
        <div className="flex items-start justify-between">
          <span className="mini-micro">
            {number}
          </span>

          <span className="mini-game-symbol text-6xl font-light">
            {symbol}
          </span>
        </div>

        <div className="mt-6 sm:mt-auto">
          <div className="mini-micro mb-3">
            MINI GAME // {number}
          </div>

          <h2
            className="
              text-4xl
              font-medium
              tracking-[-0.045em]
              sm:text-5xl
            "
          >
            {title}
          </h2>

          <p
            className="
              mt-3
              max-w-md
              text-sm
              leading-7
              text-black/50
              sm:text-base
            "
          >
            {description}
          </p>

          <div className="mini-micro mt-4">
            {tags}
          </div>

          <div
            className="
              mt-5
              flex
              items-center
              justify-between
              border-t
              border-black/10
              pt-4
            "
          >
            <span className="text-sm font-medium">
              {button}
            </span>

            <span className="mini-game-arrow text-xl">
              →
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}