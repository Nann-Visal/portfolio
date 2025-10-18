import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('backend');

  const skillCategories = {
    backend: {
      title: "Backend Development",
      icon: "Server",
      color: "blue",
      skills: [
        { name: "Laravel", level: 95, years: "2+ years", projects: 25, icon: "Code2" },
        { name: "PHP", level: 90, years: "3+ years", projects: 30, icon: "FileCode" },
        { name: "SQL", level: 85, years: "4+ years", projects: 28, icon: "Database" },
        { name: "Redis", level: 75, years: "4+ years", projects: 12, icon: "Zap" },
        { name: "RESTful APIs", level: 90, years: "1+ years", projects: 22, icon: "Globe" },
      ]
    },
    frontend: {
      title: "Frontend Development",
      icon: "Monitor",
      color: "emerald",
      skills: [
        { name: "Vue.js 3", level: 88, years: "3+ years", projects: 20, icon: "Layers" },
        { name: "JavaScript", level: 85, years: "4+ years", projects: 35, icon: "Code" },
        { name: "HTML5/CSS3", level: 90, years: "4+ years", projects: 40, icon: "Layout" },
        { name: "Tailwind CSS", level: 82, years: "2+ years", projects: 18, icon: "Palette" },
        { name: "Bootstrap", level: 85, years: "3+ years", projects: 25, icon: "Grid3x3" },
        { name: "Responsive Design", level: 88, years: "4+ years", projects: 30, icon: "Smartphone" }
      ]
    },
    tools: {
      title: "Tools & DevOps",
      icon: "Settings",
      color: "amber",
      skills: [
        { name: "Git/GitHub", level: 85, years: "4+ years", projects: 45, icon: "GitBranch" },
        { name: "Docker", level: 75, years: "3+ years", projects: 15, icon: "Package" },
        { name: "Linux Administration", level: 88, years: "4+ years", projects: 30, icon: "Terminal" },
        { name: "Network Configuration", level: 85, years: "1+ years", projects: 20, icon: "Wifi" },
        { name: "Package Management", level: 90, years: "4+ years", projects: 35, icon: "Download" },
        { name: "OS Installation", level: 92, years: "4+ years", projects: 40, icon: "HardDrive" },
        { name: "Composer", level: 85, years: "4+ years", projects: 25, icon: "Box" },
        { name: "NPM/Yarn", level: 80, years: "3+ years", projects: 22, icon: "Package2" }
      ]
    },
    soft: {
      title: "Professional Skills",
      icon: "Users",
      color: "purple",
      skills: [
        { name: "Requirement Analysis", level: 90, years: "2+ years", projects: 30, icon: "Search" },
        { name: "Stakeholder Communication", level: 85, years: "1+ years", projects: 25, icon: "MessageSquare" },
        { name: "Project Management", level: 80, years: "1+ years", projects: 20, icon: "Calendar" },
        { name: "Problem Solving", level: 92, years: "3+ years", projects: 40, icon: "Lightbulb" },
        { name: "Code Review", level: 85, years: "2+ years", projects: 35, icon: "Eye" },
        { name: "Team Collaboration", level: 88, years: "2+ years", projects: 28, icon: "Users2" }
      ]
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-600',
        light: 'bg-blue-100',
        text: 'text-blue-600',
        border: 'border-blue-200'
      },
      emerald: {
        bg: 'bg-emerald-600',
        light: 'bg-emerald-100',
        text: 'text-emerald-600',
        border: 'border-emerald-200'
      },
      amber: {
        bg: 'bg-amber-600',
        light: 'bg-amber-100',
        text: 'text-amber-600',
        border: 'border-amber-200'
      },
      purple: {
        bg: 'bg-purple-600',
        light: 'bg-purple-100',
        text: 'text-purple-600',
        border: 'border-purple-200'
      }
    };
    return colors?.[color] || colors?.blue;
  };

  const currentCategory = skillCategories?.[activeCategory];
  const colorClasses = getColorClasses(currentCategory?.color);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
              <Icon name="Target" size={24} color="white" strokeWidth={2} />
            </div>
            <span className="text-slate-600 font-jetbrains-mono text-sm font-medium">
              Technical Expertise
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Skills & Proficiency
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive overview of technical skills, professional capabilities, 
            and expertise levels developed through years of hands-on experience.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories)?.map(([key, category]) => {
            const isActive = activeCategory === key;
            const tabColorClasses = getColorClasses(category?.color);
            
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive 
                    ? `${tabColorClasses?.bg} text-white shadow-lg` 
                    : `${tabColorClasses?.light} ${tabColorClasses?.text} hover:shadow-md`
                }`}
              >
                <Icon name={category?.icon} size={20} strokeWidth={2} />
                <span>{category?.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory?.skills?.map((skill, index) => (
            <div
              key={skill?.name}
              className="glass-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${colorClasses?.light} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={skill?.icon} size={20}  strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{skill?.name}</h3>
                    <p className="text-sm text-slate-500">{skill?.years}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${colorClasses?.text}`}>
                    {skill?.level}%
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${colorClasses?.bg} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill?.level}%` }}
                  ></div>
                </div>
              </div>

              {/* Project Count */}
              {/* <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Projects completed:</span>
                <span className={`font-semibold ${colorClasses?.text}`}>
                  {skill?.projects}+
                </span>
              </div> */}
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 glass-card rounded-xl">
            <div className="text-3xl font-bold text-slate-900 mb-2">10+</div>
            <div className="text-slate-600">Technologies</div>
          </div>
          {/* <div className="text-center p-6 glass-card rounded-xl">
            <div className="text-3xl font-bold text-slate-900 mb-2">60+</div>
            <div className="text-slate-600">Projects</div>
          </div> */}
          <div className="text-center p-6 glass-card rounded-xl">
            <div className="text-3xl font-bold text-slate-900 mb-2">3+</div>
            <div className="text-slate-600">Years Experience</div>
          </div>
          <div className="text-center p-6 glass-card rounded-xl">
            <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
            <div className="text-slate-600">Support Client</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;