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
  title: 'How Many Sessions P-Shot Turkey | P-Shot Treatment Course Guide',
  description:
    'How many P-Shot sessions do you need in Turkey? Expert guide on optimal P-Shot treatment protocols, session frequency, and combination packages.',
};

const benefits = [
  { icon: 'Clock', title: 'Single Session Option', description: 'Many patients achieve excellent results with just one treatment' },
  { icon: 'Activity', title: 'Personalised Protocol', description: 'Number of sessions tailored to your individual needs and goals' },
  { icon: 'Star', title: 'Combination Packages', description: 'Enhanced results combining P-Shot with shockwave therapy' },
  { icon: 'TrendingDown', title: 'Package Pricing', description: 'Multi-session packages available at significantly reduced rates' },
  { icon: 'ShieldCheck', title: 'Specialist Guidance', description: 'Our urologists design the optimal protocol for your situation' },
  { icon: 'Heart', title: 'Ongoing Support', description: '12 months of aftercare included to monitor and optimise your results' },
];

const faqs = [
  {
    question: 'How many P-Shot sessions do I need?',
    answer: 'Many men achieve excellent results with a single P-Shot session. However, for optimal outcomes — particularly for moderate to severe ED, or for men seeking maximum enhancement — a course of 2-3 sessions spaced 4-6 weeks apart is often recommended. Your specialist will advise during your free consultation.',
  },
  {
    question: 'How long should I wait between P-Shot sessions?',
    answer: 'Sessions are typically spaced 4-6 weeks apart. This interval allows the PRP growth factors from the first injection to complete their initial regenerative work before the next treatment amplifies the response. Some protocols use 6-8 week intervals for certain patient profiles.',
  },
  {
    question: 'Is one P-Shot session enough to treat ED?',
    answer: 'For many men with mild to moderate vasculogenic ED, a single session produces significant and satisfying results. Men with more severe ED, or those who want to maximise their outcomes, typically benefit from 2-3 sessions. Your PShotTurkey specialist will recommend the most appropriate course based on your assessment.',
  },
  {
    question: 'How often do I need to repeat the P-Shot?',
    answer: 'Initial results typically last 12-18 months. A maintenance treatment every 12-18 months is recommended to sustain optimal function. Some patients with particularly good initial responses can go 2+ years between treatments.',
  },
  {
    question: 'Can I combine P-Shot with shockwave therapy in the same trip?',
    answer: 'Yes. We recommend our combination packages that include both P-Shot PRP and low-intensity shockwave therapy (LiSWT). This combination is synergistic — shockwave therapy stimulates vascular regeneration while PRP delivers growth factors — and can be scheduled across 2-3 days within a single trip to Turkey.',
  },
  {
    question: 'What is the most popular P-Shot package?',
    answer: 'Our most popular option is the P-Shot Plus package: 2 P-Shot sessions combined with a 3-session shockwave therapy course. This package can be completed across a 4-5 day trip and offers superior results to a single session alone, at a significantly better price per session.',
  },
];

export default function HowManySessionsPShotTurkeyPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot Sessions Turkey', 'Guide to P-Shot treatment protocols — how many sessions are needed and what to expect from single vs multi-session treatment in Turkey.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="How Many P-Shot Sessions Do I Need in Turkey?"
        subtitle="A complete guide to P-Shot treatment protocols — from single sessions to combination packages. Find out what's right for your situation."
      />
      <BenefitsSection benefits={benefits} heading="P-Shot Treatment Options" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Which P-Shot Protocol Is Right for You?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Single Session',
                price: 'From £350',
                ideal: 'Mild to moderate ED, first-time patients, cost-conscious patients',
                results: 'Good results for 70-75% of patients. Results last 12-15 months.',
              },
              {
                title: '2-Session Course',
                price: 'From £620',
                ideal: 'Moderate ED, men wanting to maximise outcomes, Peyronie\'s disease',
                results: 'Significantly improved outcomes vs single session. Results last 15-18 months.',
              },
              {
                title: 'P-Shot + Shockwave Combo',
                price: 'From £850',
                ideal: 'Moderate to severe ED, men who haven\'t responded to medication, seeking lasting results',
                results: 'Best outcomes. Synergistic combination. Results often last 18-24+ months.',
              },
            ].map(({ title, price, ideal, results }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-1">{title}</h3>
                <p className="text-blue-800 font-semibold mb-3">{price}</p>
                <p className="text-sm text-slate-600 mb-2"><strong>Ideal for:</strong> {ideal}</p>
                <p className="text-sm text-slate-600"><strong>Expected results:</strong> {results}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Sessions FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
