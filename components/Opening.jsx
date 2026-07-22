"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Opening({ opening }) {
  return (
    <section className="relative z-10 mx-auto max-w-2xl px-6 py-28 text-center sm:py-36">
      <Reveal>
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="hairline w-16" />
          <svg width="16" height="16" viewBox="0 0 32 29" aria-hidden="true">
            <path
              d="M16 28C16 28 2 19.5 2 9.8 2 5 5.6 2 9.4 2c2.7 0 5 1.6 6.6 4 1.6-2.4 3.9-4 6.6-4C26.4 2 30 5 30 9.8 30 19.5 16 28 16 28z"
              fill="var(--rose)"
            />
          </svg>
          <span className="hairline w-16" />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="font-display text-3xl italic text-cream sm:text-4xl">
          {opening.heading}
        </h2>
      </Reveal>

      <div className="mt-10 space-y-6">
        {opening.paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg leading-relaxed text-cream/75"
          >
            {p}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
