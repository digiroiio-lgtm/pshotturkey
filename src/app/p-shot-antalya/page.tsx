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
  title: 'P-Shot Antalya | PRP ED Treatment & Mediterranean Holiday',
  description:
    'Combine P-Shot PRP treatment with a Mediterranean holiday in Antalya, Turkey. World-class clinics, beautiful beaches, and savings of up to 85%.',
};

const benefits = [
  { icon: 'Award', title: 'Resort City Medicine', description: 'Premium clinics in one of the Mediterranean\'s most beautiful cities' },
  { icon: 'ShieldCheck', title: 'Accredited Specialists', description: 'Board-certified urologists with extensive PRP experience' },
  { icon: 'Heart', title: 'All-Inclusive Experience', description: 'Combine treatment with luxury resort stays at unbeatable prices' },
  { icon: 'TrendingDown', title: 'Maximum Savings', description: 'Antalya offers some of Turkey\'s most competitive medical prices' },
  { icon: 'Zap', title: 'Healthy Recovery Environment', description: 'Mediterranean climate and cuisine support optimal recovery' },
  { icon: 'Clock', title: 'Direct Flights', description: 'Dozens of direct routes from UK and European airports' },
];

const faqs = [
  {
    question: 'Can I really combine P-Shot treatment with a beach holiday?',
    answer: 'Yes. The procedure takes 45-60 minutes and you can be at the beach the same afternoon. We recommend avoiding the sea for 48 hours post-procedure, but pools and relaxation are fine after 24 hours.',
  },
  {
    question: 'How do I get to Antalya from the UK?',
    answer: 'Antalya Airport (AYT) is served by direct flights from London, Manchester, Birmingham, and many other UK airports. Flight time is approximately 3.5-4 hours.',
  },
  {
    question: 'Which Antalya clinics does PShotTurkey use?',
    answer: 'We partner with Antalya\'s leading accredited clinics, located in the Kepez and Lara districts. All our partner clinics are Ministry of Health certified and staffed by English-speaking specialists.',
  },
  {
    question: 'Is the quality of care in Antalya as good as Istanbul?',
    answer: 'Antalya\'s medical infrastructure has grown substantially to serve both medical tourists and its large expatriate community. Our partner clinics in Antalya maintain the same JCI standards as Istanbul facilities.',
  },
  {
    question: 'What is the best time to visit Antalya for medical treatment?',
    answer: 'Antalya is ideal year-round, but spring (April-May) and autumn (September-November) offer perfect weather with fewer tourists. Summer is hot and busy, while winter is mild and very affordable.',
  },
];

export default function PShotAntalyaPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot Antalya', 'PRP therapy for erectile dysfunction in Antalya, Turkey — combining world-class medical care with a Mediterranean holiday.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Treatment in Antalya – Heal in Paradise"
        subtitle="Combine world-class P-Shot PRP therapy with a Mediterranean holiday in beautiful Antalya. Expert care, stunning beaches, and savings of up to 85%."
      />
      <BenefitsSection benefits={benefits} heading="Why Choose Antalya for P-Shot?" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Antalya: Medical Tourism Meets Mediterranean Beauty</h2>
          <div className="text-slate-600 space-y-4">
            <p>Antalya is Turkey&apos;s premier resort city, combining a thriving medical tourism sector with one of the world&apos;s most beautiful coastlines. Known as the &quot;Turkish Riviera,&quot; Antalya offers pristine beaches, ancient ruins, luxury resorts, and world-class restaurants — all at prices that are genuinely affordable for UK and European visitors.</p>
            <p>The city&apos;s medical infrastructure has grown significantly over the past decade, driven by demand from both international health tourists and the large expatriate community that calls Antalya home. Today, the city boasts several modern clinics equipped with the latest medical technology and staffed by internationally trained specialists.</p>
            <p>PShotTurkey&apos;s Antalya service combines premium medical care with a fully supported holiday experience. Our patient coordinators handle everything from airport transfers to clinic appointments, restaurant recommendations to excursion bookings, so you can focus entirely on your health and enjoyment.</p>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="Antalya P-Shot FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
