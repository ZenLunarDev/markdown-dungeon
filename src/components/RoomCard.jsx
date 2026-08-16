import React from 'react';
import { Link } from 'react-router-dom';
import { dungeonImageUrl } from '../lib/dungeons';
import { StarSeal, ArrowRight } from './icons.jsx';

export default function RoomCard({ card, roman }) {
  const { info, route, excerpt } = card;
  return (
    <Link
      to={route}
      className="placard"
      style={{ animationDelay: `${(card.index || 1) * 70}ms` }}
    >
      <div className="placard-frame">
        <span className="placard-num">{roman}</span>
        <span className="placard-lang">{info.language}</span>
        <div className="placard-plate">
          <img src={dungeonImageUrl(info)} alt={info.display} loading="lazy" />
          <span className="placard-seal" aria-hidden="true">
            <StarSeal className="placard-seal-icon" />
          </span>
        </div>
        <h3 className="placard-title">{info.display}</h3>
        <p className="placard-excerpt">{excerpt}</p>
        <span className="placard-enter">
          Enter the room
          <ArrowRight className="placard-enter-icon" />
        </span>
      </div>
    </Link>
  );
}
