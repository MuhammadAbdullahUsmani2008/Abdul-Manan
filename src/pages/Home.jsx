import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import Reveal from '../hooks/Reveal';
import { usePageMeta } from '../hooks/usePageMeta';
import StoryRow from '../components/StoryRow';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Newsletter from '../components/Newsletter';
import Hero from '../components/Hero';
import abdulmananPhoto from '../assets/3.jpg';
import { featuredStory, stories } from '../data/stories';

export default function Home() {
  usePageMeta('', 'Abdul Manan shares real stories of struggling people and helps them rebuild their lives and start small businesses.');

  const approach = [
    { no: '01', title: 'Listen', quote: 'Before helping, we understand.', text: 'Discover real stories of people facing difficult circumstances.' },
    { no: '02', title: 'Understand', quote: 'Every situation is different.', text: 'Understand their situation, skills, needs, and aspirations.' },
    { no: '03', title: 'Empower', quote: 'Help people build their own future.', text: 'Where possible, help create an opportunity for them to stand on their own feet.' },
  ];

  const help = [
    { no: '01', title: 'Small Business', text: 'Helping people start or strengthen a small livelihood.' },
    { no: '02', title: 'Livelihood Support', text: 'Supporting hardworking people facing difficult circumstances.' },
    { no: '03', title: 'Essential Needs', text: 'Helping families with important everyday needs.' },
    { no: '04', title: 'Community Support', text: 'Small efforts that can make everyday life easier.' },
  ];

  return (
    <main>
      <Hero />

      {/* MANIFESTO */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: '24px' }}>Introduction</p>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4.6vw, 3.6rem)' }}>
              Every person has a story behind the struggle.
            </h2>
            <p style={{ marginTop: '28px', color: 'var(--color-text-secondary)', fontSize: 'var(--text-large)', maxWidth: '620px' }}>
              Behind every difficult situation is a person, a family, and a story. The work begins by listening - and, where possible, it continues by helping create a path toward a more stable future.
            </p>
          </Reveal>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: '16px' }}>The Approach</p>
            <h2 style={{ marginBottom: '60px' }}>How a story becomes an opportunity.</h2>
          </Reveal>
          {approach.map((a, i) => (
            <Reveal as="div" key={a.no} delay={i * 80}>
              <div className="approach-row" style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1.2fr', gap: '32px', alignItems: 'baseline', padding: '36px 0', borderTop: '1px solid var(--color-border)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 5.5rem)', color: 'var(--color-clay)', lineHeight: 1 }}>{a.no}</span>
                <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{a.title}</h3>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--color-forest)' }}>“{a.quote}”</p>
                  <p style={{ marginTop: '10px', color: 'var(--color-text-secondary)' }}>{a.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <div style={{ borderTop: '1px solid var(--color-border)' }} />
          <style>{`@media (max-width: 820px) { .approach-row { grid-template-columns: 70px 1fr !important; } .approach-row > div { grid-column: 2; } }`}</style>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '36px' }}>
              <p className="eyebrow">Featured Story</p>
              <Link to="/stories" className="link-arrow">All stories <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Link to={`/stories/${featuredStory.slug}`} style={{ display: 'block', overflow: 'hidden', borderRadius: 'var(--radius-media)' }}>
              <div className="featured-zoom">{featuredStory.image ? <img src={featuredStory.image} alt={featuredStory.title} style={{ width: '100%', aspectRatio: '21 / 10', objectFit: 'cover' }} /> : <ImagePlaceholder label={featuredStory.imageLabel} aspect="21 / 10" />}</div>
            </Link>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '40px', marginTop: '36px', alignItems: 'start' }} className="featured-meta">
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              <Link to={`/stories/${featuredStory.slug}`}>{featuredStory.title}</Link>
            </h2>
            <div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-large)' }}>{featuredStory.excerpt}</p>
              <p style={{ marginTop: '18px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-muted-text)' }}>
                {featuredStory.date} · {featuredStory.location}
              </p>
              <Link to={`/stories/${featuredStory.slug}`} className="link-arrow" style={{ display: 'inline-flex', marginTop: '22px' }}>Read the story <ArrowRight size={16} /></Link>
            </div>
          </div>
          <style>{`
            .featured-zoom { transition: transform 400ms ease; }
            .featured-zoom:hover { transform: scale(1.02); }
            @media (max-width: 860px) { .featured-meta { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* PEOPLE */}
      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: '16px' }}>The People</p>
            <h2 style={{ marginBottom: '56px' }}>People, not numbers.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }} className="people-grid">
            {stories.slice(3, 5).map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <Link to={`/stories/${s.slug}`}>
                  {s.image ? <img src={s.image} alt={s.title} style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 'var(--radius-media)' }} /> : <ImagePlaceholder label={s.imageLabel} aspect="4 / 3" />}
                  <p style={{ marginTop: '18px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-clay)' }}>Story {String(i + 1).padStart(2, '0')}</p>
                  <h3 style={{ marginTop: '8px' }}>{s.title}</h3>
                  <p style={{ marginTop: '6px', fontSize: '0.8rem', color: 'var(--color-muted-text)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.date}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <style>{`@media (max-width: 820px) { .people-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* WHAT HELP CAN LOOK LIKE */}
      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: '16px' }}>What Help Can Look Like</p>
            <h2 style={{ marginBottom: '50px' }}>Sometimes, help means a new beginning.</h2>
          </Reveal>
          {help.map((h, i) => (
            <Reveal as="div" key={h.no} delay={i * 60}>
              <div className="help-row" style={{ display: 'grid', gridTemplateColumns: '70px 1fr 1fr', gap: '24px', alignItems: 'baseline', padding: '30px 0', borderTop: '1px solid var(--color-border)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-muted-text)' }}>{h.no}</span>
                <h3 style={{ fontSize: '1.7rem' }}>{h.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>{h.text}</p>
              </div>
            </Reveal>
          ))}
          <div style={{ borderTop: '1px solid var(--color-border)' }} />
          <style>{`
            .help-row { transition: padding-left 240ms ease; }
            .help-row:hover { padding-left: 16px; }
            @media (max-width: 820px) { .help-row { grid-template-columns: 44px 1fr !important; } .help-row p { grid-column: 2; } }
          `}</style>
        </div>
      </section>

      {/* STORIES ARCHIVE */}
      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: '16px' }}>Archive</p>
            <h2 style={{ marginBottom: '50px' }}>Stories of hope.</h2>
          </Reveal>
          <div>
            {stories.slice(0, 5).map((s, i) => (
              <Reveal key={s.slug} as="div" delay={i * 50}><StoryRow story={s} index={i} /></Reveal>
            ))}
            <div style={{ borderTop: '1px solid var(--color-border)' }} />
          </div>
          <div style={{ marginTop: '46px', textAlign: 'center' }}>
            <Link to="/stories" className="btn btn-outline">View the archive</Link>
          </div>
        </div>
      </section>

      {/* SIGNATURE STATEMENT */}
      <section className="section" style={{ background: 'var(--color-obsidian)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '860px' }}>
          <Reveal>
            <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.2, color: 'var(--color-ivory)' }}>
              “A small opportunity can change the direction of a life.”
            </blockquote>
            <p style={{ marginTop: '26px', fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-clay)', fontWeight: 700 }}>The belief behind every story</p>
          </Reveal>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section">
        <div className="container about-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '56px', alignItems: 'center' }}>
          <Reveal><img src={abdulmananPhoto} alt="Abdul Manan" style={{ width: '100%', borderRadius: 'var(--radius-media)', aspectRatio: '4 / 4.8', objectFit: 'cover' }} /></Reveal>
          <Reveal delay={100}>
            <p className="eyebrow" style={{ marginBottom: '16px' }}>Meet Abdul Manan</p>
            <h2 style={{ marginBottom: '24px' }}>Sharing real stories. Helping people rebuild.</h2>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              I'm a content creator sharing real stories of struggling people often forgotten by society. I support them by helping them rebuild their lives and start small businesses, bringing hope and new opportunities.
            </p>
            <p style={{ marginTop: '16px', color: 'var(--color-text-secondary)' }}>
              My priority is those people who are struggling to even run their household, yet working hard day and night - and those who have skills but lack the resources to start something of their own.
            </p>
            <Link to="/about" className="link-arrow" style={{ display: 'inline-flex', marginTop: '28px' }}>More about Abdul Manan <ArrowRight size={16} /></Link>
          </Reveal>
          <style>{`@media (max-width: 860px) { .about-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* FAITH */}
      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '760px' }}>
          <Reveal>
            <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.6vw, 2.8rem)', lineHeight: 1.3, color: 'var(--color-forest)' }}>
              “And whoever relies upon Allah, then He is sufficient for him.”
            </blockquote>
            <p style={{ marginTop: '24px', fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-muted-text)', fontWeight: 700 }}>Qur'an 65:3</p>
          </Reveal>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="section" style={{ background: 'var(--color-forest)' }}>
        <div className="container">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: '16px' }}>Get Involved</p>
            <h2 style={{ color: 'var(--color-ivory)', marginBottom: '56px', maxWidth: '640px' }}>There are many ways to help.</h2>
          </Reveal>
          {[
            { no: '01', title: 'Share a Story', text: 'Know someone whose story deserves to be heard?' },
            { no: '02', title: 'Support an Opportunity', text: 'Help someone move toward self-reliance.' },
            { no: '03', title: 'Get in Touch', text: 'Have an idea or want to collaborate?' },
          ].map((item, i) => (
            <Reveal as="div" key={item.no} delay={i * 70}>
              <Link to="/contact" className="involve-row" style={{ display: 'grid', gridTemplateColumns: '70px 1.2fr 1fr 30px', gap: '24px', alignItems: 'baseline', padding: '30px 0', borderTop: '1px solid rgba(245,242,234,0.2)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--color-clay)' }}>{item.no}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--color-ivory)' }}>{item.title}</span>
                <span style={{ color: 'rgba(245,242,234,0.65)' }}>{item.text}</span>
                <span aria-hidden="true" style={{ color: 'var(--color-clay)', fontSize: '1.3rem' }}>→</span>
              </Link>
            </Reveal>
          ))}
          <div style={{ borderTop: '1px solid rgba(245,242,234,0.2)' }} />
          <style>{`
            .involve-row { transition: padding-left 240ms ease; }
            .involve-row:hover { padding-left: 16px; }
            @media (max-width: 820px) { .involve-row { grid-template-columns: 44px 1fr 24px !important; } .involve-row > span:nth-child(3) { grid-column: 2; } }
          `}</style>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
