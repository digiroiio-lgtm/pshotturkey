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
  title: 'P-Shot Los Angeles | LA Patients: P-Shot Treatment in Turkey',
  description:
    'Los Angeles patients considering P-Shot in Turkey. Save over $2,000 vs LA prices. World-class PRP therapy from board-certified specialists. From £350.',
};

const benefits = [
  { icon: 'TrendingDown', title: 'Save $2,000+ vs LA Prices', description: 'LA P-Shot clinics charge $1,800–$3,500 — Turkey starts from £350 (approx $450)' },
  { icon: 'ShieldCheck', title: 'World-Class Facilities', description: 'JCI-accredited clinics meeting the same international standard as leading US hospitals' },
  { icon: 'Heart', title: 'No Insurance Issues', description: 'P-Shot is not covered by US insurance — Turkey\'s transparent pricing removes complexity' },
  { icon: 'MessageCircle', title: 'English Team', description: 'Full English-language support from consultation through to 12-month aftercare' },
  { icon: 'Clock', title: '12-Month Aftercare', description: 'Remote post-treatment support adapted to US West Coast time zones' },
  { icon: 'Globe', title: 'Combine with Istanbul Visit', description: 'Istanbul is one of the world\'s great travel destinations — many LA patients extend their stay' },
];

const faqs = [
  {
    question: 'How much can Los Angeles patients save on P-Shot in Turkey?',
    answer: 'Los Angeles P-Shot clinics typically charge $1,800–$3,000 per session. In Turkey through PShotTurkey, treatment starts from £350 (approximately $450 USD). Flights from LAX to Istanbul are approximately 14–15 hours with a connection; round-trip economy fares average $700–$1,200. Including accommodation, the total trip is typically $1,400–$2,200 — often comparable to or less than a single LA clinic visit, while delivering the same clinical quality and the bonus of an Istanbul experience.',
  },
  {
    question: 'Is the flight from Los Angeles to Turkey practical for medical travel?',
    answer: 'LA to Istanbul requires a connecting flight, typically through European hubs (London Heathrow, Amsterdam, Frankfurt) or Middle Eastern hubs (Dubai, Doha). Total journey time is 14–16 hours. Many LA patients choose to fly business class, making the journey comfortable and using the trip as an opportunity to experience Istanbul. For US patients seeking the best possible P-Shot outcome at the most affordable price, the journey is well worth it — particularly for multi-session protocols where the cumulative saving is $5,000 or more.',
  },
  {
    question: 'How does the P-Shot quality in Turkey compare to LA clinics?',
    answer: 'PShotTurkey\'s partner clinics are JCI-accredited specialist urology facilities with board-certified physicians. The PRP processing equipment, treatment protocols, and clinical standards are identical to those at the best LA clinics. Turkish specialists typically have significantly higher P-Shot procedure volume than most Western providers, as Turkey\'s medical tourism sector concentrates expertise rapidly. Many patients report that the attention to detail and patient experience in Turkish clinics exceeds what they received domestically.',
  },
  {
    question: 'What aftercare is available for LA patients?',
    answer: 'PShotTurkey provides 12 months of remote aftercare with time zone accommodation for US patients. WhatsApp messaging is available throughout your day, and video consultations can be scheduled during Pacific Standard Time business hours. All clinical documentation is provided in English. For the rare event requiring in-person follow-up, we coordinate with your LA physician.',
  },
  {
    question: 'Can LA patients combine P-Shot treatment with sightseeing in Istanbul?',
    answer: 'Absolutely, and many do. Istanbul is widely regarded as one of the world\'s most remarkable cities — straddling Europe and Asia, with extraordinary history, cuisine, and architecture. Many LA patients extend their stay by 3–5 days to explore the city. Our team can provide recommendations for tourist experiences, restaurants, and areas to stay that combine well with your clinical itinerary.',
  },
];

export default function PShotLosAngelesPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot for Los Angeles Patients', 'P-Shot PRP treatment for Los Angeles patients travelling to Turkey — save $2,000+ vs LA prices.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Treatment for Los Angeles Patients – Turkey Guide"
        subtitle="LA men are combining Turkey travel with world-class P-Shot therapy — saving thousands versus local clinic prices and enjoying a memorable medical trip."
      />
      <BenefitsSection benefits={benefits} heading="Why LA Patients Choose Turkey for P-Shot" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Los Angeles vs Turkey: P-Shot Value Comparison</h2>
          <div className="text-slate-600 space-y-4">
            <p>Los Angeles has a well-developed private healthcare market with numerous P-Shot providers — but at prices reflecting LA&apos;s high cost of living and the absence of any insurance coverage for this treatment. A single LA P-Shot session costs $1,800–$3,000, and combination protocols (P-Shot plus shockwave therapy) can exceed $5,000–$7,000. For many men, these prices make optimal treatment effectively inaccessible.</p>
            <p>Turkey offers the same clinical outcome at a fraction of the price. PShotTurkey&apos;s partner clinics in Istanbul are JCI-accredited and staffed by specialist urologists whose P-Shot procedure volume typically exceeds that of most US providers, because Turkey&apos;s concentrated medical tourism market rapidly builds expertise in high-demand treatments. The PRP processing systems and injection protocols are identical to those used in LA clinics. The patient experience — personalised care, English-speaking coordinators, seamless logistics — is frequently described by US patients as superior to their domestic clinic experiences.</p>
            <p>The combination of genuine clinical excellence, transparent pricing, and the extraordinary destination of Istanbul makes Turkey the optimal choice for LA patients seeking P-Shot. Even accounting for the longer flight from the West Coast, the total cost of treatment in Turkey — including flights, accommodation, and the procedure itself — is typically comparable to or less than a single session at a reputable LA clinic. For patients who need multiple sessions, the savings are dramatic.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">LA patients: get your free consultation now</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">WhatsApp Us Now</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Los Angeles FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
