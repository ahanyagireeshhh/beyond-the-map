import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Award, 
  HelpCircle, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Flame, 
  ChevronRight, 
  RotateCcw,
  Trophy,
  ArrowRight,
  MapPin
} from 'lucide-react';
import { soundFx } from '../utils/sound';
import { BADGES } from '../data/badges';

export default function QuestModal({ 
  location, 
  isOpen, 
  onClose, 
  onQuestCompleted,
  isAlreadyCompleted = false,
  onOpenProfile
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isQuestFinished, setIsQuestFinished] = useState(false);
  const [unlockedBadge, setUnlockedBadge] = useState(null);

  if (!isOpen || !location) return null;

  const questions = location.quest?.questions || [];
  const currentQ = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleSelectOption = (index) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);

    const isCorrect = selectedOption === currentQ.correctIndex;
    if (isCorrect) {
      setCorrectAnswersCount(prev => prev + 1);
      soundFx.playSuccessSound();
    }
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      finishQuest();
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    }
  };

  const finishQuest = () => {
    setIsQuestFinished(true);

    // Fire fireworks confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#0284c7', '#10b981', '#ec4899', '#f97316']
    });

    soundFx.playSuccessSound();

    // Check matching badge
    const badgeMatch = BADGES.find(b => b.locationId === location.id);
    if (badgeMatch) {
      setUnlockedBadge(badgeMatch);
    }

    // Notify parent to award XP and update completed quest list
    onQuestCompleted?.(location.id, location.quest.xp, badgeMatch?.id);
  };

  const handleResetQuest = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setCorrectAnswersCount(0);
    setIsQuestFinished(false);
    setUnlockedBadge(null);
  };

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div className="modal-card quest-modal glass-panel animate-scale-up" onClick={(e) => e.stopPropagation()}>
        {/* Quest Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="quest-header-badge">
              <Award className="icon-sm text-gold" />
            </div>
            <div>
              <div className="quest-sup-tag">
                <span>Location Exploration Quest</span>
                {isAlreadyCompleted && <span className="completed-badge">✓ Previously Mastered</span>}
              </div>
              <h3>{location.quest?.title}</h3>
            </div>
          </div>

          <button className="modal-close-btn" onClick={onClose}>
            <X className="icon-sm" />
          </button>
        </div>

        {/* Quest Body */}
        <div className="quest-modal-body">
          {!isQuestFinished ? (
            <div className="quest-active-step animate-fade-in">
              {/* Real Monument / Place Photo Banner */}
              <div className="quest-monument-preview glass-panel">
                <div className="quest-monument-img-container">
                  <img referrerPolicy="no-referrer" 
                    src={location.heroImage} 
                    alt={location.name}
                    className="quest-monument-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=80';
                    }}
                  />
                  <div className="quest-monument-overlay-gradient"></div>
                  <div className="quest-monument-caption">
                    <span className="quest-monument-era">🏛️ {location.historicalEra || 'Historic Landmark'}</span>
                    <h4 className="quest-monument-name">{location.name}</h4>
                    <p className="quest-monument-addr"><MapPin className="icon-xxs" /> {location.address}</p>
                  </div>
                </div>
              </div>

              {/* Story Prompt & Clue */}
              <div className="quest-prompt-card glass-panel">
                <p className="quest-story-text">
                  🧭 <strong>The Challenge:</strong> {location.quest?.storyPrompt}
                </p>
                <div className="quest-clue-pill">
                  <Sparkles className="icon-xs text-amber" />
                  <span><strong>Explorer Clue:</strong> {location.quest?.clue}</span>
                </div>
              </div>

              {/* Question Progress bar */}
              <div className="quest-progress-row">
                <span className="step-counter">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
                <span className="step-xp-indicator">
                  <Flame className="icon-xs text-gold" />
                  +{location.quest?.xp} XP upon completion
                </span>
              </div>

              {/* Question Card */}
              {currentQ && (
                <div className="question-box glass-panel">
                  <h4 className="question-title">{currentQ.question}</h4>

                  {/* Options List */}
                  <div className="options-grid">
                    {currentQ.options.map((option, idx) => {
                      const isSelected = selectedOption === idx;
                      let optionClass = 'option-btn';

                      if (isAnswerSubmitted) {
                        if (idx === currentQ.correctIndex) {
                          optionClass += ' correct';
                        } else if (isSelected) {
                          optionClass += ' wrong';
                        }
                      } else if (isSelected) {
                        optionClass += ' selected';
                      }

                      return (
                        <button
                          key={idx}
                          type="button"
                          id={`opt-${idx}`}
                          className={optionClass}
                          onClick={() => handleSelectOption(idx)}
                          disabled={isAnswerSubmitted}
                          aria-label={`Option ${String.fromCharCode(65 + idx)}: ${option}`}
                        >
                          <span className="option-marker">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="option-text">{option}</span>
                          {isAnswerSubmitted && idx === currentQ.correctIndex && (
                            <CheckCircle2 className="icon-xs text-green ml-auto" />
                          )}
                          {isAnswerSubmitted && isSelected && idx !== currentQ.correctIndex && (
                            <AlertCircle className="icon-xs text-red ml-auto" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation Card */}
                  {isAnswerSubmitted && (
                    <div className={`explanation-card animate-slide-up ${selectedOption === currentQ.correctIndex ? 'success' : 'neutral'}`}>
                      <div className="explanation-header">
                        {selectedOption === currentQ.correctIndex ? (
                          <div className="status-row text-green">
                            <CheckCircle2 className="icon-xs" />
                            <strong>Brilliant Observation! Correct Answer.</strong>
                          </div>
                        ) : (
                          <div className="status-row text-amber">
                            <AlertCircle className="icon-xs" />
                            <strong>Heritage Learning Moment:</strong>
                          </div>
                        )}
                      </div>
                      <p className="explanation-text">{currentQ.explanation}</p>
                    </div>
                  )}

                  {/* Actions Row */}
                  <div className="question-actions-row">
                    {!isAnswerSubmitted ? (
                      <button
                        id="btn-submit-answer"
                        className="btn-primary"
                        onClick={handleSubmitAnswer}
                        disabled={selectedOption === null}
                      >
                        <span>Confirm Answer</span>
                        <ChevronRight className="icon-xs" />
                      </button>
                    ) : (
                      <button
                        id="btn-next-question"
                        className="btn-primary"
                        onClick={handleNextQuestion}
                      >
                        <span>{isLastQuestion ? 'Complete Quest & Claim Rewards' : 'Next Question'}</span>
                        <ChevronRight className="icon-xs" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* QUEST VICTORY SCREEN */
            <div className="quest-success-screen animate-scale-up">
              <div className="trophy-glow-wrapper">
                <Trophy className="icon-xl text-gold animate-bounce" />
              </div>

              <h2 className="victory-title">Quest Accomplished!</h2>
              <p className="victory-sub">
                You have successfully unraveled the secrets of <strong>{location.name}</strong>.
              </p>

              {/* XP Award Pill */}
              <div className="victory-xp-card glass-panel">
                <div className="xp-gain-badge">
                  <Flame className="icon-sm text-gold" />
                  <span>+{location.quest?.xp} Explorer XP Earned</span>
                </div>
                <p>Your Kozhikode Explorer Level and Passport have been updated!</p>
              </div>

              {/* Unlocked Badge Showcase */}
              {unlockedBadge && (
                <div className="unlocked-badge-showcase glass-panel animate-slide-up">
                  <div className="unlocked-badge-header">
                    <Sparkles className="icon-xs text-gold" />
                    <span>New Badge Unlocked!</span>
                  </div>

                  <div className="unlocked-badge-content">
                    <div className="badge-icon-frame" style={{ backgroundColor: `${unlockedBadge.color}22`, borderColor: unlockedBadge.color }}>
                      <Award className="icon-lg" style={{ color: unlockedBadge.color }} />
                    </div>
                    <div>
                      <h4 style={{ color: unlockedBadge.color }}>{unlockedBadge.name}</h4>
                      <p className="badge-lore-title">{unlockedBadge.title}</p>
                      <p className="badge-desc">{unlockedBadge.description}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Victory Actions */}
              <div className="victory-actions-grid">
                <button 
                  id="btn-view-passport"
                  className="btn-primary"
                  onClick={() => {
                    onClose();
                    onOpenProfile?.();
                  }}
                >
                  <Trophy className="icon-xs" />
                  <span>View Explorer Passport & Badges</span>
                </button>

                <button 
                  className="btn-secondary"
                  onClick={onClose}
                >
                  <span>Continue Exploring Kozhikode</span>
                </button>

                <button 
                  className="btn-text-subtle"
                  onClick={handleResetQuest}
                >
                  <RotateCcw className="icon-xs" />
                  <span>Replay Quest</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
