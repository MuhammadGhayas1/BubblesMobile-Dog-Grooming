import React from 'react';
import { Star, PawPrint } from 'lucide-react';

/*
 * Icon replacements for decorative text glyphs (star characters and bullets).
 * Everything here is a real SVG icon so ratings and separators inherit
 * currentColor, scale with font-size, and stay crisp on every screen.
 */

/** Renders `rating` filled star icons in place of a "5 stars" text glyph. */
export function StarRating({ rating = 5, max = 5, size = 14, className = '', style, gap = 2, ...rest }) {
  const filled = Math.max(0, Math.min(Number(rating) || 0, max));
  return (
    <span
      className={`star-rating ${className}`.trim()}
      style={{ display: 'inline-flex', alignItems: 'center', gap: `${gap}px`, ...style }}
      role="img"
      aria-label={`${filled} out of ${max} stars`}
      {...rest}
    >
      {Array.from({ length: filled }, (_, i) => (
        <Star key={i} size={size} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />
      ))}
    </span>
  );
}

/** Small round icon used instead of a bullet character between inline items. */
export function DotSeparator({ size = 5, className = '', style, ...rest }) {
  return (
    <svg
      viewBox="0 0 8 8"
      width={size}
      height={size}
      className={`icon-sep ${className}`.trim()}
      style={{ flexShrink: 0, display: 'inline-block', verticalAlign: 'middle', ...style }}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <circle cx="4" cy="4" r="4" fill="currentColor" />
    </svg>
  );
}

/** On-brand paw icon used instead of a bullet inside eyebrow labels. */
export function PawSeparator({ size = 11, className = '', style, ...rest }) {
  return (
    <PawPrint
      size={size}
      className={`icon-sep icon-sep-paw ${className}`.trim()}
      style={{ flexShrink: 0, display: 'inline-block', verticalAlign: 'middle', ...style }}
      aria-hidden="true"
      {...rest}
    />
  );
}
