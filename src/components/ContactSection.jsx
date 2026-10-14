import { Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT, REPORTERS } from '../config.js';

export default function ContactSection() {
  return (
    <section id="contact" className="section block is-in" aria-labelledby="contact-h">
      <div className="wrap">
        <h2 id="contact-h" className="section__title section__title--sm">Contact Us</h2>
        <div className="list">
          <div className="panel">
            <h3>Reach a reporter</h3>
            <ul className="plain">
              {REPORTERS.map((r) => (
                <li key={r.id}><Phone size={15} aria-hidden="true" /> {r.name}, {r.org}: <a href={`tel:+91${r.phone.replace(/\D/g, '')}`}>{r.phone}</a></li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <h3>Club office</h3>
            <ul className="plain">
              <li><Mail size={15} aria-hidden="true" /> {CONTACT.email ? <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> : 'Email to be added'}</li>
              <li><MapPin size={15} aria-hidden="true" /> {CONTACT.address || 'Address to be added'}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
