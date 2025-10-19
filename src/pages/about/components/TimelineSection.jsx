import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const [activeItem, setActiveItem] = useState(0);

  const timelineData = [
    {
      id: 1,
      year: "2024",
      title: "Senior Full‑Stack Developer",
      company: "Freelance & Corporate",
      type: "career",
      description: "Leading complex web application development projects with focus on Laravel ecosystem and modern JavaScript frameworks. Specializing in system architecture and stakeholder communication.",
      achievements: [
        "Architected 5+ enterprise‑level web applications",
        "Implemented advanced Laravel patterns with Spatie packages",
        "Delivered Vue3 + Composition API solutions",
        "Managed full project lifecycle from requirements to deployment"
      ],
      technologies: ["Laravel", "Vue3", "Database", "Linux", "Docker"],
      icon: "Briefcase",
      color: "blue"
    },
    {
      id: 2,
      year: "2023",
      title: "Full‑Stack Developer",
      company: "Corporate & Freelance",
      type: "career",
      description: "Expanded expertise in modern web technologies while maintaining strong foundation in PHP/Laravel development. Focus on creating maintainable, scalable solutions.",
      achievements: [
        "Built comprehensive school management system",
        "Developed custom CMS with advanced features",
        "Created farm management system",
        "Established best practices for code quality"
      ],
      technologies: ["Laravel", "Vue.js", "MySQL", "Redis", "Git"],
      icon: "Code",
      color: "emerald"
    },
    {
      id: 3,
      year: "2022",
      title: "Assistance Freelance",
      company: "Various Projects",
      type: "career",
      description: "Focused on building robust web applications with emphasis on user experience and performance optimization. Developed expertise in requirement analysis.",
      achievements: [
        "Completed 4+ web development projects",
        "Mastered Laravel framework fundamentals",
        "Implemented responsive design patterns",
        "Established client communication workflows"
      ],
      technologies: ["PHP", "Laravel", "JavaScript", "Bootstrap", "MySQL"],
      icon: "Globe",
      color: "amber"
    },
    {
      id: 4,
      year: "2021",
      title: "IT Engineering Graduate",
      company: "Royal University of Phnom Penh (RUPP)",
      type: "education",
      description: "Completed Bachelor’s degree in Information Technology Engineering with focus on software development and system analysis.",
      achievements: [
        "Graduated with honors in IT Engineering",
        "Specialized in software development methodologies",
        "Completed capstone project in web technologies",
        "Built foundation in computer science principles"
      ],
      technologies: ["Java", "C++", "Database Design", "System Analysis"],
      icon: "GraduationCap",
      color: "purple"
    },
    {
      id: 5,
      year: "2020‑2021",
      title: "Starter Point",
      company: "Learning & Development",
      type: "career",
      description: "Started professional development journey with focus on web technologies and modern development practices.",
      achievements: [
        "Built first commercial web applications",
        "Learned version control and collaboration",
        "Established coding standards and practices",
        "Developed problem‑solving methodologies"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "OOP"],
      icon: "Rocket",
      color: "cyan"
    }
  ];

  const getColorClasses = (color, isActive = false) => {
    const colors = {
      blue: {
        bg: isActive ? 'bg-blue-600' : 'bg-blue-100',
        text: isActive ? 'text-white' : 'text-blue-600',
        border: 'border-blue-200',
        accent: 'text-blue-600'
      },
      emerald: {
        bg: isActive ? 'bg-emerald-600' : 'bg-emerald-100',
        text: isActive ? 'text-white' : 'text-emerald-600',
        border: 'border-emerald-200',
        accent: 'text-emerald-600'
      },
      amber: {
        bg: isActive ? 'bg-amber-600' : 'bg-amber-100',
        text: isActive ? 'text-white' : 'text-amber-600',
        border: 'border-amber-200',
        accent: 'text-amber-600'
      },
      purple: {
        bg: isActive ? 'bg-purple-600' : 'bg-purple-100',
        text: isActive ? 'text-white' : 'text-purple-600',
        border: 'border-purple-200',
        accent: 'text-purple-600'
      },
      cyan: {
        bg: isActive ? 'bg-cyan-600' : 'bg-cyan-100',
        text: isActive ? 'text-white' : 'text-cyan-600',
        border: 'border-cyan-200',
        accent: 'text-cyan-600'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
              <Icon name="Clock" size={24} color="white" strokeWidth={2} />
            </div>
            <span className="text-slate-600 font-jetbrains-mono text-sm font-medium">
              Professional Timeline
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Career Journey & Milestones
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A chronological overview of professional growth, educational achievements, and key milestones that shaped expertise in full‑stack development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line – on mobile left aligned, on bigger screens centered */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isActive = activeItem === index;
              const colorClasses = getColorClasses(item.color, isActive);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } cursor-pointer group`}
                  onClick={() => setActiveItem(index)}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full ${colorClasses.bg} ${colorClasses.text} flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110`}>
                      <Icon name={item.icon} size={24} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 mt-10 md:mt-0 px-4 ${
                    isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className={`glass-card p-6 rounded-xl shadow-lg transition-all duration-300 ${
                      isActive ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                    }`}>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClasses.bg} ${colorClasses.text}`}>
                              {item.year}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              item.type === 'education'
                                ? 'bg-purple-100 text-purple-600'
                                : 'bg-slate-100 text-slate-600'
                            }`}>
                              {item.type === 'education' ? 'Education' : 'Career'}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-1">
                            {item.title}
                          </h3>
                          <p className={`font-medium ${colorClasses.accent}`}>
                            {item.company}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {item.achievements.map((ach, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-slate-600">
                              <Icon name="CheckCircle" size={16} color="#10B981" strokeWidth={2} className="mt-0.5 flex-shrink-0" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-12">
          {timelineData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveItem(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeItem === idx ? 'bg-blue-600' : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;