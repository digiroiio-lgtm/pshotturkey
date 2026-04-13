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
  title: 'PRP vs Fillers for ED | P-Shot vs Filler Injection Comparison',
  description:
    'PRP vs fillers for erectile dysfunction — comparing the P-Shot (PRP) with penile filler injections. Safety, effectiveness, and which is the better choice.',
};

const benefits = [
  { icon: 'ShieldCheck', title: 'Autologous PRP (Safer)', description: 'PRP uses your own blood — no foreign substances, no rejection risk' },
  { icon: 'Activity', title: 'Fillers are Foreign Substance', description: 'Hyaluronic acid or other fillers are synthetic materials injected into penile tissue' },
  { icon: 'Award', title: 'PRP Treats Root Cause', description: 'PRP stimulates vascular regeneration to address the cause of ED' },
  { icon: 'Star', title: 'Fillers are Cosmetic Only', description: 'Penile fillers add volume but do not improve erectile function' },
  { icon: 'Heart', title: 'PRP Has Clinical Evidence', description: 'PRP for ED is supported by peer-reviewed clinical research' },
  { icon: 'Zap', title: 'Expert Guidance', description: 'Our specialists help you choose the most appropriate treatment' },
];

const faqs = [
  {
    question: 'What is the difference between PRP and fillers for ED?',
    answer: 'PRP (P-Shot) uses your own platelet-rich plasma to stimulate tissue regeneration and improve erectile function. Penile fillers use synthetic substances (typically hyaluronic acid) injected into the penis to temporarily add volume or girth. These are fundamentally different treatments — PRP targets erectile dysfunction while fillers are primarily cosmetic and do not improve erection quality.',
  },
  {
    question: 'Which is safer — PRP or penile fillers?',
    answer: 'PRP is generally considered the safer option for two key reasons: it uses your own blood (eliminating allergy and rejection risks), and it is injected into deeper vascular tissue where it acts biologically. Penile fillers carry additional risks including migration of filler material, granuloma formation, vascular occlusion (a serious complication), and the need for eventual removal. The safety risk profile of fillers is meaningfully higher than PRP.',
  },
  {
    question: 'Will PRP or fillers improve my erectile dysfunction?',
    answer: 'PRP (P-Shot) is designed to improve erectile function and has clinical evidence supporting its use for ED. Penile fillers are not an ED treatment — they do not improve blood flow, nerve function, or erectile quality. A man with ED who receives fillers will still have ED. Patients seeking improvement in erectile function should choose PRP, not fillers.',
  },
  {
    question: 'Are penile fillers permanent?',
    answer: 'Most penile fillers use hyaluronic acid, which is temporary and gradually reabsorbed by the body over 12–18 months. Some patients have received permanent or semi-permanent fillers, which carry a substantially higher risk of complications and are much more difficult to reverse if problems occur. PShotTurkey does not offer penile filler treatments.',
  },
  {
    question: 'Can I have both PRP and fillers?',
    answer: 'Technically these could be performed separately at different timepoints, but PShotTurkey does not recommend or offer penile filler treatments. Patients interested in improving erectile function are best served by evidence-based regenerative treatments — P-Shot PRP therapy and/or shockwave therapy — rather than cosmetic filler procedures.',
  },
];

export default function PRPVsFillersForEDPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('PRP vs Fillers for ED', 'Clinical comparison of PRP (P-Shot) and penile filler injections for erectile dysfunction.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="PRP vs Fillers for ED – A Clear Comparison"
        subtitle="Confused between PRP (P-Shot) and filler injections for ED? A clear clinical comparison of both approaches — covering mechanism, safety, and long-term outcomes."
      />
      <BenefitsSection benefits={benefits} heading="Why PRP is the Superior Choice" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">PRP vs Fillers: The Key Differences Explained</h2>
          <div className="text-slate-600 space-y-4">
            <p>PRP therapy (the P-Shot) and penile filler injections are both administered via injection, but they are fundamentally different treatments with very different goals, mechanisms, and safety profiles. PRP uses platelet-rich plasma — a biological product derived from your own blood — to deliver concentrated growth factors directly to penile tissue. These growth factors stimulate angiogenesis, collagen synthesis, and nerve regeneration, addressing the vascular and tissue causes of erectile dysfunction. Penile fillers, by contrast, typically use hyaluronic acid or similar substances injected into the subcutaneous tissue to temporarily increase penile girth or volume. They do not affect erectile function in any way.</p>
            <p>The safety comparison between PRP and penile fillers is important for patients to understand. PRP is autologous — because it is derived from your own body, allergic reactions and immune rejection are essentially impossible. The most serious complications of PRP (infection, haematoma) are rare and manageable. Penile fillers carry more significant risks: migration of filler material to unintended locations, granuloma (inflammatory nodule) formation, fibrosis of penile tissue, and, most seriously, vascular occlusion — where filler material obstructs blood flow, potentially causing tissue damage. The risk-benefit profile of fillers in the penile region is meaningfully less favourable than PRP.</p>
            <p>Patients are sometimes confused because both procedures involve penile injections, and some clinics market fillers as an &quot;enhancement&quot; alongside ED treatments. It is important to be clear: penile fillers do not treat erectile dysfunction. A man who cannot achieve or maintain adequate erections will still have the same problem after fillers. If your goal is to improve erectile function, restore confidence in sexual performance, or reduce reliance on oral medications, the P-Shot is the appropriate evidence-based treatment. Our specialists are always transparent about what each treatment can and cannot achieve.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="PRP vs Fillers FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
