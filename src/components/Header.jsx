import React from 'react';
import { Link } from 'react-router-dom';
import { CompassSeal } from './icons.jsx';

export default function Header() {
  return (
    <header className="masthead">
      <Link to="/" className="masthead-brand">
        <CompassSeal className="seal" />
        <span className="masthead-title">Markdown Dungeon</span>
      </Link>
      <span className="masthead-tag">a labyrinth in markdown</span>
    </header>
  );
}
