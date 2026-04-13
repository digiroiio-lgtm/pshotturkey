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
  title: 'P-Shot Berlin | Berlin Patients: P-Shot Treatment in Turkey',
  description:
    'Berlin patients travelling to Turkey for P-Shot treatment. Direct flights from Berlin. Save up to 80% vs German clinic prices. Expert care from £350.',
};

const benefits = [
  { icon: 'MapPin', title: 'Direct Flights from Berlin', description: 'Direct services from Berlin Brandenburg Airport (BER) to Istanbul and Antalya' },
  { icon: 'TrendingDown', title: 'Save vs German Prices', description: 'German P-Shot clinics charge €1,500–€2,800 — Turkey starts from £350 (approx €410)' },
  { icon: 'MessageCircle', title: 'German-Speaking Support', description: 'German-speaking patient coordinator available for Berlin and German patients' },
  { icon: 'ShieldCheck', title: 'JCI Clinics', description: 'JCI-accredited facilities meeting the same standards as leading German hospitals' },
  { icon: 'Zap', title: 'No Waiting List', description: 'Appointments available within 1–2 weeks — no lengthy waiting times' },
  { icon: 'Clock', title: 'Same-Day Treatment', description: 'Arrive and complete your P-Shot in a single clinic visit' },
];

const faqs = [
  {
    question: 'Are there direct flights from Berlin to Turkey?',
    answer: 'Yes. Berlin Brandenburg Airport (BER) has direct flights to Istanbul (both Istanbul Airport and Sabiha Gokcen) operated by Turkish Airlines and Pegasus. Direct services to Antalya are also available during the summer season. Flight time from Berlin to Istanbul is approximately 2.5–3 hours — comparable to a domestic German train journey to southern Germany.',
  },
  {
    question: 'How much can Berlin patients save by choosing Turkey?',
    answer: 'P-Shot treatment in Germany typically costs €1,500–€2,800 per session at private urology clinics. In Turkey through PShotTurkey, treatment starts from £350 (approximately €410). Including return flights from Berlin (€80–€200) and 2 nights\' accommodation (€80–€180), the total trip is typically €570–€790 — saving Berlin patients €710–€2,010 per treatment session.',
  },
  {
    question: 'Is German-language support available?',
    answer: 'Yes. PShotTurkey has a German-speaking patient coordinator available specifically to support patients from Germany, Austria, and Switzerland. Initial consultations and pre-treatment information can be provided in German. Clinical treatment is conducted in English and Turkish with translation support available on request.',
  },
  {
    question: 'How does P-Shot quality in Turkey compare to German clinics?',
    answer: 'PShotTurkey\'s partner clinics are JCI-accredited — the same international standard as the best German university hospitals. Urologists are board-certified specialists with extensive P-Shot experience. PRP processing protocols and equipment are identical to those used in German clinics. The difference is cost: Turkey delivers equivalent clinical quality at approximately 15–25% of German prices.',
  },
  {
    question: 'What aftercare is available for Berlin patients?',
    answer: 'All patients receive 12 months of remote aftercare: WhatsApp messaging, email, and video consultations. German-language follow-up communication is available. For any clinical queries requiring in-person assessment in Germany, we provide full documentation to support your GP or urologist.',
  },
];

export default function PShotBerlinPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot for Berlin Patients', 'P-Shot PRP treatment for Berlin patients travelling to Turkey — direct flights, 80% savings vs German prices.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Treatment for Berlin Patients – Turkey Guide"
        subtitle="Berlin patients are choosing Turkey for affordable P-Shot PRP therapy. Direct flights, significant cost savings versus German clinics, and outstanding specialist care."
      />
      <BenefitsSection benefits={benefits} heading="Why Berlin Patients Choose Turkey for P-Shot" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Berlin to Turkey for P-Shot: Practical Guide</h2>
          <div className="text-slate-600 space-y-4">
            <p>Berlin patients have one of the best connections to Turkey of any European city. Direct flights from Berlin Brandenburg Airport to Istanbul operate multiple times daily on Turkish Airlines and Pegasus, with flight times of just 2.5–3 hours. The geographic proximity, combined with the dramatic cost difference between German and Turkish P-Shot pricing, makes Turkey an exceptionally practical destination for Berlin patients seeking effective ED treatment.</p>
            <p>German P-Shot clinics charge €1,500–€2,800 per session — pricing that excludes a significant majority of men who could benefit from the treatment. Turkey&apos;s JCI-accredited clinics deliver the same clinical outcome from £350 (approximately €410). PShotTurkey also maintains German-speaking patient coordinator support, ensuring that patients from Berlin, Hamburg, Munich, and elsewhere in Germany can navigate the entire process in their native language if preferred.</p>
            <p>Istanbul is also one of Europe&apos;s great destination cities, with strong historical and cultural connections to Germany. Many Berlin patients extend their treatment trip by 1–2 days to explore the Bosphorus, the historic old city, and Istanbul&apos;s world-class culinary scene. The combination of highly effective medical treatment, dramatic cost savings, and a memorable travel experience makes Turkey the logical choice for German men seeking P-Shot.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Berlin patients: get your free consultation today</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">WhatsApp Us Now</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Berlin FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
