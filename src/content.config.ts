import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// All dungeon rooms live as Markdown under /content (repo root), organized
// by language / dungeon / floor / room. Each entry id is its path from
// /content without the .md extension (e.g. english/the-hollow-torch/0/0).
export const dungeons = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: new URL('../content', import.meta.url),
  }),
});

export const collections = { dungeons };
