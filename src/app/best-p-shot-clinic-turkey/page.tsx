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
  title: 'Best P-Shot Clinic Turkey | Top P-Shot Providers & Reviews',
  description:
    'Find the best P-Shot providers in Turkey. Vetted clinics, board-certified urologists, and real patient reviews. PShotTurkey connects you with Turkey\'s top specialists.',
};

const benefits = [
  { icon: 'Award', title: 'Strictly Vetted Clinics', description: 'Every partner clinic passes our rigorous 8-point assessment process' },
  { icon: 'Star', title: 'Verified Patient Reviews', description: 'Real feedback from international patients who have been treated' },
  { icon: 'ShieldCheck', title: 'JCI Accreditation', description: 'All partner clinics hold top international healthcare certifications' },
  { icon: 'Users', title: 'Thousands Treated', description: 'Our specialists have treated patients from over 40 countries' },
  { icon: 'Globe', title: 'Multiple Locations', description: 'Istanbul, Antalya, and Izmir — choose the city that suits you best' },
  { icon: 'Heart', title: 'Independent Advice', description: 'We recommend the right provider for you — not the most profitable for us' },
];

const faqs = [
  {
    question: 'How does PShotTurkey select its partner clinics?',
    answer: 'Every clinic we partner with must pass our 8-point vetting process: Ministry of Health registration, JCI accreditation or equivalent, documented P-Shot and PRP experience, qualified board-certified urologists, sterile procedure protocols, English-language patient support, transparent pricing, and a strong patient satisfaction track record. We audit clinics regularly and collect feedback from every patient.',
  },
  {
    question: 'What do patients say about P-Shot treatment in Turkey?',
    answer: 'The overwhelming majority of our patients report satisfaction with both the treatment outcomes and the overall experience. Common feedback themes include professional and reassuring clinical staff, smooth logistics, significantly better value than home-country alternatives, and results that met or exceeded expectations. We are happy to share anonymised patient testimonials on request.',
  },
  {
    question: 'Are the doctors at Turkish P-Shot clinics well-qualified?',
    answer: 'Yes. Our partner specialists are board-certified urologists, many with postgraduate training at European universities. They are members of Turkish and international urology associations and have specific training and experience in PRP and P-Shot therapy. We do not refer patients to clinics where procedures are performed by general practitioners or non-specialist staff.',
  },
  {
    question: 'Can I speak to a previous patient before booking?',
    answer: 'We respect the privacy of all our patients, but with their permission, some of our former patients are willing to speak with prospective patients. Ask our team and we will try to connect you with a suitable patient ambassador who has had a similar treatment to the one you are considering.',
  },
  {
    question: 'What if I am not happy with my results?',
    answer: 'Patient satisfaction is our priority. We have a clear patient care protocol for managing concerns or suboptimal outcomes. Our medical team will assess your situation and work with you to determine the best path forward, which may include a review appointment, additional treatment, or other recommendations.',
  },
];

export default function BestPShotClinicTurkeyPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('Best P-Shot Clinic Turkey', 'How to find the best P-Shot clinics and providers in Turkey — vetted specialists, patient reviews, and quality assurance.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="Best P-Shot Clinics in Turkey – Vetted Providers"
        subtitle="PShotTurkey connects you with Turkey's top P-Shot specialists. Every clinic is rigorously vetted for qualifications, accreditation, and patient outcomes."
      />
      <BenefitsSection benefits={benefits} heading="The PShotTurkey Quality Standard" />
      <HowItWorks />
      <FAQSection faqs={faqs} heading="Provider Quality FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
