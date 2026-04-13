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
  title: 'P-Shot New York | NYC Patients: P-Shot Treatment in Turkey',
  description:
    'New York patients considering P-Shot in Turkey. Save over $2,500 vs NYC prices. Expert PRP therapy by board-certified specialists. From £350.',
};

const benefits = [
  { icon: 'TrendingDown', title: 'Save $2,500+ vs NYC', description: 'NYC P-Shot clinics charge $2,000–$3,500 — Turkey starts from £350 (approx $450)' },
  { icon: 'ShieldCheck', title: 'JCI-Accredited Clinics', description: 'The same international accreditation standard as the best US hospitals' },
  { icon: 'Heart', title: 'No Insurance Hassle', description: 'P-Shot is rarely covered by US insurance — our transparent pricing eliminates the headache' },
  { icon: 'MessageCircle', title: 'English-Speaking Team', description: 'US patients are welcomed by English-speaking specialists and coordinators' },
  { icon: 'MapPin', title: 'Direct Flights', description: 'Direct flights from JFK and Newark to Istanbul in approximately 10 hours' },
  { icon: 'Clock', title: 'Remote Aftercare', description: '12 months of follow-up support in your time zone, via WhatsApp and video call' },
];

const faqs = [
  {
    question: 'How much can New York patients save on P-Shot in Turkey?',
    answer: 'NYC P-Shot clinics typically charge $2,000–$3,500 per session, with some Manhattan specialists charging more. In Turkey through PShotTurkey, the same treatment costs from £350 (approximately $450 USD). A return business-class flight from JFK to Istanbul is typically $1,200–$2,000; economy is $600–$900. Including 3 nights\' accommodation ($150–$300/night), the total trip cost is typically $1,200–$2,100 — still saving $400–$2,300 versus a single NYC P-Shot session, while delivering a memorable Istanbul experience.',
  },
  {
    question: 'Is P-Shot covered by US health insurance?',
    answer: 'No. P-Shot (PRP therapy for ED) is classified as experimental or elective by US health insurers and is not covered by any major insurance plan. This means the full cost must be paid out of pocket regardless of where treatment takes place. Turkey\'s dramatically lower pricing therefore represents genuine dollar savings with no insurance offset to account for.',
  },
  {
    question: 'How does the clinical quality in Turkey compare to NYC clinics?',
    answer: 'PShotTurkey\'s partner clinics hold JCI accreditation — the same international standard applied to elite US hospitals including Johns Hopkins and Cleveland Clinic. Turkish urologists are board-certified specialists, many of whom completed fellowship training in Europe or the US. The PRP processing equipment and injection protocols are identical to those used in New York. The principal difference between a Manhattan P-Shot and a Turkish P-Shot is that one costs $2,500+ more than the other.',
  },
  {
    question: 'What is the flight time from New York to Istanbul?',
    answer: 'Direct flights from JFK and Newark (EWR) to Istanbul Airport operate on Turkish Airlines and occasionally other carriers. Flight time is approximately 10–11 hours. Many NYC patients find it practical to fly business class, combining comfortable travel with what amounts to a short but meaningful international trip. Istanbul is one of the world\'s great cities — many patients extend their stay by 2–3 days to explore it.',
  },
  {
    question: 'How does aftercare work for US patients?',
    answer: 'PShotTurkey provides 12 months of remote aftercare included in every treatment package. For US patients, we accommodate time zone differences with flexible WhatsApp messaging and scheduled video consultations during your local business hours. All clinical documentation is provided in English, and we can coordinate with your US physician if any local follow-up is needed.',
  },
];

export default function PShotNewYorkPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot for New York Patients', 'P-Shot PRP treatment for New York patients travelling to Turkey — save $2,500+ vs NYC prices.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Treatment for New York Patients – Turkey Guide"
        subtitle="New York men are flying to Turkey for P-Shot PRP treatment — saving over $2,500 versus NYC clinic prices without compromising on quality or expertise."
      />
      <BenefitsSection benefits={benefits} heading="Why New York Patients Choose Turkey for P-Shot" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">NYC vs Turkey: P-Shot Cost & Quality Comparison</h2>
          <div className="text-slate-600 space-y-4">
            <p>New York has among the highest P-Shot prices in the world. A single session at a reputable Manhattan or NYC-area clinic typically costs $2,000–$3,500. For men who benefit from multiple sessions or combination P-Shot and shockwave therapy, the total cost at a NYC clinic can easily reach $10,000–$15,000. Without insurance coverage — which is uniformly unavailable for P-Shot — these costs are entirely out-of-pocket. Turkey changes this equation dramatically.</p>
            <p>Turkey&apos;s JCI-accredited specialist urology clinics offer P-Shot from £350 (approximately $450 USD). A round-trip economy flight from JFK to Istanbul typically costs $600–$900. Three nights in a quality hotel near the clinic runs $150–$400 total. The entire trip — treatment, flights, and accommodation — typically costs $1,200–$2,000. This compares to $2,000–$3,500 for a single NYC clinic visit without any travel experience. For a two-session protocol, the Turkey trip still costs less than a single New York session.</p>
            <p>The JCI accreditation of PShotTurkey&apos;s partner clinics is not marketing — it is the same rigorous international standard applied to institutions like Johns Hopkins Hospital. Turkish urologists delivering P-Shot treatment are board-certified specialists. PRP processing equipment is identical to that in US clinics. The clinical outcome for patients is indistinguishable from what they would receive in Manhattan — except that they have also experienced one of the world&apos;s most extraordinary cities.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">New York patients: start with a free WhatsApp consultation</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">WhatsApp Us Now</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot New York FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
