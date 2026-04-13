import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import PricingSection from '@/components/PricingSection';
import BenefitsSection from '@/components/BenefitsSection';
import FAQSection from '@/components/FAQSection';
import TrustSection from '@/components/TrustSection';
import CTASection from '@/components/CTASection';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getFAQSchema, organizationSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'P-Shot Cost Turkey 2026 | Price, Packages & Savings Guide',
  description:
    'P-Shot cost in Turkey from £350 — up to 85% cheaper than UK or US prices. 2026 pricing breakdown, package deals, cheap options, and what is included.',
};

const benefits = [
  { icon: 'TrendingDown', title: 'From £350 Per Session', description: 'Complete treatment including consultation, PRP, procedure, and 12-month aftercare' },
  { icon: 'ShieldCheck', title: 'Fully Transparent Pricing', description: 'No hidden fees — full cost confirmed before you travel' },
  { icon: 'Award', title: 'Board-Certified Specialists', description: 'Every procedure by a qualified urologist in a JCI-accredited clinic' },
  { icon: 'Star', title: 'Package Deals Available', description: 'Multi-session and combination packages at discounted rates' },
  { icon: 'Heart', title: '12-Month Aftercare Included', description: 'Full post-treatment support at no extra charge' },
  { icon: 'Zap', title: 'Best Price Guarantee', description: 'We match any like-for-like verified Turkish clinic quote' },
];

const faqs = [
  {
    question: 'What does P-Shot cost in Turkey in 2026?',
    answer: 'A single P-Shot session in Turkey through PShotTurkey costs £350 (€350 / $380 USD). Multi-session packages start from £620 for two sessions. Combination P-Shot + shockwave therapy packages start from £850. All prices include consultation, PRP preparation, the procedure, anaesthetic, and 12-month aftercare support.',
  },
  {
    question: 'How does the Turkey price compare to UK, US, and Europe?',
    answer: 'In the UK, a single P-Shot session typically costs £1,500–£3,000. In the US, the same treatment ranges from $1,800–$3,500. In Germany or other EU countries, expect €1,500–€2,800. PShotTurkey\'s £350 starting price represents savings of 75–85% versus these markets — and even after flights and accommodation, UK patients typically save over £1,000 in total.',
  },
  {
    question: 'Why is P-Shot so much cheaper in Turkey?',
    answer: 'Turkey\'s lower operating costs, favourable exchange rates, and a competitive medical tourism market produce genuine price differences — not quality differences. Turkish clinics use the same PRP processing equipment and protocols as UK and US providers. JCI-accredited clinics in Istanbul and Antalya meet identical safety and quality standards to top Western hospitals; the structural economics simply make them far more affordable.',
  },
  {
    question: 'What is included in the £350 P-Shot package?',
    answer: 'The base £350 package includes a full urological consultation, blood draw and PRP centrifuge processing, topical anaesthetic, the complete P-Shot injection protocol, written aftercare instructions, and 12 months of follow-up support via WhatsApp, email, and video call. There are no hidden extras. Optional add-ons (additional sessions, shockwave therapy) are priced separately and clearly before you commit.',
  },
  {
    question: 'Are package deals available, and are they worth it?',
    answer: 'Yes. Multi-session packages are available for patients who would benefit from 2–3 sessions. Combination packages pairing P-Shot with low-intensity shockwave therapy (LiSWT) are available from £850 and are clinically shown to produce superior outcomes for men with moderate to severe ED. Our specialists will recommend the most cost-effective plan for your individual case during a free initial consultation.',
  },
  {
    question: 'Can I pay in GBP, EUR, or USD?',
    answer: 'Yes. We accept GBP, EUR, and USD by bank transfer or card. A small deposit secures your booking; the balance is payable before treatment. No surprise costs at the clinic.',
  },
];

export default function PShotCostTurkeyPage() {
  return (
    <>
      <SchemaMarkup schemas={[organizationSchema, getFAQSchema(faqs)]} />
      <HeroSection
        title="P-Shot Cost Turkey 2026 – From £350"
        subtitle="The complete 2026 guide to P-Shot pricing in Turkey. Session prices, packages, cheap options, and why Turkey saves you up to 85% versus UK or US clinics."
      />
      <PricingSection />
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">Full P-Shot Cost Comparison 2026</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4">Treatment</th>
                  <th className="p-4">UK / US Clinics</th>
                  <th className="p-4 bg-blue-800">PShotTurkey</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['P-Shot (1 session)', '£1,500 – £3,000 / $1,800–$3,500', 'From £350'],
                  ['P-Shot (2 sessions)', '£3,000 – £6,000', 'From £620'],
                  ['P-Shot + Shockwave Combo', '£3,500 – £7,000', 'From £850'],
                  ['P-Shot (3 sessions)', '£4,500 – £9,000', 'From £900'],
                  ['Initial Consultation', '£100 – £300', 'FREE'],
                  ['PRP Preparation', 'Often extra', 'Included'],
                  ['12-Month Aftercare', 'Limited / extra charge', 'Included FREE'],
                  ['Total typical saving', '—', 'Up to 85% cheaper'],
                ].map(([item, uk, turkey]) => (
                  <tr key={item} className="border-b border-gray-100 even:bg-slate-50">
                    <td className="p-4 font-medium text-slate-800">{item}</td>
                    <td className="p-4 text-slate-600">{uk}</td>
                    <td className="p-4 text-blue-800 font-semibold bg-blue-50">{turkey}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-slate-600 space-y-4">
            <p>Turkey&apos;s P-Shot pricing advantage is structural, not superficial. Lower operating costs, strong competition among world-class clinics, and favourable exchange rates combine to make Turkey the most cost-effective destination for high-quality PRP therapy anywhere in Europe. PShotTurkey partners exclusively with JCI-accredited facilities — the same international gold standard that top UK and US hospitals hold — ensuring that affordability never comes at the expense of clinical excellence.</p>
            <p>For patients seeking the cheapest possible P-Shot without compromising on safety, our base package at £350 covers everything essential: full urological consultation, blood draw, PRP centrifuge processing, anaesthetic, the complete injection protocol, and 12 months of aftercare support. There are no compulsory extras. Patients who benefit from additional sessions or combination therapy are offered clear, upfront package pricing — no pressure, no upselling, no surprises at the clinic.</p>
            <p>Even when you factor in return flights to Istanbul or Antalya (typically £100–£250 from the UK) and two nights&apos; accommodation (from £40 per night), most UK patients save well over £1,000 versus a single UK clinic visit. US and European patients achieve even greater absolute savings. The combination of genuine medical quality, transparent pricing, and the experience of treatment in one of the world&apos;s great cities makes Turkey the obvious choice for value-conscious patients.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Get your personalised P-Shot cost estimate — free, no obligation</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">WhatsApp for Pricing</a>
          </div>
        </div>
      </section>
      <BenefitsSection benefits={benefits} heading="What Your P-Shot Price Includes" />
      <FAQSection faqs={faqs} heading="P-Shot Cost Turkey FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
