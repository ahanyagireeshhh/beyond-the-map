import React from 'react';
import { 
  Sparkles, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  MapPin, 
  Camera, 
  Eye, 
  Award, 
  Trophy, 
  Compass,
  Play
} from 'lucide-react';

const TOUR_STEPS = [
  {
    step: 1,
    title: '1. Explore Interactive Kozhikode Map',
    description: 'Travelers start by viewing all 12 cultural monuments, beaches, and food hubs. Change your simulated location to test live distance calculations.',
    actionLabel: 'Go to Interactive Map',
    tabTarget: 'explore'
  },
  {
    step: 2,
    title: '2. Select Your Needs & Mood',
    description: 'Need hot Biryani, quiet resting shade, or Arabian sunsets? Our recommendation engine filters nearby spots with travel times.',
    actionLabel: 'Try Smart Recommendations',
    tabTarget: 'recommend'
  },
  {
    step: 3,
    title: '3. Scan Monument or QR Plaque',
    description: 'Arrive at a heritage site and point your camera (or use our Test Scanner Deck) to identify the monument using AI vision.',
    actionLabel: 'Open Monument Scanner',
    triggerAction: 'scanner'
  },
  {
    step: 4,
    title: '4. Discover Monument Photo & Audio Guide',
    description: 'Inspect real monument photos with interactive historical hotspots, listen to voice narration, and slide through centuries.',
    actionLabel: 'Experience AR & Story',
    triggerAction: 'story'
  },
  {
    step: 5,
    title: '5. Ask Malabar Mitra AI Assistant',
    description: 'Ask questions about local recipes, bus stands, or activate the "I am Lost" safety guide for instant orientation.',
    actionLabel: 'Open Malabar Mitra AI',
    triggerAction: 'chat'
  },
  {
    step: 6,
    title: '6. Solve Quest & Collect Badges',
    description: 'Earn discovery points, unlock collectible accolades, and view your verified rubber-stamped Kozhikode Digital Travel Passport!',
    actionLabel: 'View Explorer Passport',
    tabTarget: 'profile'
  }
];

export default function DemoTourGuide({ 
  isActive, 
  currentStepIndex, 
  setCurrentStepIndex, 
  onClose,
  onExecuteStepAction 
}) {
  if (!isActive) return null;

  const step = TOUR_STEPS[currentStepIndex];
  const isFirst = currentStepIndex === 0;
  const isLast = currentStepIndex === TOUR_STEPS.length - 1;

  const handleNext = () => {
    onExecuteStepAction(step);
    if (!isLast) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirst) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  return (
    <div className="demo-tour-banner glass-panel animate-slide-up">
      <div className="tour-badge-pill">
        <Sparkles className="icon-xs text-gold animate-spin-slow" />
        <span>Hackathon Prototype Demo Tour — Step {step.step} of {TOUR_STEPS.length}</span>
      </div>

      <div className="tour-content-row">
        <div className="tour-text">
          <h4>{step.title}</h4>
          <p>{step.description}</p>
        </div>

        <div className="tour-actions-buttons">
          {!isFirst && (
            <button className="tour-btn secondary" onClick={handlePrev}>
              <ChevronLeft className="icon-xs" />
              <span>Back</span>
            </button>
          )}

          <button 
            id="tour-action-btn"
            className="tour-btn primary"
            onClick={handleNext}
          >
            <span>{step.actionLabel}</span>
            <ChevronRight className="icon-xs" />
          </button>

          <button className="tour-btn close" onClick={onClose} title="Exit Tour">
            <X className="icon-xs" />
          </button>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="tour-dots-row">
        {TOUR_STEPS.map((s, idx) => (
          <span 
            key={idx} 
            className={`tour-dot ${idx === currentStepIndex ? 'active' : ''} ${idx < currentStepIndex ? 'done' : ''}`}
            onClick={() => {
              setCurrentStepIndex(idx);
              onExecuteStepAction(TOUR_STEPS[idx]);
            }}
          />
        ))}
      </div>
    </div>
  );
}
