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
  title: 'P-Shot Munich | Munich Patients: P-Shot Treatment in Turkey',
  description:
    'Munich patients travelling to Turkey for P-Shot. Direct flights from Munich Airport. Save up to 80% vs German prices. Expert PRP care from £350.',
};

const benefits = [
  { icon: 'MapPin', title: 'Direct Flights from Munich', description: 'Multiple daily direct flights from Munich Airport (MUC) to Istanbul and Antalya' },
  { icon: 'TrendingDown', title: 'Save vs Munich Prices', description: 'Munich P-Shot clinics charge €1,800–€3,000 — Turkey from £350 (approx €410)' },
  { icon: 'MessageCircle', title: 'German-Speaking Support', description: 'German-language patient coordinator available for all Bavarian and German patients' },
  { icon: 'ShieldCheck', title: 'JCI Clinics', description: 'JCI-accredited facilities with board-certified urologists' },
  { icon: 'Award', title: 'Expert Urologists', description: 'Board-certified specialist physicians with extensive P-Shot experience' },
  { icon: 'Heart', title: '12-Month Aftercare', description: 'Remote post-treatment support for a full year, available in German' },
];

const faqs = [
  {
    question: 'Are there direct flights from Munich to Turkey?',
    answer: 'Yes. Munich Airport (MUC) operates direct flights to Istanbul Airport and Istanbul Sabiha Gokcen on Turkish Airlines, Pegasus, and Lufthansa. Direct seasonal flights to Antalya are also available. Flight time from Munich to Istanbul is approximately 2.5 hours — shorter than a drive from Munich to Hamburg.',
  },
  {
    question: 'How much can Munich patients save on P-Shot in Turkey?',
    answer: 'Munich and Bavarian P-Shot clinics typically charge €1,800–€3,000 per session. In Turkey through PShotTurkey, treatment starts from £350 (approximately €410). Including return flights from Munich (€70–€200) and 2 nights\' accommodation (€80–€200), the total trip is approximately €560–€810 — saving €990–€2,190 versus a Munich clinic session.',
  },
  {
    question: 'Is German-language support available for Munich patients?',
    answer: 'Yes. PShotTurkey provides a German-speaking patient coordinator for all consultations, booking coordination, and pre-treatment communication. German-language aftercare support is also available. Munich and Bavarian patients can navigate the entire process comfortably in German.',
  },
  {
    question: 'How does the clinical quality in Turkey compare to Munich clinics?',
    answer: 'PShotTurkey\'s partner clinics are JCI-accredited — the same international standard applied to elite institutions globally, including leading German university hospitals and private clinics. Turkish urologists delivering P-Shot are board-certified specialists. PRP processing equipment and protocols are identical to those used in Munich. The difference is that Munich prices reflect the extremely high cost of private healthcare in Bavaria; Turkey offers the same clinical quality at a fraction of the cost.',
  },
  {
    question: 'What is the travel experience like from Munich to Istanbul?',
    answer: 'Munich has excellent direct connections to Istanbul. The journey is straightforward: a 2.5-hour flight, arrival at a modern international airport, transfer to the clinic, and treatment — all within a single day if desired. Istanbul itself is a remarkable city that many Munich patients enjoy exploring before or after their treatment. The cultural and historical contrasts between Bavaria and Istanbul make the trip genuinely memorable beyond the clinical purpose.',
  },
];

export default function PShotMunichPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot for Munich Patients', 'P-Shot PRP treatment for Munich patients travelling to Turkey — direct flights from MUC, 80% savings.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Treatment for Munich Patients – Turkey Guide"
        subtitle="Munich and Bavarian patients are discovering that Turkey offers world-class P-Shot PRP therapy at a fraction of local prices — with direct flights from MUC."
      />
      <BenefitsSection benefits={benefits} heading="Why Munich Patients Choose Turkey for P-Shot" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Munich to Turkey for P-Shot: Your Guide</h2>
          <div className="text-slate-600 space-y-4">
            <p>Munich has some of Germany&apos;s highest private healthcare costs, and P-Shot treatment in the Bavarian capital is among the most expensive in the country. A single session at a Munich urology clinic typically costs €1,800–€3,000. For a treatment that many men benefit from repeating, or combining with shockwave therapy, the total cost of a Munich-based treatment protocol can reach €8,000–€15,000. Turkey provides an entirely different cost environment: P-Shot from £350 (approximately €410), with direct flights from Munich Airport in 2.5 hours.</p>
            <p>PShotTurkey&apos;s German-speaking patient coordinator is particularly valued by Munich and Bavarian patients. The ability to discuss your medical situation, ask questions, and understand logistics in German removes a significant barrier that many German patients anticipate when considering medical travel. Clinical treatment itself is conducted in English and Turkish, with translation support available, and the English-language standard of Turkey&apos;s major medical tourism facilities is excellent.</p>
            <p>The practical case for Munich patients choosing Turkey is compelling: a total trip cost of €560–€810 (flights, accommodation, and treatment) versus €1,800–€3,000 for a local Munich clinic visit — a saving of approximately €1,000–€2,200 per session. For men who need multiple sessions or combination protocols, Turkey delivers cumulative savings of €4,000–€10,000 compared to equivalent Munich-based treatment. The clinical outcome is identical; the financial outcome is dramatically better in Turkey.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Munich patients: free consultation available now</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">WhatsApp Us Now</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Munich FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
