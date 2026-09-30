import React from 'react';
import { 
  Compass, 
  Sparkles, 
  Camera, 
  Award, 
  User, 
  MessageSquare, 
  Flame, 
  Volume2, 
  VolumeX, 
  UserCheck, 
  Navigation,
  LayoutGrid,
  Search,
  Bell
} from 'lucide-react';
import { getRankFromXp } from '../data/badges';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  xp, 
  onOpenScanner, 
  onToggleChat, 
  onStartDemoTour,
  isChatOpen,
  isSoundMuted,
  onToggleSound
}) {
  const currentRank = getRankFromXp(xp);

  const navItems = [
    { id: 'demojourney', label: 'Dashboard', icon: LayoutGrid },
    { id: 'explore', label: 'Map', icon: Compass },
    { id: 'recommend', label: 'Recommend', icon: Sparkles },
    { id: 'quests', label: 'Quests', icon: Award },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <>
      <header className="sticky-header">
        <div className="header-inner container">
          {/* Brand Identity - Matching reference screen logo style */}
          <div className="brand" onClick={() => setActiveTab('demojourney')}>
            <div className="brand-dot-logo">
              <span className="brand-red-dot">🔴</span>
            </div>
            <div className="brand-text">
              <div className="brand-title">
                Explore <span className="brand-highlight">Kozhikode</span>
              </div>
              <div className="brand-subtitle">
                <span>കോഴിക്കോട്</span> • Travel &amp; Heritage
              </div>
            </div>
          </div>

          {/* Center Category Switcher for Desktop */}
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="icon-sm" aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* Special Scanner Button */}
            <button 
              id="nav-scanner-btn"
              className="nav-link special-scanner-btn"
              onClick={onOpenScanner}
              title="Scan Monument with AR camera"
            >
              <Camera className="icon-sm" />
              <span>AR Scan</span>
            </button>
          </nav>

          {/* Action Controls - Matching reference top right icons */}
          <div className="header-actions">
            {/* Search Button */}
            <button 
              className="circular-header-btn" 
              onClick={() => setActiveTab('explore')}
              title="Search Places & Routes"
              aria-label="Search Places"
            >
              <Search className="icon-sm text-muted" />
            </button>

            {/* Sound Toggle */}
            <button 
              className="circular-header-btn"
              onClick={onToggleSound}
              title={isSoundMuted ? 'Enable sound effects' : 'Mute sound effects'}
              aria-label={isSoundMuted ? 'Enable sound effects' : 'Mute sound effects'}
            >
              {isSoundMuted ? <VolumeX className="icon-sm text-muted" aria-hidden="true" /> : <Volume2 className="icon-sm text-gold" aria-hidden="true" />}
            </button>

            {/* XP & Rank pill */}
            <div 
              className="header-xp-pill" 
              onClick={() => setActiveTab('profile')}
              title={`${xp} XP - ${currentRank.title}`}
              role="button"
              tabIndex={0}
              aria-label={`${xp} XP, rank: ${currentRank.title}`}
              onKeyDown={e => e.key === 'Enter' && setActiveTab('profile')}
            >
              <Flame className="icon-xs text-amber" aria-hidden="true" />
              <span className="xp-val">{xp} XP</span>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Pill Dock Navigation (Exact match to reference image bottom navigation) */}
      <nav className="floating-bottom-dock" aria-label="Bottom Quick Navigation">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              className={`dock-btn ${isActive ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className="dock-icon" size={19} />
              {isActive && <span className="dock-label">{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </>
  );
}
