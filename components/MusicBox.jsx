"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Plays the soundtrack (public/media/song.mp3) softly on a loop. It starts when
// the gift is opened (a real user gesture, so autoplay is allowed) and can be
// muted any time. Volume fades in/out gently.

const TARGET_VOL = 0.6;
const SONG = "/media/song.mp3";

export default function MusicBox() {
  const [playing, setPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef(null);
  const fadeRef = useRef(null);

  const fadeTo = useCallback((target, done) => {
    const a = audioRef.current;
    if (!a) return;
    if (fadeRef.current) clearInterval(fadeRef.current);
    const step = () => {
      const diff = target - a.volume;
      if (Math.abs(diff) < 0.04) {
        a.volume = target;
        clearInterval(fadeRef.current);
        fadeRef.current = null;
        done && done();
        return;
      }
      a.volume = Math.min(1, Math.max(0, a.volume + diff * 0.12));
    };
    fadeRef.current = setInterval(step, 45);
  }, []);

  const start = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0;
    const p = a.play();
    if (p && p.catch) p.catch(() => {});
    setPlaying(true);
    fadeTo(TARGET_VOL);
  }, [fadeTo]);

  const stop = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    setPlaying(false);
    fadeTo(0, () => a.pause());
  }, [fadeTo]);

  useEffect(() => {
    setMounted(true);
    const onOpen = () => start();
    window.addEventListener("gift-open", onOpen);
    return () => {
      window.removeEventListener("gift-open", onOpen);
      if (fadeRef.current) clearInterval(fadeRef.current);
    };
  }, [start]);

  return (
    <>
      <audio ref={audioRef} src={SONG} loop preload="auto" playsInline />
      {mounted && (
        <button
          type="button"
          onClick={() => (playing ? stop() : start())}
          aria-label={playing ? "Mute music" : "Play music"}
          className="fixed bottom-4 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 bg-plum-800/60 text-rose-soft opacity-60 backdrop-blur-md transition-all duration-300 hover:bg-plum-700/80 hover:opacity-100 focus-visible:opacity-100"
          style={{ boxShadow: "0 8px 30px -8px rgba(0,0,0,0.6), 0 0 24px -8px rgba(231,143,163,0.5)" }}
        >
          {playing ? (
            <span className="flex items-end gap-[3px]" aria-hidden="true">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="w-[3px] rounded-full bg-rose-soft"
                  style={{
                    height: 7 + (i % 2) * 7,
                    animation: `floatBob ${0.7 + i * 0.18}s ease-in-out ${i * 0.1}s infinite`,
                  }}
                />
              ))}
            </span>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none">
              <path d="M9 18V5l10-2v13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="6.5" cy="18" r="2.6" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="16.5" cy="16" r="2.6" stroke="currentColor" strokeWidth="1.6" />
              <path d="M4 5l16-3" stroke="currentColor" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      )}
    </>
  );
}
