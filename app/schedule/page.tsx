'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SchedulePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    vehicle: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment request:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <svg className="w-20 h-20 text-green-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-3xl font-bold text-primary-blue mb-4">Appointment Request Received!</h1>
            <p className="text-lg text-gray-700 mb-6">
              Thank you for scheduling with Tanksley Automotive. We'll contact you within 2 hours to confirm your appointment.
            </p>
            <p className="text-gray-600 mb-8">
              If you need immediate assistance, please call us at <a href="tel:+12255551234" className="text-primary-blue font-semibold">(225) 555-1234</a>
            </p>
            <Link href="/" className="btn-primary inline-block">Return to Homepage</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary-blue to-primary-blue-light text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Schedule Appointment</h1>
          <p className="text-xl">Book Your Service Online - Fast & Easy</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-blue/5 border-l-4 border-primary-blue p-6 mb-8">
            <h3 className="text-lg font-bold text-primary-blue mb-2">What to Expect</h3>
            <p className="text-gray-700">Submit your appointment request and we'll contact you within 2 hours to confirm your preferred date and time. For same-day service, please call us directly.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary-blue mb-6">Request Your Appointment</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Service Needed *</label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">Select a service...</option>
                  <option>Transmission Repair</option>
                  <option>Air Conditioning Repair</option>
                  <option>Brake Service</option>
                  <option>Engine Diagnostics</option>
                  <option>Suspension & Alignment</option>
                  <option>General Maintenance / Oil Change</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Preferred Time *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  >
                    <option value="">Select time...</option>
                    <option>8:00 AM</option>
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Vehicle Information *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., 2018 Honda Accord"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  value={formData.vehicle}
                  onChange={(e) => setFormData({...formData, vehicle: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Description of Issue</label>
                <textarea
                  rows={4}
                  placeholder="Please describe the problem you're experiencing..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full text-lg">
                Submit Appointment Request
              </button>

              <p className="text-center text-gray-600 text-sm">
                By submitting, you agree that we may contact you to confirm your appointment.
              </p>
            </form>
          </div>

          <div className="mt-8 text-center bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-primary-blue mb-2">Prefer to Call?</h3>
            <p className="text-gray-700 mb-4">Talk to us directly for immediate scheduling or questions.</p>
            <a href="tel:+12255551234" className="text-2xl font-bold text-primary-blue hover:text-primary-blue-light">
              (225) 555-1234
            </a>
            <p className="text-sm text-gray-600 mt-2">Monday - Friday: 8:00 AM - 5:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  );
}
