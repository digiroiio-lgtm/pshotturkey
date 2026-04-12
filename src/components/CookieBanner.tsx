'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900 text-white px-4 py-4 shadow-xl">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300 text-center sm:text-left">
          We use cookies to improve your experience and for analytics. See our{' '}
          <Link href="/privacy-policy" className="underline text-blue-300 hover:text-blue-200">
            Privacy Policy
          </Link>{' '}
          for details. By continuing to use this site, you consent to our use of cookies in accordance with GDPR.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={accept}
            className="bg-blue-800 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            Accept
          </button>
          <button
            onClick={decline}
            className="bg-slate-700 hover:bg-slate-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
