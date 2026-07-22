"use client";

import { motion } from "framer-motion";
import PhotoBlock from "./PhotoBlock";

function ChapterDivider({ label }) {
  return (
    <div className="relative z-10 flex items-center justify-center gap-5 px-6 py-14">
      <span className="hairline max-w-[80px] flex-1" />
      <motion.span
        initial={{ opacity: 0, letterSpacing: "0.1em" }}
        whileInView={{ opacity: 1, letterSpacing: "0.35em" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="whitespace-nowrap text-xs uppercase tracking-[0.35em] text-gold-soft/70"
      >
        {label}
      </motion.span>
      <span className="hairline max-w-[80px] flex-1" />
    </div>
  );
}

export default function Journey({ photos }) {
  let lastChapter = null;

  return (
    <section className="relative z-10">
      {photos.map((photo, i) => {
        const showChapter = photo.chapter && photo.chapter !== lastChapter;
        lastChapter = photo.chapter;
        return (
          <div key={photo.id}>
            {showChapter && <ChapterDivider label={photo.chapter} />}
            <PhotoBlock photo={photo} index={i} />
          </div>
        );
      })}
    </section>
  );
}
