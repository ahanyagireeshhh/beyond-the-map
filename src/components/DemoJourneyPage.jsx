import React, { useState } from "react";
import { LOCATIONS } from "../data/locations";
import { MapPin, Clock, Ticket, Star, ChevronRight, Info, Award, Sparkles, Navigation, Compass, Layers, CheckCircle2 } from "lucide-react";

export default function DemoJourneyPage({ onOpenStory, onOpenQuest }) {
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
  const { lat, lng } = selectedLocation.coordinates;
  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
  const shortDesc = selectedLocation.audioNarration.english.split(".").slice(0, 2).join(".").trim() + ".";

  return (
    <section className="demo-journey-section" aria-label="Kozhikode Dashboard">
      <div className="container">
        {/* Screen Header matching reference design */}
        <header className="dashboard-header-block">
          <div className="dashboard-title-row">
            <h1 className="dashboard-page-title">Kozhikode Dashboard</h1>
            <span className="dashboard-live-indicator">
              <span className="live-dot"></span> Live Heritage Feed
            </span>
          </div>
          <p className="dashboard-page-subtitle">
            Explore Malabar's living coast, discover landmark coordinates, and start cultural challenges.
          </p>
        </header>

        <div className="demo-journey-grid">
          {/* Sidebar / Destinations list (matching schedule list style) */}
          <aside className="demo-journey-sidebar" aria-label="Destinations list">
            <div className="sidebar-label-row">
              <span className="sidebar-label">Destinations</span>
              <span className="sidebar-count">{LOCATIONS.length} Places</span>
            </div>
            <div className="demo-locations-list" role="listbox" aria-label="Select a destination">
              {LOCATIONS.map(loc => (
                <button
                  key={loc.id}
                  role="option"
                  type="button"
                  aria-selected={selectedLocation.id === loc.id}
                  className={`demo-loc-item ${selectedLocation.id === loc.id ? "active" : ""}`}
                  onClick={() => setSelectedLocation(loc)}
                  aria-label={`Select ${loc.name}, ${loc.categoryLabel}`}
                >
                  <div className="demo-loc-thumb" aria-hidden="true">
                    <img 
                      referrerPolicy="no-referrer" 
                      src={loc.heroImage} 
                      alt="" 
                      loading="lazy" 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=300&q=80';
                      }}
                    />
                  </div>
                  <div className="demo-loc-meta">
                    <span className="demo-loc-name">{loc.name}</span>
                    <span className="demo-loc-cat">{loc.categoryLabel}</span>
                  </div>
                  {selectedLocation.id === loc.id && <ChevronRight size={15} className="demo-loc-arrow" aria-hidden="true" />}
                </button>
              ))}
            </div>
          </aside>

          {/* Main Dashboard Column */}
          <div className="demo-journey-main">
            {/* Top Visual Stadium-Style Card matching reference screen */}
            <div className="dashboard-visual-card">
              <div className="dashboard-hero-photo-wrap">
                <img
                  referrerPolicy="no-referrer"
                  src={selectedLocation.heroImage}
                  alt={`Photo of ${selectedLocation.name}`}
                  className="dashboard-hero-photo"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
              </div>

              {/* Attached Live Match Card matching reference image */}
              <div className="live-match-card">
                <div className="live-match-left">
                  <div className="live-status-pill">
                    <span className="live-badge-green">Live Landmark</span>
                    <span className="live-time-tag">Open Today</span>
                  </div>
                  <h3 className="live-landmark-name">{selectedLocation.name}</h3>
                  <p className="live-landmark-addr">
                    <MapPin size={12} className="text-olive" />
                    <span>{selectedLocation.address.split(",").slice(0, 2).join(", ")}</span>
                  </p>
                </div>

                <div className="live-match-right">
                  <span className="live-court-tag">{selectedLocation.categoryLabel}</span>
                  <div className="live-score-preview">
                    <Star size={15} className="text-gold fill-gold" />
                    <span className="score-main">{selectedLocation.rating}</span>
                    <span className="score-sub">({selectedLocation.reviewsCount})</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tournament State Card matching reference 3-column stats comparison */}
            <div className="tournament-state-card glass-panel" role="region" aria-label="Landmark State and Metrics">
              <div className="card-header-row">
                <h4 className="card-inner-title">Landmark State &amp; Details</h4>
                <span className="card-options-dots">•••</span>
              </div>

              <div className="state-metrics-table">
                <div className="metric-table-row">
                  <div className="metric-col left">
                    <span className="metric-val">{selectedLocation.bestTimeToVisit.split(" ")[0]}</span>
                    <span className="metric-lbl">Best Time</span>
                  </div>
                  <div className="metric-col center">
                    <span className="metric-mid-title">Timing &amp; Fee</span>
                  </div>
                  <div className="metric-col right">
                    <span className="metric-val">{selectedLocation.entryFee}</span>
                    <span className="metric-lbl">Entry</span>
                  </div>
                </div>

                <div className="metric-table-row">
                  <div className="metric-col left">
                    <span className="metric-val">{selectedLocation.rating} ★</span>
                    <span className="metric-lbl">Google Rating</span>
                  </div>
                  <div className="metric-col center">
                    <span className="metric-mid-title">Visitor Experience</span>
                  </div>
                  <div className="metric-col right">
                    <span className="metric-val">+{selectedLocation.quest?.xp || 100} XP</span>
                    <span className="metric-lbl">Quest Reward</span>
                  </div>
                </div>

                <div className="metric-table-row">
                  <div className="metric-col left">
                    <span className="metric-val">{selectedLocation.historicalEra || 'Heritage'}</span>
                    <span className="metric-lbl">Historical Era</span>
                  </div>
                  <div className="metric-col center">
                    <span className="metric-mid-title">Preservation &amp; Lore</span>
                  </div>
                  <div className="metric-col right">
                    <span className="metric-val">{selectedLocation.reviewsCount}</span>
                    <span className="metric-lbl">Reviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Landmark Narrative */}
            <div className="dashboard-about-card glass-panel">
              <div className="card-header-row">
                <div className="about-label-badge">
                  <Info size={13} className="text-olive" />
                  <span>About this Destination</span>
                </div>
              </div>
              <p className="dashboard-desc-text">{shortDesc}</p>
            </div>

            {/* Tactic Map Card matching reference screen */}
            <div className="tactic-map-card glass-panel" role="region" aria-label={`Tactic map of ${selectedLocation.name}`}>
              <div className="card-header-row">
                <div className="tactic-map-title-row">
                  <Compass size={15} className="text-olive" />
                  <h4 className="card-inner-title">Tactic Map &amp; Navigation</h4>
                </div>
                <span className="tactic-coords">{lat.toFixed(4)}°N, {lng.toFixed(4)}°E</span>
              </div>

              <div className="tactic-map-viewport">
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="260"
                  style={{ border: 0, borderRadius: "14px", display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Tactic map of ${selectedLocation.name}`}
                />
              </div>
            </div>

            {/* Dashboard Action Buttons matching reference style */}
            <div className="dashboard-actions-strip">
              <button
                type="button"
                className="btn-primary dashboard-btn"
                onClick={() => onOpenStory(selectedLocation)}
                aria-label={`Open story and audio guide for ${selectedLocation.name}`}
              >
                <Info size={16} aria-hidden="true" />
                <span>Story &amp; Audio Guide</span>
              </button>

              <button
                type="button"
                className="btn-secondary dashboard-btn"
                onClick={() => onOpenQuest(selectedLocation)}
                aria-label={`Start quest for ${selectedLocation.name}`}
              >
                <Award size={16} aria-hidden="true" />
                <span>Start Quest (+{selectedLocation.quest?.xp || 100} XP)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}