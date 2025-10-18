import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToActionSection = () => {
  const contactMethods = [
    {
      name: "Email",
      value: "visalnann@example.com",
      icon: "Mail",
      color: "blue",
      action: "mailto:visalnann@example.com"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/visalnann",
      icon: "Linkedin",
      color: "blue",
      action: "https://www.linkedin.com/in/visal-nann/"
    },
    {
      name: "GitHub",
      value: "github.com/visalnann",
      icon: "Github",
      color: "slate",
      action: "https://github.com/Nann-Visal"
    },
    {
      name: "Telegram",
      value: "@visalnann",
      icon: "MessageCircle",
      color: "cyan",
      action: "https://t.me/visalnann"
    }
  ];

  const downloadOptions = [
    {
      name: "Resume PDF",
      description: "Comprehensive professional resume",
      icon: "FileText",
      format: "PDF",
      size: "2.1 MB"
    },
    {
      name: "Portfolio Deck",
      description: "Project showcase presentation",
      icon: "Presentation",
      format: "PDF",
      size: "5.8 MB"
    },
    {
      name: "Technical Profile",
      description: "Detailed technical skills overview",
      icon: "Code2",
      format: "PDF",
      size: "1.9 MB"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: 'bg-blue-600', light: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:bg-blue-700' },
      cyan: { bg: 'bg-cyan-600', light: 'bg-cyan-100', text: 'text-cyan-600', hover: 'hover:bg-cyan-700' },
      slate: { bg: 'bg-slate-600', light: 'bg-slate-100', text: 'text-slate-600', hover: 'hover:bg-slate-700' }
    };
    return colors?.[color] || colors?.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <Icon name="Rocket" size={24} color="white" strokeWidth={2} />
            </div>
            <span className="text-blue-400 font-jetbrains-mono text-sm font-medium">
              Let's Work Together
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Build Something
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
              Amazing?
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Whether you need a full-stack developer for your next project, technical consultation, 
            or want to discuss collaboration opportunities, I'm here to help bring your ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                variant="default"
                size="lg"
                iconName="MessageSquare"
                iconPosition="left"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg conversion-glow"
              >
                Start a Project
              </Button>
            </Link>
            
            {/* <Link to="/services">
              <Button 
                variant="outline"
                size="lg"
                iconName="Settings"
                iconPosition="left"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                View Services
              </Button>
            </Link> */}
          </div>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Methods */}
          <div className="glass-card p-8 rounded-2xl shadow-xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <Icon name="Phone" size={24} color="#3B82F6" strokeWidth={2} />
              <span>Get in Touch</span>
            </h3>
            
            <p className="text-slate-300 mb-6">
              Multiple ways to connect and start the conversation about your next project.
            </p>
            
            <div className="space-y-4">
              {contactMethods?.map((method, index) => {
                const colorClasses = getColorClasses(method?.color);
                
                return (
                  <a
                    key={index}
                    href={method?.action}
                    target={method?.action?.startsWith('http') ? '_blank' : '_self'}
                    rel={method?.action?.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 ${colorClasses?.light} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={method?.icon} size={20} color={colorClasses?.text?.replace('text-', '#')} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{method?.name}</h4>
                      <p className="text-slate-400 text-sm">{method?.value}</p>
                    </div>
                    <div className="ml-auto">
                      <Icon name="ExternalLink" size={16} color="#94A3B8" strokeWidth={2} />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Download Resources */}
          <div className="glass-card p-8 rounded-2xl shadow-xl hidden">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <Icon name="Download" size={24} color="#10B981" strokeWidth={2} />
              <span>Download Resources</span>
            </h3>
            
            <p className="text-slate-300 mb-6">
              Get detailed information about experience, skills, and project portfolio.
            </p>
            
            <div className="space-y-4">
              {downloadOptions?.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon name={option?.icon} size={20} color="#10B981" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{option?.name}</h4>
                      <p className="text-slate-400 text-sm">{option?.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-emerald-400 font-medium text-sm">{option?.format}</div>
                    <div className="text-slate-500 text-xs">{option?.size}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-700">
              <Button 
                variant="default"
                fullWidth
                iconName="Download"
                iconPosition="left"
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                Download All Resources
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="text-center glass-card p-6 rounded-xl">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-slate-400 text-sm">Response Time</div>
          </div>
          <div className="text-center glass-card p-6 rounded-xl">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-slate-400 text-sm">Project Success</div>
          </div>
          <div className="text-center glass-card p-6 rounded-xl">
            <div className="text-3xl font-bold text-white mb-2">3+</div>
            <div className="text-slate-400 text-sm">Years Experience</div>
          </div>
          {/* <div className="text-center glass-card p-6 rounded-xl">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-slate-400 text-sm">Happy Clients</div>
          </div> */}
        </div>

        {/* Final Message */}
        <div className="text-center mt-16">
          <p className="text-slate-400 max-w-2xl mx-auto">
            Currently available for new projects and collaborations. 
            Let's discuss how we can work together to create exceptional web solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;