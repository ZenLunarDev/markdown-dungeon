import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: false,
});

// Render a raw Markdown string into an HTML string.
export function renderMarkdown(raw) {
  return marked.parse(raw || '');
}

// Build a short, link-free excerpt from a room's Markdown for the home cards.
export function excerptFromMarkdown(raw, maxLength = 120) {
  const text = (raw || '')
    .replace(/```[\s\S]*?```/g, ' ') // drop code blocks
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // drop images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // keep link text only
    .replace(/[#>*_`~-]/g, ' ') // strip markdown punctuation
    .replace(/\s+/g, ' ')
    .trim();

  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}
