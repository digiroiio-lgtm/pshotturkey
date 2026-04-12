import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowItWorks from '@/components/HowItWorks';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import TrustSection from '@/components/TrustSection';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import { organizationSchema, localBusinessSchema, getFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'P-Shot Turkey | PRP for Erectile Dysfunction',
  description:
    'Get P-Shot (PRP) treatment for erectile dysfunction in Turkey from £240. Expert specialists, JCI-accredited clinics. Free consultation available.',
};

const benefits = [
  { icon: 'ShieldCheck', title: 'No Surgery Required', description: 'Minimally invasive PRP procedure with no general anesthesia' },
  { icon: 'Clock', title: 'Long-Lasting Results', description: 'Most patients see improvements lasting 12-18 months' },
  { icon: 'Award', title: 'Expert Medical Team', description: 'Treated by JCI-accredited specialists with years of experience' },
  { icon: 'TrendingDown', title: 'Affordable Pricing', description: 'Save up to 70% compared to UK and European clinics' },
  { icon: 'Zap', title: 'Quick Procedure', description: 'The entire treatment takes just 45-60 minutes' },
  { icon: 'Activity', title: 'Fast Recovery', description: 'Return to normal activities within 24 hours' },
];

const faqs = [
  {
    question: 'What is the P-Shot?',
    answer: 'The P-Shot (Priapus Shot) is a non-surgical procedure that uses your own platelet-rich plasma (PRP) to improve erectile function, increase sensitivity, and enhance performance. It stimulates tissue regeneration and improved blood flow in the penile tissue.',
  },
  {
    question: 'Is the P-Shot painful?',
    answer: 'A topical anesthetic is applied before the procedure, making it virtually painless. Most patients report only mild discomfort during the injection, which passes quickly.',
  },
  {
    question: 'How long do P-Shot results last?',
    answer: 'Results typically last 12-18 months, with many patients experiencing improvements for up to 2 years. Lifestyle factors and overall health influence the duration of results.',
  },
  {
    question: 'How much does P-Shot cost in Turkey?',
    answer: 'P-Shot treatment in Turkey starts from £240 (€270/$300), compared to £1,500-£3,000 in the UK. Even including travel, most patients save thousands of pounds.',
  },
  {
    question: 'When will I see results?',
    answer: 'Most patients notice improvements within 2-4 weeks, with full results typically visible at 3 months as the growth factors stimulate tissue regeneration.',
  },
  {
    question: 'Is it safe to travel to Turkey for medical treatment?',
    answer: 'Turkey is a world leader in medical tourism with JCI-accredited hospitals and internationally trained doctors. Our partner clinics meet the highest international standards of safety and care.',
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schemas={[organizationSchema, localBusinessSchema, getFAQSchema(faqs)]} />
      <HeroSection
        title="P-Shot Treatment in Turkey – Restore Your Confidence"
        subtitle="World-class platelet-rich plasma (PRP) therapy for erectile dysfunction at a fraction of UK costs. JCI-accredited clinics, expert specialists, proven results."
      />
      <BenefitsSection benefits={benefits} />
      <HowItWorks />
      <PricingSection />
      <FAQSection faqs={faqs} />
      <CTASection />
      <TrustSection />
      <LeadForm />
    </>
  );
}
