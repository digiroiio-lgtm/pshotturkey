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
  title: 'How Many P-Shot Sessions Do I Need? | P-Shot Sessions Guide',
  description:
    'How many P-Shot sessions do you need? Most patients start with 1-3 sessions. Our guide explains when 1 session is enough and when more are recommended.',
};

const benefits = [
  { icon: 'ShieldCheck', title: 'One Session Often Sufficient', description: 'Many patients achieve significant results from a single P-Shot session' },
  { icon: 'Award', title: 'Evidence-Based Protocols', description: 'Session recommendations based on clinical evidence and patient data' },
  { icon: 'Star', title: 'Personalised Planning', description: 'Your treatment plan is tailored to your specific case and goals' },
  { icon: 'Zap', title: 'Combination Options', description: 'Adding shockwave therapy can reduce the number of PRP sessions needed' },
  { icon: 'TrendingDown', title: 'Cost-Effective Packages', description: 'Multi-session packages offer better value than individual sessions' },
  { icon: 'Clock', title: 'Long-Term Strategy', description: 'Annual maintenance sessions extend results over the long term' },
];

const faqs = [
  {
    question: 'How many P-Shot sessions do I need?',
    answer: 'The right number of sessions depends on your individual case. Patients with mild to moderate ED and no significant underlying health conditions often achieve excellent results from a single P-Shot session. Patients with more severe ED, a longer history of symptoms, or complicating factors such as diabetes or cardiovascular disease typically benefit from a course of 2–3 sessions spaced 4–6 weeks apart.',
  },
  {
    question: 'Is one P-Shot session enough?',
    answer: 'For many patients, yes — a single session produces significant and lasting improvements. Clinical data suggests that approximately 65–75% of patients with mild to moderate ED achieve satisfactory outcomes from one P-Shot session. If results are less than expected after one session, a second session typically produces a substantial additional benefit.',
  },
  {
    question: 'How far apart should P-Shot sessions be spaced?',
    answer: 'When multiple sessions are recommended, they are typically spaced 4–6 weeks apart. This interval allows the initial PRP-stimulated regenerative processes to develop before the next treatment builds upon them. Sessions that are too close together (less than 4 weeks) may not provide additional benefit over a single session.',
  },
  {
    question: 'What happens if I only have one P-Shot session when more were recommended?',
    answer: 'You will still likely experience some benefit from a single session. However, patients with moderate to severe ED who have a course of sessions recommended may find that a single treatment produces partial rather than complete improvement. You can always add further sessions later if needed.',
  },
  {
    question: 'Do I need ongoing P-Shot sessions forever?',
    answer: 'No. Most patients complete an initial course of 1–3 sessions and then benefit for 12–18 months without any further treatment. An annual maintenance session is recommended to sustain results long-term, but there is no requirement for ongoing frequent treatment.',
  },
];

export default function HowManySessionsPShotNeededPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot Sessions Guide', 'How many P-Shot sessions are needed — evidence-based guide to treatment planning.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="How Many P-Shot Sessions Do You Need?"
        subtitle="A practical guide to P-Shot session planning — when one session is enough, when a course of treatments is recommended, and how to space your sessions for best results."
      />
      <BenefitsSection benefits={benefits} heading="P-Shot Session Planning Explained" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Determining Your P-Shot Treatment Plan</h2>
          <div className="text-slate-600 space-y-4">
            <p>The number of P-Shot sessions that is right for you depends primarily on the severity and underlying cause of your erectile dysfunction. For patients with mild to moderate ED who are otherwise in good health, a single P-Shot session often produces results that are both significant and long-lasting. Clinical data supports that around 65–75% of patients in this category achieve satisfactory improvement from one treatment, with results typically peaking at 8–12 weeks and lasting 12–18 months. A single session is therefore a reasonable and cost-effective starting point for most new patients.</p>
            <p>Patients with more severe erectile dysfunction, a history of vascular disease, diabetes, or prolonged symptoms typically benefit from a structured course of treatment. Three P-Shot sessions, spaced 4–6 weeks apart, deliver a substantially higher cumulative dose of growth factors to penile tissue. This greater biological stimulus produces more complete vascular remodelling and tissue regeneration, resulting in both stronger improvements and longer-lasting results. The spacing interval of 4–6 weeks is clinically important — it allows each treatment cycle to complete before the next builds upon it.</p>
            <p>For patients who want to maximise their outcomes, combining P-Shot sessions with low-intensity shockwave therapy (LiSWT) often allows for fewer PRP sessions whilst achieving superior results. The two treatments work through complementary biological pathways — PRP delivers growth factors whilst shockwave mechanically stimulates angiogenesis. Our specialists will assess your individual situation during your initial consultation and recommend the most evidence-based and cost-effective treatment plan for your specific needs.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Sessions FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
