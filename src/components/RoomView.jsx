import React, { useEffect, useRef } from 'react';
import { resolveRoomLink } from '../lib/content';

// Renders a room's HTML and rewrites any relative `.md` links into absolute
// SPA routes so they work with client-side navigation.
export default function RoomView({ html, route }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    root.querySelectorAll('a').forEach((anchor) => {
      const href = anchor.getAttribute('href') || '';
      if (href.includes('.md')) {
        const target = resolveRoomLink(href, route);
        if (target) {
          anchor.setAttribute('href', target);
          anchor.setAttribute('data-room-link', 'true');
        }
      }
    });
  }, [html, route]);

  return (
    <article
      className="room"
      ref={ref}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
