import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getFAQSchema, organizationSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'P-Shot Cost Turkey | Compare UK vs Turkey Prices 2024',
  description:
    'P-Shot costs in Turkey from £350 vs £1,500-£3,000 in the UK. Full price comparison, what is included, and how to save up to 85% on your treatment.',
};

const faqs = [
  {
    question: 'What is the total cost of P-Shot treatment in Turkey?',
    answer: 'The P-Shot procedure itself costs £350 ($350/€350). When adding flights and accommodation, total trip costs typically range from £600-£900, still saving thousands versus UK prices.',
  },
  {
    question: 'Why is P-Shot so much cheaper in Turkey?',
    answer: 'Turkey\'s lower operating costs, favourable exchange rates, and strong competition among high-quality clinics result in significantly lower prices — without any compromise on medical quality.',
  },
  {
    question: 'Are there any hidden costs?',
    answer: 'PShotTurkey operates with full price transparency. The quoted price includes your consultation, the PRP preparation, the procedure itself, and aftercare materials. There are no hidden fees.',
  },
  {
    question: 'Does my health insurance cover P-Shot treatment?',
    answer: 'In most countries, including the UK, P-Shot is considered an elective cosmetic/wellness procedure and is not covered by standard health insurance or the NHS. Some private health insurers may offer partial coverage.',
  },
  {
    question: 'Can I pay in instalments?',
    answer: 'We work with payment plans to make treatment as accessible as possible. Contact us to discuss available options for your individual situation.',
  },
];

export default function PShotCostPage() {
  return (
    <>
      <SchemaMarkup schemas={[organizationSchema, getFAQSchema(faqs)]} />
      <HeroSection
        title="P-Shot Cost in Turkey – Save Up to 85%"
        subtitle="P-Shot treatment in Turkey starts from just £350, compared to £1,500-£3,000 in the UK. World-class care at a fraction of the price."
      />
      <PricingSection />
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">Full Cost Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4">Item</th>
                  <th className="p-4">UK Clinics</th>
                  <th className="p-4 bg-blue-800">PShotTurkey</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['P-Shot Procedure', '£1,500 – £3,000', 'From £350'],
                  ['Initial Consultation', '£100 – £300', 'FREE'],
                  ['PRP Preparation', 'Often extra', 'Included'],
                  ['Aftercare Support', 'Limited', '12 months included'],
                  ['Follow-up Appointments', '£100+ each', 'FREE'],
                  ['Total (typical)', '£2,000 – £3,500', 'From £350 + travel'],
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
        </div>
      </section>
      <FAQSection faqs={faqs} heading="Pricing FAQs" />
      <CTASection />
      <LeadForm />
    </>
  );
}
