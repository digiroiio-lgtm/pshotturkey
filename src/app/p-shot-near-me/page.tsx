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
  title: 'P-Shot Near Me | P-Shot Treatment for UK & EU Patients',
  description:
    'Searching for P-Shot near you? For UK, US and European patients, Turkey is the closest world-class option — cheaper, faster, and higher quality than local providers.',
};

const benefits = [
  { icon: 'MapPin', title: 'Best Local Alternative', description: 'When local providers are scarce or overpriced, Turkey is the practical answer' },
  { icon: 'Clock', title: '2.5-Hour Flight from UK', description: 'Istanbul is closer than you think — shorter than many domestic UK drives to a specialist' },
  { icon: 'Zap', title: 'Same-Day Treatment', description: 'Arrive, consult, and complete your P-Shot in a single visit' },
  { icon: 'ShieldCheck', title: 'No GP Referral', description: 'No waiting for a referral — book your consultation directly and proceed at your pace' },
  { icon: 'TrendingDown', title: 'Save £1,000+', description: 'Save over £1,000 versus a UK private clinic, even after flights and accommodation' },
  { icon: 'Heart', title: 'Full Travel Support', description: 'We coordinate transfers, accommodation recommendations, and clinic appointments' },
];

const faqs = [
  {
    question: 'Is it worth travelling to Turkey for P-Shot?',
    answer: 'For most UK, US, and EU patients, yes — overwhelmingly so. A P-Shot in Turkey costs from £350 versus £1,500–£3,000 in the UK. The total trip including flights and accommodation is typically £600–£900, saving most UK patients over £1,000. Turkish clinics are JCI-accredited and staffed by board-certified urologists using identical equipment and protocols to top Western providers. The 2.5–4 hour flight from UK airports makes it a very practical medical trip.',
  },
  {
    question: 'How far is Turkey from the UK?',
    answer: 'Istanbul is approximately 2.5–3 hours from London by direct flight. Antalya is 3.5–4 hours. Both cities have multiple daily flights from major UK airports including Heathrow, Gatwick, Manchester, Birmingham, and Edinburgh. Most patients fly out, have treatment, stay 1–2 nights, and return — completing the entire trip in under 72 hours.',
  },
  {
    question: 'Can I get P-Shot on the NHS?',
    answer: 'No. The P-Shot (PRP therapy for erectile dysfunction) is not currently available on the NHS. NHS ED treatment is limited to oral medications (PDE5 inhibitors), vacuum erection devices, or surgical implants in severe cases. Private UK clinics offer the P-Shot but at prices of £1,500–£3,000 per session. For most men seeking this treatment, Turkey is the most accessible and affordable option available.',
  },
  {
    question: 'Why can\'t I find local P-Shot providers?',
    answer: 'P-Shot availability in the UK is limited and concentrated in large cities — primarily London. Providers outside London are scarce. Even where available, long waiting times and high prices are common. In Turkey, P-Shot is a mainstream treatment in specialist urology clinics, with multiple experienced providers in Istanbul and Antalya offering readily available appointments.',
  },
  {
    question: 'What about aftercare when I am back home?',
    answer: 'PShotTurkey provides 12 months of remote aftercare included in every treatment package. This covers WhatsApp messaging, email support, and video consultations with our clinical team. The vast majority of post-procedure questions and follow-up needs can be handled remotely without any need to return to Turkey. For the small number of patients who require in-person follow-up, we can coordinate with local GPs or urologists.',
  },
];

export default function PShotNearMePage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('P-Shot Near Me', 'P-Shot PRP treatment for UK and EU patients seeking the best local alternative — Turkey.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="P-Shot Near Me – Why Turkey is the Best Option for UK Patients"
        subtitle="Can't find P-Shot treatment locally? Thousands of UK, US and EU patients travel to Turkey for world-class PRP therapy — saving thousands while getting premium care."
      />
      <BenefitsSection benefits={benefits} heading="Why Patients Choose Turkey Over Local Providers" />
      <HowItWorks />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Why &apos;P-Shot Near Me&apos; Leads Smart Patients to Turkey</h2>
          <div className="text-slate-600 space-y-4">
            <p>When men search for &quot;P-Shot near me,&quot; they are looking for convenience, accessibility, and quality. The problem is that P-Shot providers in the UK are concentrated in major cities, often have long waiting times, and charge prices that make treatment inaccessible for most men. A single session at a London clinic costs £1,500–£3,000. Outside London, finding a qualified provider can be nearly impossible. This is the reality that drives thousands of UK patients to look further afield — and what they find in Turkey exceeds their expectations on every measure.</p>
            <p>Istanbul is closer to London than many people realise. A 2.5–3 hour direct flight from Heathrow or Gatwick brings patients to one of the world&apos;s most advanced medical tourism destinations. Turkish clinics offering P-Shot are not budget operations: they are JCI-accredited specialist facilities staffed by board-certified urologists with extensive PRP experience. The same procedure that costs £2,000+ in London costs £350 in Istanbul — and the clinical outcome is identical or superior because Turkish providers have far greater volume experience with this specific treatment.</p>
            <p>The practical reality for most UK patients is that a Turkey P-Shot trip is simpler and faster than navigating UK private healthcare. There are no GP referrals to chase, no multi-week waiting lists, and no complicated insurance pre-authorisation. You contact PShotTurkey, have a free online consultation, book your appointment, and fly out on dates that suit you. Treatment, transfers, and accommodation coordination are all handled for you. Most patients complete the entire process — first contact to post-treatment — within two to three weeks.</p>
          </div>
          <div className="mt-10 p-6 bg-white rounded-xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Explore Related Pages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a href="/p-shot-uk" className="block p-3 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-500 text-slate-700 font-medium text-sm text-center transition-all">P-Shot for UK Patients</a>
              <a href="/p-shot-cost-turkey" className="block p-3 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-500 text-slate-700 font-medium text-sm text-center transition-all">P-Shot Cost & Pricing</a>
              <a href="/p-shot-abroad" className="block p-3 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-500 text-slate-700 font-medium text-sm text-center transition-all">P-Shot Treatment Abroad</a>
            </div>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to find out if P-Shot in Turkey is right for you?</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">WhatsApp Us Now</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="P-Shot Near Me FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
