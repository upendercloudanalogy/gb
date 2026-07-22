"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

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

        <div className="relative z-10 mx-auto max-w-2xl px-6 pb-24 text-center">
          <Reveal>
            <h2 className="font-display text-4xl italic leading-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.6)] sm:text-5xl">
              “{finalePhoto.caption}”
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-cream/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] sm:text-lg">
              {finalePhoto.note}
            </p>
          </Reveal>
        </div>
      </div>

      {/* the blessing */}
      <div className="relative mx-auto max-w-2xl px-6 py-28 text-center sm:py-36">
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

        <ul className="mt-12 space-y-6">
          {finale.lines.map((line, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: i * 0.18, ease: EASE }}
              className="font-display text-xl italic leading-relaxed text-cream/85 sm:text-2xl"
            >
              {line}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
