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
  title: 'P-Shot Birmingham | Birmingham Patients: P-Shot Turkey',
  description:
    'Birmingham patients travelling to Turkey for P-Shot. Flights from Birmingham Airport or London. Save up to 85% vs UK prices. Expert care from £350.',
};

const benefits = [
  { icon: 'MapPin', title: 'Flights from Birmingham', description: 'Fly direct or via connecting hubs from Birmingham Airport (BHX)' },
  { icon: 'TrendingDown', title: '85% Cost Savings', description: 'Turkey P-Shot from £350 versus £1,500–£3,000 at UK private clinics' },
  { icon: 'ShieldCheck', title: 'No GP Referral', description: 'Book directly without navigating UK referral pathways' },
  { icon: 'Award', title: 'Expert Urologists', description: 'Board-certified specialists with extensive P-Shot PRP experience' },
  { icon: 'Zap', title: 'Same-Day Treatment', description: 'Consult and complete your P-Shot in a single clinic visit' },
  { icon: 'Heart', title: 'Full Support', description: 'Dedicated patient coordinator and 12 months of remote aftercare' },
];

const faqs = [
  {
    question: 'How do Birmingham patients get to Turkey for P-Shot?',
    answer: 'Birmingham Airport (BHX) offers direct flights to Antalya and connecting flights to Istanbul. Alternatively, Birmingham patients can take the train to London (1.5 hours) and fly from Heathrow or Gatwick, which offer more frequent direct flights to Istanbul. Our team can advise on the most convenient and cost-effective routing based on your preferred dates.',
  },
  {
    question: 'What is the cost saving for Birmingham patients?',
    answer: 'P-Shot treatment in the Midlands typically costs £1,500–£2,500 per session when available. In Turkey, treatment starts from £350. Including flights from Birmingham or London (£80–£220) and 2 nights\' accommodation (£80–£180), the total trip cost is typically £510–£750 — saving £750–£1,750 per session versus a local UK clinic.',
  },
  {
    question: 'Are there P-Shot clinics in Birmingham?',
    answer: 'P-Shot providers in Birmingham are limited and may have long waiting times. PShotTurkey\'s Turkish partner clinics offer far more accessible appointments — typically within 1–2 weeks — at significantly lower prices with the same or superior clinical quality and a dedicated international patient service.',
  },
  {
    question: 'Is the quality of care in Turkey equivalent to UK clinics?',
    answer: 'Yes. PShotTurkey&apos;s partner clinics are JCI-accredited, which is the international equivalent of UK CQC registration and the standard held by the world&apos;s leading private hospitals. PRP processing equipment and protocols are identical to those used in UK clinics. All procedures are performed by board-certified urologists with extensive P-Shot experience.',
  },
  {
    question: 'What support is available for Birmingham patients after returning home?',
    answer: 'All patients receive 12 months of remote aftercare: WhatsApp messaging, email support, and video consultations. For Birmingham patients, we can also coordinate with your GP or local urologist if any in-person follow-up is needed, providing full clinical documentation from your treatment.',
  },
];

export default function PShotBirminghamPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot for Birmingham Patients', 'P-Shot PRP treatment for Birmingham patients travelling to Turkey — flights from BHX, 85% savings.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Turkey for Birmingham Patients"
        subtitle="Birmingham patients are discovering that Turkey offers the same P-Shot quality as local clinics at a fraction of the price — with direct or connecting flights from BHX."
      />
      <BenefitsSection benefits={benefits} heading="Why Birmingham Patients Choose Turkey for P-Shot" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">P-Shot from Birmingham: Your Complete Guide</h2>
          <div className="text-slate-600 space-y-4">
            <p>Birmingham is one of the UK&apos;s largest cities, yet P-Shot providers in the Midlands remain limited — and those that do exist charge prices that put treatment out of reach for many men. Turkey offers Birmingham patients a compelling alternative: world-class specialist urology in JCI-accredited facilities, from £350 per session, with flights from Birmingham Airport or from London airports that are easily accessible by train in under 90 minutes.</p>
            <p>Birmingham Airport (BHX) has direct services to Antalya during the summer season, making it particularly convenient for patients wishing to treat in Antalya. Year-round, connecting flights via hubs such as Amsterdam or Dusseldorf reach Istanbul comfortably. For patients prepared to travel to London, Heathrow and Gatwick offer the widest range of direct daily flights to Istanbul, with competitive fares from budget airlines.</p>
            <p>PShotTurkey&apos;s patient coordinators have extensive experience supporting patients from the Midlands. We will identify the most convenient and cost-effective flight options for your specific dates, recommend hotels close to your clinic that are well-reviewed by previous patients, arrange airport-to-clinic transfers, and ensure your clinical appointment is seamlessly aligned with your travel. Birmingham patients consistently tell us the process is simpler and faster than they expected.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Birmingham patients: start with a free consultation</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">WhatsApp Us Now</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Birmingham FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
