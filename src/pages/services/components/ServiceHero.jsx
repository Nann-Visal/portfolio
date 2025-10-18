import React from 'react';

import Button from '../../../components/ui/Button';

const ServiceHero = () => {
  return (
    <section className="relative bg-canvas text-hierarchy-primary py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-trust-builder/20 text-trust-builder px-4 py-2 rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-trust-builder rounded-full animate-pulse"></div>
            <span>Available for New Projects</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Professional
            <span className="text-brand-primary"> Development</span>
            <br />
            <span className="text-conversion-accent">Services</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-hierarchy-secondary mb-8 leading-relaxed">
            Senior full-stack development expertise for complex Laravel & Vue.js projects.
            <br />
            From consultation to complete system architecture.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-bold text-conversion-accent mb-2">5+</div>
              <div className="text-hierarchy-secondary">Years Experience</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-bold text-trust-builder mb-2">50+</div>
              <div className="text-hierarchy-secondary">Projects Delivered</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-bold text-brand-primary mb-2">24h</div>
              <div className="text-hierarchy-secondary">Response Time</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              variant="default"
              size="lg"
              iconName="MessageSquare"
              iconPosition="left"
              className="bg-conversion-accent hover:bg-conversion-accent/90 text-white conversion-glow"
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;