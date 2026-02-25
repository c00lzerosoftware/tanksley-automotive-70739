import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'General Auto Maintenance Services | Greenwell Springs Oil Change & Service',
  description: 'Preventative auto maintenance in Greenwell Springs, LA. Oil changes, fluid services, filter replacements, scheduled maintenance.',
  keywords: 'car maintenance Greenwell Springs, oil change Central LA, auto service near me',
};

export default function MaintenancePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary-blue to-primary-blue-light text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">General Maintenance</h1>
          <p className="text-xl">Keep Your Vehicle Running Strong</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 mb-8">
            Regular preventative maintenance is the key to reliable transportation and avoiding costly repairs. Tanksley Automotive provides comprehensive maintenance services to keep your vehicle in peak condition.
          </p>

          <h2 className="text-3xl font-bold text-primary-blue mb-6">Maintenance Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">Oil Changes</h3>
              <p className="text-gray-700">Regular oil and filter changes with conventional or synthetic oil.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">Fluid Services</h3>
              <p className="text-gray-700">Coolant, transmission, brake, and power steering fluid services.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">Filter Replacements</h3>
              <p className="text-gray-700">Air filters, cabin filters, fuel filters, and oil filters.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">Multi-Point Inspections</h3>
              <p className="text-gray-700">Comprehensive vehicle inspection to catch issues early.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">Scheduled Maintenance</h3>
              <p className="text-gray-700">Follow manufacturer maintenance schedules to preserve warranty.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">Battery Service</h3>
              <p className="text-gray-700">Battery testing, cleaning, and replacement when needed.</p>
            </div>
          </div>

          <div className="bg-primary-blue/5 border-l-4 border-primary-blue p-6 mb-8">
            <h3 className="text-xl font-bold text-primary-blue mb-4">Recommended Maintenance Schedule</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Every 3,000-5,000 miles:</strong> Oil and filter change</li>
              <li><strong>Every 6 months:</strong> Tire rotation and inspection</li>
              <li><strong>Every 12,000 miles:</strong> Air filter replacement</li>
              <li><strong>Every 30,000 miles:</strong> Transmission fluid service</li>
              <li><strong>Every 50,000 miles:</strong> Coolant flush</li>
              <li><strong>Annually:</strong> Multi-point inspection</li>
            </ul>
          </div>

          <div className="mt-12 text-center bg-primary-blue text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Schedule Your Maintenance</h2>
            <p className="text-lg mb-6">Don't wait for problems. Keep your vehicle maintained.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule" className="btn-primary">Schedule Maintenance</Link>
              <a href="tel:+12252613866" className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">Call (225) 261-3866</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
