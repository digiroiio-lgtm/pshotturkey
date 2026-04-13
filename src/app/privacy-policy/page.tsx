import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'PShotTurkey privacy policy — how we collect, use, and protect your personal data in accordance with GDPR.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last updated: 1 January 2024</p>

        <h2>1. Introduction</h2>
        <p>PShotTurkey (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your personal data and respecting your privacy. This privacy policy explains how we collect, use, store, and protect your personal information when you use our website (pshotturkey.com) or enquire about our services.</p>
        <p>This policy complies with the UK General Data Protection Regulation (UK GDPR), the EU General Data Protection Regulation (EU GDPR), and the Data Protection Act 2018.</p>

        <h2>2. Data We Collect</h2>
        <p>We may collect the following types of personal data:</p>
        <ul>
          <li><strong>Contact information:</strong> name, email address, phone number, WhatsApp number</li>
          <li><strong>Medical information:</strong> information about your health condition that you voluntarily share during consultation</li>
          <li><strong>Location data:</strong> country of residence</li>
          <li><strong>Technical data:</strong> IP address, browser type, pages visited (via cookies and analytics)</li>
          <li><strong>Communication data:</strong> records of correspondence with our team</li>
        </ul>

        <h2>3. How We Use Your Data</h2>
        <p>We use your personal data to:</p>
        <ul>
          <li>Respond to your enquiries and provide consultation services</li>
          <li>Arrange and coordinate medical treatment</li>
          <li>Send you relevant information about our services (with your consent)</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>4. Legal Basis for Processing</h2>
        <p>We process your personal data under the following legal bases:</p>
        <ul>
          <li><strong>Consent:</strong> when you submit a contact form or sign up for communications</li>
          <li><strong>Legitimate interests:</strong> to provide and improve our services</li>
          <li><strong>Contract:</strong> when processing is necessary for a treatment booking</li>
          <li><strong>Legal obligation:</strong> when required by law</li>
        </ul>

        <h2>5. Data Retention</h2>
        <p>We retain personal data only for as long as necessary. Contact enquiries are retained for 2 years. Medical consultation data is retained for 7 years in accordance with healthcare regulations. You can request deletion at any time.</p>

        <h2>6. Data Sharing</h2>
        <p>We do not sell your personal data. We may share data with:</p>
        <ul>
          <li>Our partner clinics in Turkey (for treatment coordination)</li>
          <li>Service providers (hosting, email, analytics) under strict data processing agreements</li>
          <li>Law enforcement agencies when required by law</li>
        </ul>

        <h2>7. Cookies</h2>
        <p>Our website uses cookies for functionality and analytics. You can control cookie usage through the cookie banner on our website. Essential cookies cannot be disabled as they are required for the site to function.</p>

        <h2>8. Your Rights</h2>
        <p>Under GDPR, you have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion (&ldquo;right to be forgotten&rdquo;)</li>
          <li>Restrict or object to processing</li>
          <li>Data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>To exercise these rights, contact us via WhatsApp at +90 539 123 4567.</p>

        <h2>9. Security</h2>
        <p>We implement appropriate technical and organisational measures to protect your data against unauthorised access, disclosure, alteration, or destruction. Our website uses SSL encryption for all data transmission.</p>

        <h2>10. Changes to This Policy</h2>
        <p>We may update this privacy policy from time to time. Significant changes will be notified on our website. Continued use of our website after changes constitutes acceptance of the updated policy.</p>

        <h2>11. Contact</h2>
        <p>For privacy-related enquiries, contact us via WhatsApp: <a href="https://wa.me/905353998999">+90 535 399 8999</a></p>
      </div>
    </div>
  );
}
