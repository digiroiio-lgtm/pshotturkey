'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import CurrencyToggle from './CurrencyToggle';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'P-Shot', href: '/p-shot-turkey' },
    { label: 'Pricing', href: '/p-shot-cost-turkey' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-blue-800">
            PShotTurkey
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-blue-800 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <CurrencyToggle />
            <Link
              href="#contact"
              className="bg-blue-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-slate-700 hover:text-blue-800 font-medium py-1"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <CurrencyToggle />
          </div>
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block bg-blue-800 text-white px-4 py-2 rounded-lg font-semibold text-center mt-2"
          >
            Free Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
