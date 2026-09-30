import React from 'react';
import { Compass, MapPin, Sparkles, Navigation, Flame, Eye, ChevronRight } from 'lucide-react';
import { SIMULATED_ORIGINS, LOCATIONS } from '../data/locations';

export default function HeroBanner({
  userOrigin,
  setUserOrigin,
  onQuickCategorySelect,
  onOpenScanner,
  onExploreLocation
}) {
  return (
    <div className="hero-section">
      <div className="hero-backdrop">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="hero-pattern"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-pulse"></span>
          <span>നമസ്കാരം • Welcome to the Cultural Capital of Malabar</span>
        </div>

        <h1 className="hero-title">
          Explore <span className="text-gradient-sun">Kozhikode</span> Through <br />
          <span className="text-gradient-gold">Interactive AR & Living Stories</span>
        </h1>

        <p className="hero-description">
          Step into centuries of maritime trade, aromatic Dum Biryani, 150-year-old rusted sea bridges,
          and living Uru shipwrights. Scan physical monuments, solve location-specific quests,
          and navigate Calicut with your personalized AI travel companion.
        </p>

        {/* Current traveler location simulator */}
        <div className="location-origin-selector-card glass-panel">
          <div className="origin-header">
            <div className="origin-icon-wrap">
              <Navigation className="icon-sm text-cyan animate-pulse" />
            </div>
            <div>
              <span className="origin-label">Traveler Simulated Position:</span>
              <p className="origin-hint">Distances & routes dynamically recalculate from your selected spot</p>
            </div>
          </div>

          <div className="origin-options-grid">
            {SIMULATED_ORIGINS.map((origin) => (
              <button
                key={origin.id}
                id={`origin-${origin.id}`}
                className={`origin-btn ${userOrigin.id === origin.id ? 'active' : ''}`}
                onClick={() => setUserOrigin(origin)}
              >
                <MapPin className="icon-xs" />
                <span>{origin.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Instant Exploration: Famous Places & Must-Try Food Spots in Calicut */}
        <div className="hero-quick-needs">
          <div className="quick-label-group">
            <span className="quick-label">⚡ Instant Exploration:</span>
            <span className="quick-sublabel">Famous Places &amp; Must-Try Food Spots in Calicut</span>
          </div>
          <div className="pills-scroll">
            {[
              { id: 'kozhikode-beach', label: '🏖️ Kozhikode Beach & Sea Pier', tag: 'Famous Place', type: 'place' },
              { id: 'paragon-biryani', label: '🍛 Paragon Dum Biryani (TasteAtlas #11)', tag: 'Must-Try Food Spot', type: 'food' },
              { id: 'beypore-uru', label: '⛵ Beypore Uru Shipyard', tag: 'Famous Place', type: 'place' },
              { id: 'zains-kuttichira', label: '🥘 Zain’s Kuttichira Delicacies', tag: 'Must-Try Food Spot', type: 'food' },
              { id: 'sm-street', label: '🍬 S.M. Street Authentic Halwa', tag: 'Must-Try Food Spot', type: 'food' },
              { id: 'kappad-beach', label: '🌊 Kappad 1498 Vasco Landing', tag: 'Famous Place', type: 'place' },
              { id: 'mishkal-mosque', label: '🕌 Mishkal 14th-C. Timber Mosque', tag: 'Famous Place', type: 'place' },
              { id: 'mananchira-square', label: '🍃 Mananchira Square & Royal Tank', tag: 'Famous Place', type: 'place' }
            ].map((spot) => {
              const loc = LOCATIONS.find(l => l.id === spot.id);
              return (
                <button
                  key={spot.id}
                  id={`pill-${spot.id}`}
                  className={`quick-pill highlight-famous-spot ${spot.type === 'food' ? 'food-spot-pill' : 'place-spot-pill'}`}
                  onClick={() => {
                    if (loc && onExploreLocation) {
                      onExploreLocation(loc);
                    } else if (onQuickCategorySelect) {
                      onQuickCategorySelect('must-try');
                    }
                  }}
                  title={`Explore ${spot.label} (${spot.tag})`}
                >
                  <span className="spot-title-text">{spot.label}</span>
                  <span className={`spot-tag-pill ${spot.type}`}>{spot.tag}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
