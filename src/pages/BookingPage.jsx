import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Calendar, Sparkles } from 'lucide-react';
import { useBooking } from '../booking/BookingContext';

export function BookingPage() {
  const [searchParams] = useSearchParams();
  const { openBooking } = useBooking();
  const initialService = searchParams.get('service') || '';

  useEffect(() => {
    openBooking(initialService || null);
  }, [initialService, openBooking]);

  return (
    <div className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <div className="badge badge-sage" style={{ marginBottom: '16px' }}>
          <Sparkles size={14} />
          <span>Interactive Online Booking</span>
        </div>
        <h1>Book Your Mobile Spa Visit</h1>
        <p style={{ margin: '16px 0 32px' }}>
          Our interactive booking tool is open. If you closed it, click below to pick your dog's size, package, location & appointment time.
        </p>
        <button
          type="button"
          onClick={() => openBooking(initialService || null)}
          className="btn btn-primary btn-lg"
          style={{ margin: '0 auto' }}
        >
          <Calendar className="btn-icon" />
          <span>Open Interactive Booking Tool</span>
        </button>
      </div>
    </div>
  );
}
