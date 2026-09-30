import React, { useState } from 'react';
import { LOCATIONS, CATEGORIES } from '../data/locations';
import { calculateDistanceKm, formatDistance, estimateTravelTime } from '../utils/geo';
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  Star, 
  ArrowRight, 
  Filter, 
  Sliders, 
  Eye, 
  Award, 
  Compass, 
  CheckCircle2,
  Navigation,
  Utensils,
  DollarSign,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Tag
} from 'lucide-react';

const NEED_PROFILES = [
  {
    id: 'food',
    icon: '🍛',
    title: 'Hungry for Malabar Flavors',
    subtitle: 'Craving authentic Dum Biryani, hot Halwa, or afternoon tea snacks',
    categoryMatch: ['food', 'shopping'],
    whyNowReason: 'Kozhikode food heritage is at its best with fresh Kaima rice dum and hot evening snacks.'
  },
  {
    id: 'must-try',
    icon: '⭐',
    title: 'Must-Try Places in Calicut',
    subtitle: 'The absolute iconic and unmissable landmarks celebrated by travelers worldwide',
    categoryMatch: ['must-try'],
    whyNowReason: 'These 8 locations define the soul, cuisine, and history of Calicut.'
  },
  {
    id: 'beaches',
    icon: '🌅',
    title: 'Catching Arabian Sunsets',
    subtitle: 'Want ocean waves, sea pier silhouettes, and sea breeze street snacks',
    categoryMatch: ['beaches', 'photography'],
    whyNowReason: 'The golden hour lighting across the old sea pier and beach walkway is breathtaking.'
  },
  {
    id: 'monuments',
    icon: '⚓',
    title: 'Deep Maritime History',
    subtitle: 'Looking for 1498 Vasco Da Gama landing sites and Zamorin royal heritage',
    categoryMatch: ['monuments', 'culture'],
    whyNowReason: 'Walk the very sands where the maritime spice trade reshaped modern civilization.'
  },
  {
    id: 'culture',
    icon: '⛵',
    title: 'Living Artisan Traditions',
    subtitle: 'Witness handcrafted wooden Uru ships, ancient mosques, and Vedic temples',
    categoryMatch: ['culture'],
    whyNowReason: 'Watch master Khalasis hand-shape ocean vessels using 1,500-year-old geometric memory.'
  },
  {
    id: 'nature',
    icon: '🌿',
    title: 'Green Nature & Trekking',
    subtitle: 'Breathe fresh air in mangrove wetlands or cascading Western Ghats waterfalls',
    categoryMatch: ['nature'],
    whyNowReason: 'Escape city bustle on elevated wooden boardwalks surrounded by rare flora and birds.'
  },
  {
    id: 'resting',
    icon: '🍃',
    title: 'Resting & Peaceful Shade',
    subtitle: 'Tired from walking; looking for tranquil royal ponds, shaded lawns, and benches',
    categoryMatch: ['resting', 'nature'],
    whyNowReason: 'Sit peacefully under royal rain trees listening to fountains and birds by Mananchira.'
  },
  {
    id: 'shopping',
    icon: '🍬',
    title: 'Sweets & Souvenir Shopping',
    subtitle: 'Browse authentic Kozhikodan Halwa, fresh coconut chips, spices, and handlooms',
    categoryMatch: ['shopping'],
    whyNowReason: 'Pedestrianized SM Street is packed with fresh hot tasting samples and festive energy.'
  }
];

export default function NeedRecommender({ 
  userOrigin, 
  onSelectOnMap, 
  onOpenStory, 
  onOpenQuest,
  initialNeedId = 'food'
}) {
  const [selectedNeedId, setSelectedNeedId] = useState(initialNeedId);
  const [maxRadiusKm, setMaxRadiusKm] = useState(25);
  const [foodSortBy, setFoodSortBy] = useState('reviews'); // 'reviews' | 'rating' | 'price-low' | 'distance'
  const [foodBudgetFilter, setFoodBudgetFilter] = useState('all'); // 'all' | 'budget' | 'moderate'
  const [expandedMenuLocId, setExpandedMenuLocId] = useState(null);

  const activeNeed = NEED_PROFILES.find(n => n.id === selectedNeedId) || NEED_PROFILES[0];
  const isFoodOrMustTry = selectedNeedId === 'food' || selectedNeedId === 'must-try';

  // Calculate and filter matching recommendations
  let recommendedPlaces = LOCATIONS.map(loc => {
    const distance = calculateDistanceKm(
      userOrigin.coords.lat,
      userOrigin.coords.lng,
      loc.coordinates.lat,
      loc.coordinates.lng
    );

    // Relevance score calculation
    let isCategoryMatch = false;
    if (activeNeed.id === 'must-try') {
      isCategoryMatch = loc.isMustTry === true;
    } else {
      isCategoryMatch = activeNeed.categoryMatch.includes(loc.category) || (activeNeed.id === 'food' && (loc.category === 'food' || loc.category === 'shopping'));
    }

    let matchScore = isCategoryMatch ? 100 : 20;

    // Boost by reviews and rating
    matchScore += (loc.rating * 10);
    matchScore += Math.min(30, (loc.reviewsCount / 200));

    // Proximity boost
    if (distance <= 3) matchScore += 30;
    else if (distance <= 8) matchScore += 18;
    else if (distance <= 20) matchScore += 10;

    return {
      ...loc,
      distanceKm: distance,
      travelTime: estimateTravelTime(distance),
      matchScore
    };
  })
  .filter(loc => {
    const withinDistance = loc.distanceKm <= maxRadiusKm;
    if (!withinDistance) return false;

    if (activeNeed.id === 'must-try') {
      return loc.isMustTry === true;
    }

    // Budget filter if active
    if (selectedNeedId === 'food' && foodBudgetFilter !== 'all') {
      if (foodBudgetFilter === 'budget' && loc.priceTier !== 'budget') return false;
      if (foodBudgetFilter === 'moderate' && loc.priceTier !== 'moderate') return false;
    }

    return true;
  });

  // Sorting
  if (selectedNeedId === 'food') {
    if (foodSortBy === 'reviews') {
      recommendedPlaces.sort((a, b) => b.reviewsCount - a.reviewsCount);
    } else if (foodSortBy === 'rating') {
      recommendedPlaces.sort((a, b) => b.rating - a.rating);
    } else if (foodSortBy === 'price-low') {
      recommendedPlaces.sort((a, b) => (a.priceTier === 'budget' ? -1 : 1));
    } else {
      recommendedPlaces.sort((a, b) => a.distanceKm - b.distanceKm);
    }
  } else {
    recommendedPlaces.sort((a, b) => b.matchScore - a.matchScore);
  }

  const toggleMenuDrawer = (locId) => {
    setExpandedMenuLocId(prev => prev === locId ? null : locId);
  };

  return (
    <section className="need-recommender-section container" aria-label="Smart Travel and Food Recommendations">
      <div className="section-header-centered">
        <div className="badge-pill-cyan">
          <Sparkles className="icon-xs" />
          <span>Personalized Malabar Travel Intelligence</span>
        </div>
        <h2 className="section-title">What Do You Feel Like Experiencing Right Now?</h2>
        <p className="section-subtitle">
          Select your current mood, food preference, or budget. We recommend the finest places in Calicut 
          ranked by traveler reviews and proximity to <strong className="text-cyan">{userOrigin.name}</strong>.
        </p>
      </div>

      {/* Interactive Need Mood Selector Grid */}
      <div className="need-cards-grid" role="group" aria-label="Travel Mood and Food Options">
        {NEED_PROFILES.map((need) => {
          const isSelected = selectedNeedId === need.id;
          return (
            <button
              type="button"
              key={need.id}
              id={`need-${need.id}`}
              className={`need-card ${isSelected ? 'selected' : ''}`}
              onClick={() => setSelectedNeedId(need.id)}
              aria-pressed={isSelected}
              aria-label={`${need.title}: ${need.subtitle}`}
            >
              <div className="need-icon-bubble">{need.icon}</div>
              <h4 className="need-title">{need.title}</h4>
              <p className="need-subtitle">{need.subtitle}</p>
              {isSelected && (
                <div className="selected-indicator">
                  <CheckCircle2 className="icon-xs" />
                  <span>Selected</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Food-Specific Controls: Reviews Suggestion & Price Filtering */}
      {selectedNeedId === 'food' && (
        <div className="food-recommendation-controls glass-panel animate-slide-up">
          <div className="food-controls-header">
            <div className="food-ctrl-title">
              <Utensils className="icon-sm text-gold" />
              <div>
                <strong>Food Spots Suggested by Traveler Reviews & Price</strong>
                <p>Filter by review popularity or select food spots knowing exact dish prices</p>
              </div>
            </div>

            {/* Sort by Reviews / Rating / Price */}
            <div className="food-sort-group">
              <span className="sort-label">Sort By:</span>
              <button 
                className={`sort-pill ${foodSortBy === 'reviews' ? 'active' : ''}`}
                onClick={() => setFoodSortBy('reviews')}
              >
                ★ Most Reviewed
              </button>
              <button 
                className={`sort-pill ${foodSortBy === 'rating' ? 'active' : ''}`}
                onClick={() => setFoodSortBy('rating')}
              >
                Top Rated (4.8+)
              </button>
              <button 
                className={`sort-pill ${foodSortBy === 'price-low' ? 'active' : ''}`}
                onClick={() => setFoodSortBy('price-low')}
              >
                Budget Friendly
              </button>
              <button 
                className={`sort-pill ${foodSortBy === 'distance' ? 'active' : ''}`}
                onClick={() => setFoodSortBy('distance')}
              >
                Closest to Me
              </button>
            </div>
          </div>

          {/* Price Category Selection */}
          <div className="price-budget-strip">
            <span className="budget-label"><DollarSign className="icon-xs text-gold" /> Price of Food Filter:</span>
            <div className="budget-buttons">
              <button 
                className={`budget-btn ${foodBudgetFilter === 'all' ? 'active' : ''}`}
                onClick={() => setFoodBudgetFilter('all')}
              >
                All Price Tiers
              </button>
              <button 
                className={`budget-btn ${foodBudgetFilter === 'budget' ? 'active' : ''}`}
                onClick={() => setFoodBudgetFilter('budget')}
              >
                ₹ Budget & Snacks (Under ₹200)
              </button>
              <button 
                className={`budget-btn ${foodBudgetFilter === 'moderate' ? 'active' : ''}`}
                onClick={() => setFoodBudgetFilter('moderate')}
              >
                ₹₹ Legendary Dining (₹200 - ₹500)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Distance Filter Bar */}
      <div className="radius-filter-bar glass-panel">
        <div className="radius-label-group">
          <Sliders className="icon-sm text-gold" />
          <div>
            <span className="radius-title">Maximum Distance: <strong>{maxRadiusKm} km</strong></span>
            <span className="radius-sub">Filters locations reachable within your travel time</span>
          </div>
        </div>

        <div className="radius-presets">
          {[3, 8, 15, 30, 60].map((radius) => (
            <button
              key={radius}
              className={`preset-btn ${maxRadiusKm === radius ? 'active' : ''}`}
              onClick={() => setMaxRadiusKm(radius)}
            >
              {radius <= 3 ? 'Walking (<3km)' : `${radius} km`}
            </button>
          ))}
        </div>
      </div>

      {/* Recommended Results Deck */}
      <div className="recommendations-results-wrapper">
        <div className="results-header-row">
          <div>
            <h3>
              Top Recommendations for <span className="text-gold">"{activeNeed.title}"</span>
            </h3>
            <p className="why-visit-badge">
              💡 <em>{activeNeed.whyNowReason}</em>
            </p>
          </div>
          <span className="results-count-tag">{recommendedPlaces.length} places match</span>
        </div>

        <div className="recommendations-deck-grid">
          {recommendedPlaces.map((place, idx) => {
            const isMenuExpanded = expandedMenuLocId === place.id;
            return (
              <div key={place.id} className="recommendation-card glass-panel animate-fade-in">
                {/* Card Image with reliable fallback */}
                <div className="rec-card-image-wrap">
                  <img referrerPolicy="no-referrer" 
                    src={place.heroImage} 
                    alt={place.name} 
                    className="rec-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=80';
                    }}
                  />
                  <div className="rec-dist-badge">
                    <Navigation className="icon-xs" />
                    <span>{formatDistance(place.distanceKm)}</span>
                  </div>
                  {place.isMustTry && (
                    <span className="rec-top-pick">⭐ Must-Try Landmark</span>
                  )}
                </div>

                <div className="rec-body">
                  <div className="rec-category-row">
                    <span className="rec-cat-tag">{place.categoryLabel}</span>
                    <div className="rec-rating">
                      <Star className="icon-xs text-gold fill-gold" />
                      <strong>{place.rating}</strong>
                      <span className="text-muted">({place.reviewsCount} reviews)</span>
                    </div>
                  </div>

                  <h4 className="rec-name">{place.name}</h4>
                  <p className="rec-malayalam">{place.malayalamName}</p>
                  <p className="rec-tagline">{place.tagline}</p>

                  {/* PRICE OF FOOD BADGE */}
                  {place.priceRange && (
                    <div className="food-price-badge-banner">
                      <div className="price-tag-wrap">
                        <Tag className="icon-xs text-gold" />
                        <span className="price-bold">{place.priceRange}</span>
                      </div>
                      <span className="approx-cost">Approx: {place.approxCostForTwo}</span>
                    </div>
                  )}

                  <div className="rec-travel-pill">
                    <span>🚗 {place.travelTime.auto}</span>
                    <span>•</span>
                    <span>Est. Auto Fare: {place.travelTime.approxAutoFare}</span>
                  </div>

                  {/* TOP TRAVELER REVIEWS SECTION - Suggesting spots through reviews */}
                  {place.reviews && place.reviews.length > 0 && (
                    <div className="rec-reviews-quote-box" role="region" aria-label={`Traveler review recommendation for ${place.name}`}>
                      <div className="review-quote-header">
                        <MessageSquare className="icon-xs text-gold" />
                        <span><strong>Suggested by Traveler Reviews:</strong></span>
                        <div className="review-stars-mini" aria-label={`${place.reviews[0].rating} out of 5 stars`}>
                          {[...Array(place.reviews[0].rating)].map((_, rIdx) => (
                            <Star key={rIdx} className="icon-xxs text-gold fill-gold" />
                          ))}
                        </div>
                      </div>
                      <blockquote className="review-quote-text">
                        "{place.reviews[0].comment}"
                      </blockquote>
                      <div className="reviewer-author-row">
                        <span className="reviewer-author">— {place.reviews[0].author}</span>
                        <span className="reviewer-source-badge">✓ Verified ({place.reviews[0].source})</span>
                      </div>
                    </div>
                  )}

                  {/* SIGNATURE DISHES & MENU PRICES SECTION */}
                  {place.signatureDishes && place.signatureDishes.length > 0 && (
                    <div className="signature-menu-section">
                      <div className="menu-card-header-badge">
                        <span className="menu-card-pill">📜 Menu Card & Food Prices</span>
                        <span className="dish-top-preview">
                          Top Pick: <strong>{place.signatureDishes[0].name}</strong> ({place.signatureDishes[0].price})
                        </span>
                      </div>

                      <button 
                        className="btn-toggle-menu-prices"
                        onClick={() => toggleMenuDrawer(place.id)}
                      >
                        <Utensils className="icon-xs text-gold" />
                        <span>{isMenuExpanded ? 'Hide Food Prices & Menu Card' : `View Full Menu Card & Dish Prices (${place.signatureDishes.length} Items)`}</span>
                        {isMenuExpanded ? <ChevronUp className="icon-xs" /> : <ChevronDown className="icon-xs" />}
                      </button>

                      {isMenuExpanded && (
                        <div className="menu-dishes-table animate-slide-up">
                          <div className="menu-table-caption">
                            <span>Official Menu Card Prices</span>
                            <span className="menu-sub-note">Prices verified with restaurant</span>
                          </div>
                          {place.signatureDishes.map((dish, dIdx) => (
                            <div key={dIdx} className="dish-row">
                              <div className="dish-info">
                                <strong className="dish-name">{dish.name}</strong>
                                <p className="dish-desc">{dish.desc}</p>
                              </div>
                              <span className="dish-price-tag">{dish.price}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="rec-highlights">
                    <strong className="hl-label">Landmark Highlights:</strong>
                    <ul className="hl-list">
                      {place.mustTryOrSee.slice(0, 2).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rec-card-footer">
                    <button 
                      className="btn-rec-action view-map"
                      onClick={() => onSelectOnMap(place)}
                    >
                      <Compass className="icon-xs" />
                      <span>View on Map</span>
                    </button>

                    <button 
                      className="btn-rec-action ar-story"
                      onClick={() => onOpenStory(place)}
                    >
                      <Eye className="icon-xs" />
                      <span>AR Story</span>
                    </button>

                    <button 
                      className="btn-rec-action quest"
                      onClick={() => onOpenQuest(place)}
                      title={`Solve Quest for +${place.quest.xp} XP`}
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
    </section>
  );
}
