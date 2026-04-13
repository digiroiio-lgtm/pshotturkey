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
  title: 'How P-Shot Works | PRP Therapy Explained – Complete Guide',
  description:
    'How does the P-Shot work? A complete guide to PRP therapy mechanism — blood draw, centrifuge, growth factors, injection, and how it restores erectile function.',
};

const benefits = [
  { icon: 'ShieldCheck', title: 'Uses Your Own Blood', description: 'A small blood draw is all that is needed to prepare your PRP' },
  { icon: 'Activity', title: 'Concentrated Growth Factors', description: 'Centrifuge processing produces 5–10x concentrated platelets' },
  { icon: 'Zap', title: 'Stimulates New Blood Vessels', description: 'VEGF in PRP triggers angiogenesis — new capillary formation' },
  { icon: 'Heart', title: 'Tissue Regeneration', description: 'Growth factors stimulate collagen synthesis and cellular repair' },
  { icon: 'Star', title: 'Nerve Sensitivity Enhancement', description: 'PRP supports nerve fibre regeneration and sensitivity improvement' },
  { icon: 'Award', title: 'Science-Backed', description: 'Mechanism of action is well-established in regenerative medicine' },
];

const faqs = [
  {
    question: 'What is the P-Shot and how does it work?',
    answer: 'The P-Shot (Priapus Shot) is a PRP therapy that uses platelet-rich plasma derived from your own blood to regenerate penile tissue, stimulate new blood vessel formation, and improve erectile function. Blood is drawn, processed in a centrifuge to concentrate platelets, and the resulting PRP is injected into specific areas of the penis where growth factors activate regenerative pathways.',
  },
  {
    question: 'What happens during the P-Shot blood draw?',
    answer: 'A small amount of blood — typically 30–60ml — is drawn from your arm, exactly like a standard blood test. This blood is then processed in a medical centrifuge for approximately 10–15 minutes to separate the blood components and concentrate the platelets in the plasma. The resulting PRP contains 5–10 times the normal concentration of growth factors found in whole blood.',
  },
  {
    question: 'Does the P-Shot injection hurt?',
    answer: 'A topical anaesthetic cream (typically EMLA cream) is applied to the injection area 30–45 minutes before the procedure to numb the surface. Most patients report feeling little more than mild pressure during the injection. The centrifuge processing happens while the anaesthetic is taking effect, making efficient use of your time.',
  },
  {
    question: 'How do growth factors in PRP improve erectile function?',
    answer: 'PRP contains multiple growth factors including VEGF (stimulates new blood vessel formation), PDGF (promotes cell proliferation and healing), IGF-1 (stimulates tissue growth and regeneration), and TGF-β (modulates fibrosis and supports tissue health). When injected into penile tissue, these growth factors trigger angiogenesis (new capillary growth), improve smooth muscle health, support nerve regeneration, and restore the cellular architecture that supports normal erectile function.',
  },
  {
    question: 'How long does the P-Shot procedure take?',
    answer: 'The entire procedure from blood draw to completion takes approximately 45–60 minutes. The blood draw takes 5–10 minutes, PRP processing takes 10–15 minutes in the centrifuge, anaesthetic application takes 30–45 minutes to take effect (this overlaps with processing time), and the actual injection phase takes 5–10 minutes. You are typically discharged within an hour of arriving.',
  },
];

export default function HowPShotWorksPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('How P-Shot Works', 'Complete guide to the P-Shot mechanism — PRP processing, growth factors, and how it restores erectile function.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="How the P-Shot Works – PRP Therapy Explained"
        subtitle="A step-by-step explanation of exactly how the P-Shot (Priapus Shot) works — from blood draw to growth factor activation and tissue regeneration."
      />
      <BenefitsSection benefits={benefits} heading="The P-Shot Mechanism Explained" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">The P-Shot Mechanism: From Blood Draw to Results</h2>
          <div className="text-slate-600 space-y-4">
            <p>The P-Shot process begins with a simple blood draw — approximately 30–60ml from your arm, which is less than a standard blood donation. This blood is immediately placed into sterile tubes and loaded into a medical centrifuge, which spins at precisely calibrated speeds to separate the blood into its components: red blood cells (heaviest, sink to the bottom), plasma (lightest, rises to the top), and platelets concentrated in a middle layer called the &quot;buffy coat.&quot; The platelet-rich plasma layer is carefully extracted and may be further concentrated depending on the protocol. The result is a golden-coloured fluid containing 5–10 times the normal concentration of platelets and the growth factors they contain.</p>
            <p>While the blood is being processed, topical anaesthetic cream is applied to the penis and left for 30–45 minutes to achieve full surface anaesthesia. The PRP is then injected into specific anatomical locations — primarily the corpus cavernosum (the spongy erectile tissue that fills with blood during erection) and the glans — using fine needles. These injection sites are chosen to deliver growth factors to the tissue with the greatest regenerative potential and the highest concentration of smooth muscle cells and vascular structures. The VEGF in PRP immediately begins signalling to endothelial cells to initiate angiogenesis; PDGF and IGF-1 promote smooth muscle cell regeneration; TGF-β modulates the tissue remodelling response.</p>
            <p>Over the subsequent 8–12 weeks, the growth factors stimulate a cascade of regenerative activity that produces structural changes in penile tissue. New capillaries grow into previously ischaemic areas, smooth muscle health improves (allowing more effective engorgement during arousal), collagen quality in the tunica albuginea is enhanced, and nerve fibres regenerate — contributing to improved sensitivity. This is why P-Shot results develop gradually rather than immediately: the treatment initiates biological processes that take weeks to reach their full structural effect. The result is improved erectile function arising from genuine tissue regeneration — not a temporary pharmacological effect.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="How P-Shot Works FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
