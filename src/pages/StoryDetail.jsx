import { useParams, Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import ImagePlaceholder from '../components/ImagePlaceholder';
import StoryRow from '../components/StoryRow';
import { getStoryBySlug, relatedStories } from '../data/stories';
import { ArrowLeft } from 'lucide-react';

const SECTION_LABELS = [
  ['introduction', 'Introduction'],
  ['theStory', 'The Story'],
  ['theChallenge', 'The Challenge'],
  ['theSupport', 'The Support'],
  ['theJourney', 'The Journey'],
  ['note', "Abdul Manan's Note"],
];

export default function StoryDetail() {
  const { slug } = useParams();
  const story = getStoryBySlug(slug);
  usePageMeta(story ? story.title : 'Story Not Found', story?.excerpt || undefined);

  if (!story) {
    return (
      <main className="section">
        <div className="container">
          <h1>Story not found</h1>
          <Link to="/stories" className="link-arrow" style={{ display: 'inline-flex', marginTop: '20px' }}><ArrowLeft size={16} /> Back to Stories</Link>
        </div>
      </main>
    );
  }

  const sections = story.sections || {};
  const hasSections = SECTION_LABELS.some(([key]) => sections[key]);

  return (
    <main>
      <article className="section">
        <div className="container" style={{ maxWidth: '880px' }}>
          <Link to="/stories" className="link-arrow" style={{ display: 'inline-flex', marginBottom: '40px' }}><ArrowLeft size={16} /> All Stories</Link>
          <p style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--color-clay)', marginBottom: '20px' }}>
            Story {story.category ? `· ${story.category}` : ''}
          </p>
          <h1>{story.title}</h1>
          <p style={{ marginTop: '18px', color: 'var(--color-muted-text)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            {story.date}{story.location ? ` · ${story.location}` : ''}
          </p>
        </div>
        <div className="container" style={{ maxWidth: '1080px', marginTop: '50px' }}>
          {story.video ? (
            <div style={{ position: 'relative', aspectRatio: '16 / 9', borderRadius: 'var(--radius-media)', overflow: 'hidden', background: '#000' }}>
              <iframe
                src={story.video}
                title={story.title}
                style={{ position: 'absolute', inset: 0, border: 0, width: '100%', height: '100%' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ) : story.image ? (
            <img src={story.image} alt={story.imageLabel || story.title} style={{ width: '100%', borderRadius: 'var(--radius-media)', aspectRatio: '16 / 9', objectFit: 'cover' }} />
          ) : (
            <ImagePlaceholder label={story.imageLabel} aspect="16 / 9" />
          )}
        </div>
        <div className="container" style={{ maxWidth: '720px', marginTop: '60px' }}>
          {hasSections ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
              {SECTION_LABELS.map(([key, label]) =>
                sections[key] ? (
                  <section key={key}>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '14px' }}>{label}</h2>
                    {sections[key].split('\n\n').map((para, i) => (
                      <p key={i} style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-large)', lineHeight: 1.8, marginBottom: i < sections[key].split('\n\n').length - 1 ? '18px' : 0 }}>{para}</p>
                    ))}
                  </section>
                ) : null
              )}
            </div>
          ) : (
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-large)', lineHeight: 1.8 }}>
              {story.excerpt || 'Full story content for this entry will be added soon.'}
            </p>
          )}
        </div>
      </article>

      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <p className="eyebrow" style={{ marginBottom: '16px' }}>Continue Reading</p>
          <h2 style={{ marginBottom: '40px' }}>Related stories.</h2>
          {relatedStories(slug).map((s, i) => (
            <StoryRow key={s.slug} story={s} index={i} />
          ))}
          <div style={{ borderTop: '1px solid var(--color-border)' }} />
        </div>
      </section>
    </main>
  );
}
