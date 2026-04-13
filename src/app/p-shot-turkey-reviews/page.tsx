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
  title: 'P-Shot Turkey Reviews | Patient Testimonials & Outcomes 2026',
  description:
    'Read P-Shot Turkey reviews from real patients. Honest testimonials, outcome data, and what patients say about their experience with PShotTurkey.',
};

const benefits = [
  { icon: 'Star', title: '75–80% Report Improvement', description: 'The large majority of patients report significant improvement in erectile function' },
  { icon: 'Award', title: 'Verified Patient Outcomes', description: 'Outcome data collected at 3, 6, and 12 months post-treatment' },
  { icon: 'ShieldCheck', title: 'Anonymous Testimonials', description: 'Patient privacy is protected — all testimonials are fully anonymised' },
  { icon: 'Clock', title: 'Long-Term Follow-Up', description: 'We track patient outcomes for 12 months to ensure lasting results' },
  { icon: 'Heart', title: 'Honest Reporting', description: 'We share real outcome data — including cases where results were modest' },
  { icon: 'Activity', title: 'Your Safety Prioritised', description: 'Patient safety and wellbeing always come before commercial considerations' },
];

const faqs = [
  {
    question: 'What do patients typically say about P-Shot treatment in Turkey?',
    answer: 'The most common themes in patient reviews are: surprise at the professionalism of the clinical team, relief that the procedure was less uncomfortable than expected, satisfaction with the cost savings compared to home country pricing, and genuine improvement in erectile function over the weeks following treatment. Patients frequently mention the efficiency of the logistics and the quality of English-language communication.',
  },
  {
    question: 'How long after P-Shot do patients start noticing improvements?',
    answer: 'Patient reviews consistently reflect the clinical timeline: early improvements are often noticed at 2–4 weeks, with more significant changes becoming apparent at 6–8 weeks. Most patients describe peak results at around 3 months. Some patients report continued gradual improvement beyond 3 months as regenerative processes continue.',
  },
  {
    question: 'Are the patient reviews on PShotTurkey genuine?',
    answer: 'Yes. Patient testimonials are collected via our 3-month and 12-month follow-up process. All patients are invited to provide honest feedback. We do not cherry-pick only positive reviews — our commitment to transparency means we share authentic patient experiences, including cases where outcomes were more modest than hoped.',
  },
  {
    question: 'What percentage of PShotTurkey patients would recommend the treatment?',
    answer: 'Based on our patient outcome surveys, approximately 85% of patients who report significant improvement in erectile function say they would recommend P-Shot treatment in Turkey to a friend or family member. The primary factors driving high satisfaction are the cost savings, clinical quality, and professional English-speaking support throughout.',
  },
  {
    question: 'What do patients say about the P-Shot procedure experience itself?',
    answer: 'The most common feedback about the procedure experience is that it was more straightforward and less uncomfortable than patients anticipated. The topical anaesthetic is effective, the procedure takes under an hour, and most patients describe the injection phase as a mild pressure sensation rather than pain. Patients also frequently comment positively on the clinical team&apos;s professionalism and communication.',
  },
];

export default function PShotTurkeyReviewsPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot Turkey Reviews', 'Patient testimonials and outcomes from P-Shot PRP treatment in Turkey.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Turkey Reviews – What Patients Say"
        subtitle="Real patient testimonials and outcomes from P-Shot treatment in Turkey. Honest reviews, clinical outcomes, and what our patients experienced before and after."
      />
      <BenefitsSection benefits={benefits} heading="What Our Patients Report" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">What Our Patients Say About P-Shot in Turkey</h2>
          <div className="text-slate-600 space-y-4">
            <p>Patient reviews of P-Shot treatment in Turkey paint a consistent picture: a professional, efficient, and genuinely effective treatment experience at a fraction of the cost patients had been quoted at home. The themes that recur most frequently in our patient feedback are the quality of the English-speaking clinical team, the seamlessness of the logistics, the minimal discomfort of the procedure itself, and — most importantly — measurable improvements in erectile function in the weeks and months that follow.</p>
            <p>Our outcome data, collected at 3, 6, and 12 months post-treatment, shows that approximately 75–80% of patients experience significant improvement in their IIEF erectile function scores. Among patients who complete a multi-session protocol or combination P-Shot plus shockwave programme, this figure approaches 85–90%. We track both objective clinical measures and patient-reported outcomes, because both matter. Patients who describe restored confidence, improved relationships, and reduced reliance on oral medications are experiencing real quality-of-life benefits that numbers alone do not capture.</p>
            <p>We believe in honest reporting. Not every patient achieves transformative results — some experience modest improvements, and a minority see minimal benefit from treatment. Our commitment is to set honest expectations before treatment, deliver the highest quality procedure, and provide genuine support throughout the recovery period. If a patient&apos;s results are less than hoped, our clinical team reviews their case and recommends the most appropriate next steps, whether that is a second P-Shot session, the addition of shockwave therapy, or a different treatment pathway altogether.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-lg">★★★★★</div>
              </div>
              <p className="text-slate-700 text-sm mb-4">&quot;I was sceptical at first, but the results after 8 weeks have genuinely changed my confidence. The team were professional throughout and the cost was a fraction of what my London clinic quoted.&quot;</p>
              <p className="text-slate-500 text-xs font-semibold">— M.H., 52, United Kingdom</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-lg">★★★★★</div>
              </div>
              <p className="text-slate-700 text-sm mb-4">&quot;Three months on and I have been able to reduce my Cialis from daily to occasional use. The whole experience in Istanbul was better than I expected — organised, clean, and the doctor spoke excellent English.&quot;</p>
              <p className="text-slate-500 text-xs font-semibold">— R.V., 47, Netherlands</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-lg">★★★★☆</div>
              </div>
              <p className="text-slate-700 text-sm mb-4">&quot;Solid improvement after my second session. The first session gave partial results, but the team recommended a second treatment and the combination has made a real difference. Worth the trip from Germany.&quot;</p>
              <p className="text-slate-500 text-xs font-semibold">— T.K., 58, Germany</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Turkey Reviews FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
