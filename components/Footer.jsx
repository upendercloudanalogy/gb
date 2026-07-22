"use client";

import Reveal from "./Reveal";

export default function Footer({ text }) {
  return (
    <footer className="relative z-10 px-6 pb-16 pt-4 text-center">
      <Reveal>
        <div className="mx-auto mb-8 flex items-center justify-center gap-4">
          <span className="hairline w-20" />
          <span
            style={{ animation: "heartbeat 2.6s ease-in-out infinite" }}
            className="text-rose"
          >
            ❤
          </span>
          <span className="hairline w-20" />
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-cream/40">{text}</p>
      </Reveal>
    </footer>
  );
}
