import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ | Tanksley Automotive Frequently Asked Questions',
  description: 'Common questions about auto repair, pricing, warranties, and services at Tanksley Automotive in Greenwell Springs, LA.',
};

export default function FAQPage() {
  const faqs = [
    {
      category: "About Our Services",
      questions: [
        { q: "What services do you offer?", a: "We provide comprehensive auto repair including transmission service, A/C repair, brake service, engine diagnostics, suspension & alignment, and general maintenance. See our Services page for complete details." },
        { q: "Do you work on all makes and models?", a: "Yes! We service all domestic and import vehicles including cars, trucks, and SUVs." },
        { q: "What is Jasper certification?", a: "Jasper certification means we meet strict standards for installation of Jasper remanufactured transmissions and engines. This allows us to offer 3-year/100,000-mile warranties on most installations." },
        { q: "Do you offer warranties on repairs?", a: "Yes! We warranty our workmanship and Jasper-certified installations come with 3-year/100,000-mile coverage. Warranty details vary by service." },
      ]
    },
    {
      category: "Pricing & Payment",
      questions: [
        { q: "How much do repairs cost?", a: "Costs vary based on the service needed and your vehicle. We provide free estimates before starting any work so you know the cost upfront." },
        { q: "Do you offer free estimates?", a: "Yes! We provide honest, detailed estimates at no charge." },
        { q: "What payment methods do you accept?", a: "We accept cash, checks, and major credit/debit cards." },
        { q: "Are your prices lower than dealerships?", a: "Yes! We typically save customers 40-50% compared to dealership pricing while maintaining quality standards." },
      ]
    },
    {
      category: "Scheduling & Logistics",
      questions: [
        { q: "What are your business hours?", a: "Monday through Friday, 8:00 AM - 5:00 PM. We're closed weekends." },
        { q: "Do I need an appointment?", a: "Appointments are recommended to ensure we can serve you promptly, but we also welcome walk-ins based on availability." },
        { q: "Do you offer same-day service?", a: "For many services, yes! Call us in the morning and we'll let you know if same-day service is available for your needs." },
        { q: "How long do repairs typically take?", a: "Simple services like oil changes take 30-60 minutes. More complex repairs may take 1-3 days depending on parts availability and scope of work." },
      ]
    },
    {
      category: "About Your Vehicle",
      questions: [
        { q: "How often should I service my car?", a: "Oil changes every 3,000-5,000 miles, tire rotations every 6,000 miles, and follow your manufacturer's recommended maintenance schedule." },
        { q: "What does the check engine light mean?", a: "The check engine light indicates your vehicle's computer detected an issue. We perform professional diagnostics to identify the exact problem." },
        { q: "Why is my transmission slipping?", a: "Transmission slipping can be caused by low fluid, worn clutches, or internal damage. We'll diagnose the exact cause and recommend repair or replacement." },
        { q: "When should I replace my brakes?", a: "Replace brake pads when they're worn to 3mm or less, or if you notice squealing, grinding, or reduced braking performance." },
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary-blue to-primary-blue-light text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl">Get Answers to Common Auto Repair Questions</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-3xl font-bold text-primary-blue mb-6">{category.category}</h2>
              <div className="space-y-6">
                {category.questions.map((faq, qIdx) => (
                  <div key={qIdx} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-primary-blue mb-3">{faq.q}</h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-12 bg-primary-blue text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg mb-6">Give us a call or schedule an appointment. We're happy to answer any questions you have!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12252613866" className="bg-gold text-primary-blue-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-light transition-colors">
                Call (225) 261-3866
              </a>
              <Link href="/contact" className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
