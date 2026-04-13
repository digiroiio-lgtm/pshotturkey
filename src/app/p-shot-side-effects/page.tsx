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
  title: 'P-Shot Side Effects | Complete Guide to Risks & What to Expect',
  description:
    'P-Shot side effects guide — what to expect, common vs rare side effects, and how they are managed. Complete clinical overview.',
};

const benefits = [
  { icon: 'ShieldCheck', title: 'Minimal Common Side Effects', description: 'Most side effects are mild and resolve within 24–48 hours' },
  { icon: 'Award', title: 'Rare Serious Complications', description: 'Serious adverse events are extremely uncommon with proper technique' },
  { icon: 'Activity', title: 'Autologous = No Allergy Risk', description: 'Using your own blood eliminates the risk of allergic reactions' },
  { icon: 'Star', title: 'Thorough Pre-Screening', description: 'Comprehensive health assessment identifies any contraindications' },
  { icon: 'Heart', title: 'Post-Procedure Support', description: 'Immediate clinical support if any unexpected symptoms arise' },
  { icon: 'Clock', title: '12-Month Aftercare', description: 'Full year of follow-up to monitor your progress and wellbeing' },
];

const faqs = [
  {
    question: 'What are the most common P-Shot side effects?',
    answer: 'The most common side effects are mild and temporary: bruising at the injection site (resolves in 3–5 days), swelling or firmness around the injection points (resolves in 24–72 hours), temporary sensitivity changes (heightened or reduced, normalises within days), and mild discomfort during the first 24 hours. These are expected responses to any injection procedure and do not indicate a problem.',
  },
  {
    question: 'Are there any serious P-Shot risks?',
    answer: 'Serious complications from P-Shot are rare. Theoretically possible but uncommon risks include infection (mitigated by strict sterile technique), haematoma (a localised blood collection), prolonged swelling, and, in very rare cases, nodule formation at the injection site. These risks are minimised by having the procedure performed by a qualified urologist in an accredited facility.',
  },
  {
    question: 'Can P-Shot cause permanent damage?',
    answer: 'There are no documented cases of permanent damage from correctly performed P-Shot treatment in the peer-reviewed literature. The procedure uses your own blood, is performed without surgery, and does not involve any synthetic materials. When performed by a board-certified urologist using proper technique, the risk of any lasting harm is exceptionally low.',
  },
  {
    question: 'Will P-Shot make my ED worse?',
    answer: 'P-Shot is not associated with worsening erectile dysfunction. In the very small number of cases where patients do not respond to treatment, they return to their pre-treatment baseline rather than experiencing any deterioration. The regenerative nature of PRP means it supports, rather than disrupts, existing tissue function.',
  },
  {
    question: 'How should I manage P-Shot side effects at home?',
    answer: 'For mild bruising and swelling: avoid strenuous physical activity for 24 hours, avoid sexual activity for 48 hours, apply cold compresses intermittently in the first 12 hours if comfortable. Avoid aspirin or anti-inflammatory medications for 48 hours post-procedure as these can affect platelet function. Contact your coordinator immediately if you experience severe pain, significant swelling, fever, or any symptoms that concern you.',
  },
];

export default function PShotSideEffectsPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot Side Effects', 'Complete clinical guide to P-Shot side effects, risks, and how they are managed.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Side Effects – Complete Clinical Guide"
        subtitle="What are the real side effects of the P-Shot? Honest clinical guide covering common side effects, rare risks, and how PShotTurkey manages every complication."
      />
      <BenefitsSection benefits={benefits} heading="P-Shot Safety & Side Effect Management" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Understanding P-Shot Side Effects</h2>
          <div className="text-slate-600 space-y-4">
            <p>The P-Shot has one of the most favourable side effect profiles of any ED treatment, primarily because it uses your own blood. Autologous PRP eliminates the risks associated with foreign substances — no allergic reactions, no immune rejection, and no transmission of disease. The most common side effects — mild bruising, localised swelling, and temporary sensitivity changes at the injection site — are typical of any minimally invasive injection procedure and resolve spontaneously within a few days without any specific treatment.</p>
            <p>More significant complications are rare but theoretically possible. Infection is the most important risk of any injection procedure, and it is managed through strict sterile technique, clinical-grade skin preparation, and the use of sterile single-use equipment. Haematoma (a localised collection of blood) can occur if a small blood vessel is inadvertently punctured during injection — this is self-limiting in most cases and resolves within 1–2 weeks. Nodule formation at the injection site has been reported in a small number of cases and typically resolves spontaneously over several weeks. Our clinicians are experienced in recognising and managing all post-procedure events.</p>
            <p>The most effective way to minimise P-Shot side effects is to choose the right provider. A board-certified urologist performing the procedure in a JCI-accredited facility, using validated PRP processing equipment and proper sterile technique, reduces the risk of complications to the lowest achievable level. PShotTurkey&apos;s partner clinics operate to these exacting standards, and all patients receive detailed written aftercare instructions and 12 months of follow-up support to ensure any unexpected symptoms are identified and managed promptly.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Side Effects FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
