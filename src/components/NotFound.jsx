import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from './icons.jsx';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <p>
        Oops! A monster seems to have eaten this page. Or maybe you fell down
        the wrong wormhole?!
      </p>
      <Link to="/" className="home-link">
        <ArrowLeft className="notfound-icon" />
        Back to the entrance
      </Link>
    </div>
  );
}
