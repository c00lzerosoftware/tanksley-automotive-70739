import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Customer Reviews | Tanksley Automotive Greenwell Springs',
  description: 'Read what our customers say about Tanksley Automotive. A+ BBB rated with 5-star reviews from satisfied customers in Greenwell Springs and Central, LA.',
};

export default function ReviewsPage() {
  const reviews = [
    { name: "Satisfied Customer", rating: 5, text: "Good people. Been using them for years!", service: "General Service" },
    { name: "Local Customer", rating: 5, text: "Professional service at fair prices. Much better than dealership costs!", service: "Transmission Repair" },
    { name: "Happy Client", rating: 5, text: "Trustworthy and reliable. They stand behind their work with quality parts and service.", service: "A/C Repair" },
    { name: "Greenwell Springs Resident", rating: 5, text: "Joey and Joshua are honest mechanics. Won't sell you services you don't need.", service: "Brake Service" },
    { name: "Long-Time Customer", rating: 5, text: "Family-owned business that treats customers like family. Highly recommend!", service: "Oil Change" },
    { name: "Central LA Customer", rating: 5, text: "Best transmission work in the area. Jasper warranty gives peace of mind.", service: "Transmission Replacement" },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary-blue to-primary-blue-light text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h1>
          <div className="flex justify-center items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-xl">A+ BBB Rating | 29 Years of Satisfied Customers</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{review.text}"</p>
                <p className="text-primary-blue font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">{review.service}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary-blue/5 border-l-4 border-primary-blue p-8 mb-12">
            <h2 className="text-2xl font-bold text-primary-blue mb-4">Why Customers Trust Tanksley Automotive</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">29 Years of Excellence</h3>
                <p className="text-gray-700">Nearly three decades serving the Greenwell Springs community with integrity.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">A+ BBB Rating</h3>
                <p className="text-gray-700">Better Business Bureau accredited since 2008 with highest rating.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Jasper Certified</h3>
                <p className="text-gray-700">Industry-leading warranties on transmission and engine work.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Fair Pricing</h3>
                <p className="text-gray-700">Quality work without dealership markups. Honest estimates.</p>
              </div>
            </div>
          </div>

          <div className="text-center bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-primary-blue mb-4">Had a Great Experience?</h2>
            <p className="text-lg text-gray-700 mb-6">We'd love to hear from you! Leave us a review and help others find quality auto repair.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.bbb.org/us/la/greenwell-springs/profile/auto-repair/tanksley-automotive-llc-0835-90006528" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Leave BBB Review
              </a>
              <a href="https://www.yelp.com/biz/tanksley-automotive-greenwell-springs-3" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Leave Yelp Review
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/schedule" className="btn-primary">Schedule Your Appointment</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
