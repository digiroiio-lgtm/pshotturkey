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
  title: 'P-Shot vs Shockwave Therapy | Which ED Treatment is Better?',
  description:
    'P-Shot vs shockwave therapy for ED — a detailed comparison of how they work, effectiveness, cost, and which treatment (or combination) is right for you.',
};

const benefits = [
  { icon: 'Activity', title: 'Different Mechanisms', description: 'PRP uses growth factors; shockwave uses acoustic energy — both promote angiogenesis' },
  { icon: 'Award', title: 'Clinical Evidence for Both', description: 'Both treatments are supported by peer-reviewed clinical studies' },
  { icon: 'Zap', title: 'Combination Synergy', description: 'Combined P-Shot + shockwave therapy often outperforms either alone' },
  { icon: 'Star', title: 'Personalised Selection', description: 'The right treatment depends on your specific cause and severity of ED' },
  { icon: 'ShieldCheck', title: 'Specialist Guidance', description: 'Our urologists help you choose the most effective protocol' },
  { icon: 'TrendingDown', title: 'Both Available in Turkey', description: 'Access both treatments at a fraction of UK prices in Turkey' },
];

const faqs = [
  {
    question: 'What is the difference between P-Shot and shockwave therapy for ED?',
    answer: 'P-Shot uses platelet-rich plasma (PRP) derived from your own blood, injected directly into penile tissue to deliver growth factors that stimulate vascular and tissue regeneration. Shockwave therapy (LiSWT) uses low-intensity acoustic waves applied externally to the penis, mechanically stimulating angiogenesis and breaking down micro-plaques in blood vessels. Both promote new blood vessel formation but through different mechanisms.',
  },
  {
    question: 'Which is more effective — P-Shot or shockwave therapy?',
    answer: 'Both treatments have demonstrated efficacy in clinical studies. Shockwave therapy has a larger evidence base with more randomised controlled trials, while PRP evidence continues to grow. The most effective approach is often a combination of both treatments, which produces synergistic benefits. The best choice for an individual patient depends on the specific type and severity of their ED.',
  },
  {
    question: 'Is P-Shot or shockwave therapy better for vasculogenic ED?',
    answer: 'Both treatments target vasculogenic ED (ED caused by poor penile blood flow). Shockwave therapy has strong evidence for vasculogenic ED, particularly in patients who have failed oral medications. P-Shot complements shockwave by delivering biological growth factors that accelerate vascular remodelling. For vasculogenic ED, the combination approach is most evidence-supported.',
  },
  {
    question: 'Does shockwave therapy hurt?',
    answer: 'Low-intensity shockwave therapy (LiSWT) is generally well-tolerated. Patients typically feel a mild tapping or tingling sensation during the treatment. No anaesthetic is required. Sessions last approximately 20–30 minutes. P-Shot requires a topical anaesthetic cream to minimise discomfort during the injection phase.',
  },
  {
    question: 'Can I have P-Shot and shockwave therapy at the same visit?',
    answer: 'Yes. Our combination packages are designed to deliver both treatments in the same clinic visit. The shockwave therapy session is typically performed first, followed by the P-Shot. Many patients travel to Turkey specifically for this combined protocol, which would be significantly more expensive if performed in the UK.',
  },
];

export default function PShotVsShockwaveTherapyPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot vs Shockwave Therapy', 'Comparison of P-Shot PRP therapy and low-intensity shockwave therapy for erectile dysfunction.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot vs Shockwave Therapy for ED – Full Comparison"
        subtitle="A detailed side-by-side comparison of P-Shot PRP therapy and low-intensity shockwave therapy (LiSWT) for erectile dysfunction — helping you choose the right treatment."
      />
      <BenefitsSection benefits={benefits} heading="P-Shot vs Shockwave: Key Comparisons" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">P-Shot vs Shockwave Therapy: Which is Right for You?</h2>
          <div className="text-slate-600 space-y-4">
            <p>P-Shot PRP therapy and low-intensity shockwave therapy (LiSWT) are both non-surgical, regenerative treatments for erectile dysfunction that work by improving penile blood flow. Despite their shared goal, they operate through distinct biological mechanisms. P-Shot delivers a concentrated dose of growth factors (including VEGF, PDGF, and TGF-β) directly into penile tissue, triggering a biological cascade of vascular regeneration and cellular repair. Shockwave therapy uses mechanical acoustic energy applied externally to the penile shaft, which stimulates angiogenesis through mechanotransduction — the conversion of mechanical stimuli into cellular biological responses. Both approaches have clinical evidence supporting their efficacy, and both are considerably cheaper in Turkey than in the UK or Europe.</p>
            <p>When comparing the two treatments for specific patient profiles, each has relative advantages. Shockwave therapy has a larger evidence base from randomised controlled trials, particularly for vasculogenic ED and for patients who have failed oral PDE5 inhibitors. It is typically delivered as a course of 6–12 sessions over several weeks and requires no injection. P-Shot is delivered in one to three sessions, uses no external device, and delivers its regenerative stimulus directly to the target tissue. PRP has additional biological mechanisms — nerve regeneration and collagen synthesis — that shockwave does not replicate. For patients with Peyronie&apos;s disease (penile curvature), the anti-fibrotic properties of PRP may make P-Shot the preferred choice.</p>
            <p>For many patients, the most effective strategy is to use both treatments together. Combination therapy — P-Shot plus shockwave — is increasingly supported by emerging evidence as producing synergistic benefits that exceed either treatment alone. The mechanical stimulus from shockwave and the biological growth factor delivery from PRP work through complementary pathways, potentially producing more complete vascular remodelling than either can achieve independently. PShotTurkey offers combination packages that make this premium protocol accessible at a genuinely affordable price, and our specialists will advise which approach is most appropriate for your specific case.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot vs Shockwave Therapy FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
