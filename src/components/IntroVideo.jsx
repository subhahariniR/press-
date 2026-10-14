import { useEffect, useRef, useState } from 'react';
import { VIDEO_MP4, VIDEO_WEBM, VIDEO_POSTER } from '../config.js';
import { usePrefersReducedMotion } from '../hooks.js';
import AnimatedTitle from './AnimatedTitle.jsx';

export default function IntroVideo() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const reduced = usePrefersReducedMotion();
  const [ended, setEnded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;            // required for autoplay
    v.defaultMuted = true;
    v.playsInline = true;
    const p = v.play();
    if (p && p.catch) p.catch(() => { setFailed(true); setEnded(true); });
  }, []);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, window.innerHeight);
        sectionRef.current?.style.setProperty('--shift', `${y * 0.25}px`);
        sectionRef.current?.style.setProperty('--fade', String(Math.max(0, 1 - y / (window.innerHeight * 0.9))));
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, [reduced]);

  const skip = () => {
    const v = videoRef.current;
    if (v) { v.pause(); try { v.currentTime = v.duration || 6; } catch { /* ignore */ } }
    setEnded(true);
  };

  return (
    <section id="top" ref={sectionRef} className={`intro ${ended ? 'is-ended' : ''}`} aria-label="Dharapuram Press Club intro">
      <video
        ref={videoRef}
        className="intro__video"
        muted
        playsInline
        autoPlay
        preload="auto"
        poster={VIDEO_POSTER}
        onEnded={() => setEnded(true)}
        onError={() => { setFailed(true); setEnded(true); }}
        aria-hidden="true"
      >
        <source src={VIDEO_MP4} type="video/mp4" />
        <source src={VIDEO_WEBM} type="video/webm" />
      </video>
      <div className="intro__shade" />
      <div className="intro__content">
        <AnimatedTitle />
      </div>
      {!ended && !failed && (
        <button type="button" className="intro__skip" onClick={skip}>Skip intro</button>
      )}
      <a className="intro__scroll" href="#reporters">
        <span>SCROLL TO EXPLORE</span>
        <span className="intro__arrow" aria-hidden="true">↓</span>
      </a>
    </section>
  );
}