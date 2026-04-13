import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import PricingSection from '@/components/PricingSection';
import BenefitsSection from '@/components/BenefitsSection';
import FAQSection from '@/components/FAQSection';
import TrustSection from '@/components/TrustSection';
import CTASection from '@/components/CTASection';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getFAQSchema, organizationSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'P-Shot Turkey Price 2026 | How Much Does P-Shot Cost in Turkey?',
  description:
    'P-Shot price in Turkey starts from £240 — up to 85% cheaper than the UK. Full 2026 pricing breakdown, what is included, and how to book your treatment.',
};

const benefits = [
  { icon: 'TrendingDown', title: 'From £240 Per Session', description: 'Industry-leading prices with no compromise on quality' },
  { icon: 'ShieldCheck', title: 'Transparent Pricing', description: 'No hidden fees — consultation, PRP, and aftercare included' },
  { icon: 'Award', title: 'Board-Certified Specialists', description: 'Procedures by qualified urologists in JCI-accredited clinics' },
  { icon: 'Clock', title: 'Same-Day Treatment', description: 'Arrive, consult, and treat in a single visit if required' },
  { icon: 'Heart', title: '12-Month Aftercare', description: 'Ongoing support included in every treatment package' },
  { icon: 'Star', title: 'Best Price Guarantee', description: 'We match any like-for-like quote from a verified Turkish clinic' },
];

const faqs = [
  {
    question: 'What is the price of a P-Shot in Turkey in 2026?',
    answer: 'A single P-Shot session in Turkey costs from £240 (approximately €280 / $300 USD). Package deals covering 2-3 sessions are available at further reduced rates. Contact us for your personalised quote.',
  },
  {
    question: 'What is included in the P-Shot price?',
    answer: 'Our quoted price includes the initial consultation, blood draw and PRP preparation, the full P-Shot procedure, topical anaesthetic, aftercare materials, and 12-months of post-treatment support. There are no hidden extras.',
  },
  {
    question: 'How does the Turkey price compare to the UK?',
    answer: 'In the UK, a single P-Shot session typically costs £1,500–£3,000. In Turkey with PShotTurkey, the same procedure starts from £240 — a saving of up to 85%. Even after adding flights and accommodation, most UK patients save over £1,000.',
  },
  {
    question: 'Are there package deals for multiple P-Shot sessions?',
    answer: 'Yes. We offer discounted packages for patients requiring 2-3 sessions. Combination packages including shockwave therapy (LiSWT) are also available. Speak to our team to find the best value package for your needs.',
  },
  {
    question: 'Can I pay in GBP, EUR, or USD?',
    answer: 'Yes. We accept payment in GBP, EUR, and USD. Payments can be made by bank transfer or card. A small deposit is required to secure your booking, with the balance payable before treatment.',
  },
  {
    question: 'Is the quality lower because the price is so much cheaper?',
    answer: 'Absolutely not. Turkey\'s lower prices reflect lower operating costs, favourable exchange rates, and strong competition among clinics — not lower quality. Turkish clinics hold the same JCI accreditation as top UK and US hospitals.',
  },
];

export default function PShotTurkeyPricePage() {
  return (
    <>
      <SchemaMarkup schemas={[organizationSchema, getFAQSchema(faqs)]} />
      <HeroSection
        title="P-Shot Turkey Price – From £240 in 2026"
        subtitle="Full P-Shot pricing in Turkey, what's included, and why thousands of men choose Turkey for world-class PRP treatment at a fraction of UK costs."
      />
      <PricingSection />
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">P-Shot Price Comparison: Turkey vs UK 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4">Item</th>
                  <th className="p-4">UK Clinics</th>
                  <th className="p-4 bg-blue-800">PShotTurkey</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['P-Shot (1 session)', '£1,500 – £3,000', 'From £240'],
                  ['P-Shot (2 sessions)', '£3,000 – £6,000', 'From £420'],
                  ['P-Shot + Shockwave Combo', '£3,500 – £7,000', 'From £580'],
                  ['Initial Consultation', '£100 – £300', 'FREE'],
                  ['PRP Preparation', 'Often extra', 'Included'],
                  ['12-Month Aftercare', 'Limited / extra charge', 'Included FREE'],
                  ['Total (typical single session)', '£2,000+', 'From £240 + travel'],
                ].map(([item, uk, turkey]) => (
                  <tr key={item} className="border-b border-gray-100 even:bg-slate-50">
                    <td className="p-4 font-medium text-slate-800">{item}</td>
                    <td className="p-4 text-slate-600">{uk}</td>
                    <td className="p-4 text-blue-800 font-semibold bg-blue-50">{turkey}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <BenefitsSection benefits={benefits} heading="What Your P-Shot Price Includes" />
      <FAQSection faqs={faqs} heading="P-Shot Turkey Price FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
