import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import SkillsSection from './components/SkillsSection';
import TestimonialsSection from './components/TestimonialsSection';
import EducationSection from './components/EducationSection';
import CallToActionSection from './components/CallToActionSection';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About VisalNann - Professional Journey & Expertise | Full Stack Developer</title>
        <meta 
          name="description" 
          content="Discover VisalNann's professional journey from RUPP IT Engineering graduate to senior full-stack developer. Explore skills, experience, education, and client testimonials showcasing 5+ years of Laravel and Vue.js expertise." 
        />
        <meta name="keywords" content="VisalNann, full stack developer, Laravel developer, Vue.js developer, RUPP graduate, web development, professional journey, technical skills, Cambodia developer" />
        <meta property="og:title" content="About VisalNann - Professional Journey & Expertise" />
        <meta property="og:description" content="Professional story from RUPP education to current expertise in Laravel and Vue.js development with 5+ years experience." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://visalnann.com/about" />
        <link rel="canonical" href="https://visalnann.com/about" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          {/* Hero Section with Professional Introduction */}
          <HeroSection />
          
          {/* Professional Timeline */}
          <TimelineSection />
          
          {/* Skills & Expertise */}
          <SkillsSection />
          
          {/* Client Testimonials */}
          {/* <TestimonialsSection /> */}
          
          {/* Education & Certifications */}
          <EducationSection />
          
          {/* Call to Action */}
          <CallToActionSection />
        </main>
      </div>
    </>
  );
};

export default About;