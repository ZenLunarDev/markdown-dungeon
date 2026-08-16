import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listBeginJourneys, loadRoomMarkdown } from '../lib/content';
import { excerptFromMarkdown } from '../lib/markdown';
import { findDungeonInfo, dungeonImageUrl } from '../lib/dungeons';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import RoomCard from '../components/RoomCard.jsx';
import { DiamondOrnament } from '../components/icons.jsx';
import '../styles/home.css';

function toRoman(num) {
  const map = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];
  let out = '';
  for (const [value, sym] of map) {
    while (num >= value) {
      out += sym;
      num -= value;
    }
  }
  return out;
}

export default function Home() {
  const [cards, setCards] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    const journeys = listBeginJourneys();

    Promise.all(
      journeys.map(async (j) => {
        const segments = j.key.split('/').filter(Boolean);
        const language = segments[0];
        const dungeonName = segments[1];
        const raw = await loadRoomMarkdown(j.route);
        const info = findDungeonInfo(language, dungeonName);
        return { route: j.route, info, excerpt: excerptFromMarkdown(raw) };
      })
    ).then((result) => {
      if (!active) return;
      const withInfo = result.filter((c) => c.info);
      withInfo.forEach((c, i) => {
        c.index = i + 1;
      });
      setCards(withInfo);
      setLoaded(true);
    });

    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="codex-head">
          <p className="codex-kicker">A codex of rooms, written in Markdown</p>
          <h1 className="codex-title">Markdown Dungeon</h1>
          <div className="rule-ornament" aria-hidden="true">
            <DiamondOrnament className="ornament-diamond" />
          </div>
          <p className="codex-sub">
            Choose a door. Each room is a page; each choice, a path to the next.
            Wander the tomes below, then carve your own wing of the labyrinth.
          </p>
        </section>

        {!loaded && <p className="muted">Unsealing the tomes…</p>}

        <section className="home-grid">
          <div className="placard-grid">
            {cards.map((card) => (
              <RoomCard
                key={card.route}
                card={card}
                roman={toRoman(card.index)}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
