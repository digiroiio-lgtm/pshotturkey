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
  title: 'Who is a Good Candidate for P-Shot? | Eligibility Guide 2026',
  description:
    'Who is a good candidate for P-Shot treatment? Ideal candidates, contraindications, and how to check your eligibility for PRP therapy for ED.',
};

const benefits = [
  { icon: 'Activity', title: 'Mild to Moderate ED', description: 'P-Shot is highly effective for mild to moderate erectile dysfunction' },
  { icon: 'ShieldCheck', title: 'Peyronie\'s Disease', description: 'PRP can help reduce plaque and improve curvature in Peyronie\'s disease' },
  { icon: 'Heart', title: 'Reduced Sensitivity', description: 'Men with decreased penile sensitivity are strong P-Shot candidates' },
  { icon: 'Star', title: 'Natural Enhancement Seekers', description: 'Men seeking improvement without surgery or long-term medication' },
  { icon: 'Zap', title: 'Failed Oral Medications', description: 'P-Shot offers a new pathway for men who have not responded to PDE5 inhibitors' },
  { icon: 'Award', title: 'Overall Good Health', description: 'Best results in men without severe vascular or haematological conditions' },
];

const faqs = [
  {
    question: 'Who is the ideal P-Shot candidate?',
    answer: 'The ideal P-Shot candidate is a man experiencing mild to moderate erectile dysfunction who is in generally good health. This includes men who have not responded adequately to oral PDE5 inhibitors (Viagra, Cialis), men who prefer a drug-free approach, men with reduced penile sensitivity, and men with early-stage Peyronie\'s disease. Men with vasculogenic ED (ED caused by poor blood flow) tend to respond particularly well.',
  },
  {
    question: 'Can men with diabetes have P-Shot?',
    answer: 'Yes, men with well-controlled diabetes can be good P-Shot candidates, though results may be more modest than in men without diabetes. Diabetic neuropathy and vascular disease can limit the tissue\'s ability to respond fully to PRP. Men with poorly controlled diabetes or significant diabetic complications may be better served by a combination protocol including shockwave therapy.',
  },
  {
    question: 'Is P-Shot suitable for men with severe ED?',
    answer: 'P-Shot can be attempted in men with severe ED, but realistic expectations are important. Men with severe vasculogenic ED — particularly those with significant arterial disease or a history of pelvic surgery or radiation — may see more limited results. For these patients, combination therapy (P-Shot plus shockwave) often provides the best chance of meaningful improvement.',
  },
  {
    question: 'Who should NOT have P-Shot?',
    answer: 'Contraindications include active blood cancers (leukaemia, lymphoma, myeloma), platelet dysfunction disorders, patients on certain anticoagulant therapies (discuss with our medical team), active genital infection, and certain clotting disorders. Men with metastatic cancer are generally excluded from PRP treatments. A full medical assessment determines eligibility.',
  },
  {
    question: 'How do I find out if I am a good candidate for P-Shot?',
    answer: 'The easiest first step is to book a free WhatsApp consultation with our team. We will ask you some questions about your medical history, current health status, and ED symptoms. If appropriate, we will then recommend the most suitable treatment protocol. There is no obligation and the consultation is completely confidential.',
  },
];

export default function WhoIsGoodCandidatePShotPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot Candidacy Guide', 'Guide to who is a good candidate for P-Shot PRP treatment for erectile dysfunction.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="Who is a Good Candidate for the P-Shot?"
        subtitle="Are you a good candidate for P-Shot PRP treatment? This guide covers ideal patient profiles, contraindications, and how to determine your eligibility."
      />
      <BenefitsSection benefits={benefits} heading="Ideal P-Shot Patient Profiles" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Ideal P-Shot Candidates: What the Evidence Shows</h2>
          <div className="text-slate-600 space-y-4">
            <p>P-Shot PRP therapy produces its best results in men who have mild to moderate erectile dysfunction with a vascular or mixed (vascular plus psychological) component. Men in this category have sufficient residual penile vascular health to respond to the regenerative stimulus of PRP, and the biological changes induced by growth factors — improved angiogenesis, collagen synthesis, nerve regeneration — are able to translate into meaningful functional improvements. Studies consistently show that this patient group achieves the highest response rates, with 75–80% reporting significant improvement in erectile quality and function scores.</p>
            <p>Men who have not responded to oral PDE5 inhibitors (Viagra, Cialis, Levitra) represent an important candidate group. Oral medications work by enhancing the effect of nitric oxide on smooth muscle relaxation in penile blood vessels — they depend on a minimum level of vascular function to work. When vascular damage is too significant for oral medications to be effective, P-Shot offers a different pathway — directly stimulating vascular regeneration rather than amplifying a signal through damaged vessels. Clinical evidence suggests that some men who were oral medication non-responders experience meaningful improvement following PRP therapy, particularly when combined with shockwave.</p>
            <p>Men with Peyronie&apos;s disease — a condition characterised by fibrous plaque in the penis causing curvature and sometimes ED — are also strong P-Shot candidates. The anti-fibrotic properties of PRP growth factors, particularly TGF-β modulation, can contribute to plaque softening and may reduce penile curvature in early-to-moderate disease. Men with severe Peyronie&apos;s disease or pronounced structural deformity may ultimately require surgical intervention, but PRP is a reasonable non-surgical first-line option. A thorough consultation with our urologists will determine whether P-Shot is the right choice for your specific situation.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Candidacy FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
