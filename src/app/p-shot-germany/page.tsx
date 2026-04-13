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
  title: 'P-Shot Germany | P-Shot Türkei für deutsche Patienten',
  description:
    'P-Shot treatment in Turkey for German patients. Same-quality care at a fraction of German clinic prices. English and German-speaking coordinators. From £350.',
};

const benefits = [
  { icon: 'TrendingDown', title: 'Günstigere Preise (Cheaper Prices)', description: 'P-Shot from £350 — a fraction of German or Austrian clinic prices' },
  { icon: 'Award', title: 'JCI-akkreditierte Kliniken', description: 'Partner clinics hold JCI accreditation — internationally recognised quality standard' },
  { icon: 'ShieldCheck', title: 'Fachärzte (Specialist Doctors)', description: 'Board-certified urologists and andrologists with international training' },
  { icon: 'Heart', title: 'Vollständige Reiseunterstützung', description: 'Full travel support — transfers, scheduling, and aftercare coordination' },
  { icon: 'Star', title: 'Nachsorge inklusive', description: '12 months of post-treatment support included in every package' },
  { icon: 'Zap', title: 'Direktflüge verfügbar', description: 'Direct flights from Frankfurt, Munich, Berlin, and other German cities to Istanbul' },
];

const faqs = [
  {
    question: 'How much can German patients save by getting P-Shot in Turkey?',
    answer: 'P-Shot treatment at private urology clinics in Germany typically costs between €1,200 and €2,500 per session. In Turkey, the same treatment from equivalently qualified specialists starts from £350 (approximately €400). German patients typically save €700–€1,500 per session, even after accounting for flights and accommodation.',
  },
  {
    question: 'Is the quality of P-Shot treatment in Turkey comparable to Germany?',
    answer: 'Yes. PShotTurkey&apos;s partner clinics are JCI-accredited — the same international accreditation standard that Germany&apos;s best hospitals pursue. Turkish urologists are frequently trained in Germany, Austria, or Switzerland and use the same PRP processing technology and evidence-based protocols as German specialists.',
  },
  {
    question: 'Is there German-language support available?',
    answer: 'PShotTurkey has German-speaking coordinators available to help guide you through the process. All medical communication can be conducted in English, and we work to ensure every German patient feels fully informed and comfortable at every stage of their treatment journey.',
  },
  {
    question: 'How long is the flight from Germany to Istanbul?',
    answer: 'Direct flights from Frankfurt to Istanbul take approximately 3.5 hours. Flights from Munich are similarly short, and connections are available from all major German airports. Turkish Airlines and Lufthansa both operate extensive services on this route, with multiple daily departures.',
  },
  {
    question: 'Does German private health insurance (PKV) cover P-Shot treatment abroad?',
    answer: 'Most German private health insurance (PKV) policies do not cover P-Shot PRP therapy, whether performed in Germany or abroad, as it is classified as a regenerative or experimental treatment by most insurers. We recommend checking your specific policy. The straightforward self-pay pricing in Turkey makes budgeting simple and transparent.',
  },
];

export default function PShotGermanyPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot for German Patients', 'Guide for German patients seeking P-Shot PRP treatment in Turkey — cost savings and logistics.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Treatment in Turkey for German Patients"
        subtitle="German patients are choosing Turkey for world-class P-Shot PRP therapy at significantly lower prices than German or Austrian clinics. Seamless travel and medical coordination."
      />
      <BenefitsSection benefits={benefits} heading="Why German Patients Choose Turkey for P-Shot" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Warum deutsche Patienten sich für die Türkei entscheiden</h2>
          <div className="text-slate-600 space-y-4">
            <p>Germany has excellent urology services, but the cost of private P-Shot treatment is prohibitive for many patients. At private urology clinics in Munich, Berlin, Frankfurt, and Hamburg, P-Shot sessions typically cost between €1,200 and €2,500 — and German public health insurance (GKV) does not cover PRP therapy for erectile dysfunction. Turkey offers the same clinical quality at dramatically lower prices, with treatment starting from just £350 (approximately €400). The combination of direct short-haul flights, an established medical tourism infrastructure, and internationally trained specialists makes Turkey the logical destination for German patients seeking cost-effective P-Shot treatment.</p>
            <p>The cultural and linguistic bridge between Germany and Turkey is well-established — there is a large Turkish community in Germany, and many Turkish doctors have studied or trained in German-speaking countries. PShotTurkey&apos;s network includes clinics with German-speaking medical coordinators who can facilitate seamless communication for German patients who prefer to discuss their treatment in their native language. All medical documentation, treatment protocols, and aftercare instructions can be provided in English or German as required. German patients consistently report feeling well-understood and well-cared-for throughout their Turkey treatment experience.</p>
            <p>The practicalities are straightforward for German patients. Direct flights from Frankfurt, Munich, Düsseldorf, Hamburg, and Berlin to Istanbul are available daily from multiple airlines, with journey times of approximately 3–4 hours. Many German patients plan a 4–5 day trip, combining their P-Shot treatment with a short cultural break in Istanbul. PShotTurkey handles airport transfers, clinic scheduling, and all logistics, so German patients arrive with a clear itinerary and full confidence in their treatment plan. Post-treatment follow-up is provided for 12 months via WhatsApp, ensuring German patients have ongoing support after returning home.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Turkey for German Patients FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
