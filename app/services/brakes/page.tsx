import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brake Repair & Service in Greenwell Springs | Brake Experts',
  description: 'Professional brake repair in Greenwell Springs, LA. Brake pad replacement, rotor service, ABS diagnostics. Safety is our priority.',
  keywords: 'brake repair Greenwell Springs, brake service Central LA, brake pads near me',
};

export default function BrakesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary-blue to-primary-blue-light text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Brake Repair & Service</h1>
          <p className="text-xl">Your Safety is Our Priority</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 mb-8">
            Your brakes are your vehicle's most critical safety system. At Tanksley Automotive, we provide comprehensive brake service to keep you and your family safe on the road.
          </p>

          <h2 className="text-3xl font-bold text-primary-blue mb-6">Brake Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">Brake Inspections</h3>
              <p className="text-gray-700">Complete brake system inspection including pads, rotors, calipers, and fluid.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">Brake Pad & Rotor Replacement</h3>
              <p className="text-gray-700">Quality brake pads and rotors installed to manufacturer specifications.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">Brake Fluid Service</h3>
              <p className="text-gray-700">Brake fluid flush and replacement to maintain proper brake function.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">ABS System Diagnostics</h3>
              <p className="text-gray-700">Anti-lock brake system diagnosis and repair for optimal stopping power.</p>
            </div>
          </div>

          <div className="bg-accent-red/10 border-l-4 border-accent-red p-6 mb-8">
            <h3 className="text-xl font-bold text-primary-blue mb-4">Warning Signs of Brake Problems</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Squealing or grinding noises when braking</li>
              <li>• Vibration or pulsing in brake pedal</li>
              <li>• Soft or spongy brake pedal</li>
              <li>• Vehicle pulls to one side when braking</li>
              <li>• Brake warning light illuminated</li>
              <li>• Longer stopping distances</li>
            </ul>
          </div>

          <div className="mt-12 text-center bg-primary-blue text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Don't Wait - Get Your Brakes Checked</h2>
            <p className="text-lg mb-6">Brake problems only get worse. Schedule your brake inspection today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule" className="btn-primary">Schedule Brake Inspection</Link>
              <a href="tel:+12255551234" className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">Call (225) 555-1234</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
