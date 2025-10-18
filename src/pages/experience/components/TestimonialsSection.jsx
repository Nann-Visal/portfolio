import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'TechCorp Solutions',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: `VisalNann consistently delivered high-quality code and exceeded project expectations. 
      His expertise in Laravel and Vue.js helped us build a scalable platform that serves thousands of users daily. 
      His attention to detail and proactive communication made him an invaluable team member.`,
      rating: 5,
      project: 'Enterprise CRM System',
      date: '2024'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'EduTech Innovations',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: `Working with VisalNann on our school management system was exceptional. 
      He understood our complex requirements and delivered a solution that streamlined our operations significantly. 
      The system handles 500+ students efficiently and the admin panel is intuitive for our staff.`,
      rating: 5,
      project: 'School Management Platform',
      date: '2023'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'AgriTech Solutions',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: `The farm management system VisalNann developed transformed our agricultural operations. 
      The IoT integration and real-time monitoring capabilities gave us insights we never had before. 
      His technical expertise and understanding of our industry needs was impressive.`,
      rating: 5,
      project: 'Farm Management System',
      date: '2023'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Lead Developer',
      company: 'Digital Innovations Ltd',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: `VisalNann was an excellent colleague who brought fresh perspectives to our development team. 
      His rapid learning ability and dedication to code quality made him stand out. 
      He consistently contributed to successful project deliveries and helped mentor newer team members.`,
      rating: 5,
      project: 'Multiple Client Projects',
      date: '2020'
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <div className="glass-card p-8 rounded-2xl shadow-glassmorphic">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-foreground mb-2">Client Testimonials</h3>
        <p className="text-muted-foreground">What colleagues and clients say about working with me</p>
      </div>
      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
          >
            {testimonials?.map((testimonial) => (
              <div key={testimonial?.id} className="w-full flex-shrink-0 px-4">
                <div className="text-center">
                  <div className="mb-6">
                    <Image
                      src={testimonial?.avatar}
                      alt={testimonial?.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial?.rating)]?.map((_, i) => (
                        <Icon key={i} name="Star" size={20} color="var(--color-conversion-accent)" className="fill-current" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial?.content}"
                  </blockquote>

                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-foreground">{testimonial?.name}</h4>
                    <p className="text-brand-primary font-medium">{testimonial?.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial?.company}</p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Icon name="Briefcase" size={14} />
                        <span>{testimonial?.project}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Calendar" size={14} />
                        <span>{testimonial?.date}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-colors duration-300"
          aria-label="Previous testimonial"
        >
          <Icon name="ChevronLeft" size={20} />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-colors duration-300"
          aria-label="Next testimonial"
        >
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials?.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === activeTestimonial ? 'bg-brand-primary' : 'bg-muted'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;