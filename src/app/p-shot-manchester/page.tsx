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
  title: 'P-Shot Manchester | Manchester Patients: P-Shot Turkey',
  description:
    'Manchester patients travelling to Turkey for P-Shot. Direct flights from Manchester Airport. Save up to 85% vs UK prices. Expert PRP care from £350.',
};

const benefits = [
  { icon: 'MapPin', title: 'Direct Flights from Manchester', description: 'Direct services from Manchester Airport (MAN) to Istanbul and Antalya' },
  { icon: 'TrendingDown', title: 'Major Cost Savings', description: 'Save 75–85% versus private UK clinic pricing for P-Shot' },
  { icon: 'Zap', title: 'No Waiting List', description: 'Appointments typically available within 1–2 weeks — no NHS waiting times' },
  { icon: 'MessageCircle', title: 'English-Speaking Team', description: 'Full English support throughout your treatment journey' },
  { icon: 'ShieldCheck', title: 'Same-Day Treatment', description: 'Arrive and complete your P-Shot procedure in one visit' },
  { icon: 'Heart', title: '12-Month Aftercare', description: 'Remote post-treatment support for a full year after your procedure' },
];

const faqs = [
  {
    question: 'Are there direct flights from Manchester to Turkey?',
    answer: 'Yes. Manchester Airport operates direct flights to Istanbul (both Sabiha Gokcen and Istanbul Airport) and to Antalya. Turkish Airlines, Pegasus, and TUI all operate routes from MAN. Flight time is approximately 4 hours. Many Manchester patients find it more convenient to fly from MAN than to travel to London first, making Turkey an even more practical destination.',
  },
  {
    question: 'How much can Manchester patients save by choosing Turkey?',
    answer: 'P-Shot providers in Manchester and the broader North West typically charge £1,500–£2,500 per session. In Turkey, the same treatment starts from £350. Return flights from Manchester to Istanbul average £100–£220. Two nights\' accommodation near the clinic costs £80–£180 total. The total trip budget is typically £550–£750 — saving most Manchester patients £800–£1,750 per treatment session versus a local private clinic.',
  },
  {
    question: 'Is the quality of P-Shot in Turkey as good as Manchester clinics?',
    answer: 'PShotTurkey\'s partner clinics in Turkey are JCI-accredited and staffed by board-certified urologists — the same clinical standards as the best UK private facilities. The PRP processing equipment, treatment protocols, and aftercare are identical or superior to what you would receive at a Manchester clinic. The difference is the cost, not the quality.',
  },
  {
    question: 'What is the process for Manchester patients booking P-Shot in Turkey?',
    answer: 'Message PShotTurkey on WhatsApp for a free online consultation. Once you decide to proceed, we confirm your clinic appointment, provide accommodation recommendations near the clinic, and arrange your airport-to-clinic transfer. You fly from Manchester, complete your treatment, and fly home. The process typically takes 2–3 days from arrival in Turkey, and 2–3 weeks from first contact to completed treatment.',
  },
  {
    question: 'What aftercare is available for Manchester patients after returning home?',
    answer: 'All patients receive 12 months of remote aftercare included with treatment. This covers WhatsApp messaging, email, and video consultations with our clinical team. For any queries that arise after your return to Manchester, our team is accessible 7 days a week. In the rare event that in-person assessment is needed, we can coordinate with your GP or local urologist.',
  },
];

export default function PShotManchesterPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot for Manchester Patients', 'P-Shot PRP treatment for Manchester patients travelling to Turkey — direct flights, major savings.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Turkey for Manchester Patients"
        subtitle="Manchester men are flying to Turkey for world-class P-Shot PRP treatment. Direct flights from Manchester Airport, 85% savings, and outstanding clinical care."
      />
      <BenefitsSection benefits={benefits} heading="Why Manchester Patients Choose Turkey for P-Shot" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Manchester to Turkey for P-Shot: The Practical Guide</h2>
          <div className="text-slate-600 space-y-4">
            <p>Manchester patients have a significant advantage over many other UK patients when travelling to Turkey: Manchester Airport (MAN) offers direct connections to Istanbul and Antalya, eliminating the need to transit through London. Direct flights from MAN take approximately 4 hours to Istanbul, making the total door-to-clinic journey time very manageable — comparable to driving from Manchester to a specialist clinic in London, but far more comfortable and productive.</p>
            <p>P-Shot providers in the North West of England are limited in number, and prices — when available — are typically £1,500–£2,500 per session. For men in Manchester, Leeds, Liverpool, or elsewhere in the North, the options are either a long trip to London for an expensive consultation or a short flight to Istanbul for far better-value treatment. The calculus is straightforward: Turkey provides equivalent clinical quality at roughly 15–25% of the UK price point, with the same clinical standards, the same JCI accreditation, and the same board-certified specialists.</p>
            <p>PShotTurkey&apos;s patient coordination service is particularly valuable for patients travelling from Manchester. We identify the most cost-effective flight options, recommend convenient accommodation, arrange airport transfers, and ensure your clinic appointment is seamlessly coordinated with your arrival. Most Manchester patients complete their entire treatment trip in 2–3 days.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Manchester patients: get your free consultation now</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">WhatsApp Us Now</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Manchester FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
