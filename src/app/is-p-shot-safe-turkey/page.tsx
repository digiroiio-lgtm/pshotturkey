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
  title: 'Is P-Shot Safe in Turkey? | P-Shot Safety Guide 2026',
  description:
    'Everything you need to know about P-Shot safety in Turkey. Clinical evidence, accreditation standards, what to look for in a clinic, and risk assessment.',
};

const benefits = [
  { icon: 'ShieldCheck', title: 'Autologous PRP', description: 'Your own blood — zero risk of allergic reaction or immune rejection' },
  { icon: 'Award', title: 'JCI-Accredited Clinics', description: 'Our partner clinics hold the highest international safety certifications' },
  { icon: 'Star', title: 'Experienced Specialists', description: 'Procedures performed only by board-certified urologists' },
  { icon: 'Activity', title: 'Sterile Protocols', description: 'International-standard sterile technique for every procedure' },
  { icon: 'Clock', title: 'Minimal Side Effects', description: 'Mild bruising and swelling are typical — serious complications are rare' },
  { icon: 'Heart', title: 'Thorough Pre-Screening', description: 'Medical assessment ensures you are a suitable candidate before treatment' },
];

const faqs = [
  {
    question: 'Is the P-Shot safe?',
    answer: 'Yes. The P-Shot has an excellent safety profile. Because it uses your own blood (autologous PRP), there is no risk of allergic reaction or rejection. The most common side effects are mild, temporary bruising and swelling at the injection site. Serious complications are rare when the procedure is performed by a qualified specialist using sterile technique.',
  },
  {
    question: 'Is having the P-Shot in Turkey as safe as in the UK?',
    answer: 'When using PShotTurkey\'s partner clinics, yes. Turkey has more JCI-accredited hospitals than any other country in Europe. JCI accreditation is the most rigorous international standard in healthcare — the same standard used to evaluate hospitals worldwide. Our partner clinics all hold this certification or equivalent Ministry of Health approval.',
  },
  {
    question: 'What are the risks of the P-Shot?',
    answer: 'Risks are minimal but include: mild bruising or swelling (resolves within days), temporary discomfort at the injection site, and in very rare cases, minor changes to penile sensitivity. Serious complications such as infection are exceptionally rare when sterile technique is maintained. Our doctors will discuss all risks in detail during your consultation.',
  },
  {
    question: 'Who should NOT have the P-Shot?',
    answer: 'The P-Shot may not be suitable for men with active blood clotting disorders, those taking certain anticoagulant medications, men with active genital infections, or those with certain platelet disorders. A full medical assessment is conducted before every procedure to confirm suitability.',
  },
  {
    question: 'How do I know if a clinic in Turkey is safe to use?',
    answer: 'Look for Ministry of Health certification, JCI accreditation, qualified urologists (not general practitioners), transparent pricing, and a clear aftercare protocol. PShotTurkey vets all our partner clinics against these criteria — we only refer patients to clinics we trust completely.',
  },
  {
    question: 'What happens if something goes wrong after I return home?',
    answer: 'PShotTurkey provides 12 months of aftercare support for every patient. If you experience any concerns after returning home, our medical team is available via WhatsApp, email, and video call. In the very unlikely event of a complication requiring in-person attention, we will guide you through the appropriate steps and liaise with local healthcare providers.',
  },
];

export default function IsPShotSafeTurkeyPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot Safety Turkey', 'P-Shot safety guide for Turkey — clinical evidence, accreditation standards, and what to look for when choosing a clinic.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="Is P-Shot Safe in Turkey? Your Complete Safety Guide"
        subtitle="An honest, evidence-based guide to P-Shot safety in Turkey. What the clinical evidence shows, how Turkish clinics are regulated, and what to look for when choosing a provider."
      />
      <BenefitsSection benefits={benefits} heading="How PShotTurkey Ensures Your Safety" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">P-Shot Safety: The Clinical Evidence</h2>
          <div className="text-slate-600 space-y-4">
            <p>Platelet-rich plasma (PRP) therapy has been used in medicine for over 30 years, with a well-established safety record across orthopaedics, dermatology, and now sexual health. The P-Shot, as an application of PRP technology, benefits from this extensive safety data.</p>
            <p>Multiple clinical studies have assessed the safety of P-Shot therapy specifically. A comprehensive systematic review published in the International Journal of Impotence Research found that PRP therapy for ED demonstrated a favourable safety profile, with no serious adverse events reported across the studies reviewed. Minor side effects — predominantly mild bruising and temporary swelling — were self-limiting and resolved without intervention.</p>
            <p>The autologous nature of PRP therapy (using your own blood) is a key safety advantage. Unlike synthetic medications or foreign substances, your body cannot reject PRP or develop an allergic reaction to it. This makes the P-Shot one of the safest injectable treatments available for erectile dysfunction.</p>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Safety FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
