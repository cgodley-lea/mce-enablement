import React, {type ReactNode} from 'react';

// Decorative "pixel cluster" from the ListEngage brand: small squares that stand for data.
// Seeded so the pattern is stable between renders (no hydration flicker) but varies by seed.
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

const COLORS = ['var(--orange)', 'var(--blue)', 'var(--green)', 'var(--grey-gradient-light)'];

export default function PixelCluster({seed = 7, count = 22, className}: {seed?: number; count?: number; className?: string}): ReactNode {
  const r = rng(seed);
  const squares = Array.from({length: count}, (_, i) => {
    const size = [6, 8, 10, 14][Math.floor(r() * 4)];
    return {
      i,
      x: Math.round(r() * 220),
      y: Math.round(r() * 140),
      size,
      color: COLORS[Math.floor(r() * COLORS.length)],
      opacity: 0.25 + r() * 0.5,
    };
  });
  return (
    <svg className={className} viewBox="0 0 240 160" aria-hidden="true" focusable="false">
      {squares.map((s) => (
        <rect key={s.i} x={s.x} y={s.y} width={s.size} height={s.size} rx="2" fill={s.color} opacity={s.opacity} />
      ))}
    </svg>
  );
}
