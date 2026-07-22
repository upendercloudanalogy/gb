"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// A small reusable "fade + rise into view" wrapper used all over the site.
export default function Reveal({
  children,
  delay = 0,
  y = 30,
  duration = 0.9,
  once = true,
  className,
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}
