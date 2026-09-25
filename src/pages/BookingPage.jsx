import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Calendar, CheckCircle2, Dog, Clock, User, Phone, Mail, FileText, Sparkles, Lock } from 'lucide-react';
import { servicesData, addonUpgrades } from '../data/services';
import { businessInfo } from '../data/business';

export function BookingPage() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || 'full-groom';

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dogName: '',
    breed: '',
    serviceId: initialService,
    addonId: '',
    date: '',
    time: 'Morning (09:00 - 12:00)',
    notes: ''
  });

  useEffect(() => {
    const paramService = searchParams.get('service');
    if (paramService) {
      setFormData(prev => ({ ...prev, serviceId: paramService }));
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedServiceObj = servicesData.find(s => s.id === formData.serviceId) || servicesData[0];

  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge badge-sage" style={{ marginBottom: '12px' }}>
            <span>DOORSTEP APPOINTMENT</span>
          </div>
          <h1>Book a Mobile Grooming Visit</h1>
          <p>
            Tell us a little about your dog and your preferred timing. We will bring our fully equipped mobile grooming unit right to your door in Manchester.
          </p>
        </div>

        <div className="booking-container">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '24px 12px' }}>
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'var(--color-sage-soft)',
                color: 'var(--color-forest)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                border: '2px solid var(--color-sage)'
              }}>
                <CheckCircle2 size={42} />
              </div>

              <h2 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>Thanks! We've received your request.</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dark)', maxWidth: '520px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
                We'll review your details for <strong>{formData.dogName}</strong> ({formData.breed}) and be in touch shortly to confirm your appointment time at your location.
              </p>

              <div className="card" style={{ background: 'var(--color-sage-soft)', textAlign: 'left', margin: '0 auto 32px auto', maxWidth: '480px', padding: '20px' }}>
                <h4 style={{ color: 'var(--color-forest)', marginBottom: '10px' }}>Request Summary</h4>
                <div style={{ fontSize: '0.92rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div><strong>Owner:</strong> {formData.name} ({formData.phone})</div>
                  <div><strong>Dog:</strong> {formData.dogName} ({formData.breed})</div>
                  <div><strong>Service:</strong> {selectedServiceObj.name} ({selectedServiceObj.price})</div>
                  <div><strong>Preferred Time:</strong> {formData.date ? formData.date : 'Flexible'} - {formData.time}</div>
                  <div><strong>Location:</strong> Manchester Area</div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
                <Link to="/" className="btn btn-secondary">
                  Return to Homepage
                </Link>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-primary"
                >
                  Make Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Step 1: Your Details */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <User size={18} style={{ color: 'var(--color-sage)' }} />
                  <span>1. Your Details</span>
                </h3>

                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Sarah Mitchell"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
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
                    <label className="form-label">Phone Number *</label>
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
              </div>

              {/* Step 2: Your Dog */}
              <div style={{ marginBottom: '32px', borderTop: '1px solid var(--color-border)', paddingTop: '28px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Dog size={18} style={{ color: 'var(--color-sage)' }} />
                  <span>2. Your Dog</span>
                </h3>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Dog's Name *</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="e.g. Teddy"
                      value={formData.dogName}
                      onChange={(e) => setFormData({ ...formData, dogName: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Breed *</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="e.g. Cockapoo, Cavapoo, Golden Retriever"
                      value={formData.breed}
                      onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Service Selection */}
              <div style={{ marginBottom: '32px', borderTop: '1px solid var(--color-border)', paddingTop: '28px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={18} style={{ color: 'var(--color-sage)' }} />
                  <span>3. Choose Grooming Service</span>
                </h3>

                <div className="form-group">
                  <label className="form-label">Selected Service *</label>
                  <select
                    className="form-select"
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  >
{servicesData.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.price})
                        </option>
                      ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Optional Spa Add-on</label>
                  <select
                    className="form-select"
                    value={formData.addonId}
                    onChange={(e) => setFormData({ ...formData, addonId: e.target.value })}
                  >
                    <option value="">No add-on</option>
                    {addonUpgrades.map((addon) => (
                      <option key={addon.id} value={addon.id}>
                        {addon.name} ({addon.price})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 4: Appointment Timing */}
              <div style={{ marginBottom: '32px', borderTop: '1px solid var(--color-border)', paddingTop: '28px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={18} style={{ color: 'var(--color-sage)' }} />
                  <span>4. Preferred Appointment</span>
                </h3>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Preferred Date</label>
                    <input
                      type="date"
                      className="form-input"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Preferred Time Window</label>
                    <select
                      className="form-select"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    >
                      <option value="Morning (09:00 - 12:00)">Morning (09:00 - 12:00)</option>
                      <option value="Early Afternoon (12:00 - 15:00)">Early Afternoon (12:00 - 15:00)</option>
                      <option value="Late Afternoon (15:00 - 18:00)">Late Afternoon (15:00 - 18:00)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Anything we should know? (Notes, coat state, nervous dogs)</label>
                  <textarea
                    className="form-textarea"
                    placeholder="e.g. Teddy is a bit nervous with noise, please use low dryer power. Park van on driveway."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                <Calendar className="btn-icon" />
                <span>Request Appointment</span>
              </button>

              <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.84rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <Lock size={14} style={{ color: 'var(--color-sage)' }} />
                <span>This is a frontend demo appointment request. No payment required.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
