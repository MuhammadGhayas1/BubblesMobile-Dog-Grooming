import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';
import { businessInfo } from '../data/business';

export function MobileStickyCTA() {
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
      <Link
        to="/booking"
        className="btn btn-primary"
        style={{ padding: '10px 14px' }}
      >
        <Calendar className="btn-icon" />
        <span>Book Groom</span>
      </Link>
    </div>
  );
}
