import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
}

const trustBadges = [
  '500+ Patients Treated',
  'ISO Certified Clinics',
  'Free Consultation',
];

export default function HeroSection({
  title,
  subtitle,
  ctaText = 'Check Your Eligibility',
  ctaHref = '#contact',
}: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          {title}
        </h1>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href={ctaHref}
            className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            {ctaText}
          </Link>
          <a
            href="https://wa.me/905353998999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            Send Your Case on WhatsApp
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {trustBadges.map(badge => (
            <div key={badge} className="flex items-center gap-2 text-blue-100">
              <CheckCircle size={20} className="text-amber-400 flex-shrink-0" />
              <span className="font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
