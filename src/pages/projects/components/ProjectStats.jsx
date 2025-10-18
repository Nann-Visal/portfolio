import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ stats }) => {
  const getIconForStat = (label) => {
    const iconMap = {
      'Total Projects': 'FolderOpen',
      'Live Projects': 'Globe',
      'Technologies Used': 'Code2',
      'Years Experience': 'Calendar',
      'Client Satisfaction': 'Star',
      'Code Quality': 'Shield'
    };
    return iconMap?.[label] || 'BarChart3';
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {stats?.map((stat, index) => (
        <div
          key={index}
          className="glass-card p-4 rounded-xl text-center hover:shadow-elevation transition-all duration-300 interactive-lift"
        >
          <div className="flex justify-center mb-2">
            <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
              <Icon 
                name={getIconForStat(stat?.label)} 
                size={20} 
                className="text-brand-primary" 
              />
            </div>
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
          <div className="text-sm text-muted-foreground">{stat?.label}</div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;