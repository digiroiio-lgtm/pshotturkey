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
  title: 'P-Shot Package Turkey | All-Inclusive P-Shot Treatment Packages',
  description:
    'All-inclusive P-Shot packages in Turkey. Includes treatment, consultation, aftercare, and patient support. From £350. Compare packages and book today.',
};

const benefits = [
  { icon: 'ShieldCheck', title: 'Everything Included', description: 'Consultation, treatment, PRP preparation, and aftercare in one price' },
  { icon: 'TrendingDown', title: 'Best Value Packages', description: 'Multi-session packages at significantly reduced per-session rates' },
  { icon: 'Heart', title: 'Full Concierge Support', description: 'Airport transfers, hotel recommendations, and clinic coordination included' },
  { icon: 'Globe', title: 'Istanbul, Antalya & Izmir', description: 'Choose your preferred city — all packages available at all locations' },
  { icon: 'Award', title: 'Board-Certified Specialists', description: 'All treatments by qualified urologists in accredited facilities' },
  { icon: 'Clock', title: '12-Month Aftercare', description: 'Post-treatment support and follow-ups included in every package' },
];

const faqs = [
  {
    question: 'What does the P-Shot package in Turkey include?',
    answer: 'Our P-Shot packages include your initial consultation (online and in-person), the full P-Shot procedure (blood draw, PRP preparation, and injection), topical anaesthetic, aftercare materials, and 12 months of post-treatment support. Travel and accommodation are not included but we can help arrange these.',
  },
  {
    question: 'What packages are available?',
    answer: 'We offer: Single P-Shot (from £350), 2-Session P-Shot Course (from £620), P-Shot + Shockwave Therapy Combo (from £850), and an All-Inclusive Medical Trip package that includes patient coordination, airport transfer guidance, and hotel recommendations alongside treatment.',
  },
  {
    question: 'Can I add shockwave therapy to my P-Shot package?',
    answer: 'Yes, and we strongly recommend it. Our combination package — P-Shot plus a course of low-intensity shockwave therapy (LiSWT) — produces superior and longer-lasting results than either treatment alone. The combination can be completed across a 4-5 day trip to Turkey.',
  },
  {
    question: 'Is airport transfer and hotel included?',
    answer: 'Our standard packages focus on the medical treatment itself. Our patient coordinators will happily recommend hotels near the clinic and arrange airport transfer quotes from trusted local providers. All-Inclusive packages that bundle accommodation can be arranged on request.',
  },
  {
    question: 'Can I pay for my package in instalments?',
    answer: 'Yes. We work with a flexible payment approach to make treatment accessible. A deposit is required to secure your booking, and various payment arrangements for the balance are available. Contact our team to discuss what works for your situation.',
  },
];

export default function PShotPackageTurkeyPage() {
  return (
    <>
      <SchemaMarkup schemas={[organizationSchema, getFAQSchema(faqs)]} />
      <HeroSection
        title="P-Shot Packages Turkey – All-Inclusive Treatment"
        subtitle="Choose from our range of P-Shot packages in Turkey. Single sessions, multi-session courses, and combination packages with shockwave therapy — all at unbeatable prices."
      />
      <PricingSection />
      <BenefitsSection benefits={benefits} heading="What Every Package Includes" />
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Compare Our Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Starter',
                price: 'From £350',
                includes: ['1x P-Shot session', 'Full consultation', 'PRP preparation', 'Aftercare kit', '12-month support'],
                cta: 'Book Starter',
              },
              {
                name: 'Enhanced',
                price: 'From £620',
                includes: ['2x P-Shot sessions', 'Full consultation', 'PRP preparation x2', 'Aftercare kit', '12-month support', 'Priority booking'],
                cta: 'Book Enhanced',
              },
              {
                name: 'Ultimate Combo',
                price: 'From £850',
                includes: ['2x P-Shot sessions', '3x Shockwave therapy', 'Full consultation', 'Aftercare kit', '12-month support', 'Patient coordinator', 'Priority booking'],
                cta: 'Book Ultimate',
              },
            ].map(({ name, price, includes, cta }) => (
              <div key={name} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-1">{name}</h3>
                <p className="text-2xl font-bold text-blue-800 mb-4">{price}</p>
                <ul className="space-y-2 mb-6">
                  {includes.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-green-600 font-bold">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#lead-form"
                  className="block text-center bg-blue-800 text-white font-semibold py-2 rounded-lg hover:bg-blue-900 transition-colors"
                >
                  {cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="Package FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
