import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Preloader.css';

/**
 * Preloader Component - Solo Leveling System UI inspired
 * Displays a full-screen loading experience with progressive animations
 * 
 * @param {Function} onLoadComplete - Callback fired when loading completes
 * @param {Boolean} enableSound - Optional: Enable sound effects (default: false)
 * @returns {JSX.Element} Preloader overlay component
 */
const Preloader = ({ onLoadComplete, enableSound = false }) => {
    // State Management
    const [progress, setProgress] = useState(0);
    const [systemStatus, setSystemStatus] = useState('INITIALIZING');
    const [displayText, setDisplayText] = useState('');
    const [scanlineVisible, setScanlineVisible] = useState(true);
    const [isComplete, setIsComplete] = useState(false);
    const [glitchActive, setGlitchActive] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [systemActivated, setSystemActivated] = useState(false);

    // Configuration
    const fullText = 'SYSTEM INITIALIZATION';
    const TOTAL_DURATION = 3000; // 3 seconds total loading time

    /**
     * Custom Sound Effect Hook - plays audio if enableSound is true
     * @param {string} type - Type of sound: 'start', 'complete', 'glitch'
     */
    const playSound = useCallback((type) => {
        if (!enableSound) return;

        try {
            // Create AudioContext for sound generation (optional implementation)
            // You can replace this with actual audio files by adding to public/sounds/
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            switch (type) {
                case 'start':
                    oscillator.frequency.value = 400;
                    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.1);
                    break;
                case 'complete':
                    oscillator.frequency.value = 800;
                    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.2);
                    break;
                case 'glitch':
                    oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
                    oscillator.frequency.setValueAtTime(400, audioContext.currentTime + 0.05);
                    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.1);
                    break;
                default:
                    break;
            }
        } catch (error) {
            // Silently fail if audio context is not available
            console.debug('Audio context unavailable');
        }
    }, [enableSound]);

    // Mount effect - Initialize component
    useEffect(() => {
        setMounted(true);
        playSound('start');
    }, [playSound]);

    // Typewriter effect for system text
    useEffect(() => {
        if (displayText.length < fullText.length && mounted) {
            const timer = setTimeout(() => {
                setDisplayText(fullText.slice(0, displayText.length + 1));
            }, 60);
            return () => clearTimeout(timer);
        }
    }, [displayText, mounted]);

    // Simulate loading progress over 3 seconds
    useEffect(() => {
        if (!mounted) return;

        const startTime = Date.now();
        const progressInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / TOTAL_DURATION) * 100, 100);
            setProgress(newProgress);

            if (newProgress >= 100) {
                clearInterval(progressInterval);
            }
        }, 30);

        return () => clearInterval(progressInterval);
    }, [mounted]);

    // Completion logic - trigger after progress reaches 100%
    useEffect(() => {
        if (progress >= 100 && !isComplete) {
            setIsComplete(true);
            setSystemStatus('COMPLETE');
            playSound('complete');

            // Add glitch effect before fade out
            setGlitchActive(true);
            playSound('glitch');

            // System Activated flash - 100ms after glitch starts
            const activatedTimer = setTimeout(() => {
                setSystemActivated(true);
            }, 200);

            // Stop glitch effect after 400ms
            const glitchTimer = setTimeout(() => {
                setGlitchActive(false);
            }, 400);

            // Reset activation flash
            const resetActivatedTimer = setTimeout(() => {
                setSystemActivated(false);
            }, 500);

            // Call callback after glitch completes and fade begins
            const completeTimer = setTimeout(() => {
                onLoadComplete();
            }, 800);

            return () => {
                clearTimeout(activatedTimer);
                clearTimeout(glitchTimer);
                clearTimeout(resetActivatedTimer);
                clearTimeout(completeTimer);
            };
        }
    }, [progress, isComplete, onLoadComplete, playSound]);

    // Scanline flicker
    useEffect(() => {
        const interval = setInterval(() => {
            setScanlineVisible((prev) => !prev);
        }, 150);
        return () => clearInterval(interval);
    }, []);

    const statusSteps = [
        { label: 'CORE SYSTEM', complete: progress > 20 },
        { label: 'NEURAL NETWORK', complete: progress > 40 },
        { label: 'MEMORY BANKS', complete: progress > 60 },
        { label: 'ENERGY MATRIX', complete: progress > 80 },
        { label: 'INTEGRATION', complete: progress > 95 },
    ];

    return (
        <div className={`preloader-container ${isComplete ? 'fade-out' : ''} ${mounted ? 'fade-in' : ''} ${glitchActive ? 'glitch-active' : ''} ${systemActivated ? 'system-activated' : ''}`}>
            {/* System Activated Flash - Bonus Feature */}
            {systemActivated && <div className="system-activated-flash"></div>}

            {/* Animated background particles */}
            <div className="preloader-particles">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className={`particle particle-${i + 1}`}></div>
                ))}
            </div>

            {/* Main content */}
            <div className="preloader-content">
                {/* Top section - Title & Glow effect */}
                <div className="preloader-header">
                    <div className="glow-effect"></div>
                    <h1 className={`system-title ${glitchActive ? 'glitch-text' : ''}`} data-text={displayText}>
                        <span className="neon-text">{displayText}</span>
                        <span className={`cursor-blink ${displayText.length === fullText.length ? 'complete' : ''}`}>|</span>
                    </h1>
                </div>

                {/* Middle section - Status panels */}
                <div className="status-grid">
                    {statusSteps.map((step, index) => (
                        <div
                            key={index}
                            className={`status-panel ${step.complete ? 'complete' : 'active'}`}
                        >
                            <div className="panel-header">
                                <span className="status-icon">{step.complete ? '✓' : '◆'}</span>
                                <span className="status-label">{step.label}</span>
                            </div>
                            <div className="panel-bar">
                                <div
                                    className="bar-fill"
                                    style={{
                                        width: step.complete ? '100%' : `${Math.max(0, progress - (index * 20))}%`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Progress bar section */}
                <div className="progress-section">
                    <div className="progress-label">
                        <span>LOADING...</span>
                        <span className="progress-percentage">{Math.round(progress)}%</span>
                    </div>
                    <div className="main-progress-bar">
                        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                        <div className="progress-glow"></div>
                    </div>
                </div>

                {/* Bottom status */}
                <div className="status-footer">
                    <div className="status-text">
                        <span className={`status-indicator ${isComplete ? 'success' : 'active'}`}></span>
                        <span>{systemStatus}</span>
                    </div>
                    <div className="vline"></div>
                </div>
            </div>

            {/* Scanline overlay effect */}
            {scanlineVisible && <div className="scanlines"></div>}

            {/* Animated UI Lines - Bonus Feature */}
            <div className="animated-lines">
                <div className="line horizontal top"></div>
                <div className="line horizontal bottom"></div>
                <div className="line vertical left"></div>
                <div className="line vertical right"></div>
            </div>

            {/* Corner decorations */}
            <div className="corner top-left"></div>
            <div className="corner top-right"></div>
            <div className="corner bottom-left"></div>
            <div className="corner bottom-right"></div>
        </div>
    );
};

export default Preloader;
