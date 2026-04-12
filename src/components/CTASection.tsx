export default function CTASection() {
  return (
    <section className="py-16 px-4 bg-blue-900 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to Reclaim Your Confidence?</h2>
        <p className="text-blue-100 text-lg mb-8">
          Join 500+ men who have transformed their sexual health with P-Shot treatment in Turkey. 
          Free consultation available — no obligation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            Check Your Eligibility
          </a>
          <a
            href="https://wa.me/905391234567"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            WhatsApp Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
