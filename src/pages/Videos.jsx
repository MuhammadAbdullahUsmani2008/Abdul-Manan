import Reveal from '../hooks/Reveal';
import { usePageMeta } from '../hooks/usePageMeta';
import VideoCard from '../components/VideoCard';
import { videos } from '../data/videos';

export default function Videos() {
  usePageMeta('Videos', 'Watch the journeys - stories meant to be felt.');
  const [featured, ...rest] = videos;
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: '16px' }}>Video Library</p>
          <h1>Watch the Journey</h1>
          <p style={{ marginTop: '18px', color: 'var(--color-text-secondary)', fontSize: 'var(--text-large)', maxWidth: '560px' }}>
            Stories aren't just meant to be read. They're meant to be felt.
          </p>

          <Reveal>
            <div style={{ marginTop: '60px', position: 'relative', aspectRatio: '16 / 9', borderRadius: 'var(--radius-media)', overflow: 'hidden', background: '#000' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/CTf-n49ECnk?si=MgPg4Y58msOhn4od"
                title={featured.title}
                style={{ position: 'absolute', inset: 0, border: 0, width: '100%', height: '100%' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <h2 style={{ marginTop: '22px', fontSize: 'clamp(1.4rem, 2.6vw, 2.2rem)' }}>{featured.title}</h2>
            <p style={{ color: 'var(--color-muted-text)', fontSize: '0.8rem', letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: '6px' }}>{featured.date} · {featured.category}</p>
          </Reveal>

          <div style={{ marginTop: '56px', display: 'grid', gap: '36px', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
            {rest.map((v, i) => (
              <Reveal key={v.id} delay={(i % 3) * 70}>
                {v.url ? (
                  <div>
                    <div style={{ position: 'relative', aspectRatio: '16 / 9', borderRadius: 'var(--radius-media)', overflow: 'hidden', background: '#000' }}>
                      <iframe
                        src={v.url}
                        title={v.title}
                        style={{ position: 'absolute', inset: 0, border: 0, width: '100%', height: '100%' }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                    <h3 style={{ marginTop: '14px', fontSize: '1.15rem' }}>{v.title}</h3>
                    <p style={{ color: 'var(--color-muted-text)', fontSize: '0.8rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '4px' }}>{v.date} · {v.category}</p>
                  </div>
                ) : (
                  <VideoCard video={v} />
                )}
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: '56px', textAlign: 'center' }}>
            <a href="https://www.youtube.com/@RandomEaterS/videos" target="_blank" rel="noreferrer" className="btn btn-primary">Watch more on YouTube</a>
          </div>
          <p style={{ marginTop: '44px', color: 'var(--color-muted-text)', fontSize: 'var(--text-small)' }}>
            All videos are embedded from the official Abdul Manan YouTube channel.
          </p>
        </div>
      </section>
    </main>
  );
}
