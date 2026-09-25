import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';
import { businessInfo } from '../data/business';
import logo from '../assets/logo.png';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{
                height: '44px',
                padding: '6px 10px',
                borderRadius: '12px',
                background: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <img src={logo} alt={businessInfo.name} style={{ height: '32px', width: 'auto', maxWidth: '110px', objectFit: 'contain' }} />
              </div>
              <h3 style={{ margin: 0, fontSize: '1.3rem' }}>{businessInfo.name}</h3>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', maxWidth: '320px', margin: '0 0 16px 0' }}>
              {businessInfo.name} {businessInfo.category}. Bringing stress-free, professional care right outside your front door.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)' }}>
              <MapPin size={16} />
              <span>{businessInfo.location}</span>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', marginBottom: '16px', fontSize: '1.05rem' }}>Navigation</h4>
            <ul className="footer-links" style={{ flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services & Pricing</Link></li>
              <li><Link to="/about">How It Works & About</Link></li>
              <li><Link to="/gallery">Our Work & Transformations</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/booking">Book Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', marginBottom: '16px', fontSize: '1.05rem' }}>Get in Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem' }}>
              <a href={`tel:${businessInfo.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.85)' }}>
                <Phone size={16} />
                <span>{businessInfo.phone}</span>
              </a>
              <a href={`mailto:${businessInfo.email}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.85)' }}>
                <Mail size={16} />
                <span>{businessInfo.email}</span>
              </a>
              <div style={{ display: 'flex', gap: '14px', marginTop: '8px' }}>
                <a href="#instagram" aria-label="Instagram" style={{ color: '#FFFFFF', background: 'rgba(255,255,255,0.12)', padding: '8px', borderRadius: '50%' }}>
                  <InstagramIcon size={18} />
                </a>
                <a href="#facebook" aria-label="Facebook" style={{ color: '#FFFFFF', background: 'rgba(255,255,255,0.12)', padding: '8px', borderRadius: '50%' }}>
                  <FacebookIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            2026 Bubbles Mobile Dog Grooming. Fully insured and DBS checked.
          </div>
        </div>
      </div>
    </footer>
  );
}
