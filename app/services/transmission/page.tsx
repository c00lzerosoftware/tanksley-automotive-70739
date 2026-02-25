import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expert Transmission Repair in Greenwell Springs | Jasper Certified',
  description: 'Jasper certified transmission repair and replacement in Greenwell Springs, LA. 3-year/100,000-mile warranty. Professional diagnostics and quality service.',
  keywords: 'transmission repair Greenwell Springs, transmission replacement Central LA, Jasper certified transmission Louisiana',
};

export default function TransmissionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-blue-light text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Expert Transmission Repair in Greenwell Springs
          </h1>
          <div className="inline-block bg-gold text-primary-blue-dark px-6 py-3 rounded-full font-bold text-lg mb-4">
            Jasper Certified Installation Facility
          </div>
          <p className="text-xl">
            3-Year / 100,000-Mile Warranty on Most Installations
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              At Tanksley Automotive, we've been providing expert transmission repair and replacement in Greenwell Springs since 1996. As a Jasper Certified Installation Facility, we have the expertise, equipment, and warranty backing to handle any transmission issue, from minor repairs to complete replacements.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Whether your transmission is slipping, making strange noises, or refusing to shift properly, our experienced technicians can diagnose and repair the issue quickly and affordably—without the dealership premium pricing.
            </p>

            <div className="bg-primary-blue/5 border-l-4 border-primary-blue p-6 mb-8">
              <h2 className="text-2xl font-bold text-primary-blue mb-4">What is Jasper Certification?</h2>
              <p className="text-gray-700 mb-4">
                Jasper Engines & Transmissions is the nation's leader in remanufactured products. As a Jasper Certified shop, Tanksley Automotive meets their strict standards for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Professional installation techniques</li>
                <li>Quality workmanship standards</li>
                <li>Proper diagnostic equipment and expertise</li>
                <li>Customer satisfaction commitment</li>
              </ul>
              <p className="text-gray-700 mt-4">
                This certification allows us to offer industry-leading warranties: <strong>3 years / 100,000 miles</strong> on most transmission installations.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary-blue mb-6">Our Transmission Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary-blue mb-3">Transmission Diagnostics</h3>
                <p className="text-gray-700">
                  Computer diagnostics and road testing to accurately identify transmission issues before recommending repairs.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary-blue mb-3">Full Transmission Rebuilds</h3>
                <p className="text-gray-700">
                  Complete transmission overhaul when repairable, restoring performance and reliability at lower cost than replacement.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary-blue mb-3">Transmission Replacement</h3>
                <p className="text-gray-700">
                  Jasper certified remanufactured transmission installation with 3-year/100,000-mile warranty coverage.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary-blue mb-3">Transmission Fluid Service</h3>
                <p className="text-gray-700">
                  Fluid flushes, filter changes, and fluid level checks to maintain transmission health and prevent problems.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary-blue mb-4">Signs Your Transmission Needs Service</h2>
            <div className="bg-accent-red/5 border border-accent-red/20 rounded-lg p-6 mb-8">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Slipping gears or delayed engagement</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Strange noises (whining, clunking, or humming)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Burning smell or transmission fluid leaks</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Check engine light or transmission warning light</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Rough or hesitant shifting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Transmission refuses to go into gear</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-blue mb-4">Why Choose Tanksley for Transmission Work?</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-primary-blue mb-1">Jasper Certification</h3>
                  <p className="text-gray-700">Only certified shops can offer Jasper's industry-leading warranty coverage.</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-primary-blue mb-1">29 Years of Experience</h3>
                  <p className="text-gray-700">Nearly three decades of transmission diagnostics, repair, and installation expertise.</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-primary-blue mb-1">Fair Pricing</h3>
                  <p className="text-gray-700">Dealership quality without dealership markups. We typically save customers 40-50% compared to dealer prices.</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-primary-blue mb-1">Honest Diagnostics</h3>
                  <p className="text-gray-700">We'll tell you if a repair can fix your issue before recommending a full replacement.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 rounded-lg p-8 mt-12">
            <h2 className="text-3xl font-bold text-primary-blue mb-6">Common Transmission Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-primary-blue mb-2">How long does a transmission repair take?</h3>
                <p className="text-gray-700">
                  Simple repairs like fluid changes can be done same-day. Transmission rebuilds typically take 2-4 days. Full replacements usually take 1-2 days depending on parts availability.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary-blue mb-2">Should I repair or replace my transmission?</h3>
                <p className="text-gray-700">
                  It depends on the extent of damage and age of your vehicle. We'll provide an honest assessment and cost comparison so you can make an informed decision.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary-blue mb-2">How much does transmission repair cost?</h3>
                <p className="text-gray-700">
                  Costs vary widely based on the issue. Minor repairs can start around $200-500, while full replacements typically range from $2,000-4,000—significantly less than dealership pricing of $5,000-7,000.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary-blue mb-2">What's covered under the Jasper warranty?</h3>
                <p className="text-gray-700">
                  Jasper's warranty covers parts and labor for 3 years or 100,000 miles on most transmission installations, transferable to subsequent owners, and honored nationwide at any Jasper facility.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-primary-blue text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Need Transmission Service?</h2>
            <p className="text-lg mb-6">
              Schedule your transmission inspection today. We'll diagnose the issue and provide an honest estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule" className="btn-primary">
                Schedule Transmission Inspection
              </Link>
              <a href="tel:+12252613866" className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Call (225) 261-3866
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
