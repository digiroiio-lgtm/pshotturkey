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
  title: 'P-Shot UK Patients | Save 85% with P-Shot Treatment in Turkey',
  description:
    'UK patients travelling to Turkey for P-Shot treatment. Save up to 85% vs UK clinic prices. Expert care, JCI-accredited clinics, and full travel support.',
};

const benefits = [
  { icon: 'TrendingDown', title: 'Save Up to 85%', description: 'P-Shot from £350 in Turkey vs £1,500–£2,500+ in UK clinics' },
  { icon: 'Award', title: 'World-Class Clinics', description: 'JCI-accredited facilities with internationally trained specialists' },
  { icon: 'ShieldCheck', title: 'No GP Referral Needed', description: 'Book directly — no waiting lists, no NHS delays' },
  { icon: 'Heart', title: 'English-Speaking Team', description: 'Full English support from your first enquiry to post-treatment follow-up' },
  { icon: 'Zap', title: 'Travel Logistics Handled', description: 'Airport transfers, accommodation advice, and clinic scheduling all arranged' },
  { icon: 'Star', title: 'Same Quality as UK', description: 'JCI accreditation means the same clinical standards as top UK private clinics' },
];

const faqs = [
  {
    question: 'How much can UK patients save by getting P-Shot in Turkey?',
    answer: 'P-Shot treatment in the UK typically costs between £1,500 and £2,500 per session at private clinics. In Turkey, the same treatment from equivalently qualified specialists costs from £350. Even accounting for flights and accommodation, UK patients typically save £800–£1,500 per treatment trip — and often more on multi-session packages.',
  },
  {
    question: 'How long do I need to be in Turkey for P-Shot treatment?',
    answer: 'Most UK patients plan a 3–5 day trip. The procedure itself takes 45–60 minutes, and you can fly home the following day if needed. We recommend at least one full day before your procedure for consultation and preparation, and one recovery day after. Many patients combine their treatment with a short break in Istanbul or another Turkish city.',
  },
  {
    question: 'Is P-Shot available on the NHS?',
    answer: 'P-Shot PRP therapy for erectile dysfunction is not available on the NHS. It is offered at specialist private urology clinics in the UK at premium prices. Travelling to Turkey offers UK patients access to exactly the same standard of treatment at a fraction of the private UK cost.',
  },
  {
    question: 'What support does PShotTurkey provide for UK patients?',
    answer: 'We provide end-to-end support: free WhatsApp consultation, help choosing the right treatment package, clinic scheduling, airport transfer arrangements, accommodation recommendations near the clinic, full English-language medical support throughout your visit, and 12 months of post-treatment follow-up. Our UK-facing team understands what British patients need.',
  },
  {
    question: 'Is it safe to travel to Turkey for medical treatment?',
    answer: 'Turkey is a safe and well-established medical tourism destination, welcoming over 1.2 million international patients annually. Istanbul and other major cities have excellent infrastructure, modern airports, and a well-developed medical tourism sector. Turkey holds more JCI-accredited hospitals than any other country in Europe.',
  },
];

export default function PShotUKPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot for UK Patients', 'Guide for UK patients seeking P-Shot PRP treatment in Turkey — savings, logistics, and quality.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Treatment for UK Patients – Why Turkey Saves You Thousands"
        subtitle="UK men are travelling to Turkey for world-class P-Shot treatment at a fraction of the price. Here&apos;s everything you need to know about making the trip."
      />
      <BenefitsSection benefits={benefits} heading="Why UK Patients Choose Turkey for P-Shot" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Why UK Patients Choose Turkey for P-Shot</h2>
          <div className="text-slate-600 space-y-4">
            <p>UK patients face two significant obstacles when seeking P-Shot treatment at home: cost and availability. P-Shot is not available on the NHS — it is an entirely private procedure. Private UK urology clinics charge between £1,500 and £2,500 per session, placing it out of reach for many patients. Waiting lists at top private UK clinics can also be lengthy. Turkey removes both obstacles simultaneously: treatment starts from £350, appointments are available within days, and the quality of care is genuinely equivalent to the best UK private providers. Many Turkish urologists completed postgraduate training at UK institutions, hold UK-recognised qualifications, and treat UK patients routinely.</p>
            <p>The practical logistics of travelling from the UK to Turkey for P-Shot are straightforward. Direct flights from London to Istanbul take just under 4 hours, with multiple daily services from Heathrow, Gatwick, and Stansted on British Airways, Turkish Airlines, and budget carriers. Flights from other UK cities are equally convenient. PShotTurkey handles all clinic-side logistics — your consultation, procedure scheduling, airport transfer, and aftercare — so you arrive knowing exactly where to go and what to expect. The total cost of a P-Shot trip from the UK, including flights, accommodation, and treatment, is typically well below the price of a single P-Shot session at a London clinic.</p>
            <p>UK patients often comment that the standard of care they receive in Turkey exceeds their expectations. JCI-accredited facilities operate to the same audit standards as top UK private hospitals. Patient communication is smooth because our entire team speaks English and understands the UK healthcare context. Post-procedure follow-up is delivered remotely via WhatsApp, meaning UK patients have 12 months of professional support after returning home. The combination of savings, quality, and convenience explains why thousands of UK men choose Turkey for P-Shot every year.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Turkey for UK Patients FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
