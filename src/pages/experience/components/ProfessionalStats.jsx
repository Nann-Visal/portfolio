import React from 'react';
import Icon from '../../../components/AppIcon';

const ProfessionalStats = () => {
  const stats = [
    {
      id: 1,
      icon: 'Calendar',
      value: '3+',
      label: 'Years Experience',
      description: 'Combined freelance and corporate development',
      color: 'brand-primary'
    },
    {
      id: 2,
      icon: 'FolderOpen',
      value: '10+',
      label: 'Projects Completed',
      description: 'Across education, agriculture, and enterprise sectors',
      color: 'conversion-accent'
    },
    {
      id: 4,
      icon: 'Award',
      value: '100%',
      label: 'Support Client',
      description: 'On-time delivery and quality assurance',
      color: 'secondary'
    },
    {
      id: 5,
      icon: 'Code2',
      value: '50K+',
      label: 'Lines of Code',
      description: 'Clean, maintainable, and well-documented',
      color: 'brand-primary'
    },
    {
      id: 6,
      icon: 'Zap',
      value: '80%',
      label: 'Performance Boost',
      description: 'Average improvement in application speed',
      color: 'conversion-accent'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats?.map((stat) => (
        <div
          key={stat?.id}
          className="glass-card p-6 rounded-2xl shadow-glassmorphic hover:shadow-elevation transition-all duration-300 group"
        >
          <div className="flex items-start space-x-4">
            <div className={`w-12 h-12 bg-${stat?.color}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <Icon name={stat?.icon} size={24} color={`var(--color-${stat?.color})`} />
            </div>
            <div className="flex-1">
              <div className={`text-3xl font-bold text-${stat?.color} mb-1`}>
                {stat?.value}
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {stat?.label}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat?.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalStats;