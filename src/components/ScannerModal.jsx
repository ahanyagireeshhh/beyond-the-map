import React, { useState, useEffect, useRef } from 'react';
import { 
  Camera, 
  X, 
  QrCode, 
  Sparkles, 
  RefreshCw, 
  Upload, 
  CheckCircle2, 
  AlertCircle,
  Eye,
  Award,
  Zap,
  Image as ImageIcon
} from 'lucide-react';
import QRCode from 'qrcode';
import { LOCATIONS } from '../data/locations';
import { soundFx } from '../utils/sound';

export default function ScannerModal({ 
  isOpen, 
  onClose, 
  onLocationScanned,
  initialLocationId = null 
}) {
  const [scanMode, setScanMode] = useState('camera'); // 'camera' | 'test-cards' | 'qr-generator'
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [detectedLocation, setDetectedLocation] = useState(null);
  const [generatedQrDataUrl, setGeneratedQrDataUrl] = useState(null);
  const [selectedQrLocId, setSelectedQrLocId] = useState(initialLocationId || 'kozhikode-beach');

  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // Start Camera
  useEffect(() => {
    if (isOpen && scanMode === 'camera') {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [isOpen, scanMode]);

  // Generate QR code when tab is qr-generator
  useEffect(() => {
    if (scanMode === 'qr-generator' && selectedQrLocId) {
      const loc = LOCATIONS.find(l => l.id === selectedQrLocId);
      if (loc) {
        const qrContent = `https://explore-kozhikode.kerala.gov.in/monument/${loc.id}?token=heritage_${Date.now()}`;
        QRCode.toDataURL(qrContent, { width: 280, margin: 2, color: { dark: '#0f172a', light: '#ffffff' } })
          .then(url => setGeneratedQrDataUrl(url))
          .catch(err => console.error(err));
      }
    }
  }, [scanMode, selectedQrLocId]);

  const startCamera = async () => {
    setCameraError(null);
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' }
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setCameraActive(true);
        }
      } else {
        setCameraError('Camera access is not supported in this browser environment. Use our Test Scanner Deck below!');
      }
    } catch (err) {
      console.warn('Camera access denied or unavailable:', err);
      setCameraError('Camera permission was denied or no camera was found. You can test instant monument detection using the Test Cards or File Upload below!');
      setCameraActive(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setCameraActive(false);
  };

  // Perform Simulated Recognition
  const handleSimulateScan = (loc) => {
    setIsScanning(true);
    soundFx.playShutterSound();

    setTimeout(() => {
      setIsScanning(false);
      setDetectedLocation(loc);
      soundFx.playSuccessSound();
    }, 900);
  };

  // Handle Photo upload simulation
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsScanning(true);
      soundFx.playShutterSound();
      // Match a random or relevant location based on filename or default
      setTimeout(() => {
        setIsScanning(false);
        const randomLoc = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
        setDetectedLocation(randomLoc);
        soundFx.playSuccessSound();
      }, 1000);
    }
  };

  const handleConfirmRecognized = () => {
    if (detectedLocation) {
      onLocationScanned(detectedLocation);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div className="modal-card scanner-modal glass-panel animate-scale-up" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="scanner-badge-icon">
              <Camera className="icon-sm text-gold" />
            </div>
            <div>
              <h3>AI Monument & QR Scanner</h3>
              <p className="modal-sub">Scan physical landmark plaques, QR codes, or test with our simulator</p>
            </div>
          </div>

          <button className="modal-close-btn" onClick={onClose}>
            <X className="icon-sm" />
          </button>
        </div>

        {/* Scanner Mode Switcher Tabs */}
        <div className="scanner-tabs">
          <button 
            id="tab-camera"
            className={`scanner-tab-btn ${scanMode === 'camera' ? 'active' : ''}`}
            onClick={() => setScanMode('camera')}
          >
            <Camera className="icon-xs" />
            <span>Live Camera / Viewfinder</span>
          </button>

          <button 
            id="tab-test-cards"
            className={`scanner-tab-btn ${scanMode === 'test-cards' ? 'active' : ''}`}
            onClick={() => setScanMode('test-cards')}
          >
            <Sparkles className="icon-xs" />
            <span>Test Scanner Deck (Click to Test)</span>
          </button>

          <button 
            id="tab-qr-generator"
            className={`scanner-tab-btn ${scanMode === 'qr-generator' ? 'active' : ''}`}
            onClick={() => setScanMode('qr-generator')}
          >
            <QrCode className="icon-xs" />
            <span>View Printable QR Plaque</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="scanner-body">
          {/* CAMERA MODE */}
          {scanMode === 'camera' && (
            <div className="camera-viewfinder-container">
              {cameraActive ? (
                <div className="viewfinder-frame">
                  <video 
                    ref={videoRef} 
                    autoPlay 
                    playsInline 
                    muted 
                    className="live-video-element"
                  />
                  {/* AR Targeting HUD */}
                  <div className="hud-overlay">
                    <div className="targeting-box">
                      <div className="corner top-left"></div>
                      <div className="corner top-right"></div>
                      <div className="corner bottom-left"></div>
                      <div className="corner bottom-right"></div>
                      <div className="radar-sweep-beam"></div>
                    </div>
                    <div className="hud-status-badge">
                      <span className="hud-dot animate-pulse"></span>
                      <span>AI Vision Active: Align Monument or QR Code</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="camera-fallback-panel">
                  {cameraError ? (
                    <div className="camera-warning">
                      <AlertCircle className="icon-md text-amber" />
                      <h4>Camera Feed Unavailable</h4>
                      <p>{cameraError}</p>
                    </div>
                  ) : (
                    <div className="camera-prompt">
                      <Camera className="icon-lg text-gold animate-bounce" />
                      <h4>Initializing Camera Sensor...</h4>
                    </div>
                  )}

                  <div className="fallback-actions-group">
                    <button 
                      className="btn-primary"
                      onClick={() => setScanMode('test-cards')}
                    >
                      <Sparkles className="icon-xs" />
                      <span>Use Monument Test Deck</span>
                    </button>

                    <label className="btn-secondary file-upload-label">
                      <Upload className="icon-xs" />
                      <span>Upload Monument Photo</span>
                      <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden-input" />
                    </label>
                  </div>
                </div>
              )}

              {/* Viewfinder Controls */}
              {cameraActive && (
                <div className="viewfinder-controls">
                  <label className="btn-icon-round" title="Upload Photo to Scan">
                    <Upload className="icon-sm" />
                    <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden-input" />
                  </label>

                  <button 
                    className="shutter-capture-btn"
                    onClick={() => {
                      const randomSpot = LOCATIONS[0];
                      handleSimulateScan(randomSpot);
                    }}
                    title="Capture & Analyze Landmark"
                  >
                    <div className="shutter-inner"></div>
                  </button>

                  <button 
                    className="btn-icon-round" 
                    onClick={() => setScanMode('test-cards')}
                    title="Switch to Test Cards"
                  >
                    <Sparkles className="icon-sm" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TEST CARDS DECK MODE */}
          {scanMode === 'test-cards' && (
            <div className="test-cards-wrapper">
              <div className="test-cards-intro">
                <span className="badge-pill-gold">Hackathon Testing Deck</span>
                <h4>Select Any Monument or Heritage Spot to Simulate Live Scan</h4>
                <p>Click any landmark below to trigger immediate AI optical recognition and unlock its AR story:</p>
              </div>

              <div className="test-landmarks-grid">
                {LOCATIONS.map((loc) => (
                  <div
                    key={loc.id}
                    id={`test-scan-${loc.id}`}
                    className="test-landmark-card"
                    onClick={() => handleSimulateScan(loc)}
                  >
                    <div className="test-card-thumb-wrap">
                      <img referrerPolicy="no-referrer" src={loc.heroImage} alt={loc.name} className="test-card-thumb" />
                      <span className="test-scan-pill">
                        <Zap className="icon-xs" /> Scan Plaque
                      </span>
                    </div>

                    <div className="test-card-content">
                      <span className="test-card-cat">{loc.categoryLabel}</span>
                      <h5>{loc.name}</h5>
                      <p className="test-card-era">{loc.historicalEra}</p>
                      <div className="test-card-xp">
                        <Award className="icon-xs text-gold" />
                        <span>+{loc.quest.xp} Quest XP Available</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* QR GENERATOR TAB */}
          {scanMode === 'qr-generator' && (
            <div className="qr-generator-wrapper">
              <div className="qr-gen-header">
                <h4>Physical Heritage Plaque Preview</h4>
                <p>Point a phone camera at this QR code or use our in-app scanner to simulate discovery:</p>
              </div>

              <div className="qr-location-selector">
                <label>Select Monument Plaque:</label>
                <select 
                  value={selectedQrLocId} 
                  onChange={(e) => setSelectedQrLocId(e.target.value)}
                  className="qr-select-dropdown"
                >
                  {LOCATIONS.map((loc) => (
                    <option key={loc.id} value={loc.id}>{loc.name} ({loc.categoryLabel})</option>
                  ))}
                </select>
              </div>

              {generatedQrDataUrl && (
                <div className="plaque-preview-card">
                  <div className="plaque-metal-border">
                    <div className="plaque-inner">
                      <div className="plaque-gov-seal">
                        <span>🏛️ KOZHIKODE HERITAGE COMMISSION</span>
                      </div>
                      <h3>{LOCATIONS.find(l => l.id === selectedQrLocId)?.name}</h3>
                      <p className="plaque-mal">{LOCATIONS.find(l => l.id === selectedQrLocId)?.malayalamName}</p>
                      
                      <div className="qr-img-frame">
                        <img referrerPolicy="no-referrer" src={generatedQrDataUrl} alt="Heritage QR Code" className="qr-actual-img" />
                      </div>

                      <p className="plaque-instruction">Scan with Explore Kozhikode Web App for Monument Story & Voice Narration</p>
                    </div>
                  </div>

                  <button 
                    className="btn-primary mt-3"
                    onClick={() => {
                      const loc = LOCATIONS.find(l => l.id === selectedQrLocId);
                      handleSimulateScan(loc);
                    }}
                  >
                    <CheckCircle2 className="icon-xs" />
                    <span>Simulate Scanning This Plaque Now</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* SCANNING IN PROGRESS ANIMATION OVERLAY */}
          {isScanning && (
            <div className="scanning-overlay-active">
              <div className="scanner-laser-beam"></div>
              <div className="analyzing-pill">
                <RefreshCw className="icon-sm animate-spin text-gold" />
                <span>AI Vision: Matching Kozhikode Monument Database...</span>
              </div>
            </div>
          )}

          {/* DETECTED MONUMENT RESULT CARD */}
          {detectedLocation && (
            <div className="detected-modal-banner animate-slide-up">
              <div className="detected-thumb-box">
                <img referrerPolicy="no-referrer" src={detectedLocation.heroImage} alt={detectedLocation.name} />
              </div>
              <div className="detected-info">
                <div className="detected-badge">
                  <CheckCircle2 className="icon-xs text-green" />
                  <span>Monument Recognized!</span>
                </div>
                <h4>{detectedLocation.name}</h4>
                <p>{detectedLocation.tagline}</p>
                <div className="detected-reward">
                  <Award className="icon-xs text-gold" />
                  <span>Earned +50 Discovery XP!</span>
                </div>
              </div>

              <div className="detected-actions">
                <button 
                  id="btn-confirm-ar-story"
                  className="btn-primary"
                  onClick={handleConfirmRecognized}
                >
                  <Eye className="icon-xs" />
                  <span>Launch AR Story & Audio</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
