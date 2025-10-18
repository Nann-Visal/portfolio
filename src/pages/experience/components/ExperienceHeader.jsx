import React from 'react';
import Icon from '../../../components/AppIcon';

const ExperienceHeader = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary rounded-2xl mb-6 shadow-glassmorphic">
        <Icon name="Briefcase" size={32} color="white" strokeWidth={2} />
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
        Professional
        <span className="text-brand-primary ml-3">Experience</span>
      </h1>
      
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        3+ years of combined freelance and corporate experience building scalable web applications 
        with Laravel ecosystem and modern JavaScript frameworks. From startup MVPs to enterprise solutions.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <div className="glass-card px-6 py-3 rounded-full">
          <span className="text-sm font-medium text-brand-primary">3+ Years Experience</span>
        </div>
        <div className="glass-card px-6 py-3 rounded-full">
          <span className="text-sm font-medium text-conversion-accent">10+ Projects Delivered</span>
        </div>
        <div className="glass-card px-6 py-3 rounded-full">
          <span className="text-sm font-medium text-trust-builder">100% Support Client</span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceHeader;