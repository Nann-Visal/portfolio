import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const featuredProjects = [
    {
      id: 1,
      title: "School Management System",
      category: "Education Technology",
      description: "Comprehensive school administration platform managing 2,000+ students with advanced reporting, grade tracking, and parent communication features.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      technologies: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS"],
      features: [
        "Student enrollment & management",
        "Grade tracking & reporting",
        "Parent-teacher communication",
        "Financial management",
        "Attendance monitoring"
      ],
      metrics: {
        users: "2,000+",
        performance: "99.9%",
        satisfaction: "4.9/5"
      },
      status: "Live Production",
      year: "2023"
    },
    {
      id: 2,
      title: "Farm Management Platform",
      category: "Agricultural Technology",
      description: "IoT-integrated farm management system with crop monitoring, irrigation control, and yield prediction analytics for modern agriculture.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop",
      technologies: ["Laravel", "React", "PostgreSQL", "IoT Integration"],
      features: [
        "Crop monitoring dashboard",
        "Automated irrigation control",
        "Weather integration",
        "Yield prediction analytics",
        "Equipment maintenance tracking"
      ],
      metrics: {
        farms: "150+",
        efficiency: "+35%",
        savings: "$50K+"
      },
      status: "Active Development",
      year: "2024"
    },
    {
      id: 3,
      title: "Content Management System",
      category: "Digital Publishing",
      description: "Multi-tenant CMS platform serving 500+ websites with advanced SEO optimization, content scheduling, and performance analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["Laravel", "Vue.js", "Redis", "Elasticsearch"],
      features: [
        "Multi-tenant architecture",
        "Advanced SEO tools",
        "Content scheduling",
        "Performance analytics",
        "Custom theme builder"
      ],
      metrics: {
        websites: "500+",
        uptime: "99.8%",
        speed: "2.1s avg"
      },
      status: "Enterprise Ready",
      year: "2023"
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

  const projectVariants = {
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
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
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
            <Icon name="FolderOpen" size={16} className="text-brand-primary" />
            <span className="text-sm font-medium text-muted-foreground">Featured Work</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Project
            <span className="block text-brand-primary">Showcase</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore some of my most impactful projects that demonstrate technical expertise, 
            problem-solving skills, and commitment to delivering exceptional user experiences.
          </p>
        </motion.div>

        {/* Project Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-card p-2 rounded-xl">
            <div className="flex space-x-2">
              {featuredProjects?.map((project, index) => (
                <button
                  key={project?.id}
                  onClick={() => setActiveProject(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeProject === index
                      ? 'bg-brand-primary text-white shadow-subtle'
                      : 'text-muted-foreground hover:text-foreground hover:bg-surface'
                  }`}
                >
                  {project?.category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Active Project Display */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Project Image */}
          <motion.div
            key={`image-${activeProject}`}
            variants={projectVariants}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-glassmorphic">
              <Image
                src={featuredProjects?.[activeProject]?.image}
                alt={featuredProjects?.[activeProject]?.title}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background-canvas/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-2 text-white">
                    <Icon name="ExternalLink" size={20} />
                    <span className="font-medium">View Project Details</span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <div className="glass-card px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-trust-builder rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-hierarchy-primary">
                      {featuredProjects?.[activeProject]?.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {featuredProjects?.[activeProject]?.technologies?.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card px-3 py-1 rounded-full text-sm font-medium text-brand-primary"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            key={`details-${activeProject}`}
            variants={projectVariants}
            className="space-y-6"
          >
            {/* Project Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm font-medium text-conversion-accent">
                  {featuredProjects?.[activeProject]?.year}
                </span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">
                  {featuredProjects?.[activeProject]?.category}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-foreground mb-4">
                {featuredProjects?.[activeProject]?.title}
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {featuredProjects?.[activeProject]?.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
              <div className="space-y-2">
                {featuredProjects?.[activeProject]?.features?.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <Icon name="CheckCircle" size={16} className="text-trust-builder flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Project Metrics */}
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(featuredProjects?.[activeProject]?.metrics)?.map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="glass-card p-4 rounded-xl text-center"
                >
                  <div className="text-xl font-bold text-brand-primary">{value}</div>
                  <div className="text-sm text-muted-foreground capitalize">{key}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects">
                <Button
                  variant="default"
                  iconName="ExternalLink"
                  iconPosition="left"
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white"
                >
                  View Case Study
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button
                  variant="outline"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="border-conversion-accent text-conversion-accent hover:bg-conversion-accent hover:text-white"
                >
                  Discuss Similar Project
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link to="/projects">
            <Button
              variant="outline"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white shadow-subtle"
            >
              View All Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;