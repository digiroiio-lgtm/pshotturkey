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
  title: 'P-Shot Before and After | Results, Timeline & What to Expect',
  description:
    'P-Shot before and after guide — real outcomes, result timelines, and what to realistically expect from PRP therapy for erectile dysfunction.',
};

const benefits = [
  { icon: 'Clock', title: 'Early Results (2–4 Weeks)', description: 'Many patients notice initial improvements within the first month' },
  { icon: 'Star', title: 'Peak Results (8–12 Weeks)', description: 'Full regenerative effects are reached at 8–12 weeks post-treatment' },
  { icon: 'Award', title: '75–80% Success Rate', description: 'The large majority of patients report significant improvements' },
  { icon: 'Heart', title: 'Long-Lasting Effects', description: 'Benefits typically persist for 12–18 months after treatment' },
  { icon: 'Activity', title: 'Improved Sensitivity', description: 'Many patients also experience enhanced penile sensitivity' },
  { icon: 'ShieldCheck', title: 'Confidence Restored', description: 'Restored erectile function leads to improved psychological wellbeing' },
];

const faqs = [
  {
    question: 'What improvements can I expect from P-Shot treatment?',
    answer: 'The most commonly reported improvements include stronger and more reliable erections, improved erectile rigidity, faster onset of erection, enhanced sensitivity and sensation, and reduced reliance on oral ED medications such as sildenafil. Some patients also report improvements in penile girth during erection due to improved vascular filling.',
  },
  {
    question: 'How quickly will I see results after P-Shot?',
    answer: 'Initial improvements are often noticeable within 2–4 weeks as early vascular changes take effect. Results continue to develop as growth factors stimulate ongoing tissue regeneration, with most patients experiencing peak benefit at 8–12 weeks after their final session.',
  },
  {
    question: 'Are P-Shot before and after results the same for everyone?',
    answer: 'No. Results vary based on individual factors including age, overall health, severity of ED, number of sessions, and lifestyle. Clinical data shows that 75–80% of patients experience significant improvement, while a smaller proportion experience only modest benefits. Patients with severe vascular disease may see limited results from PRP alone and may benefit from combination therapy.',
  },
  {
    question: 'Will my erections return to how they were in my 20s?',
    answer: 'For many patients with mild to moderate ED, P-Shot treatment produces substantial improvements in erectile quality that genuinely restore confidence and sexual function. For patients with severe vascular disease, improvements may be meaningful but may not restore baseline function from decades earlier. Realistic expectations are set during your consultation.',
  },
  {
    question: 'How long do P-Shot results last?',
    answer: 'Most patients enjoy the benefits of P-Shot treatment for 12–18 months. Some patients report continued improvement beyond this period, particularly those who completed a multi-session protocol or combined PRP with shockwave therapy. Annual maintenance sessions can sustain results indefinitely.',
  },
];

export default function PShotBeforeAfterPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot Before and After', 'P-Shot results timeline and before and after outcomes for PRP therapy in erectile dysfunction.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Before and After – Results & Timeline Guide"
        subtitle="What does P-Shot actually deliver? Honest, evidence-based guide to P-Shot before and after outcomes, including result timelines and realistic expectations."
      />
      <BenefitsSection benefits={benefits} heading="What to Expect from P-Shot Treatment" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">P-Shot Results: Week by Week Timeline</h2>
          <div className="text-slate-600 space-y-4">
            <p>The P-Shot does not produce immediate results — it initiates a biological process of vascular and tissue regeneration that unfolds over weeks and months. In the first 1–2 weeks after treatment, patients typically notice minimal change as the initial inflammatory response from PRP injection subsides. From weeks 2–4, many patients begin to notice early improvements: erections may feel slightly more reliable or firmer, and sensitivity may feel enhanced. These early changes reflect the beginning of angiogenesis — the growth of new blood vessels stimulated by PRP growth factors.</p>
            <p>The most significant improvements typically occur between weeks 4 and 12, as the regenerative processes stimulated by PRP reach their full effect. New capillary networks have matured, collagen synthesis has improved tissue health, and nerve regeneration is contributing to enhanced sensitivity. By the 12-week mark, patients are experiencing their peak P-Shot results. Clinical assessment tools such as the International Index of Erectile Function (IIEF) consistently show statistically significant improvements at this timepoint in studies of PRP therapy for ED, with 75–80% of patients reporting substantial benefit.</p>
            <p>After week 12, results stabilise and are maintained for an extended period. The majority of patients continue to enjoy improved erectile function at the 12-month mark, and many report sustained benefits at 18 months. The key to realistic expectations is understanding that P-Shot is a treatment for erectile dysfunction — not a cure for all cases. Patients with severe vasculogenic ED or significant comorbidities may see more modest improvements, and our team will set honest, evidence-based expectations before your treatment begins.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Before and After FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
