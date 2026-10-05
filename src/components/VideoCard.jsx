import { Play } from 'lucide-react';

// Ready to accept a real video URL later - when `url` is present, embed it.
export default function VideoCard({ video, large = false }) {
  return (
    <article style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <a href={video.url || undefined} target={video.url ? '_blank' : undefined} rel="noreferrer" aria-label={video.url ? `Watch: ${video.title}` : `${video.title} - video coming soon`}
        style={{ display: 'block', position: 'relative', aspectRatio: '16 / 10', borderRadius: 'var(--radius-media)', overflow: 'hidden', background: 'linear-gradient(160deg, #173D32, #245C4A)' }}>
        <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,255,255,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-dark)' }}>
            <Play size={26} fill="currentColor" />
          </span>
        </span>
        <span style={{ position: 'absolute', bottom: '12px', right: '14px', fontSize: '0.8rem', color: '#fff', background: 'rgba(0,0,0,0.35)', padding: '4px 10px', borderRadius: '999px' }}>{video.duration}</span>
      </a>
      <div>
        <p style={{ fontSize: 'var(--text-small)', color: 'var(--color-accent)', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{video.category}</p>
        <h3 style={{ fontSize: '1.15rem', marginTop: '8px' }}>{video.title}</h3>
        <p style={{ fontSize: 'var(--text-small)', color: 'var(--color-text-secondary)', marginTop: '6px' }}>{video.date}</p>
      </div>
    </article>
  );
}
