import dungeonInfo from '../data/dungeon-info.json';

const DEFAULT_IMAGE = 'dungeon.jpg';

// Find the display metadata for a dungeon in a given language.
export function findDungeonInfo(language, dungeonName) {
  return dungeonInfo.find(
    (d) => d.name === dungeonName && d.language === language
  );
}

// Resolve the cover image URL for a dungeon (falls back to the default).
export function dungeonImageUrl(info) {
  const file = info && info.image ? info.image : DEFAULT_IMAGE;
  return `/images/${file}`;
}
