import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Award, ShieldCheck, Heart, MapPin, Truck, CheckCircle2, Calendar } from 'lucide-react';
import { businessInfo } from '../data/business';

const whatsappLink = `https://wa.me/${businessInfo.phone.replace(/\D/g, '')}`;

export function AboutPage() {
  const location = useLocation();

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
          <h1>Calm, convenient grooming in Manchester</h1>
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
            </div>
            <div>
              <div className="badge badge-sage" style={{ marginBottom: '12px' }}>
                <span>FOUNDER AND LEAD GROOMER</span>
              </div>
              <h2>{businessInfo.groomer.name}</h2>
              <p style={{ fontWeight: 700, color: 'var(--color-sage)', fontSize: '1.05rem', marginBottom: '16px' }}>
                {businessInfo.groomer.role}
              </p>

              <div className="about-quote-box">
                "{businessInfo.groomer.bio}"
              </div>

              <p style={{ marginBottom: '24px', color: 'var(--color-text-muted)' }}>
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
              <h3 className="step-title">Message us on WhatsApp</h3>
              <p style={{ fontSize: '0.92rem' }}>Tell us your dog's breed, size, and any worries. We will suggest the best package and find a time that works.</p>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <h3 className="step-title">We come to you</h3>
              <p style={{ fontSize: '0.92rem' }}>Our fully equipped van pulls up outside your home. No car rides, no kennels, no anxious waiting.</p>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <h3 className="step-title">One-to-one grooming</h3>
              <p style={{ fontSize: '0.92rem' }}>Just your dog and our groomer. Calm, patient, and focused. You get a text when we are done.</p>
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
          <Link to="/booking" className="btn btn-primary">
            <Calendar className="btn-icon" />
            <span>Check Availability and Book</span>
          </Link>
        </div>
      </div>
    </div>
  );
}