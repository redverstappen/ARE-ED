"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type NavbarProps = {
  language: "EN" | "TH";
  onLanguageChange: () => void;
  activePage?: "home" | "fortune";
  hideOnScroll?: boolean;
};

export default function Navbar({
  language,
  onLanguageChange,
  activePage = "home",
  hideOnScroll = true,
}: NavbarProps) {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (!hideOnScroll) {
      return;
    }

    const scrollThreshold = 40;

    const handleScroll = () => {
      const current = window.scrollY;
      const previous = lastScrollY.current;
      const distance = current - previous;

      if (current <= 96) {
        setHidden(false);
        lastScrollY.current = current;
        return;
      }

      if (Math.abs(distance) < scrollThreshold) {
        return;
      }

      if (distance > 0) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = current;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hideOnScroll]);

  const navLinkClass = (page: "home" | "fortune") =>
    [
      "hidden font-mono text-[9px] tracking-[0.16em] transition-all duration-200 sm:block",
      activePage === page
        ? "rounded-full border border-white/35 bg-white/5 px-4 py-2 text-white"
        : "px-1 py-2 text-white/45 hover:text-white",
    ].join(" ");

  return (
    <motion.nav
      initial={false}
      animate={{
        y: hidden ? "-110%" : "0%",
      }}
      transition={{
        duration: 0.32,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        fixed
        left-0
        right-0
        top-0
        z-[999]
        h-[72px]
        border-b
        border-white/10
        bg-black/45
        px-4
        backdrop-blur-xl
        sm:px-6
        md:px-10
      "
    >
      <div className="
        mx-auto
        flex
        h-full
        max-w-[1600px]
        items-center
        justify-between
      ">

        {/* LOGO */}

        <Link
          href="/"
          className="
            text-xs
            font-semibold
            tracking-[0.2em]
            text-white
            transition-opacity
            duration-200
            hover:opacity-60
            sm:text-sm
          "
        >
          ARE_ED
        </Link>

        {/* RIGHT */}

        <div className="
          flex
          items-center
          gap-3
          sm:gap-5
        ">

          {/* HOME */}

          

          <a
            href="/mini-games"
            className="
            rounded-full
            border
          border-white/25
          bg-white/5
            px-4
            py-2
            text-[10px]
            tracking-[0.16em]
          text-white/80
            backdrop-blur-md
            transition-all
            duration-300
          hover:border-white/50
          hover:bg-white
          hover:text-black
                "
              >
                MINI GAMES
              </a>

          

          {/* LANGUAGE */}

          <button
            type="button"
            onClick={onLanguageChange}
            aria-label={
              language === "EN"
                ? "Switch site language to Thai"
                : "เปลี่ยนภาษาเว็บไซต์เป็นอังกฤษ"
            }
            className="
              rounded-full
              border
              border-white/20
              bg-white/5
              px-3
              py-1.5
              text-[10px]
              font-medium
              tracking-wider
              text-white
              backdrop-blur-md
              transition-all
              duration-200
              hover:border-white/40
              hover:bg-white
              hover:text-black
              active:scale-95
              sm:px-4
              sm:py-2
              sm:text-xs
            "
          >
            {language}
          </button>

        </div>
      </div>
    </motion.nav>
  );
}
