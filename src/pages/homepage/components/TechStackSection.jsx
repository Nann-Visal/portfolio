import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechStackSection = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const techCategories = [
    {
      category: 'Backend Development',
      icon: 'Server',
      technologies: [
        { name: 'Laravel', icon: 'Code2', proficiency: 95, projects: 25, description: 'Advanced Laravel development with Eloquent ORM, Artisan commands, and custom packages' },
        { name: 'PHP', icon: 'FileCode', proficiency: 95, projects: 30, description: 'Modern PHP 8+ with OOP principles, design patterns, and performance optimization' },
        { name: 'Node.js', icon: 'Hexagon', proficiency: 50, projects: 15, description: 'Server-side JavaScript with Express.js and real-time applications' },
        { name: 'Database', icon: 'Database', proficiency: 88, projects: 35, description: 'Database design, optimization, and complex query development' }
      ]
    },
    {
      category: 'Frontend Development',
      icon: 'Monitor',
      technologies: [
        { name: 'Vue.js', icon: 'Layers', proficiency: 90, projects: 20, description: 'Vue 3 Composition API, Vuex/Pinia state management, and component architecture' },
        { name: 'React', icon: 'Atom', proficiency: 50, projects: 18, description: 'Modern React with hooks, context API, and performance optimization' },
        { name: 'JavaScript', icon: 'Zap', proficiency: 90, projects: 40, description: 'ES6+ features, async programming, and modern JavaScript patterns' },
        { name: 'Tailwind CSS', icon: 'Palette', proficiency: 92, projects: 25, description: 'Utility-first CSS framework with custom design systems' }
      ]
    },
    {
      category: 'Development Tools',
      icon: 'Settings',
      technologies: [
        { name: 'Git', icon: 'GitBranch', proficiency: 90, projects: 50, description: 'Version control, branching strategies, and collaborative development' },
        { name: 'Docker', icon: 'Package', proficiency: 75, projects: 12, description: 'Containerization and development environment management' },
        { name: 'AWS', icon: 'Cloud', proficiency: 70, projects: 8, description: 'Cloud deployment, S3, EC2, and serverless architectures' },
        { name: 'Vite', icon: 'Zap', proficiency: 85, projects: 15, description: 'Modern build tool for fast development and optimized production builds' }
      ]
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

  const categoryVariants = {
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

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-transparent to-accent"></div>
        {[...Array(20)]?.map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            <Icon name="Code" size={16} className="text-brand-primary" />
          </motion.div>
        ))}
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
            <Icon name="Code2" size={16} className="text-brand-primary" />
            <span className="text-sm font-medium text-muted-foreground">Technical Expertise</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Full-Stack Technology
            <span className="block text-brand-primary">Mastery</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise across the entire web development stack, from database architecture 
            to user interface design, with a focus on scalable and maintainable solutions.
          </p>
        </motion.div>

        {/* Tech Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {techCategories?.map((category, categoryIndex) => (
            <motion.div
              key={category?.category}
              variants={categoryVariants}
              className="glass-card rounded-2xl p-8 shadow-glassmorphic hover:shadow-elevation transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center">
                  <Icon name={category?.icon} size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{category?.category}</h3>
                  <p className="text-muted-foreground">Professional-grade tools and frameworks</p>
                </div>
              </div>

              {/* Technologies Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category?.technologies?.map((tech, techIndex) => (
                  <motion.div
                    key={tech?.name}
                    variants={techVariants}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setHoveredTech(`${categoryIndex}-${techIndex}`)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="glass-card p-6 rounded-xl hover:shadow-glassmorphic transition-all duration-300 group-hover:scale-105 h-full">
                      {/* Tech Icon & Name */}
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon name={tech?.icon} size={20} color="white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground group-hover:text-brand-primary transition-colors">
                            {tech?.name}
                          </h4>
                          <p className="text-sm text-muted-foreground hidden">{tech?.projects} projects</p>
                        </div>
                      </div>

                      {/* Proficiency Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-muted-foreground">Proficiency</span>
                          <span className="text-sm font-bold text-brand-primary">{tech?.proficiency}%</span>
                        </div>
                        <div className="w-full bg-border rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${tech?.proficiency}%` } : {}}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.2 + techIndex * 0.1,
                              ease: "easeOut"
                            }}
                            className="h-2 bg-gradient-to-r from-brand-primary to-accent rounded-full"
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tech?.description}
                      </p>

                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: hoveredTech === `${categoryIndex}-${techIndex}` ? 1 : 0,
                          scale: hoveredTech === `${categoryIndex}-${techIndex}` ? 1 : 0.8
                        }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-accent/10 rounded-xl backdrop-blur-sm flex items-center justify-center pointer-events-none"
                      >
                        <div className="text-center">
                          <Icon name="Eye" size={24} className="text-brand-primary mx-auto mb-2" />
                          <p className="text-sm font-medium text-brand-primary">View Projects</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-2xl shadow-glassmorphic max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how these technologies can solve your business challenges and create exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-brand-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-primary/90 transition-colors"
              >
                <Icon name="FolderOpen" size={18} />
                <span>View Portfolio</span>
              </motion.a> */}
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 border border-brand-primary text-brand-primary px-6 py-3 rounded-lg font-medium hover:bg-brand-primary hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" size={18} />
                <span>Start Project</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;