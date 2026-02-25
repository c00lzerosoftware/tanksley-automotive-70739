import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tanksley Automotive</h3>
            <p className="text-gray-300 mb-4">
              Family-owned auto repair shop serving Greenwell Springs since 1996.
            </p>
            <div className="flex space-x-3">
              <div className="trust-badge bg-white/10 border-white/20">
                <span className="text-white text-sm">Jasper Certified</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-gold transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-gray-300 hover:text-gold transition-colors">
                  Schedule Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/transmission" className="text-gray-300 hover:text-gold transition-colors">
                  Transmission Repair
                </Link>
              </li>
              <li>
                <Link href="/services/air-conditioning" className="text-gray-300 hover:text-gold transition-colors">
                  A/C Repair
                </Link>
              </li>
              <li>
                <Link href="/services/brakes" className="text-gray-300 hover:text-gold transition-colors">
                  Brake Service
                </Link>
              </li>
              <li>
                <Link href="/services/diagnostics" className="text-gray-300 hover:text-gold transition-colors">
                  Engine Diagnostics
                </Link>
              </li>
              <li>
                <Link href="/services/suspension" className="text-gray-300 hover:text-gold transition-colors">
                  Suspension & Alignment
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-gray-300 hover:text-gold transition-colors">
                  General Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  Magnolia Bridge Road<br />
                  Greenwell Springs, LA 70739
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+12255551234" className="hover:text-gold transition-colors">
                  (225) 555-1234
                </a>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  Monday - Friday<br />
                  8:00 AM - 5:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tanksley Automotive, LLC. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Family Owned & Operated Since 1996 | Jasper Certified | A+ BBB Rating
          </p>
        </div>
      </div>
    </footer>
  );
}
