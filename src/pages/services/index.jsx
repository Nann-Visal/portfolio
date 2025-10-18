import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServicePackages from './components/ServicePackages';
import TechnicalExpertise from './components/TechnicalExpertise';
import ProjectInquiryForm from './components/ProjectInquiryForm';
import ServiceFAQ from './components/ServiceFAQ';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Professional Development Services - VisalNann Portfolio</title>
        <meta name="description" content="Senior full-stack development services specializing in Laravel & Vue.js. Custom web applications, system integrations, and technical consultation for complex projects." />
        <meta name="keywords" content="Laravel developer, Vue.js development, full-stack services, web application development, technical consultation, system integration" />
        <meta property="og:title" content="Professional Development Services - VisalNann" />
        <meta property="og:description" content="Expert Laravel & Vue.js development services for complex web applications and system integrations." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/services" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <ServiceHero />
          
          {/* Service Packages */}
          <ServicePackages />
          
          {/* Technical Expertise */}
          <TechnicalExpertise />
          
          {/* Project Inquiry Form */}
          <ProjectInquiryForm />
          
          {/* FAQ Section */}
          <ServiceFAQ />
        </main>

        {/* Footer */}
        <footer className="bg-canvas text-hierarchy-primary py-12 border-t border-glass">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">VisalNann</h3>
                <p className="text-hierarchy-secondary">
                  Senior Full-Stack Developer specializing in Laravel ecosystem and modern JavaScript frameworks.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-hierarchy-secondary">
                  <li>Custom Web Applications</li>
                  <li>Laravel & Vue.js Development</li>
                  <li>System Integrations</li>
                  <li>Technical Consultation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-hierarchy-secondary">
                  <li>visalnann@email.com</li>
                  <li>Telegram: @visalnann</li>
                  <li>Response time: 24 hours</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-glass mt-8 pt-8 text-center text-hierarchy-secondary">
              <p>&copy; {new Date()?.getFullYear()} VisalNann. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ServicesPage;