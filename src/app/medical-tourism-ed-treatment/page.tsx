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
  title: 'Medical Tourism ED Treatment | Erectile Dysfunction Treatment Abroad',
  description:
    'Medical tourism for erectile dysfunction treatment. Turkey offers P-Shot, shockwave therapy, and PRP by world-class specialists at a fraction of Western prices.',
};

const benefits = [
  { icon: 'ShieldCheck', title: 'Same Quality as UK Clinics', description: 'JCI-accredited facilities with board-certified urologists using identical protocols' },
  { icon: 'TrendingDown', title: '75–85% Cost Savings', description: 'ED treatment in Turkey costs a fraction of UK, US, or EU private clinic pricing' },
  { icon: 'Zap', title: 'No Waiting Lists', description: 'Appointments typically available within 1–2 weeks — no months-long NHS waits' },
  { icon: 'Activity', title: 'Multiple Treatment Options', description: 'P-Shot, shockwave therapy, combination protocols — all available at one destination' },
  { icon: 'Heart', title: 'Full Coordination Included', description: 'Transfers, accommodation advice, and clinical appointments managed by our team' },
  { icon: 'Globe', title: 'Combine with Travel', description: 'Istanbul and Antalya are world-class destinations in their own right' },
];

const faqs = [
  {
    question: 'What ED treatments are available through medical tourism in Turkey?',
    answer: 'PShotTurkey\'s partner clinics offer the full range of evidence-based non-surgical ED treatments: the P-Shot (PRP therapy), low-intensity shockwave therapy (LiSWT), and combination protocols pairing both treatments for superior outcomes. Our specialist urologists will assess your specific type and severity of ED and recommend the most appropriate treatment plan during your free initial consultation.',
  },
  {
    question: 'Is medical tourism for ED treatment safe?',
    answer: 'At PShotTurkey\'s partner facilities, yes. Our clinics are JCI-accredited — the same international standard as the world\'s leading hospitals — and staffed by board-certified urologists with extensive experience treating international patients. We have coordinated thousands of ED treatment trips without a single serious adverse event. The clinical environment, equipment, and protocols are equivalent to or better than those found in most UK private clinics.',
  },
  {
    question: 'How much can I save on ED treatment through medical tourism?',
    answer: 'A P-Shot session in Turkey costs from £350 versus £1,500–£3,000 in the UK. Shockwave therapy courses cost from £500 in Turkey versus £800–£1,500 in the UK. Combination P-Shot and shockwave packages start from £850 in Turkey versus £3,500–£7,000 in the UK. Even after adding return flights (£100–£250) and 2–3 nights\' accommodation (£40–£150 per night), most UK patients save £1,000–£2,500 per treatment visit.',
  },
  {
    question: 'How long will I need to stay in Turkey for ED treatment?',
    answer: 'For a single P-Shot session, most patients stay 2 nights: arrive on day one, have treatment on day two, and return home on day three. For combination P-Shot and shockwave therapy, 3–4 nights is typical. Our patient coordinators will advise on the optimal stay duration based on your treatment plan and will recommend convenient, well-located accommodation near our partner clinics.',
  },
  {
    question: 'Can I combine ED treatment with a holiday in Turkey?',
    answer: 'Absolutely — and many patients do. Istanbul is one of the world\'s great cities, with extraordinary history, cuisine, and culture. Antalya offers beautiful beaches and a charming old town. Many patients choose to extend their medical trip by a few days and combine treatment with leisure. PShotTurkey\'s team can make recommendations for activities and accommodation that work well alongside your treatment schedule.',
  },
];

export default function MedicalTourismEDTreatmentPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('Medical Tourism ED Treatment', 'Erectile dysfunction treatment abroad — Turkey as the premier medical tourism destination for P-Shot and shockwave therapy.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="Medical Tourism for ED Treatment – Turkey Guide 2026"
        subtitle="Hundreds of thousands of men travel abroad for erectile dysfunction treatment. Turkey is the world's leading destination — expert care, accredited clinics, and prices from £350."
      />
      <BenefitsSection benefits={benefits} heading="Why Turkey for Medical Tourism ED Treatment?" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Why Medical Tourism for ED Treatment Makes Sense in 2026</h2>
          <div className="text-slate-600 space-y-4">
            <p>Erectile dysfunction affects an estimated 50% of men over 40 and a significant proportion of younger men. Despite its prevalence, effective treatment remains difficult to access in many Western countries — NHS treatment is limited to medication, private UK clinics are expensive and concentrated in major cities, and waiting times can stretch to months. Medical tourism offers a compelling alternative: the same or better clinical quality, immediate availability, and costs that are a fraction of domestic pricing.</p>
            <p>Turkey has emerged as the undisputed leader in medical tourism for ED treatment, particularly for regenerative therapies like the P-Shot and shockwave treatment. The country&apos;s medical system has invested heavily in specialist urology and sexual health, producing a concentration of experienced practitioners and world-class facilities that rivals any market globally. More than one million medical tourists visit Turkey annually, and the infrastructure — from airport transfers to English-speaking clinical teams to international payment systems — is highly developed and patient-centred.</p>
            <p>For men considering this option, the practical barriers are lower than they might expect. PShotTurkey manages the entire process: initial free consultation, clinic coordination, appointment scheduling, transfer arrangements, and 12 months of remote post-treatment support. Patients typically fly in, complete treatment, and return home within 48–72 hours. The total cost — treatment, flights, and accommodation — is typically less than a single private clinic consultation in London. In 2026, medical tourism for ED treatment is not an unusual or experimental choice; it is the financially rational decision for men who prioritise effective care at fair prices.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Start your ED treatment journey — free consultation today</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">WhatsApp for Free Consultation</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="Medical Tourism ED Treatment FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
