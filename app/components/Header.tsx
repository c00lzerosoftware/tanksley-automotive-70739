'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary-blue">
              Tanksley <span className="text-accent-red">Automotive</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-primary-blue font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-blue font-medium transition-colors">
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="text-gray-700 hover:text-primary-blue font-medium transition-colors flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100">
                  <Link href="/services/transmission" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary-blue transition-colors">
                    Transmission Repair
                  </Link>
                  <Link href="/services/air-conditioning" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary-blue transition-colors">
                    Air Conditioning Repair
                  </Link>
                  <Link href="/services/brakes" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary-blue transition-colors">
                    Brake Service
                  </Link>
                  <Link href="/services/diagnostics" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary-blue transition-colors">
                    Engine Diagnostics
                  </Link>
                  <Link href="/services/suspension" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary-blue transition-colors">
                    Suspension & Alignment
                  </Link>
                  <Link href="/services/maintenance" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary-blue transition-colors">
                    General Maintenance
                  </Link>
                </div>
              )}
            </div>

            <Link href="/reviews" className="text-gray-700 hover:text-primary-blue font-medium transition-colors">
              Reviews
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-primary-blue font-medium transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-blue font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+12255551234" className="text-primary-blue font-semibold hover:text-primary-blue-light transition-colors">
              <svg className="w-5 h-5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <Link href="/schedule" className="bg-gold text-primary-blue-dark px-6 py-2.5 rounded-lg font-semibold hover:bg-gold-light transition-colors shadow-md">
              Schedule Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-primary-blue font-medium">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-primary-blue font-medium">
              About Us
            </Link>
            <div className="py-2">
              <div className="font-medium text-gray-900 mb-2">Services</div>
              <Link href="/services/transmission" className="block pl-4 py-2 text-gray-700 hover:text-primary-blue">
                Transmission Repair
              </Link>
              <Link href="/services/air-conditioning" className="block pl-4 py-2 text-gray-700 hover:text-primary-blue">
                Air Conditioning Repair
              </Link>
              <Link href="/services/brakes" className="block pl-4 py-2 text-gray-700 hover:text-primary-blue">
                Brake Service
              </Link>
              <Link href="/services/diagnostics" className="block pl-4 py-2 text-gray-700 hover:text-primary-blue">
                Engine Diagnostics
              </Link>
              <Link href="/services/suspension" className="block pl-4 py-2 text-gray-700 hover:text-primary-blue">
                Suspension & Alignment
              </Link>
              <Link href="/services/maintenance" className="block pl-4 py-2 text-gray-700 hover:text-primary-blue">
                General Maintenance
              </Link>
            </div>
            <Link href="/reviews" className="block py-2 text-gray-700 hover:text-primary-blue font-medium">
              Reviews
            </Link>
            <Link href="/faq" className="block py-2 text-gray-700 hover:text-primary-blue font-medium">
              FAQ
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-primary-blue font-medium">
              Contact
            </Link>
            <div className="pt-4 space-y-2">
              <a href="tel:+12255551234" className="block w-full bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold text-center">
                Call Now
              </a>
              <Link href="/schedule" className="block w-full bg-gold text-primary-blue-dark px-6 py-3 rounded-lg font-semibold text-center">
                Schedule Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
