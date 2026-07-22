"use client";

import { useRef } from "react";
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
  // caption slides in from the outer edge
  const textX = useTransform(scrollYProgress, [0, 0.35], [flip ? 40 : -40, 0]);

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
        className="w-full md:w-[52%]"
      >
        <div className="photo-frame aspect-[3/4] w-full">
          <motion.div
            style={{ scale: imgScale, transformOrigin: "top center" }}
            className="absolute inset-0"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-cover"
              style={{ objectPosition: photo.objectPosition || "center" }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* words */}
      <motion.div style={{ x: textX }} className="w-full md:w-[48%]">
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
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
            className={`my-6 h-px w-24 bg-gradient-to-r from-rose to-gold ${
              flip ? "md:ml-auto" : ""
            } mx-auto md:mx-0`}
          />

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
