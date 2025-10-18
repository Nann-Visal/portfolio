import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectModal from './components/ProjectModal';
import ProjectStats from './components/ProjectStats';
import FeaturedProject from './components/FeaturedProject';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTechnology, setSelectedTechnology] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "School Management System",
      category: "Education Technology",
      description: "Comprehensive school management platform handling student enrollment, academic records, fee management, and parent-teacher communication.",
      fullDescription: `A complete school management ecosystem designed to streamline educational administration and enhance communication between students, teachers, and parents. The system handles everything from student enrollment and academic records to fee management and examination scheduling.\n\nBuilt with Laravel's robust architecture and Vue.js for dynamic user interfaces, this platform serves over 2,000 students across multiple departments. The system includes role-based access control, automated report generation, and real-time notifications.`,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      techStack: ["Laravel", "Vue.js", "MySQL", "Bootstrap", "PHP"],
      status: "Live",
      duration: "8 months",
      teamSize: "4 developers",
      role: "Lead Full-Stack Developer",
      complexity: "High",
      featured: true,
      liveUrl: "https://school-demo.visalnann.com",
      githubUrl: "https://github.com/Nann-Visal/school-management",
      highlights: [
        "Automated student enrollment and academic record management",
        "Real-time parent-teacher communication portal",
        "Comprehensive fee management with payment tracking",
        "Advanced reporting and analytics dashboard"
      ],
      features: [
        "Student Information Management",
        "Academic Records & Transcripts",
        "Fee Management & Payment Tracking",
        "Parent-Teacher Communication Portal",
        "Examination & Grading System",
        "Attendance Tracking",
        "Library Management",
        "Transport Management",
        "Event & Notice Management",
        "Advanced Reporting & Analytics"
      ],
      challenges: [
        {
          title: "Complex Role-Based Access Control",
          problem: "Managing different permission levels for students, teachers, parents, and administrators while maintaining security.",
          solution: "Implemented Laravel\'s built-in authorization system with custom policies and middleware for granular permission control."
        },
        {
          title: "Real-Time Communication",
          problem: "Enabling instant messaging between parents and teachers without compromising privacy.",
          solution: "Built a secure messaging system with Laravel Echo and Pusher for real-time updates and message encryption."
        }
      ],
      impact: [
        { value: "2,000+", label: "Active Students" },
        { value: "150+", label: "Teachers" },
        { value: "95%", label: "User Satisfaction" }
      ]
    },
    {
      id: 2,
      title: "Content Management System",
      category: "Web Development",
      description: "Custom CMS platform with advanced content editing, multi-language support, and SEO optimization for enterprise clients.",
      fullDescription: `A powerful content management system built from the ground up to handle complex content workflows and multi-language publishing. The platform features a drag-and-drop page builder, advanced SEO tools, and comprehensive user management.\n\nDesigned for enterprise clients who need more flexibility than traditional CMS platforms offer. The system includes custom post types, advanced taxonomy management, and integration with popular third-party services.`,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      techStack: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS", "JavaScript"],
      status: "Live",
      duration: "6 months",
      teamSize: "3 developers",
      role: "Full-Stack Developer",
      complexity: "High",
      featured: false,
      liveUrl: "https://cms-demo.visalnann.com",
      githubUrl: "https://github.com/Nann-Visal/custom-cms",
      highlights: [
        "Drag-and-drop page builder with custom components",
        "Multi-language content management",
        "Advanced SEO optimization tools",
        "Custom post types and taxonomies"
      ],
      features: [
        "Visual Page Builder",
        "Multi-language Support",
        "SEO Optimization Tools",
        "Custom Post Types",
        "Media Library Management",
        "User Role Management",
        "Comment System",
        "Newsletter Integration",
        "Analytics Dashboard",
        "Backup & Restore"
      ],
      challenges: [
        {
          title: "Performance Optimization",
          problem: "Handling large amounts of content while maintaining fast page load times.",
          solution: "Implemented Laravel\'s caching system with Redis and optimized database queries using Eloquent relationships."
        },
        {
          title: "Multi-language Content",
          problem: "Managing content translations and maintaining consistency across languages.",
          solution: "Built a custom translation system with Laravel\'s localization features and automated translation workflows."
        }
      ],
      impact: [
        { value: "50+", label: "Websites Powered" },
        { value: "10k+", label: "Pages Created" },
        { value: "99.9%", label: "Uptime" }
      ]
    },
    {
      id: 3,
      title: "Farm Management Platform",
      category: "Agriculture Technology",
      description: "IoT-integrated farm management system for crop monitoring, irrigation control, and harvest optimization.",
      fullDescription: `An innovative farm management platform that combines IoT sensors, weather data, and machine learning to optimize agricultural operations. The system provides real-time monitoring of soil conditions, automated irrigation control, and predictive analytics for crop yield optimization.\n\nIntegrated with various IoT devices and weather APIs to provide farmers with actionable insights. The platform includes mobile applications for field workers and comprehensive dashboards for farm managers.`,
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
      techStack: ["Laravel", "Vue.js", "MySQL", "Node.js", "JavaScript"],
      status: "Live",
      duration: "10 months",
      teamSize: "5 developers",
      role: "Backend Lead Developer",
      complexity: "Very High",
      featured: false,
      liveUrl: "https://farm-demo.visalnann.com",
      githubUrl: "https://github.com/Nann-Visal/farm-management",
      highlights: [
        "IoT sensor integration for real-time monitoring",
        "Automated irrigation control system",
        "Weather-based crop recommendations",
        "Harvest optimization algorithms"
      ],
      features: [
        "IoT Sensor Integration",
        "Real-time Crop Monitoring",
        "Automated Irrigation Control",
        "Weather Data Integration",
        "Crop Planning & Scheduling",
        "Inventory Management",
        "Financial Tracking",
        "Mobile Field Applications",
        "Predictive Analytics",
        "Compliance Reporting"
      ],
      challenges: [
        {
          title: "IoT Data Processing",
          problem: "Handling large volumes of sensor data in real-time while maintaining system performance.",
          solution: "Implemented a queue-based system with Laravel Jobs and Redis for efficient data processing and storage."
        },
        {
          title: "Weather API Integration",
          problem: "Integrating multiple weather services and handling API failures gracefully.",
          solution: "Built a robust API abstraction layer with fallback mechanisms and data caching for reliability."
        }
      ],
      impact: [
        { value: "500+", label: "Farms Managed" },
        { value: "25%", label: "Yield Increase" },
        { value: "30%", label: "Water Savings" }
      ]
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      category: "E-Commerce",
      description: "Multi-vendor e-commerce platform with advanced inventory management, payment processing, and analytics.",
      fullDescription: `A comprehensive multi-vendor e-commerce platform designed to handle complex business requirements including inventory management, order processing, and vendor management. The platform supports multiple payment gateways, shipping integrations, and advanced analytics.\n\nBuilt with scalability in mind, the platform can handle thousands of products and concurrent users. Features include automated inventory tracking, intelligent product recommendations, and comprehensive vendor dashboards.`,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      techStack: ["Laravel", "React", "MySQL", "Tailwind CSS", "Node.js"],
      status: "In Development",
      duration: "12 months",
      teamSize: "6 developers",
      role: "Technical Lead",
      complexity: "Very High",
      featured: false,
      githubUrl: "https://github.com/Nann-Visal/ecommerce-platform",
      highlights: [
        "Multi-vendor marketplace functionality",
        "Advanced inventory management system",
        "Integrated payment processing",
        "Comprehensive analytics dashboard"
      ],
      features: [
        "Multi-vendor Management",
        "Product Catalog Management",
        "Order Processing System",
        "Payment Gateway Integration",
        "Shipping & Logistics",
        "Inventory Tracking",
        "Customer Management",
        "Analytics & Reporting",
        "Mobile Responsive Design",
        "SEO Optimization"
      ],
      challenges: [
        {
          title: "Scalability Requirements",
          problem: "Designing a system that can handle thousands of concurrent users and transactions.",
          solution: "Implemented microservices architecture with Laravel and optimized database design for high performance."
        },
        {
          title: "Payment Security",
          problem: "Ensuring secure payment processing while maintaining user experience.",
          solution: "Integrated multiple payment gateways with PCI compliance and implemented fraud detection mechanisms."
        }
      ],
      impact: [
        { value: "1,000+", label: "Products Listed" },
        { value: "50+", label: "Active Vendors" },
        { value: "98%", label: "Payment Success" }
      ]
    },
    {
      id: 5,
      title: "Healthcare Management System",
      category: "Healthcare Technology",
      description: "Comprehensive healthcare management platform for patient records, appointment scheduling, and telemedicine.",
      fullDescription: `A complete healthcare management solution designed to streamline medical practice operations and improve patient care. The system handles patient records, appointment scheduling, billing, and includes telemedicine capabilities for remote consultations.\n\nBuilt with strict compliance to healthcare regulations and data privacy requirements. The platform integrates with medical devices and laboratory systems for comprehensive patient care management.`,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      techStack: ["Laravel", "Vue.js", "MySQL", "Bootstrap", "PHP"],
      status: "Live",
      duration: "9 months",
      teamSize: "4 developers",
      role: "Full-Stack Developer",
      complexity: "High",
      featured: false,
      liveUrl: "https://healthcare-demo.visalnann.com",
      githubUrl: "https://github.com/Nann-Visal/healthcare-management",
      highlights: [
        "HIPAA compliant patient record management",
        "Integrated telemedicine platform",
        "Automated appointment scheduling",
        "Comprehensive billing system"
      ],
      features: [
        "Patient Record Management",
        "Appointment Scheduling",
        "Telemedicine Integration",
        "Billing & Insurance",
        "Prescription Management",
        "Laboratory Integration",
        "Medical Device Integration",
        "Reporting & Analytics",
        "Mobile Applications",
        "Compliance Management"
      ],
      challenges: [
        {
          title: "HIPAA Compliance",
          problem: "Ensuring all patient data handling meets strict healthcare privacy regulations.",
          solution: "Implemented comprehensive encryption, audit logging, and access controls following HIPAA guidelines."
        },
        {
          title: "Real-time Communication",
          problem: "Enabling secure video consultations between doctors and patients.",
          solution: "Integrated WebRTC technology with end-to-end encryption for secure telemedicine sessions."
        }
      ],
      impact: [
        { value: "5,000+", label: "Patients Managed" },
        { value: "100+", label: "Healthcare Providers" },
        { value: "99.5%", label: "System Uptime" }
      ]
    }
  ];

  // Mock statistics
  const projectStats = [
    { value: "15+", label: "Total Projects" },
    { value: "12", label: "Live Projects" },
    { value: "8+", label: "Technologies Used" },
    { value: "5+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "A+", label: "Code Quality" }
  ];

  // Extract unique categories and technologies
  const categories = [...new Set(projects.map(project => project.category))];
  const technologies = [...new Set(projects.flatMap(project => project.techStack))];

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    return projects?.filter(project => {
      const categoryMatch = selectedCategory === 'all' || project?.category === selectedCategory;
      const technologyMatch = selectedTechnology === 'all' || project?.techStack?.includes(selectedTechnology);
      return categoryMatch && technologyMatch;
    });
  }, [projects, selectedCategory, selectedTechnology]);

  // Get featured project
  const featuredProject = projects?.find(project => project?.featured);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSelectedTechnology('all');
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Projects - VisalNann Portfolio | Full-Stack Developer Projects & Case Studies</title>
        <meta name="description" content="Explore VisalNann's portfolio of full-stack development projects including school management systems, CMS platforms, and farm management solutions built with Laravel and Vue.js." />
        <meta name="keywords" content="VisalNann projects, Laravel projects, Vue.js applications, full-stack development, school management system, CMS development, farm management platform" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Icon name="FolderOpen" size={24} className="text-brand-primary" />
                <span className="text-brand-primary font-semibold">Portfolio Showcase</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Featured Projects &
                <span className="text-brand-primary"> Case Studies</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore my journey through complex full-stack development projects, from school management systems to IoT-integrated farm platforms. Each project showcases technical expertise, problem-solving approach, and measurable business impact.
              </p>
            </div>

            {/* Project Statistics */}
            <ProjectStats stats={projectStats} />
          </div>
        </section>

        {/* Featured Project */}
        {featuredProject && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FeaturedProject 
                project={featuredProject} 
                onViewDetails={handleViewDetails}
              />
            </div>
          </section>
        )}

        {/* Projects Grid */}
        <section className="py-16 bg-surface/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">All Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse through my complete portfolio of full-stack development projects, each demonstrating different aspects of modern web development and system architecture.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Filter Sidebar */}
              <div className="lg:col-span-1">
                <ProjectFilter
                  categories={categories}
                  technologies={technologies}
                  selectedCategory={selectedCategory}
                  selectedTechnology={selectedTechnology}
                  onCategoryChange={setSelectedCategory}
                  onTechnologyChange={setSelectedTechnology}
                  onClearFilters={handleClearFilters}
                  projectCount={filteredProjects?.length}
                />
              </div>

              {/* Projects Grid */}
              <div className="lg:col-span-3">
                {filteredProjects?.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredProjects?.map((project) => (
                      <ProjectCard
                        key={project?.id}
                        project={project}
                        onViewDetails={handleViewDetails}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="glass-card p-12 rounded-xl text-center">
                    <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">No Projects Found</h3>
                    <p className="text-muted-foreground mb-6">
                      No projects match your current filter criteria. Try adjusting your filters or clearing them to see all projects.
                    </p>
                    <Button
                      variant="outline"
                      iconName="RotateCcw"
                      iconPosition="left"
                      onClick={handleClearFilters}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-brand-primary to-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how I can help bring your ideas to life with modern web technologies and proven development practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-white text-brand-primary hover:bg-white/90"
              >
                Start a Conversation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-brand-primary"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Projects;