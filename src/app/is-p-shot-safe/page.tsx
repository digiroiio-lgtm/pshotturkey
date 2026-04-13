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
  title: 'Is P-Shot Safe? | P-Shot Safety Profile & Clinical Evidence',
  description:
    'Is the P-Shot safe? Comprehensive guide to P-Shot safety — autologous PRP, clinical evidence, side effects, and what to look for in a provider.',
};

const benefits = [
  { icon: 'ShieldCheck', title: 'Uses Own Blood (Autologous)', description: 'PRP is derived from your own blood — no foreign substances' },
  { icon: 'Award', title: 'Excellent Safety Profile', description: 'Autologous PRP has a 30-year track record across many medical specialties' },
  { icon: 'Activity', title: 'Minimal Side Effects', description: 'Common side effects are mild, temporary, and self-resolving' },
  { icon: 'Clock', title: '30-Year PRP Track Record', description: 'PRP has been used safely in orthopaedics and surgery for decades' },
  { icon: 'Star', title: 'Sterile Technique', description: 'All procedures performed under strict sterile clinical conditions' },
  { icon: 'Heart', title: 'Thorough Pre-Screening', description: 'Comprehensive health assessment before any treatment is performed' },
];

const faqs = [
  {
    question: 'Is the P-Shot safe?',
    answer: 'Yes. The P-Shot has an excellent safety profile because it uses your own blood (autologous PRP), eliminating the risk of allergic reactions or immune rejection. Serious adverse events are extremely rare when the procedure is performed by a qualified physician using sterile technique. PRP therapy has been used safely across orthopaedics, dentistry, and sports medicine for over 30 years.',
  },
  {
    question: 'What are the most common P-Shot side effects?',
    answer: 'The most common side effects are mild swelling, bruising, or temporary discomfort at the injection site. These typically resolve within 24–48 hours. Some patients experience temporary increased sensitivity, which generally normalises within a few days. Infection is theoretically possible but extremely rare with proper sterile technique.',
  },
  {
    question: 'Can I have an allergic reaction to the P-Shot?',
    answer: 'Because the PRP is derived from your own blood, the risk of an allergic reaction is virtually zero. The only substances used in the procedure are your own platelets and growth factors, a local anaesthetic cream, and sterile saline for processing. Allergy to the local anaesthetic is theoretically possible but very uncommon.',
  },
  {
    question: 'Who should not have the P-Shot?',
    answer: 'Contraindications to P-Shot include active blood cancers (leukaemia, lymphoma), platelet dysfunction disorders, patients on anticoagulant therapy (depending on type), active infection at the injection site, and certain clotting disorders. A full medical assessment is conducted before treatment to ensure it is safe for each individual patient.',
  },
  {
    question: 'How do I ensure I am getting a safe P-Shot?',
    answer: 'Choose a clinic with JCI accreditation or equivalent, ensure the procedure is performed by a board-certified urologist or andrologist, confirm the clinic uses validated PRP processing equipment, and ensure a full medical consultation is conducted before treatment. PShotTurkey&apos;s partner clinics meet all of these criteria.',
  },
];

export default function IsPShotSafePage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot Safety', 'Evidence-based guide to P-Shot safety, side effects, and clinical evidence.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="Is the P-Shot Safe? Complete Safety Guide"
        subtitle="An evidence-based guide to P-Shot safety. Autologous PRP, clinical data, side effects, and who should and should not have the treatment."
      />
      <BenefitsSection benefits={benefits} heading="P-Shot Safety at a Glance" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">P-Shot Safety: The Clinical Evidence</h2>
          <div className="text-slate-600 space-y-4">
            <p>The P-Shot is among the safest procedures in regenerative medicine, primarily because it uses autologous PRP — blood drawn from your own body, processed to concentrate platelets, and reinjected. Because no foreign substances are introduced into the body, the risks of allergic reaction, immune rejection, or transmission of disease are eliminated. The autologous nature of PRP is also why it has found applications across numerous medical fields, including orthopaedics, sports medicine, ophthalmology, and dental surgery, where it has been used safely for over 30 years.</p>
            <p>Clinical evidence on P-Shot safety in the urological setting is reassuring. Published studies and case series consistently report a favourable side effect profile. The most commonly reported effects are transient swelling and bruising at the injection site, which resolve within 24–48 hours without intervention. More significant complications, such as infection or haematoma, are exceptionally rare when procedures are performed by qualified physicians under sterile conditions using validated protocols. No serious long-term adverse effects have been documented in the peer-reviewed literature.</p>
            <p>A critical factor in ensuring P-Shot safety is the competence of the treating physician and the quality of the clinical setting. The procedure should be performed by a board-certified urologist or andrologist with specific training in PRP therapy, in a JCI-accredited or equivalently credentialled facility. PShotTurkey&apos;s partner clinics undergo rigorous vetting to ensure every aspect of the treatment — from PRP processing to post-procedure care — meets the highest clinical standards. All patients undergo a thorough pre-treatment assessment to identify any contraindications before proceeding.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Safety FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">More Safety &amp; Results Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { href: '/p-shot-side-effects', label: 'P-Shot Side Effects' },
              { href: '/p-shot-before-after', label: 'Before & After Results' },
              { href: '/p-shot-turkey-reviews', label: 'Patient Reviews' },
              { href: '/p-shot-success-rate', label: 'P-Shot Success Rate' },
              { href: '/who-is-good-candidate-p-shot', label: 'Am I a Candidate?' },
              { href: '/p-shot-cost-turkey', label: 'View Pricing' },
            ].map(({ href, label }) => (
              <a key={href} href={href} className="block p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-sm transition-all text-slate-700 font-medium text-sm text-center">
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
