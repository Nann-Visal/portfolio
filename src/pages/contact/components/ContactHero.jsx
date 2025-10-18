import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-cyan-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-amber-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Icon name="MessageSquare" size={32} color="white" strokeWidth={2} />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
              Amazing Together
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Ready to transform your ideas into powerful web applications? I'm here to help you build scalable, 
            maintainable solutions using Laravel, Vue.js, and modern development practices.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} color="rgb(34 197 94)" />
              <span>Usually responds within 2 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Globe" size={20} color="rgb(34 197 94)" />
              <span>Available for international projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={20} color="rgb(34 197 94)" />
              <span>Currently accepting new projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;