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
  title: 'P-Shot Leeds | Leeds Patients: P-Shot Turkey Treatment',
  description:
    'Leeds patients travelling to Turkey for P-Shot. Fly from Leeds Bradford or Manchester Airport. Up to 85% savings vs UK prices. From £350.',
};

const benefits = [
  { icon: 'MapPin', title: 'Flights from Leeds Bradford', description: 'Fly from Leeds Bradford Airport (LBA) or nearby Manchester Airport (MAN)' },
  { icon: 'TrendingDown', title: 'Major Cost Savings', description: 'P-Shot from £350 in Turkey vs £1,500–£2,500 at UK clinics' },
  { icon: 'ShieldCheck', title: 'No GP Referral', description: 'Contact us directly — no NHS referral pathway required' },
  { icon: 'Award', title: 'Expert Care', description: 'Board-certified urologists in JCI-accredited Turkish clinics' },
  { icon: 'Zap', title: 'Same-Day Treatment', description: 'Complete your P-Shot procedure in a single clinic visit' },
  { icon: 'Heart', title: '12-Month Aftercare', description: 'Remote support for a full year after your treatment' },
];

const faqs = [
  {
    question: 'What are the best flight options for Leeds patients travelling to Turkey?',
    answer: 'Leeds Bradford Airport (LBA) has charter and seasonal direct flights to Turkish destinations including Antalya. For year-round access to Istanbul, Manchester Airport (MAN) — approximately 45 minutes from Leeds — offers extensive direct connections to Istanbul and Antalya. Passengers can also travel by train to London (just over 2 hours) to access the widest range of flights from Heathrow or Gatwick.',
  },
  {
    question: 'How much do Leeds patients save by choosing Turkey for P-Shot?',
    answer: 'P-Shot in Leeds and Yorkshire typically costs £1,500–£2,500 per session at private clinics. In Turkey, treatment starts from £350. Including flights (£100–£220) and accommodation (£80–£180 for 2 nights), the total trip is typically £530–£750 — saving £750–£1,750 versus a local UK clinic per treatment session.',
  },
  {
    question: 'Are P-Shot providers available in Leeds?',
    answer: 'P-Shot availability in Leeds is very limited. Most men in Yorkshire who want this treatment either travel to London or go abroad. Turkey offers a far more accessible option: readily available appointments within 1–2 weeks, competitive pricing, and a dedicated international patient service — without the need to travel to the capital.',
  },
  {
    question: 'Is aftercare effective for patients based in Leeds?',
    answer: 'Yes. PShotTurkey\'s 12-month remote aftercare programme works effectively for patients anywhere in the world. WhatsApp messaging, email, and video consultations with our clinical team are available to all patients after returning home. For the small number of cases requiring in-person follow-up, we coordinate with your GP in Leeds, providing complete clinical documentation.',
  },
  {
    question: 'How long does the treatment trip typically take?',
    answer: 'Most Leeds patients plan a 3-day trip: travel on day one, treatment on day two, return on day three. Some patients extend their stay to enjoy Istanbul or Antalya. The total time from departure to return home is typically 48–72 hours for a straightforward single-session P-Shot.',
  },
];

export default function PShotLeedsPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot for Leeds Patients', 'P-Shot PRP treatment for Leeds patients travelling to Turkey — fly from LBA or MAN, major savings.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Turkey for Leeds Patients"
        subtitle="Leeds men are travelling to Turkey for affordable, expert P-Shot PRP treatment. Fly from LBA or MAN for outstanding care at a fraction of local clinic prices."
      />
      <BenefitsSection benefits={benefits} heading="Why Leeds Patients Choose Turkey for P-Shot" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">P-Shot from Leeds: Your Complete Guide</h2>
          <div className="text-slate-600 space-y-4">
            <p>Leeds and the wider Yorkshire region have limited P-Shot availability — most men seeking this treatment find themselves facing long journeys to London or prohibitive prices at local clinics. Turkey provides a logical and practical solution. With Manchester Airport just 45 minutes away and Leeds Bradford Airport offering seasonal direct connections, Turkish clinics are often more accessible than a London specialist while offering far superior value for money.</p>
            <p>PShotTurkey&apos;s partner clinics in Istanbul and Antalya offer immediate appointment availability, fully accredited clinical environments, and prices that are 75–85% lower than UK equivalents. For a Yorkshire patient paying for a one-session London P-Shot at £2,000+, the cost of a full Turkey trip — including flights, accommodation, and treatment — represents a substantial saving rather than additional expense. The clinical quality is identical; the experience of treatment in Istanbul or Antalya adds an unexpected dimension to what is otherwise a medical procedure.</p>
            <p>Our patient coordination service handles all logistics for Leeds patients: flight recommendations, hotel bookings near the clinic, airport transfers, and pre-and post-treatment clinical support. From first WhatsApp message to completed treatment typically takes 2–3 weeks, with the in-Turkey portion of the trip lasting just 2–3 days.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Leeds patients: book your free consultation now</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">WhatsApp Us Now</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Leeds FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
