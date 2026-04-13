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
  title: 'P-Shot Miami | Miami Patients: P-Shot Treatment in Turkey',
  description:
    'Miami patients travelling to Turkey for P-Shot. Save over $2,000 vs Miami clinic prices. Board-certified specialists, JCI-accredited clinics, from £350.',
};

const benefits = [
  { icon: 'TrendingDown', title: 'Save $2,000+ vs Miami', description: 'Miami P-Shot clinics charge $1,800–$3,000 — Turkey starts from £350 (approx $450)' },
  { icon: 'ShieldCheck', title: 'Premium Clinics', description: 'JCI-accredited specialist facilities — the international gold standard' },
  { icon: 'Heart', title: 'No US Insurance Needed', description: 'Transparent fixed pricing — no insurer battles, no surprise bills' },
  { icon: 'MessageCircle', title: 'English Team', description: 'Full English-speaking support from enquiry through to aftercare' },
  { icon: 'MapPin', title: 'Direct Flights', description: 'Connecting flights from Miami International to Istanbul via major European hubs' },
  { icon: 'Clock', title: 'Full Support', description: 'Dedicated patient coordinator and 12 months of remote aftercare' },
];

const faqs = [
  {
    question: 'How much can Miami patients save by choosing Turkey for P-Shot?',
    answer: 'Miami P-Shot clinics typically charge $1,800–$3,000 per session. Turkey starts from £350 (approximately $450 USD). Connecting flights from Miami International to Istanbul average $700–$1,200 round-trip economy. Including 2–3 nights\' accommodation ($150–$350 total), the total trip is typically $1,300–$2,000 — comparable to or less than a Miami clinic visit, with no compromise on quality.',
  },
  {
    question: 'How do Miami patients fly to Turkey?',
    answer: 'Miami International (MIA) has excellent connections to Istanbul via European hubs including London Heathrow, Amsterdam, Frankfurt, and Lisbon, and via Middle Eastern hubs including Dubai and Istanbul (Turkish Airlines). Total travel time is typically 12–14 hours. Turkish Airlines operates a direct service from Miami to Istanbul, making it one of the more straightforward US gateway cities for travel to Turkey.',
  },
  {
    question: 'Is the clinical quality in Turkey equivalent to Miami clinics?',
    answer: 'Yes. PShotTurkey\'s partner clinics are JCI-accredited — the same international standard applied to elite US medical facilities. Board-certified urologists perform every procedure. PRP processing equipment and protocols are identical to US standards. Miami patients consistently report that the quality of care they receive in Turkey matches or exceeds their expectations based on domestic clinic experiences.',
  },
  {
    question: 'What about aftercare when back in Miami?',
    answer: 'All patients receive 12 months of remote aftercare: WhatsApp messaging, email, and scheduled video consultations. We accommodate Eastern Time Zone scheduling for Miami patients. Full clinical documentation is provided for any coordination with local US physicians if needed.',
  },
  {
    question: 'Is Turkey safe for medical travel for Miami patients?',
    answer: 'Istanbul and Antalya are major international cities with strong tourism infrastructure and excellent safety records for international visitors. PShotTurkey\'s partner clinics have treated thousands of international patients, including many from the US. Our patient coordinators are experienced in supporting US patients and ensure that logistics, security, and patient welfare are managed throughout the trip.',
  },
];

export default function PShotMiamiPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot for Miami Patients', 'P-Shot PRP treatment for Miami patients travelling to Turkey — save $2,000+ vs Miami prices.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Treatment for Miami Patients – Turkey Guide"
        subtitle="Miami men are flying to Turkey for premium P-Shot PRP therapy. World-class treatment at a fraction of Miami clinic prices, with full international patient support."
      />
      <BenefitsSection benefits={benefits} heading="Why Miami Patients Choose Turkey for P-Shot" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Miami vs Turkey: P-Shot Comparison</h2>
          <div className="text-slate-600 space-y-4">
            <p>Miami has a strong private healthcare market and numerous P-Shot providers, but at price points that reflect the city&apos;s high cost of living and the complete absence of insurance coverage for this treatment. A single session at a reputable Miami clinic costs $1,800–$3,000. For men requiring two or three sessions, or combination P-Shot and shockwave therapy, domestic costs can escalate to $8,000–$15,000. Turkey offers a fundamentally different cost structure without any clinical compromise.</p>
            <p>Turkish Airlines operates direct flights from Miami International to Istanbul, making Miami one of the best-connected US cities for travel to Turkey. Istanbul&apos;s specialist urology clinics — JCI-accredited and staffed by board-certified physicians — deliver P-Shot treatment from £350 ($450) per session. The total Turkey trip, including a direct return flight and 3 nights&apos; accommodation, typically costs $1,400–$2,100 — roughly equivalent to a single Miami clinic visit but with dramatically better value across any multi-session treatment plan.</p>
            <p>PShotTurkey&apos;s patient coordination team has extensive experience supporting US patients. We arrange airport transfers, clinic appointments, accommodation, and 12 months of post-treatment remote support — all coordinated around your travel schedule and time zone. Miami patients consistently find the process simpler and more responsive than dealing with US private clinic administration.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Miami patients: message us now for a free consultation</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">WhatsApp Us Now</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Miami FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
