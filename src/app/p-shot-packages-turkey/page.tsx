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
  title: 'P-Shot Packages Turkey | P-Shot Treatment Packages from £350',
  description:
    'P-Shot treatment packages in Turkey. Choose from single session, multi-session, or combination therapy with shockwave. From £350. Free consultation.',
};

const benefits = [
  { icon: 'Star', title: 'Flexible Options', description: 'Single session or multi-treatment programmes to suit your goals' },
  { icon: 'ShieldCheck', title: 'Clear Pricing', description: 'No hidden fees — full package costs confirmed before you travel' },
  { icon: 'Zap', title: 'Combination Therapy', description: 'P-Shot plus shockwave packages for enhanced results' },
  { icon: 'Award', title: 'Expert Guidance', description: 'Specialists recommend the right package for your specific case' },
  { icon: 'Heart', title: 'All Inclusive', description: 'Consultation, treatment, aftercare, and follow-up included' },
  { icon: 'Clock', title: '12-Month Support', description: 'Post-treatment support for a full year after your procedure' },
];

const faqs = [
  {
    question: 'What is included in a P-Shot package in Turkey?',
    answer: 'All PShotTurkey packages include a full urological consultation, the P-Shot procedure using calibrated PRP processing, topical anaesthetic cream, post-procedure aftercare instructions, and 12 months of follow-up support. Multi-session packages include all repeat sessions at a discounted rate.',
  },
  {
    question: 'How much does a P-Shot package cost in Turkey?',
    answer: 'Single-session P-Shot packages start from £350. Multi-session packages (2–3 treatments) offer better value for patients requiring a more intensive protocol. Combination packages including shockwave therapy are also available — contact us via WhatsApp for the latest package pricing.',
  },
  {
    question: 'Is a combination P-Shot and shockwave package better than P-Shot alone?',
    answer: 'For patients with moderate to severe ED, or vasculogenic ED, combining P-Shot PRP therapy with low-intensity shockwave therapy (LiSWT) typically delivers superior and more durable results. The two treatments work through complementary mechanisms — PRP delivers growth factors while shockwave promotes angiogenesis through mechanical stimulation.',
  },
  {
    question: 'How many sessions are in a standard P-Shot package?',
    answer: 'Our standard package is a single P-Shot session, which is sufficient for many patients. Our premium package includes 3 P-Shot sessions spaced 4–6 weeks apart, recommended for patients with more complex ED or those seeking maximum long-term benefit. Our specialists will advise which is most appropriate during your consultation.',
  },
  {
    question: 'Can I extend my package if I need additional sessions?',
    answer: 'Yes. Additional sessions can be added at any time at a discounted package rate. Our 12-month follow-up support means we monitor your progress and proactively recommend top-up treatments when needed to maintain your results.',
  },
];

export default function PShotPackagesTurkeyPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot Packages Turkey', 'P-Shot treatment packages in Turkey — single session, multi-session, and combination therapy with shockwave.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Packages Turkey – Choose Your Treatment Plan"
        subtitle="Tailored P-Shot treatment packages designed to meet your specific needs and budget. Single session to comprehensive multi-treatment programmes."
      />
      <BenefitsSection benefits={benefits} heading="What Our P-Shot Packages Include" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Which P-Shot Package is Right for You?</h2>
          <div className="text-slate-600 space-y-4">
            <p>Choosing the right P-Shot package depends on the severity of your erectile dysfunction, your treatment goals, and your budget. For patients with mild to moderate ED who have never tried PRP therapy, a single-session P-Shot package is an excellent starting point. The majority of patients in this category experience significant improvements from one session, with results developing progressively over 8–12 weeks. A single package includes the full procedure, anaesthetic, aftercare guidance, and 12 months of follow-up support.</p>
            <p>Patients with moderate to severe ED, a longer history of erectile difficulties, or those who have not achieved optimal results from oral medications typically benefit from a multi-session protocol. Three P-Shot sessions spaced 4–6 weeks apart deliver a higher cumulative dose of growth factors to penile tissue, producing more pronounced and longer-lasting regenerative effects. Clinical evidence supports the use of repeat PRP sessions for enhanced vascular remodelling and sustained improvements in erectile function scores.</p>
            <p>For the most comprehensive treatment outcome, our combination packages pair P-Shot PRP therapy with low-intensity shockwave therapy (LiSWT). Shockwave therapy uses acoustic waves to mechanically stimulate angiogenesis and break down micro-plaques in penile blood vessels. When combined with the biological regenerative effect of PRP, patients typically experience faster onset of results, greater improvement in erectile quality, and longer-lasting benefits. Our specialists will recommend the most appropriate package during your initial free consultation.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Packages Turkey FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
