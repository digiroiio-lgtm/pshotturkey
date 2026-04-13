import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowItWorks from '@/components/HowItWorks';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import TrustSection from '@/components/TrustSection';
import CTASection from '@/components/CTASection';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getMedicalProcedureSchema, getFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Shockwave Therapy Turkey | LiSWT for Erectile Dysfunction',
  description:
    'Low-intensity shockwave therapy (LiSWT) for erectile dysfunction in Turkey. Clinically proven, drug-free ED treatment. Free consultation. From £350.',
};

const benefits = [
  { icon: 'Zap', title: 'Drug-Free Treatment', description: 'No medications, no injections — acoustic wave technology' },
  { icon: 'Activity', title: 'Stimulates Blood Flow', description: 'Promotes new blood vessel formation for natural erections' },
  { icon: 'Award', title: 'Clinically Evidenced', description: 'Multiple RCTs demonstrate significant IIEF score improvements' },
  { icon: 'ShieldCheck', title: 'Non-Invasive', description: 'No needles, no downtime, comfortable 20-minute sessions' },
  { icon: 'Clock', title: 'Rapid Treatment', description: 'Each session takes just 20-30 minutes' },
  { icon: 'TrendingDown', title: 'Cost-Effective', description: 'Fraction of the cost compared to UK shockwave therapy clinics' },
];

const faqs = [
  {
    question: 'How does shockwave therapy treat erectile dysfunction?',
    answer: 'Low-intensity shockwave therapy (LiSWT) delivers controlled acoustic waves to penile tissue, stimulating the formation of new blood vessels (neovascularisation) and reactivating dormant stem cells. This improves blood flow and can restore natural erectile function in men with vasculogenic ED.',
  },
  {
    question: 'How many shockwave therapy sessions do I need?',
    answer: 'A standard course consists of 6-12 sessions, typically administered over 6-12 weeks. Some protocols use 2 sessions per week. Our specialists will design the optimal treatment schedule for your situation.',
  },
  {
    question: 'Does shockwave therapy hurt?',
    answer: 'Most patients describe the sensation as a mild tingling or tapping — generally well-tolerated without anaesthesia. Any discomfort is temporary and disappears immediately after the session ends.',
  },
  {
    question: 'Can I combine shockwave therapy with the P-Shot?',
    answer: 'Yes, and we often recommend this combination. Shockwave therapy prepares the tissue by stimulating vascular growth, while PRP provides growth factors to accelerate regeneration. The combined approach often produces superior results.',
  },
  {
    question: 'Is shockwave therapy a permanent cure for ED?',
    answer: 'For men with mild to moderate vasculogenic ED, shockwave therapy can produce long-lasting improvements. Some men achieve results lasting 2+ years. Periodic maintenance sessions may extend and optimise results.',
  },
  {
    question: 'Who is not suitable for shockwave therapy?',
    answer: 'Shockwave therapy is not recommended for men with pacemakers, blood clotting disorders, or those on anticoagulants. Men with penile implants or active genital infections should also avoid this treatment. Our doctors will assess suitability during consultation.',
  },
];

export default function ShockwaveTherapyTurkeyPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('Shockwave Therapy Turkey', 'Low-intensity shockwave therapy for erectile dysfunction in Turkey — a drug-free, non-invasive treatment using acoustic wave technology.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="Shockwave Therapy for ED in Turkey"
        subtitle="Low-intensity shockwave therapy (LiSWT) — a drug-free, non-invasive treatment that stimulates new blood vessel formation to restore natural erectile function."
      />
      <BenefitsSection benefits={benefits} heading="Benefits of Shockwave Therapy for ED" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">What the Evidence Says</h2>
          <div className="text-slate-600 space-y-4">
            <p>Low-intensity shockwave therapy is one of the most extensively researched non-pharmaceutical treatments for erectile dysfunction. Multiple randomised controlled trials (RCTs) have demonstrated significant improvements in erectile function scores (IIEF) following LiSWT, particularly in men with vasculogenic ED.</p>
            <p>A landmark meta-analysis published in the Journal of Sexual Medicine analysed data from over 1,000 patients and found that LiSWT produced statistically significant improvements in IIEF scores compared to placebo. The treatment is particularly effective for men who have not responded to PDE5 inhibitors like Viagra, offering a genuine therapeutic option for treatment-resistant ED.</p>
            <p>Turkish urology clinics have been among the early adopters of LiSWT, and our partner specialists have extensive experience administering the treatment. PShotTurkey combines shockwave therapy with P-Shot PRP in a synergistic combination protocol that has produced outstanding results for our patients.</p>
          </div>
        </div>
      </section>
      <PricingSection />
      <FAQSection faqs={faqs} heading="Shockwave Therapy FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
