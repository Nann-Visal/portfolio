import React, { useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background-canvas/80 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal Content */}
      <div className="relative glass-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 glass-card-mobile p-6 border-b border-glass flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{project?.title}</h2>
            <p className="text-brand-primary font-medium">{project?.category}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            iconName="X"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-lg h-64 md:h-80">
            <Image
              src={project?.image}
              alt={project?.title}
              className="w-full h-full object-cover"
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

          {/* Project Overview */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed">{project?.fullDescription}</p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project?.features?.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-trust-builder mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Challenges */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Technical Challenges & Solutions</h3>
                <div className="space-y-4">
                  {project?.challenges?.map((challenge, index) => (
                    <div key={index} className="glass-card p-4 rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">{challenge?.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{challenge?.problem}</p>
                      <p className="text-sm text-trust-builder">
                        <strong>Solution:</strong> {challenge?.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Details Sidebar */}
            <div className="space-y-6">
              {/* Project Stats */}
              <div className="glass-card p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium text-foreground">{project?.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team Size</span>
                    <span className="font-medium text-foreground">{project?.teamSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">My Role</span>
                    <span className="font-medium text-foreground">{project?.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Complexity</span>
                    <span className="font-medium text-foreground">{project?.complexity}</span>
                  </div>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="glass-card p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project?.techStack?.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded-md text-xs font-medium ${getTechStackColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Impact */}
              <div className="glass-card p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">Project Impact</h3>
                <div className="space-y-3">
                  {project?.impact?.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-brand-primary">{metric?.value}</div>
                      <div className="text-sm text-muted-foreground">{metric?.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {project?.liveUrl && (
                  <Button
                    variant="default"
                    fullWidth
                    iconName="ExternalLink"
                    iconPosition="right"
                    className="bg-trust-builder hover:bg-trust-builder/90"
                    onClick={() => window.open(project?.liveUrl, '_blank')}
                  >
                    View Live Demo
                  </Button>
                )}
                {project?.githubUrl && (
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Github"
                    iconPosition="left"
                    onClick={() => window.open(project?.githubUrl, '_blank')}
                  >
                    View Source Code
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;