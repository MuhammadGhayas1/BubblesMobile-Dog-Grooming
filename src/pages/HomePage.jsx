import { Link } from 'react-router-dom';
import {
  ChevronRight,
  MessageCircle,
  Calendar,
  Truck,
  User
} from 'lucide-react';
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

const whatsappLink = `https://wa.me/${businessInfo.phone.replace(/\D/g, '')}`;

const howItWorksSteps = [
  {
    n: '01',
    title: "Message us on WhatsApp",
    text: "Tell us your dog's breed, size, and any worries. We'll suggest the best package.",
    icon: MessageCircle
  },
  {
    n: '02',
    title: "We come to you",
    text: "Our fully equipped van pulls up outside your home. No car rides, no kennels, no anxious waiting.",
    icon: Truck
  },
  {
    n: '03',
    title: "One-to-one grooming",
    text: "Just your dog and our groomer. Calm, patient, and focused. You get a text when we're done.",
    icon: User
  }
];

const pricingSizes = [
  {
    id: "small",
    label: "Small dogs (<25lbs)",
    icon: SketchPaw,
    color: "var(--color-sage)",
    services: [
      { name: "Bath and brush", price: "£30" },
      { name: "Full groom", price: "£45" },
      { name: "Puppy first groom", price: "£35" }
    ],
    cta: "Book Small Dog Groom"
  },
  {
    id: "medium",
    label: "Medium dogs (25-50lbs)",
    icon: SketchStar,
    color: "var(--color-terracotta)",
    services: [
      { name: "Bath and brush", price: "£35" },
      { name: "Full groom", price: "£55" },
      { name: "De-shedding", price: "+£15" }
    ],
    cta: "Book Medium Dog Groom"
  },
  {
    id: "large",
    label: "Large dogs (50-80lbs)",
    icon: SketchVan,
    color: "var(--color-gold)",
    services: [
      { name: "Bath and brush", price: "£40" },
      { name: "Full groom", price: "£65" },
      { name: "Nail grind and teeth", price: "+£18" }
    ],
    cta: "Book Large Dog Groom"
  }
];

const addons = [
  { name: "Nail clip", price: "£8" },
  { name: "Teeth brush", price: "£10" },
  { name: "Ear clean", price: "£7" }
];

export function HomePage() {
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
      quote: "Transparent pricing, no faff. Messaged on WhatsApp, got a quote in 10 minutes, booked for Saturday. My Cavoodle has never looked better.",
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
              <h1 className="hero-headline">
                Stress-free mobile grooming{' '}
                <span style={{ color: 'var(--color-sage)' }}>
                  at your door in Manchester
                </span>
              </h1>

              <p className="hero-subhead">
                5 star rated. DBS checked. Serving M1 through M21 and surrounding areas.
              </p>

              <div className="hero-actions">
                <a href={whatsappLink} className="btn btn-primary btn-lg">
                  <Calendar className="btn-icon" />
                  <span>Book Now</span>
                </a>
                <Link to="/services" className="btn btn-secondary btn-lg">
                  <span>See Prices and Packages</span>
                  <ChevronRight className="btn-icon" />
                </Link>
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
          <p className="narrative-kicker">Here's the thing about grooming day</p>
          <h2 className="pull-line">
            No stressful car rides. No waiting in cages. Just calm, one-on-one
            care in your driveway.
          </h2>
          <p className="narrative-body">
            Most dogs don't actually hate the groom. They hate the journey.
            The carrier, the queue of barking dogs, the strangers' hands. So
            we took the salon out of the building and put it in our van, where
            the only dog in the room is yours. You carry on with your morning
            or come and watch. Your dog gets a quiet, private grooming in a
            space that already smells like home.
          </p>

          <div className="van-evidence-row">
            <div className="van-evidence-item">
              <SketchDroplet size={40} style={{ color: 'var(--color-gold)' }} />
              <h4>Warm hydrobath and gentle natural shampoos</h4>
              <p>A proper bath, not a quick rinse, with coat conditioning to match.</p>
            </div>
            <div className="van-evidence-item">
              <SketchLeaf size={40} style={{ color: 'var(--color-gold)' }} />
              <h4>Quiet, temperature-controlled space</h4>
              <p>Low-noise dryers and a calm environment, tuned for nervous pups.</p>
            </div>
            <div className="van-evidence-item">
              <SketchWaves size={40} style={{ color: 'var(--color-gold)' }} />
              <h4>Heated water, independent power</h4>
              <p>Everything a salon has. The van just brings it to your kerb.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- HOW IT WORKS (3 steps) ----------------------------- */}
      <section className="narrative-section" style={{ background: 'var(--color-sage-soft)', borderRadius: 'var(--radius-xl)' }}>
        <div className="container">
          <p className="narrative-kicker">Grooming day, made simple</p>
          <h2>Grooming without the stress (for you or your dog)</h2>

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
          <h2>Transparent pricing, tailored to your dog</h2>
          <p className="narrative-body">
            We price by dog size because a Chihuahua takes less time than a Golden Retriever.
            What you see is what you pay. No extra muddy surcharges.
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
                <Link to="/booking" className="btn btn-primary btn-sm" style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}>
                  <Calendar className="btn-icon" />
                  <span>{size.cta}</span>
                </Link>
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
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Add-ons</h3>
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
                alt="Sarah, professional mobile dog groomer in Manchester"
              />
              <div className="about-photo-chip">
                <SketchPaw size={26} />
              </div>
            </div>
            <div>
              <p className="narrative-kicker">Meet your groomer</p>
              <h2 style={{ marginBottom: '6px' }}>Hi, I am Sarah</h2>

              <div className="about-quote-box" style={{ marginTop: '16px' }}>
                "I've been grooming dogs for 7 years, starting after my own rescue Spaniel had a traumatic salon experience. I knew there had to be a better way. So I trained, got insured, bought a van, and started Bubbles. I specialise in nervous and elderly dogs. Patience isn't a bonus, it's the whole point. DBS checked, fully insured, and genuinely obsessed with making dogs feel safe."
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
                <span className="badge badge-sage" style={{ fontSize: '0.82rem' }}>
                  <SketchCheck size={15} style={{ color: 'var(--color-sage)' }} />
                  <span>DBS checked</span>
                </span>
                <span className="badge badge-sage" style={{ fontSize: '0.82rem' }}>
                  <SketchCheck size={15} style={{ color: 'var(--color-sage)' }} />
                  <span>Fully insured</span>
                </span>
                <span className="badge badge-sage" style={{ fontSize: '0.82rem' }}>
                  <SketchCheck size={15} style={{ color: 'var(--color-sage)' }} />
                  <span>7+ years experience</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------- THE WORK ------------------------------- */}
      <section className="narrative-section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <p className="narrative-kicker">Our Work</p>
          <h2>Fresh From The Groom</h2>
          <p className="narrative-body">
            A few favourite transformations from recent visits. Drag the
            slider. That is the real deal.
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
          <p className="narrative-kicker">The rest, answered</p>
          <h2>Everything else you are probably wondering</h2>
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
              Ready When You Are
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', maxWidth: '580px', margin: '0 auto 32px auto' }}>
              Message us on WhatsApp with your dog's breed, size, and any worries.
              We will suggest the best package and find a time that works.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a href={whatsappLink} className="btn btn-primary btn-lg">
                <Calendar className="btn-icon" />
                <span>Book Now</span>
              </a>
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