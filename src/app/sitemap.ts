import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pshotturkey.com';

  const staticPages = [
    '', '/p-shot-turkey', '/p-shot-cost-turkey', '/p-shot-istanbul',
    '/p-shot-antalya', '/erectile-dysfunction-treatment-turkey',
    '/prp-for-ed', '/shockwave-therapy-turkey', '/blog',
    '/privacy-policy', '/terms'
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
