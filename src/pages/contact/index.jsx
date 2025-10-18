import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ProjectInquiryForm from './components/ProjectInquiryForm';
import ConsultationBooking from './components/ConsultationBooking';
import AvailabilityStatus from './components/AvailabilityStatus';
import LocationTimezone from './components/LocationTimezone';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <ContactHero />
      {/* Contact Methods */}
      <ContactMethods />
      {/* Project Inquiry Form */}
      {/* <ProjectInquiryForm /> */}
      {/* Consultation Booking */}
      {/* <ConsultationBooking /> */}
      {/* Availability Status */}
      <AvailabilityStatus />
      {/* Location & Timezone */}
      <LocationTimezone />
      {/* Footer CTA */}
      <div className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you have a detailed project brief or just an idea, I'm here to help you build something amazing. Let's discuss how we can bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:visalnann.dev@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              <span>📧</span>
              Email Me Directly
            </a>
            <a
              href="https://t.me/visalnann"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              <span>💬</span>
              Message on Telegram
            </a>
          </div>
          
          <div className="mt-8 text-slate-400 text-sm">
            <p>© {new Date()?.getFullYear()} VisalNann. Available for international projects.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;