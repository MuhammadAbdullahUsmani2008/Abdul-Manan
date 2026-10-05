import { Link } from 'react-router-dom';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', as: Tag = 'h2' }) {
  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? '640px' : '720px', marginInline: align === 'center' ? 'auto' : 0, marginBottom: '48px' }}>
      {eyebrow && <p className="eyebrow" style={{ marginBottom: '14px' }}>{eyebrow}</p>}
      <Tag>{title}</Tag>
      {subtitle && <p style={{ marginTop: '16px', color: 'var(--color-text-secondary)', fontSize: 'var(--text-large)' }}>{subtitle}</p>}
    </div>
  );
}
