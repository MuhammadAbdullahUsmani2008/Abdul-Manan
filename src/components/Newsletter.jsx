import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    // UI-only for now. Wire to a real subscription service later.
    setDone(true);
    setEmail('');
  }

  return (
    <section className="section" style={{ background: 'var(--color-ivory)' }}>
      <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
        <p className="eyebrow" style={{ marginBottom: '16px' }}>Newsletter</p>
        <h2>Stay Connected.</h2>
        <p style={{ marginTop: '16px', color: 'var(--color-text-secondary)' }}>
          Follow the journeys of people turning difficult chapters into new beginnings.
        </p>
        <form onSubmit={handleSubmit} style={{ marginTop: '34px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ flex: '1 1 260px', padding: '15px 18px', borderRadius: 'var(--radius-input)', border: '1px solid var(--color-border)', background: 'var(--color-white)' }}
          />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
        {done && <p role="status" style={{ marginTop: '16px', color: 'var(--color-forest)', fontWeight: 600 }}>Thank you - subscription wiring comes with the backend. (UI preview)</p>}
      </div>
      <style>{`.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }`}</style>
    </section>
  );
}
