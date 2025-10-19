import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 animate-blur-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Icon name="User" size={24} color="white" strokeWidth={2} />
                </div>
                <span className="text-blue-400 font-jetbrains-mono text-sm font-medium">
                  VisalNann
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Professional
                <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  Journey
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                From RUPP IT Engineering graduate to senior full-stack developer, 
                discover the evolution of technical expertise and professional growth 
                that defines modern web development excellence.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                variant="default"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
              >
                Download Resume
              </Button>
              <Button 
                variant="outline"
                size="lg"
                iconName="ExternalLink"
                iconPosition="right"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                onClick={() => {
                  window.open("https://www.linkedin.com/in/visal-nann/", "_blank", "noopener,noreferrer");
                }}
              >
                View LinkedIn
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-slate-400">Technologies</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
              
              {/* Main Image Container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
                <Image
                  src="assets/images/photo_2025-09-16_23-24-22.jpg"
                  alt="VisalNann - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center shadow-lg animate-float">
                <Icon name="Code2" size={24} color="#3B82F6" strokeWidth={2} />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <Icon name="Database" size={24} color="#06B6D4" strokeWidth={2} />
              </div>
              
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <Icon name="Zap" size={20} color="#F59E0B" strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;