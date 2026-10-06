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

function colorAt(t) {
  for (let i = 0; i < STOPS.length - 1; i++) {
    const a = STOPS[i];
    const b = STOPS[i + 1];
    if (t >= a.pos && t <= b.pos) {
      const span = b.pos - a.pos || 1;
      const local = (t - a.pos) / span;
      const r = Math.round(a.rgb[0] + (b.rgb[0] - a.rgb[0]) * local);
      const g = Math.round(a.rgb[1] + (b.rgb[1] - a.rgb[1]) * local);
      const bch = Math.round(a.rgb[2] + (b.rgb[2] - a.rgb[2]) * local);
      return `rgb(${r}, ${g}, ${bch})`;
    }
  }
  const last = STOPS[STOPS.length - 1];
  return `rgb(${last.rgb[0]}, ${last.rgb[1]}, ${last.rgb[2]})`;
}

const DEFAULT_T = 0.6; // lands near the original teal accent

export default function ThemeToggle() {
  const [t, setT] = useState(DEFAULT_T);
  const barRef = useRef(null);
  const dragging = useRef(false);

  const applyColor = useCallback((value) => {
    const color = colorAt(value);
    document.documentElement.style.setProperty("--color-accent", color);
    document.documentElement.style.setProperty("--color-accent-dim", color);
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
      aria-label="Pick an accent color"
      aria-valuemin={0}
      aria-valuemax={1}
      aria-valuenow={Math.round(t * 100) / 100}
      tabIndex={0}
    >
      <span className="knob" style={{ left: `calc(${t * 100}% - 3px)` }} />
    </div>
  );
}
