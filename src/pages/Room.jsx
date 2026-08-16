import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { loadRoomMarkdown, resolveRoomLink } from '../lib/content';
import { renderMarkdown } from '../lib/markdown';
import Header from '../components/Header.jsx';
import RoomView from '../components/RoomView.jsx';
import NotFound from '../components/NotFound.jsx';

export default function Room() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useState({ status: 'loading', html: null });

  useEffect(() => {
    let active = true;
    setState({ status: 'loading', html: null });

    loadRoomMarkdown(pathname).then((raw) => {
      if (!active) return;
      if (raw == null) {
        setState({ status: 'missing', html: null });
        return;
      }
      setState({ status: 'ready', html: renderMarkdown(raw) });
    });

    return () => {
      active = false;
    };
  }, [pathname]);

  const handleClick = (e) => {
    const anchor = e.target.closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href') || '';
    if (!href.includes('.md')) return;
    e.preventDefault();
    const target = resolveRoomLink(href, pathname);
    if (target) navigate(target);
  };

  const crumbs = pathname.split('/').filter(Boolean);

  return (
    <>
      <Header />
      <main className="room-shell" onClick={handleClick}>
        <nav className="coords" aria-label="location">
          {crumbs.map((c, i) => (
            <span key={i} className="coords-seg">
              <span className="coords-sep">/</span>
              {c}
            </span>
          ))}
        </nav>

        {state.status === 'loading' && (
          <p className="muted">Descending into the dungeon…</p>
        )}
        {state.status === 'missing' && <NotFound />}
        {state.status === 'ready' && (
          <RoomView key={pathname} html={state.html} route={pathname} />
        )}
      </main>
    </>
  );
}
