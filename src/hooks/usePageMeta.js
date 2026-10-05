import { useEffect } from 'react';

// Sets page title + meta description for basic SEO.
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} - Abdul Manan` : 'Abdul Manan - Real Stories. New Beginnings.';
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
    window.scrollTo(0, 0);
  }, [title, description]);
}
