"use client";

import { useEffect, useState } from "react";

// A gentle, always-on ambient layer: rose petals drift down, tiny hearts
// rise up, and a few sparkles twinkle. Generated on the client only so the
// randomness never causes a hydration mismatch.

function Petal({ hue }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "150% 0 150% 0",
        background: `radial-gradient(circle at 30% 30%, ${hue}, rgba(201,100,127,0.05))`,
        boxShadow: "0 0 8px rgba(231,143,163,0.35)",
      }}
    />
  );
}

function Heart({ color }) {
  return (
    <svg viewBox="0 0 32 29" width="100%" height="100%" aria-hidden="true">
      <path
        d="M16 28C16 28 2 19.5 2 9.8 2 5 5.6 2 9.4 2c2.7 0 5 1.6 6.6 4 1.6-2.4 3.9-4 6.6-4C26.4 2 30 5 30 9.8 30 19.5 16 28 16 28z"
        fill={color}
        opacity="0.85"
      />
    </svg>
  );
}

export default function Petals({ count = 26 }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const hues = [
      "rgba(244,166,184,0.9)",
      "rgba(231,143,163,0.85)",
      "rgba(240,216,189,0.85)",
      "rgba(201,100,127,0.8)",
    ];
    const rnd = (a, b) => a + Math.random() * (b - a);

    const made = Array.from({ length: count }, (_, i) => {
      const roll = Math.random();
      const kind = roll < 0.62 ? "petal" : roll < 0.86 ? "heart" : "spark";
      const size =
        kind === "spark" ? rnd(3, 6) : kind === "heart" ? rnd(10, 18) : rnd(9, 20);
      return {
        id: i,
        kind,
        left: rnd(0, 100),
        size,
        hue: hues[Math.floor(Math.random() * hues.length)],
        fallDur: rnd(11, 24),
        swayDur: rnd(4, 8),
        riseDur: rnd(9, 16),
        delay: -rnd(0, 22),
        opacity: rnd(0.35, 0.85),
      };
    });
    setItems(made);
  }, [count]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {items.map((p) => {
        if (p.kind === "spark") {
          return (
            <span
              key={p.id}
              style={{
                position: "absolute",
                left: `${p.left}%`,
                top: `${(p.id * 37) % 100}%`,
                width: p.size,
                height: p.size,
                borderRadius: "50%",
                background: "var(--gold-soft)",
                boxShadow: "0 0 8px var(--gold)",
                animation: `twinkle ${p.swayDur + 2}s ease-in-out ${p.delay}s infinite`,
              }}
            />
          );
        }

        if (p.kind === "heart") {
          return (
            <div
              key={p.id}
              style={{
                position: "absolute",
                left: `${p.left}%`,
                bottom: "-8vh",
                width: p.size,
                height: p.size,
                opacity: p.opacity,
                animation: `riseUp ${p.riseDur}s linear ${p.delay}s infinite`,
              }}
            >
              <div style={{ animation: `sway ${p.swayDur}s ease-in-out infinite` }}>
                <Heart color={p.hue} />
              </div>
            </div>
          );
        }

        // petal — falls down, sways as it goes
        return (
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: `${p.left}%`,
              top: 0,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animation: `fallDown ${p.fallDur}s linear ${p.delay}s infinite`,
            }}
          >
            <div style={{ animation: `sway ${p.swayDur}s ease-in-out infinite` }}>
              <Petal hue={p.hue} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
