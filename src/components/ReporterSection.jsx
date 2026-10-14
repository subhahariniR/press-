import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { REPORTERS } from '../config.js';
import ReporterCard from './ReporterCard.jsx';

export default function ReporterSection() {
  const [i, setI] = useState(0);
  const startX = useRef(null);
  const n = REPORTERS.length;
  const go = (d) => setI((x) => (x + d + n) % n);

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  };
  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (startX.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    startX.current = null;
  };

  return (
    <section id="reporters" className="section reporters" aria-labelledby="rep-h">
      <div className="streaks" aria-hidden="true" />
      <div className="wrap">
        <h2 id="rep-h" className="section__title">OUR MEDIA REPORTERS</h2>
        <p className="section__sub" lang="ta">உங்கள் செய்திகளுக்காக... எங்கும் எப்போதும்...</p>

        <div className="carousel" onKeyDown={onKey} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
             role="group" aria-roledescription="carousel" aria-label="Media reporters">
          <button type="button" className="carousel__btn" onClick={() => go(-1)} aria-label="Previous reporter">
            <ChevronLeft size={28} />
          </button>
          <div className="carousel__stage" aria-live="polite">
            <ReporterCard key={REPORTERS[i].id} reporter={REPORTERS[i]} index={0} />
          </div>
          <button type="button" className="carousel__btn" onClick={() => go(1)} aria-label="Next reporter">
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="carousel__dots">
          {REPORTERS.map((r, k) => (
            <button key={r.id} type="button" className={k === i ? 'is-active' : ''}
                    aria-label={`Show ${r.name}, ${r.org}`} aria-current={k === i} onClick={() => setI(k)} />
          ))}
        </div>
      </div>
    </section>
  );
}