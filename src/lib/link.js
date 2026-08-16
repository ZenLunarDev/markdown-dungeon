// Resolve a relative `.md` link found inside a room into an absolute
// SPA route. `currentRoute` is the route of the room that contains the link.
export function resolveRoomLink(href, currentRoute) {
  if (!href || !href.includes('.md')) return null;

  const base = currentRoute.endsWith('/') ? currentRoute : `${currentRoute}/`;
  const segments = base.split('/').filter(Boolean);
  segments.pop(); // drop the current room name -> directory of the room
  const baseDir = `/${segments.join('/')}/`;

  const resolved = new URL(href, `http://localhost${baseDir}`).pathname;
  return `${resolved.replace(/\.md$/, '')}/`;
}
