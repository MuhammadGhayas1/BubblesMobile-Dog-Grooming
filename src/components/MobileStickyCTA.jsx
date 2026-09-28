import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { businessInfo } from '../data/business';
import { useBooking } from '../booking/BookingContext';

export function MobileStickyCTA() {
  const { openBooking } = useBooking();

  return (
    <div className="mobile-sticky-bar">
      <a
        href={`tel:${businessInfo.phone}`}
        className="btn btn-secondary"
        style={{ padding: '10px 14px' }}
      >
        <Phone size={16} />
        <span>Call Us</span>
      </a>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => openBooking()}
        style={{ padding: '10px 14px' }}
      >
        <Calendar className="btn-icon" />
        <span>Book Groom</span>
      </button>
    </div>
  );
}
