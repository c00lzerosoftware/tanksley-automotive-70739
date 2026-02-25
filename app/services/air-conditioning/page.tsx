import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auto A/C Repair in Greenwell Springs | Air Conditioning Service',
  description: 'Professional auto air conditioning repair in Greenwell Springs, LA. A/C diagnostics, refrigerant service, compressor repair. Stay cool in Louisiana heat!',
  keywords: 'car AC repair Greenwell Springs, auto air conditioning Central LA, AC repair near me',
};

export default function AirConditioningPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary-blue to-primary-blue-light text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Auto A/C Repair in Greenwell Springs</h1>
          <p className="text-xl">Stay Cool in Louisiana Heat - Expert Climate Control Service</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 mb-6">
            Louisiana summers demand a properly functioning air conditioning system. At Tanksley Automotive, we specialize in diagnosing and repairing automotive A/C systems to keep you comfortable year-round.
          </p>

          <h2 className="text-3xl font-bold text-primary-blue mb-6">Our A/C Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">A/C Diagnostics</h3>
              <p className="text-gray-700">Complete system diagnosis to identify leaks, pressure issues, and component failures.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">Refrigerant Recharge</h3>
              <p className="text-gray-700">Proper refrigerant recovery, evacuation, and recharge to manufacturer specifications.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">Compressor Repair & Replacement</h3>
              <p className="text-gray-700">Expert compressor diagnosis and replacement when needed.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">Leak Detection & Repair</h3>
              <p className="text-gray-700">Advanced leak detection and professional repair of A/C system leaks.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary-blue mb-4">Signs You Need A/C Service</h2>
          <div className="bg-accent-red/5 border border-accent-red/20 rounded-lg p-6 mb-8">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center"><svg className="w-5 h-5 text-accent-red mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Air blowing warm instead of cold</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-accent-red mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Weak airflow from vents</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-accent-red mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Strange noises when A/C is running</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-accent-red mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Bad odors from ventilation system</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-accent-red mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Water leaks inside vehicle</li>
            </ul>
          </div>

          <div className="mt-12 text-center bg-primary-blue text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Beat the Heat - Get Your A/C Fixed</h2>
            <p className="text-lg mb-6">Don't suffer through another Louisiana summer. Schedule your A/C service today!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule" className="btn-primary">Schedule A/C Service</Link>
              <a href="tel:+12252613866" className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">Call (225) 261-3866</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
