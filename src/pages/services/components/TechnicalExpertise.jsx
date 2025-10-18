import React from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalExpertise = () => {
  const expertiseAreas = [
    {
      category: 'Backend Development',
      icon: 'Server',
      color: 'brand-primary',
      technologies: [
        { name: 'Laravel 10+', level: 95, description: 'Advanced framework expertise with Eloquent ORM' },
        { name: 'PHP 8.2+', level: 90, description: 'Modern PHP with type declarations and attributes' },
        { name: 'MySQL/PostgreSQL', level: 85, description: 'Database design and optimization' },
        { name: 'Redis/Memcached', level: 80, description: 'Caching and session management' }
      ]
    },
    {
      category: 'Frontend Development',
      icon: 'Monitor',
      color: 'accent',
      technologies: [
        { name: 'Vue.js 3', level: 90, description: 'Composition API and reactive programming' },
        { name: 'JavaScript ES6+', level: 88, description: 'Modern JavaScript and TypeScript' },
        { name: 'Tailwind CSS', level: 92, description: 'Utility-first CSS framework' },
        { name: 'Inertia.js', level: 85, description: 'SPA development with Laravel backend' }
      ]
    },
    {
      category: 'DevOps & Tools',
      icon: 'Settings',
      color: 'trust-builder',
      technologies: [
        { name: 'Docker', level: 75, description: 'Containerization and deployment' },
        { name: 'Git/GitHub', level: 90, description: 'Version control and collaboration' },
        { name: 'AWS/DigitalOcean', level: 70, description: 'Cloud hosting and deployment' },
        { name: 'CI/CD Pipelines', level: 65, description: 'Automated testing and deployment' }
      ]
    },
    {
      category: 'Specialized Skills',
      icon: 'Zap',
      color: 'conversion-accent',
      technologies: [
        { name: 'API Development', level: 92, description: 'RESTful APIs and GraphQL' },
        { name: 'Payment Integration', level: 85, description: 'Stripe, PayPal, and local gateways' },
        { name: 'Real-time Features', level: 80, description: 'WebSockets and broadcasting' },
        { name: 'System Integration', level: 88, description: 'Third-party service integrations' }
      ]
    }
  ];

  const certifications = [
    {
      name: 'Laravel Certified Developer',
      issuer: 'Laravel',
      year: '2023',
      icon: 'Award'
    },
    {
      name: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: 'Cloud'
    },
    {
      name: 'Vue.js Expert Certification',
      issuer: 'Vue School',
      year: '2022',
      icon: 'Code'
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep expertise in modern web technologies with proven track record in complex project delivery.
          </p>
        </div>

        {/* Expertise Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {expertiseAreas?.map((area, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 bg-${area?.color}/20 rounded-xl flex items-center justify-center`}>
                  <Icon name={area?.icon} size={24} className={`text-${area?.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{area?.category}</h3>
              </div>

              <div className="space-y-4">
                {area?.technologies?.map((tech, techIndex) => (
                  <div key={techIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{tech?.name}</span>
                      <span className="text-sm text-muted-foreground">{tech?.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`bg-${area?.color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${tech?.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground">{tech?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="glass-card p-8 rounded-2xl mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-xl">
                <div className="w-16 h-16 bg-brand-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert?.icon} size={24} className="text-brand-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{cert?.name}</h4>
                <p className="text-muted-foreground text-sm mb-1">{cert?.issuer}</p>
                <p className="text-brand-primary font-medium">{cert?.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Methodology */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Development Methodology</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-primary/20 rounded-xl flex items-center justify-center mx-auto">
                <Icon name="Target" size={24} className="text-brand-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Agile Development</h4>
              <p className="text-muted-foreground">
                Iterative development with regular client feedback and sprint-based delivery.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto">
                <Icon name="Shield" size={24} className="text-accent" />
              </div>
              <h4 className="font-semibold text-foreground">Quality Assurance</h4>
              <p className="text-muted-foreground">
                Comprehensive testing, code reviews, and security best practices.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-trust-builder/20 rounded-xl flex items-center justify-center mx-auto">
                <Icon name="Users" size={24} className="text-trust-builder" />
              </div>
              <h4 className="font-semibold text-foreground">Client Collaboration</h4>
              <p className="text-muted-foreground">
                Regular communication, progress updates, and stakeholder involvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;