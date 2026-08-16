import React, { useEffect } from 'react';

// Tracks the pointer and exposes its position as CSS custom properties
// (--mx / --my) consumed by the .cursor-glow layer.
export default function CursorGlow() {
  useEffect(() => {
    const root = document.documentElement;
    const onMove = (e) => {
      root.style.setProperty('--mx', `${e.clientX}px`);
      root.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return <div className="cursor-glow" aria-hidden="true" />;
}
