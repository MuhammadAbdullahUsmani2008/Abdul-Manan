import { ImageIcon } from 'lucide-react';

// Elegant, neutral placeholder for future real photography.
// Replace with an actual <img> (or video) when real media is available.
// `variant="hero"` reserves the large cinematic composition used on the homepage.
export default function ImagePlaceholder({ label = 'Photograph coming soon', aspect = '4 / 3', className = '', style = {}, variant }) {
  const isHero = variant === 'hero';
  return (
    <div
      className={`image-placeholder ${isHero ? 'image-placeholder--hero' : ''} ${className}`}
      style={{ aspectRatio: isHero ? undefined : aspect, ...style }}
      role="img"
      aria-label={label}
    >
      {!isHero && (
        <>
          <ImageIcon size={28} aria-hidden="true" />
          <span className="image-placeholder__note">{label}</span>
        </>
      )}
      <style>{`
        .image-placeholder {
          width: 100%;
          border-radius: var(--radius-media);
          background:
            repeating-linear-gradient(45deg, rgba(23,28,25,0.05) 0 12px, rgba(23,28,25,0.025) 12px 24px),
            #EAE7DE;
          border: 1px solid var(--color-border);
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;
          color: var(--color-moss);
          font-size: var(--text-small); font-weight: 600; text-align: center; padding: 20px;
        }
        .image-placeholder--hero {
          border-radius: 0;
          border: none;
          background:
            radial-gradient(1000px 620px at 65% 30%, rgba(101,123,107,0.35), transparent 65%),
            radial-gradient(700px 500px at 20% 80%, rgba(201,111,74,0.10), transparent 60%),
            repeating-linear-gradient(45deg, rgba(245,242,234,0.05) 0 14px, rgba(245,242,234,0.02) 14px 28px),
            linear-gradient(155deg, #16211D 0%, #163C32 55%, #24473C 100%);
          color: rgba(245,242,234,0.55);
        }
        .image-placeholder__note { max-width: 260px; }
      `}</style>
    </div>
  );
}
