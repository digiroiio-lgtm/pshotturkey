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
