"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function PhotoBlock({ photo, index }) {
  const ref = useRef(null);
  const flip = index % 2 === 1; // alternate sides
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // gentle parallax: a slow zoom anchored to the TOP edge, so faces never get
  // pushed out of frame (the crop only ever grows downward).
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.13]);
  // caption slides in from the outer edge — but ONLY on desktop, where there's
  // room. On mobile a horizontal shift would push full-width text off-screen.
  const textX = useTransform(scrollYProgress, [0, 0.35], [flip ? 40 : -40, 0]);
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={ref}
      className={`relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-16 md:gap-14 md:py-20 ${
        flip ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.05, ease: EASE }}
        whileHover={{ y: -6 }}
        className="w-full md:w-[52%]"
      >
        <div
          className="photo-frame group aspect-[3/4] w-full transition-shadow duration-500"
          style={{ animation: `floatBob ${6.5 + (index % 3)}s ease-in-out ${index * 0.4}s infinite` }}
        >
          <motion.div
            style={{ scale: imgScale, transformOrigin: "top center" }}
            className="absolute inset-0"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-cover transition duration-[900ms] ease-out group-hover:scale-105 group-hover:brightness-110 group-hover:saturate-[1.08]"
              style={{ objectPosition: photo.objectPosition || "center" }}
            />
          </motion.div>
          {/* soft light bloom that warms on hover */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            style={{ boxShadow: "inset 0 0 90px rgba(231,143,163,0.35)" }} />
        </div>
      </motion.div>

      {/* words */}
      <motion.div style={{ x: desktop ? textX : 0 }} className="w-full md:w-[48%]">
        <div className={`${flip ? "md:text-right" : "md:text-left"} text-center`}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-display text-5xl font-light text-rose-deep/50"
          >
            {num}
          </motion.span>

          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="mt-2 font-display text-3xl italic leading-tight text-cream sm:text-4xl"
          >
            “{photo.caption}”
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
            className={`my-6 flex items-center gap-2 ${
              flip ? "justify-center md:justify-end" : "justify-center md:justify-start"
            }`}
          >
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-rose" />
            <span
              className="text-[11px] text-rose"
              style={{ animation: "heartbeat 2.8s ease-in-out infinite" }}
            >
              ❤
            </span>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-gold" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            className="text-base leading-relaxed text-cream/72 sm:text-lg"
          >
            {photo.note}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
