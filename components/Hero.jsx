"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.15 },
  },
};
const item = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: EASE },
  },
};

export default function Hero({ hero }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.24]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="vignette relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* faded, blurred backdrop with parallax */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/media/kashmir-stream.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.28]"
          style={{ filter: "blur(3px) saturate(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-plum-950/70 via-plum-900/80 to-plum-950" />
      </motion.div>

      {/* soft drifting aurora glow */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="aurora h-[70vmin] w-[90vmin] opacity-70" />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-3xl"
      >
        <motion.p
          variants={item}
          className="mb-6 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-cream/55 sm:text-sm sm:tracking-[0.4em]"
        >
          <span className="hairline hidden w-10 sm:block" /> a farewell, and every good wish
          <span className="hairline hidden w-10 sm:block" />
        </motion.p>

        <motion.h1
          variants={item}
          className="shimmer-text font-display text-6xl font-semibold leading-none sm:text-8xl"
        >
          {hero.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl font-hand text-2xl text-rose-soft sm:text-3xl"
        >
          {hero.tagline}
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg"
        >
          {hero.subtitle}
        </motion.p>
      </motion.div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <div className="text-[11px] uppercase tracking-[0.35em] text-cream/45">
          {hero.scrollHint}
        </div>
        <div style={{ animation: "bob 2.2s ease-in-out infinite" }} className="mt-3">
          <svg width="22" height="22" viewBox="0 0 24 24" className="mx-auto" aria-hidden="true">
            <path
              d="M12 4v14M6 12l6 6 6-6"
              fill="none"
              stroke="var(--rose-soft)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
