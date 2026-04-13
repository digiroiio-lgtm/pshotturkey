import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'PShotTurkey terms of service — the terms and conditions governing use of our website and services.',
};

export default function TermsPage() {
  return (
    <div className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">Terms of Service</h1>
        <p className="text-slate-500 mb-8">Last updated: 1 January 2024</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using the PShotTurkey website (pshotturkey.com), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.</p>

        <h2>2. Nature of Services</h2>
        <p>PShotTurkey is a medical tourism facilitation service. We connect international patients with qualified medical clinics and specialists in Turkey for P-Shot (PRP) treatment and related sexual health procedures. We are not a medical provider ourselves.</p>

        <h2>3. Medical Disclaimer</h2>
        <p>The information provided on this website is for informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare professional before making decisions about medical treatment. Individual results from P-Shot and related treatments vary. We do not guarantee specific outcomes.</p>

        <h2>4. Eligibility</h2>
        <p>You must be at least 18 years of age to use our services. By using this website, you confirm you are of legal age. Medical treatment is only available to those deemed medically suitable by our partner clinics&apos; medical teams.</p>

        <h2>5. Consultations</h2>
        <p>Initial consultations provided by PShotTurkey are complimentary and without obligation. A consultation does not constitute a diagnosis or a treatment recommendation. Final medical decisions are made by our partner clinics&apos; licensed medical professionals.</p>

        <h2>6. Bookings and Payments</h2>
        <p>Treatment bookings are subject to availability and confirmation by our partner clinics. Pricing quoted on this website is indicative and subject to change. Final pricing is confirmed at the time of booking. Cancellation and refund policies are outlined in individual booking agreements.</p>

        <h2>7. Travel and Accommodation</h2>
        <p>Patients are responsible for arranging and funding their own travel and accommodation, unless explicitly included in a package arrangement with PShotTurkey. We provide recommendations and assistance but accept no liability for third-party travel or accommodation services.</p>

        <h2>8. Limitation of Liability</h2>
        <p>PShotTurkey acts as a facilitator between patients and independent medical providers. We are not liable for medical outcomes, complications, or any damages arising from treatment received at partner clinics. Our liability is limited to the facilitation fee paid to PShotTurkey, where applicable.</p>

        <h2>9. Intellectual Property</h2>
        <p>All content on this website — including text, images, logos, and design — is owned by or licensed to PShotTurkey. Reproduction or distribution without written permission is prohibited.</p>

        <h2>10. Privacy</h2>
        <p>Your use of this website is also governed by our <a href="/privacy-policy">Privacy Policy</a>, which is incorporated into these terms by reference.</p>

        <h2>11. Governing Law</h2>
        <p>These terms are governed by the laws of the Republic of Turkey and, where applicable, the laws of England and Wales. Any disputes will be subject to the jurisdiction of the courts of Istanbul, Turkey.</p>

        <h2>12. Changes to Terms</h2>
        <p>We reserve the right to update these terms at any time. Continued use of the website after changes constitutes acceptance of the updated terms.</p>

        <h2>13. Contact</h2>
        <p>For enquiries about these terms, contact us via WhatsApp: <a href="https://wa.me/905353998999">+90 535 399 8999</a></p>
      </div>
    </div>
  );
}
