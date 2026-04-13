import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import FAQSection from '@/components/FAQSection';
import TrustSection from '@/components/TrustSection';
import CTASection from '@/components/CTASection';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getMedicalProcedureSchema, getFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Free P-Shot Consultation | Free ED Treatment Consultation Turkey',
  description:
    'Book your free P-Shot consultation today. Speak with a specialist about P-Shot PRP therapy, shockwave treatment, or any ED question — no obligation.',
};

const benefits = [
  { icon: 'MessageCircle', title: 'Completely Free', description: 'No charge, no obligation — your consultation is 100% free regardless of whether you proceed' },
  { icon: 'ShieldCheck', title: 'Speak with a Specialist', description: 'Our consultations are conducted by or directly supervised by board-certified urologists' },
  { icon: 'Clock', title: 'Available 7 Days a Week', description: 'Contact us any day via WhatsApp — we respond quickly, even at weekends' },
  { icon: 'Heart', title: 'Completely Confidential', description: 'All consultations are private and handled with full medical confidentiality' },
  { icon: 'Zap', title: 'No GP Referral Needed', description: 'You can contact us directly — no referral, no waiting, no gatekeeping' },
  { icon: 'Star', title: 'Personalised Advice', description: 'We assess your specific situation and provide honest, tailored treatment recommendations' },
];

const faqs = [
  {
    question: 'What happens during the free consultation?',
    answer: 'During your free consultation, our specialist team will ask about your medical history, current ED symptoms, any treatments you have already tried, and your treatment goals. We will explain which treatment options are most appropriate for your situation — P-Shot, shockwave therapy, or a combination — and provide full pricing and logistics information. There is absolutely no pressure to book, and the consultation is completely free regardless of your decision.',
  },
  {
    question: 'Is the consultation really free with no obligation?',
    answer: 'Yes, completely. We do not charge for initial consultations, and there is no obligation to proceed with treatment. Many men simply want to understand their options and gather information before making a decision. We welcome those conversations. Our goal is to provide honest, expert guidance — if treatment is not right for you, we will tell you that too.',
  },
  {
    question: 'How do I prepare for my consultation?',
    answer: 'It helps to have a brief summary of your ED history ready — when it started, how severe it is, any medical conditions (diabetes, cardiovascular disease, hypertension), current medications (especially blood thinners or ED medications), and any previous treatments you have tried. This allows our team to give you the most accurate and personalised advice in the shortest time.',
  },
  {
    question: 'What questions should I ask during the consultation?',
    answer: 'Good questions to ask include: Am I a suitable candidate for P-Shot? How many sessions would you recommend for my situation? What results can I realistically expect? What is the full cost including all components? What does aftercare involve? How quickly can I get an appointment? Our team will answer all of these and any others you have.',
  },
  {
    question: 'How quickly can I book treatment after my consultation?',
    answer: 'If you decide to proceed after your free consultation, appointments are typically available within 1–2 weeks. We will coordinate your clinic appointment, recommend convenient accommodation options, and arrange airport-to-clinic transfers. The entire booking process from consultation to confirmed appointment can usually be completed within 48 hours.',
  },
];

export default function FreeConsultationPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('Free P-Shot Consultation', 'Free, no-obligation P-Shot and ED treatment consultation with specialist urologists.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="Free P-Shot Consultation – Speak with a Specialist Today"
        subtitle="Book your no-obligation free consultation with a P-Shot specialist. Ask any question about P-Shot, PRP therapy, or ED treatment in Turkey — completely free."
      />
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">How Your Free Consultation Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { step: '1', title: 'WhatsApp Us', desc: 'Message our team on WhatsApp at any time. We\'ll respond quickly — usually within minutes during business hours.' },
              { step: '2', title: 'Free Assessment', desc: 'A specialist reviews your situation and answers all your questions about P-Shot, suitability, and what to expect.' },
              { step: '3', title: 'Personalised Plan', desc: 'We provide a tailored treatment recommendation with full pricing, logistics, and expected outcomes.' },
              { step: '4', title: 'Book If Ready', desc: 'If you\'re happy to proceed, we confirm your appointment. No pressure if you need more time.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">{step}</div>
                <h3 className="font-bold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-slate-600 space-y-4">
            <p>A free consultation with PShotTurkey is the fastest, most direct route to understanding whether P-Shot or shockwave therapy is right for you. Unlike UK private clinics where an initial consultation alone can cost £150–£300, our free consultation gives you access to genuine specialist expertise at no cost and with no strings attached. Our team — led by board-certified urologists — will assess your specific situation honestly and provide recommendations that are genuinely in your interest, not driven by sales targets.</p>
            <p>Many men arrive at their consultation uncertain about what to ask or feeling uncomfortable discussing ED. Our team is experienced at putting patients at ease. Erectile dysfunction is an extremely common condition — affecting over half of men over 40 — and our specialists approach every consultation with complete matter-of-factness and professionalism. Everything discussed is strictly confidential.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Book your free consultation now — via WhatsApp</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">Start Free Consultation</a>
          </div>
        </div>
      </section>
      <BenefitsSection benefits={benefits} heading="What Makes Our Free Consultation Different?" />
      <FAQSection faqs={faqs} heading="Free Consultation FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
