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
  title: 'P-Shot Before and After Turkey | Real Results & Patient Stories',
  description:
    'P-Shot before and after results from patients treated in Turkey. What to expect, realistic timelines, and why Turkey is the top destination for P-Shot treatment.',
};

const benefits = [
  { icon: 'Star', title: '75-80% Success Rate', description: 'Majority of patients report significant improvements after treatment' },
  { icon: 'Activity', title: 'Results from Week 2-4', description: 'Early improvements in sensitivity noticed within the first month' },
  { icon: 'TrendingDown', title: 'Best Results at 8-12 Weeks', description: 'Peak improvement as PRP growth factors complete tissue regeneration' },
  { icon: 'Clock', title: 'Long-Lasting Effects', description: 'Results typically last 12-18 months or more from a single treatment' },
  { icon: 'ShieldCheck', title: 'Documented Outcomes', description: 'All our patients have access to outcome tracking and follow-up support' },
  { icon: 'Heart', title: 'Life-Changing for Many Men', description: 'Patients report restored confidence and dramatically improved quality of life' },
];

const faqs = [
  {
    question: 'What results can I expect from the P-Shot?',
    answer: 'Most patients report improvements in erection quality, enhanced sensitivity, increased firmness, and better stamina. Some men also notice modest increases in length and girth over time. Clinical data shows approximately 75-80% of patients experience meaningful improvement after a single session.',
  },
  {
    question: 'How quickly will I see P-Shot results?',
    answer: 'Early results — particularly improved sensitivity — are often noticed within 2-4 weeks. The most significant improvements in erection quality and firmness typically become apparent at the 8-12 week mark, as PRP growth factors complete their work of stimulating new blood vessel formation and tissue regeneration.',
  },
  {
    question: 'Will my P-Shot results be permanent?',
    answer: 'P-Shot results are long-lasting but not permanent. Most patients enjoy benefits for 12-18 months from a single treatment, with some reporting results lasting 2+ years. Periodic maintenance treatments can extend and sustain optimal results.',
  },
  {
    question: 'Do P-Shot results vary between patients?',
    answer: 'Yes. Results depend on factors including age, overall health, lifestyle, the severity of ED before treatment, and how well your body responds to PRP. Younger, healthier patients with mild to moderate vasculogenic ED tend to see the best outcomes. Our specialists provide realistic, personalised expectations during your free consultation.',
  },
  {
    question: 'Can I combine the P-Shot with other treatments for better results?',
    answer: 'Yes. Combining the P-Shot with low-intensity shockwave therapy (LiSWT) often produces superior and longer-lasting results than either treatment alone. Shockwave therapy stimulates vascular growth while PRP provides growth factors for tissue regeneration — a highly synergistic combination.',
  },
];

export default function PShotBeforeAfterTurkeyPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot Before and After Turkey', 'Real P-Shot results and patient outcomes from treatment in Turkey — what to expect before and after PRP therapy for ED.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Turkey Before and After – Real Results"
        subtitle="Discover what P-Shot treatment can realistically achieve. Patient outcomes, timelines, and the factors that influence your results from PRP therapy in Turkey."
      />
      <BenefitsSection benefits={benefits} heading="What Our Patients Experience" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">P-Shot Results Timeline</h2>
          <div className="space-y-6">
            {[
              { week: 'Week 1-2', title: 'Initial Recovery', desc: 'Minor swelling or bruising resolves. Most patients resume normal activities including sexual activity within 24-48 hours of treatment.' },
              { week: 'Week 2-4', title: 'Early Improvements', desc: 'Enhanced sensitivity and slightly firmer erections are typically the first improvements noticed. Some patients report improved morning erections.' },
              { week: 'Week 4-8', title: 'Progressive Improvement', desc: 'Erection quality continues to improve as PRP growth factors stimulate new blood vessel formation. Stamina and recovery time often improve during this phase.' },
              { week: 'Week 8-12', title: 'Peak Results', desc: 'Most patients experience their best results at this stage — significantly improved erection quality, firmness, and sensitivity. Many report enhanced confidence and satisfaction.' },
              { week: '12+ Months', title: 'Sustained Benefits', desc: 'Results typically last 12-18 months. Maintenance treatments can extend and optimise long-term outcomes.' },
            ].map(({ week, title, desc }) => (
              <div key={week} className="flex gap-4 items-start">
                <div className="bg-blue-800 text-white text-sm font-semibold rounded-full px-3 py-1 whitespace-nowrap">{week}</div>
                <div>
                  <h3 className="font-semibold text-slate-800">{title}</h3>
                  <p className="text-slate-600 text-sm mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Results FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
