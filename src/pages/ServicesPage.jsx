import React from 'react';
import { CheckCircle2, Sparkles, Clock, Calendar, Star } from 'lucide-react';
import { servicesData, addonUpgrades } from '../data/services';
import { FAQAccordion } from '../components/FAQAccordion';
import { useBooking } from '../booking/BookingContext';

export function ServicesPage() {
  const { openBooking } = useBooking();

  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge badge-sage" style={{ marginBottom: '12px' }}>
            <span>MOBILE SALON MENU</span>
          </div>
          <h1>Gentle care, zero hassle: Spa packages tailored for your dog</h1>
          <p>
            Treat your dog to a stress-free spa day right outside your front door.
          </p>
        </div>

        {/* Services List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '48px' }}>
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="card"
              style={{
                borderLeft: service.isFeatured ? '6px solid var(--color-sage)' : '1px solid var(--color-border)',
                position: 'relative'
              }}
            >
              {service.isFeatured && (
                <div className="badge badge-sage" style={{ position: 'absolute', top: '20px', right: '24px' }}>
                  <Star size={14} fill="currentColor" />
                  <span>Most Popular</span>
                </div>
              )}

              <div className="service-card-grid">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '1.6rem' }}>{service.name}</h3>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={14} />
                      {service.duration}
                    </span>
                  </div>

                  <p style={{ fontWeight: 600, color: 'var(--color-forest)', marginBottom: '10px' }}>
                    {service.tagline}
                  </p>
                  <p style={{ marginBottom: '16px' }}>{service.description}</p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                    {service.included.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--color-sage)', flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{
                  background: 'var(--color-sage-soft)',
                  padding: '24px',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                    Starting From
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-forest)' }}>
                    {service.price}
                  </div>
                  <button
                    type="button"
                    onClick={() => openBooking(service.id)}
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    <Calendar className="btn-icon" />
                    <span>Book This Package</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LUXURY SPA UPGRADE SECTION */}
        <div style={{
          background: 'linear-gradient(135deg, #FFF9F5 0%, #FDF0EC 100%)',
          border: '1px solid rgba(217, 119, 87, 0.3)',
          borderRadius: 'var(--radius-lg)',
          padding: '36px',
          marginBottom: '64px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <Sparkles size={22} style={{ color: 'var(--color-terracotta)' }} />
            <h3 style={{ color: 'var(--color-terracotta)' }}>Optional Pampering Spa Upgrade</h3>
          </div>
          {addonUpgrades.map((addon) => (
            <div key={addon.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>{addon.name} ({addon.price})</h4>
                <p style={{ maxWidth: '640px' }}>{addon.description}</p>
              </div>
              <button
                type="button"
                onClick={() => openBooking()}
                className="btn btn-primary btn-sm"
              >
                <Calendar className="btn-icon" />
                <span>Add in Booking</span>
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="section-header">
          <h2>Service FAQs</h2>
          <p>Got questions about our mobile grooming equipment or process?</p>
        </div>
        <FAQAccordion />
      </div>
    </div>
  );
}
