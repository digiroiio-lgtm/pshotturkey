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
  title: 'WhatsApp P-Shot Consultation | Instant Expert Advice',
  description:
    'Get instant P-Shot advice via WhatsApp. Message our specialist team now — free, confidential, no waiting. Available 7 days a week.',
};

const benefits = [
  { icon: 'MessageCircle', title: 'Instant Response', description: 'Message us now and receive a reply typically within minutes during business hours' },
  { icon: 'ShieldCheck', title: 'Specialist Team', description: 'Your messages are handled by P-Shot specialists, not call centre staff' },
  { icon: 'Clock', title: '7 Days a Week', description: 'We respond to WhatsApp messages Monday through Sunday, including evenings' },
  { icon: 'Heart', title: 'Completely Confidential', description: 'All conversations are private and handled with strict medical confidentiality' },
  { icon: 'Star', title: 'Free, No Obligation', description: 'WhatsApp consultation is entirely free with zero pressure to book' },
  { icon: 'Zap', title: 'Ask Anything', description: 'P-Shot suitability, pricing, logistics, expected results — ask us anything' },
];

const faqs = [
  {
    question: 'What can I ask via WhatsApp consultation?',
    answer: 'You can ask absolutely anything related to P-Shot or ED treatment: whether you are a suitable candidate, how the procedure works, what results to expect, full pricing, what is included, how to get to Turkey, how to combine treatment with a trip, what aftercare involves, how to prepare, and anything else on your mind. Our team will give honest, expert answers.',
  },
  {
    question: 'How quickly do you respond to WhatsApp messages?',
    answer: 'During business hours (9am–7pm Turkey time, Monday to Saturday), we typically respond within 5–15 minutes. Outside these hours, we aim to respond within a few hours. We also read and respond to Sunday messages, though response times may be slightly longer. For urgent enquiries, sending a WhatsApp message is the fastest route to getting advice.',
  },
  {
    question: 'Is the WhatsApp consultation really free?',
    answer: 'Yes, completely. There is no charge for WhatsApp consultation, and there is no obligation to book treatment. Many men simply want to have their questions answered before deciding whether to proceed. We are happy to provide that information freely — it is part of our service.',
  },
  {
    question: 'What information should I have ready when I message?',
    answer: 'It helps to briefly mention your ED history (how long, how severe), any relevant medical conditions (diabetes, heart disease, hypertension), current medications (particularly blood thinners), and what you are hoping to achieve from treatment. This allows our team to give you the most accurate and personalised advice quickly.',
  },
  {
    question: 'Can I send photos or documents via WhatsApp?',
    answer: 'Yes. If you have relevant medical documents — previous blood tests, urology reports, or medication lists — you can share them via WhatsApp and our team will review them as part of your consultation. This can speed up the assessment process and result in more precise treatment recommendations.',
  },
];

export default function WhatsAppConsultationPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('WhatsApp P-Shot Consultation', 'Instant P-Shot advice via WhatsApp — free, confidential, expert response 7 days a week.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="WhatsApp Consultation – Instant P-Shot Expert Advice"
        subtitle="Message our P-Shot specialists directly on WhatsApp. Free, confidential, and available 7 days a week. Get your questions answered in minutes."
      />
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Message Us Now on WhatsApp</h2>
          <p className="text-slate-600 text-lg mb-8">Our P-Shot specialists are available right now. Message us with any question — suitability, pricing, logistics, or anything else. Free, confidential, no waiting.</p>
          <a
            href="https://wa.me/905353998999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-xl transition-colors shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.558 4.122 1.529 5.853L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.017-1.379l-.36-.214-3.755.984 1.004-3.648-.235-.374A9.775 9.775 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z"/>
            </svg>
            WhatsApp Us Now
          </a>
          <p className="text-slate-500 text-sm mt-4">Typical response time: under 15 minutes during business hours</p>
        </div>
      </section>
      <BenefitsSection benefits={benefits} heading="Why WhatsApp Consultation?" />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">What to Expect from Your WhatsApp Consultation</h2>
          <div className="text-slate-600 space-y-4">
            <p>When you message PShotTurkey on WhatsApp, you are connected directly with our patient coordination team — a group of experienced specialists who handle P-Shot enquiries daily. Your message will be read and responded to by someone who understands the treatment deeply and can give you accurate, personalised information based on your specific situation. We do not use generic FAQ responses or automated chatbots; every reply is from a real team member.</p>
            <p>A typical WhatsApp consultation covers your medical history and ED situation, an assessment of your suitability for P-Shot or shockwave therapy, honest expectations for your specific case, full pricing and package options, a practical overview of how treatment in Turkey works, and answers to any logistical questions about travel, accommodation, and aftercare. This level of information is typically enough for most men to make a confident, informed decision about whether to proceed.</p>
            <p>If you decide you want to discuss your case in more detail or prefer a video call, we can easily arrange that as a next step. Many patients, however, find that WhatsApp messaging alone gives them everything they need. The goal is always to give you the information you need, in the format that works best for you, without pressure or time constraints.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to get answers? Message us now.</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">Open WhatsApp Chat</a>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} heading="WhatsApp Consultation FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
