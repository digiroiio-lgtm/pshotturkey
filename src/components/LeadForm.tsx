'use client';
import { useState, FormEvent } from 'react';

const countries = [
  'United Kingdom', 'United States', 'Germany', 'France', 'Netherlands',
  'Belgium', 'Sweden', 'Norway', 'Denmark', 'Switzerland', 'Austria',
  'Ireland', 'Australia', 'Canada', 'Other',
];

interface FormData {
  name: string;
  country: string;
  age: string;
  condition: string;
  whatsapp: string;
}

export default function LeadForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    country: '',
    age: '',
    condition: '',
    whatsapp: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Analytics placeholder — replace with API call before production
    console.log('Lead form submission:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 px-4 bg-blue-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-3">Check Your Eligibility</h2>
        <p className="text-slate-600 text-center mb-8">
          Fill in your details and our specialists will assess your case and get back to you within 24 hours — completely free.
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
            <div className="text-4xl mb-3">✓</div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Thank you! We received your enquiry.</h3>
            <p className="text-green-700">Our team will contact you within 24 hours. You can also reach us directly on WhatsApp.</p>
            <a
              href="https://wa.me/905391234567"
              className="inline-block mt-4 bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-500 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="name">Full Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="country">Country *</label>
              <select
                id="country"
                name="country"
                required
                value={form.country}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800 bg-white"
              >
                <option value="">Select your country</option>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="age">Age *</label>
              <input
                id="age"
                name="age"
                type="number"
                required
                min={18}
                max={90}
                value={form.age}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
                placeholder="Your age"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="condition">Describe Your Condition</label>
              <input
                id="condition"
                name="condition"
                type="text"
                value={form.condition}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
                placeholder="e.g. Mild ED, sensitivity issues, Peyronie's disease"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="whatsapp">WhatsApp Number *</label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                required
                value={form.whatsapp}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
                placeholder="+44 7700 000000"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white font-bold py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors"
            >
              Check Your Eligibility
            </button>

            <p className="text-xs text-slate-400 text-center">
              By submitting this form, you agree to our{' '}
              <a href="/privacy-policy" className="underline hover:text-blue-600">Privacy Policy</a>.
              Your data will never be shared with third parties.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
