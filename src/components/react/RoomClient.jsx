import React, { useEffect, useRef } from 'react';
import { renderMarkdown } from '../../lib/markdown.js';
import { resolveRoomLink } from '../../lib/link.js';

// Renders the room and rewrites relative `.md` links into SPA-style routes.
// Navigation itself is handled natively (Astro View Transitions make it
// feel client-side without a router).
export default function RoomClient({ raw, route }) {
  const ref = useRef(null);
  const html = renderMarkdown(raw);

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
    <article className="room" ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
