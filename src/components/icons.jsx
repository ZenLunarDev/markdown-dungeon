import React from 'react';

const line = {
  width: '1em',
  height: '1em',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export function CompassSeal(props) {
  return (
    <svg
      viewBox="0 0 48 48"
      width="36"
      height="36"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="15.5" stroke="currentColor" strokeWidth="0.7" />
      <path
        d="M24 3 L27.2 20.8 L45 24 L27.2 27.2 L24 45 L20.8 27.2 L3 24 L20.8 20.8 Z"
        fill="currentColor"
        opacity="0.92"
      />
      <circle cx="24" cy="24" r="3.1" fill="var(--bg)" />
    </svg>
  );
}

export function BookIcon(props) {
  return (
    <svg {...line} {...props}>
      <path d="M5 4h6a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H5z" />
      <path d="M19 4h-6a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h6z" />
    </svg>
  );
}

export function HomeIcon(props) {
  return (
    <svg {...line} {...props}>
      <path d="M4 11l8-6 8 6" />
      <path d="M6 10v9h12v-9" />
    </svg>
  );
}

export function DiamondOrnament(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3l9 9-9 9-9-9z" />
    </svg>
  );
}

export function StarSeal(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" />
    </svg>
  );
}

export function ArrowRight(props) {
  return (
    <svg {...line} {...props}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowLeft(props) {
  return (
    <svg {...line} {...props}>
      <path d="M20 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}
