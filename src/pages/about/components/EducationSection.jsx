import React from 'react';
import Icon from '../../../components/AppIcon';

const EducationSection = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Information Technology Engineering",
      institution: "Royal University of Phnom Penh (RUPP)",
      period: "2021 - 2024",
      status: "Graduated with Honors",
      description: "Comprehensive program covering software development, system analysis, database design, and computer science fundamentals. Specialized in web technologies and modern development methodologies.",
      achievements: [
        "Graduated with Honors (GPA: 3.**/4.0)",
        "Completed capstone project in web application development",
        "Active member of IT Student Association",
        "Participated in programming competitions and hackathons"
      ],
      coursework: [
        "Software Engineering",
        "Database Systems",
        "Web Development",
        "System Analysis & Design",
        "Data Structures & Algorithms",
        "Computer Networks"
      ],
      icon: "GraduationCap",
      color: "blue"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Laravel Certified Developer",
      issuer: "Laravel",
      date: "2023",
      status: "Active",
      description: "Advanced certification demonstrating expertise in Laravel framework, including Eloquent ORM, Artisan commands, and best practices.",
      skills: ["Laravel Framework", "Eloquent ORM", "Artisan CLI", "Testing"],
      icon: "Award",
      color: "emerald"
    },
    {
      id: 2,
      name: "Vue.js Professional Certification",
      issuer: "Vue School",
      date: "2023",
      status: "Active",
      description: "Comprehensive certification covering Vue.js 3, Composition API, state management, and modern frontend development practices.",
      skills: ["Vue.js 3", "Composition API", "Vuex", "Vue Router"],
      icon: "Shield",
      color: "green"
    },
    {
      id: 3,
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2022",
      status: "Active",
      description: "Foundational certification demonstrating understanding of AWS cloud services, architecture, and deployment strategies.",
      skills: ["AWS Services", "Cloud Architecture", "EC2", "S3"],
      icon: "Cloud",
      color: "amber"
    },
    {
      id: 4,
      name: "MySQL Database Administrator",
      issuer: "Oracle",
      date: "2022",
      status: "Active",
      description: "Professional certification in MySQL database administration, optimization, and performance tuning.",
      skills: ["MySQL", "Database Optimization", "Performance Tuning", "Backup & Recovery"],
      icon: "Database",
      color: "purple"
    }
  ];

  const continuousLearning = [
    {
      platform: "Laracasts",
      courses: 25,
      hours: 150,
      focus: "Laravel & PHP",
      icon: "Play"
    },
    {
      platform: "Vue Mastery",
      courses: 15,
      hours: 80,
      focus: "Vue.js & Frontend",
      icon: "Monitor"
    },
    {
      platform: "Pluralsight",
      courses: 20,
      hours: 120,
      focus: "Full-Stack Development",
      icon: "BookOpen"
    },
    {
      platform: "GitHub",
      courses: "Open Source",
      hours: 200,
      focus: "Community Projects",
      icon: "GitBranch"
    },
    {
      platform: "Cloudstack",
      courses: "Open Source",
      hours: 200,
      focus: "Community",
      icon: "ServerCog"
    },
    {
      platform: "Linux Distribution",
      courses: "Community",
      hours: 200,
      focus: "Community",
      icon: "MonitorDot"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: 'bg-blue-600', light: 'bg-blue-100', text: 'text-blue-600' },
      emerald: { bg: 'bg-emerald-600', light: 'bg-emerald-100', text: 'text-emerald-600' },
      green: { bg: 'bg-green-600', light: 'bg-green-100', text: 'text-green-600' },
      amber: { bg: 'bg-amber-600', light: 'bg-amber-100', text: 'text-amber-600' },
      purple: { bg: 'bg-purple-600', light: 'bg-purple-100', text: 'text-purple-600' }
    };
    return colors?.[color] || colors?.blue;
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
              <Icon name="BookOpen" size={24} color="white" strokeWidth={2} />
            </div>
            <span className="text-slate-600 font-jetbrains-mono text-sm font-medium">
              Education & Learning
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Educational Foundation
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Academic background, professional certifications, and continuous learning 
            journey that forms the foundation of technical expertise and professional growth.
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Formal Education</h3>
          
          {educationData?.map((education) => {
            const colorClasses = getColorClasses(education?.color);
            
            return (
              <div key={education?.id} className="glass-card p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 ${colorClasses?.light} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon name={education?.icon} size={32} color={colorClasses?.text?.replace('text-', '#')} strokeWidth={2} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">
                          {education?.degree}
                        </h4>
                        <p className={`font-semibold ${colorClasses?.text} mb-1`}>
                          {education?.institution}
                        </p>
                        <p className="text-slate-600">{education?.period}</p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className={`px-4 py-2 ${colorClasses?.light} ${colorClasses?.text} rounded-full text-sm font-medium`}>
                          {education?.status}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      {education?.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-slate-900 mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {education?.achievements?.map((achievement, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <Icon name="CheckCircle" size={16} color="#10B981" strokeWidth={2} className="mt-0.5 flex-shrink-0" />
                              <span className="text-slate-600 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-slate-900 mb-3">Core Coursework:</h5>
                        <div className="flex flex-wrap gap-2">
                          {education?.coursework?.map((course, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Professional Certifications</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications?.map((cert) => {
              const colorClasses = getColorClasses(cert?.color);
              
              return (
                <div key={cert?.id} className="glass-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 ${colorClasses?.light} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon name={cert?.icon} size={24} color={colorClasses?.text?.replace('text-', '#')} strokeWidth={2} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-slate-900">{cert?.name}</h4>
                        <span className={`px-2 py-1 ${colorClasses?.light} ${colorClasses?.text} rounded text-xs font-medium`}>
                          {cert?.status}
                        </span>
                      </div>
                      <p className={`${colorClasses?.text} font-medium mb-1`}>{cert?.issuer}</p>
                      <p className="text-slate-500 text-sm">{cert?.date}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {cert?.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert?.skills?.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Continuous Learning */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Continuous Learning</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {continuousLearning?.map((platform, index) => (
              <div key={index} className="glass-card p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={platform?.icon} size={24} color="#64748B" strokeWidth={2} />
                </div>
                
                <h4 className="font-bold text-slate-900 mb-2">{platform?.platform}</h4>
                <p className="text-slate-600 text-sm mb-4">{platform?.focus}</p>
                
                <div className="space-y-2 hidden">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Courses:</span>
                    <span className="font-medium text-slate-900">{platform?.courses}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Hours:</span>
                    <span className="font-medium text-slate-900">{platform?.hours}+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Learning Stats */}
          {/* <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-8 bg-white p-6 rounded-xl shadow-lg">
              <div>
                <div className="text-2xl font-bold text-slate-900">60+</div>
                <div className="text-sm text-slate-600">Courses Completed</div>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div>
                <div className="text-2xl font-bold text-slate-900">550+</div>
                <div className="text-sm text-slate-600">Learning Hours</div>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div>
                <div className="text-2xl font-bold text-slate-900">4</div>
                <div className="text-sm text-slate-600">Certifications</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;