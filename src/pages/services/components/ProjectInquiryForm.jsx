import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ProjectInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    technologies: [],
    hasExistingSystem: false,
    needsConsultation: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const projectTypes = [
    { value: 'web-app', label: 'Custom Web Application' },
    { value: 'cms', label: 'Content Management System' },
    { value: 'ecommerce', label: 'E-commerce Platform' },
    { value: 'api', label: 'API Development' },
    { value: 'integration', label: 'System Integration' },
    { value: 'migration', label: 'Legacy System Migration' },
    { value: 'consultation', label: 'Technical Consultation' },
    { value: 'other', label: 'Other (Please specify)' }
  ];

  const budgetRanges = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-50k', label: '$15,000 - $50,000' },
    { value: '50k-plus', label: '$50,000+' },
    { value: 'discuss', label: 'Let\'s discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-month', label: 'Within 1 month' },
    { value: '2-3-months', label: '2-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-months-plus', label: '6+ months' },
    { value: 'flexible', label: 'Flexible timeline' }
  ];

  const technologyOptions = [
    { value: 'laravel', label: 'Laravel' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'react', label: 'React' },
    { value: 'php', label: 'PHP' },
    { value: 'mysql', label: 'MySQL' },
    { value: 'postgresql', label: 'PostgreSQL' },
    { value: 'api', label: 'REST API' },
    { value: 'payment', label: 'Payment Integration' },
    { value: 'aws', label: 'AWS Hosting' },
    { value: 'docker', label: 'Docker' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTechnologyChange = (tech, checked) => {
    setFormData(prev => ({
      ...prev,
      technologies: checked 
        ? [...prev?.technologies, tech]
        : prev?.technologies?.filter(t => t !== tech)
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
        technologies: [],
        hasExistingSystem: false,
        needsConsultation: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-canvas text-hierarchy-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Start Your Project
          </h2>
          <p className="text-xl text-hierarchy-secondary max-w-2xl mx-auto">
            Tell us about your project requirements and we'll get back to you within 24 hours with a detailed proposal.
          </p>
        </div>

        {/* Form */}
        <div className="glass-card p-8 lg:p-12 rounded-2xl">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-trust-builder/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircle" size={32} className="text-trust-builder" />
              </div>
              <h3 className="text-2xl font-bold text-hierarchy-primary mb-4">
                Thank You!
              </h3>
              <p className="text-hierarchy-secondary mb-6">
                Your project inquiry has been submitted successfully. I'll review your requirements and get back to you within 24 hours.
              </p>
              <Button 
                variant="outline"
                onClick={() => setSubmitStatus(null)}
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
              >
                Submit Another Inquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Your full name"
                  value={formData?.name}
                  onChange={(e) => handleInputChange('name', e?.target?.value)}
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.email@company.com"
                  value={formData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Company/Organization"
                  type="text"
                  placeholder="Your company name"
                  value={formData?.company}
                  onChange={(e) => handleInputChange('company', e?.target?.value)}
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData?.phone}
                  onChange={(e) => handleInputChange('phone', e?.target?.value)}
                />
              </div>

              {/* Project Details */}
              <div className="border-t border-glass pt-8">
                <h3 className="text-xl font-semibold text-hierarchy-primary mb-6">Project Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Select
                    label="Project Type"
                    placeholder="Select project type"
                    options={projectTypes}
                    value={formData?.projectType}
                    onChange={(value) => handleInputChange('projectType', value)}
                    required
                  />
                  <Select
                    label="Budget Range"
                    placeholder="Select budget range"
                    options={budgetRanges}
                    value={formData?.budget}
                    onChange={(value) => handleInputChange('budget', value)}
                    required
                  />
                </div>

                <div className="mb-6">
                  <Select
                    label="Timeline"
                    placeholder="When do you need this completed?"
                    options={timelineOptions}
                    value={formData?.timeline}
                    onChange={(value) => handleInputChange('timeline', value)}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-hierarchy-primary mb-3">
                    Required Technologies
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {technologyOptions?.map((tech) => (
                      <Checkbox
                        key={tech?.value}
                        label={tech?.label}
                        checked={formData?.technologies?.includes(tech?.value)}
                        onChange={(e) => handleTechnologyChange(tech?.value, e?.target?.checked)}
                      />
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-hierarchy-primary mb-3">
                    Project Description
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-background border border-glass rounded-lg text-hierarchy-primary placeholder-hierarchy-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none"
                    rows="6"
                    placeholder="Please describe your project requirements, goals, and any specific features you need..."
                    value={formData?.description}
                    onChange={(e) => handleInputChange('description', e?.target?.value)}
                    required
                  />
                </div>

                <div className="space-y-4">
                  <Checkbox
                    label="I have an existing system that needs to be integrated or migrated"
                    checked={formData?.hasExistingSystem}
                    onChange={(e) => handleInputChange('hasExistingSystem', e?.target?.checked)}
                  />
                  <Checkbox
                    label="I would like to schedule a consultation call before starting"
                    checked={formData?.needsConsultation}
                    onChange={(e) => handleInputChange('needsConsultation', e?.target?.checked)}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="border-t border-glass pt-8">
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  className="bg-conversion-accent hover:bg-conversion-accent/90 text-white conversion-glow"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Project Inquiry'}
                </Button>
                <p className="text-sm text-hierarchy-secondary text-center mt-4">
                  I'll review your requirements and respond within 24 hours with a detailed proposal.
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Contact Alternatives */}
        <div className="mt-12 text-center">
          <p className="text-hierarchy-secondary mb-6">
            Prefer to discuss your project directly?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="outline"
              iconName="Mail"
              iconPosition="left"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
            >
              visalnann@email.com
            </Button>
            <Button
              variant="outline"
              iconName="MessageCircle"
              iconPosition="left"
              className="border-accent text-accent hover:bg-accent hover:text-white"
            >
              Telegram: @visalnann
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInquiryForm;