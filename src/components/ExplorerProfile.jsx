import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  Compass, 
  MapPin, 
  Flame, 
  CheckCircle2, 
  Lock, 
  Sparkles, 
  RotateCcw,
  Shield,
  Layers,
  ChevronRight,
  TrendingUp,
  BarChart3,
  Calendar,
  UserCheck
} from 'lucide-react';
import { BADGES, getRankFromXp } from '../data/badges';
import { LOCATIONS } from '../data/locations';

export default function ExplorerProfile({ 
  xp, 
  unlockedBadgeIds = [], 
  completedQuestIds = [], 
  visitedLocationIds = [],
  onOpenStory,
  onResetProgress 
}) {
  const [activeSubTab, setActiveSubTab] = useState('overview'); // 'overview' | 'stats' | 'badges' | 'passport'
  const currentRank = getRankFromXp(xp);

  const exploredPlaces = LOCATIONS.filter(l => visitedLocationIds.includes(l.id));
  const completedQuests = LOCATIONS.filter(l => completedQuestIds.includes(l.id));
  const completionRate = Math.round((visitedLocationIds.length / LOCATIONS.length) * 100);

  return (
    <div className="player-profile-section container animate-fade-in">
      {/* Screen Title matching reference design */}
      <header className="profile-page-header">
        <h1 className="profile-page-title">Player Profile</h1>
      </header>

      {/* Profile Card matching Screen 3 Header in reference image */}
      <div className="player-header-card glass-panel">
        <div className="player-identity-row">
          <div className="player-avatar-circle">
            <span className="player-avatar-emoji">👳🏽‍♂️</span>
            <span className="player-online-badge"></span>
          </div>

          <div className="player-title-info">
            <h2 className="player-display-name">Carlos Alcaraz / Malabar Voyager</h2>
            <p className="player-sub-meta">
              <span>Kerala • Level {currentRank.level} • Heritage Explorer • Malabar Coast</span>
            </p>
          </div>
        </div>

        {/* 5-Metric Strip matching reference image exactly */}
        <div className="player-metric-strip">
          <div className="metric-strip-box">
            <span className="metric-strip-label">Level</span>
            <strong className="metric-strip-val">{currentRank.level}</strong>
          </div>
          <div className="metric-strip-box">
            <span className="metric-strip-label">Badges</span>
            <strong className="metric-strip-val">{unlockedBadgeIds.length}</strong>
          </div>
          <div className="metric-strip-box">
            <span className="metric-strip-label">Quests</span>
            <strong className="metric-strip-val">{completedQuestIds.length}</strong>
          </div>
          <div className="metric-strip-box">
            <span className="metric-strip-label">Total XP</span>
            <strong className="metric-strip-val text-olive">{xp}</strong>
          </div>
          <div className="metric-strip-box">
            <span className="metric-strip-label">Visited</span>
            <strong className="metric-strip-val">{visitedLocationIds.length}/{LOCATIONS.length}</strong>
          </div>
        </div>
      </div>

      {/* Segmented Sub-Tabs matching reference (Overview | Stats | Badges | Charts) */}
      <div className="profile-subtabs-strip glass-panel">
        {[
          { id: 'overview', label: 'Overview', icon: Layers },
          { id: 'stats', label: 'Stats', icon: BarChart3 },
          { id: 'badges', label: 'Badges', icon: Trophy },
          { id: 'passport', label: 'Passport', icon: Compass }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              className={`profile-subtab-btn ${isActive ? 'active' : ''}`}
              onClick={() => setActiveSubTab(tab.id)}
            >
              <Icon size={14} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 2x2 Stats Card matching reference image */}
      {(activeSubTab === 'overview' || activeSubTab === 'stats') && (
        <div className="stats-comparison-grid glass-panel">
          <div className="stat-grid-cell">
            <span className="stat-cell-label">Total Heritage XP</span>
            <div className="stat-cell-main-val text-olive">{xp}</div>
            <span className="stat-cell-sub">+{Math.round(xp / Math.max(1, completedQuestIds.length))} avg/quest</span>
          </div>

          <div className="stat-grid-cell">
            <span className="stat-cell-label">Clues Mastered</span>
            <div className="stat-cell-main-val">{completedQuestIds.length * 3}</div>
            <span className="stat-cell-sub">{completedQuestIds.length} quests completed</span>
          </div>

          <div className="stat-grid-cell">
            <span className="stat-cell-label">Passport Completion</span>
            <div className="stat-cell-main-val">{completionRate}%</div>
            <span className="stat-cell-sub">{visitedLocationIds.length} of {LOCATIONS.length} spots visited</span>
          </div>

          <div className="stat-grid-cell">
            <span className="stat-cell-label">Badges Unlocked</span>
            <div className="stat-cell-main-val">{unlockedBadgeIds.length}</div>
            <span className="stat-cell-sub">{BADGES.length - unlockedBadgeIds.length} remaining to unlock</span>
          </div>
        </div>
      )}

      {/* Win Rate / Exploration Progress Chart matching reference image */}
      {(activeSubTab === 'overview' || activeSubTab === 'stats') && (
        <div className="progress-chart-card glass-panel">
          <div className="chart-header-row">
            <div>
              <h4 className="chart-title">Exploration Progress over Time</h4>
              <p className="chart-sub">XP milestones and cultural discoveries</p>
            </div>
            <span className="chart-period-badge">Monthly ▾</span>
          </div>

          {/* SVG Smooth Curve Area Chart */}
          <div className="chart-svg-wrap">
            <svg viewBox="0 0 500 180" className="trend-svg-chart">
              <defs>
                <linearGradient id="oliveGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5d7a3a" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#5d7a3a" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="40" y1="30" x2="480" y2="30" stroke="#e5e7eb" strokeDasharray="3 3" />
              <line x1="40" y1="70" x2="480" y2="70" stroke="#e5e7eb" strokeDasharray="3 3" />
              <line x1="40" y1="110" x2="480" y2="110" stroke="#e5e7eb" strokeDasharray="3 3" />
              <line x1="40" y1="150" x2="480" y2="150" stroke="#e5e7eb" strokeWidth="1" />

              {/* Y Axis Labels */}
              <text x="10" y="35" fontSize="10" fill="#9ca3af">100%</text>
              <text x="10" y="75" fontSize="10" fill="#9ca3af">75%</text>
              <text x="10" y="115" fontSize="10" fill="#9ca3af">50%</text>
              <text x="10" y="155" fontSize="10" fill="#9ca3af">25%</text>

              {/* Chart Filled Area */}
              <path
                d="M 50 145 C 90 140, 110 90, 150 95 C 190 100, 210 135, 250 85 C 290 35, 330 140, 370 120 C 400 105, 430 45, 470 40 L 470 150 L 50 150 Z"
                fill="url(#oliveGradient)"
              />

              {/* Chart Line Curve */}
              <path
                d="M 50 145 C 90 140, 110 90, 150 95 C 190 100, 210 135, 250 85 C 290 35, 330 140, 370 120 C 400 105, 430 45, 470 40"
                fill="none"
                stroke="#5d7a3a"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Vertical Dashed Marker Line matching reference */}
              <line x1="370" y1="30" x2="370" y2="150" stroke="#5d7a3a" strokeDasharray="3 3" strokeWidth="1.5" />
              <circle cx="370" cy="120" r="5" fill="#ffffff" stroke="#5d7a3a" strokeWidth="3" />
            </svg>

            {/* Tooltip Card matching reference image */}
            <div className="chart-tooltip-box glass-panel">
              <span className="tooltip-date">Sep 2026</span>
              <div className="tooltip-row">
                <span className="tooltip-lbl">Exp. Rate:</span>
                <strong className="tooltip-val">{completionRate}%</strong>
              </div>
              <div className="tooltip-row">
                <span className="tooltip-lbl">XP Earned:</span>
                <strong className="tooltip-val text-olive">{xp}</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Badges Showcase Tab */}
      {(activeSubTab === 'overview' || activeSubTab === 'badges') && (
        <div className="badges-showcase-section glass-panel">
          <div className="section-title-wrap">
            <Trophy size={18} className="text-olive" />
            <h3 className="section-card-title">Unlocked Cultural Badges &amp; Honors</h3>
            <span className="section-stat-pill">{unlockedBadgeIds.length} / {BADGES.length}</span>
          </div>

          <div className="badges-grid-stream">
            {BADGES.map(badge => {
              const isUnlocked = unlockedBadgeIds.includes(badge.id);
              return (
                <div key={badge.id} className={`badge-capsule-card ${isUnlocked ? 'unlocked' : 'locked'}`}>
                  <div className="badge-stamp-icon" style={{ borderColor: isUnlocked ? badge.color : '#e5e7eb' }}>
                    <span>{badge.icon}</span>
                  </div>
                  <div className="badge-meta">
                    <strong className="badge-name">{badge.name}</strong>
                    <span className="badge-tier">{badge.tier} Tier</span>
                    <p className="badge-desc">{badge.description}</p>
                  </div>
                  {isUnlocked ? (
                    <span className="badge-status-tag unlocked">✓ Unlocked</span>
                  ) : (
                    <span className="badge-status-tag locked">🔒 Locked</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Digital Travel Passport Tab */}
      {(activeSubTab === 'overview' || activeSubTab === 'passport') && (
        <div className="passport-stamps-card glass-panel">
          <div className="section-title-wrap">
            <Compass size={18} className="text-olive" />
            <h3 className="section-card-title">Digital Travel Passport Stamps</h3>
            <span className="section-stat-pill">{visitedLocationIds.length} Visited</span>
          </div>

          <div className="stamps-grid-wrap">
            {LOCATIONS.map(loc => {
              const isVisited = visitedLocationIds.includes(loc.id);
              return (
                <div 
                  key={loc.id} 
                  className={`stamp-item-card ${isVisited ? 'visited' : 'unvisited'}`}
                  onClick={() => onOpenStory && onOpenStory(loc)}
                >
                  <div className="stamp-seal-badge">
                    <span>{isVisited ? '🏛️' : '🔒'}</span>
                  </div>
                  <strong className="stamp-loc-title">{loc.name}</strong>
                  <span className="stamp-loc-era">{loc.historicalEra || 'Heritage Site'}</span>
                  {isVisited && <span className="stamp-verified-pill">✓ Verified Visit</span>}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Reset Progress Subtle Action */}
      <div className="profile-reset-strip">
        <button 
          className="btn-reset-subtle"
          onClick={onResetProgress}
          title="Reset your explorer badges and progress to initial state"
        >
          <RotateCcw size={13} />
          <span>Reset Demo Explorer Data</span>
        </button>
      </div>
    </div>
  );
}
