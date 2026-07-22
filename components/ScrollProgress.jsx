"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// A slim rose-gold bar at the very top that fills as you move through the story.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left"
    >
      <div className="h-full w-full bg-gradient-to-r from-rose-soft via-gold-soft to-rose-deep" />
    </motion.div>
  );
}
