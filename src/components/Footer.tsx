import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">PShotTurkey</h2>
            <p className="text-gray-400">World-class P-Shot treatment in Turkey</p>
            <p className="mt-4 text-gray-400 text-sm">
              Helping men from the UK, Europe, and beyond access affordable, high-quality sexual health treatment in Turkey.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/905391234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +90 539 123 4567
                </a>
              </li>
              <li className="text-gray-400">Istanbul, Turkey</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © 2024 PShotTurkey. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
