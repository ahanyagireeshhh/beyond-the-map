import React, { useState } from 'react';
import { 
  CATEGORIES, 
  LOCATIONS 
} from '../data/locations';
import { calculateDistanceKm, formatDistance, estimateTravelTime } from '../utils/geo';
import { 
  MapPin, 
  Navigation, 
  Star, 
  Clock, 
  Sparkles, 
  Camera, 
  BookOpen, 
  Search, 
  Filter, 
  Layers, 
  Eye,
  Award,
  ChevronRight
} from 'lucide-react';

export default function InteractiveMap({ 
  userOrigin, 
  selectedCategory, 
  setSelectedCategory,
  onOpenStory,
  onOpenQuest,
  onAskChatbot
}) {
  const [activeLocationId, setActiveLocationId] = useState(LOCATIONS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [mapViewMode, setMapViewMode] = useState('split'); // 'split' | 'map-only' | 'cards-only'

  // Filter locations by category and search
  const filteredLocations = LOCATIONS.filter((loc) => {
    let matchesCategory = false;
    if (selectedCategory === 'all') {
      matchesCategory = true;
    } else if (selectedCategory === 'must-try') {
      matchesCategory = loc.isMustTry === true;
    } else {
      matchesCategory = loc.category === selectedCategory;
    }

    const matchesSearch = searchQuery === '' || 
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Calculate distance for each location from userOrigin
  const locationsWithDistance = filteredLocations.map(loc => {
    const dist = calculateDistanceKm(
      userOrigin.coords.lat, 
      userOrigin.coords.lng, 
      loc.coordinates.lat, 
      loc.coordinates.lng
    );
    return { ...loc, distanceKm: dist, travelTime: estimateTravelTime(dist) };
  }).sort((a, b) => a.distanceKm - b.distanceKm);

  const activeLocation = LOCATIONS.find(l => l.id === activeLocationId) || LOCATIONS[0];
  const activeLocationDistance = calculateDistanceKm(
    userOrigin.coords.lat,
    userOrigin.coords.lng,
    activeLocation.coordinates.lat,
    activeLocation.coordinates.lng
  );
  const activeTravelInfo = estimateTravelTime(activeLocationDistance);

  // Google Map parameters for active location
  const mapLat = activeLocation.coordinates.lat;
  const mapLng = activeLocation.coordinates.lng;
  const mapSrc = `https://maps.google.com/maps?q=${mapLat},${mapLng}&z=15&output=embed`;

  return (
    <div className="interactive-map-section container">
      {/* Category Filter Pills & Search */}
      <div className="map-controls-panel glass-panel">
        <div className="search-and-stats">
          <div className="search-bar">
            <Search className="icon-sm text-muted" />
            <input 
              type="text" 
              placeholder="Search biryani, beaches, uru ship, halwa, monuments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="clear-btn" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>

          <div className="filter-stats-text">
            Showing <strong className="text-gold">{locationsWithDistance.length}</strong> destinations near <span className="text-cyan">{userOrigin.name}</span>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="category-scroll-strip">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-${cat.id}`}
                className={`category-pill-btn ${isSelected ? 'active' : ''}`}
                style={{ '--accent': cat.color }}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span className="cat-bullet" style={{ backgroundColor: cat.color }}></span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Map + Card Split Layout */}
      <div className="map-view-grid">
        {/* Left Side: Destination Cards Scroll */}
        <div className="locations-sidebar glass-panel">
          <div className="sidebar-header">
            <h3>Nearby Highlights</h3>
            <span className="badge-count">{locationsWithDistance.length} Found</span>
          </div>

          <div className="cards-scroll-container">
            {locationsWithDistance.map((loc) => {
              const isActive = loc.id === activeLocationId;
              return (
                <div
                  key={loc.id}
                  id={`card-${loc.id}`}
                  className={`destination-card ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveLocationId(loc.id)}
                >
                  <div className="card-thumb-wrap">
                    <img referrerPolicy="no-referrer" 
                      
                      src={loc.heroImage} 
                      alt={loc.name} 
                      className="card-thumb"
                      
                    />
                    <span className="card-dist-tag">{formatDistance(loc.distanceKm)}</span>
                  </div>

                  <div className="card-info">
                    <div className="card-meta">
                      <span className="card-cat-badge">{loc.categoryLabel}</span>
                      <div className="card-rating">
                        <Star className="icon-xs text-gold fill-gold" />
                        <span>{loc.rating}</span>
                      </div>
                    </div>

                    <h4 className="card-name">{loc.name}</h4>
                    <p className="card-malayalam">{loc.malayalamName}</p>
                    <p className="card-tagline">{loc.tagline}</p>

                    <div className="card-travel-row">
                      <span>🚶 {loc.travelTime.walk}</span>
                      <span>🛺 {loc.travelTime.auto}</span>
                    </div>

                    <div className="card-actions-row">
                      <button 
                        className="btn-card-action primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenStory(loc);
                        }}
                      >
                        <Eye className="icon-xs" />
                        <span>AR & Story</span>
                      </button>

                      <button 
                        className="btn-card-action secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenQuest(loc);
                        }}
                      >
                        <Award className="icon-xs" />
                        <span>Quest</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Google Map Container */}
        <div className="map-container-wrapper glass-panel">
          <div className="leaflet-map-element" style={{ width: '100%', height: '100%', borderRadius: '10px', overflow: 'hidden' }}>
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Google Map of ${activeLocation.name}`}
            />
          </div>

          {/* Floating Active Place Quick Inspector Drawer */}
          {activeLocation && (
            <div className="active-place-floating-drawer glass-panel animate-slide-up">
              <div className="drawer-inner">
                <div className="drawer-photo-wrap">
                  <img referrerPolicy="no-referrer" 
                    
                    src={activeLocation.heroImage} 
                    alt={activeLocation.name} 
                    className="drawer-img" 
                    
                  />
                  <span className="drawer-category-pill">{activeLocation.categoryLabel}</span>
                </div>

                <div className="drawer-content">
                  <div className="drawer-top-row">
                    <div>
                      <h3 className="drawer-title">{activeLocation.name}</h3>
                      <p className="drawer-malayalam">{activeLocation.malayalamName}</p>
                    </div>
                    <div className="drawer-distance-pill">
                      <Navigation className="icon-xs" />
                      <span>{formatDistance(activeLocationDistance)} from you</span>
                    </div>
                  </div>

                  <p className="drawer-era">🏛️ {activeLocation.historicalEra} • 🕒 {activeLocation.openHours}</p>

                  <div className="drawer-tags-wrap">
                    {activeLocation.tags.slice(0, 4).map((t, idx) => (
                      <span key={idx} className="drawer-tag">#{t}</span>
                    ))}
                  </div>

                  <div className="drawer-buttons-row">
                    <button 
                      id="btn-inspect-ar"
                      className="btn-drawer-primary"
                      onClick={() => onOpenStory(activeLocation)}
                    >
                      <Camera className="icon-sm" />
                      <span>Explore Monument AR & Story</span>
                    </button>

                    <button 
                      id="btn-inspect-quest"
                      className="btn-drawer-quest"
                      onClick={() => onOpenQuest(activeLocation)}
                    >
                      <Award className="icon-sm" />
                      <span>Solve Quest (+{activeLocation.quest.xp} XP)</span>
                    </button>

                    <button 
                      className="btn-drawer-chat"
                      onClick={() => onAskChatbot(`Tell me about ${activeLocation.name} and local recommendations nearby`)}
                      title="Ask AI Malabar Mitra about this place"
                    >
                      💬 Ask Mitra
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
