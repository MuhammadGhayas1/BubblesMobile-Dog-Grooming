import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { businessInfo } from '../data/business';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge badge-sage" style={{ marginBottom: '12px' }}>
            <span>GET IN TOUCH</span>
          </div>
          <h1>Contact Bubbles</h1>
          <p>Have questions about our mobile dog grooming service? We would love to hear from you.</p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Business Info & Opening Hours */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="card" style={{ padding: '32px' }}>
              <h3 style={{ marginBottom: '20px', fontSize: '1.4rem' }}>Mobile Grooming Details</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div className="benefit-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--color-forest)' }}>Service Area</h4>
                    <p style={{ fontSize: '0.92rem' }}>{businessInfo.location}</p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>M1 to M21, SK1 to SK8, WA1 to WA15</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div className="benefit-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--color-forest)' }}>Phone</h4>
                    <a href={`tel:${businessInfo.phone}`} style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-sage)' }}>
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div className="benefit-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--color-forest)' }}>Email</h4>
                    <a href={`mailto:${businessInfo.email}`} style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-sage)' }}>
                      {businessInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Clock size={20} style={{ color: 'var(--color-sage)' }} />
                <h3 style={{ fontSize: '1.3rem' }}>Opening Hours</h3>
              </div>
              <table className="hours-table">
                <tbody>
                  {businessInfo.hours.map((h, i) => (
                    <tr key={i}>
                      <td className="day">{h.day}</td>
                      <td className="time">{h.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Quick Contact Form */}
          <div className="card" style={{ padding: '36px' }}>
            <h3 style={{ marginBottom: '8px', fontSize: '1.4rem' }}>Send Us a Message</h3>
            <p style={{ marginBottom: '24px', fontSize: '0.92rem' }}>
              We'll answer your query as quickly as possible during business hours.
            </p>

            {submitted ? (
              <div style={{
                background: 'var(--color-sage-soft)',
                padding: '32px',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center',
                border: '1px solid rgba(74, 124, 89, 0.3)'
              }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'var(--color-forest)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto'
                }}>
                  <CheckCircle2 size={28} />
                </div>
                <h3 style={{ marginBottom: '8px' }}>Message Received!</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dark)' }}>
                  Thanks for reaching out! We've received your message and will be in touch shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '20px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      placeholder="sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      required
                      className="form-input"
                      placeholder="07123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea
                    required
                    className="form-textarea"
                    placeholder="Ask about specific dog requirements, coat condition, or mobile visit questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '12px' }}>
                  <Send className="btn-icon" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
