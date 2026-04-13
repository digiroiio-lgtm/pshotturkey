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
  title: 'ED Treatment Turkey | Erectile Dysfunction Treatment from £350',
  description:
    'Expert erectile dysfunction treatment in Turkey. P-Shot PRP therapy and shockwave therapy from board-certified urologists. From £350. Free WhatsApp consultation.',
};

const benefits = [
  { icon: 'ShieldCheck', title: 'Non-Surgical Options', description: 'P-Shot PRP and shockwave therapy avoid surgery completely' },
  { icon: 'Activity', title: 'Multiple Treatments', description: 'Combination protocols tailored to each patient&apos;s needs' },
  { icon: 'Award', title: 'Specialist Urologists', description: 'Board-certified specialists with international training' },
  { icon: 'TrendingDown', title: '85% Cost Savings', description: 'Save up to 85% compared to UK and European clinic prices' },
  { icon: 'Zap', title: 'Fast Results', description: 'Many patients notice improvements within 2–4 weeks' },
  { icon: 'Heart', title: 'Holistic Approach', description: 'Addressing vascular, psychological, and hormonal factors' },
];

const faqs = [
  {
    question: 'What ED treatments are available in Turkey?',
    answer: 'Turkey offers a full range of ED treatments including P-Shot PRP therapy, low-intensity shockwave therapy (LiSWT), hormonal evaluation, and combination protocols. Our specialists create personalised treatment plans based on your specific cause of ED.',
  },
  {
    question: 'How much does ED treatment in Turkey cost?',
    answer: 'ED treatment in Turkey starts from £350 for a single P-Shot session. Shockwave therapy packages start from a similar price point. Combination packages — P-Shot plus shockwave — offer the best value for patients with moderate to severe ED.',
  },
  {
    question: 'Is ED treatment in Turkey as effective as in the UK?',
    answer: 'Yes. Turkish clinics use the same evidence-based protocols, equipment, and PRP processing systems as top UK and European providers. Many Turkish urologists completed postgraduate training in the UK, Germany, or the United States.',
  },
  {
    question: 'Do I need a referral from my GP to get ED treatment in Turkey?',
    answer: 'No referral is required. You can book a free WhatsApp consultation directly and proceed to treatment. Our doctors will conduct a full medical assessment before any procedure.',
  },
  {
    question: 'How long is the ED treatment trip to Turkey?',
    answer: 'Most patients complete their initial treatment in a 3–5 day trip. The procedure itself takes 45–60 minutes, and you can travel home the following day. Our team handles transfers, accommodation recommendations, and all logistics.',
  },
];

export default function EDTreatmentTurkeyPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('ED Treatment Turkey', 'Expert erectile dysfunction treatment in Turkey using P-Shot PRP therapy and shockwave therapy.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="ED Treatment Turkey – Expert Care for Erectile Dysfunction"
        subtitle="Restore natural erectile function with cutting-edge ED treatments in Turkey. P-Shot PRP therapy, shockwave therapy, and personalised protocols from expert urologists."
      />
      <BenefitsSection benefits={benefits} heading="Why Choose Turkey for ED Treatment?" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Why Turkey is the Best Destination for ED Treatment</h2>
          <div className="text-slate-600 space-y-4">
            <p>Turkey has emerged as one of the world&apos;s premier destinations for erectile dysfunction treatment, combining world-class medical expertise with significant cost savings. With more JCI-accredited hospitals than any other country in Europe, Turkish clinics meet and often exceed the standards set by UK and European healthcare providers. Urologists in Turkey are internationally trained, frequently holding qualifications from European and American institutions, and routinely treat patients from across the UK, Europe, and the Middle East.</p>
            <p>The treatment options available in Turkey are comprehensive. P-Shot PRP therapy uses your own platelet-rich plasma to stimulate vascular regeneration and improve erectile function at a cellular level. Low-intensity shockwave therapy (LiSWT) uses acoustic waves to promote new blood vessel formation in penile tissue. For patients with more complex cases, combination protocols combining both modalities — along with hormonal optimisation — deliver the most powerful and lasting results. Each treatment plan is individualised following a thorough urological assessment.</p>
            <p>Cost is a significant factor for many patients. In the UK, P-Shot treatment typically costs between £1,500 and £2,500 per session. In Turkey, the same treatment from equivalently qualified specialists starts from just £350. This price difference — without any compromise in quality, equipment, or aftercare — makes Turkey the logical choice for patients seeking the best ED treatment at a genuinely affordable price.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="ED Treatment Turkey FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
