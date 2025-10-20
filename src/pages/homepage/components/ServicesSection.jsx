import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const services = [
    {
      id: 1,
      icon: 'Code2',
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using Laravel, Vue.js, React, and modern JavaScript frameworks.',
      features: [
        'Custom web application development',
        'API design and integration',
        'Database architecture and optimization',
        'Responsive frontend development'
      ],
      pricing: 'From $75/hour',
      timeline: '2-12 weeks',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: 'Settings',
      title: 'System Architecture',
      description: 'Scalable system design and architecture consulting for complex business requirements and high-traffic applications.',
      features: [
        'System design and planning',
        'Performance optimization',
        'Security implementation',
        'Scalability consulting'
      ],
      pricing: 'From $100/hour',
      timeline: '1-4 weeks',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      icon: 'Wrench',
      title: 'Legacy System Modernization',
      description: 'Transform outdated systems into modern, maintainable applications with improved performance and user experience.',
      features: [
        'Code refactoring and optimization',
        'Technology stack migration',
        'UI/UX modernization',
        'Performance improvements'
      ],
      pricing: 'Project-based',
      timeline: '4-16 weeks',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      icon: 'MessageCircle',
      title: 'Technical Consulting',
      description: 'Expert guidance on technology decisions, code reviews, and development best practices for your team.',
      features: [
        'Technology stack selection',
        'Code review and optimization',
        'Team mentoring and training',
        'Development process improvement'
      ],
      pricing: 'From $125/hour',
      timeline: 'Ongoing',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'Understanding your business requirements, technical constraints, and project goals.',
      icon: 'Search'
    },
    {
      step: '02',
      title: 'Planning & Architecture',
      description: 'Designing the technical architecture, selecting optimal technologies, and creating project roadmap.',
      icon: 'FileText'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing, code reviews, and regular progress updates.',
      icon: 'Code'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Production deployment, performance monitoring, and ongoing maintenance support.',
      icon: 'Rocket'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-transparent to-accent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-6">
            <Icon name="Briefcase" size={16} className="text-brand-primary" />
            <span className="text-sm font-medium text-muted-foreground">Professional Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Development
            <span className="block text-brand-primary">Services</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development services tailored to transform your business ideas 
            into powerful, scalable digital solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {services?.map((service, index) => (
            <motion.div
              key={service?.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass-card p-6 rounded-2xl h-full hover:shadow-glassmorphic transition-all duration-300 group-hover:scale-105">
                {/* Service Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${service?.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={service?.icon} size={24} color="white" />
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-primary transition-colors">
                  {service?.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service?.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service?.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-trust-builder flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Service Details */}
                {/* <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Starting at</span>
                    <span className="text-sm font-semibold text-conversion-accent">{service?.pricing}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Timeline</span>
                    <span className="text-sm font-semibold text-foreground">{service?.timeline}</span>
                  </div>
                </div> */}

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Development Process
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures project success from initial concept to final deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps?.map((step, index) => (
              <motion.div
                key={step?.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="relative"
              >
                <div className="glass-card p-6 rounded-xl text-center hover:shadow-glassmorphic transition-all duration-300">
                  {/* Step Number */}
                  <div className="text-3xl font-bold text-brand-primary mb-4">{step?.step}</div>
                  
                  {/* Step Icon */}
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={step?.icon} size={20} color="white" />
                  </div>
                  
                  {/* Step Content */}
                  <h4 className="text-lg font-semibold text-foreground mb-3">{step?.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step?.description}</p>
                </div>

                {/* Connection Line */}
                {index < processSteps?.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-brand-primary to-accent transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass-card p-8 rounded-2xl shadow-glassmorphic max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Let's discuss your requirements and create a custom solution that drives your business forward. 
              Get a free consultation and project estimate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  variant="default"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white shadow-elevation"
                >
                  Get Free Consultation
                </Button>
              </Link>
              
              {/* <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="FileText"
                  iconPosition="left"
                  className="border-conversion-accent text-conversion-accent hover:bg-conversion-accent hover:text-white"
                >
                  View Detailed Services
                </Button>
              </Link> */}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span>Free initial consultation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;