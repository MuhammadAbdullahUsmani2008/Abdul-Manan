import { useMemo, useState } from 'react';
import Reveal from '../hooks/Reveal';
import { usePageMeta } from '../hooks/usePageMeta';
import StoryRow from '../components/StoryRow';
import { stories, categories } from '../data/stories';
import { Link } from 'react-router-dom';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { ArrowRight } from 'lucide-react';

export default function Stories() {
  usePageMeta('Stories', 'Stories of hope - real people, real struggles, real journeys.');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const featuredStory = stories[0];
  const filtered = useMemo(() => {
    return stories.filter((s) => {
      const inCategory = category === 'All' || s.category === category;
      const inQuery = !query.trim() || (s.title + ' ' + s.excerpt).toLowerCase().includes(query.toLowerCase());
      return inCategory && inQuery;
    });
  }, [query, category]);

  const archiveStories = filtered.filter((s) => s.slug !== featuredStory.slug);

  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: '16px' }}>Archive</p>
          <h1 style={{ maxWidth: '640px' }}>Stories of Hope</h1>
          <p style={{ marginTop: '18px', color: 'var(--color-text-secondary)', fontSize: 'var(--text-large)', maxWidth: '560px' }}>
            Real people. Real struggles. Real journeys.
          </p>

          {/* Featured */}
          <div style={{ marginTop: '70px', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '40px', alignItems: 'center' }} className="featured-row">
            <Link to={`/stories/${featuredStory.slug}`} style={{ overflow: 'hidden', borderRadius: 'var(--radius-media)', display: 'block' }}>
              {featuredStory.image ? (
                <img src={featuredStory.image} alt={featuredStory.title} style={{ width: '100%', aspectRatio: '16 / 10', objectFit: 'cover' }} />
              ) : (
                <ImagePlaceholder label="Featured story photo - coming soon" aspect="16 / 10" />
              )}
            </Link>
            <div>
              <p className="eyebrow" style={{ marginBottom: '14px' }}>Featured</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}><Link to={`/stories/${featuredStory.slug}`}>{featuredStory.title}</Link></h2>
              <p style={{ marginTop: '16px', color: 'var(--color-text-secondary)' }}>{featuredStory.excerpt}</p>
              <Link to={`/stories/${featuredStory.slug}`} className="link-arrow" style={{ display: 'inline-flex', marginTop: '22px' }}>Read the story <ArrowRight size={16} /></Link>
            </div>
          </div>
          <style>{`@media (max-width: 860px) { .featured-row { grid-template-columns: 1fr !important; } }`}</style>

          {/* Filters */}
          <div style={{ marginTop: '80px', display: 'flex', flexWrap: 'wrap', gap: '22px', borderBottom: '1px solid var(--color-border)', paddingBottom: '14px', alignItems: 'center', justifyContent: 'space-between' }}>
            <div role="group" aria-label="Filter by category" style={{ display: 'flex', gap: '22px', flexWrap: 'wrap' }}>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                  style={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '6px 0', color: category === c ? 'var(--color-obsidian)' : 'var(--color-muted-text)', borderBottom: category === c ? '2px solid var(--color-clay)' : '2px solid transparent' }}
                >
                  {c}
                </button>
              ))}
            </div>
            <div style={{ position: 'relative', minWidth: '220px' }}>
              <label htmlFor="story-search" className="sr-only">Search stories</label>
              <input
                id="story-search"
                type="search"
                placeholder="Search stories…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ width: '100%', padding: '10px 4px', border: 'none', borderBottom: '1px solid var(--color-border)', background: 'transparent', fontSize: '0.95rem' }}
              />
            </div>
          </div>

          <div style={{ marginTop: '20px' }}>
            {archiveStories.length === 0 ? (
              <p style={{ color: 'var(--color-text-secondary)', padding: '40px 0' }}>No stories match your search yet.</p>
            ) : (
              archiveStories.map((s, i) => (
                <Reveal as="div" key={s.slug} delay={(i % 4) * 50}><StoryRow story={s} index={i} /></Reveal>
              ))
            )}
            {archiveStories.length > 0 && <div style={{ borderTop: '1px solid var(--color-border)' }} />}
          </div>
        </div>
      </section>
    </main>
  );
}
