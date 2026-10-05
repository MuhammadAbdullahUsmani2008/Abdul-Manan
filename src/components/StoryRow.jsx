import { Link } from 'react-router-dom';

// Editorial archive row used on Home / Stories / Story detail.
export default function StoryRow({ story, index }) {
  return (
    <Link to={`/stories/${story.slug}`} className="story-row" style={{ display: 'grid', gridTemplateColumns: '52px 72px 1fr auto 32px', gap: '20px', alignItems: 'center', padding: '24px 0', borderTop: '1px solid var(--color-border)' }}>
      <span className="story-row__no" style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--color-muted-text)' }}>{String(index + 1).padStart(2, '0')}</span>
      <span style={{ width: '72px', aspectRatio: '1 / 1', borderRadius: '8px', overflow: 'hidden', background: 'var(--color-surface-soft)', display: 'block' }}>
        {story.image ? (
          <img src={story.image} alt={story.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <span style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'var(--color-moss)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Photo</span>
        )}
      </span>
      <span style={{ minWidth: 0 }}>
        <span className="story-row__title" style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 2.4vw, 1.8rem)', color: 'var(--color-obsidian)', lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', transition: 'transform 240ms ease, color 240ms ease' }}>{story.title}</span>
        {story.excerpt && <span className="sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>{story.excerpt}</span>}
      </span>
      <span style={{ textAlign: 'right', fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-muted-text)', fontWeight: 700, whiteSpace: 'nowrap' }}>
        {story.category ? `${story.category} · ` : ''}{story.date}
      </span>
      <span className="story-row__arrow" aria-hidden="true" style={{ color: 'var(--color-clay)', fontSize: '1.2rem', transition: 'transform 240ms ease' }}>→</span>
      <style>{`
        .story-row:hover .story-row__title { transform: translateX(10px); color: var(--color-forest); }
        .story-row:hover .story-row__arrow { transform: translateX(6px); }
        .story-row:hover .story-row__no { color: var(--color-clay); }
        @media (max-width: 767px) {
          .story-row { grid-template-columns: 30px 52px 1fr 20px !important; gap: 12px !important; }
          .story-row > span:nth-child(4) { display: none; }
          .story-row > span:nth-child(2) { width: 52px !important; }
        }
      `}</style>
    </Link>
  );
}
