import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFilter = ({ 
  categories, 
  technologies, 
  selectedCategory, 
  selectedTechnology, 
  onCategoryChange, 
  onTechnologyChange,
  onClearFilters,
  projectCount 
}) => {
  return (
    <div className="glass-card p-6 rounded-xl space-y-6">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Filter" size={20} className="text-brand-primary" />
          <h3 className="text-lg font-semibold text-foreground">Filter Projects</h3>
        </div>
        <div className="text-sm text-muted-foreground">
          {projectCount} project{projectCount !== 1 ? 's' : ''} found
        </div>
      </div>
      {/* Category Filter */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-foreground">Category</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCategoryChange('all')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              selectedCategory === 'all' ?'bg-brand-primary text-white shadow-subtle' :'bg-surface text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            All Categories
          </button>
          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-brand-primary text-white shadow-subtle'
                  : 'bg-surface text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {/* Technology Filter */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-foreground">Technology</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onTechnologyChange('all')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              selectedTechnology === 'all' ?'bg-secondary text-white shadow-subtle' :'bg-surface text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            All Technologies
          </button>
          {technologies?.map((tech) => (
            <button
              key={tech}
              onClick={() => onTechnologyChange(tech)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedTechnology === tech
                  ? 'bg-secondary text-white shadow-subtle'
                  : 'bg-surface text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
      {/* Clear Filters */}
      {(selectedCategory !== 'all' || selectedTechnology !== 'all') && (
        <div className="pt-4 border-t border-glass">
          <Button
            variant="outline"
            size="sm"
            iconName="X"
            iconPosition="left"
            onClick={onClearFilters}
            className="w-full"
          >
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectFilter;