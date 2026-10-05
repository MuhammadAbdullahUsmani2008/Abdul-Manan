import { Link } from 'react-router-dom';
import Reveal from '../hooks/Reveal';
import { usePageMeta } from '../hooks/usePageMeta';
import ImagePlaceholder from '../components/ImagePlaceholder';
import abdulmananPhoto from '../assets/3.jpg';
import { ArrowRight } from 'lucide-react';

export default function About() {
  usePageMeta('About', 'Meet Abdul Manan - a content creator sharing real stories of struggling people and helping them rebuild their lives.');

  const steps = [
    { no: '01', title: 'Discover' },
    { no: '02', title: 'Understand' },
    { no: '03', title: 'Verify' },
    { no: '04', title: 'Support' },
    { no: '05', title: 'Follow the Journey' },
  ];

  return (
    <main>
      <section className="section">
        <div className="container" style={{ maxWidth: '860px' }}>
          <p className="eyebrow" style={{ marginBottom: '18px' }}>About</p>
          <h1>My Story</h1>
          <blockquote style={{ marginTop: '30px', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--color-forest)', lineHeight: 1.3 }}>
            “And whoever relies upon Allah, then He is sufficient for him.”
          </blockquote>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '56px', alignItems: 'center' }}>
          <Reveal><img src={abdulmananPhoto} alt="Abdul Manan" style={{ width: '100%', borderRadius: 'var(--radius-media)', aspectRatio: '4 / 4.6', objectFit: 'cover' }} /></Reveal>
          <Reveal delay={100}>
            <p className="eyebrow" style={{ marginBottom: '16px' }}>Introduction</p>
            <p style={{ color: 'var(--color-obsidian)', fontSize: 'var(--text-large)', fontFamily: 'var(--font-display)', lineHeight: 1.5 }}>
              I'm Abdul Manan, a content creator sharing real stories of struggling people often forgotten by society.
            </p>
            <p style={{ marginTop: '20px', color: 'var(--color-text-secondary)' }}>
              My priority is those people who are struggling to even run their household, yet working hard day and night.
            </p>
            <p style={{ marginTop: '14px', color: 'var(--color-text-secondary)' }}>
              I focus on those who have skills but lack the resources to start something of their own.
            </p>
          </Reveal>
        </div>
        <style>{`@media (max-width: 860px) { .about-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container" style={{ maxWidth: '980px' }}>
          <p className="eyebrow" style={{ marginBottom: '16px' }}>The Method</p>
          <h2 style={{ marginBottom: '50px' }}>My approach.</h2>
          {steps.map((s, i) => (
            <Reveal as="div" key={s.no} delay={i * 60}>
              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '24px', alignItems: 'baseline', padding: '28px 0', borderTop: '1px solid var(--color-border)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--color-clay)' }}>{s.no}</span>
                <h3 style={{ fontSize: '1.7rem' }}>{s.title}</h3>
              </div>
            </Reveal>
          ))}
          <div style={{ borderTop: '1px solid var(--color-border)' }} />
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '760px' }}>
          <p className="eyebrow" style={{ marginBottom: '20px' }}>Philosophy</p>
          <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--color-obsidian)', lineHeight: 1.2 }}>
            “Allah helps the one who helps others.”
          </blockquote>
          <p style={{ marginTop: '20px', color: 'var(--color-muted-text)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}>Sahih Muslim (2699)</p>
          <Link to="/stories" className="btn btn-outline" style={{ marginTop: '40px' }}>Read the stories <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
