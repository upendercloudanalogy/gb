"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const EASE = [0.22, 1, 0.36, 1];

export default function Letter({ letter }) {
  return (
    <section className="relative z-10 mx-auto max-w-2xl px-6 pb-28">
      <Reveal>
        <motion.div
          whileHover={{ rotate: 0 }}
          initial={{ rotate: -1.2 }}
          className="relative overflow-hidden rounded-2xl border border-cream/10 p-8 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] sm:p-12"
          style={{
            background:
              "linear-gradient(180deg, rgba(247,236,230,0.97), rgba(240,224,214,0.95))",
          }}
        >
          {/* faint ruled warmth */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
            style={{
              background:
                "radial-gradient(60% 40% at 20% 0%, rgba(231,143,163,0.18), transparent 60%), radial-gradient(50% 40% at 100% 100%, rgba(226,176,122,0.18), transparent 60%)",
            }}
          />
          <div className="relative">
            <h2 className="font-hand text-3xl text-rose-deep sm:text-4xl">
              {letter.heading}
            </h2>
            <div className="my-6 h-px w-full bg-plum-900/10" />

            <div className="space-y-5">
              {letter.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.85, delay: i * 0.15, ease: EASE }}
                  className="text-[17px] leading-relaxed text-plum-900/85"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <Reveal delay={0.2}>
              <p className="mt-9 font-body text-sm text-plum-900/60">
                {letter.signoff}
              </p>
              <p className="mt-1 font-hand text-3xl text-rose-deep">a stranger, for two days</p>
            </Reveal>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}
