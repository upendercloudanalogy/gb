"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Reveals text one word at a time as it scrolls into view — cinematic and soft.
export default function WordReveal({
  text,
  className,
  as = "p",
  delay = 0,
  stagger = 0.07,
  once = true,
}) {
  const Tag = motion[as] || motion.p;
  const words = text.split(" ");
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-60px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 14, filter: "blur(5px)" },
            show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: EASE } },
          }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </Tag>
  );
}
