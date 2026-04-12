import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-posts';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | P-Shot & ED Treatment Insights',
  description:
    'Expert articles on P-Shot treatment, erectile dysfunction, PRP therapy, and men\'s sexual health. Stay informed with PShotTurkey\'s medical blog.',
};

const categories = ["All", "Erectile Dysfunction", "PRP Therapy", "Men's Health"] as const;

export default function BlogPage() {
  return (
    <div className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">PShotTurkey Blog</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Expert insights on P-Shot treatment, erectile dysfunction, PRP therapy, and men&apos;s sexual health.
          </p>
        </div>

        {/* Category labels */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(cat => (
            <span
              key={cat}
              className="px-4 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article key={post.slug} className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h2 className="text-lg font-bold text-slate-800 mb-2 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-800 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-blue-700 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Read <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
