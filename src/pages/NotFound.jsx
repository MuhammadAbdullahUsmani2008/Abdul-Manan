import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta('Page Not Found');
  return (
    <main className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h1>Page not found</h1>
        <p style={{ marginTop: '14px', color: 'var(--color-text-secondary)' }}>The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '26px' }}>Back Home</Link>
      </div>
    </main>
  );
}
