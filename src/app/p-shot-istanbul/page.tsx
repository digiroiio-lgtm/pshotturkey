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
  title: 'P-Shot Istanbul | PRP ED Treatment in Istanbul, Turkey',
  description:
    'Get P-Shot treatment in Istanbul, Turkey. Expert PRP therapy for erectile dysfunction in world-class Istanbul clinics. From £240. Free consultation.',
};

const benefits = [
  { icon: 'Award', title: 'Istanbul\'s Best Clinics', description: 'JCI-accredited facilities in the heart of Istanbul' },
  { icon: 'ShieldCheck', title: 'Internationally Trained Doctors', description: 'Specialists educated at top European universities' },
  { icon: 'TrendingDown', title: 'Significant Cost Savings', description: 'Save up to 85% compared to UK and European prices' },
  { icon: 'Clock', title: 'Same-Day Treatment', description: 'Arrive, consult, and treat all in one day if needed' },
  { icon: 'Heart', title: 'Full Patient Support', description: 'English-speaking coordinators from arrival to departure' },
  { icon: 'Zap', title: 'Quick Results', description: 'Notice improvements within 2-4 weeks of treatment' },
];

const faqs = [
  {
    question: 'Which areas of Istanbul are the clinics located?',
    answer: 'Our partner clinics are located in Istanbul\'s premier medical districts, including Şişli and Nişantaşı, both easily accessible from major hotels and the airport.',
  },
  {
    question: 'How do I get from Istanbul Airport to the clinic?',
    answer: 'PShotTurkey arranges airport transfers for all patients. Istanbul Airport is well connected by metro and taxi. The journey to the city centre takes approximately 45-60 minutes.',
  },
  {
    question: 'Can I combine P-Shot treatment with sightseeing in Istanbul?',
    answer: 'Absolutely. The procedure takes just 45-60 minutes, and you can sightsee the same afternoon. We recommend 1-2 days in Istanbul before your procedure and 2-3 days after for recovery and exploration.',
  },
  {
    question: 'Are Istanbul clinics as good as UK clinics?',
    answer: 'Many Istanbul clinics exceed UK standards, holding JCI accreditation — the most rigorous international hospital certification. Turkish doctors are often trained in Europe and speak excellent English.',
  },
  {
    question: 'What is the best time of year to visit Istanbul for treatment?',
    answer: 'Istanbul is a year-round destination. Spring (April-May) and autumn (September-October) offer the most pleasant weather. Summer is warm but busy; winter is quieter and flights are often cheaper.',
  },
];

export default function PShotIstanbulPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot Istanbul', 'PRP therapy for erectile dysfunction at top Istanbul clinics.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Treatment in Istanbul, Turkey"
        subtitle="Experience world-class P-Shot PRP therapy in Istanbul's finest accredited clinics. Expert care, affordable prices, and the magic of Istanbul awaits."
      />
      <BenefitsSection benefits={benefits} heading="Why Choose Istanbul for P-Shot?" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Istanbul: A World-Class Medical City</h2>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
            <p>Istanbul is not just Turkey&apos;s cultural capital — it is also one of the world&apos;s leading medical tourism destinations. The city is home to more JCI-accredited hospitals than any other city in Europe, attracting hundreds of thousands of international patients each year.</p>
            <p>Istanbul&apos;s medical infrastructure includes state-of-the-art technology, internationally trained specialists, and hospitals designed to serve international patients with dedicated translation services, international patient departments, and seamless logistics support.</p>
            <p>Combining your P-Shot treatment with a visit to Istanbul means you can experience iconic landmarks such as the Hagia Sophia, the Grand Bazaar, and a Bosphorus cruise — all while receiving outstanding medical care at a fraction of UK costs.</p>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="Istanbul P-Shot FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
