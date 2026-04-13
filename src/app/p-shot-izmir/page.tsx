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
  title: 'P-Shot Izmir | PRP ED Treatment in Izmir, Turkey',
  description:
    'P-Shot treatment in Izmir, Turkey. Expert PRP therapy for erectile dysfunction at accredited Izmir clinics. Free consultation. From £350.',
};

const benefits = [
  { icon: 'Award', title: 'Accredited Izmir Clinics', description: 'Ministry of Health certified facilities in the heart of Izmir' },
  { icon: 'ShieldCheck', title: 'Specialist Urologists', description: 'Board-certified doctors with extensive PRP experience' },
  { icon: 'TrendingDown', title: 'Significant Cost Savings', description: 'Save up to 85% compared to UK and European prices' },
  { icon: 'Globe', title: 'Easy to Reach', description: 'Direct flights from major UK and European airports to Izmir Adnan Menderes Airport' },
  { icon: 'Heart', title: 'Full Patient Support', description: 'English-speaking coordinators from enquiry through to aftercare' },
  { icon: 'Zap', title: 'Quick Results', description: 'Improvements typically noticed within 2-4 weeks of treatment' },
];

const faqs = [
  {
    question: 'Are there good P-Shot clinics in Izmir?',
    answer: 'Yes. Izmir is Turkey\'s third-largest city and has a strong medical infrastructure serving both local and international patients. PShotTurkey partners with Izmir\'s top accredited urology clinics, all staffed by board-certified specialists with experience in PRP and P-Shot procedures.',
  },
  {
    question: 'How do I get to Izmir from the UK?',
    answer: 'Izmir Adnan Menderes Airport (ADB) is served by direct flights from London Gatwick and several other UK airports. Flight time is approximately 3.5 hours. PShotTurkey can arrange airport transfers directly to your clinic or hotel.',
  },
  {
    question: 'Can I combine P-Shot treatment with exploring Izmir?',
    answer: 'Absolutely. The P-Shot procedure takes just 45-60 minutes, and you can explore Izmir the same day. We recommend 1-2 days to acclimatise and enjoy the city before your procedure. Izmir offers beautiful coastal scenery, excellent seafood, and historic sites like Ephesus just 80km away.',
  },
  {
    question: 'How does Izmir compare to Istanbul for P-Shot treatment?',
    answer: 'Both cities offer excellent P-Shot treatment at comparable quality and price. Izmir tends to be quieter, less crowded, and easier to navigate than Istanbul. Many patients prefer Izmir for a more relaxed medical trip, especially those who want to combine treatment with coastal relaxation.',
  },
  {
    question: 'What is the cost of P-Shot treatment in Izmir?',
    answer: 'P-Shot treatment in Izmir starts from £350, the same competitive pricing as our Istanbul and Antalya clinics. Combination packages with shockwave therapy are available at additional savings. Contact us for a personalised quote.',
  },
];

export default function PShotIzmirPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot Izmir', 'PRP therapy for erectile dysfunction at top Izmir clinics in Turkey.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Treatment in Izmir, Turkey"
        subtitle="Combine world-class P-Shot PRP therapy with the charm of Izmir — Turkey's beautiful Aegean city. Expert care, competitive prices, and easy direct flights."
      />
      <BenefitsSection benefits={benefits} heading="Why Choose Izmir for P-Shot?" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Izmir: The Aegean Pearl of Turkish Medicine</h2>
          <div className="text-slate-600 space-y-4">
            <p>Izmir is Turkey&apos;s third-largest city, nestled on the Aegean coast with a history stretching back thousands of years. Known for its relaxed lifestyle, vibrant café culture, stunning coastal scenery, and proximity to ancient Ephesus, Izmir is a compelling destination for medical tourists who want to combine excellent healthcare with a memorable travel experience.</p>
            <p>The city&apos;s healthcare sector has grown substantially in recent years, with several modern hospitals and specialist clinics serving both international and domestic patients. Izmir&apos;s medical professionals are typically highly trained, often with postgraduate qualifications from European universities, and are experienced in treating international patients.</p>
            <p>PShotTurkey&apos;s Izmir partner clinics maintain the same rigorous standards as our Istanbul and Antalya facilities. Our patient coordinators in Izmir provide the same end-to-end support — from arranging your airport transfer and clinic appointment to hotel recommendations and sightseeing tips — so your medical trip is seamless and enjoyable.</p>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="Izmir P-Shot FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
