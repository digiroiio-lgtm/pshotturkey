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
  title: 'Does P-Shot Increase Size? | Honest Clinical Guide 2026',
  description:
    'Does the P-Shot increase penis size? An honest clinical guide explaining what P-Shot can and cannot achieve, and what patients actually experience.',
};

const benefits = [
  { icon: 'Activity', title: 'Improved Blood Flow', description: 'PRP stimulates new blood vessels for stronger vascular filling' },
  { icon: 'Zap', title: 'Enhanced Engorgement', description: 'Better vascular capacity can increase erectile girth during arousal' },
  { icon: 'Star', title: 'Sensitivity Gains', description: 'Growth factors support nerve regeneration and enhanced sensation' },
  { icon: 'Heart', title: 'Natural Mechanism', description: 'Results arise from natural tissue regeneration — no implants or fillers' },
  { icon: 'ShieldCheck', title: 'No Implants', description: 'P-Shot does not use any synthetic materials or permanent implants' },
  { icon: 'Award', title: 'Realistic Expectations', description: 'We provide honest, evidence-based expectations before treatment' },
];

const faqs = [
  {
    question: 'Does P-Shot increase penis length?',
    answer: 'The P-Shot is not designed or clinically validated as a penile lengthening treatment. Its primary purpose is to improve erectile function and quality. There is no robust clinical evidence that P-Shot consistently increases flaccid or erect penile length. Patients who report perceived length gains typically attribute this to improved vascular filling producing a fuller, firmer erection rather than a structural change in tissue length.',
  },
  {
    question: 'Does P-Shot increase penis girth?',
    answer: 'Some patients report a modest increase in erectile girth following P-Shot treatment. This is most likely attributable to improved vascular capacity — more complete filling of the corpus cavernosum during erection. Patients with significant vascular insufficiency, where prior erections were sub-maximal in firmness and size, may notice the most pronounced change in girth as their vascular function improves.',
  },
  {
    question: 'Why do some patients report size gains after P-Shot?',
    answer: 'Reports of perceived size gains after P-Shot most commonly reflect improved erectile quality rather than structural enlargement. When blood flow and vascular capacity are sub-optimal, erections are typically less full than they could be. As PRP improves vascular function, patients experience more complete engorgement, which can feel like an increase in size. True structural growth from a single PRP treatment is not supported by current clinical evidence.',
  },
  {
    question: 'Is size increase the main benefit of P-Shot?',
    answer: 'No. The primary and most evidence-supported benefits of P-Shot are improved erectile function (stronger, more reliable erections), enhanced sensitivity, reduced reliance on oral ED medications, and potential improvement in Peyronie&apos;s disease symptoms. Any perceived size changes are a secondary observation reported by some patients.',
  },
  {
    question: 'What should patients realistically expect from P-Shot in terms of size?',
    answer: 'Patients should approach P-Shot with the expectation of improved erectile quality, not guaranteed size increase. Some men notice their erections feel fuller and firmer — which can translate to a modest apparent girth improvement — but this is not predictable or universal. Clinics that prominently market P-Shot as a penile enlargement treatment should be viewed with caution.',
  },
];

export default function DoesPShotIncreaseSizePage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot and Size', 'Honest clinical guide to what P-Shot can and cannot achieve regarding penile size.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="Does P-Shot Increase Size? The Honest Clinical Answer"
        subtitle="An honest, evidence-based answer to the most-asked P-Shot question. What the clinical evidence shows about P-Shot and size, and what to realistically expect."
      />
      <BenefitsSection benefits={benefits} heading="What P-Shot Actually Achieves" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">P-Shot and Size: What the Evidence Actually Shows</h2>
          <div className="text-slate-600 space-y-4">
            <p>The P-Shot (Priapus Shot) is a PRP therapy designed to improve erectile function, not to increase penile size. This is an important distinction. The primary mechanisms of P-Shot — angiogenesis, collagen stimulation, nerve regeneration, and improved vascular capacity — all target the biological causes of erectile dysfunction. When the treatment is effective, patients experience stronger, fuller erections. For men whose prior erections were limited by vascular insufficiency, these fuller erections may feel — and measure — somewhat larger, but this reflects improved function rather than structural tissue growth.</p>
            <p>The clinical literature on PRP for erectile dysfunction consistently demonstrates improvements in erectile function scores (IIEF), patient-reported satisfaction, and quality of erections. It does not consistently demonstrate measurable increases in anatomical penile length. Some case reports and small series have noted modest girth changes, but these observations are not robust enough to make size increase a validated outcome of P-Shot treatment. Patients considering P-Shot primarily for size enhancement should be counselled that this is not the validated indication for the procedure.</p>
            <p>That said, the real benefits of P-Shot are substantial and meaningful for patients with erectile dysfunction. Stronger, more reliable erections, improved sensitivity, greater confidence, and reduced dependency on oral medications represent genuine quality-of-life improvements that many patients describe as transformative. Approaching P-Shot with realistic expectations — focused on erectile function improvement — ensures patients are satisfied with their outcomes. Our specialists provide transparent, evidence-based pre-treatment counselling so every patient fully understands what the procedure can and cannot achieve.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Size FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
