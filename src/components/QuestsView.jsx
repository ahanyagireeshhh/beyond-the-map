import React, { useState } from 'react';
import { 
  Award, 
  Flame, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  Trophy,
  Filter,
  Calendar,
  Compass,
  MapPin,
  Play
} from 'lucide-react';
import { LOCATIONS } from '../data/locations';
import { BADGES } from '../data/badges';

export default function QuestsView({ 
  completedQuestIds = [], 
  onOpenQuest, 
  onOpenStory 
}) {
  const [filterTab, setFilterTab] = useState('upcoming'); // 'upcoming' (available) | 'live' | 'completed'

  const filteredLocations = LOCATIONS.filter(loc => {
    const isCompleted = completedQuestIds.includes(loc.id);
    if (filterTab === 'completed') return isCompleted;
    if (filterTab === 'upcoming') return !isCompleted;
    return true; // 'live' or all
  });

  return (
    <div className="schedule-view-section container animate-fade-in">
      {/* Screen Title matching Match Schedule */}
      <header className="schedule-header-block">
        <h1 className="schedule-page-title">Quest Schedule</h1>
        
        {/* Segmented Control: Upcoming | Live | Completed */}
        <div className="schedule-tabs-strip" role="tablist">
          <button 
            role="tab"
            aria-selected={filterTab === 'upcoming'}
            className={`schedule-tab-btn ${filterTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setFilterTab('upcoming')}
          >
            <span>Upcoming / Available</span>
            <span className="tab-count-pill">{LOCATIONS.length - completedQuestIds.length}</span>
          </button>
          
          <button 
            role="tab"
            aria-selected={filterTab === 'live'}
            className={`schedule-tab-btn ${filterTab === 'live' ? 'active' : ''}`}
            onClick={() => setFilterTab('live')}
          >
            <span>All Circuits</span>
            <span className="tab-count-pill">{LOCATIONS.length}</span>
          </button>

          <button 
            role="tab"
            aria-selected={filterTab === 'completed'}
            className={`schedule-tab-btn ${filterTab === 'completed' ? 'active' : ''}`}
            onClick={() => setFilterTab('completed')}
          >
            <span>Completed</span>
            <span className="tab-count-pill">{completedQuestIds.length}</span>
          </button>
        </div>

        {/* Date Filter Bar matching reference image */}
        <div className="schedule-filter-bar glass-panel">
          <div className="schedule-date-badge">
            <Calendar size={14} className="text-olive" />
            <span>Kozhikode Cultural Season 2026</span>
          </div>

          <div className="schedule-bar-actions">
            <button className="schedule-pill-btn" onClick={() => setFilterTab('live')}>
              <Filter size={13} />
              <span>Filter Circuits</span>
            </button>
            <div className="schedule-add-btn">
              <span>{completedQuestIds.length} / {LOCATIONS.length} Solved</span>
            </div>
          </div>
        </div>
      </header>

      {/* Grouped Match Section: "Sun, 28 Jun 2026 • 5 Matches v" style */}
      <div className="schedule-group-header">
        <span className="group-date-title">Historical Heritage Landmarks</span>
        <span className="group-count-tag">{filteredLocations.length} Quests</span>
      </div>

      {/* Match Cards List matching reference list layout */}
      <div className="schedule-cards-list">
        {filteredLocations.map((loc, idx) => {
          const isCompleted = completedQuestIds.includes(loc.id);
          const badgeReward = BADGES.find(b => b.locationId === loc.id);

          return (
            <div 
              key={loc.id} 
              id={`quest-row-${loc.id}`}
              className={`schedule-match-card glass-panel ${isCompleted ? 'completed-card' : ''}`}
            >
              {/* Left Column: Time & Status tag in olive green pill */}
              <div className="match-time-col">
                <span className="match-time-text">0{9 + (idx % 8)}:00 AM</span>
                <span className="match-court-sub">{loc.categoryLabel}</span>
                <span className={`match-status-pill ${isCompleted ? 'completed' : 'upcoming'}`}>
                  {isCompleted ? '✓ Mastered' : `+${loc.quest.xp} XP`}
                </span>
              </div>

              {/* Center Column: Landmark Avatar & Title */}
              <div className="match-competitors-col">
                <div className="match-player-wrap">
                  <div className="player-avatar-frame">
                    <img referrerPolicy="no-referrer" src={loc.heroImage} alt={loc.name} className="player-avatar-img" />
                  </div>
                  <div className="player-info-text">
                    <strong className="player-name">{loc.name}</strong>
                    <span className="player-rank-sub">{loc.historicalEra || 'Heritage Site'}</span>
                  </div>
                </div>

                <div className="match-vs-divider">
                  <span>vs</span>
                </div>

                <div className="match-player-wrap clue-side">
                  <div className="clue-icon-avatar">
                    <Sparkles size={16} className="text-olive" />
                  </div>
                  <div className="player-info-text">
                    <strong className="player-name">{loc.quest.title}</strong>
                    <span className="player-rank-sub">{loc.quest.clue.slice(0, 38)}...</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Challenge Stage & Action */}
              <div className="match-details-col">
                <span className="match-round-tag">
                  {badgeReward ? badgeReward.name : 'Zamorin Quest'}
                </span>
                <span className="match-format-sub">
                  {isCompleted ? '100% Score' : '3 Clues Challenge'}
                </span>

                <div className="match-actions-group">
                  <button 
                    type="button"
                    className="match-play-btn"
                    onClick={() => onOpenQuest(loc)}
                    aria-label={`Start quest for ${loc.name}`}
                  >
                    <span>{isCompleted ? 'Review' : 'Start'}</span>
                    <ChevronRight size={14} />
                  </button>

                  <button
                    type="button"
                    className="match-story-icon-btn"
                    onClick={() => onOpenStory(loc)}
                    title="Play Audio Story"
                    aria-label={`Listen to story of ${loc.name}`}
                  >
                    <Play size={12} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {filteredLocations.length === 0 && (
          <div className="empty-schedule-card glass-panel">
            <Trophy size={36} className="text-muted" />
            <h4>No Quests Found in this Filter</h4>
            <p>Try switching to "Upcoming" or "All Circuits" to see more challenges.</p>
          </div>
        )}
      </div>
    </div>
  );
}
