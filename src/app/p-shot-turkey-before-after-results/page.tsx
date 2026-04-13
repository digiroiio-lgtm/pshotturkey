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
  title: 'P-Shot Turkey Before After Results | Outcomes & Success Stories 2026',
  description:
    'P-Shot Turkey before and after results — real outcomes, treatment timelines, and success stories from patients treated in Turkey. Realistic expectations and clinical data.',
};

const benefits = [
  { icon: 'Award', title: 'Documented Results', description: 'Outcome data collected at 3, 6, and 12 months for all patients' },
  { icon: 'Star', title: '75–80% Success Rate', description: 'The majority of patients achieve significant improvements' },
  { icon: 'Clock', title: 'Result Timeline (2–12 Weeks)', description: 'Early results at 2–4 weeks; peak results at 8–12 weeks post-treatment' },
  { icon: 'Heart', title: 'Long-Lasting Effects (12–18 Months)', description: 'Benefits are sustained for 12–18 months in most patients' },
  { icon: 'Zap', title: 'Combination Therapy Available', description: 'Adding shockwave therapy enhances and extends results' },
  { icon: 'ShieldCheck', title: 'Personalised Outcome Planning', description: 'Treatment plans designed to maximise your individual results' },
];

const faqs = [
  {
    question: 'What before and after results can I realistically expect from P-Shot in Turkey?',
    answer: 'Realistic outcomes for most patients include: stronger and more reliable erections, improved erectile rigidity, faster response to arousal, enhanced penile sensitivity, and reduced reliance on oral ED medications. IIEF (International Index of Erectile Function) scores typically improve by 4–8 points. These improvements develop progressively over 8–12 weeks and last 12–18 months in most patients.',
  },
  {
    question: 'How quickly do before and after changes occur after P-Shot in Turkey?',
    answer: 'The P-Shot initiates a biological process that takes time to develop. Most patients notice early changes at 2–4 weeks as initial vascular improvements take effect. More substantial before-and-after differences become apparent at 6–8 weeks. Peak results are typically reached at 8–12 weeks, when the full regenerative effect of PRP growth factors has been realised.',
  },
  {
    question: 'What percentage of P-Shot Turkey patients see before and after improvements?',
    answer: 'Based on PShotTurkey&apos;s patient outcome data, approximately 75–80% of patients with mild to moderate ED report significant improvement at 3 months. Among patients who complete a multi-session protocol or combination P-Shot plus shockwave programme, this figure rises to approximately 85–90%. A minority of patients experience only modest improvements, particularly those with severe vasculogenic ED.',
  },
  {
    question: 'Can I see before and after photos of P-Shot results?',
    answer: 'We do not publish before and after photographs out of respect for patient privacy and dignity. P-Shot is a medical treatment, and we believe patient outcomes are best communicated through validated clinical measures (IIEF scores, patient-reported outcomes) and anonymised testimonials rather than intimate photographs. We are happy to discuss expected outcomes in detail during your consultation.',
  },
  {
    question: 'How can I maximise my before and after P-Shot results?',
    answer: 'To maximise your P-Shot outcomes: consider a multi-session protocol rather than a single session; consider adding shockwave therapy for synergistic benefit; follow all aftercare instructions carefully; maintain a healthy lifestyle (exercise, healthy diet, avoid smoking and excessive alcohol); manage underlying conditions such as diabetes or hypertension optimally; and attend your 3-month and 12-month follow-up assessments so our team can monitor and optimise your progress.',
  },
];

export default function PShotTurkeyBeforeAfterResultsPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot Turkey Before After Results', 'Documented P-Shot before and after results and success stories from patients treated in Turkey.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Turkey Before & After Results – Real Patient Outcomes"
        subtitle="Documented P-Shot before and after results from patients treated in Turkey. What outcomes are realistic, what the evidence shows, and how to optimise your results."
      />
      <BenefitsSection benefits={benefits} heading="P-Shot Turkey: Expected Outcomes" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">P-Shot Turkey: Before and After Outcome Analysis</h2>
          <div className="text-slate-600 space-y-4">
            <p>Understanding P-Shot before and after outcomes requires appreciating both the mechanism of treatment and the timeline of results. The P-Shot does not produce immediate changes — it initiates a cascade of biological regeneration that unfolds over 8–12 weeks. In the &quot;before&quot; state, patients typically present with reduced erectile rigidity, unreliable erections, possibly reduced sensitivity, and psychological impact from the condition. The &quot;after&quot; state, for the majority of patients who respond well, involves more consistent and firmer erections, improved sensitivity, reduced anxiety about sexual performance, and — for many patients — the ability to reduce or eliminate their reliance on oral PDE5 inhibitors.</p>
            <p>PShotTurkey collects structured outcome data at 3, 6, and 12 months post-treatment using the validated IIEF questionnaire. This allows us to track before-and-after changes objectively and identify trends across patient populations. Our data consistently shows statistically significant IIEF improvements at 3 months, with sustained benefit at 12 months in the majority of responders. The most predictive factors for strong before-and-after improvement are mild-to-moderate baseline ED severity, absence of severe vascular comorbidities, and completion of a multi-session protocol. Patients who add shockwave therapy to their P-Shot programme consistently show greater improvement than those who receive P-Shot alone.</p>
            <p>We believe in setting honest before-and-after expectations. P-Shot is not a guaranteed cure for all cases of erectile dysfunction, and some patients experience only modest improvements. For patients with severe vascular disease, significant diabetic complications, or post-surgical/post-radiation ED, the regenerative capacity of penile tissue may be limited. In these cases, P-Shot may still provide some benefit, but combination therapy, hormonal optimisation, or other treatment approaches may be needed for meaningful improvement. Our specialists provide candid, personalised outcome counselling before any treatment is confirmed, so every patient makes an informed decision.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Turkey Before After FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
