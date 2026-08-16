import React, { useRef, useEffect } from 'react';
import { CompassSeal } from '../icons.jsx';

// The masthead compass seal rotates to point at the cursor.
export default function Header() {
  const sealRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const onMove = (e) => {
      const el = sealRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const angle =
        (Math.atan2(e.clientY - cy, e.clientX - cx) * 180) / Math.PI + 90;
      el.style.transform = `rotate(${angle}deg)`;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <header className="masthead">
      <a href="/" className="masthead-brand">
        <span className="seal-wrap" ref={sealRef}>
          <CompassSeal className="seal" />
        </span>
        <span className="masthead-title">Markdown Dungeon</span>
      </a>
    </header>
  );
}
