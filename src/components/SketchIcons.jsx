import React from 'react';

/*
 * Hand-drawn style inline SVG icons.
 * Intentionally wobbly strokes + rounded caps to match the soft, friendly,
 * boutique aesthetic (no stock lucide icons in the narrative sections).
 */
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function Sketch({ children, size = 44, style, className, ...rest }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      style={style}
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function SketchPaw({ ...p }) {
  return (
    <Sketch {...p}>
      <g {...stroke}>
        <path d="M10.5 19c-1.4-3.4 3.2-6.4 5.4-3.2 1.9 2.8-1.2 5.9-3.7 4.8-1.1-.5-1.5-1.2-1.7-1.6z" />
        <path d="M20.5 13.5c-1-3.5 4.3-5.6 5.7-1.7 1.1 3.1-3.2 6.1-5.2 3.5-.8-1-1.3-1.9-1.5-2.6z" />
        <path d="M31 14c-.5-3.4 4.9-4.2 5.6-.6.6 3.2-3.6 5.6-5.2 2.9-.5-.8-.5-1.9-.4-2.3z" />
        <path d="M24 35.5c-6.2-.1-11.3-4.3-10.8-8.5.5-4.2 5.4-6.6 10.8-6.6s10.3 2.4 10.8 6.6c.5 4.2-4.6 8.4-10.8 8.5z" />
        <path d="M21.5 25.5c.8.9 2.2 1.2 3.4.7 1.6-.7 2.2 1 .8 1.8-1.5.9-3.5 1-4.6-.4-.8-1 .1-2.4 1.6-1.5z" />
      </g>
    </Sketch>
  );
}

export function SketchHeart({ ...p }) {
  return (
    <Sketch {...p}>
      <g {...stroke}>
        <path d="M24 39.5C12.5 31.5 7.5 21.5 13.5 15.8c4.8-4.4 9.6-1.4 10.5 2.2.9-3.6 5.7-6.6 10.5-2.2C40.5 21.5 35.5 31.5 24 39.5Z" />
        <path d="M16.5 20c1.2-2 3.4-2.6 5-1.2" />
      </g>
    </Sketch>
  );
}

export function SketchStar({ ...p }) {
  return (
    <Sketch {...p}>
      <g {...stroke}>
        <path d="M24 7.5c1.2 10.2 1.2 10.2 12.5 16.5C37 27 37 27 24.5 30.5 24 31 24 31 23.5 40.5c-.6-9.5-.6-9.5-10-15.5-2.5-1.6-2.5-1.6 10-6.5C24 17 24 17 24 7.5Z" />
        <path d="M35.5 9.5c.5 2.7.5 2.7 3 4.5-2.5 1.3-2.5 1.3-3 4.5-.5-3.2-.5-3.2-3-4.5 2.5-1.8 2.5-1.8 3-4.5z" />
      </g>
    </Sketch>
  );
}

export function SketchCheck({ ...p }) {
  return (
    <Sketch {...p}>
      <g {...stroke}>
        <path d="M10.5 27c4 3.2 7.2 6.4 10 10 5.8-8.6 11.4-17.4 17-24.5" />
      </g>
    </Sketch>
  );
}

export function SketchHome({ ...p }) {
  return (
    <Sketch {...p}>
      <g {...stroke}>
        <path d="M8.5 25.5c5-4.7 9.8-9.5 14.5-14.5 5 5 9.7 9.8 14.5 14.5" />
        <path d="M13 21.5c.3 6.4.3 12.8 0 18.5 7.2.3 14.8.3 22 0-.4-5.7-.4-11.8 0-17.5" />
        <path d="M20 39.5v-8.5c3-1.6 5.5-1.6 8 0v8.5" />
      </g>
    </Sketch>
  );
}

export function SketchVan({ ...p }) {
  return (
    <Sketch {...p}>
      <g {...stroke}>
        <path d="M6.5 30.5C5.8 22.5 8 17 13 16.8c6.4-.2 13.4-.2 18 0 3.6.2 5.4 2.2 7.4 4.8 2 2.6 3 5 2.6 7.4-.4 2.4-2.6 2.6-5 2.6-8.7 0-17.4.2-26 0-2.4-.2-3.4-.6-3.5-.6z" />
        <path d="M13 21.5c7-.4 12.5-.4 18 0" />
        <path d="M27.5 17c.3 1.5.3 3 0 4.5" />
        <circle cx="14.5" cy="33" r="3.6" />
        <circle cx="33.5" cy="33" r="3.6" />
      </g>
    </Sketch>
  );
}

export function SketchWaves({ ...p }) {
  return (
    <Sketch {...p}>
      <g {...stroke}>
        <path d="M9 16.5c3.4-4 7-4 10.4 0 3.4 4 6.6 4 10 0 3.4-4 7-4 9.6 0" />
        <path d="M9 25c3.4-4 7-4 10.4 0 3.4 4 6.6 4 10 0 3.4-4 7-4 9.6 0" />
        <path d="M12 33.5c3-3.5 6-3.5 9 0 3 3.5 6 3.5 9 0" />
      </g>
    </Sketch>
  );
}

export function SketchLeaf({ ...p }) {
  return (
    <Sketch {...p}>
      <g {...stroke}>
        <path d="M11 37c-1-15 10.5-26.5 26.5-26.5C37.5 25.5 27 37.5 11 37Z" />
        <path d="M14.5 33.5c6-7.5 12-14.5 18.5-20" />
      </g>
    </Sketch>
  );
}

export function SketchDroplet({ ...p }) {
  return (
    <Sketch {...p}>
      <g {...stroke}>
        <path d="M24 7.5c4.8 6.8 8.5 12.4 8.5 18a8.5 8.5 0 0 1-17 0c0-5.6 3.7-11.2 8.5-18Z" />
        <path d="M20 25.5c-.5 2 .5 4 2.5 4.5" />
      </g>
    </Sketch>
  );
}
