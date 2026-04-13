import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowItWorks from '@/components/HowItWorks';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import TrustSection from '@/components/TrustSection';
import CTASection from '@/components/CTASection';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getMedicalProcedureSchema, getFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Erectile Dysfunction Treatment Turkey | ED Treatments from £350',
  description:
    'Effective erectile dysfunction treatment in Turkey. P-Shot, shockwave therapy, and PRP by board-certified specialists. From £350. Free consultation.',
};

const benefits = [
  { icon: 'ShieldCheck', title: 'Non-Surgical Options', description: 'Effective ED treatments without surgery or daily medication' },
  { icon: 'Activity', title: 'Multiple Treatment Options', description: 'P-Shot, shockwave therapy, combination packages available' },
  { icon: 'Award', title: 'Specialist Urologists', description: 'Treatment by board-certified sexual health specialists' },
  { icon: 'TrendingDown', title: 'Affordable Care', description: 'Save up to 85% compared to UK and European clinics' },
  { icon: 'Clock', title: 'Fast Results', description: 'Many patients notice improvements within 2-4 weeks' },
  { icon: 'Heart', title: 'Holistic Approach', description: 'We address root causes, not just symptoms' },
];

const faqs = [
  {
    question: 'What ED treatments are available in Turkey?',
    answer: 'PShotTurkey offers the P-Shot (PRP therapy), low-intensity shockwave therapy (LiSWT), and combination packages. Our specialists will recommend the most appropriate treatment for your specific type and severity of ED.',
  },
  {
    question: 'How do I know which ED treatment is right for me?',
    answer: 'During your free online consultation, our specialists will assess your medical history, ED severity, and treatment goals to recommend the most suitable approach. There is no one-size-fits-all solution for ED.',
  },
  {
    question: 'Can ED be cured, or just managed?',
    answer: 'For many men, especially those with vasculogenic ED, treatments like the P-Shot and shockwave therapy can produce long-lasting improvements that amount to functional restoration. For others, periodic maintenance treatments maintain optimal function.',
  },
  {
    question: 'Is it safe to have ED treatment abroad?',
    answer: 'Turkey has more JCI-accredited hospitals than any other country in Europe. Our partner clinics meet the highest international standards of safety, hygiene, and clinical practice.',
  },
  {
    question: 'What if I am already taking ED medication?',
    answer: 'P-Shot and shockwave therapy can be used alongside or instead of oral ED medications. Many patients find that after successful treatment, they no longer need medication. Always inform our doctors of all current medications.',
  },
];

export default function EDTreatmentTurkeyPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('Erectile Dysfunction Treatment Turkey', 'Comprehensive ED treatment including P-Shot PRP therapy and shockwave therapy in Turkey.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="Erectile Dysfunction Treatment in Turkey"
        subtitle="Effective, non-surgical erectile dysfunction treatments in Turkey. P-Shot PRP therapy, shockwave therapy, and personalised care from expert urologists."
      />
      <BenefitsSection benefits={benefits} heading="Why Treat ED in Turkey?" />
      <HowItWorks />
      <PricingSection />
      <FAQSection faqs={faqs} heading="ED Treatment FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">ED Treatment Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { href: '/prp-for-ed-turkey', label: 'PRP for ED in Turkey' },
              { href: '/shockwave-therapy-turkey', label: 'Shockwave Therapy Turkey' },
              { href: '/p-shot-vs-shockwave-therapy', label: 'P-Shot vs Shockwave' },
              { href: '/prp-vs-fillers-for-ed', label: 'PRP vs Fillers for ED' },
              { href: '/p-shot-cost-turkey', label: 'ED Treatment Cost' },
              { href: '/p-shot-turkey', label: 'P-Shot Turkey' },
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
