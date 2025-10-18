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
    projectType: '',
    budget: '',
    timeline: '',
    technologies: [],
    description: '',
    priority: '',
    hasExistingCode: false,
    needsConsultation: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const projectTypes = [
    { value: 'web-app', label: 'Web Application Development' },
    { value: 'api', label: 'API Development & Integration' },
    { value: 'cms', label: 'Content Management System' },
    { value: 'ecommerce', label: 'E-commerce Platform' },
    { value: 'migration', label: 'System Migration/Upgrade' },
    { value: 'consultation', label: 'Technical Consultation' },
    { value: 'maintenance', label: 'Maintenance & Support' },
    { value: 'other', label: 'Other (Please specify)' }
  ];

  const budgetRanges = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-30k', label: '$15,000 - $30,000' },
    { value: '30k-50k', label: '$30,000 - $50,000' },
    { value: 'over-50k', label: 'Over $50,000' },
    { value: 'discuss', label: 'Let\'s discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Rush project)' },
    { value: '1-month', label: '1 Month' },
    { value: '2-3-months', label: '2-3 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: '6-months-plus', label: '6+ Months' },
    { value: 'flexible', label: 'Flexible timeline' }
  ];

  const priorityLevels = [
    { value: 'low', label: 'Low - Planning phase' },
    { value: 'medium', label: 'Medium - Ready to start soon' },
    { value: 'high', label: 'High - Need to start immediately' },
    { value: 'urgent', label: 'Urgent - Critical business need' }
  ];

  const technologyOptions = [
    { value: 'laravel', label: 'Laravel' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'react', label: 'React' },
    { value: 'nodejs', label: 'Node.js' },
    { value: 'mysql', label: 'MySQL' },
    { value: 'postgresql', label: 'PostgreSQL' },
    { value: 'mongodb', label: 'MongoDB' },
    { value: 'aws', label: 'AWS' },
    { value: 'docker', label: 'Docker' },
    { value: 'api-integration', label: 'API Integration' }
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
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        technologies: [],
        description: '',
        priority: '',
        hasExistingCode: false,
        needsConsultation: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={32} color="rgb(34 197 94)" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Thank You for Your Inquiry!
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              I've received your project details and will get back to you within 4 hours with a detailed response 
              and next steps. In the meantime, feel free to check out my recent projects or connect on LinkedIn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                onClick={() => setSubmitStatus(null)}
                iconName="Plus"
                iconPosition="left"
              >
                Submit Another Inquiry
              </Button>
              <Button
                variant="default"
                onClick={() => window.open('/projects', '_self')}
                iconName="FolderOpen"
                iconPosition="left"
              >
                View My Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Start Your Project Journey
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tell me about your project requirements, and I'll provide you with a detailed proposal, 
            timeline, and cost estimate within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
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

            <Input
              label="Company/Organization"
              type="text"
              placeholder="Your company name (optional)"
              value={formData?.company}
              onChange={(e) => handleInputChange('company', e?.target?.value)}
            />

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Project Type"
                placeholder="Select project type"
                options={projectTypes}
                value={formData?.projectType}
                onChange={(value) => handleInputChange('projectType', value)}
                required
              />
              <Select
                label="Priority Level"
                placeholder="Select priority"
                options={priorityLevels}
                value={formData?.priority}
                onChange={(value) => handleInputChange('priority', value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Budget Range"
                placeholder="Select budget range"
                options={budgetRanges}
                value={formData?.budget}
                onChange={(value) => handleInputChange('budget', value)}
                required
              />
              <Select
                label="Timeline"
                placeholder="Select timeline"
                options={timelineOptions}
                value={formData?.timeline}
                onChange={(value) => handleInputChange('timeline', value)}
                required
              />
            </div>

            {/* Technologies */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
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

            {/* Project Description */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Project Description
              </label>
              <textarea
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={6}
                placeholder="Please describe your project in detail. Include:\n• What problem you're trying to solve\n• Key features and functionality needed\n• Target audience and user requirements\n• Any specific technical requirements or constraints\n• Integration needs with existing systems"
                value={formData?.description}
                onChange={(e) => handleInputChange('description', e?.target?.value)}
                required
              />
            </div>

            {/* Additional Options */}
            <div className="space-y-4">
              <Checkbox
                label="I have existing code/system that needs to be integrated or migrated"
                checked={formData?.hasExistingCode}
                onChange={(e) => handleInputChange('hasExistingCode', e?.target?.checked)}
              />
              <Checkbox
                label="I would like to schedule a consultation call before starting"
                checked={formData?.needsConsultation}
                onChange={(e) => handleInputChange('needsConsultation', e?.target?.checked)}
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200">
              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
                iconName="Send"
                iconPosition="left"
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
              >
                {isSubmitting ? 'Sending Inquiry...' : 'Send Project Inquiry'}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => window.open('mailto:visalnann.dev@gmail.com', '_blank')}
                iconName="Mail"
                iconPosition="left"
              >
                Email Directly
              </Button>
            </div>

            <div className="text-center text-sm text-slate-500">
              <Icon name="Shield" size={16} className="inline mr-1" />
              Your information is secure and will only be used to respond to your inquiry.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectInquiryForm;