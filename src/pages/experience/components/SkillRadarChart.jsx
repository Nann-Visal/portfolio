import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import Icon from '../../../components/AppIcon';

const SkillRadarChart = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skillData = [
    { skill: 'Laravel', level: 95, projects: 12, icon: 'Code2' },
    { skill: 'Vue.js', level: 90, projects: 10, icon: 'Layers' },
    { skill: 'React', level: 85, projects: 8, icon: 'Atom' },
    { skill: 'PHP', level: 92, projects: 15, icon: 'FileCode' },
    { skill: 'JavaScript', level: 88, projects: 14, icon: 'Zap' },
    { skill: 'MySQL', level: 87, projects: 13, icon: 'Database' },
    { skill: 'Node.js', level: 80, projects: 6, icon: 'Server' },
    { skill: 'Docker', level: 75, projects: 5, icon: 'Package' }
  ];

  return (
    <div className="glass-card p-8 rounded-2xl shadow-glassmorphic">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">Technical Expertise</h3>
        <p className="text-muted-foreground">Interactive skill proficiency radar</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={skillData}>
              <PolarGrid stroke="rgba(59, 130, 246, 0.2)" />
              <PolarAngleAxis 
                dataKey="skill" 
                tick={{ fontSize: 12, fill: 'var(--color-muted-foreground)' }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                tick={{ fontSize: 10, fill: 'var(--color-muted-foreground)' }}
              />
              <Radar
                name="Proficiency"
                dataKey="level"
                stroke="var(--color-brand-primary)"
                fill="var(--color-brand-primary)"
                fillOpacity={0.1}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          {skillData?.map((skill, index) => (
            <div
              key={skill?.skill}
              className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                activeSkill === skill?.skill
                  ? 'border-brand-primary bg-brand-primary/5 shadow-subtle'
                  : 'border-border hover:border-brand-primary/50 hover:bg-surface/50'
              }`}
              onMouseEnter={() => setActiveSkill(skill?.skill)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={skill?.icon} size={20} color="var(--color-brand-primary)" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{skill?.skill}</h4>
                    <p className="text-sm text-muted-foreground">{skill?.projects} projects</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-brand-primary">{skill?.level}%</div>
                  <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-brand-primary transition-all duration-500"
                      style={{ width: `${skill?.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillRadarChart;