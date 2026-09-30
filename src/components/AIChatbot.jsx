import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  AlertTriangle, 
  Sparkles, 
  Key, 
  Volume2, 
  VolumeX, 
  MapPin, 
  Compass, 
  CornerDownLeft, 
  HelpCircle,
  RefreshCw
} from 'lucide-react';
import { CHATBOT_PROMPTS, getOfflineAIResponse } from '../data/chatbotKnowledge';

export default function AIChatbot({ 
  isOpen, 
  onClose, 
  userOrigin, 
  externalPrompt = null,
  onClearExternalPrompt 
}) {
  const [messages, setMessages] = useState([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: `✨ **Namaskaram! Welcome to Kozhikode!**
I am **Malabar Mitra**, your virtual Calicut explorer assistant.

Ask me anything about famous places, routes & directions, legendary Dum Biryani, 1,500-year-old Beypore Uru ships, sunset spots, auto rickshaw fares, or local history!

If you ever feel disoriented, click the **'I am Lost'** button below and I will immediately guide you.`
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [geminiApiKey, setGeminiApiKey] = useState(() => localStorage.getItem('gemini_api_key') || '');
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [tempApiKey, setTempApiKey] = useState(geminiApiKey);

  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Handle external prompts passed from places
  useEffect(() => {
    if (externalPrompt && isOpen) {
      handleSendMessage(externalPrompt);
      onClearExternalPrompt?.();
    }
  }, [externalPrompt, isOpen]);

  const handleSendMessage = async (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      let botReply = '';

      if (geminiApiKey) {
        // Live Gemini API call if key is provided
        try {
          const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{
                parts: [{
                  text: `You are Malabar Mitra, a friendly, knowledgeable local tourism expert for Kozhikode (Calicut), Kerala. Current traveler origin is: ${userOrigin.name}. Answer concisely, warmly with helpful local advice, history, food tips, Malayalam phrases if relevant. Traveler asks: "${text}"`
                }]
              }]
            })
          });
          const data = await response.json();
          botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || getOfflineAIResponse(text, userOrigin);
        } catch {
          botReply = getOfflineAIResponse(text, userOrigin);
        }
      } else {
        // Fast, rich offline Kozhikode conversational engine
        await new Promise(r => setTimeout(r, 650));
        botReply = getOfflineAIResponse(text, userOrigin);
      }

      setMessages(prev => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: botReply
        }
      ]);
    } catch {
      setMessages(prev => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: "I am having trouble connecting right now, but feel free to ask about Kozhikode food, beaches, or history!"
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSaveApiKey = () => {
    setGeminiApiKey(tempApiKey.trim());
    localStorage.setItem('gemini_api_key', tempApiKey.trim());
    setShowKeyModal(false);
  };

  const handleLostSos = () => {
    handleSendMessage("I am lost! Help me find my way back to safety or transport.");
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="chatbot-window glass-panel animate-scale-up">
      {/* Chatbot Header */}
      <div className="chat-header">
        <div className="chat-avatar-info">
          <div className="chat-avatar-frame">
            <span className="chat-avatar-emoji">👳🏽‍♂️</span>
            <span className="chat-online-dot"></span>
          </div>
          <div>
            <div className="chat-title-row">
              <h4>Malabar Mitra</h4>
              <span className="ai-badge-pill">AI Guide</span>
            </div>
            <p className="chat-sub">Kozhikode Virtual Travel Companion</p>
          </div>
        </div>

        <div className="chat-header-actions">
          {/* Emergency Lost Button */}
          <button 
            id="btn-lost-sos"
            className="btn-lost-sos"
            onClick={handleLostSos}
            title="I am lost! Get immediate orientation help"
          >
            <AlertTriangle className="icon-xs animate-pulse" />
            <span>I'm Lost!</span>
          </button>

          {/* Gemini Key Config */}
          <button 
            className={`btn-chat-icon ${geminiApiKey ? 'active' : ''}`}
            onClick={() => setShowKeyModal(true)}
            title="Configure Gemini API Key (Optional)"
          >
            <Key className="icon-xs" />
          </button>

          <button className="btn-chat-icon" onClick={onClose} title="Close Assistant">
            <X className="icon-xs" />
          </button>
        </div>
      </div>

      {/* Optional Gemini API Key Dialog */}
      {showKeyModal && (
        <div className="api-key-banner glass-panel animate-slide-up">
          <div className="key-banner-header">
            <Key className="icon-xs text-gold" />
            <strong>Custom Gemini API Key (Optional)</strong>
            <button className="close-key-btn" onClick={() => setShowKeyModal(false)}>✕</button>
          </div>
          <p className="key-hint">
            The assistant has full offline Kozhikode intelligence built-in! Enter an optional key for live Google Gemini LLM responses:
          </p>
          <div className="key-input-row">
            <input 
              type="password" 
              placeholder="AIzaSy..."
              value={tempApiKey}
              onChange={(e) => setTempApiKey(e.target.value)}
              className="key-input"
            />
            <button className="btn-save-key" onClick={handleSaveApiKey}>Save</button>
          </div>
        </div>
      )}

      {/* Messages Scroll Area */}
      <div className="chat-messages-container">
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-message-row ${msg.sender}`}>
            {msg.sender === 'bot' && (
              <div className="msg-bot-avatar">🌴</div>
            )}
            <div className="msg-bubble">
              <div 
                className="msg-markdown-content"
                dangerouslySetInnerHTML={{ 
                  __html: formatMarkdownToHtml(msg.text) 
                }}
              />
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="chat-message-row bot">
            <div className="msg-bot-avatar">🌴</div>
            <div className="msg-bubble typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Prompt Suggestion Chips */}
      <div className="chat-prompts-strip">
        {CHATBOT_PROMPTS.map((prompt, idx) => (
          <button 
            key={idx}
            className="prompt-chip"
            onClick={() => handleSendMessage(prompt)}
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Chat Input Bar */}
      <div className="chat-input-bar">
        <input 
          id="chat-input-field"
          type="text" 
          placeholder="Ask Malabar Mitra about places, routes, directions, food..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="chat-text-input"
        />
        <button 
          id="btn-send-chat"
          className="chat-send-btn"
          onClick={() => handleSendMessage()}
          disabled={!inputValue.trim() || isTyping}
        >
          <Send className="icon-xs" />
        </button>
      </div>
    </div>
  );
}

// Lightweight Markdown to HTML formatter for safe bullet lists and bold text
function formatMarkdownToHtml(text) {
  if (!text) return '';
  let html = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^### (.*$)/gim, '<h4 class="chat-h4">$1</h4>')
    .replace(/^## (.*$)/gim, '<h3 class="chat-h3">$1</h3>')
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>')
    .replace(/\n\n/g, '<br/><br/>')
    .replace(/\n/g, '<br/>');

  return html;
}
