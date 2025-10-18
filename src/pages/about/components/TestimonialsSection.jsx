import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "Project Manager",
      company: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `VisalNann's expertise in Laravel development is exceptional. He delivered our school management system ahead of schedule with clean, maintainable code. His ability to understand complex requirements and translate them into functional solutions is remarkable.`,
      rating: 5,
      project: "School Management System",
      skills: ["Laravel", "Vue.js", "Project Management"]
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "CTO",
      company: "AgriTech Innovations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `Working with VisalNann on our farm management system was a game-changer. His technical skills combined with excellent communication made the entire development process smooth. The final product exceeded our expectations.`,
      rating: 5,
      project: "Farm Management System",
      skills: ["Full-Stack Development", "System Architecture", "Communication"]
    },
    {
      id: 3,
      name: "Emily Watson",
      position: "Lead Developer",
      company: "Digital Media Co.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `VisalNann's approach to requirement analysis and stakeholder communication is professional and thorough. He built our custom CMS with attention to detail and delivered comprehensive documentation. Highly recommended!`,
      rating: 5,
      project: "Custom CMS Platform",
      skills: ["CMS Development", "Documentation", "Stakeholder Management"]
    },
    {
      id: 4,
      name: "David Kim",
      position: "Senior Developer",
      company: "WebFlow Agency",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: `As a fellow developer, I can appreciate VisalNann's code quality and architectural decisions. His Laravel implementations follow best practices, and his Vue.js components are well-structured and reusable.`,
      rating: 5,
      project: "E-commerce Platform",
      skills: ["Code Quality", "Best Practices", "Architecture"]
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Business Analyst",
      company: "StartupHub",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      content: `VisalNann has an exceptional ability to bridge the gap between technical implementation and business requirements. His solutions are not just technically sound but also align perfectly with business objectives.`,
      rating: 5,
      project: "Business Management Tool",
      skills: ["Business Analysis", "Solution Design", "Technical Leadership"]
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
              <Icon name="MessageSquare" size={24} color="white" strokeWidth={2} />
            </div>
            <span className="text-slate-600 font-jetbrains-mono text-sm font-medium">
              Client Testimonials
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Clients Say
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Feedback from clients, colleagues, and project stakeholders who have 
            experienced the quality of work and professional collaboration firsthand.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-2xl shadow-xl">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Icon name="Quote" size={32} color="#3B82F6" strokeWidth={1.5} />
              </div>
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-xl md:text-2xl text-slate-700 text-center leading-relaxed mb-8 font-medium">
              "{currentTestimonial?.content}"
            </blockquote>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                <Icon key={i} name="Star" size={24} color="#F59E0B" fill="#F59E0B" strokeWidth={0} />
              ))}
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-slate-200">
                <Image
                  src={currentTestimonial?.image}
                  alt={currentTestimonial?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-slate-900 text-lg">
                  {currentTestimonial?.name}
                </h4>
                <p className="text-slate-600">
                  {currentTestimonial?.position}
                </p>
                <p className="text-blue-600 font-medium">
                  {currentTestimonial?.company}
                </p>
              </div>
            </div>

            {/* Project & Skills */}
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full mb-4">
                <Icon name="Briefcase" size={16} color="#64748B" strokeWidth={2} />
                <span className="text-slate-600 text-sm font-medium">
                  Project: {currentTestimonial?.project}
                </span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {currentTestimonial?.skills?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors duration-300"
          >
            <Icon name="ChevronLeft" size={24} color="#64748B" strokeWidth={2} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors duration-300"
          >
            <Icon name="ChevronRight" size={24} color="#64748B" strokeWidth={2} />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeTestimonial === index ? 'bg-blue-600' : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials?.map((testimonial, index) => (
            <div
              key={testimonial?.id}
              className={`glass-card p-6 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg ${
                activeTestimonial === index ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial?.image}
                    alt={testimonial?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial?.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial?.position}</p>
                </div>
              </div>
              
              <p className="text-slate-700 text-sm leading-relaxed line-clamp-3">
                "{testimonial?.content}"
              </p>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} color="#F59E0B" fill="#F59E0B" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-xs text-blue-600 font-medium">
                  {testimonial?.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;