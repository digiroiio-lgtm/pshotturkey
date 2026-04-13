import { Star, BadgeCheck } from 'lucide-react';

const testimonials = [
  {
    name: 'James T.',
    country: 'United Kingdom',
    rating: 5,
    text: 'I was sceptical at first but the results have been remarkable. The team were professional, caring, and the whole experience exceeded expectations.',
  },
  {
    name: 'Michael R.',
    country: 'Germany',
    rating: 5,
    text: 'The cost savings compared to clinics in Germany were incredible. The quality of care was equally impressive. Highly recommend.',
  },
  {
    name: 'David S.',
    country: 'United Kingdom',
    rating: 5,
    text: 'From first contact to follow-up, PShotTurkey were fantastic. The procedure was quick and painless. I noticed improvements within weeks.',
  },
];

const certifications = [
  'JCI Accredited',
  'ISO 9001',
  'Turkish Ministry of Health Approved',
];

export default function TrustSection() {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Why Trust PShotTurkey?</h2>

        {/* Certification badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {certifications.map(cert => (
            <div key={cert} className="flex items-center gap-2 bg-white border border-blue-200 text-blue-800 px-5 py-2 rounded-full shadow-sm font-semibold text-sm">
              <BadgeCheck size={18} />
              {cert}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <h3 className="text-2xl font-semibold text-slate-800 text-center mb-8">Patient Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-4 italic">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-semibold text-slate-800">{t.name}</p>
                <p className="text-slate-500 text-sm">{t.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
