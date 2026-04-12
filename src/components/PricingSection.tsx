'use client';
import Link from 'next/link';
import { useCurrency } from '@/lib/CurrencyContext';
import { formatPrice } from '@/lib/currency';
import { CheckCircle } from 'lucide-react';

const features = [
  'Full medical consultation',
  'Blood draw and PRP preparation',
  'Procedure by certified specialist',
  'Topical anaesthetic included',
  'Post-procedure care pack',
  'English-speaking coordinators',
  '12-month follow-up support',
  'Airport transfer assistance',
];

export default function PricingSection() {
  const { currency } = useCurrency();

  return (
    <section className="py-16 px-4 bg-slate-50" id="pricing">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-4">Transparent Pricing</h2>
        <p className="text-center text-slate-600 mb-12">No hidden fees. No surprises. Pay less, receive world-class care.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Price card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-800">
            <div className="text-center mb-6">
              <p className="text-slate-500 mb-2">P-Shot Treatment in Turkey</p>
              <p className="text-5xl font-bold text-blue-800">{formatPrice(300, currency)}</p>
              <p className="text-slate-400 text-sm mt-2">per session</p>
            </div>
            <ul className="space-y-3 mb-8">
              {features.map(f => (
                <li key={f} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="block w-full text-center bg-blue-800 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Exact Quote
            </Link>
          </div>

          {/* Comparison table */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Price Comparison</h3>
            <div className="space-y-4">
              {[
                { location: 'UK Clinics', price: '£1,500 – £3,000', highlight: false },
                { location: 'USA Clinics', price: '$1,800 – $3,500', highlight: false },
                { location: 'PShotTurkey', price: `From ${formatPrice(300, currency)}`, highlight: true },
              ].map(row => (
                <div
                  key={row.location}
                  className={`flex justify-between items-center p-4 rounded-lg ${
                    row.highlight ? 'bg-blue-50 border-2 border-blue-800' : 'bg-slate-50'
                  }`}
                >
                  <span className={`font-medium ${row.highlight ? 'text-blue-800' : 'text-slate-700'}`}>
                    {row.location}
                  </span>
                  <span className={`font-bold ${row.highlight ? 'text-blue-800 text-lg' : 'text-slate-600'}`}>
                    {row.price}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-slate-500 text-sm">
              Save up to 85% compared to UK clinics. All prices include full procedure — no hidden extras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
