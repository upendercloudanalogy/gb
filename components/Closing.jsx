"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const EASE = [0.22, 1, 0.36, 1];

// A gentle goodbye ritual: tap the button to release wishes — hearts and warm
// paper-lanterns drift up into the night sky and fade away.
export default function Closing({ closing }) {
  const [wishes, setWishes] = useState([]);
  const [released, setReleased] = useState(false);
  const idc = useRef(0);

  const release = useCallback(() => {
    setReleased(true);
    const batch = Array.from({ length: 16 }, () => {
      const id = ++idc.current;
      const lantern = Math.random() < 0.4;
      const dur = 8 + Math.random() * 6;
      return {
        id,
        lantern,
        left: 8 + Math.random() * 84,
        size: lantern ? 16 + Math.random() * 14 : 14 + Math.random() * 18,
        drift: `${(Math.random() - 0.5) * 160}px`,
        dur,
        delay: Math.random() * 1.2,
        hue: ["#f4a6b8", "#e78fa3", "#f0d8bd", "#ffffff"][Math.floor(Math.random() * 4)],
      };
    });
    setWishes((w) => [...w, ...batch]);
    const maxLife = 15500;
    const ids = batch.map((b) => b.id);
    setTimeout(() => setWishes((w) => w.filter((p) => !ids.includes(p.id))), maxLife);
  }, []);

  // a handful of stars, deterministic positions
  const stars = Array.from({ length: 34 }, (_, i) => ({
    left: (i * 61) % 100,
    top: (i * 37) % 70,
    size: 1 + (i % 3),
    dur: 2 + (i % 5) * 0.6,
    delay: (i % 7) * 0.4,
  }));

  return (
    <section className="vignette relative z-10 flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-28 text-center">
      {/* deeper night gradient just for this section */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-plum-950/40 to-black/70" />

      {/* stars */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-cream"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
            }}
          />
        ))}
        {/* occasional shooting stars */}
        {[
          { top: "8%", left: "6%", dur: 11, delay: 2 },
          { top: "18%", left: "24%", dur: 14, delay: 7 },
          { top: "12%", left: "48%", dur: 17, delay: 12 },
        ].map((s, i) => (
          <span
            key={`shoot-${i}`}
            className="absolute h-[2px] w-24 rounded-full"
            style={{
              top: s.top,
              left: s.left,
              background: "linear-gradient(90deg, transparent, #fff, rgba(244,166,184,0.6))",
              boxShadow: "0 0 8px rgba(255,255,255,0.7)",
              animation: `shootStar ${s.dur}s ease-in ${s.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* rising wishes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {wishes.map((w) => (
          <div
            key={w.id}
            className="absolute bottom-[-6vh]"
            style={{
              left: `${w.left}%`,
              "--drift": w.drift,
              animation: `lanternRise ${w.dur}s cubic-bezier(0.4,0,0.5,1) ${w.delay}s forwards`,
            }}
          >
            {w.lantern ? (
              <div
                style={{
                  width: w.size,
                  height: w.size * 1.3,
                  borderRadius: "45% 45% 50% 50%",
                  background: `radial-gradient(circle at 50% 70%, #ffdca8, ${w.hue})`,
                  boxShadow: `0 0 18px 4px ${w.hue}aa, 0 0 40px 8px rgba(255,200,120,0.35)`,
                  animation: "flicker 1.6s ease-in-out infinite",
                }}
              />
            ) : (
              <svg width={w.size} height={w.size} viewBox="0 0 32 29">
                <path
                  d="M16 28C16 28 2 19.5 2 9.8 2 5 5.6 2 9.4 2c2.7 0 5 1.6 6.6 4 1.6-2.4 3.9-4 6.6-4C26.4 2 30 5 30 9.8 30 19.5 16 28 16 28z"
                  fill={w.hue}
                  style={{ filter: `drop-shadow(0 0 8px ${w.hue})` }}
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-xl">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-cream/50">
            {closing.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="shimmer-text font-display text-5xl font-semibold sm:text-7xl">
            {closing.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 font-hand text-2xl text-rose-soft sm:text-3xl">
            {closing.sub}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-cream/70">
            {closing.note}
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <motion.button
            type="button"
            onClick={release}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="group relative mt-12 inline-flex items-center gap-3 rounded-full border border-rose/40 bg-plum-800/50 px-8 py-4 text-sm uppercase tracking-[0.25em] text-cream backdrop-blur-md transition-colors hover:border-rose"
            style={{ boxShadow: "0 0 40px -10px rgba(231,143,163,0.6)" }}
          >
            <span
              className="text-rose-soft"
              style={{ animation: "heartbeat 2.2s ease-in-out infinite" }}
            >
              ❤
            </span>
            {released ? closing.buttonDone : closing.button}
          </motion.button>
        </Reveal>

        {released && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
            className="mt-8 font-hand text-xl text-gold-soft/80"
          >
            release as many as your heart needs.
          </motion.p>
        )}
      </div>
    </section>
  );
}
