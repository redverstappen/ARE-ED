"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type NavbarProps = {
  language: "EN" | "TH";
  onLanguageChange: () => void;
};

export default function Navbar({
  language,
  onLanguageChange,
}: NavbarProps) {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const previous = lastScrollY.current;

      if (current <= 20) {
        setHidden(false);
      } else if (current > previous) {
        setHidden(true);
      } else if (current < previous) {
        setHidden(false);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      animate={{
        y: hidden ? "-110%" : "0%",
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        fixed
        left-0
        right-0
        top-0
        z-[999]
        border-b
        border-white/10
        bg-black/35
        px-4
        py-3
        backdrop-blur-xl
        sm:px-6
        sm:py-4
        md:px-10
      "
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between">
        <a
          href="#top"
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
        </a>

        <button
          onClick={onLanguageChange}
          className="
            rounded-full
            border
            border-white/15
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
            hover:border-white/30
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
    </motion.nav>
  );
}