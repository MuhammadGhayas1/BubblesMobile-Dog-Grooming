import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { businessInfo } from '../data/business';
import logo from '../assets/logo.png';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const whatsappNumber = '44' + businessInfo.phone.replace(/^0/, '');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Bubbles! I'd like to book a dog grooming appointment.")}`;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/about#how-it-works' },
    { name: 'Our Work', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <Link to="/" className="logo-brand" aria-label="Bubbles Home">
            <img src={logo} className="logo-img" alt={businessInfo.name} />
            <div className="logo-text-group">
              <span className="logo-title">{businessInfo.name}</span>
              <span className="logo-sub">{businessInfo.category}</span>
            </div>
          </Link>

          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <Calendar className="btn-icon" />
              <span>Book Now</span>
            </a>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <div className="drawer-header">
            <div className="logo-brand">
              <img src={logo} className="logo-img" alt={businessInfo.name} style={{ height: '36px' }} />
              <div className="logo-text-group">
                <span className="logo-title" style={{ fontSize: '1.1rem' }}>{businessInfo.name}</span>
                <span className="logo-sub">{businessInfo.location}</span>
              </div>
            </div>
            <button className="mobile-menu-btn" onClick={() => setMobileOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <ul className="drawer-nav-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="drawer-nav-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={() => setMobileOpen(false)}
              style={{ width: '100%' }}
            >
              <Calendar className="btn-icon" />
              <span>Book Now</span>
            </a>
            <a
              href={`tel:${businessInfo.phone}`}
              className="btn btn-secondary"
              style={{ width: '100%' }}
            >
              <Phone size={18} />
              <span>{businessInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
