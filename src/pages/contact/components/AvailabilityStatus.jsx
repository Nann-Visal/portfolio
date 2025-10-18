import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const AvailabilityStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Phnom_Penh',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', {
      timeZone: 'Asia/Phnom_Penh',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getWorkingHoursStatus = () => {
    const cambodiaTime = new Date()?.toLocaleString("en-US", {timeZone: "Asia/Phnom_Penh"});
    const currentHour = new Date(cambodiaTime)?.getHours();
    
    // Working hours: 9 AM to 6 PM Cambodia time
    if (currentHour >= 9 && currentHour < 18) {
      return {
        status: 'available',
        message: 'Currently online and available',
        color: 'green'
      };
    } else if (currentHour >= 18 && currentHour < 22) {
      return {
        status: 'limited',
        message: 'Limited availability (evening hours)',
        color: 'amber'
      };
    } else {
      return {
        status: 'offline',
        message: 'Currently offline (will respond within 4 hours)',
        color: 'slate'
      };
    }
  };

  const workingStatus = getWorkingHoursStatus();

  const statusConfig = {
    available: {
      icon: 'CheckCircle',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-700',
      iconColor: 'rgb(34 197 94)'
    },
    limited: {
      icon: 'Clock',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-700',
      iconColor: 'rgb(245 158 11)'
    },
    offline: {
      icon: 'Moon',
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-200',
      textColor: 'text-slate-700',
      iconColor: 'rgb(100 116 139)'
    }
  };

  const currentConfig = statusConfig?.[workingStatus?.status];

  const projectCapacity = {
    current: 1,
    maximum: 3,
    nextAvailable: 'January 2025'
  };

  const responseCommitments = [
    {
      channel: 'Email',
      time: 'Within 4 hours',
      icon: 'Mail',
      priority: 'high'
    },
    {
      channel: 'Telegram',
      time: 'Within 1 hour',
      icon: 'MessageCircle',
      priority: 'high'
    },
    {
      channel: 'LinkedIn',
      time: 'Within 24 hours',
      icon: 'Linkedin',
      priority: 'medium'
    },
    {
      channel: 'Project Inquiries',
      time: 'Within 24 hours',
      icon: 'FileText',
      priority: 'high'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Current Availability & Response Times
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real-time status and commitment to response times for all communication channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Status */}
          <div className={`p-6 rounded-xl border-2 ${currentConfig?.bgColor} ${currentConfig?.borderColor}`}>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Icon name={currentConfig?.icon} size={32} color={currentConfig?.iconColor} />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${currentConfig?.textColor}`}>
                Current Status
              </h3>
              <p className={`text-sm mb-4 ${currentConfig?.textColor}`}>
                {workingStatus?.message}
              </p>
              
              <div className="space-y-2 text-sm">
                <div className={`${currentConfig?.textColor} font-medium`}>
                  Cambodia Time (UTC+7)
                </div>
                <div className={`text-2xl font-bold ${currentConfig?.textColor}`}>
                  {formatTime(currentTime)}
                </div>
                <div className={`${currentConfig?.textColor} opacity-80`}>
                  {formatDate(currentTime)}
                </div>
              </div>
            </div>
          </div>

          {/* Project Capacity */}
          <div className="p-6 rounded-xl border-2 bg-blue-50 border-blue-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Icon name="Users" size={32} color="rgb(37 99 235)" />
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Project Capacity
              </h3>
              <p className="text-sm text-blue-600 mb-4">
                Current project load and availability
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm text-blue-700">
                  <span>Active Projects:</span>
                  <span className="font-semibold">{projectCapacity?.current}/{projectCapacity?.maximum}</span>
                </div>
                
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(projectCapacity?.current / projectCapacity?.maximum) * 100}%` }}
                  ></div>
                </div>
                
                <div className="text-sm text-blue-600">
                  <strong>Next Available:</strong><br />
                  {projectCapacity?.nextAvailable}
                </div>
                
                <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                  <Icon name="CheckCircle" size={12} />
                  <span>Accepting new projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="p-6 rounded-xl border-2 bg-purple-50 border-purple-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Icon name="Calendar" size={32} color="rgb(147 51 234)" />
              </div>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                Working Hours
              </h3>
              <p className="text-sm text-purple-600 mb-4">
                Standard availability schedule
              </p>
              
              <div className="space-y-3 text-sm text-purple-700">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">Emergency only</span>
                </div>
                <div className="text-xs text-purple-600 mt-3 pt-3 border-t border-purple-200">
                  All times in Cambodia Standard Time (UTC+7)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Response Time Commitments */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Response Time Commitments
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {responseCommitments?.map((commitment, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  commitment?.priority === 'high' ?'bg-green-50 border-green-200 hover:bg-green-100' :'bg-slate-50 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon 
                    name={commitment?.icon} 
                    size={20} 
                    color={commitment?.priority === 'high' ? 'rgb(34 197 94)' : 'rgb(100 116 139)'} 
                  />
                  <span className="font-semibold text-slate-900">{commitment?.channel}</span>
                </div>
                <p className={`text-sm ${
                  commitment?.priority === 'high' ? 'text-green-700' : 'text-slate-600'
                }`}>
                  {commitment?.time}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 bg-slate-50 px-6 py-4 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Icon name="Shield" size={16} color="rgb(34 197 94)" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Icon name="Award" size={16} color="rgb(34 197 94)" />
              <span>Verified Developer</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Icon name="Clock" size={16} color="rgb(34 197 94)" />
              <span>5+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityStatus;