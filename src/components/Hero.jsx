import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__media hero-anim hero-anim--media">
        <ImagePlaceholder variant="hero" label="Abdul Manan documentary photograph - coming soon" />
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <div className="container hero__content">
        <p className="hero__eyebrow hero-anim hero-anim--1">Sahiwal · Pakistan</p>
        <h1 className="hero__title hero-anim hero-anim--2">
          Real Stories.<br />Real Struggles.<br />New Beginnings.
        </h1>
        <p className="hero__lede hero-anim hero-anim--3">
          I share the stories of people who continue to work hard despite difficult circumstances - and help them find opportunities to rebuild their lives.
        </p>
        <div className="hero__actions hero-anim hero-anim--4">
          <Link to="/stories" className="btn btn-light">Explore Stories</Link>
          <Link to="/about" className="btn btn-hero-ghost">About Abdul Manan</Link>
        </div>
        <p className="hero__meta hero-anim hero-anim--5">Stories of people · Opportunities for tomorrow</p>
      </div>

      <p className="hero__scroll hero-anim hero-anim--5" aria-hidden="true">
        Scroll <ArrowDown size={14} />
      </p>

      <style>{`
        .hero { position: relative; min-height: 100vh; display: flex; align-items: flex-end; overflow: hidden; background: var(--color-obsidian); }
        .hero__media { position: absolute; inset: 0; }
        .hero__media .image-placeholder { height: 100%; }
        .hero__scrim { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(17,19,18,0.25) 0%, rgba(17,19,18,0.0) 35%, rgba(17,19,18,0.82) 100%); }
        .hero__content { position: relative; z-index: 2; padding-bottom: 90px; padding-top: 140px; }
        .hero__eyebrow { font-size: 0.75rem; font-weight: 800; letter-spacing: 0.32em; text-transform: uppercase; color: var(--color-clay); margin-bottom: 28px; }
        .hero__title { font-size: var(--text-hero); color: var(--color-ivory); max-width: 900px; font-weight: 500; }
        .hero__lede { margin-top: 28px; max-width: 540px; font-size: var(--text-large); color: rgba(245,242,234,0.8); }
        .hero__actions { display: flex; gap: 14px; margin-top: 40px; flex-wrap: wrap; }
        .hero__meta { margin-top: 46px; font-size: 0.7rem; letter-spacing: 0.26em; text-transform: uppercase; color: rgba(245,242,234,0.5); font-weight: 700; }
        .hero__scroll { position: absolute; right: 40px; bottom: 40px; z-index: 2; display: flex; align-items: center; gap: 8px; font-size: 0.68rem; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(245,242,234,0.55); font-weight: 700; writing-mode: vertical-rl; }

        .hero-anim { opacity: 0; transform: translateY(20px); animation: heroIn 800ms ease forwards; }
        .hero-anim--1 { animation-delay: 150ms; }
        .hero-anim--2 { animation-delay: 300ms; }
        .hero-anim--3 { animation-delay: 480ms; }
        .hero-anim--4 { animation-delay: 640ms; }
        .hero-anim--5 { animation-delay: 820ms; }
        .hero-anim--media { animation: heroMediaIn 1400ms ease forwards; }
        @keyframes heroIn { to { opacity: 1; transform: none; } }
        @keyframes heroMediaIn { from { opacity: 0.4; transform: scale(1.05); } to { opacity: 1; transform: scale(1); } }

        @media (max-width: 960px) {
          .hero { min-height: 96vh; }
          .hero__scroll { display: none; }
          .hero__content { padding-bottom: 70px; }
        }
        @media (max-width: 767px) {
          .hero__content { padding-top: 120px; padding-bottom: 56px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-anim, .hero-anim--media { animation: none; opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
