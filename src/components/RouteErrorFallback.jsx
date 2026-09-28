import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, LifeBuoy, Calendar } from 'lucide-react';
import { useBooking } from '../booking/BookingContext';

/**
 * Replaces React Router's built-in error screen so the app never falls back
 * to a debug page. Everything on screen stays on-brand and icon-driven.
 */
export function RouteErrorFallback() {
  const { openBooking } = useBooking();

  return (
    <div className="section">
      <div className="container" style={{ textAlign: 'center', maxWidth: '560px' }}>
        <div
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            background: 'var(--color-sage-soft)',
            color: 'var(--color-sage)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px auto'
          }}
        >
          <AlertTriangle size={34} />
        </div>
        <div className="badge badge-sage" style={{ marginBottom: '16px' }}>
          <LifeBuoy size={14} />
          <span>Hang Tight</span>
        </div>
        <h1>That page went off the route</h1>
        <p style={{ margin: '16px 0 32px' }}>
          Something did not load as expected. Give the home page a try, or jump straight into booking
          a doorstep grooming visit.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-secondary">
            <Home className="btn-icon" />
            <span>Back to Home</span>
          </Link>
          <button type="button" className="btn btn-primary" onClick={() => openBooking()}>
            <Calendar className="btn-icon" />
            <span>Book a Groom</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RouteErrorFallback;
