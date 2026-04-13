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
  title: 'Best P-Shot Clinics Turkey | Top Rated P-Shot Providers 2026',
  description:
    'Find the best P-Shot clinics in Turkey. JCI-accredited, board-certified urologists, and transparent pricing. Compare top providers for 2026.',
};

const benefits = [
  { icon: 'Award', title: 'JCI Accreditation', description: 'Only clinics meeting the highest international standards are included' },
  { icon: 'ShieldCheck', title: 'Board-Certified Specialists', description: 'All doctors are board-certified urologists or andrologists' },
  { icon: 'TrendingDown', title: 'Transparent Pricing', description: 'All-in pricing with no hidden fees or surprise charges' },
  { icon: 'Heart', title: 'English Support', description: 'Dedicated English-speaking coordinators at every clinic' },
  { icon: 'Clock', title: 'Aftercare Included', description: 'Post-treatment follow-up and support included in all packages' },
  { icon: 'Star', title: 'Vetted Network', description: 'Our clinic network is regularly audited for quality and outcomes' },
];

const faqs = [
  {
    question: 'What should I look for when choosing a P-Shot clinic in Turkey?',
    answer: 'Key criteria include JCI accreditation (or equivalent national accreditation), a board-certified urologist or andrologist performing the procedure, clinically validated PRP processing equipment, transparent all-in pricing, English-speaking support, and documented aftercare protocols. Avoid clinics that do not disclose their doctor credentials or equipment specifications.',
  },
  {
    question: 'How do I verify a Turkish clinic is JCI-accredited?',
    answer: 'You can verify JCI accreditation directly on the Joint Commission International website (jointcommissioninternational.org) by searching for the clinic name. PShotTurkey only partners with verified JCI-accredited facilities, and we can share documentation upon request.',
  },
  {
    question: 'Should I trust P-Shot clinics I find on social media?',
    answer: 'Exercise caution with clinics that primarily advertise through social media without verifiable credentials. Always ask for the name and qualifications of the treating physician, confirm the clinic&apos;s accreditation status, and look for reviews on independent platforms. PShotTurkey handles all vetting on your behalf.',
  },
  {
    question: 'Is the cheapest P-Shot clinic in Turkey the best choice?',
    answer: 'Price alone is a poor indicator of quality. The lowest-cost providers sometimes cut corners on PRP processing quality, doctor qualifications, or aftercare. PShotTurkey&apos;s clinics offer competitive pricing while maintaining the highest clinical standards — our aim is best value, not cheapest price.',
  },
  {
    question: 'Can PShotTurkey help me compare clinic options?',
    answer: 'Yes. Contact us via WhatsApp for a free consultation where we can discuss your specific needs and recommend the most appropriate clinic within our network. We provide full transparency on the treating physician, clinic accreditation, and what is included in your package.',
  },
];

export default function BestPShotClinicsTurkeyPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('Best P-Shot Clinics Turkey', 'Guide to choosing the best JCI-accredited P-Shot clinic in Turkey for 2026.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="Best P-Shot Clinics in Turkey – 2026 Guide"
        subtitle="An independent guide to choosing the best P-Shot clinic in Turkey. What certifications to look for, questions to ask, and why PShotTurkey&apos;s network leads the field."
      />
      <BenefitsSection benefits={benefits} heading="What Sets the Best P-Shot Clinics Apart" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">How to Choose the Best P-Shot Clinic in Turkey</h2>
          <div className="text-slate-600 space-y-4">
            <p>Turkey has hundreds of clinics offering P-Shot treatment, but the quality varies enormously. The single most important marker of clinic quality is accreditation — specifically JCI (Joint Commission International) accreditation, which is the global gold standard for hospital and clinic quality. JCI-accredited facilities undergo rigorous independent audits covering clinical processes, patient safety, infection control, and staff qualifications. Turkey has more JCI-accredited facilities than any other country in Europe, which is why it has become the leading medical tourism destination in the region.</p>
            <p>Beyond accreditation, the qualifications of the treating physician are critical. P-Shot treatment should always be performed by a board-certified urologist or andrologist — not a general practitioner or aesthetics practitioner. Ask specifically for the name and credentials of the doctor who will perform your procedure. The best clinics are transparent about their medical team and happy to share CVs and qualification documentation. PRP processing quality also matters: look for clinics using FDA-cleared PRP systems with documented centrifuge calibration, which ensures a consistent and therapeutically effective platelet concentration.</p>
            <p>PShotTurkey operates as a curated network rather than a single clinic. We have personally vetted each partner facility against a comprehensive checklist covering accreditation, physician qualifications, equipment standards, aftercare protocols, and patient satisfaction data. Every patient we send to a partner clinic receives the same high standard of care, regardless of which city they visit. Our English-speaking coordinators handle every aspect of your trip — from your first WhatsApp message through to your 12-month follow-up.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="Best P-Shot Clinics Turkey FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
