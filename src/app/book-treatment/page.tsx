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
  title: 'Book P-Shot Turkey | Book Your P-Shot Treatment Today',
  description:
    'Ready to book your P-Shot treatment in Turkey? Message us on WhatsApp to check availability, confirm your dates, and secure your booking from £350.',
};

const benefits = [
  { icon: 'Zap', title: 'Fast Booking Process', description: 'From first contact to confirmed appointment in as little as 48 hours' },
  { icon: 'ShieldCheck', title: 'Secure Your Dates', description: 'A small deposit holds your appointment — no risk of losing your preferred slot' },
  { icon: 'Heart', title: 'Flexible Scheduling', description: 'We work around your availability — weekday and weekend appointments available' },
  { icon: 'TrendingDown', title: 'From £350 All-In', description: 'Full treatment package including consultation, procedure, and 12-month aftercare' },
  { icon: 'MapPin', title: 'Transfer Included', description: 'Airport-to-clinic transfer arranged as part of your booking' },
  { icon: 'Star', title: 'Dedicated Coordinator', description: 'A personal patient coordinator manages your entire booking and trip' },
];

const faqs = [
  {
    question: 'How do I book P-Shot treatment in Turkey?',
    answer: 'The booking process is simple. Message PShotTurkey on WhatsApp, have your free consultation, choose your preferred treatment dates, and pay a small deposit to confirm. We then coordinate your clinic appointment, provide accommodation recommendations, and arrange your airport-to-clinic transfer. The entire process from first contact to confirmed booking typically takes 24–48 hours.',
  },
  {
    question: 'How far in advance do I need to book?',
    answer: 'Appointments are typically available within 1–2 weeks. If you have specific dates in mind — for example, to coincide with a flight you\'ve already booked — message us and we will check availability immediately. For patients with flexible dates, we can usually find a suitable slot very quickly.',
  },
  {
    question: 'What deposit is required to secure my booking?',
    answer: 'A small deposit is required to hold your clinic appointment. The exact amount is confirmed during your consultation and is fully deductible from your total treatment cost. The balance is payable before your procedure at the clinic. We accept GBP, EUR, and USD by bank transfer or card.',
  },
  {
    question: 'Can I cancel or reschedule my booking?',
    answer: 'Yes. We understand that plans change. If you need to reschedule, we will do our best to find alternative dates that work for you. Our cancellation policy is explained clearly at the time of booking. We aim to be as flexible as possible — we want every patient to feel confident and in control of their treatment journey.',
  },
  {
    question: 'What do I need to bring to my appointment?',
    answer: 'You will need a valid passport or ID, any relevant medical records (particularly if you have complex medical history or are on medications), and comfortable clothing. We will send you a full pre-treatment guide after your booking is confirmed, covering everything from what to eat beforehand to medications to avoid in the days before your procedure.',
  },
];

export default function BookTreatmentPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getMedicalProcedureSchema('Book P-Shot Turkey', 'Book P-Shot treatment in Turkey — simple process, fast appointments, from £350.'),
        getFAQSchema(faqs),
      ]} />
      <HeroSection
        title="Book Your P-Shot Treatment in Turkey"
        subtitle="Booking is simple. Message us on WhatsApp, confirm your dates, and we handle the rest — treatment, transfers, and all logistics."
      />
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">How to Book Your P-Shot Treatment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { step: '1', title: 'WhatsApp Us', desc: 'Message our team to start the process. We respond quickly and guide you through every step.' },
              { step: '2', title: 'Free Consultation', desc: 'A specialist assesses your suitability and recommends the optimal treatment for your situation.' },
              { step: '3', title: 'Confirm Dates', desc: 'Choose your preferred travel dates. We check clinic availability and secure your appointment slot.' },
              { step: '4', title: 'Travel & Treat', desc: 'Fly to Turkey, receive your treatment, and return home with 12 months of remote aftercare support.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">{step}</div>
                <h3 className="font-bold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-slate-600 space-y-4">
            <p>Booking P-Shot treatment in Turkey with PShotTurkey is designed to be as straightforward as possible. We know that men seeking ED treatment are often dealing with a sensitive and personal issue, and our process reflects that — no unnecessary form-filling, no long waiting times, and no feeling of being processed through a system. From your first WhatsApp message to your confirmed appointment, you will have a direct line to a real person who understands your situation and is committed to making the process easy.</p>
            <p>Once your appointment is confirmed, we provide everything you need to prepare: a pre-treatment guide, accommodation recommendations near the clinic, transfer logistics from the airport, and a clear schedule for your visit. On the day of treatment, you will be met by an English-speaking coordinator at the clinic and guided through every step. After your return home, your 12-month aftercare support begins — with WhatsApp, email, and video call access to our clinical team whenever you need it.</p>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
            <p className="font-semibold text-slate-800 mb-3">Ready to book? Message us now on WhatsApp</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">Book via WhatsApp</a>
          </div>
        </div>
      </section>
      <BenefitsSection benefits={benefits} heading="Why Book with PShotTurkey?" />
      <FAQSection faqs={faqs} heading="Booking FAQs" />
      <TrustSection />
      <CTASection />
      <LeadForm />
    </>
  );
}
