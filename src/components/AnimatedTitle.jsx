import { CLUB } from '../config.js';

export default function AnimatedTitle() {
  return (
    <div className="title">
      <h1 className="title__en" aria-label={CLUB.name}>
        <span className="title__line" data-text="DHARAPURAM">DHARAPURAM</span>
        <span className="title__line" data-text="PRESS CLUB">PRESS CLUB</span>
      </h1>
      <p className="title__ta" lang="ta">{CLUB.tamil}</p>
      <p className="title__tag">{CLUB.tagline}</p>
    </div>
  );
}
