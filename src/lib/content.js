// Runtime content loader for the Markdown Dungeon.
//
// Every dungeon room is a Markdown file under /content. We use Vite's
// import.meta.glob to lazily register them (one network fetch per room, on
// demand) and expose helpers to resolve a room route to its raw Markdown and
// to turn relative `.md` links inside a room into SPA routes.

const rawModules = import.meta.glob('/content/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: false,
});

// Key: "/english/covid-19/0/0"  (no /content prefix, no .md, no trailing slash)
const routeLoaders = {};
for (const key of Object.keys(rawModules)) {
  const route = key
    .replace(/^\/content\//, '')
    .replace(/\.md$/, '')
    .replace(/\/+$/, '');
  routeLoaders[route] = rawModules[key];
}

// Normalize any incoming route/path into a loader key.
function toKey(route) {
  return route
    .replace(/^\/+/, '')
    .replace(/\.md$/, '')
    .replace(/\/+$/, '');
}

// All rooms whose path ends with /begin-journey -> the home page cards.
export function listBeginJourneys() {
  return Object.keys(routeLoaders)
    .filter((key) => key.endsWith('/begin-journey'))
    .map((key) => ({ key, route: `/${key}/` }));
}

// Load the raw Markdown for a room route. Returns null when no such room exists.
export async function loadRoomMarkdown(route) {
  const loader = routeLoaders[toKey(route)];
  if (!loader) return null;
  return loader();
}

// Resolve a relative `.md` link found inside a room into an absolute SPA route.
// `currentRoute` is the route of the room that contains the link.
export function resolveRoomLink(href, currentRoute) {
  if (!href || !href.includes('.md')) return null;

  const base = currentRoute.endsWith('/') ? currentRoute : `${currentRoute}/`;
  const segments = base.split('/').filter(Boolean);
  segments.pop(); // drop the current room name -> directory of the room
  const baseDir = `/${segments.join('/')}/`;

  const resolved = new URL(href, `http://localhost${baseDir}`).pathname;
  return `${resolved.replace(/\.md$/, '')}/`;
}
