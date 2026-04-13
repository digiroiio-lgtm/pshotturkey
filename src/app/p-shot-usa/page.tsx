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
  title: 'P-Shot USA Patients | P-Shot Treatment Turkey vs USA Cost',
  description:
    'American patients travelling to Turkey for P-Shot PRP treatment. Compare costs — save over $2,000 vs US clinic prices. Full support from arrival to departure.',
};

const benefits = [
  { icon: 'TrendingDown', title: 'Save $2,000+ vs US Prices', description: 'P-Shot in the US costs $1,800–$3,500; Turkey from £350 (approx $440)' },
  { icon: 'Award', title: 'JCI-Accredited Clinics', description: 'The same accreditation standard used by top US Joint Commission hospitals' },
  { icon: 'ShieldCheck', title: 'No Insurance Needed', description: 'Insurance rarely covers P-Shot in the US; Turkey is straightforward self-pay' },
  { icon: 'Heart', title: 'English-Speaking Team', description: 'Full English support at every stage — no language barriers' },
  { icon: 'Star', title: 'International Standard Care', description: 'Turkish urologists are internationally trained to the highest standards' },
  { icon: 'Zap', title: 'Direct Flights Available', description: 'Non-stop flights from New York, Chicago, and other US cities to Istanbul' },
];

const faqs = [
  {
    question: 'How much does P-Shot cost in the US vs Turkey?',
    answer: 'P-Shot treatment in the United States typically ranges from $1,800 to $3,500 per session at specialist urology or men\'s health clinics. In Turkey, the same treatment from board-certified urologists starts from approximately £350 (around $440 USD). Even with transatlantic flights and accommodation, US patients can save $1,000–$2,500 per treatment compared to US pricing.',
  },
  {
    question: 'Does US health insurance cover P-Shot?',
    answer: 'Health insurance in the United States does not typically cover P-Shot PRP therapy, as it is classified as an elective or investigational procedure by most insurers. This means US patients pay entirely out of pocket, making the cost comparison with Turkey even more favourable. Turkey is straightforward self-pay with transparent pricing and no insurance complexity.',
  },
  {
    question: 'Are Turkish P-Shot clinics as good as US clinics?',
    answer: 'Yes. JCI (Joint Commission International) accreditation — the standard used by PShotTurkey&apos;s partner clinics — is the international equivalent of The Joint Commission accreditation used in the US. Turkish urologists often train at European or American institutions and use the same PRP processing equipment and evidence-based protocols as top US providers.',
  },
  {
    question: 'How do I travel from the US to Turkey for P-Shot?',
    answer: 'Turkish Airlines and several other carriers operate direct flights from New York (JFK), Chicago (O&apos;Hare), Los Angeles, Houston, and other major US cities to Istanbul. Flight time from the East Coast is approximately 10–12 hours. PShotTurkey arranges airport transfers and helps with scheduling to make the most of your time in Turkey.',
  },
  {
    question: 'How long should I plan to stay in Turkey for treatment?',
    answer: 'US patients typically plan a 5–7 day trip to make the most of the journey. The treatment itself takes 45–60 minutes, and you only need one recovery day before flying. Many American patients combine their treatment with a few days exploring Istanbul — one of the world\'s most fascinating cities.',
  },
];

export default function PShotUSAPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot for US Patients', 'Guide for American patients seeking P-Shot PRP treatment in Turkey — cost comparison and logistics.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Turkey for US Patients – Premium Care, Fraction of US Costs"
        subtitle="American men are discovering that Turkey offers the same — often superior — P-Shot treatment at a fraction of US clinic prices, with seamless travel support."
      />
      <BenefitsSection benefits={benefits} heading="Why US Patients Choose Turkey for P-Shot" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">USA vs Turkey: The Real Cost of P-Shot Treatment</h2>
          <div className="text-slate-600 space-y-4">
            <p>P-Shot PRP therapy in the United States is expensive. Specialist men&apos;s health clinics and urology practices in major US cities typically charge between $1,800 and $3,500 per session. Because US health insurance does not cover PRP therapy for erectile dysfunction, this cost falls entirely on the patient. For patients who require 2–3 sessions for optimal results, the total cost can reach $5,000–$10,000. These prices reflect the high overheads of the US healthcare system rather than any difference in treatment quality. The same PRP processing technology, the same protocol, and equally qualified physicians are available in Turkey at a fraction of the price.</p>
            <p>Turkey has built one of the world&apos;s most respected medical tourism sectors, and for good reason. The country invests heavily in healthcare infrastructure, medical education, and international accreditation. JCI accreditation — awarded to PShotTurkey&apos;s partner clinics — is internationally recognised as the equivalent of the Joint Commission accreditation familiar to US patients. Turkish urologists frequently complete postgraduate training in the US or Europe, and English is routinely spoken at all facilities that serve international patients. Many American men who have experienced P-Shot in Turkey report that the quality of care and the attentiveness of staff equals or exceeds what they have experienced at home.</p>
            <p>The financial case for US patients is compelling. Even on a round-trip business class flight from New York to Istanbul, a 5-night hotel stay, and a multi-session P-Shot package, the total cost typically comes in well below the price of a single P-Shot session at a Manhattan or Beverly Hills clinic. PShotTurkey handles all logistics — airport transfer, clinic scheduling, consultation, procedure, and aftercare — so that American patients can focus on their treatment and enjoy their time in Istanbul. Our team is available via WhatsApp in US time zones for any questions before, during, or after your visit.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Turkey for US Patients FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
