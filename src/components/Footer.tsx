import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-2">PShotTurkey</h2>
            <p className="text-gray-400">World-class P-Shot &amp; ED treatment in Turkey</p>
            <p className="mt-4 text-gray-400 text-sm">
              Helping men from the UK, Europe, and beyond access affordable, high-quality sexual health treatment in Turkey.
            </p>
          </div>

          {/* Column 2: Treatments */}
          <div>
            <h3 className="text-white font-semibold mb-4">Treatments</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/p-shot-turkey" className="hover:text-white transition-colors">P-Shot Turkey</Link></li>
              <li><Link href="/erectile-dysfunction-treatment-turkey" className="hover:text-white transition-colors">ED Treatment Turkey</Link></li>
              <li><Link href="/shockwave-therapy-turkey" className="hover:text-white transition-colors">Shockwave Therapy</Link></li>
              <li><Link href="/prp-for-ed" className="hover:text-white transition-colors">PRP for ED</Link></li>
              <li><Link href="/genital-prp-turkey" className="hover:text-white transition-colors">Genital PRP Turkey</Link></li>
              <li><Link href="/prp-injection-turkey" className="hover:text-white transition-colors">PRP Injection Turkey</Link></li>
              <li><Link href="/p-shot-package-turkey" className="hover:text-white transition-colors">P-Shot Packages</Link></li>
              <li><Link href="/p-shot-turkey-price" className="hover:text-white transition-colors">P-Shot Price Turkey</Link></li>
              <li><Link href="/p-shot-cost-turkey" className="hover:text-white transition-colors">P-Shot Cost Guide</Link></li>
            </ul>
          </div>

          {/* Column 3: Istanbul & Antalya */}
          <div>
            <h3 className="text-white font-semibold mb-4">Istanbul &amp; Antalya</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/p-shot-istanbul" className="hover:text-white transition-colors">P-Shot Istanbul</Link></li>
              <li><Link href="/p-shot-antalya" className="hover:text-white transition-colors">P-Shot Antalya</Link></li>
            </ul>
            <h3 className="text-white font-semibold mt-6 mb-4">Izmir</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/p-shot-izmir" className="hover:text-white transition-colors">P-Shot Izmir</Link></li>
            </ul>
            <h3 className="text-white font-semibold mt-6 mb-4">Clinic Info</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/p-shot-clinic-turkey" className="hover:text-white transition-colors">P-Shot Clinics Turkey</Link></li>
              <li><Link href="/best-p-shot-clinic-turkey" className="hover:text-white transition-colors">Best P-Shot Clinics</Link></li>
            </ul>
          </div>

          {/* Column 4: Guides & Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Guides &amp; Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/p-shot-before-after-turkey" className="hover:text-white transition-colors">P-Shot Before &amp; After</Link></li>
              <li><Link href="/is-p-shot-safe-turkey" className="hover:text-white transition-colors">Is P-Shot Safe?</Link></li>
              <li><Link href="/how-many-sessions-p-shot-turkey" className="hover:text-white transition-colors">How Many Sessions?</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact */}
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

