import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "CTO",
      company: "EduTech Solutions",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      content: `VisalNann delivered an exceptional school management system that transformed our operations. The Laravel backend is robust and scalable, while the Vue.js frontend provides an intuitive user experience. His attention to detail and technical expertise exceeded our expectations.`,
      project: "School Management System",
      metrics: {
        timeline: "Delivered 2 weeks early",
        performance: "99.9% uptime",
        satisfaction: "Outstanding results"
      }
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "Founder & CEO",
      company: "AgriTech Innovations",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      content: `Working with VisalNann on our farm management platform was a game-changer. His deep understanding of both technology and business requirements resulted in a solution that increased our operational efficiency by 35%. The IoT integration was seamless and the analytics dashboard provides invaluable insights.`,
      project: "Farm Management Platform",
      metrics: {
        efficiency: "+35% operational efficiency",
        roi: "ROI achieved in 6 months",
        features: "All requirements delivered"
      }
    },
    {
      id: 3,
      name: "Jennifer Park",
      position: "Digital Marketing Director",
      company: "Content Pro Agency",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      content: `The multi-tenant CMS platform VisalNann built for us handles 500+ client websites flawlessly. The performance optimization and SEO features have significantly improved our clients' search rankings. His proactive communication and problem-solving skills made the entire project smooth and successful.`,
      project: "Content Management System",
      metrics: {
        websites: "500+ websites managed",
        performance: "2.1s average load time",
        seo: "40% improvement in rankings"
      }
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Technical Lead",
      company: "StartupHub Cambodia",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      rating: 5,
      content: `VisalNann's technical consulting helped us make critical architecture decisions for our startup. His expertise in Laravel and modern JavaScript frameworks guided us away from potential pitfalls and towards a scalable solution. The code quality and documentation standards he established became our development foundation.`,
      project: "Technical Consulting",
      metrics: {
        guidance: "Strategic tech decisions",
        quality: "95% code coverage",
        mentoring: "Team skill improvement"
      }
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
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-trust-builder rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-primary rounded-full blur-3xl"></div>
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
            <span className="text-sm font-medium text-muted-foreground">Client Testimonials</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Clients
            <span className="block text-brand-primary">Say About Me</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real feedback from satisfied clients who have experienced the quality, 
            professionalism, and technical expertise that drives successful projects.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.div
            key={activeTestimonial}
            variants={itemVariants}
            className="glass-card p-8 lg:p-12 rounded-2xl shadow-glassmorphic max-w-4xl mx-auto"
          >
            {/* Rating Stars */}
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(testimonials?.[activeTestimonial]?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-conversion-accent fill-current" />
                ))}
              </div>
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed text-center mb-8 font-medium">
              "{testimonials?.[activeTestimonial]?.content}"
            </blockquote>

            {/* Client Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Image
                    src={testimonials?.[activeTestimonial]?.avatar}
                    alt={testimonials?.[activeTestimonial]?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-trust-builder rounded-full border-2 border-background"></div>
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-bold text-foreground">{testimonials?.[activeTestimonial]?.name}</h4>
                  <p className="text-muted-foreground">{testimonials?.[activeTestimonial]?.position}</p>
                  <p className="text-brand-primary font-medium">{testimonials?.[activeTestimonial]?.company}</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-border"></div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Project</p>
                <p className="font-semibold text-foreground">{testimonials?.[activeTestimonial]?.project}</p>
              </div>
            </div>

            {/* Project Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Object.entries(testimonials?.[activeTestimonial]?.metrics)?.map(([key, value], index) => (
                <div key={key} className="text-center glass-card p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground capitalize mb-1">{key}</p>
                  <p className="font-semibold text-brand-primary">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonial Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-card p-2 rounded-xl">
            <div className="flex space-x-2">
              {testimonials?.map((testimonial, index) => (
                <button
                  key={testimonial?.id}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-12 h-12 rounded-lg transition-all duration-300 ${
                    activeTestimonial === index
                      ? 'bg-brand-primary shadow-subtle'
                      : 'hover:bg-surface'
                  }`}
                >
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className={`w-full h-full rounded-lg object-cover transition-all duration-300 ${
                      activeTestimonial === index ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-primary mb-2">50+</div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-trust-builder mb-2">100%</div>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-conversion-accent mb-2">5.0</div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-primary mb-2">24h</div>
            <p className="text-muted-foreground">Response Time</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-2xl shadow-glassmorphic max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join My Satisfied Clients
            </h3>
            <p className="text-muted-foreground mb-6">
              Ready to transform your business with a custom web solution? 
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-brand-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-primary/90 transition-colors"
              >
                <Icon name="MessageCircle" size={18} />
                <span>Start Your Project</span>
              </motion.a>
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 border border-brand-primary text-brand-primary px-6 py-3 rounded-lg font-medium hover:bg-brand-primary hover:text-white transition-colors"
              >
                <Icon name="FolderOpen" size={18} />
                <span>View Portfolio</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;