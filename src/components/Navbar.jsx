import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { site } from '../config/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const overHero = pathname === '/' && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const textColor = overHero ? '#fff' : 'var(--color-primary-dark)';

  return (
    <header style={{
      '--nav-underline': overHero ? 'var(--color-cream)' : 'var(--color-forest)',
      position: 'relative', left: 0, right: 0, zIndex: 50,
      background: overHero ? 'transparent' : 'var(--color-cream)',
      backdropFilter: overHero ? 'none' : 'blur(14px)',
      borderBottom: overHero ? '1px solid transparent' : '1px solid var(--color-border)',
      transition: 'background 260ms ease, border-color 260ms ease, backdrop-filter 260ms ease',
    }}>
      <nav className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }} aria-label="Main navigation">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/logo.png" alt="" width="38" height="38" style={{ width: '38px', height: '38px', borderRadius: '50%', display: 'block' }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.28em', textTransform: 'uppercase', color: textColor, transition: 'color 260ms ease' }}>Abdul Manan</span>
        </Link>

        <ul className="desktop-nav" style={{ display: 'flex', gap: '30px', listStyle: 'none', alignItems: 'center' }}>
          {site.nav.filter((i) => i.to !== '/').map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className="nav-link" style={({ isActive }) => ({ fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.02em', color: 'var(--nav-underline)', paddingBottom: '4px', borderBottom: isActive ? `2px solid var(--color-accent)` : '2px solid transparent', transition: 'color 200ms ease, border-color 200ms ease' })}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="desktop-cta">
          <Link to="/contact" className={overHero ? 'btn btn-light nav-cta-over-hero' : 'btn btn-primary'} style={{ padding: '10px 22px', fontSize: '0.9rem', border: '1.5px solid var(--color-cream)' }}>Get Involved</Link>
        </div>

        <button className="mobile-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)} style={{ padding: '10px', color: overHero && !open ? '#fff' : 'var(--color-primary-dark)' }}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="mobile-menu" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', padding: '8px var(--pad-mobile) 28px', maxHeight: 'calc(100vh - 102px)', overflowY: 'auto' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
            {site.nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} style={({ isActive }) => ({ display: 'block', padding: '16px 4px', fontSize: '1.2rem', fontWeight: 700, fontFamily: 'var(--font-display)', color: isActive ? 'var(--color-primary)' : 'var(--color-text)', borderBottom: '1px solid var(--color-border)' })}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '20px', width: '100%' }}>Get Involved</Link>
        </div>
      )}

      <style>{`
        .nav-link { position: relative; display: inline-block; }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 2px;
          background: var(--nav-underline, var(--color-forest));
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 300ms ease;
        }
        .nav-link:hover::after,
        .nav-link:focus-visible::after { transform: scaleX(1); }
        /* over the hero: no fill, so the button borrows the hero's own background;
           the cream outline keeps it readable. Hover fills it cream. */
        .desktop-cta .nav-cta-over-hero { background: transparent; color: var(--color-cream); }
        .desktop-cta .nav-cta-over-hero:hover { background: var(--color-cream); color: var(--color-forest); }
        @media (max-width: 860px) {
          .desktop-nav, .desktop-cta { display: none !important; }
        }
        @media (min-width: 861px) {
          .mobile-toggle, .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
}
