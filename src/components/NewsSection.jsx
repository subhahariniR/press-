import { ABOUT_TEXT, NEWS_ITEMS, GALLERY, ANNOUNCEMENTS } from '../config.js';
import { useReveal } from '../hooks.js';

function Block({ id, title, children }) {
  const [ref, shown] = useReveal(0.1);
  return (
    <section id={id} ref={ref} className={`section block ${shown ? 'is-in' : ''}`} aria-labelledby={`${id}-h`}>
      <div className="wrap">
        <h2 id={`${id}-h`} className="section__title section__title--sm">{title}</h2>
        {children}
      </div>
    </section>
  );
}

const List = ({ items }) => (
  <div className="list">
    {items.map((n) => (
      <article key={n.id} className="panel">
        <p className="panel__date">{n.date}</p>
        <h3>{n.title}</h3>
        <p>{n.text}</p>
      </article>
    ))}
  </div>
);

export const AboutSection = () => (
  <Block id="about" title="About Dharapuram Press Club">
    <p className="about">{ABOUT_TEXT}</p>
  </Block>
);
export const NewsSection = () => (
  <Block id="news" title="News and Activities"><List items={NEWS_ITEMS} /></Block>
);
export const GallerySection = () => (
  <Block id="gallery" title="Photo Gallery">
    {GALLERY.length ? (
      <div className="gallery">
        {GALLERY.map((g) => <img key={g.src} src={g.src} alt={g.alt} loading="lazy" />)}
      </div>
    ) : (
      <p className="empty">No photos yet. Add images to <code>public/gallery</code> and list them in <code>src/config.js</code>.</p>
    )}
  </Block>
);
export const PressSection = () => (
  <Block id="press" title="Press Releases and Announcements"><List items={ANNOUNCEMENTS} /></Block>
);
