import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-posts';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "PShotTurkey"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PShotTurkey",
      "url": "https://pshotturkey.com"
    }
  };

  return (
    <>
      <SchemaMarkup schemas={[articleSchema]} />
      <div className="py-12 px-4 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 mb-8 font-medium">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>

          <h1 className="text-4xl font-bold text-slate-800 mb-4 leading-tight">{post.title}</h1>

          <div className="flex items-center gap-4 text-slate-500 text-sm mb-8">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>

          <p className="text-lg text-slate-600 mb-8 font-medium border-l-4 border-blue-800 pl-4">
            {post.excerpt}
          </p>

          <div
            className="prose prose-slate max-w-none text-slate-700 leading-relaxed [&>p]:mb-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 p-6 bg-blue-50 rounded-xl">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Ready to take the next step?</h3>
            <p className="text-slate-600 mb-4">Get a free consultation with our specialists and find out if P-Shot treatment is right for you.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#contact" className="bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center">
                Free Consultation
              </Link>
              <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-500 transition-colors text-center">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
