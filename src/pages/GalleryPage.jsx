import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { InstagramIcon } from '../components/SocialIcons';
import { galleryItems, instagramFeed } from '../data/gallery';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Full Groom', 'De-shedding', 'Puppy Groom', 'Mobile Van', 'Process'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge badge-sage" style={{ marginBottom: '12px' }}>
            <span>OUR PORTFOLIO</span>
          </div>
          <h1>Fresh From The Groom</h1>
          <p>Explore real coat transformations and behind-the-scenes moments from our mobile unit.</p>
        </div>

        {/* Before / After Showcase */}
        <div style={{ marginBottom: '64px' }}>
          <BeforeAfterSlider />
        </div>

        {/* Gallery Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-sm ${activeFilter === cat ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid" style={{ marginBottom: '64px' }}>
          {filteredItems.map((item) => (
            <div key={item.id} className="gallery-card">
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <span className="badge badge-sage" style={{ width: 'fit-content', marginBottom: '6px', fontSize: '0.72rem' }}>
                  {item.category}
                </span>
                <h4>{item.title}</h4>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.85)' }}>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Section */}
        <div className="card" style={{ padding: '40px', background: 'var(--color-sage-soft)', border: '1px solid rgba(74, 124, 89, 0.2)' }}>
          <div className="section-header" style={{ marginBottom: '32px' }}>
            <div className="badge badge-accent" style={{ marginBottom: '12px' }}>
              <InstagramIcon size={14} />
              <span>@BUBBLESMOBILE</span>
            </div>
            <h2>Follow the fluff on Instagram</h2>
            <p>Catch daily clips of happy dogs getting groomed right outside their doorstep.</p>
          </div>

          <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '28px' }}>
            {instagramFeed.map((post) => (
              <div key={post.id} className="gallery-card" style={{ aspectRatio: '1/1' }}>
                <img src={post.image} alt="Instagram post" />
                <div className="gallery-overlay" style={{ padding: '12px' }}>
                  <p style={{ fontSize: '0.78rem', color: '#FFFFFF', margin: 0 }}>{post.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <InstagramIcon size={18} />
              <span>FOLLOW @BUBBLESMOBILE</span>
            </a>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Ready to give your dog the same treatment?</h3>
          <Link to="/booking" className="btn btn-primary btn-lg">
            <Calendar className="btn-icon" />
            <span>Book an Appointment</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
