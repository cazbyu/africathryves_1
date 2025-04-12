import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export function SEO({ 
  title = 'Africa Thryves',
  description = 'Empowering African entrepreneurs to create sustainable businesses and transform communities.',
  keywords = ['Africa', 'Entrepreneurship', 'Business', 'Social Impact'],
  image = 'https://africathryves.com/og-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : '',
}: SEOProps) {
  const siteTitle = `${title} | Africa Thryves`;
  
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}