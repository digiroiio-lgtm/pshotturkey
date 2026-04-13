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
  title: 'Genital PRP Turkey | Genital PRP Treatment Cost & Clinics',
  description:
    'Genital PRP therapy in Turkey. Expert treatment for erectile dysfunction using platelet-rich plasma. Competitive costs, board-certified specialists. Free consultation.',
};

const benefits = [
  { icon: 'Activity', title: 'Your Own Blood', description: 'Autologous PRP — zero risk of allergic reaction or rejection' },
  { icon: 'ShieldCheck', title: 'Clinically Proven', description: 'PRP therapy backed by extensive clinical research worldwide' },
  { icon: 'Award', title: 'Expert Practitioners', description: 'Board-certified urologists with advanced PRP certification' },
  { icon: 'TrendingDown', title: 'Affordable Cost', description: 'Genital PRP in Turkey costs a fraction of UK and European prices' },
  { icon: 'Clock', title: '45-Minute Procedure', description: 'Quick, outpatient treatment with minimal downtime' },
  { icon: 'Star', title: 'High Success Rate', description: '75-80% of patients report significant improvements after treatment' },
];

const faqs = [
  {
    question: 'What is genital PRP therapy?',
    answer: 'Genital PRP therapy (also called the P-Shot or Priapus Shot) uses platelet-rich plasma derived from your own blood to treat erectile dysfunction, improve sexual performance, and enhance sensitivity. The concentrated growth factors in PRP stimulate new blood vessel formation and tissue regeneration in the penile tissue.',
  },
  {
    question: 'How much does genital PRP cost in Turkey?',
    answer: 'Genital PRP therapy in Turkey starts from £350 per session through PShotTurkey — compared to £1,500–£3,000 in the UK. This represents a saving of up to 85% for the same world-class procedure performed by board-certified specialists.',
  },
  {
    question: 'How is genital PRP different from the P-Shot?',
    answer: 'Genital PRP therapy and the P-Shot are the same treatment. "P-Shot" is the branded name (short for Priapus Shot), while "genital PRP" is the generic term for the same procedure. Both use platelet-rich plasma injected into the penile tissue to stimulate regeneration and improve erectile function.',
  },
  {
    question: 'Is genital PRP safe?',
    answer: 'Genital PRP therapy has an excellent safety profile because it uses your own blood. The risk of allergic reaction or immune rejection is minimal. The most common side effects — mild bruising and temporary swelling — resolve within a few days. Serious complications are rare when performed by an experienced specialist in a sterile environment.',
  },
  {
    question: 'How many genital PRP sessions will I need?',
    answer: 'Many patients achieve good results with a single session. For optimal outcomes, especially for more severe ED, a course of 2-3 sessions spaced 4-6 weeks apart is often recommended. Our specialists will advise on the best protocol for your individual situation during your free consultation.',
  },
];

export default function GenitalPRPTurkeyPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('Genital PRP Turkey', 'Genital PRP therapy (P-Shot) for erectile dysfunction in Turkey — using platelet-rich plasma to stimulate regeneration and restore erectile function.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="Genital PRP Turkey – Natural ED Treatment"
        subtitle="Genital PRP therapy uses your own platelet-rich plasma to treat erectile dysfunction naturally. Expert treatment in Turkey at up to 85% less than UK prices."
      />
      <BenefitsSection benefits={benefits} heading="Why Choose Genital PRP Therapy?" />
      <HowItWorks />
      <FAQSection faqs={faqs} heading="Genital PRP Turkey FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
