import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LINKS = [
  ['Reporters', '#reporters'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>Dharapuram Press Club</a>
      <button className="nav__toggle" aria-expanded={open} aria-controls="nav-links" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav id="nav-links" className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Main">
        {LINKS.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
