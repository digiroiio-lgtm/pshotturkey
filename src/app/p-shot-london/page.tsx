import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import TrustSection from '@/components/TrustSection';
import CTASection from '@/components/CTASection';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getMedicalProcedureSchema, getFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'P-Shot London | London Patients: P-Shot Treatment in Turkey',
  description:
    'London patients travelling to Turkey for P-Shot treatment. Save up to 85% vs London clinic prices. 3-hour flight, expert care, from £350.',
};

const benefits = [
  { icon: 'Clock', title: '3-Hour Flight from London', description: 'Direct flights from Heathrow and Gatwick to Istanbul in under 3 hours' },
  { icon: 'TrendingDown', title: 'Save vs London Prices', description: 'London P-Shot clinics charge £2,000–£4,000 — Turkey starts from £350' },
  { icon: 'ShieldCheck', title: 'No GP Referral', description: 'Book directly without waiting for a GP referral or NHS urology appointment' },
  { icon: 'Zap', title: 'Same-Day Treatment', description: 'Arrive, consult, and complete your P-Shot in a single visit' },
  { icon: 'MessageCircle', title: 'English-Speaking Team', description: 'Full English support from initial enquiry through to 12-month aftercare' },
  { icon: 'MapPin', title: 'Airport Transfer Included', description: 'We arrange your transfer from Istanbul Airport to the clinic and back' },
];

const faqs = [
  {
    question: 'Why are London patients choosing Turkey for P-Shot?',
    answer: 'London P-Shot clinics charge £2,000–£4,000 per session. Turkey offers the same treatment — using identical equipment and protocols, performed by equivalently qualified urologists in JCI-accredited clinics — from £350. A return flight from Heathrow or Gatwick to Istanbul costs £80–£200, and the total trip including accommodation typically comes in at £600–£900. The saving is £1,200–£3,000 per treatment session. For men who need multiple sessions, the savings are even more significant.',
  },
  {
    question: 'How long is the flight from London to Istanbul?',
    answer: 'Direct flights from Heathrow or Gatwick to Istanbul Sabiha Gokcen or Istanbul Airport take approximately 3–3.5 hours. There are multiple daily direct flights on carriers including British Airways, Turkish Airlines, EasyJet, and Pegasus. Many London patients fly out on a Thursday evening, have treatment on Friday, spend the weekend in Istanbul, and return Monday morning — a very practical schedule.',
  },
  {
    question: 'What is the best airport to use from London for P-Shot in Turkey?',
    answer: 'Heathrow and Gatwick both have excellent direct connections to Istanbul. Gatwick often has the best-value fares on budget carriers. If your clinic is in Antalya, flights from Gatwick or Stansted typically take 3.5–4 hours. Our team can advise on the most convenient airport and airline based on your preferred travel dates and clinic location.',
  },
  {
    question: 'How does P-Shot quality in Turkey compare to London clinics?',
    answer: 'PShotTurkey\'s partner clinics are JCI-accredited — the same international standard as the best London private hospitals. PRP processing equipment is identical or superior. Urologists are board-certified specialists, many of whom trained in Europe. The principal difference between a London P-Shot and a Turkish P-Shot is the price — and the experience of Istanbul as a backdrop to your treatment.',
  },
  {
    question: 'What aftercare do London patients receive after returning home?',
    answer: 'All patients receive 12 months of remote aftercare included in their treatment package. This covers WhatsApp messaging, email support, and video consultations. London-based patients can also be referred to their GP with full clinical documentation if any in-person follow-up is needed. The vast majority of post-procedure queries are fully resolvable remotely.',
  },
];

export default function PShotLondonPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot for London Patients', 'P-Shot PRP treatment for London patients travelling to Turkey — 3-hour flight, 85% savings.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Treatment for London Patients – Turkey Guide"
        subtitle="London men are choosing Turkey for P-Shot over expensive local clinics. 3-hour flight, 85% savings, and the same JCI-accredited quality standard."
      />
      <BenefitsSection benefits={benefits} heading="Why London Patients Choose Turkey for P-Shot" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">London vs Turkey: P-Shot Cost & Quality</h2>
          <div className="text-slate-600 space-y-4">
            <p>London has the highest concentration of P-Shot providers in the UK, but also the highest prices. A single P-Shot session at a reputable London clinic in 2026 typically costs £2,000–£4,000. Some specialist sexual health clinics in Harley Street and central London charge even more. For a treatment that many men benefit from repeating, these prices make ongoing care prohibitively expensive for most patients. Turkey changes this calculation entirely.</p>
            <p>Istanbul is 3 hours from Heathrow by direct flight — shorter than the train from London to Edinburgh. Turkish Airlines, British Airways, EasyJet, and Pegasus all operate multiple daily direct services. PShotTurkey&apos;s partner clinics in Istanbul are JCI-accredited specialist facilities with board-certified urologists who have treated thousands of international patients. The PRP processing equipment is identical to that used in London clinics. The clinical protocols are identical. The one significant difference is the price: from £350 in Turkey versus £2,000–£4,000 in London.</p>
            <p>For London patients, the maths are compelling. Return flights average £100–£200. Two nights at a quality hotel near the clinic costs £80–£200 total. Total trip: approximately £550–£750. Total saving versus a London clinic: £1,250–£3,250 on a single session. For patients who benefit from two or three sessions, or who combine P-Shot with shockwave therapy, the total savings over a treatment course can exceed £5,000.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">London patients: get your free consultation today</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">WhatsApp Us Now</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot London FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
