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
  title: 'P-Shot Turkey | Priapus Shot PRP Treatment',
  description:
    'The P-Shot (Priapus Shot) in Turkey. Non-surgical PRP treatment for erectile dysfunction by board-certified specialists. Free consultation. From £350.',
};

const benefits = [
  { icon: 'ShieldCheck', title: 'Non-Surgical', description: 'No surgery, no general anaesthesia, minimal downtime' },
  { icon: 'Activity', title: 'Your Own Blood', description: 'Uses autologous PRP — zero risk of allergic reaction' },
  { icon: 'Award', title: 'Board-Certified Specialists', description: 'Procedures performed only by qualified urologists' },
  { icon: 'Clock', title: '45-Minute Procedure', description: 'Quick treatment, return to normal activities the same day' },
  { icon: 'TrendingDown', title: 'Up to 85% Cheaper', description: 'World-class treatment at a fraction of UK costs' },
  { icon: 'Star', title: 'Proven Results', description: '75-80% of patients report significant improvements' },
];

const faqs = [
  {
    question: 'Who is a good candidate for the P-Shot?',
    answer: 'Men with mild to moderate erectile dysfunction, Peyronie\'s disease, reduced sensitivity, or those seeking natural enhancement are ideal candidates. A thorough medical assessment determines suitability.',
  },
  {
    question: 'How many sessions will I need?',
    answer: 'Many patients achieve excellent results with a single session. For optimal outcomes, some patients benefit from 2-3 sessions spaced 4-6 weeks apart, especially for more severe ED.',
  },
  {
    question: 'Can I combine P-Shot with other treatments?',
    answer: 'Yes. Combining P-Shot with low-intensity shockwave therapy (LiSWT) often produces superior results. Our specialists will recommend the most suitable combination for your case.',
  },
  {
    question: 'Is the P-Shot available in Turkey without a referral?',
    answer: 'Yes. You can arrange treatment directly through PShotTurkey without a GP referral. We will conduct our own thorough medical assessment during your consultation.',
  },
  {
    question: 'How do I prepare for my P-Shot appointment?',
    answer: 'Avoid blood-thinning medications (aspirin, ibuprofen) for 5-7 days before the procedure. Stay well-hydrated and inform us of all current medications. We will provide a full pre-procedure guide.',
  },
  {
    question: 'What aftercare is required following the P-Shot?',
    answer: 'Avoid strenuous activity for 24 hours. Most patients can resume sexual activity within 24-48 hours. We provide full written aftercare instructions and our team is available for questions after your return home.',
  },
];

export default function PShotTurkeyPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot (Priapus Shot) Turkey', 'Non-surgical PRP treatment for erectile dysfunction in Turkey by board-certified specialists.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Turkey – Expert PRP Treatment for ED"
        subtitle="Non-surgical platelet-rich plasma therapy for erectile dysfunction, performed by board-certified urologists in JCI-accredited Turkish clinics."
      />
      <BenefitsSection benefits={benefits} heading="Benefits of P-Shot Treatment" />
      <HowItWorks />
      <FAQSection faqs={faqs} heading="P-Shot Turkey FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">Learn More About P-Shot</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { href: '/how-p-shot-works', label: 'How P-Shot Works' },
              { href: '/p-shot-success-rate', label: 'P-Shot Success Rate' },
              { href: '/who-is-good-candidate-p-shot', label: 'Am I a Good Candidate?' },
              { href: '/recovery-after-p-shot', label: 'Recovery After P-Shot' },
              { href: '/does-p-shot-increase-size', label: 'Does P-Shot Increase Size?' },
              { href: '/p-shot-cost-turkey', label: 'P-Shot Cost & Pricing' },
              { href: '/p-shot-packages-turkey', label: 'Treatment Packages' },
              { href: '/best-p-shot-clinics-turkey', label: 'Best Clinics in Turkey' },
            ].map(({ href, label }) => (
              <a key={href} href={href} className="block p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-sm transition-all text-slate-700 font-medium text-sm text-center">
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
