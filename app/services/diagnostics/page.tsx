import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engine Diagnostics & Check Engine Light | Greenwell Springs Auto Repair',
  description: 'Professional engine diagnostics and check engine light service in Greenwell Springs, LA. Computer diagnostics and performance analysis.',
  keywords: 'check engine light Greenwell Springs, car diagnostics Central LA, engine problems near me',
};

export default function DiagnosticsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary-blue to-primary-blue-light text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Engine Diagnostics</h1>
          <p className="text-xl">Check Engine Light? We Can Help</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 mb-8">
            Modern vehicles rely on complex computer systems. When your check engine light comes on, you need professional diagnostic equipment and experienced technicians to accurately identify the problem.
          </p>

          <h2 className="text-3xl font-bold text-primary-blue mb-6">Diagnostic Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">Computer Diagnostics</h3>
              <p className="text-gray-700">Professional scan tools to read trouble codes and identify issues.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">Check Engine Light Diagnosis</h3>
              <p className="text-gray-700">Accurate diagnosis of warning light causes, not just code reading.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">Emission Testing</h3>
              <p className="text-gray-700">Emission system diagnosis and repair to pass inspections.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-blue mb-3">Performance Analysis</h3>
              <p className="text-gray-700">Engine performance testing to identify power loss or running issues.</p>
            </div>
          </div>

          <div className="bg-primary-blue/5 border-l-4 border-primary-blue p-6 mb-8">
            <h3 className="text-xl font-bold text-primary-blue mb-4">Common Check Engine Light Causes</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Oxygen sensor failure</li>
              <li>• Loose or faulty gas cap</li>
              <li>• Catalytic converter issues</li>
              <li>• Mass airflow sensor problems</li>
              <li>• Spark plug or ignition coil failure</li>
              <li>• Emission system leaks</li>
            </ul>
          </div>

          <div className="mt-12 text-center bg-primary-blue text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Check Engine Light On?</h2>
            <p className="text-lg mb-6">Don't ignore it. Get accurate diagnostics today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule" className="btn-primary">Schedule Diagnostic Scan</Link>
              <a href="tel:+12252613866" className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">Call (225) 261-3866</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
