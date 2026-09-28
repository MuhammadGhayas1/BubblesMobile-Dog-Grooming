import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Award, ShieldCheck, Heart, MapPin, Truck, CheckCircle2, Calendar } from 'lucide-react';
import { StarRating } from '../components/RatingIcons';
import { businessInfo } from '../data/business';
import { useBooking } from '../booking/BookingContext';

export function AboutPage() {
  const location = useLocation();
  const { openBooking } = useBooking();

  useEffect(() => {
    if (location.hash === '#how-it-works') {
      const element = document.getElementById('how-it-works');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge badge-sage" style={{ marginBottom: '12px' }}>
            <span>ABOUT BUBBLES MOBILE GROOMING</span>
          </div>
          <h1>Treat your dog to a stress-free spa day right outside your front door</h1>
          <p>
            Dedicated to providing individual, stress-free care right outside your front door.
          </p>
        </div>

        {/* Founder Story */}
        <div className="card" style={{ marginBottom: '64px', padding: '40px' }}>
          <div className="about-grid">
            <div className="about-photo-wrapper">
              <img
                src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=800&q=80"
                alt="Sarah, founder of Bubbles Mobile Dog Grooming"
              />

              {/* Trust badges directly under photo */}
              <div className="photo-trust-badges">
                <div className="trust-badge-item">
                  <Heart size={16} className="trust-icon" />
                  <span>100+ Happy Pups Cleaned</span>
                </div>
                <div className="trust-badge-item">
                  <StarRating rating={businessInfo.rating} size={13} className="trust-icon" />
                  <span>Rated in Manchester</span>
                </div>
                <div className="trust-badge-item">
                  <ShieldCheck size={16} className="trust-icon" />
                  <span>Certified & Insured</span>
                </div>
              </div>
            </div>

            <div>
              <div className="badge badge-sage" style={{ marginBottom: '12px' }}>
                <span>FOUNDER AND LEAD GROOMER</span>
              </div>
              <h2>Hi, I'm Sarah!</h2>
              <p style={{ fontWeight: 700, color: 'var(--color-sage)', fontSize: '1.05rem', marginBottom: '16px' }}>
                {businessInfo.groomer.role}
              </p>

              <div className="about-quote-box">
                "{businessInfo.groomer.bio}"
              </div>

              <p style={{ marginBottom: '24px', color: 'var(--color-text-muted)', marginTop: '16px' }}>
                Traditional salons can often be overwhelming with loud hair dryers, multiple barking dogs, and long waiting times in cages. Bubbles was built to change that by delivering one-to-one care in a warm, clean, fully customized mobile grooming unit.
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {businessInfo.groomer.credentials.map((cred, i) => (
                  <span key={i} className="badge badge-sage">
                    <CheckCircle2 size={14} style={{ color: 'var(--color-sage)' }} />
                    <span>{cred}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* HOW IT WORKS DETAILED (3 STEPS) */}
        <div id="how-it-works" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
          <div className="section-header">
            <div className="badge badge-dark" style={{ marginBottom: '12px' }}>
              <span>STEP BY STEP</span>
            </div>
            <h2>How mobile grooming works</h2>
            <p>Simple, transparent, and completely hassle-free from start to finish.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3 className="step-title">Select your package & time</h3>
              <p style={{ fontSize: '0.92rem' }}>Pick your dog's size, package, and preferred time slot using our instant interactive booking tool.</p>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <h3 className="step-title">We pull up to your door</h3>
              <p style={{ fontSize: '0.92rem' }}>Our fully equipped mobile unit arrives outside your home in Manchester. No car rides or cages.</p>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <h3 className="step-title">1-on-1 Gentle Grooming</h3>
              <p style={{ fontSize: '0.92rem' }}>Just your dog and Sarah. Patient, calm, and focused. You get a text when your pup is fresh and ready.</p>
            </div>
          </div>
        </div>

        {/* SERVICE AREAS */}
        <div className="card" style={{ background: 'var(--color-forest)', color: '#FFFFFF', textAlign: 'center', padding: '48px' }}>
          <div className="badge badge-on-dark" style={{ marginBottom: '14px' }}>
            <MapPin size={14} />
            <span>AREA COVERAGE</span>
          </div>
          <h2 style={{ color: '#FFFFFF', marginBottom: '16px' }}>Areas We Serve</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '600px', margin: '0 auto 28px auto' }}>
            We bring our mobile dog grooming service to doorstep locations across Manchester and surrounding areas.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 20px', borderRadius: 'var(--radius-full)', fontWeight: 600, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} />
              <span>M1 to M21</span>
            </span>
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 20px', borderRadius: 'var(--radius-full)', fontWeight: 600, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} />
              <span>SK1 to SK8</span>
            </span>
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 20px', borderRadius: 'var(--radius-full)', fontWeight: 600, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} />
              <span>WA1 to WA15</span>
            </span>
          </div>
          <button
            type="button"
            onClick={() => openBooking()}
            className="btn btn-primary"
          >
            <Calendar className="btn-icon" />
            <span>Check Availability and Book</span>
          </button>
        </div>
      </div>
    </div>
  );
}