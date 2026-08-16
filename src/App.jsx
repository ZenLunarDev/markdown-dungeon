import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Room from './pages/Room.jsx';
import NotFound from './components/NotFound.jsx';

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    const onMove = (e) => {
      root.style.setProperty('--mx', `${e.clientX}px`);
      root.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <>
      <div className="cursor-glow" aria-hidden="true" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:lang/:dungeon/*" element={<Room />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
