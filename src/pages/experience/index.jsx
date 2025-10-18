import React from 'react';
import Header from '../../components/ui/Header';
import ExperienceHeader from './components/ExperienceHeader';
import ProfessionalStats from './components/ProfessionalStats';
import SkillRadarChart from './components/SkillRadarChart';
import ExperienceTimeline from './components/ExperienceTimeline';
import TestimonialsSection from './components/TestimonialsSection';
import CertificationsSection from './components/CertificationsSection';

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ExperienceHeader />
          </div>
        </section>

        {/* Professional Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Professional Impact</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Measurable results and achievements across 3+ years of development experience
              </p>
            </div>
            <ProfessionalStats />
          </div>
        </section>

        {/* Skills Radar Chart */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SkillRadarChart />
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface/50">
          <div className="max-w-7xl mx-auto">
            <ExperienceTimeline />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <TestimonialsSection />
          </div>
        </section>

        {/* Certifications & Education */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface/50">
          <div className="max-w-7xl mx-auto">
            <CertificationsSection />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-12 rounded-2xl shadow-glassmorphic">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how my experience and expertise can help bring your next project to life. 
                From concept to deployment, I'm here to deliver exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-brand-primary text-white font-medium rounded-lg hover:bg-brand-primary/90 transition-colors duration-300"
                >
                  Start a Project
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3 border border-brand-primary text-brand-primary font-medium rounded-lg hover:bg-brand-primary hover:text-white transition-colors duration-300"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-canvas text-hierarchy-primary py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">VN</span>
            </div>
            <span className="text-xl font-bold">VisalNann</span>
          </div>
          <p className="text-hierarchy-secondary mb-4">
            Full Stack Developer specializing in Laravel & Vue.js
          </p>
          <p className="text-sm text-hierarchy-secondary">
            © {new Date()?.getFullYear()} VisalNann. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Experience;