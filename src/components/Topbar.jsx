import { site } from '../config/site';

const icons = {
  Facebook: () => <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M13 22v-8h3l.5-4H13V7.5c0-1.1.3-1.5 1.6-1.5H17V2.1C16.4 2 15.4 2 14.3 2 11.7 2 10 3.7 10 6.7V10H7v4h3v8h3z"/></svg>,
  Instagram: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/></svg>,
  X: () => <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.3l-4.9-6.4L6.2 22H3l7.3-8.3L1.5 2h6.4l4.4 5.8L18.9 2zm-1.1 18h1.7L7 3.9H5.2L17.8 20z"/></svg>,
  YouTube: () => <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M23 7.5s-.2-1.7-.9-2.4c-.9-.9-1.9-.9-2.4-1C16.6 4 12 4 12 4s-4.6 0-7.7.1c-.5.1-1.5.1-2.4 1-.7.7-.9 2.4-.9 2.4S.8 9.4.8 11.3v1.8c0 1.9.2 3.8.2 3.8s.2 1.7.9 2.4c.9.9 2 .9 2.5 1 1.8.2 7.6.3 7.6.3s4.6 0 7.7-.1c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.4.9-2.4s.2-1.9.2-3.8v-1.8c0-1.9-.2-3.8-.2-3.8zM9.9 15.5V8.4l6.3 3.6-6.3 3.5z"/></svg>,
  TikTok: () => <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M19.3 7.6c-1.5.1-2.9-.5-4-1.4v6.9c0 3.4-2.7 6.1-6.1 6.1-3.4 0-6.1-2.7-6.1-6.1S5.8 6.9 9.2 6.9c.3 0 .6 0 .9.1v3.2c-.3-.1-.6-.2-.9-.2-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9V2h3.3c.2 2.4 1.6 4.4 3.9 5.3v3.1c-.5 0-1 .1-1.5.1z"/></svg>,
  WhatsApp: () => <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>,
};


export default function Topbar() {
  return (
    <div style={{ background: 'linear-gradient(90deg, #111312 0%, #163C32 60%, #111312 100%)', color: 'rgba(245,242,234,0.9)', fontSize: '0.72rem', letterSpacing: '0.1em', borderBottom: '1px solid rgba(201,111,74,0.35)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '18px', height: '38px', flexWrap: 'nowrap', overflow: 'hidden' }}>
        <span className="topbar-tag" style={{ fontWeight: 800, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--color-clay)', whiteSpace: 'nowrap' }}>Follow the journey</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', overflow: 'hidden' }}>
          {site.socials.map((s) => {
            const Icon = icons[s.label];
            return (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} className="social-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', border: '1px solid rgba(245,242,234,0.25)', borderRadius: '50%', color: 'rgba(245,242,234,0.85)', transition: 'background 220ms ease, color 220ms ease' }}>
                {Icon && <Icon />}
              </a>
            );
          })}
        </div>
      </div>
      <style>{`
        .topbar-link:hover { color: var(--color-clay); }
        @media (max-width: 640px) { .topbar-tag { display: none; } }
      `}</style>
    </div>
  );
}
