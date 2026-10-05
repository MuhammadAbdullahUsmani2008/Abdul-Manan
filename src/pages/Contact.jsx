import { useState } from 'react';
import { MapPin, Mail } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { site } from '../config/site';

const socialIcons = {
  Facebook: () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M13 22v-8h3l.5-4H13V7.5c0-1.1.3-1.5 1.6-1.5H17V2.1C16.4 2 15.4 2 14.3 2 11.7 2 10 3.7 10 6.7V10H7v4h3v8h3z"/></svg>,
  Instagram: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/></svg>,
  X: () => <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.3l-4.9-6.4L6.2 22H3l7.3-8.3L1.5 2h6.4l4.4 5.8L18.9 2zm-1.1 18h1.7L7 3.9H5.2L17.8 20z"/></svg>,
  YouTube: () => <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M23 7.5s-.2-1.7-.9-2.4c-.9-.9-1.9-.9-2.4-1C16.6 4 12 4 12 4s-4.6 0-7.7.1c-.5.1-1.5.1-2.4 1-.7.7-.9 2.4-.9 2.4S.8 9.4.8 11.3v1.8c0 1.9.2 3.8.2 3.8s.2 1.7.9 2.4c.9.9 2 .9 2.5 1 1.8.2 7.6.3 7.6.3s4.6 0 7.7-.1c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.4.9-2.4s.2-1.9.2-3.8v-1.8c0-1.9-.2-3.8-.2-3.8zM9.9 15.5V8.4l6.3 3.6-6.3 3.5z"/></svg>,
  TikTok: () => <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M19.3 7.6c-1.5.1-2.9-.5-4-1.4v6.9c0 3.4-2.7 6.1-6.1 6.1-3.4 0-6.1-2.7-6.1-6.1S5.8 6.9 9.2 6.9c.3 0 .6 0 .9.1v3.2c-.3-.1-.6-.2-.9-.2-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9V2h3.3c.2 2.4 1.6 4.4 3.9 5.3v3.1c-.5 0-1 .1-1.5.1z"/></svg>,
  WhatsApp: () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>,
};

export default function Contact() {
  usePageMeta('Contact', "Have a question, want to share someone's story, or want to work together? Get in touch.");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Frontend-only for now - no backend/email service is configured.
    setSent(true);
  }

  const field = { width: '100%', padding: '15px 16px', borderRadius: 'var(--radius-input)', border: '1px solid var(--color-border)', background: 'var(--color-white)' };

  return (
    <main>
      <section className="section">
        <div className="container contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '64px', alignItems: 'start' }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: '18px' }}>Contact</p>
            <h1>Let's Connect.</h1>
            <p style={{ marginTop: '20px', color: 'var(--color-text-secondary)', fontSize: 'var(--text-large)' }}>
              Have a question, want to share someone's story, or want to work together? Get in touch.
            </p>
            <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '14px', color: 'var(--color-text-secondary)' }}>
              <p style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><MapPin size={18} color="var(--color-clay)" /> {site.location}</p>
              <p style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><Mail size={18} color="var(--color-clay)" /> <a href={`mailto:${site.email}`}>{site.email}</a></p>
            </div>
            <div style={{ marginTop: '34px' }}>
              <h2 style={{ fontSize: '1.2rem', marginBottom: '14px' }}>Follow</h2>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {site.socials.map((s) => {
                  const Icon = socialIcons[s.label];
                  return (
                    <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={`Abdul Manan on ${s.label}`} className="contact-social" style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-border)', borderRadius: '50%', color: 'var(--color-text-secondary)', transition: 'background 220ms ease, color 220ms ease, border-color 220ms ease' }}>
                      {Icon && <Icon />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {sent ? (
            <div role="status" style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-media)', padding: '44px' }}>
              <h2 style={{ fontSize: '2rem' }}>Thank you for reaching out.</h2>
              <p style={{ marginTop: '14px', color: 'var(--color-text-secondary)' }}>
                The form is currently a frontend preview - messaging will go live once an email/backend service is connected.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-media)', padding: '40px 36px', display: 'grid', gap: '20px' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', fontWeight: 700, marginBottom: '8px', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Your Name *</label>
                <input id="name" name="name" required style={field} />
              </div>
              <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                <div>
                  <label htmlFor="email" style={{ display: 'block', fontWeight: 700, marginBottom: '8px', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Email Address</label>
                  <input id="email" name="email" type="email" style={field} />
                </div>
                <div>
                  <label htmlFor="phone" style={{ display: 'block', fontWeight: 700, marginBottom: '8px', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Phone Number</label>
                  <input id="phone" name="phone" type="tel" style={field} />
                </div>
              </div>
              <div>
                <label htmlFor="city" style={{ display: 'block', fontWeight: 700, marginBottom: '8px', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>City *</label>
                <input id="city" name="city" required style={field} />
              </div>
              <div>
                <label htmlFor="message" style={{ display: 'block', fontWeight: 700, marginBottom: '8px', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Message *</label>
                <textarea id="message" name="message" required rows={6} style={{ ...field, resize: 'vertical' }} />
              </div>
              <button type="submit" className="btn btn-primary" style={{ justifySelf: 'start' }}>Send Message</button>
            </form>
          )}
        </div>
        <style>{`@media (max-width: 860px) { .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </section>
    </main>
  );
}
