import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProject = ({ project, onViewDetails }) => {
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
    <div className="glass-card p-8 rounded-xl mb-12 hover:shadow-elevation transition-all duration-500">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="Star" size={20} className="text-conversion-accent" />
        <span className="text-conversion-accent font-semibold">Featured Project</span>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Project Image */}
        <div className="relative overflow-hidden rounded-lg h-64 lg:h-80">
          <Image
            src={project?.image}
            alt={project?.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              project?.status === 'Live' ? 'bg-trust-builder text-white' :
              project?.status === 'In Development'? 'bg-conversion-accent text-white' : 'bg-muted text-muted-foreground'
            }`}>
              {project?.status}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">{project?.title}</h2>
            <p className="text-brand-primary font-medium mb-4">{project?.category}</p>
            <p className="text-muted-foreground leading-relaxed">{project?.description}</p>
          </div>

          {/* Key Highlights */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Key Highlights</h3>
            <ul className="space-y-2">
              {project?.highlights?.map((highlight, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-trust-builder mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project?.techStack?.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${getTechStackColor(tech)}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Metrics */}
          <div className="grid grid-cols-3 gap-4 py-4 border-t border-glass">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{project?.duration}</div>
              <div className="text-sm text-muted-foreground">Duration</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{project?.teamSize}</div>
              <div className="text-sm text-muted-foreground">Team Size</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{project?.complexity}</div>
              <div className="text-sm text-muted-foreground">Complexity</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              iconName="Eye"
              iconPosition="left"
              onClick={() => onViewDetails(project)}
              className="bg-brand-primary hover:bg-brand-primary/90"
            >
              View Full Case Study
            </Button>
            {project?.liveUrl && (
              <Button
                variant="outline"
                iconName="ExternalLink"
                iconPosition="right"
                className="border-trust-builder text-trust-builder hover:bg-trust-builder hover:text-white"
                onClick={() => window.open(project?.liveUrl, '_blank')}
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;