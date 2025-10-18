import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TechStackSection from './components/TechStackSection';
import FeaturedProjectsSection from './components/FeaturedProjectsSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

const Homepage = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>VisalNann - Senior Full-Stack Developer | Laravel & JavaScript Expert</title>
        <meta name="description" content="Senior Full-Stack Developer specializing in Laravel ecosystem and modern JavaScript frameworks. Transforming business requirements into scalable web solutions with 5+ years of experience." />
        <meta name="keywords" content="Laravel Developer, Vue.js Developer, React Developer, Full-Stack Developer, PHP Developer, JavaScript Developer, Web Development, Cambodia Developer" />
        <meta property="og:title" content="VisalNann - Senior Full-Stack Developer" />
        <meta property="og:description" content="Architecting scalable web solutions with Laravel ecosystem and modern JavaScript frameworks. Available for full-stack projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://visalnann.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VisalNann - Senior Full-Stack Developer" />
        <meta name="twitter:description" content="Senior Full-Stack Developer specializing in Laravel and modern JavaScript frameworks." />
        <link rel="canonical" href="https://visalnann.dev" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <HeroSection />

          {/* Tech Stack Section */}
          <TechStackSection />

          {/* Featured Projects Section */}
          {/* <FeaturedProjectsSection /> */}

          {/* Services Section */}
          <ServicesSection />

          {/* Testimonials Section */}
          {/* <TestimonialsSection /> */}

          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="bg-background-canvas text-hierarchy-primary py-12 border-t border-glass">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand Section */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">V</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">VisalNann</h3>
                    <p className="text-hierarchy-secondary text-sm">Full-Stack Developer</p>
                  </div>
                </div>
                <p className="text-hierarchy-secondary leading-relaxed mb-4 max-w-md">
                  Transforming business ideas into powerful web solutions with Laravel ecosystem 
                  and modern JavaScript frameworks. Based in Phnom Penh, Cambodia.
                </p>
                <div className="flex space-x-4">
                  <a href="https://github.com/Nann-Visal" target="_blank" rel="noopener noreferrer" 
                     className="text-hierarchy-secondary hover:text-brand-primary transition-colors">
                    <span className="sr-only">GitHub</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/visal-nann/" target="_blank" rel="noopener noreferrer"
                     className="text-hierarchy-secondary hover:text-brand-primary transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://t.me/visalnann" target="_blank" rel="noopener noreferrer"
                     className="text-hierarchy-secondary hover:text-brand-primary transition-colors">
                    <span className="sr-only">Telegram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-hierarchy-primary mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-hierarchy-secondary hover:text-brand-primary transition-colors">About Me</a></li>
                  {/* <li><a href="/projects" className="text-hierarchy-secondary hover:text-brand-primary transition-colors">Projects</a></li>
                  <li><a href="/services" className="text-hierarchy-secondary hover:text-brand-primary transition-colors">Services</a></li> */}
                  <li><a href="/experience" className="text-hierarchy-secondary hover:text-brand-primary transition-colors">Experience</a></li>
                  <li><a href="/contact" className="text-hierarchy-secondary hover:text-brand-primary transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold text-hierarchy-primary mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-hierarchy-secondary">
                    <span className="block">visalnann@gmail.com</span>
                  </li>
                  <li className="text-hierarchy-secondary">
                    <span className="block">Phnom Penh, Cambodia</span>
                  </li>
                  <li className="text-hierarchy-secondary">
                    <span className="block">GMT+7 Timezone</span>
                  </li>
                  <li>
                    <a href="/contact" className="text-brand-primary hover:text-brand-primary/80 transition-colors">
                      Get In Touch →
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-glass mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-hierarchy-secondary text-sm">
                © {new Date()?.getFullYear()} VisalNann. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="/privacy" className="text-hierarchy-secondary hover:text-brand-primary text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-hierarchy-secondary hover:text-brand-primary text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;