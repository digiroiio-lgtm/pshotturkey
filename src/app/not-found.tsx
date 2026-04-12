import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
