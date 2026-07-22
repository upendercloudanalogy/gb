"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import WordReveal from "./WordReveal";

const EASE = [0.22, 1, 0.36, 1];

export default function Finale({ finalePhoto, finale }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.35]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.45, 0.85]);

  return (
    <section className="relative z-10">
      {/* full-bleed heart-cloud image */}
      <div
        ref={ref}
        className="vignette relative flex min-h-[100svh] items-end justify-center overflow-hidden"
      >
        <motion.div style={{ scale, y }} className="absolute inset-0">
          <Image
            src={finalePhoto.src}
            alt={finalePhoto.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <motion.div
          style={{ opacity: overlay }}
          className="absolute inset-0 bg-gradient-to-b from-plum-950/30 via-transparent to-plum-950"
        />
        <div className="absolute inset-0 bg-plum-950/20" />

        {/* the sky's heart: a soft glow + a self-tracing heart outline over the
            clouds. On a phone the photo shows full-height (cloud-heart is left of
            centre, ~18% down); on laptop it's centre-cropped, so the sweet spot
            differs — hence the responsive position. */}
        <div
          className="pointer-events-none absolute left-[48%] top-[6%] z-[6] grid -translate-x-1/2 place-items-center md:left-1/2 md:top-[13%]"
          aria-hidden="true"
        >
          <div
            className="h-[32vmin] w-[32vmin] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,228,238,0.55), rgba(231,143,163,0.18) 45%, transparent 72%)",
              filter: "blur(2px)",
              animation: "glowPulse 4.5s ease-in-out infinite",
            }}
          />
          <motion.svg
            viewBox="0 0 32 29"
            className="absolute h-[13vmin] w-[13vmin]"
            style={{ filter: "drop-shadow(0 0 10px rgba(255,240,245,0.8))" }}
          >
            <motion.path
              d="M16 28C16 28 2 19.5 2 9.8 2 5 5.6 2 9.4 2c2.7 0 5 1.6 6.6 4 1.6-2.4 3.9-4 6.6-4C26.4 2 30 5 30 9.8 30 19.5 16 28 16 28z"
              fill="rgba(255,240,245,0.06)"
              stroke="rgba(255,244,248,0.92)"
              strokeWidth="0.9"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.6, ease: "easeInOut", delay: 0.4 }}
            />
          </motion.svg>
        </div>

        {/* only the short caption sits on the photo, so it never covers her */}
        <div className="relative z-10 mx-auto max-w-2xl px-6 pb-16 text-center sm:pb-24">
          <Reveal>
            <h2 className="mx-3 font-display text-[1.6rem] italic leading-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)] sm:mx-0 sm:text-5xl">
              “{finalePhoto.caption}”
            </h2>
          </Reveal>
        </div>
      </div>

      {/* her note — below the image so it's always readable on any screen */}
      <div className="relative mx-auto max-w-2xl px-6 pt-20 text-center sm:pt-28">
        <Reveal>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-cream/80 sm:text-xl">
            {finalePhoto.note}
          </p>
        </Reveal>
      </div>

      {/* the blessing */}
      <div className="relative mx-auto max-w-2xl px-6 pb-28 pt-16 text-center sm:pb-36 sm:pt-20">
        <Reveal>
          <div
            className="mx-auto mb-10 w-fit"
            style={{ animation: "heartbeat 2.4s ease-in-out infinite" }}
          >
            <svg viewBox="0 0 32 29" width="46" height="42" aria-hidden="true">
              <defs>
                <linearGradient id="finaleHeart" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f4a6b8" />
                  <stop offset="100%" stopColor="#e2b07a" />
                </linearGradient>
              </defs>
              <path
                d="M16 28C16 28 2 19.5 2 9.8 2 5 5.6 2 9.4 2c2.7 0 5 1.6 6.6 4 1.6-2.4 3.9-4 6.6-4C26.4 2 30 5 30 9.8 30 19.5 16 28 16 28z"
                fill="url(#finaleHeart)"
              />
            </svg>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="shimmer-text font-display text-4xl font-semibold leading-tight sm:text-6xl">
            {finale.heading}
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          {finale.lines.map((line, i) => (
            <WordReveal
              key={i}
              text={line}
              delay={i * 0.15}
              stagger={0.06}
              className="font-display text-xl italic leading-relaxed text-cream/85 sm:text-2xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
