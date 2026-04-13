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
  title: 'Cheap P-Shot Turkey | Affordable P-Shot Treatment from £350',
  description:
    'Looking for cheap P-Shot treatment in Turkey? From £350, PShotTurkey offers world-class PRP therapy at unbeatable prices. No compromise on quality.',
};

const benefits = [
  { icon: 'TrendingDown', title: 'From £350 All-In', description: 'Complete P-Shot treatment including consultation and aftercare from £350' },
  { icon: 'ShieldCheck', title: 'No Hidden Fees', description: 'Our pricing is fully transparent — no surprise charges' },
  { icon: 'Award', title: 'JCI-Accredited Clinics', description: 'Affordable does not mean lower standards — our clinics are JCI-accredited' },
  { icon: 'Heart', title: 'Board-Certified Specialists', description: 'Every procedure performed by a board-certified urologist or andrologist' },
  { icon: 'Star', title: 'Transparent Pricing', description: 'Full cost confirmed before you travel — no obligations' },
  { icon: 'Zap', title: 'Best Value in Turkey', description: 'We benchmark our pricing to ensure you get the best value available' },
];

const faqs = [
  {
    question: 'How cheap is P-Shot in Turkey compared to the UK or US?',
    answer: 'P-Shot treatment starts from £350 in Turkey through PShotTurkey. In the UK, the same treatment costs £1,500–£2,500 per session. In the US, prices range from $1,800 to $3,500. Turkey offers savings of 75–85% compared to these markets — without any reduction in the quality of treatment, equipment, or physician qualifications.',
  },
  {
    question: 'Why is P-Shot so much cheaper in Turkey?',
    answer: 'The lower cost of P-Shot in Turkey reflects structural differences in healthcare economics — lower operating costs, lower staff costs, and a highly competitive medical tourism market — not differences in quality. Turkish clinics use the same PRP processing equipment and protocols as UK and US providers. The procedure itself is identical; only the price is different.',
  },
  {
    question: 'Is cheap P-Shot in Turkey safe?',
    answer: 'PShotTurkey&apos;s approach is to find the best value — not the cheapest clinic. There are very cheap P-Shot providers in Turkey that cut corners on PRP processing quality, physician qualifications, or facility standards. Our partner clinics are JCI-accredited, use board-certified urologists, and meet strict clinical standards. Affordable and safe are not mutually exclusive when you choose carefully.',
  },
  {
    question: 'What is included in the £350 P-Shot package?',
    answer: 'Our base package includes a full urological consultation, PRP blood draw and processing, topical anaesthetic, the P-Shot procedure itself, written aftercare instructions, and 12 months of follow-up support. There are no additional charges for these components. Optional add-ons such as shockwave therapy or multi-session packages are priced separately and clearly.',
  },
  {
    question: 'Are there any hidden costs when getting P-Shot in Turkey?',
    answer: 'No. PShotTurkey provides a full cost breakdown before you confirm your booking. The package price is all-inclusive for the treatment itself. You will need to budget separately for flights and accommodation, but we can recommend cost-effective options near our partner clinics. There are no surprise charges at the clinic.',
  },
];

export default function CheapPShotTurkeyPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('Affordable P-Shot Turkey', 'Affordable P-Shot PRP treatment in Turkey from £350 — quality care at unbeatable prices.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="Affordable P-Shot Treatment in Turkey – From £350"
        subtitle="World-class P-Shot treatment doesn&apos;t have to cost a fortune. Discover why PShotTurkey offers the best value P-Shot in Turkey — without compromising on quality or safety."
      />
      <BenefitsSection benefits={benefits} heading="Best Value P-Shot in Turkey" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">How PShotTurkey Keeps Prices Low Without Cutting Corners</h2>
          <div className="text-slate-600 space-y-4">
            <p>Turkey&apos;s healthcare economics are fundamentally different from the UK, US, or Western Europe. Operating costs — facilities, staffing, consumables — are significantly lower, and the competitive medical tourism market keeps prices honest. These structural differences mean that a Turkish urology clinic can deliver the same clinical procedure, using the same PRP processing equipment, performed by an equivalently qualified specialist, at a fraction of the price charged in London or New York. PShotTurkey leverages this by partnering with JCI-accredited facilities that meet exacting quality standards whilst passing genuine cost savings to our patients.</p>
            <p>Our pricing philosophy is &quot;best value&quot; rather than &quot;cheapest.&quot; There is a meaningful difference. The cheapest P-Shot providers in Turkey may use unvalidated PRP systems that produce inconsistent platelet concentrations, employ less experienced practitioners, or operate in facilities without proper accreditation. These providers undercut quality as well as price. PShotTurkey&apos;s partner clinics are JCI-accredited, use FDA-cleared PRP processing systems, and all procedures are performed by board-certified urologists. Our pricing is competitive — from £350 — but it includes everything that matters for a safe and effective outcome.</p>
            <p>We maintain price transparency as a core commitment. Before you confirm your booking, you receive a full written breakdown of all costs included in your package. There are no surprise additions at the clinic, no mandatory upgrades, and no pressure to purchase add-ons. Optional components — such as additional sessions or shockwave therapy — are offered with clear pricing and honest recommendations based on your clinical needs. Our goal is for every patient to feel confident they are getting exceptional value, not just a low price.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">View Pricing &amp; Book</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="Affordable P-Shot Turkey FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
