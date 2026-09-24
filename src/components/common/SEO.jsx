import React, { useEffect } from 'react';
import { clinicInfo } from '../../data/clinic.js';

export default function SEO({
  title = "TPMB ANNISA LL - Sahabat Terbaik Ibu & Buah Hati",
  description = "Tempat Praktik Mandiri Bidan TPMB ANNISA LL. Pelayanan kehamilan ANC, persalinan gentle birth 24 jam, nifas, bayi baru lahir, imunisasi, MTBS, konseling laktasi, dan KB.",
  path = "/"
}) {
  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title.includes("TPMB ANNISA LL") ? title : `${title} | TPMB ANNISA LL`;
    document.title = formattedTitle;

    // Helper to set or create meta tag
    const setMeta = (attribute, name, content) => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta
    setMeta('name', 'description', description);

    // 3. OpenGraph Tags
    setMeta('property', 'og:title', formattedTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', clinicInfo.name);

    const canonicalUrl = typeof window !== 'undefined'
      ? `${window.location.origin}${window.location.pathname}${path.startsWith('/') ? path : '/' + path}`
      : `https://tpmb-annisa-ll.id${path}`;
    setMeta('property', 'og:url', canonicalUrl);

    // 4. Twitter Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', formattedTitle);
    setMeta('name', 'twitter:description', description);

    // 5. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

  }, [title, description, path]);

  return null;
}
