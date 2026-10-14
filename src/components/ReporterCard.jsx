import { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { useReveal } from '../hooks.js';

const digits = (p) => p.replace(/\D/g, '');
const initials = (s) => s.split(' ').map((w) => w[0]).join('').slice(0, 3).toUpperCase();

export default function ReporterCard({ reporter, index }) {
  const [ref, shown] = useReveal();
  const [logoOk, setLogoOk] = useState(true);
  const num = digits(reporter.phone);
  const wa = `https://wa.me/91${num}?text=${encodeURIComponent('Hello ' + reporter.name + ', I would like to share a news tip.')}`;

  return (
    <article ref={ref} className={`card ${shown ? 'is-in' : ''}`} style={{ '--i': index }}>
      <div className="card__logo">
        {logoOk ? (
          <img src={reporter.logo} alt={`${reporter.org} logo`} loading="lazy" onError={() => setLogoOk(false)} />
        ) : (
          <span className="card__logo-fallback" title="Replace with the official logo">{reporter.org}</span>
        )}
      </div>
      {reporter.photo ? (
        <img className="card__photo" src={reporter.photo} alt={`${reporter.name}`} loading="lazy" />
      ) : (
        <div className="card__avatar" aria-hidden="true">{initials(reporter.name)}</div>
      )}
      <h3 className="card__name">{reporter.name}</h3>
      <p className="card__org">{reporter.org}</p>
      <p className="card__phone"><Phone size={16} aria-hidden="true" /> <a href={`tel:+91${num}`}>{reporter.phone}</a></p>
      <div className="card__actions">
        <a className="btn btn--call" href={`tel:+91${num}`} aria-label={`Call ${reporter.name}`}><Phone size={18} aria-hidden="true" /> Call</a>
        <a className="btn btn--wa" href={wa} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp ${reporter.name}`}><MessageCircle size={18} aria-hidden="true" /> WhatsApp</a>
      </div>
    </article>
  );
}
