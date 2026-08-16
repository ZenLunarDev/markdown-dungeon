import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        {'Copyright © '}
        <a
          href="https://github.com/ZenLunarDev"
          target="_blank"
          rel="noreferrer"
        >
          Make Contributions
        </a>{' '}
        {new Date().getFullYear()}
        {'.'}
      </p>
    </footer>
  );
}
