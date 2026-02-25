import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Suspension Repair & Wheel Alignment | Greenwell Springs Auto Service',
  description: 'Professional suspension repair and wheel alignment in Greenwell Springs, LA. Front-end alignment, shock replacement, steering service.',
  keywords: 'wheel alignment Greenwell Springs, suspension repair Central LA, front end alignment near me',
};

export default function SuspensionPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary-blue to-primary-blue-light text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Suspension & Alignment</h1>
          <p className="text-xl">Smooth Ride, Safe Handling</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 mb-8">
            Your suspension system keeps you comfortable and in control. At Tanksley Automotive, we provide expert suspension repair and precise wheel alignment services.
          </p>

          <h2 className="text-3xl font-bold text-primary-blue mb-6">Suspension Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">Wheel Alignment</h3>
              <p className="text-gray-700">Precision alignment to prevent uneven tire wear and improve handling.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">Shock & Strut Replacement</h3>
              <p className="text-gray-700">Quality shock absorber and strut installation for smooth riding.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">Steering System Repair</h3>
              <p className="text-gray-700">Power steering and steering component diagnosis and repair.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">Suspension Diagnostics</h3>
              <p className="text-gray-700">Complete inspection to identify worn or damaged suspension components.</p>
            </div>
          </div>

          <div className="bg-accent-red/10 border-l-4 border-accent-red p-6 mb-8">
            <h3 className="text-xl font-bold text-primary-blue mb-4">Signs of Suspension Problems</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Vehicle pulls to one side</li>
              <li>• Uneven or rapid tire wear</li>
              <li>• Rough or bumpy ride</li>
              <li>• Steering wheel vibration</li>
              <li>• Nose dives when braking</li>
              <li>• Bottoming out over bumps</li>
            </ul>
          </div>

          <div className="mt-12 text-center bg-primary-blue text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Need Suspension Service?</h2>
            <p className="text-lg mb-6">Get your alignment checked and suspension inspected today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule" className="btn-primary">Schedule Alignment Service</Link>
              <a href="tel:+12255551234" className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">Call (225) 555-1234</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
