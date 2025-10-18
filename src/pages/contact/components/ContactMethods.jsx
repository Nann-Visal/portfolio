import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 1,
      title: "Email",
      description: "For detailed project discussions and formal inquiries",
      value: "visalnann.dev@gmail.com",
      icon: "Mail",
      color: "blue",
      action: "mailto:visalnann.dev@gmail.com",
      responseTime: "Within 4 hours",
      preferred: true
    },
    {
      id: 2,
      title: "Telegram",
      description: "Quick questions and real-time collaboration",
      value: "@visalnann",
      icon: "MessageCircle",
      color: "cyan",
      action: "https://t.me/visalnann",
      responseTime: "Within 1 hour",
      preferred: false
    },
    {
      id: 3,
      title: "LinkedIn",
      description: "Professional networking and career opportunities",
      value: "linkedin.com/in/visalnann",
      icon: "Linkedin",
      color: "indigo",
      action: "https://www.linkedin.com/in/visal-nann/",
      responseTime: "Within 24 hours",
      preferred: false
    },
    {
      id: 4,
      title: "GitHub",
      description: "Code collaboration and technical discussions",
      value: "github.com/visalnann",
      icon: "Github",
      color: "slate",
      action: "https://github.com/Nann-Visal",
      responseTime: "Within 12 hours",
      preferred: false
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100",
      cyan: "bg-cyan-50 border-cyan-200 text-cyan-700 hover:bg-cyan-100",
      indigo: "bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100",
      slate: "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
    };
    return colors?.[color] || colors?.blue;
  };

  const getIconColor = (color) => {
    const colors = {
      blue: "rgb(29 78 216)",
      cyan: "rgb(14 116 144)",
      indigo: "rgb(67 56 202)",
      slate: "rgb(51 65 85)"
    };
    return colors?.[color] || colors?.blue;
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Choose Your Preferred Communication Channel
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I'm available through multiple channels to accommodate your communication preferences and project needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className={`relative p-6 rounded-xl border-2 transition-all duration-300 ${getColorClasses(method?.color)} ${
                method?.preferred ? 'ring-2 ring-amber-400 ring-offset-2' : ''
              }`}
            >
              {method?.preferred && (
                <div className="absolute -top-3 left-6 bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-sm font-semibold">
                  Preferred
                </div>
              )}
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <Icon name={method?.icon} size={24} color={getIconColor(method?.color)} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{method?.title}</h3>
                  <p className="text-sm opacity-80 mb-3">{method?.description}</p>
                  <p className="font-mono text-sm mb-3">{method?.value}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" size={16} />
                      <span>{method?.responseTime}</span>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(method?.action, '_blank')}
                      className="border-current text-current hover:bg-current hover:text-white"
                    >
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Currently available for new projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMethods;