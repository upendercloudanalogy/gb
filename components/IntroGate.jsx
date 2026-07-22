"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// A soft "gift-opening" ritual: the site sits behind a curtain until she
// taps to open it, then the curtain blooms away.
// Visiting with "?open=1" skips straight past the gate.
export default function IntroGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).has("open")) setOpen(true);
  }, []);

  return (
    <AnimatePresence>
      {!open && (
        <motion.button
          type="button"
          onClick={() => {
            // dispatched inside the click gesture so the music-box may start
            window.dispatchEvent(new Event("gift-open"));
            setOpen(true);
          }}
          aria-label="Open"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.15, filter: "blur(14px)" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] flex cursor-pointer flex-col items-center justify-center gap-8 bg-plum-950/95 backdrop-blur-md"
          style={{
            backgroundImage:
              "radial-gradient(60vw 60vw at 50% 40%, rgba(201,100,127,0.22), transparent 60%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="font-hand text-2xl text-rose-soft/90"
          >
            a little something for you
          </motion.div>

          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ animation: "heartbeat 2.4s ease-in-out infinite" }}
          >
            <svg viewBox="0 0 32 29" width="76" height="70" aria-hidden="true">
              <defs>
                <linearGradient id="gateHeart" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f4a6b8" />
                  <stop offset="100%" stopColor="#c9647f" />
                </linearGradient>
              </defs>
              <path
                d="M16 28C16 28 2 19.5 2 9.8 2 5 5.6 2 9.4 2c2.7 0 5 1.6 6.6 4 1.6-2.4 3.9-4 6.6-4C26.4 2 30 5 30 9.8 30 19.5 16 28 16 28z"
                fill="url(#gateHeart)"
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-display text-3xl tracking-wide text-cream sm:text-4xl">
              Tap to open
            </span>
            <span className="text-sm uppercase tracking-[0.35em] text-cream/45">
              khol ke dekho
            </span>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
