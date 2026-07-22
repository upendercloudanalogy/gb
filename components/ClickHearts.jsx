"use client";

import { useEffect, useState } from "react";

// Little hearts that bloom wherever she taps or clicks. Pure delight.
const COLORS = ["#f4a6b8", "#e78fa3", "#f0d8bd", "#c9647f", "#ffffff"];

export default function ClickHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    let idc = 0;
    const spawn = (x, y) => {
      const id = ++idc;
      const size = 14 + Math.random() * 16;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const drift = (Math.random() - 0.5) * 40;
      setHearts((h) => [...h, { id, x, y, size, color, drift }]);
      setTimeout(() => setHearts((h) => h.filter((p) => p.id !== id)), 1150);
    };

    const onClick = (e) => {
      // ignore interaction with the media controls / buttons
      const t = e.target;
      if (t && t.closest && t.closest("video, button, a, input")) return;
      spawn(e.clientX, e.clientY);
    };

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[45] overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="pop-heart"
          style={{ left: h.x, top: h.y, "--drift": `${h.drift}px` }}
        >
          <svg width={h.size} height={h.size} viewBox="0 0 32 29" aria-hidden="true">
            <path
              d="M16 28C16 28 2 19.5 2 9.8 2 5 5.6 2 9.4 2c2.7 0 5 1.6 6.6 4 1.6-2.4 3.9-4 6.6-4C26.4 2 30 5 30 9.8 30 19.5 16 28 16 28z"
              fill={h.color}
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
