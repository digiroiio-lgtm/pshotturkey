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
  title: 'P-Shot Clinic Turkey | Best P-Shot Clinics in Turkey 2026',
  description:
    'Find the best P-Shot clinics in Turkey. Board-certified urologists, JCI-accredited facilities, and proven results. Free consultation from PShotTurkey.',
};

const benefits = [
  { icon: 'Award', title: 'JCI-Accredited Facilities', description: 'Our partner clinics hold the highest international healthcare certifications' },
  { icon: 'ShieldCheck', title: 'Board-Certified Urologists', description: 'All procedures performed by qualified sexual health specialists' },
  { icon: 'Star', title: '75-80% Success Rate', description: 'Clinically demonstrated improvements reported by our patients' },
  { icon: 'Globe', title: 'International Patient Support', description: 'Dedicated English-speaking coordinators for every international patient' },
  { icon: 'TrendingDown', title: 'Up to 85% Cost Savings', description: 'World-class care at a fraction of UK and European clinic prices' },
  { icon: 'Clock', title: 'Fast Booking', description: 'Most patients can be seen within 5-7 days of enquiry' },
];

const faqs = [
  {
    question: 'How do I choose the best P-Shot clinic in Turkey?',
    answer: 'Look for clinics with international accreditation (JCI), board-certified urologists with specific P-Shot experience, transparent pricing, English-speaking staff, and a proven track record with international patients. PShotTurkey vets all our partner clinics against these criteria.',
  },
  {
    question: 'Are Turkish P-Shot clinics regulated?',
    answer: 'Yes. Turkish medical clinics are regulated by the Republic of Turkey Ministry of Health. Our partner clinics additionally hold JCI (Joint Commission International) accreditation — the most rigorous international standard in healthcare quality and safety.',
  },
  {
    question: 'Where are the P-Shot clinics located in Turkey?',
    answer: 'PShotTurkey has partner clinics in Istanbul (Şişli and Nişantaşı districts), Antalya, and Izmir. All locations are well-connected to major airports and serve international patients with dedicated support services.',
  },
  {
    question: 'Will I have to wait long to get an appointment?',
    answer: 'Most of our patients are seen within 5-7 working days of their initial enquiry. For urgent cases, we can often arrange treatment within 2-3 days. Simply complete our enquiry form and our team will contact you within 24 hours.',
  },
  {
    question: 'Can I get a free consultation before committing to treatment?',
    answer: 'Yes. PShotTurkey offers a completely free, no-obligation online consultation. During this consultation, our specialist will review your medical history, discuss your goals, and recommend the most appropriate treatment plan for your situation.',
  },
];

export default function PShotClinicTurkeyPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot Clinic Turkey', 'Expert P-Shot PRP treatment at the best clinics in Turkey — JCI-accredited facilities and board-certified urologists.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Clinics in Turkey – World-Class Care"
        subtitle="Access the best P-Shot clinics in Turkey. JCI-accredited facilities, board-certified urologists, and proven results — all at a fraction of UK prices."
      />
      <BenefitsSection benefits={benefits} heading="Why Our Partner Clinics Stand Apart" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Our Clinic Selection Criteria</h2>
          <div className="text-slate-600 space-y-4">
            <p>PShotTurkey only partners with clinics that meet our strict eight-point vetting process. Every clinic in our network must hold current Ministry of Health registration, employ urologists with documented P-Shot experience, maintain sterile procedures compliant with international standards, and provide dedicated English-language support for international patients.</p>
            <p>We regularly audit our partner clinics and collect feedback from every patient we refer. If a clinic fails to meet our standards at any point, we remove them from our network immediately. Your safety and experience is our highest priority.</p>
            <p>Our Istanbul clinics are located in the city&apos;s premier medical districts, within easy reach of five-star hotels and major tourist attractions. Our Antalya and Izmir clinics are similarly positioned to make your medical trip as convenient and enjoyable as possible.</p>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Clinic Turkey FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
