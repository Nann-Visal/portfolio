import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTechStackColor = (tech) => {
    const colors = {
      'Laravel': 'bg-red-100 text-red-800',
      'Vue.js': 'bg-green-100 text-green-800',
      'PHP': 'bg-blue-100 text-blue-800',
      'MySQL': 'bg-orange-100 text-orange-800',
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'Bootstrap': 'bg-purple-100 text-purple-800',
      'Tailwind CSS': 'bg-cyan-100 text-cyan-800',
      'Node.js': 'bg-emerald-100 text-emerald-800',
      'React': 'bg-blue-100 text-blue-800',
      'MongoDB': 'bg-green-100 text-green-800'
    };
    return colors?.[tech] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div 
      className={`glass-card p-6 rounded-xl transition-all duration-500 hover:shadow-elevation interactive-lift ${
        isHovered ? 'scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-6 h-48">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project?.status === 'Live' ? 'bg-trust-builder text-white' :
            project?.status === 'In Development'? 'bg-conversion-accent text-white' : 'bg-muted text-muted-foreground'
          }`}>
            {project?.status}
          </span>
        </div>
        {project?.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-primary text-white">
              Featured
            </span>
          </div>
        )}
      </div>
      {/* Project Content */}
      <div className="space-y-4">
        {/* Title and Category */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-foreground group-hover:text-brand-primary transition-colors">
              {project?.title}
            </h3>
            <Icon name="ExternalLink" size={16} className="text-muted-foreground" />
          </div>
          <p className="text-sm text-brand-primary font-medium mb-2">{project?.category}</p>
          <p className="text-muted-foreground text-sm line-clamp-3">{project?.description}</p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project?.techStack?.slice(0, 4)?.map((tech, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded-md text-xs font-medium ${getTechStackColor(tech)}`}
            >
              {tech}
            </span>
          ))}
          {project?.techStack?.length > 4 && (
            <span className="px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
              +{project?.techStack?.length - 4} more
            </span>
          )}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-3 gap-4 py-3 border-t border-glass">
          <div className="text-center">
            <div className="text-lg font-bold text-foreground">{project?.duration}</div>
            <div className="text-xs text-muted-foreground">Duration</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-foreground">{project?.teamSize}</div>
            <div className="text-xs text-muted-foreground">Team Size</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-foreground">{project?.complexity}</div>
            <div className="text-xs text-muted-foreground">Complexity</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Button
            variant="outline"
            size="sm"
            iconName="Eye"
            iconPosition="left"
            onClick={() => onViewDetails(project)}
            className="flex-1 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
          >
            View Details
          </Button>
          {project?.liveUrl && (
            <Button
              variant="default"
              size="sm"
              iconName="ExternalLink"
              iconPosition="right"
              className="bg-trust-builder hover:bg-trust-builder/90"
              onClick={() => window.open(project?.liveUrl, '_blank')}
            >
              Live Demo
            </Button>
          )}
        </div>

        {/* GitHub Link */}
        {project?.githubUrl && (
          <div className="pt-2 border-t border-glass">
            <a
              href={project?.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-brand-primary transition-colors"
            >
              <Icon name="Github" size={16} />
              <span>View Source Code</span>
              <Icon name="ExternalLink" size={12} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;