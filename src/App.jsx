import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import InteractiveMap from './components/InteractiveMap';
import NeedRecommender from './components/NeedRecommender';
import ScannerModal from './components/ScannerModal';
import StoryARModal from './components/StoryARModal';
import QuestModal from './components/QuestModal';
import ExplorerProfile from './components/ExplorerProfile';
import QuestsView from './components/QuestsView';
import AIChatbot from './components/AIChatbot';
import DemoTourGuide from './components/DemoTourGuide';
import TourGuides from './components/TourGuides';
import DemoJourneyPage from './components/DemoJourneyPage';
import { LOCATIONS, SIMULATED_ORIGINS } from './data/locations';
import { BADGES } from './data/badges';
import { soundFx } from './utils/sound';

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState('demojourney'); // 'demojourney' | 'explore' | 'recommend' | 'quests' | 'profile' | 'guides'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [userOrigin, setUserOrigin] = useState(SIMULATED_ORIGINS[0]); // Default: Mananchira

  // Gamification & Progress State (Persisted in localStorage)
  const [xp, setXp] = useState(() => {
    const saved = localStorage.getItem('ek_xp');
    return saved ? parseInt(saved, 10) : 50; // Starter XP
  });

  const [visitedLocationIds, setVisitedLocationIds] = useState(() => {
    const saved = localStorage.getItem('ek_visited');
    return saved ? JSON.parse(saved) : ['mananchira-square'];
  });

  const [completedQuestIds, setCompletedQuestIds] = useState(() => {
    const saved = localStorage.getItem('ek_quests');
    return saved ? JSON.parse(saved) : [];
  });

  const [unlockedBadgeIds, setUnlockedBadgeIds] = useState(() => {
    const saved = localStorage.getItem('ek_badges');
    return saved ? JSON.parse(saved) : ['malabar-first-step'];
  });

  // Modals & Panels State
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [activeStoryLocation, setActiveStoryLocation] = useState(null);
  const [activeQuestLocation, setActiveQuestLocation] = useState(null);

  // Chatbot State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatbotExternalPrompt, setChatbotExternalPrompt] = useState(null);

  // Sound Mute State
  const [isSoundMuted, setIsSoundMuted] = useState(false);

  // Hackathon Demo Tour Guide State
  const [isDemoTourActive, setIsDemoTourActive] = useState(false);
  const [demoTourStepIndex, setDemoTourStepIndex] = useState(0);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('ek_xp', xp.toString());
  }, [xp]);

  useEffect(() => {
    localStorage.setItem('ek_visited', JSON.stringify(visitedLocationIds));
  }, [visitedLocationIds]);

  useEffect(() => {
    localStorage.setItem('ek_quests', JSON.stringify(completedQuestIds));
  }, [completedQuestIds]);

  useEffect(() => {
    localStorage.setItem('ek_badges', JSON.stringify(unlockedBadgeIds));
  }, [unlockedBadgeIds]);

  // Handle Recording a Visited Location
  const handleRecordVisited = (locationId) => {
    if (!visitedLocationIds.includes(locationId)) {
      setVisitedLocationIds(prev => [...prev, locationId]);
      // Award 25 discovery XP
      setXp(prev => prev + 25);
    }
  };

  // Handle Location Scanned via Camera / QR
  const handleLocationScanned = (scannedLocation) => {
    handleRecordVisited(scannedLocation.id);
    setIsScannerOpen(false);
    setActiveStoryLocation(scannedLocation);
  };

  // Handle Quest Completed
  const handleQuestCompleted = (locationId, xpReward, badgeId = null) => {
    if (!completedQuestIds.includes(locationId)) {
      setCompletedQuestIds(prev => [...prev, locationId]);
      setXp(prev => prev + xpReward);
    }

    if (badgeId && !unlockedBadgeIds.includes(badgeId)) {
      setUnlockedBadgeIds(prev => [...prev, badgeId]);
    }

    // Check Grandmaster badge criteria
    if (xp + xpReward >= 500 && completedQuestIds.length + 1 >= 5) {
      if (!unlockedBadgeIds.includes('calicut-grandmaster')) {
        setUnlockedBadgeIds(prev => [...prev, 'calicut-grandmaster']);
      }
    }
  };

  // Reset Progress for Demonstration
  const handleResetProgress = () => {
    setXp(50);
    setVisitedLocationIds(['mananchira-square']);
    setCompletedQuestIds([]);
    setUnlockedBadgeIds(['malabar-first-step']);
    localStorage.clear();
  };

  // Quick Chat trigger
  const handleAskChatbot = (promptText) => {
    setChatbotExternalPrompt(promptText);
    setIsChatOpen(true);
  };

  // Toggle Sound FX
  const handleToggleSound = () => {
    const nextState = !isSoundMuted;
    setIsSoundMuted(nextState);
    soundFx.isMuted = nextState;
  };

  // Hackathon Demo Tour Step Execution
  const handleExecuteDemoStep = (step) => {
    if (step.tabTarget) {
      setActiveTab(step.tabTarget);
    }

    if (step.triggerAction === 'scanner') {
      setIsScannerOpen(true);
    } else if (step.triggerAction === 'story') {
      setIsScannerOpen(false);
      const beach = LOCATIONS.find(l => l.id === 'kozhikode-beach') || LOCATIONS[0];
      setActiveStoryLocation(beach);
    } else if (step.triggerAction === 'chat') {
      setActiveStoryLocation(null);
      setIsChatOpen(true);
    }
  };

  return (
    <div className="explore-kozhikode-app">
      {/* Sticky Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        xp={xp}
        onOpenScanner={() => setIsScannerOpen(true)}
        onToggleChat={() => setIsChatOpen(prev => !prev)}
        onStartDemoTour={() => {
          setIsDemoTourActive(true);
          setDemoTourStepIndex(0);
          setActiveTab('explore');
        }}
        isChatOpen={isChatOpen}
        isSoundMuted={isSoundMuted}
        onToggleSound={handleToggleSound}
      />

      <main className="main-content-flow">
        {/* Hero Banner shown on Explore & Recommend tabs */}
        {(activeTab === 'explore' || activeTab === 'recommend') && (
          <HeroBanner
            userOrigin={userOrigin}
            setUserOrigin={setUserOrigin}
            onQuickCategorySelect={(cat) => {
              setSelectedCategory(cat);
              setActiveTab('explore');
            }}
            onOpenScanner={() => setIsScannerOpen(true)}
            onExploreLocation={(loc) => setActiveStoryLocation(loc)}
          />
        )}

        {/* TAB 0: DEMO JOURNEY PAGE */}
        {activeTab === 'demojourney' && (
          <DemoJourneyPage
            onOpenStory={(loc) => {
              handleRecordVisited(loc.id);
              setActiveStoryLocation(loc);
            }}
            onOpenQuest={(loc) => {
              handleRecordVisited(loc.id);
              setActiveQuestLocation(loc);
            }}
          />
        )}

        {/* TAB 1: INTERACTIVE MAP */}
        {activeTab === 'explore' && (
          <InteractiveMap
            userOrigin={userOrigin}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onOpenStory={(loc) => {
              handleRecordVisited(loc.id);
              setActiveStoryLocation(loc);
            }}
            onOpenQuest={(loc) => {
              handleRecordVisited(loc.id);
              setActiveQuestLocation(loc);
            }}
            onAskChatbot={handleAskChatbot}
          />
        )}

        {/* TAB 2: SMART RECOMMENDATIONS */}
        {activeTab === 'recommend' && (
          <NeedRecommender
            userOrigin={userOrigin}
            onSelectOnMap={(loc) => {
              setSelectedCategory(loc.category);
              setActiveTab('explore');
            }}
            onOpenStory={(loc) => {
              handleRecordVisited(loc.id);
              setActiveStoryLocation(loc);
            }}
            onOpenQuest={(loc) => {
              handleRecordVisited(loc.id);
              setActiveQuestLocation(loc);
            }}
          />
        )}

        {/* TAB 3: QUESTS & LORE */}
        {activeTab === 'quests' && (
          <QuestsView
            completedQuestIds={completedQuestIds}
            onOpenQuest={(loc) => {
              handleRecordVisited(loc.id);
              setActiveQuestLocation(loc);
            }}
            onOpenStory={(loc) => {
              handleRecordVisited(loc.id);
              setActiveStoryLocation(loc);
            }}
          />
        )}

        {/* TAB 4: EXPLORER PROFILE & DIGITAL PASSPORT */}
        {activeTab === 'profile' && (
          <ExplorerProfile
            xp={xp}
            unlockedBadgeIds={unlockedBadgeIds}
            completedQuestIds={completedQuestIds}
            visitedLocationIds={visitedLocationIds}
            onOpenStory={(loc) => setActiveStoryLocation(loc)}
            onResetProgress={handleResetProgress}
          />
        )}

        {/* TAB 5: CERTIFIED TOUR GUIDES */}
        {activeTab === 'guides' && (
          <TourGuides />
        )}
      </main>

      {/* AI Travel Chatbot: Malabar Mitra */}
      <AIChatbot
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        userOrigin={userOrigin}
        externalPrompt={chatbotExternalPrompt}
        onClearExternalPrompt={() => setChatbotExternalPrompt(null)}
      />

      {/* Floating Chatbot FAB (Right-Bottom Floating Icon) */}
      <div className="mitra-fab-wrapper">
        {!isChatOpen && (
          <div className="mitra-fab-tooltip">
            💬 Ask Mitra • Places &amp; Routes
          </div>
        )}
        <button
          id="btn-floating-chatbot"
          className={`mitra-fab ${isChatOpen ? 'open' : ''}`}
          onClick={() => setIsChatOpen(prev => !prev)}
          title={isChatOpen ? "Close Malabar Mitra Chat" : "Ask Malabar Mitra about Kozhikode places & routes"}
          aria-label="Toggle AI Travel Chatbot"
        >
          {isChatOpen ? (
            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>✕</span>
          ) : (
            <>
              <span className="mitra-fab-emoji">👳🏽‍♂️</span>
              <span className="mitra-fab-badge"></span>
            </>
          )}
        </button>
      </div>

      {/* Scanner & Monument Recognition Modal */}
      <ScannerModal
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
        onLocationScanned={handleLocationScanned}
        initialLocationId="kozhikode-beach"
      />

      {/* Story & AR Narration Modal */}
      <StoryARModal
        location={activeStoryLocation}
        isOpen={!!activeStoryLocation}
        onClose={() => setActiveStoryLocation(null)}
        onLaunchQuest={(loc) => setActiveQuestLocation(loc)}
        onRecordVisited={handleRecordVisited}
      />

      {/* Location-Specific Gamified Quest Modal */}
      <QuestModal
        location={activeQuestLocation}
        isOpen={!!activeQuestLocation}
        onClose={() => setActiveQuestLocation(null)}
        onQuestCompleted={handleQuestCompleted}
        isAlreadyCompleted={activeQuestLocation ? completedQuestIds.includes(activeQuestLocation.id) : false}
        onOpenProfile={() => setActiveTab('profile')}
      />

      {/* Hackathon Interactive Demo Tour Walkthrough */}
      <DemoTourGuide
        isActive={isDemoTourActive}
        currentStepIndex={demoTourStepIndex}
        setCurrentStepIndex={setDemoTourStepIndex}
        onClose={() => setIsDemoTourActive(false)}
        onExecuteStepAction={handleExecuteDemoStep}
      />

      {/* Footer */}
      <footer className="app-footer">
        <div className="container footer-inner">
          <div className="footer-left">
            <div className="footer-brand">
              Explore <span className="text-gradient-gold">Kozhikode</span>
            </div>
            <p className="footer-sub">
              കോഴിക്കോട് • Malabar Coast Tourism & Living Cultural Heritage Platform
            </p>
          </div>

          <div className="footer-right">
            <span>Zamorin Dynasty Lore</span>
            <span>•</span>
            <span>Beypore Uru Crafts</span>
            <span>•</span>
            <span>Calicut Dum Biryani</span>
            <span>•</span>
            <span>1498 Vasco Monument</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
