const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'We assess your case online — no obligation. Our specialists review your medical history and answer all your questions.',
  },
  {
    number: '02',
    title: 'Travel to Turkey',
    description: 'We help arrange your trip. Our patient coordinators assist with clinic scheduling, accommodation, and airport transfers.',
  },
  {
    number: '03',
    title: 'Treatment Day',
    description: 'Quick 45-minute procedure in a JCI-accredited clinic. Topical anaesthetic ensures your comfort throughout.',
  },
  {
    number: '04',
    title: 'Follow-up',
    description: 'Ongoing support from our team after you return home. We monitor your progress and guide you through recovery.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(step => (
            <div key={step.number} className="relative text-center">
              <div className="w-16 h-16 bg-blue-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
