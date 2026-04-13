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
  title: 'PRP for ED | Platelet-Rich Plasma Therapy for Erectile Dysfunction',
  description:
    'PRP therapy for erectile dysfunction in Turkey. The P-Shot uses your own platelet-rich plasma to restore natural erectile function. From £350. Free consultation.',
};

const benefits = [
  { icon: 'ShieldCheck', title: 'Autologous Treatment', description: 'Uses your own blood — no synthetic drugs or foreign substances' },
  { icon: 'Activity', title: 'Addresses Root Causes', description: 'Stimulates tissue regeneration and vascular improvement' },
  { icon: 'Award', title: 'Clinically Proven', description: 'Supported by growing body of peer-reviewed clinical evidence' },
  { icon: 'Clock', title: 'Long-Lasting', description: 'Results typically persist for 12-18 months per treatment' },
  { icon: 'Zap', title: 'Enhanced Sensitivity', description: 'Many patients report improved sensitivity alongside stronger erections' },
  { icon: 'Heart', title: 'Confidence Boost', description: 'Restored function brings meaningful psychological benefits' },
];

const faqs = [
  {
    question: 'How does PRP work for erectile dysfunction?',
    answer: 'PRP contains concentrated growth factors that, when injected into penile tissue, stimulate the formation of new blood vessels (angiogenesis), improve nerve sensitivity, and promote tissue regeneration. This improves the vascular and structural foundations of healthy erections.',
  },
  {
    question: 'What does the PRP preparation process involve?',
    answer: 'A small blood sample is drawn and placed in a centrifuge that separates the platelet-rich plasma from other blood components. This concentrated PRP contains 5-10 times the normal platelet concentration and is then injected into the treatment area.',
  },
  {
    question: 'Is PRP the same as stem cell therapy?',
    answer: 'No. PRP uses the growth factors found in your blood\'s platelets, while stem cell therapy uses undifferentiated cells. Both aim to promote regeneration, but PRP is better established, more affordable, and has a longer safety track record.',
  },
  {
    question: 'Can PRP help if Viagra does not work for me?',
    answer: 'PRP works through a fundamentally different mechanism to PDE5 inhibitors like Viagra. Clinical evidence suggests PRP can help men who have stopped responding to oral medications, particularly those with vasculogenic ED.',
  },
  {
    question: 'How many PRP treatments will I need for ED?',
    answer: 'Many patients achieve meaningful results from a single session. A course of 2-3 treatments, spaced 4-6 weeks apart, is recommended for optimal outcomes. Our specialists will personalise your treatment plan.',
  },
];

export default function PRPForEDPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('PRP Therapy for Erectile Dysfunction', 'Platelet-rich plasma (PRP) treatment for erectile dysfunction in Turkey — stimulating natural tissue regeneration and vascular improvement.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="PRP Therapy for Erectile Dysfunction in Turkey"
        subtitle="Harness the healing power of your own blood. Platelet-rich plasma (PRP) therapy stimulates natural restoration of erectile function — drug-free and long-lasting."
      />
      <BenefitsSection benefits={benefits} heading="Benefits of PRP for ED" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">The Science Behind PRP for ED</h2>
          <div className="text-slate-600 space-y-4">
            <p>Platelet-rich plasma (PRP) therapy has been used in medicine for over three decades, initially in wound healing and orthopaedics before being adapted for sexual health applications. The science is straightforward: platelets are small blood cells that contain growth factors essential for tissue repair and regeneration.</p>
            <p>When PRP is injected into the erectile tissue of the penis, these growth factors trigger angiogenesis (new blood vessel formation), improve the function of existing blood vessels, stimulate the production of collagen and elastin, and enhance nerve sensitivity. The cumulative effect is improved blood flow, stronger and more reliable erections, and heightened sensitivity.</p>
            <p>A growing body of peer-reviewed research supports PRP&apos;s efficacy for erectile dysfunction. Multiple clinical studies have demonstrated significant improvements in IIEF (International Index of Erectile Function) scores following PRP treatment, with results that persist for 12 months or more. PShotTurkey stays at the forefront of PRP research to ensure our patients receive the most evidence-based treatment protocols.</p>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="PRP for ED FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
