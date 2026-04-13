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
  title: 'P-Shot Abroad | P-Shot Treatment Overseas – Turkey Guide',
  description:
    'Getting P-Shot treatment abroad? Turkey is the world\'s #1 medical tourism destination for P-Shot — expert care, JCI-accredited clinics, and prices from £350.',
};

const benefits = [
  { icon: 'Globe', title: "World's #1 Medical Tourism Destination", description: 'Turkey leads globally for medical tourism with more JCI-accredited hospitals than any European country' },
  { icon: 'ShieldCheck', title: 'JCI-Accredited Clinics', description: 'The same international gold standard as the best UK and US hospitals' },
  { icon: 'TrendingDown', title: 'Lower Cost Than UK/US/EU', description: 'Save 75–85% on treatment costs compared to Western market pricing' },
  { icon: 'Heart', title: 'Full International Patient Support', description: 'Dedicated English-speaking patient coordinators from enquiry to aftercare' },
  { icon: 'MapPin', title: 'Direct Flights from Major Cities', description: 'Direct connections from London, Manchester, Berlin, Amsterdam, New York, and more' },
  { icon: 'Clock', title: '12-Month Remote Aftercare', description: 'Comprehensive post-treatment support via WhatsApp, email, and video call' },
];

const faqs = [
  {
    question: 'Why is Turkey the best destination for P-Shot abroad?',
    answer: 'Turkey has invested heavily in medical tourism infrastructure over the past two decades, resulting in a healthcare system that combines Western clinical standards with significantly lower costs. Turkey has more JCI-accredited hospitals than any other country in Europe — the same accreditation held by the world\'s leading medical institutions. For P-Shot specifically, Turkey\'s specialist urology clinics have treated tens of thousands of international patients, giving practitioners a depth of experience that few Western providers can match.',
  },
  {
    question: 'Is P-Shot treatment abroad safe?',
    answer: 'P-Shot treatment at PShotTurkey\'s partner clinics is as safe as — and in many respects safer than — treatment at many Western providers. Our partner clinics are JCI-accredited, use board-certified urologists, employ validated PRP processing systems, and operate under the same clinical governance standards as leading UK and US facilities. We have coordinated thousands of international patient treatments without a single serious complication.',
  },
  {
    question: 'How do I arrange P-Shot treatment abroad?',
    answer: 'The process is straightforward. Contact PShotTurkey via WhatsApp for a free online consultation. Our team will assess your suitability, answer all questions, and provide a full cost and logistics overview. Once you confirm your booking, we coordinate your clinic appointment, can recommend accommodation near the clinic, and arrange airport-to-clinic transfers. On the day of treatment, you are met at the clinic, undergo the procedure, and are supported by English-speaking staff throughout.',
  },
  {
    question: 'What happens if I have concerns after returning home?',
    answer: 'All PShotTurkey patients receive 12 months of remote aftercare support included in their treatment package. This covers unlimited WhatsApp messaging, email support, and scheduled video consultations with our clinical team. The vast majority of post-procedure queries are fully resolvable remotely. In the rare event that an in-person assessment is needed, we can coordinate with your local GP or urologist, providing full clinical notes and treatment documentation.',
  },
  {
    question: 'How does P-Shot abroad compare to other countries like Thailand or Mexico?',
    answer: 'Turkey is widely considered the superior choice for European and UK patients due to proximity (2.5–4 hour flights), cultural familiarity, strong English proficiency among medical staff, and a longer track record in advanced urology. While Thailand and Mexico offer competitive prices, the travel time, time zone difference, and less extensive aftercare infrastructure make them less practical for most UK and European patients. For US patients, Mexico is a competitive alternative, though Turkey\'s JCI accreditation density and specialist urology expertise remain differentiating factors.',
  },
];

export default function PShotAbroadPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot Abroad', 'P-Shot PRP treatment abroad — Turkey as the world-leading destination for international patients.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Treatment Abroad – Why Turkey Leads the World"
        subtitle="Considering P-Shot treatment abroad? Turkey's world-class clinics, internationally trained specialists, and prices from £350 make it the clear choice for global patients."
      />
      <BenefitsSection benefits={benefits} heading="Why Choose Turkey for P-Shot Abroad?" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Medical Tourism for P-Shot: Turkey vs Other Destinations</h2>
          <div className="text-slate-600 space-y-4">
            <p>Turkey&apos;s rise as the world&apos;s leading medical tourism destination is not accidental — it is the result of decades of investment in hospital infrastructure, physician training, and international patient services. Today, Turkey hosts more JCI-accredited hospitals than any other country in Europe and attracts over one million medical tourists annually. For men seeking P-Shot treatment abroad, this translates to an unmatched combination of clinical quality, affordable pricing, and logistical accessibility that no other destination can replicate at scale.</p>
            <p>The comparison with other medical tourism destinations is instructive. Thailand offers similar price advantages but requires a 10–12 hour flight for European patients, creates significant jet lag, and involves greater logistical complexity. Mexico is competitive for US patients but less accessible for European visitors and has less established specialist urology infrastructure for PRP therapy. Central European destinations like Hungary or Poland offer geographic proximity but at higher price points that substantially reduce the cost savings. Turkey uniquely combines short flight times (2.5–4 hours from most European cities), experienced specialist urology practices, JCI-accredited facilities, and prices that represent genuine 75–85% savings versus Western markets.</p>
            <p>PShotTurkey exists specifically to remove the barriers that prevent men from accessing high-quality P-Shot treatment abroad. Our patient coordination service manages every aspect of the process — from initial enquiry through to 12-month post-treatment follow-up — so that patients can focus entirely on their health journey rather than administrative logistics. Our English-speaking team is available 7 days a week, and we have extensive experience supporting patients from the UK, Germany, the Netherlands, Ireland, Scandinavia, and the United States.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Start your P-Shot abroad journey today — free consultation</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">WhatsApp for Free Consultation</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Abroad FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
