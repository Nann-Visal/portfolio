import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'About', path: '/about', icon: 'User' },
    // { name: 'Projects', path: '/projects', icon: 'FolderOpen' },
    // { name: 'Experience', path: '/experience', icon: 'Briefcase' },
    { name: 'Contact', path: '/contact', icon: 'Mail' }
    // { name: 'Services', path: '/services', icon: 'Settings' }
  ];

  const secondaryItems = [
    { name: 'Contact', path: '/contact', icon: 'Mail' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const Logo = () => (
    <Link to="/homepage" className="flex items-center space-x-3 group" onClick={closeMenu}>
      <div className="relative">
        <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center shadow-glow-primary group-hover:shadow-glow-accent transition-all duration-300">
          <Icon name="Code2" size={20} color="white" strokeWidth={2.5} />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-trust-builder rounded-full animate-pulse-glow"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-foreground group-hover:text-brand-primary transition-colors duration-300">
          VisalNann
        </span>
        <span className="text-xs text-muted-foreground font-jetbrains-mono">
          Full Stack Developer
        </span>
      </div>
    </Link>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-header transition-all duration-300 ${
        isScrolled 
          ? 'glass-card shadow-glassmorphic backdrop-blur-glass' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActivePath(item?.path)
                    ? 'text-brand-primary bg-brand-primary/10 shadow-subtle'
                    : 'text-gray-500 hover:text-brand-primary hover:bg-surface'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          {/* <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="sm"
                iconName="Mail"
                iconPosition="left"
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
              >
                Contact
              </Button>
            </Link>
            <Button 
              variant="default"
              size="sm"
              iconName="Download"
              iconPosition="left"
              className="bg-conversion-accent hover:bg-conversion-accent/90 text-white conversion-glow"
            >
              Resume
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-foreground hover:text-brand-primary hover:bg-surface transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-brand ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' :'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="glass-card-mobile mx-4 mb-4 rounded-xl shadow-glassmorphic">
          <nav className="px-4 py-6 space-y-2">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActivePath(item?.path)
                    ? 'text-brand-primary bg-brand-primary/10 shadow-subtle'
                    : 'text-foreground hover:text-brand-primary hover:bg-surface/50'
                }`}
              >
                <Icon name={item?.icon} size={20} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            <div className="border-t border-glass pt-4 mt-4">
              {secondaryItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActivePath(item?.path)
                      ? 'text-brand-primary bg-brand-primary/10 shadow-subtle'
                      : 'text-foreground hover:text-brand-primary hover:bg-surface/50'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}
            </div>

            {/* <div className="border-t border-glass pt-4 mt-4 space-y-3">
              <Button 
                variant="outline" 
                fullWidth
                iconName="Mail"
                iconPosition="left"
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                onClick={closeMenu}
              >
                Contact Me
              </Button>
              <Button 
                variant="default"
                fullWidth
                iconName="Download"
                iconPosition="left"
                className="bg-conversion-accent hover:bg-conversion-accent/90 text-white"
                onClick={closeMenu}
              >
                Download Resume
              </Button>
            </div> */}
          </nav>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background-canvas/50 backdrop-blur-sm z-[-1]"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;