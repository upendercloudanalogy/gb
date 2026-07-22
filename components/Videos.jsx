"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const EASE = [0.22, 1, 0.36, 1];

export default function Videos({ data }) {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
      <Reveal>
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold-soft/70">
          candles &amp; cakes
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display text-4xl italic text-cream sm:text-5xl">
          {data.heading}
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
          {data.intro}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        {data.videos.map((v, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 44, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 1, delay: i * 0.15, ease: EASE }}
          >
            <div className="photo-frame aspect-[9/16] w-full">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={v.src}
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
              />
            </div>
            <figcaption className="mt-5 font-hand text-xl text-rose-soft">
              {v.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="mt-10 text-sm text-cream/45">
          tip: tap a video to unmute — sunn lo 🎂
        </p>
      </Reveal>
    </section>
  );
}
