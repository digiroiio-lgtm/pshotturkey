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
  title: 'PRP Injection Turkey | PRP Treatment for Erectile Dysfunction',
  description:
    'PRP injection therapy for erectile dysfunction in Turkey. Expert platelet-rich plasma treatment by board-certified urologists. From £350. Free consultation.',
};

const benefits = [
  { icon: 'Activity', title: 'Natural Treatment', description: 'Platelet-rich plasma uses your own body\'s growth factors — no synthetic drugs' },
  { icon: 'ShieldCheck', title: 'Proven Safety Profile', description: 'Autologous PRP with decades of clinical evidence across medical specialties' },
  { icon: 'Award', title: 'Specialist Practitioners', description: 'PRP injections administered only by board-certified urologists' },
  { icon: 'TrendingDown', title: 'Affordable in Turkey', description: 'PRP injection therapy from £350 — up to 85% less than UK prices' },
  { icon: 'Clock', title: 'Quick Procedure', description: 'The full PRP injection process takes approximately 45-60 minutes' },
  { icon: 'Star', title: 'High Efficacy', description: 'Clinically demonstrated improvements in erectile function and sensitivity' },
];

const faqs = [
  {
    question: 'What is a PRP injection for erectile dysfunction?',
    answer: 'A PRP injection for ED (also called the P-Shot) involves drawing a small amount of your blood, processing it in a centrifuge to concentrate the platelets, and injecting the platelet-rich plasma into specific areas of the penile tissue. The growth factors in PRP stimulate new blood vessel formation and tissue regeneration, improving erectile function.',
  },
  {
    question: 'Is a PRP injection painful?',
    answer: 'Discomfort is minimal. A topical anaesthetic cream is applied to the treatment area before the injection. Most patients describe the sensation as mild pressure rather than pain. Any temporary discomfort resolves within minutes of the procedure ending.',
  },
  {
    question: 'How long does a PRP injection session take?',
    answer: 'The entire session takes approximately 45-60 minutes, including the blood draw, centrifuge processing time (approximately 15 minutes), and the injection itself. There is no recovery room time required — most patients leave the clinic within the hour.',
  },
  {
    question: 'How much does a PRP injection cost in Turkey?',
    answer: 'PRP injection therapy for ED starts from £350 per session in Turkey through PShotTurkey, compared to £1,500–£3,000 in the UK. This represents savings of up to 85% for the identical procedure performed by equally qualified specialists.',
  },
  {
    question: 'How soon after the PRP injection can I have sex?',
    answer: 'Most patients can resume sexual activity within 24-48 hours of treatment. We recommend a 24-hour rest period to allow the injection sites to settle. Full written aftercare instructions are provided after every treatment.',
  },
];

export default function PRPInjectionTurkeyPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('PRP Injection Turkey', 'Platelet-rich plasma injection therapy for erectile dysfunction in Turkey — expert treatment at competitive prices.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="PRP Injection for ED in Turkey – Expert Treatment"
        subtitle="Platelet-rich plasma injection therapy for erectile dysfunction. Expert PRP treatment by board-certified urologists in Turkey, from just £350."
      />
      <BenefitsSection benefits={benefits} heading="Benefits of PRP Injection Therapy" />
      <HowItWorks />
      <FAQSection faqs={faqs} heading="PRP Injection Turkey FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
