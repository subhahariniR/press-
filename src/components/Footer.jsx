import { SOCIALS, CLUB } from '../config.js';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__name">{CLUB.name}</p>
      <p lang="ta">{CLUB.tamil}</p>
      {SOCIALS.length > 0 && (
        <ul className="footer__social">
          {SOCIALS.map((s) => (
            <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
          ))}
        </ul>
      )}
      <p className="footer__copy">© {new Date().getFullYear()} {CLUB.name}</p>
    </footer>
  );
}
