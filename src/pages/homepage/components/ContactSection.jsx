import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const projectTypeOptions = [
    { value: 'web-app', label: 'Web Application Development' },
    { value: 'system-modernization', label: 'Legacy System Modernization' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'maintenance', label: 'System Maintenance & Support' },
    { value: 'other', label: 'Other (Please specify)' }
  ];

  const budgetOptions = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: 'over-100k', label: 'Over $100,000' },
    { value: 'discuss', label: "Let's discuss" }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-month', label: 'Within 1 month' },
    { value: '2-3-months', label: '2-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-months-plus', label: '6+ months' },
    { value: 'flexible', label: 'Flexible timeline' }
  ];

  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'visalnann@gmail.com',
      description: 'Best for detailed project discussions',
      action: 'mailto:visalnann@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'MessageCircle',
      title: 'Telegram',
      value: '@visalnann',
      description: 'Quick responses and real‑time chat',
      action: 'https://t.me/visalnann',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: 'Phone',
      title: 'Phone',
      value: '+855 93806375',
      description: 'Voice calls and instant messaging',
      action: '',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'Linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/visalnann',
      description: 'Professional networking and updates',
      action: 'https://www.linkedin.com/in/visal-nann/',
      color: 'from-blue-600 to-blue-800'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert("Thank you for your message! I'll get back to you within 24 hours.");
  };

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
    hidden: { opacity: 0, y: 30 },
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
    <section
      ref={sectionRef}
      className="py-20 bg-surface relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
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
            <Icon name="MessageSquare" size={16} className="text-brand-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let’s Build Something
            <span className="block text-brand-primary">Amazing Together</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into powerful web solutions?
            Let’s discuss your project requirements and create a custom development plan.
          </p>
        </motion.div>

        {/* Layout for mobile first: stack; for larger screens we can adjust */}
        <div className="grid grid-cols-1 gap-12">
          {/* Optionally include form here */}
          
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8 w-full lg:w-2/3 mx-auto"
          >
            {/* Contact Methods */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Methods
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, idx) => (
                  <motion.a
                    key={method.title}
                    href={method.action || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="glass-card p-4 rounded-xl hover:shadow-glassmorphic transition-all duration-300 group block"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon name={method.icon} size={20} color="white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-brand-primary transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-brand-primary font-medium">{method.value}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                      <Icon name="ExternalLink" size={16} className="text-muted-foreground group-hover:text-brand-primary transition-colors" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div variants={itemVariants} className="glass-card p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Current Availability
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-trust-builder rounded-full animate-pulse"></div>
                  <span className="text-foreground">Available for new projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">GMT+7 (Phnom Penh, Cambodia)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Next available: January 2025</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;