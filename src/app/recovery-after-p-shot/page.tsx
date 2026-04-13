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
  title: 'P-Shot Recovery | What to Expect After P-Shot Treatment',
  description:
    'P-Shot recovery guide — what to expect after treatment, aftercare instructions, when to resume activity, and tips for the best results.',
};

const benefits = [
  { icon: 'Zap', title: 'Same-Day Discharge', description: 'The procedure is outpatient — you go home the same day' },
  { icon: 'Clock', title: 'Resume Activity in 24–48h', description: 'Most patients return to normal activities within 24–48 hours' },
  { icon: 'ShieldCheck', title: 'Minimal Downtime', description: 'No surgery means no extended recovery period' },
  { icon: 'Heart', title: 'Full Written Aftercare', description: 'Detailed aftercare instructions provided to every patient' },
  { icon: 'Award', title: '12-Month Support', description: 'Full year of follow-up to monitor recovery and results' },
  { icon: 'Activity', title: 'Symptom Guidance', description: 'Clear guidance on what is normal and when to contact us' },
];

const faqs = [
  {
    question: 'What should I expect immediately after a P-Shot?',
    answer: 'Immediately after the procedure, you may notice mild swelling and firmness around the injection sites. This is a normal response to the PRP injection and typically resolves within 24–48 hours. The anaesthetic cream used before the procedure means most patients experience minimal discomfort during recovery. You will be discharged within an hour of the procedure.',
  },
  {
    question: 'How soon can I have sex after P-Shot?',
    answer: 'We advise patients to avoid sexual activity for 48 hours after P-Shot treatment. This allows the initial injection-site response to settle and ensures that the PRP has time to begin its regenerative activity without disruption. After 48 hours, sexual activity is encouraged — and many patients find that gentle sexual activity in the weeks following treatment supports the recovery process.',
  },
  {
    question: 'When can I exercise after P-Shot?',
    answer: 'Light daily activities can be resumed immediately. Strenuous exercise — including heavy gym sessions, cycling, or contact sports — should be avoided for 24–48 hours after the procedure. After this period, all forms of exercise can be gradually resumed. Cardiovascular exercise is beneficial for long-term erectile health and is encouraged from day 3 onwards.',
  },
  {
    question: 'Is bruising after P-Shot normal?',
    answer: 'Yes. Mild bruising at the injection sites is common and expected. It typically appears within the first 24–48 hours and resolves completely within 3–7 days. Applying cold compresses intermittently in the first 12 hours can help minimise bruising. Significant, spreading, or painful bruising is uncommon — contact your coordinator if this occurs.',
  },
  {
    question: 'What should I avoid after P-Shot treatment?',
    answer: 'For the 48 hours after P-Shot: avoid strenuous exercise, sexual activity, tight underwear or clothing, aspirin and anti-inflammatory medications (ibuprofen, naproxen), alcohol in large quantities, and extreme heat (saunas, very hot baths). These precautions support optimal PRP activity and minimise any potential side effects. Your written aftercare guide will cover all of these in detail.',
  },
];

export default function RecoveryAfterPShotPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot Recovery', 'Complete guide to P-Shot recovery — aftercare instructions and what to expect after treatment.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Recovery – What to Expect After Treatment"
        subtitle="A complete guide to P-Shot recovery — from the first hours after treatment to the weeks that follow. Practical advice for the best possible outcome."
      />
      <BenefitsSection benefits={benefits} heading="P-Shot Recovery at a Glance" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">P-Shot Recovery Timeline: Day by Day</h2>
          <div className="text-slate-600 space-y-4">
            <p>P-Shot recovery is straightforward and significantly easier than recovery from any surgical ED treatment. The procedure is performed under topical anaesthetic and takes 45–60 minutes from start to finish. After the procedure, you will rest briefly at the clinic while our team monitors you, and most patients are ready to leave within an hour. The most common immediate symptoms are mild swelling and firmness around the injection sites, which are normal signs that the PRP is beginning to work. You can travel home or to your hotel the same day.</p>
            <p>In the first 24–48 hours, it is important to follow your aftercare instructions carefully. Avoid strenuous physical activity, sexual activity, tight clothing, and anti-inflammatory medications during this period. These precautions allow the PRP to settle at the injection sites and begin its regenerative activity without disruption. Mild bruising may develop and will resolve within a week. Some patients notice temporary changes in sensitivity — either heightened or slightly reduced — which normalise within a few days. If you are travelling back to the UK or another country, the 24-hour rest period in Turkey before flying home is sufficient for most patients.</p>
            <p>From day 3 onwards, normal activities including exercise can be gradually resumed. It is worth noting that recovery from P-Shot and seeing results are two different processes — recovery from the procedure itself is essentially complete within a week, but the regenerative results of PRP continue to develop over 8–12 weeks. During this period, you may notice gradual improvements in erectile quality and sensitivity. All patients receive a detailed written aftercare guide and 12 months of follow-up support, ensuring any questions about your recovery are answered promptly by our clinical team.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Recovery FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
