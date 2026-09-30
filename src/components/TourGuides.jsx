import React, { useState } from 'react';
import { 
  UserCheck, 
  Phone, 
  MessageCircle, 
  Mail, 
  Award, 
  Star, 
  Languages, 
  Clock, 
  ShieldCheck, 
  Compass, 
  Sparkles,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { TOUR_GUIDES } from '../data/guides';

export default function TourGuides() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const specialties = [
    { id: 'all', label: 'All Guides' },
    { id: 'heritage', label: 'Zamorin & Heritage Walks' },
    { id: 'food', label: 'Culinary & Biryani Trails' },
    { id: 'uru', label: 'Beypore Uru & Maritime' },
    { id: 'nature', label: 'Eco-Tourism & Rainforests' }
  ];

  const filteredGuides = TOUR_GUIDES.filter((guide) => {
    if (selectedSpecialty === 'all') return true;
    if (selectedSpecialty === 'heritage') return guide.specialties.some(s => s.toLowerCase().includes('heritage') || s.toLowerCase().includes('zamorin') || s.toLowerCase().includes('mosque') || s.toLowerCase().includes('temple'));
    if (selectedSpecialty === 'food') return guide.specialties.some(s => s.toLowerCase().includes('biryani') || s.toLowerCase().includes('food') || s.toLowerCase().includes('halwa') || s.toLowerCase().includes('snack'));
    if (selectedSpecialty === 'uru') return guide.specialties.some(s => s.toLowerCase().includes('uru') || s.toLowerCase().includes('ship') || s.toLowerCase().includes('river') || s.toLowerCase().includes('sea'));
    if (selectedSpecialty === 'nature') return guide.specialties.some(s => s.toLowerCase().includes('nature') || s.toLowerCase().includes('rainforest') || s.toLowerCase().includes('bird') || s.toLowerCase().includes('wetland'));
    return true;
  });

  return (
    <div className="tour-guides-section container animate-fade-in">
      {/* Section Header */}
      <div className="section-header-centered">
        <div className="badge-pill-cyan">
          <ShieldCheck className="icon-xs" />
          <span>Accredited Malabar Heritage Specialists</span>
        </div>
        <h2 className="section-title">Certified Kozhikode Local Tour Guides</h2>
        <p className="section-subtitle">
          Connect directly with licensed regional historians, culinary curators, and marine craft experts 
          to explore the living secrets, alleys, and flavors of Calicut with certified local masters.
        </p>
      </div>

      {/* Specialty Filter Pills */}
      <div className="guides-filter-bar glass-panel">
        <span className="filter-label">Filter by Expertise:</span>
        <div className="filter-pills-row">
          {specialties.map((spec) => (
            <button
              key={spec.id}
              className={`guide-filter-btn ${selectedSpecialty === spec.id ? 'active' : ''}`}
              onClick={() => setSelectedSpecialty(spec.id)}
            >
              <span>{spec.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Guides Grid */}
      <div className="guides-cards-grid">
        {filteredGuides.map((guide) => (
          <div key={guide.id} id={guide.id} className="guide-card glass-panel animate-fade-in">
            {/* Guide Card Header */}
            <div className="guide-card-top">
              <div className="guide-avatar-wrap">
                <img referrerPolicy="no-referrer" 
                  src={guide.photo} 
                  alt={guide.name} 
                  className="guide-avatar-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                  }}
                />
                <span className="guide-avail-badge">● {guide.availability}</span>
              </div>

              <div className="guide-primary-meta">
                <div className="guide-badge-tag">
                  <Award className="icon-xs text-gold" />
                  <span>{guide.badge}</span>
                </div>
                <h3 className="guide-name">{guide.name}</h3>
                <p className="guide-malayalam">{guide.malayalamName}</p>
                <p className="guide-title">{guide.title}</p>
                
                <div className="guide-rating-row">
                  <div className="star-rating">
                    <Star className="icon-xs text-gold fill-gold" />
                    <strong>{guide.rating}</strong>
                  </div>
                  <span className="reviews-sub">({guide.reviewsCount} verified traveler reviews)</span>
                  <span className="exp-pill">{guide.experienceYears} yrs experience</span>
                </div>
              </div>
            </div>

            {/* Qualifications & Degrees Box */}
            <div className="guide-qualification-box">
              <div className="qual-item">
                <ShieldCheck className="icon-xs text-green" />
                <div>
                  <strong className="qual-label">Official License & Accreditation:</strong>
                  <p className="qual-val">{guide.qualification}</p>
                </div>
              </div>

              <div className="qual-item">
                <Award className="icon-xs text-cyan" />
                <div>
                  <strong className="qual-label">Academic Qualification:</strong>
                  <p className="qual-val">{guide.academicDegree}</p>
                </div>
              </div>
            </div>

            {/* Bio & Specialties */}
            <p className="guide-bio-text">{guide.bio}</p>

            <div className="guide-specialties-wrap">
              <strong className="spec-label">Specialist Tour Circuits:</strong>
              <div className="spec-tags-cloud">
                {guide.specialties.map((spec, i) => (
                  <span key={i} className="spec-tag">#{spec}</span>
                ))}
              </div>
            </div>

            <div className="guide-languages-row">
              <Languages className="icon-xs text-gold" />
              <span><strong>Languages Spoken:</strong> {guide.languages.join(', ')}</span>
            </div>

            <div className="guide-pricing-row">
              <span className="guide-rate-label">Standard Guiding Fee:</span>
              <strong className="guide-rate-val">{guide.pricing}</strong>
            </div>

            {/* Direct Contact Actions */}
            <div className="guide-contact-actions">
              <a 
                href={`tel:${guide.phone.replace(/\s+/g, '')}`} 
                className="btn-guide-action call"
                title={`Call ${guide.name} directly`}
              >
                <Phone className="icon-xs" />
                <span>Call {guide.phone}</span>
              </a>

              <a 
                href={`https://wa.me/${guide.whatsapp}?text=Hello%20${encodeURIComponent(guide.name)},%20I%20saw%20your%20profile%20on%20Explore%20Kozhikode%20and%20would%20like%20to%20inquire%20about%20a%20guided%20tour.`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-guide-action whatsapp"
                title="Chat directly on WhatsApp"
              >
                <MessageCircle className="icon-xs" />
                <span>WhatsApp</span>
              </a>

              <a 
                href={`mailto:${guide.email}?subject=Tour Inquiry via Explore Kozhikode`}
                className="btn-guide-action email"
                title="Send Email"
              >
                <Mail className="icon-xs" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
