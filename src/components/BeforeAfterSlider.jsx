import React, { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { beforeAfterShowcase } from '../data/gallery';

export function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const handleSliderChange = (e) => {
    setSliderPos(e.target.value);
  };

  return (
    <div className="card" style={{ padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
        <div>
          <h3 style={{ fontSize: '1.6rem', color: 'var(--color-forest)' }}>{beforeAfterShowcase.title}</h3>
          <p style={{ marginTop: '4px' }}>{beforeAfterShowcase.description}</p>
        </div>
        <div style={{ background: 'var(--color-sage-soft)', padding: '8px 16px', borderRadius: 'var(--radius-full)', fontWeight: 700, color: 'var(--color-forest)', fontSize: '0.88rem' }}>
          {beforeAfterShowcase.serviceUsed}
        </div>
      </div>

      <div
        className="ba-image-container"
        style={{ position: 'relative', overflow: 'hidden', userSelect: 'none' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* After Image (Background) */}
        <img
          src={beforeAfterShowcase.afterImage}
          alt="Cockapoo After Full Grooming"
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
        />
        <div className="ba-label" style={{ right: '16px', left: 'auto', background: 'var(--color-forest)' }}>
          AFTER (FRESHLY GROOMED)
        </div>

        {/* Before Image (Clipped Overlay) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: `${sliderPos}%`,
            overflow: 'hidden',
            borderRight: '3px solid #FFFFFF',
            boxShadow: '4px 0 16px rgba(0,0,0,0.3)'
          }}
        >
          <img
            src={beforeAfterShowcase.beforeImage}
            alt="Cockapoo Before Grooming"
            style={{ width: '100%', height: '100%', objectFit: 'cover', minWidth: '100%' }}
          />
          <div className="ba-label" style={{ left: '16px', background: 'var(--color-terracotta)' }}>
            BEFORE
          </div>
        </div>

        {/* Divider Handle */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: `${sliderPos}%`,
            transform: 'translate(-50%, -50%)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: '#FFFFFF',
            color: 'var(--color-forest)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
            pointerEvents: 'none',
            zIndex: 10
          }}
        >
          <ArrowLeftRight size={20} />
        </div>

        {/* Range Input Overlay */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={handleSliderChange}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'ew-resize',
            zIndex: 20
          }}
          aria-label="Drag to compare Before and After grooming"
        />
      </div>

      <div style={{ textAlign: 'center', marginTop: '14px', fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
        <ArrowLeftRight size={14} />
        <span>Drag slider left or right to inspect the coat transformation</span>
      </div>
    </div>
  );
}
