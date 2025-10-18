import React from 'react';
import Icon from '../../../components/AppIcon';


const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      title: 'Laravel Certified Developer',
      issuer: 'Laravel LLC',
      date: '2023',
      status: 'Verified',
      description: 'Advanced Laravel framework certification covering Eloquent ORM, Artisan commands, and application architecture.',
      badge: 'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=100&h=100&fit=crop',
      skills: ['Laravel', 'Eloquent ORM', 'Artisan', 'Testing'],
      icon: 'Award',
      color: 'brand-primary'
    },
    {
      id: 2,
      title: 'Vue.js Professional Certification',
      issuer: 'Vue School',
      date: '2022',
      status: 'Verified',
      description: 'Comprehensive Vue.js certification including Composition API, Vuex state management, and component architecture.',
      badge: 'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=100&h=100&fit=crop',
      skills: ['Vue.js', 'Vuex', 'Composition API', 'Vue Router'],
      icon: 'CheckCircle',
      color: 'trust-builder'
    },
    {
      id: 3,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023',
      status: 'Active',
      description: 'Foundational AWS certification covering cloud concepts, security, and core AWS services.',
      badge: 'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=100&h=100&fit=crop',
      skills: ['AWS', 'Cloud Computing', 'S3', 'EC2'],
      icon: 'Cloud',
      color: 'conversion-accent'
    },
    {
      id: 4,
      title: 'MySQL Database Administrator',
      issuer: 'Oracle Corporation',
      date: '2022',
      status: 'Verified',
      description: 'Database administration certification covering performance optimization, backup strategies, and security.',
      badge: 'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=100&h=100&fit=crop',
      skills: ['MySQL', 'Database Design', 'Performance Tuning', 'Security'],
      icon: 'Database',
      color: 'secondary'
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Information Technology Engineering',
      institution: 'Royal University of Phnom Penh (RUPP)',
      period: '2016 - 2020',
      gpa: '3.8/4.0',
      achievements: [
        'Graduated with Honors',
        'Dean\'s List for 3 consecutive semesters',
        'Led final year project on web application development',
        'Active member of Programming Club'
      ],
      icon: 'GraduationCap',
      color: 'brand-primary'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Certifications */}
      <div>
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-2">Professional Certifications</h3>
          <p className="text-muted-foreground">Verified credentials and continuous learning achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications?.map((cert) => (
            <div
              key={cert?.id}
              className="glass-card p-6 rounded-2xl shadow-glassmorphic hover:shadow-elevation transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-${cert?.color}/10 rounded-xl flex items-center justify-center`}>
                    <Icon name={cert?.icon} size={24} color={`var(--color-${cert?.color})`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{cert?.title}</h4>
                    <p className="text-brand-primary font-medium">{cert?.issuer}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-foreground">{cert?.date}</div>
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    cert?.status === 'Verified' 
                      ? 'bg-trust-builder/10 text-trust-builder' :'bg-conversion-accent/10 text-conversion-accent'
                  }`}>
                    {cert?.status}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {cert?.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cert?.skills?.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Education */}
      <div>
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-2">Education</h3>
          <p className="text-muted-foreground">Academic foundation and achievements</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education?.map((edu) => (
            <div
              key={edu?.id}
              className="glass-card p-8 rounded-2xl shadow-glassmorphic"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 bg-${edu?.color}/10 rounded-2xl flex items-center justify-center`}>
                  <Icon name={edu?.icon} size={32} color={`var(--color-${edu?.color})`} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-foreground mb-2">{edu?.degree}</h4>
                      <p className="text-brand-primary font-medium text-lg">{edu?.institution}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="text-lg font-medium text-foreground">{edu?.period}</div>
                      <div className="text-conversion-accent font-semibold">GPA: {edu?.gpa}</div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Key Achievements</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu?.achievements?.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Icon name="CheckCircle" size={16} color="var(--color-trust-builder)" className="mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;