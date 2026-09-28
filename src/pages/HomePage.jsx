import { Link } from 'react-router-dom';
import {
  ChevronRight,
  MessageCircle,
  Calendar,
  Truck,
  User,
  ShieldCheck,
  MapPin,
  Sparkles,
  Heart,
  CheckCircle2
} from 'lucide-react';
import { StarRating } from '../components/RatingIcons';
import {
  SketchPaw,
  SketchCheck,
  SketchVan,
  SketchWaves,
  SketchLeaf,
  SketchDroplet,
  SketchStar
} from '../components/SketchIcons';
import { galleryItems } from '../data/gallery';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { FAQAccordion } from '../components/FAQAccordion';
import { businessInfo } from '../data/business';
import { useBooking } from '../booking/BookingContext';

const whatsappLink = `https://wa.me/${businessInfo.phone.replace(/\D/g, '')}`;

const howItWorksSteps = [
  {
    n: '01',
    title: "Select your service & date",
    text: "Tell us about your dog and pick a date & time slot that fits your schedule in seconds.",
    icon: Calendar
  },
  {
    n: '02',
    title: "We pull up to your door",
    text: "Our fully equipped mobile spa arrives right outside your house in Manchester. Zero car rides or crates.",
    icon: Truck
  },
  {
    n: '03',
    title: "Gentle 1-on-1 pampering",
    text: "Just your dog and Sarah. Gentle hydrobath, calming blow-dry, coat styling & treats galore.",
    icon: Heart
  }
];

const pricingSizes = [
  {
    id: "small",
    label: "Small dogs (<15 lbs)",
    icon: SketchPaw,
    color: "var(--color-sage)",
    services: [
      { name: "Bath & Brush", price: "£30" },
      { name: "Full Groom", price: "£45" },
      { name: "Puppy's First Pamper", price: "£35" }
    ],
    cta: "Book Small Dog Groom"
  },
  {
    id: "medium",
    label: "Medium dogs (15-40 lbs)",
    icon: SketchStar,
    color: "var(--color-terracotta)",
    services: [
      { name: "Bath & Brush", price: "£35" },
      { name: "Full Groom", price: "£55" },
      { name: "De-shedding Treatment", price: "+£15" }
    ],
    cta: "Book Medium Dog Groom"
  },
  {
    id: "large",
    label: "Large & XL dogs (40+ lbs)",
    icon: SketchVan,
    color: "var(--color-gold)",
    services: [
      { name: "Bath & Brush", price: "£40+" },
      { name: "Full Groom", price: "£65+" },
      { name: "Nail Grinding & Teeth", price: "+£20" }
    ],
    cta: "Book Large Dog Groom"
  }
];

const addons = [
  { name: "De-shedding Treatment", price: "£15" },
  { name: "Nail Grinding", price: "£10" },
  { name: "Teeth Brushing", price: "£10" }
];

export function HomePage() {
  const { openBooking } = useBooking();

  const heroQuote = {
    quote: "Sarah was incredible with our anxious rescue terrier. She took her time, didn't rush, and he actually wagged his tail when she arrived. Best groomer we've ever used.",
    dogName: "Emma T.",
    breed: "Rescue terrier",
    area: "M20"
  };

  const testimonials = [
    {
      id: "james",
      quote: "So convenient! Didn't have to stuff two muddy Labs into the car. Sarah came to our drive, did a brilliant job, and they were calm the whole time.",
      dogName: "James R.",
      breed: "Labrador",
      area: "M21"
    },
    {
      id: "priya",
      quote: "Transparent pricing, no faff. Booked online in 2 minutes, got a text before arrival. My Cavoodle has never looked or smelled better.",
      dogName: "Priya K.",
      breed: "Cavoodle",
      area: "M14"
    }
  ];

  return (
    <div>
      {/* -------------------------------- HERO -------------------------------- */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="badge badge-sage" style={{ marginBottom: '14px' }}>
                <Sparkles size={14} />
                <span>Manchester's Warmest Mobile Dog Spa</span>
              </div>
              <h1 className="hero-headline">
                Treat your dog to a stress-free spa day{' '}
                <span style={{ color: 'var(--color-sage)' }}>
                  right outside your front door
                </span>
              </h1>

              <ul className="hero-trust-list">
                <li>
                  <StarRating rating={businessInfo.rating} size={15} className="hero-trust-icon" />
                  <span>Rated {businessInfo.rating}.0 by Manchester dog owners</span>
                </li>
                <li>
                  <ShieldCheck size={15} className="hero-trust-icon" />
                  <span>DBS Checked &amp; Insured</span>
                </li>
                <li>
                  <MapPin size={15} className="hero-trust-icon" />
                  <span>Serving M1 to M21, SK1 to SK8 and WA1 to WA15</span>
                </li>
              </ul>

              <div className="hero-actions">
                <button
                  type="button"
                  onClick={() => openBooking()}
                  className="btn btn-primary btn-lg"
                >
                  <Calendar className="btn-icon" />
                  <span>Book Now</span>
                </button>
                <button
                  type="button"
                  onClick={() => openBooking()}
                  className="btn btn-secondary btn-lg"
                >
                  <span>Check Availability</span>
                  <ChevronRight className="btn-icon" />
                </button>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <div className="hero-photo-frame">
                <img
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1000&q=80"
                  alt="Happy freshly groomed dog"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------- THE WHY (problem/solution) ----------------------- */}
      <section className="narrative-section">
        <div className="container">
          <p className="narrative-kicker">Gentle doorstep pampering</p>
          <h2 className="pull-line">
            No stressful car rides. No waiting in cages. Just calm, one-on-one
            care in your driveway.
          </h2>
          <p className="narrative-body">
            Most dogs don't actually hate grooming — they hate the noisy journey, crate cages, and frantic salon noise.
            Bubbles brings a warm, state-of-the-art mobile grooming spa right to your curb.
            Your dog receives gentle 1-on-1 care with zero waiting around.
          </p>

          <div className="van-evidence-row">
            <div className="van-evidence-item">
              <SketchDroplet size={40} style={{ color: 'var(--color-gold)' }} />
              <h4>Warm hydrobath & hypoallergenic shampoos</h4>
              <p>A deeply soothing bath tailored for sensitive skin and coat textures.</p>
            </div>
            <div className="van-evidence-item">
              <SketchLeaf size={40} style={{ color: 'var(--color-gold)' }} />
              <h4>Quiet, temperature-controlled environment</h4>
              <p>Low-noise dryers and a serene, warm mobile spa designed for nervous dogs.</p>
            </div>
            <div className="van-evidence-item">
              <SketchWaves size={40} style={{ color: 'var(--color-gold)' }} />
              <h4>Self-powered & climate ready</h4>
              <p>We supply our own warm water and power — no messy cords plugged into your home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- HOW IT WORKS (3 steps) ----------------------------- */}
      <section className="narrative-section" style={{ background: 'var(--color-sage-soft)', borderRadius: 'var(--radius-xl)' }}>
        <div className="container">
          <p className="narrative-kicker">Grooming day, made effortless</p>
          <h2>No cages, no car rides, no stress — just gentle 1-on-1 care</h2>

          <div className="journey">
            {howItWorksSteps.map((step, i) => (
              <div key={step.n} className={`journey-row ${i % 2 === 1 ? 'journey-row-flip' : ''}`}>
                <div className="journey-number">
                  <span>{step.n}</span>
                  <div className="journey-connector" aria-hidden="true" />
                </div>
                <div className="journey-card">
                  <div className="journey-icon"><step.icon size={34} style={{ color: 'var(--color-terracotta)' }} /></div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------ SERVICES & PRICING (BENTO GRID) ------------------------ */}
      <section className="narrative-section narrative-section--center">
        <div className="container">
          <p className="narrative-kicker">Clear pricing, no hidden surprises</p>
          <h2>Gentle care, zero hassle: Spa packages tailored for your dog</h2>
          <p className="narrative-body">
            We price by dog size because every breed needs specialized care and time.
            What you see is what you pay. No unexpected add-ons or hidden charges.
          </p>

          {/* Pricing bento grid */}
          <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
            {pricingSizes.map((size) => (
              <div key={size.id} style={{
                background: 'var(--color-sage-soft)',
                border: '1px solid rgba(74, 124, 89, 0.22)',
                borderRadius: 'var(--radius-xl)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <size.icon size={28} style={{ color: size.color }} />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{size.label}</h3>
                </div>
                <div style={{ flex: 1 }}>
                  {size.services.map((svc, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < size.services.length - 1 ? '1px solid rgba(74, 124, 89, 0.15)' : 'none' }}>
                      <span style={{ fontSize: '0.92rem' }}>{svc.name}</span>
                      <span style={{ fontWeight: 700, color: 'var(--color-forest)' }}>{svc.price}</span>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => openBooking({ sizeId: size.id })}
                  className="btn btn-primary btn-sm"
                  style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}
                >
                  <Calendar className="btn-icon" />
                  <span>{size.cta}</span>
                </button>
              </div>
            ))}

            {/* Add-ons column */}
            <div style={{
              background: 'linear-gradient(135deg, #FFF9F5 0%, #FDF0EC 100%)',
              border: '1px solid rgba(217, 119, 87, 0.3)',
              borderRadius: 'var(--radius-xl)',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <SketchStar size={28} style={{ color: 'var(--color-terracotta)' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Add-on Luxuries</h3>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '12px' }}>Can be added to any package</p>
              <div style={{ flex: 1 }}>
                {addons.map((addon, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < addons.length - 1 ? '1px solid rgba(217, 119, 87, 0.2)' : 'none' }}>
                    <span style={{ fontSize: '0.92rem' }}>{addon.name}</span>
                    <span style={{ fontWeight: 700, color: 'var(--color-forest)' }}>{addon.price}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => openBooking()}
                className="btn btn-secondary btn-sm"
                style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}
              >
                <span>Customize Add-ons in Booking</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------- MEET YOUR GROOMER ------------------------- */}
      <section className="narrative-section" style={{ background: '#FFFFFF', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-photo-wrapper">
              <img
                src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=800&q=80"
                alt="Sarah, certified mobile dog groomer in Manchester"
              />
              <div className="about-photo-chip">
                <SketchPaw size={26} />
              </div>

              {/* Trust Badges directly under photo */}
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
              <p className="narrative-kicker">Meet your groomer</p>
              <h2 style={{ marginBottom: '8px' }}>Hi, I'm Sarah!</h2>

              <div className="about-quote-box" style={{ marginTop: '16px' }}>
                "Hi, I'm Sarah! As a lifelong dog lover and certified groomer, I started mobile grooming so your pup never has to experience crate anxiety or stressful car rides again."
              </div>

              <p style={{ marginTop: '16px', color: 'var(--color-text-muted)', fontSize: '0.96rem' }}>
                I specialise in nervous, rescued, and elderly dogs. For me, patience isn't an afterthought — it's the heart of everything I do.
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
                <span className="badge badge-sage" style={{ fontSize: '0.82rem' }}>
                  <CheckCircle2 size={15} style={{ color: 'var(--color-sage)' }} />
                  <span>DBS Checked</span>
                </span>
                <span className="badge badge-sage" style={{ fontSize: '0.82rem' }}>
                  <CheckCircle2 size={15} style={{ color: 'var(--color-sage)' }} />
                  <span>Certified & Fully Insured</span>
                </span>
                <span className="badge badge-sage" style={{ fontSize: '0.82rem' }}>
                  <CheckCircle2 size={15} style={{ color: 'var(--color-sage)' }} />
                  <span>7+ Years Loving Care</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------- THE WORK ------------------------------- */}
      <section className="narrative-section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <p className="narrative-kicker">Our Happy Clients</p>
          <h2>Fresh From The Doorstep Spa</h2>
          <p className="narrative-body">
            A few favourite transformations from recent visits. Drag the slider to see before & after happy coats!
          </p>

          <div style={{ maxWidth: '900px', margin: '40px auto 0 auto', width: '100%' }}>
            <BeforeAfterSlider />
          </div>

          <div style={{ marginTop: '40px', width: '100%', maxWidth: '900px' }} className="gallery-grid">
            {galleryItems.slice(0, 3).map((item) => (
              <div key={item.id} className="gallery-card">
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <h4>{item.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)' }}>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <Link to="/gallery" className="btn btn-secondary">
              <span>EXPLORE THE FULL GALLERY</span>
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --------------------------- SOCIAL PROOF (TESTIMONIALS) --------------------------- */}
      <section className="narrative-section" style={{ background: 'var(--color-sage-soft)', borderRadius: 'var(--radius-xl)' }}>
        <div className="container">
          <p className="narrative-kicker">In their words</p>
          <h2>What Manchester dog owners say</h2>

          <div className="review-hero">
            <div className="review-hero-text">
              <p className="review-hero-quote">
                "{heroQuote.quote}"
              </p>
              <div className="review-hero-meta">
                <SketchPaw size={26} style={{ color: 'var(--color-terracotta)' }} />
                <div>
                  <strong>{heroQuote.dogName}</strong>
                  <span>{heroQuote.breed} - {heroQuote.area}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="review-scatter">
            {testimonials.map((t, i) => (
              <div key={t.id} className={`review-mini ${i === 0 ? 'tilt-l' : 'tilt-r'}`}>
                <p>"{t.quote}"</p>
                <footer>
                  <strong>{t.dogName}</strong>
                  <span>{t.breed} - {t.area}</span>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------- FAQ --------------------------------- */}
      <section className="narrative-section" style={{ background: '#FFFFFF', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)' }}>
        <div className="container">
          <p className="narrative-kicker">Got questions?</p>
          <h2>We've got clear, comforting answers</h2>
          <div style={{ marginTop: '36px' }}>
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* ------------------------------ FINAL CTA ------------------------------ */}
      <section className="narrative-section" style={{ padding: '40px 48px' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, var(--color-forest) 0%, #0F2E21 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '56px 40px',
            color: '#FFFFFF',
            textAlign: 'center',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <h2 style={{ color: '#FFFFFF', fontSize: '2.4rem', marginBottom: '16px' }}>
              Treat Your Pup to Doorstep Comfort
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', maxWidth: '580px', margin: '0 auto 32px auto' }}>
              Select a date, pick a service package, and let us bring the spa right to your drive.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => openBooking()}
                className="btn btn-primary btn-lg"
              >
                <Calendar className="btn-icon" />
                <span>Book Your Visit Now</span>
              </button>
              <Link to="/contact" className="btn btn-secondary btn-lg" style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', borderColor: 'transparent' }}>
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}