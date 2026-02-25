import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Tanksley Automotive | Family Owned Since 1996',
  description: 'Learn about Tanksley Automotive - family owned auto repair in Greenwell Springs since 1996. Jasper certified, A+ BBB rated, trusted by the community for 29 years.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary-blue to-primary-blue-light text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Tanksley Automotive</h1>
          <p className="text-xl">Family Owned, Community Trusted Since 1996</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-blue mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 mb-6">
            Since 1996, Tanksley Automotive has been serving the Greenwell Springs and Central Louisiana communities with honest, professional auto repair services. What started as a small family business has grown into a trusted name in automotive service, but we've never forgotten our roots.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Today, Joey and Joshua Tanksley continue the tradition of quality service, fair pricing, and personal attention that has defined our shop for nearly three decades. We're proud to be your neighbors and honored to be your trusted auto repair professionals.
          </p>

          <h2 className="text-3xl font-bold text-primary-blue mb-6">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-primary-blue mb-2">Joey Tanksley</h3>
              <p className="text-accent-red font-semibold mb-4">Owner</p>
              <p className="text-gray-700">
                With 29 years of experience, Joey has built Tanksley Automotive on principles of honesty, quality workmanship, and customer satisfaction. His expertise in transmission repair and diagnostics is matched only by his commitment to the community.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-primary-blue mb-2">Joshua Tanksley</h3>
              <p className="text-accent-red font-semibold mb-4">Assistant</p>
              <p className="text-gray-700">
                Joshua brings modern technical knowledge and a passion for automotive service to the family business. Together with Joey, he ensures every customer receives the expert care and attention Tanksley Automotive is known for.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary-blue mb-6">Our Certifications & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-accent-red text-4xl font-bold mb-2">29</div>
              <h3 className="text-lg font-semibold text-primary-blue">Years in Business</h3>
              <p className="text-gray-600 mt-2">Serving Greenwell Springs since 1996</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-gold text-4xl font-bold mb-2">A+</div>
              <h3 className="text-lg font-semibold text-primary-blue">BBB Rating</h3>
              <p className="text-gray-600 mt-2">Accredited since 2008</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-accent-red text-2xl font-bold mb-2">Jasper</div>
              <h3 className="text-lg font-semibold text-primary-blue">Certified</h3>
              <p className="text-gray-600 mt-2">3yr/100k mile warranty</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary-blue mb-6">Our Values</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <svg className="w-8 h-8 text-gold mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-primary-blue mb-2">Honesty & Integrity</h3>
                <p className="text-gray-700">We'll never recommend service you don't need. Our reputation is built on honest diagnostics and fair pricing.</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-8 h-8 text-gold mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-primary-blue mb-2">Quality Workmanship</h3>
                <p className="text-gray-700">Every repair meets our high standards. We use quality parts and stand behind our work with solid warranties.</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-8 h-8 text-gold mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-primary-blue mb-2">Customer Service</h3>
                <p className="text-gray-700">Your satisfaction is our priority. We treat every customer like family and every vehicle like our own.</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-8 h-8 text-gold mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-primary-blue mb-2">Community Focus</h3>
                <p className="text-gray-700">We're part of this community. Your trust and our reputation mean everything to us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
