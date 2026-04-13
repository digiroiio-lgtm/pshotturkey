import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pshotturkey.com';

  const staticPages = [
    '', '/p-shot-turkey', '/p-shot-cost-turkey', '/p-shot-istanbul',
    '/p-shot-antalya', '/erectile-dysfunction-treatment-turkey',
    '/prp-for-ed', '/shockwave-therapy-turkey', '/blog',
    '/privacy-policy', '/terms',
    // Money pages
    '/p-shot-turkey-price', '/p-shot-clinic-turkey', '/p-shot-package-turkey',
    '/best-p-shot-clinic-turkey',
    // City pages
    '/p-shot-izmir', '/genital-prp-turkey', '/prp-injection-turkey',
    // Informational / long-tail
    '/p-shot-before-after-turkey', '/is-p-shot-safe-turkey',
    '/how-many-sessions-p-shot-turkey',
    // Commercial alias pages
    '/ed-treatment-turkey', '/prp-for-ed-turkey',
    '/p-shot-packages-turkey', '/best-p-shot-clinics-turkey',
    // Informational flat-URL pages
    '/how-long-does-p-shot-last', '/is-p-shot-safe',
    '/how-many-sessions-p-shot-needed', '/p-shot-before-after',
    '/does-p-shot-increase-size', '/p-shot-side-effects',
    '/p-shot-vs-shockwave-therapy', '/prp-vs-fillers-for-ed',
    '/who-is-good-candidate-p-shot', '/recovery-after-p-shot',
    '/p-shot-success-rate', '/how-p-shot-works',
    // Country / long-tail pages
    '/p-shot-uk', '/p-shot-usa', '/p-shot-germany',
    '/cheap-p-shot-turkey', '/p-shot-turkey-reviews',
    '/p-shot-turkey-before-after-results',
    // Cannibalization fix — /p-shot-turkey-price and /cheap-p-shot-turkey now redirect to /p-shot-cost-turkey
    // New money/funnel pages
    '/p-shot-near-me', '/p-shot-abroad', '/medical-tourism-ed-treatment',
    // Conversion pages
    '/free-consultation', '/whatsapp-consultation', '/book-treatment',
    // City pages — UK
    '/p-shot-london', '/p-shot-manchester', '/p-shot-birmingham', '/p-shot-leeds',
    // City pages — USA
    '/p-shot-new-york', '/p-shot-los-angeles', '/p-shot-miami',
    // City pages — Germany
    '/p-shot-berlin', '/p-shot-munich',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
