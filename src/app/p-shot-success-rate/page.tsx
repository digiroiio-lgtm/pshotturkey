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
  title: 'P-Shot Success Rate | Clinical Evidence & Patient Outcomes',
  description:
    'What is the P-Shot success rate? Clinical evidence shows 75-80% of patients report significant improvements. Full analysis of outcomes and success factors.',
};

const benefits = [
  { icon: 'Award', title: '75–80% Success Rate', description: 'The large majority of patients report significant improvement' },
  { icon: 'ShieldCheck', title: 'Clinically Documented', description: 'Results supported by peer-reviewed published studies' },
  { icon: 'Activity', title: 'Improvement in IIEF Scores', description: 'Validated erectile function scores improve significantly post-treatment' },
  { icon: 'Heart', title: 'Enhanced Sensitivity', description: 'Many patients also report improved penile sensitivity and sensation' },
  { icon: 'Clock', title: 'Long-Lasting Results', description: 'Successful outcomes typically persist for 12–18 months' },
  { icon: 'Zap', title: 'Combination Therapy Boosts Results', description: 'Adding shockwave therapy increases success rate further' },
];

const faqs = [
  {
    question: 'What is the P-Shot success rate?',
    answer: 'Clinical studies and patient outcome data consistently show that approximately 75–80% of patients with mild to moderate erectile dysfunction experience significant improvements following P-Shot treatment. Success is typically defined as a clinically meaningful improvement in IIEF (International Index of Erectile Function) scores, patient-reported erection quality, or reduced reliance on oral ED medications.',
  },
  {
    question: 'What factors predict P-Shot success?',
    answer: 'Factors associated with better outcomes include mild to moderate (rather than severe) ED, younger age, absence of significant diabetes or cardiovascular disease, multi-session treatment protocol, combination with shockwave therapy, and healthy lifestyle factors. Patients with the best vascular health at baseline tend to achieve the greatest response to PRP therapy.',
  },
  {
    question: 'What happens if P-Shot does not work for me?',
    answer: 'In the approximately 20–25% of patients who do not achieve the desired outcome from P-Shot alone, several options are available. A second or third P-Shot session often produces improvement when the first session did not. Adding shockwave therapy can unlock additional benefit. Hormonal assessment may reveal treatable causes. Our team will review your case and recommend next steps.',
  },
  {
    question: 'How is P-Shot success measured?',
    answer: 'P-Shot success is typically measured using the International Index of Erectile Function (IIEF) questionnaire — a validated 15-question survey covering erectile function, orgasmic function, sexual desire, intercourse satisfaction, and overall satisfaction. Clinically meaningful improvement is defined as a ≥4-point improvement in the IIEF erectile function domain score. Patient-reported outcomes and reduced medication use are also key indicators.',
  },
  {
    question: 'Does the success rate change with multiple P-Shot sessions?',
    answer: 'Yes. Studies comparing single-session versus multi-session PRP protocols consistently show higher response rates and more durable results with 2–3 sessions. Patients who did not respond fully to a single session often achieve good results with a second treatment. Multi-session packages are therefore recommended for patients seeking the highest probability of success.',
  },
];

export default function PShotSuccessRatePage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot Success Rate', 'Clinical evidence and patient outcomes for P-Shot PRP therapy success rate in erectile dysfunction.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Success Rate – What the Evidence Shows"
        subtitle="How effective is the P-Shot? A thorough review of clinical evidence, patient outcomes, and the factors that predict treatment success."
      />
      <BenefitsSection benefits={benefits} heading="P-Shot Effectiveness at a Glance" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Analysing P-Shot Clinical Evidence and Success Rates</h2>
          <div className="text-slate-600 space-y-4">
            <p>The P-Shot success rate reported across clinical studies is consistently in the range of 75–80% for patients with mild to moderate erectile dysfunction. This figure represents the proportion of patients who experience a clinically meaningful improvement — typically a 4+ point increase in the IIEF erectile function domain score — following treatment. Success rates are highest in patients with vasculogenic ED who have not yet developed severe vascular disease, and in those who complete a multi-session protocol rather than a single treatment.</p>
            <p>The biological rationale for P-Shot&apos;s effectiveness lies in its mechanism of action. By delivering concentrated growth factors — including VEGF, PDGF, and IGF-1 — directly to penile tissue, PRP therapy stimulates three key regenerative processes: angiogenesis (new blood vessel formation), neurogenesis (nerve fibre regeneration), and collagen remodelling (improved tissue health). These structural changes in penile architecture are measurable on penile Doppler ultrasound, which has been used in several studies to confirm improved peak systolic velocity and reduced resistive index following PRP treatment. Objective vascular improvements correlate strongly with subjective patient-reported improvements in erectile function.</p>
            <p>Success rates can be further improved through treatment optimisation. Patients who receive 3 P-Shot sessions rather than 1 achieve meaningfully higher response rates. Combining P-Shot with low-intensity shockwave therapy produces synergistic effects — clinical data on combination protocols suggests response rates approaching 85–90% in appropriate patients. Optimising vascular health through lifestyle changes — regular exercise, healthy diet, smoking cessation, controlled blood pressure — also enhances the likelihood of a strong treatment response. Our specialists work with each patient individually to identify every opportunity to maximise their outcome.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Success Rate FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
