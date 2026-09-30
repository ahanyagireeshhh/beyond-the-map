import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  Clock, 
  Award, 
  Layers, 
  Camera, 
  Compass, 
  BookOpen, 
  Info, 
  Share2,
  CheckCircle2,
  ExternalLink,
  MapPin
} from 'lucide-react';
import { soundFx } from '../utils/sound';

export default function StoryARModal({ 
  location, 
  isOpen, 
  onClose, 
  onLaunchQuest,
  onRecordVisited 
}) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [selectedTimeTravelIndex, setSelectedTimeTravelIndex] = useState(1);
  const [activeHotspot, setActiveHotspot] = useState(null);

  const speechRef = useRef(null);

  useEffect(() => {
    if (isOpen && location) {
      onRecordVisited?.(location.id);
      setActiveHotspot(location.arExperience?.hotspots?.[0] || null);
    } else {
      stopAudio();
    }

    return () => {
      stopAudio();
    };
  }, [isOpen, location]);

  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      stopAudio();
    } else {
      playAudio();
    }
  };

  const playAudio = () => {
    stopAudio();
    if (!('speechSynthesis' in window)) return;

    const textToSpeak = selectedLanguage === 'malayalam'
      ? location.audioNarration.malayalamSummary
      : location.audioNarration.english;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      setIsPlayingAudio(false);
      soundFx.stopAmbientOcean();
    };

    utterance.onerror = () => {
      setIsPlayingAudio(false);
      soundFx.stopAmbientOcean();
    };

    speechRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);

    // If beach or river, start ambient ocean sound
    if (location.category === 'beaches' || location.id === 'kallayi-river') {
      soundFx.startAmbientOcean();
    }
  };

  const stopAudio = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    soundFx.stopAmbientOcean();
    setIsPlayingAudio(false);
  };

  if (!isOpen || !location) return null;

  const currentEraYear = location.arExperience?.timeTravelYears?.[selectedTimeTravelIndex] || 'Present Day';
  const currentEraDesc = location.arExperience?.timeTravelDescriptions?.[selectedTimeTravelIndex] || '';

  // Shorten narration to 2 sentences
  const shortNarration = location.audioNarration.english
    .split('.')
    .slice(0, 2)
    .join('.')
    .trim() + '.';

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div className="modal-card story-ar-modal glass-panel animate-scale-up" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="story-modal-header">
          <div className="story-header-info">
            <span className="story-category-tag" aria-hidden="true">{location.categoryLabel}</span>
            <h2 id="story-modal-title">{location.name}</h2>
            <p className="story-malayalam-script" lang="ml" aria-label={`Malayalam name: ${location.malayalamName}`}>{location.malayalamName}</p>
          </div>

          <div className="story-header-actions">
            <button className="modal-close-btn" onClick={onClose} aria-label="Close story modal">
              <X className="icon-sm" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="story-modal-body">
          {/* PLACE PHOTO VIEWPORT */}
          <div className="ar-viewport-section">
            <div className="ar-canvas-container ar-monument-container">
              {/* Place Photo */}
              <div className="ar-monument-photo-wrapper">
                <img referrerPolicy="no-referrer" 
                  
                  src={location.heroImage} 
                  alt={`Photo of ${location.name}`}
                  className="ar-monument-photo" />
                <div className="ar-monument-overlay-gradient" aria-hidden="true"></div>
              </div>

              {/* Photo Caption Overlay */}
              <div className="ar-hud-overlay" aria-hidden="true">
                <div className="ar-hud-title">
                  <Sparkles className="icon-xs text-gold animate-spin-slow" />
                  <span>{location.name}</span>
                </div>
                <div className="ar-compass-rose">
                  <Compass className="icon-sm text-cyan animate-pulse" />
                  <span>{location.historicalEra || 'Heritage Landmark'}</span>
                </div>
              </div>

              {/* Interactive Hotspot Buttons */}
              <div className="ar-hotspots-layer" role="group" aria-label="Point of interest hotspots">
                {location.arExperience?.hotspots?.map((spot, idx) => (
                  <button
                    key={idx}
                    className={`ar-hotspot-pin ${activeHotspot?.title === spot.title ? 'active' : ''}`}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    onClick={() => setActiveHotspot(spot)}
                    aria-label={`Hotspot ${idx + 1}: ${spot.title}`}
                    aria-pressed={activeHotspot?.title === spot.title}
                  >
                    <span className="hotspot-pulse" aria-hidden="true"></span>
                    <span className="hotspot-number" aria-hidden="true">{idx + 1}</span>
                    <span className="hotspot-label-pill" aria-hidden="true">{spot.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Hotspot Detail Card */}
            {activeHotspot && (
              <div className="active-hotspot-card glass-panel animate-slide-up">
                <div className="hotspot-card-title">
                  <Info className="icon-xs text-gold" />
                  <strong>Monument Detail: {activeHotspot.title}</strong>
                </div>
                <p>{activeHotspot.text}</p>
              </div>
            )}

            {/* Time Travel Slider Component */}
            {location.arExperience?.timeTravelYears && (
              <div className="time-travel-slider-card glass-panel">
                <div className="slider-header-row">
                  <div className="slider-label-group">
                    <Clock className="icon-xs text-gold" />
                    <span>Historical Time Travel Simulator:</span>
                  </div>
                  <span className="active-year-badge">{currentEraYear}</span>
                </div>

                <div className="time-slider-track">
                  {location.arExperience.timeTravelYears.map((year, idx) => (
                    <button
                      key={idx}
                      className={`time-step-btn ${selectedTimeTravelIndex === idx ? 'active' : ''}`}
                      onClick={() => setSelectedTimeTravelIndex(idx)}
                    >
                      <span className="step-circle"></span>
                      <span className="step-label">{year}</span>
                    </button>
                  ))}
                </div>

                <p className="era-description-text">
                  <em>{currentEraDesc}</em>
                </p>
              </div>
            )}
          </div>
          {/* AUDIO NARRATOR SECTION */}
          <div className="audio-narrator-card glass-panel">
            <div className="narrator-left">
              <button 
                id="btn-play-story-audio"
                className={`audio-playback-btn ${isPlayingAudio ? 'playing' : ''}`}
                onClick={handleToggleAudio}
              >
                {isPlayingAudio ? <Pause className="icon-sm" /> : <Play className="icon-sm" />}
              </button>

              <div className="narrator-info">
                <h4>Malabar Audio Guide</h4>
                <p>
                  {isPlayingAudio 
                    ? 'Narrating living history with ambient acoustics...' 
                    : 'Listen to the immersive story of this landmark'}
                </p>
              </div>
            </div>

            <div className="narrator-controls-right">
              {/* Language Switcher */}
              <div className="lang-pill-selector">
                <button 
                  className={`lang-btn ${selectedLanguage === 'english' ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedLanguage('english');
                    if (isPlayingAudio) playAudio();
                  }}
                >
                  English
                </button>
                <button 
                  className={`lang-btn ${selectedLanguage === 'malayalam' ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedLanguage('malayalam');
                    if (isPlayingAudio) playAudio();
                  }}
                >
                  മലയാളം
                </button>
              </div>

              {isPlayingAudio && (
                <div className="audio-equalizer-bars">
                  <span className="bar b1"></span>
                  <span className="bar b2"></span>
                  <span className="bar b3"></span>
                  <span className="bar b4"></span>
                </div>
              )}
            </div>
          </div>

          {/* STORY & FACTS SECTION */}
          <div className="story-details-grid">
            <div className="story-article-card glass-panel">
              <div className="article-title-row">
                <BookOpen className="icon-sm text-gold" />
                <h3>Living Heritage & Cultural Tale</h3>
              </div>
              <p className="lead-narration-paragraph">
                {shortNarration}
              </p>

              <div className="must-see-box">
                <h4>⭐ Landmark Highlights & What to Look For:</h4>
                <ul className="must-see-checklist">
                  {location.mustTryOrSee.map((item, i) => (
                    <li key={i}>
                      <CheckCircle2 className="icon-xs text-green" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Side column: Facts & Travel Info */}
            <div className="story-sidebar-column">
              <div className="facts-card glass-panel">
                <div className="facts-title-row">
                  <Sparkles className="icon-xs text-amber" />
                  <h4>Key Facts</h4>
                </div>
                <ul className="facts-list">
                  {location.facts.slice(0, 3).map((fact, idx) => (
                    <li key={idx}>{fact}</li>
                  ))}
                </ul>
              </div>

              <div className="travel-tips-card glass-panel">
                <h4>📍 Visitor Info</h4>
                <div className="tip-row">
                  <strong>Best Time:</strong> <span>{location.bestTimeToVisit}</span>
                </div>
                <div className="tip-row">
                  <strong>Hours:</strong> <span>{location.openHours}</span>
                </div>
                <div className="tip-row">
                  <strong>Entry:</strong> <span>{location.entryFee}</span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM GAMIFIED QUEST BANNER */}
          <div className="quest-cta-banner glass-panel">
            <div className="quest-cta-content">
              <div className="quest-icon-bubble">
                <Award className="icon-md text-gold animate-bounce" />
              </div>
              <div>
                <h3>Location Quest: "{location.quest.title}"</h3>
                <p>{location.quest.storyPrompt}</p>
                <div className="quest-reward-tag">
                  <span>🏆 Reward: +{location.quest.xp} XP & Explorer Badges</span>
                </div>
              </div>
            </div>

            <button 
              id="btn-start-location-quest"
              className="btn-primary start-quest-btn"
              onClick={() => {
                onClose();
                onLaunchQuest(location);
              }}
            >
              <span>Accept Quest Challenge</span>
              <Award className="icon-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
