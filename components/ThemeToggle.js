"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// Same colors as the bar's gradient background, so the picked color
// always matches wherever you click along it.
const STOPS = [
  { pos: 0, rgb: [245, 185, 140] },
  { pos: 0.22, rgb: [242, 217, 138] },
  { pos: 0.42, rgb: [183, 226, 168] },
  { pos: 0.6, rgb: [143, 214, 201] },
  { pos: 0.78, rgb: [143, 192, 234] },
  { pos: 1, rgb: [198, 163, 224] },
];

function rgbAt(t) {
  for (let i = 0; i < STOPS.length - 1; i++) {
    const a = STOPS[i];
    const b = STOPS[i + 1];
    if (t >= a.pos && t <= b.pos) {
      const span = b.pos - a.pos || 1;
      const local = (t - a.pos) / span;
      return [
        Math.round(a.rgb[0] + (b.rgb[0] - a.rgb[0]) * local),
        Math.round(a.rgb[1] + (b.rgb[1] - a.rgb[1]) * local),
        Math.round(a.rgb[2] + (b.rgb[2] - a.rgb[2]) * local),
      ];
    }
  }
  return STOPS[STOPS.length - 1].rgb;
}

function toRgbString(rgb) {
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

function scaled(rgb, factor) {
  return rgb.map((c) => Math.round(c * factor));
}

const DEFAULT_T = 0.6; // lands near the original teal accent

export default function ThemeToggle() {
  const [t, setT] = useState(DEFAULT_T);
  const barRef = useRef(null);
  const dragging = useRef(false);

  const applyColor = useCallback((value) => {
    const rgb = rgbAt(value);
    const root = document.documentElement.style;

    // Full-brightness picked color for highlights (buttons, links, borders)
    root.setProperty("--color-accent", toRgbString(rgb));
    root.setProperty("--color-accent-dim", toRgbString(rgb));

    // Same hue, heavily darkened, used for the page background — this is
    // what actually shifts as you move the slider, while staying dark
    // enough that light text stays readable.
    root.setProperty("--color-bg", toRgbString(scaled(rgb, 0.08)));
    root.setProperty("--color-bg-raised", toRgbString(scaled(rgb, 0.14)));
    root.setProperty("--color-line", toRgbString(scaled(rgb, 0.3)));
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem("accentPos");
    const initial = stored !== null ? parseFloat(stored) : DEFAULT_T;
    setT(initial);
    applyColor(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function updateFromClientX(clientX) {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const value = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    setT(value);
    applyColor(value);
    window.localStorage.setItem("accentPos", String(value));
  }

  function handlePointerDown(e) {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  }

  function handlePointerMove(e) {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  }

  function handlePointerUp() {
    dragging.current = false;
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowLeft") {
      const value = Math.max(0, t - 0.05);
      setT(value);
      applyColor(value);
      window.localStorage.setItem("accentPos", String(value));
    } else if (e.key === "ArrowRight") {
      const value = Math.min(1, t + 0.05);
      setT(value);
      applyColor(value);
      window.localStorage.setItem("accentPos", String(value));
    }
  }

  return (
    <div
      ref={barRef}
      className="theme-toggle"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onKeyDown={handleKeyDown}
      role="slider"
      aria-label="Pick a background color theme"
      aria-valuemin={0}
      aria-valuemax={1}
      aria-valuenow={Math.round(t * 100) / 100}
      tabIndex={0}
    >
      <span className="knob" style={{ left: `calc(${t * 100}% - 3px)` }} />
    </div>
  );
}
