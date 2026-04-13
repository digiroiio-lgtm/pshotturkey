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
  title: 'PRP for ED Turkey | Platelet-Rich Plasma Therapy for Erectile Dysfunction',
  description:
    'PRP therapy for erectile dysfunction in Turkey. The P-Shot uses your own platelet-rich plasma to restore natural erectile function. From £350. Free consultation.',
};

const benefits = [
  { icon: 'ShieldCheck', title: 'Autologous (Your Own Blood)', description: 'PRP is derived from your own blood — no foreign substances introduced' },
  { icon: 'Activity', title: 'Addresses Root Causes', description: 'Stimulates vascular and tissue regeneration at the source of ED' },
  { icon: 'Award', title: 'Clinically Proven', description: 'Supported by peer-reviewed studies and growing clinical evidence' },
  { icon: 'Clock', title: 'Long-Lasting Results', description: 'Most patients enjoy benefits for 12–18 months after treatment' },
  { icon: 'Star', title: 'Enhanced Sensitivity', description: 'Growth factors stimulate nerve regeneration and sensitivity' },
  { icon: 'Heart', title: 'Confidence Boost', description: 'Restored function leads to improved confidence and relationship wellbeing' },
];

const faqs = [
  {
    question: 'What is PRP therapy for erectile dysfunction?',
    answer: 'PRP (Platelet-Rich Plasma) therapy for ED involves drawing a small amount of your own blood, processing it in a centrifuge to concentrate the platelets and growth factors, then injecting it into targeted areas of the penis. This stimulates tissue regeneration, new blood vessel formation, and improved erectile function.',
  },
  {
    question: 'How many PRP sessions will I need for ED?',
    answer: 'Many patients see significant improvement after a single PRP session. Patients with more severe ED, or those seeking optimal long-term results, may benefit from 2–3 sessions spaced 4–6 weeks apart. Our specialists will recommend the right protocol during your consultation.',
  },
  {
    question: 'When will I notice results from PRP therapy for ED?',
    answer: 'Initial improvements are often noticed within 2–4 weeks. The full effect of PRP therapy — as growth factors stimulate tissue regeneration — typically peaks at 8–12 weeks after treatment. Results continue to develop over several months.',
  },
  {
    question: 'Is PRP therapy for ED safe?',
    answer: 'PRP is considered one of the safest medical treatments available because it uses your own blood. The risk of allergic reaction or rejection is virtually eliminated. The most common side effects are mild bruising or swelling at the injection site, which resolves within 24–48 hours.',
  },
  {
    question: 'How does PRP differ from Viagra or other ED medications?',
    answer: 'Oral ED medications like Viagra work by temporarily increasing blood flow — they treat symptoms in the short term. PRP therapy aims to address the underlying vascular and tissue causes of ED, potentially producing lasting improvements without ongoing medication. Many patients who previously relied on Viagra report being able to reduce or eliminate their medication after PRP treatment.',
  },
];

export default function PRPForEDTurkeyPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('PRP for ED Turkey', 'Platelet-rich plasma therapy for erectile dysfunction in Turkey using the P-Shot protocol.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="PRP Therapy for ED in Turkey – Drug-Free Erectile Restoration"
        subtitle="Harness the healing power of your own blood. Platelet-rich plasma (PRP) therapy for erectile dysfunction — stimulating natural tissue regeneration and vascular improvement."
      />
      <BenefitsSection benefits={benefits} heading="Why PRP is a Superior ED Treatment" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">The Science Behind PRP for Erectile Dysfunction</h2>
          <div className="text-slate-600 space-y-4">
            <p>Platelet-Rich Plasma therapy works by concentrating the growth factors naturally present in your blood and delivering them to penile tissue in high concentrations. When blood is processed through a centrifuge, the platelets — which contain powerful growth factors including PDGF, VEGF, and IGF-1 — are separated and concentrated. This concentrated PRP is then injected into the corpus cavernosum and surrounding structures, where it initiates a cascade of regenerative activity.</p>
            <p>The primary mechanism of benefit in PRP for ED is angiogenesis — the formation of new blood vessels. Poor penile blood flow is the underlying cause of erectile dysfunction in the majority of cases. VEGF (Vascular Endothelial Growth Factor), one of the key growth factors in PRP, directly stimulates the growth of new capillaries in penile tissue. This improved vascular supply allows for stronger, more reliable erections and better overall penile health. PRP also promotes collagen synthesis and nerve regeneration, which improves both rigidity and sensitivity.</p>
            <p>Clinical evidence supporting PRP for ED continues to grow. A number of peer-reviewed studies have demonstrated statistically significant improvements in IIEF (International Index of Erectile Function) scores following PRP treatment. Unlike oral medications, which address only the symptoms of ED, PRP therapy targets the biological root causes — making it a genuinely restorative treatment rather than a temporary fix. In Turkey, specialist urologists with experience in regenerative medicine deliver PRP using precisely calibrated protocols to maximise clinical outcomes.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="PRP for ED Turkey FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
