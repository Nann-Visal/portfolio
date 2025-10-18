import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicePackages = () => {
  const [selectedPackage, setSelectedPackage] = useState('professional');

  const packages = [
    {
      id: 'consultation',
      name: 'Technical Consultation',
      price: '$150',
      period: 'per hour',
      description: 'Expert guidance for your technical challenges and project planning.',
      features: [
        'Requirement analysis & documentation',
        'Technical architecture planning',
        'Code review & optimization',
        'Technology stack recommendations',
        'Performance audit & improvements',
        'Security assessment',
        'Database design consultation',
        'API design & documentation'
      ],
      icon: 'MessageSquare',
      color: 'brand-primary',
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional Development',
      price: '$5,000',
      period: 'per project',
      description: 'Complete custom web application development with modern technologies.',
      features: [
        'Full-stack Laravel & Vue.js development',
        'Custom CMS & admin panels',
        'Database design & optimization',
        'RESTful API development',
        'Authentication & authorization',
        'Payment gateway integration',
        'Responsive UI/UX implementation',
        '3 months post-launch support',
        'Source code documentation',
        'Deployment & hosting setup'
      ],
      icon: 'Code2',
      color: 'conversion-accent',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Solutions',
      price: '$15,000',
      period: 'starting from',
      description: 'Large-scale system architecture and complex business solutions.',
      features: [
        'Multi-tenant SaaS applications',
        'Microservices architecture',
        'Advanced system integrations',
        'Custom workflow automation',
        'Real-time data processing',
        'Advanced reporting & analytics',
        'Load balancing & scalability',
        '6 months dedicated support',
        'Team training & knowledge transfer',
        'Continuous integration setup',
        'Performance monitoring',
        'Security compliance audit'
      ],
      icon: 'Building2',
      color: 'trust-builder',
      popular: false
    }
  ];

  const additionalServices = [
    {
      name: 'Code Review & Optimization',
      price: '$200/hour',
      description: 'Comprehensive code analysis and performance improvements'
    },
    {
      name: 'Legacy System Migration',
      price: 'Custom Quote',
      description: 'Modernize your existing applications with latest technologies'
    },
    {
      name: 'API Development & Integration',
      price: '$1,500+',
      description: 'Custom API development and third-party service integrations'
    },
    {
      name: 'Database Optimization',
      price: '$500+',
      description: 'Query optimization and database performance tuning'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Service Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect service package for your project needs. All packages include detailed documentation and ongoing support.
          </p>
        </div>

        {/* Main Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages?.map((pkg) => (
            <div
              key={pkg?.id}
              className={`relative glass-card p-8 rounded-2xl transition-all duration-300 hover:shadow-elevation ${
                pkg?.popular ? 'ring-2 ring-conversion-accent shadow-glassmorphic' : ''
              } ${selectedPackage === pkg?.id ? 'scale-105' : ''}`}
              onClick={() => setSelectedPackage(pkg?.id)}
            >
              {pkg?.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-conversion-accent text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-${pkg?.color}/20 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={pkg?.icon} size={32} className={`text-${pkg?.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg?.name}</h3>
                <div className="flex items-baseline justify-center space-x-2 mb-4">
                  <span className="text-4xl font-bold text-foreground">{pkg?.price}</span>
                  <span className="text-muted-foreground">{pkg?.period}</span>
                </div>
                <p className="text-muted-foreground">{pkg?.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg?.features?.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon name="Check" size={16} className="text-trust-builder mt-1 flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg?.popular ? "default" : "outline"}
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                className={pkg?.popular ? "bg-conversion-accent hover:bg-conversion-accent/90 text-white" : ""}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="glass-card p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices?.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-surface rounded-xl">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">{service?.name}</h4>
                  <p className="text-sm text-muted-foreground">{service?.description}</p>
                </div>
                <div className="text-right ml-4">
                  <div className="font-bold text-brand-primary">{service?.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Overview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Development Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Requirements analysis & project planning' },
              { step: '02', title: 'Design', desc: 'Architecture design & UI/UX mockups' },
              { step: '03', title: 'Development', desc: 'Agile development with regular updates' },
              { step: '04', title: 'Delivery', desc: 'Testing, deployment & documentation' }
            ]?.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {process.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{process.title}</h4>
                <p className="text-sm text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;