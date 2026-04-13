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
  title: 'How Long Does P-Shot Last? Complete Duration Guide 2026',
  description:
    'How long does P-Shot last? Most patients enjoy benefits for 12-18 months. Learn what affects duration and how to extend your results.',
};

const benefits = [
  { icon: 'Clock', title: '12–18 Month Results', description: 'Most patients enjoy measurable benefits for 12 to 18 months' },
  { icon: 'Activity', title: 'Factors That Influence Duration', description: 'Age, health status, and lifestyle all affect how long results last' },
  { icon: 'Star', title: 'Maintenance Options', description: 'Annual top-up sessions can extend results indefinitely' },
  { icon: 'Heart', title: 'Lifestyle Impact', description: 'Healthy lifestyle choices significantly prolong treatment benefits' },
  { icon: 'ShieldCheck', title: 'Individual Variation', description: 'Results vary — some patients report benefits beyond 24 months' },
  { icon: 'Zap', title: 'Extension Strategies', description: 'Evidence-based protocols to maximise and extend your results' },
];

const faqs = [
  {
    question: 'How long does the P-Shot last on average?',
    answer: 'Clinical evidence and patient data consistently show that P-Shot results last between 12 and 18 months for most patients. Some patients report continued benefits at 24 months, particularly those who maintain a healthy lifestyle and undergo a multi-session treatment protocol.',
  },
  {
    question: 'What factors affect how long P-Shot results last?',
    answer: 'The key factors influencing duration include age (younger patients often sustain results longer), underlying health conditions (diabetes and cardiovascular disease can reduce duration), lifestyle factors (exercise, diet, smoking, alcohol), number of PRP sessions, and the quality of PRP processing. Patients who combine P-Shot with shockwave therapy often report longer-lasting outcomes.',
  },
  {
    question: 'Can I have a maintenance P-Shot to extend my results?',
    answer: 'Yes. Annual maintenance P-Shot sessions are a common and effective strategy to sustain results over time. Many patients schedule a top-up treatment at the 12-month mark, before their results begin to diminish, to maintain continuous improvement.',
  },
  {
    question: 'Do multiple P-Shot sessions last longer than a single session?',
    answer: 'Evidence suggests that a course of 3 P-Shot sessions produces results that last longer than a single session. The cumulative effect of repeated PRP applications leads to more complete vascular remodelling and tissue regeneration, which correlates with more durable outcomes.',
  },
  {
    question: 'Will my P-Shot results suddenly stop, or gradually diminish?',
    answer: 'Results typically diminish gradually rather than stopping abruptly. Patients usually notice that improvements in erectile quality slowly reduce over time as the initial tissue regeneration effects fade. This gradual change makes it easy to identify the right time for a maintenance session.',
  },
];

export default function HowLongDoesPShotLastPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot Duration', 'How long P-Shot PRP therapy results last — clinical evidence and factors affecting duration.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="How Long Does the P-Shot Last? Your Complete Guide"
        subtitle="Clinical evidence and patient experience on P-Shot result duration — and the factors that determine how long your improvements will last."
      />
      <BenefitsSection benefits={benefits} heading="P-Shot Duration: Key Facts" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">P-Shot Duration: What the Evidence Shows</h2>
          <div className="text-slate-600 space-y-4">
            <p>The P-Shot (Priapus Shot) uses platelet-rich plasma (PRP) to stimulate vascular regeneration and tissue repair in the penis. Unlike oral medications, which provide only short-term symptom relief, PRP therapy initiates a regenerative process that produces structural changes in penile tissue. This is why results are sustained over months rather than hours. Clinical studies and patient outcome data consistently indicate that benefits typically persist for 12 to 18 months following treatment, with some patients reporting continued improvements beyond this timeframe.</p>
            <p>Several biological and lifestyle factors influence how long P-Shot results last. Age is a significant variable — younger men with healthier baseline vascular function tend to sustain results longer, because their tissue regeneration capacity is greater. Men with conditions such as diabetes mellitus or cardiovascular disease may experience shorter duration of benefit, as underlying vascular disease can counteract the regenerative effects of PRP. Lifestyle factors including regular exercise, a balanced diet, healthy sleep patterns, and avoiding smoking and excessive alcohol consumption all positively influence result duration by supporting vascular health.</p>
            <p>For patients who want to extend their results indefinitely, annual maintenance sessions are a well-established and evidence-supported strategy. Many patients schedule a top-up P-Shot at the 12-month mark — before significant diminishment of results — to maintain continuous benefit. Combining the P-Shot with low-intensity shockwave therapy has also been shown to produce more durable outcomes, as shockwave therapy provides a complementary mechanism of angiogenesis promotion. Our specialists can design a long-term treatment strategy during your consultation.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Duration FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
