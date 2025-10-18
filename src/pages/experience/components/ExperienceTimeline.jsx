import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ExperienceTimeline = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const experiences = [
    {
      id: 1,
      type: 'corporate',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'Phnom Penh, Cambodia',
      period: '2022 - Present',
      duration: '2+ years',
      description: `Leading development of enterprise-scale web applications using Laravel and Vue.js ecosystem. 
      Architected microservices infrastructure serving 10,000+ daily active users. 
      Mentored junior developers and established coding standards across development teams.`,
      achievements: [
        'Reduced application load time by 60% through optimization',
        'Led team of 5 developers on critical client projects',
        'Implemented CI/CD pipeline reducing deployment time by 80%',
        'Architected scalable database design handling 1M+ records'
      ],
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'Docker', 'AWS'],
      icon: 'Building2',
      color: 'brand-primary'
    },
    {
      id: 2,
      type: 'freelance',
      title: 'Full Stack Developer',
      company: 'Independent Contractor',
      location: 'Remote',
      period: '2020 - 2022',
      duration: '2 years',
      description: `Delivered custom web applications for diverse clients across education, agriculture, and content management sectors. 
      Specialized in Laravel backend development with modern frontend frameworks. 
      Maintained 100% client satisfaction rate with on-time project delivery.`,
      achievements: [
        'Completed 12+ projects across different industries',
        'Built school management system serving 500+ students',
        'Developed farm management platform with IoT integration',
        'Created CMS handling 50,000+ content pieces monthly'
      ],
      technologies: ['Laravel', 'PHP', 'JavaScript', 'MySQL', 'Bootstrap', 'jQuery'],
      icon: 'Laptop',
      color: 'conversion-accent'
    },
    {
      id: 3,
      type: 'corporate',
      title: 'Junior Web Developer',
      company: 'Digital Innovations Ltd',
      location: 'Phnom Penh, Cambodia',
      period: '2019 - 2020',
      duration: '1 year',
      description: `Started professional journey developing responsive websites and learning enterprise development practices. 
      Collaborated with senior developers on client projects while building foundational skills in modern web technologies. 
      Contributed to team success through dedication and rapid skill acquisition.`,
      achievements: [
        'Contributed to 8+ client websites and applications',
        'Learned Laravel framework and MVC architecture',
        'Implemented responsive designs for mobile optimization',
        'Participated in code reviews and agile development'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'Bootstrap'],
      icon: 'Code',
      color: 'trust-builder'
    },
    {
      id: 4,
      type: 'education',
      title: 'IT Engineering Student',
      company: 'Royal University of Phnom Penh (RUPP)',
      location: 'Phnom Penh, Cambodia',
      period: '2016 - 2020',
      duration: '4 years',
      description: `Completed Bachelor's degree in Information Technology Engineering with focus on software development and system design. 
      Built strong foundation in computer science principles, algorithms, and software engineering practices. 
      Participated in coding competitions and technical projects.`,
      achievements: [
        'Graduated with honors in IT Engineering','Led final year project on web application development','Participated in national programming competitions','Completed internship at local tech company'
      ],
      technologies: ['Java', 'C++', 'Python', 'SQL', 'Web Development', 'System Design'],
      icon: 'GraduationCap',color: 'secondary'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Experience', icon: 'List' },
    { key: 'corporate', label: 'Corporate', icon: 'Building2' },
    { key: 'freelance', label: 'Freelance', icon: 'Laptop' },
    { key: 'education', label: 'Education', icon: 'GraduationCap' }
  ];

  const filteredExperiences = activeFilter === 'all' 
    ? experiences 
    : experiences?.filter(exp => exp?.type === activeFilter);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-foreground mb-4">Career Timeline</h3>
        <p className="text-muted-foreground mb-8">Professional journey from education to senior development</p>
        
        <div className="flex flex-wrap justify-center gap-2">
          {filters?.map((filter) => (
            <Button
              key={filter?.key}
              variant={activeFilter === filter?.key ? 'default' : 'outline'}
              size="sm"
              iconName={filter?.icon}
              iconPosition="left"
              onClick={() => setActiveFilter(filter?.key)}
              className={activeFilter === filter?.key ? 'bg-brand-primary' : ''}
            >
              {filter?.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-conversion-accent to-trust-builder"></div>
        
        <div className="space-y-12">
          {filteredExperiences?.map((experience, index) => (
            <div
              key={experience?.id}
              className={`relative flex items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="glass-card p-6 rounded-2xl shadow-glassmorphic hover:shadow-elevation transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-${experience?.color}/10 rounded-xl flex items-center justify-center`}>
                        <Icon name={experience?.icon} size={24} color={`var(--color-${experience?.color})`} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{experience?.title}</h4>
                        <p className="text-brand-primary font-medium">{experience?.company}</p>
                        <p className="text-sm text-muted-foreground">{experience?.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-foreground">{experience?.period}</div>
                      <div className="text-xs text-muted-foreground">{experience?.duration}</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {experience?.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Key Achievements</h5>
                      <ul className="space-y-1">
                        {experience?.achievements?.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <Icon name="CheckCircle" size={16} color="var(--color-trust-builder)" className="mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience?.technologies?.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-background border-4 border-brand-primary rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;