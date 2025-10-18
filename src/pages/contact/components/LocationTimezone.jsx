import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const LocationTimezone = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timezones = [
    {
      location: 'Phnom Penh, Cambodia',
      timezone: 'Asia/Phnom_Penh',
      flag: '🇰🇭',
      primary: true,
      description: 'My current location'
    },
    {
      location: 'New York, USA',
      timezone: 'America/New_York',
      flag: '🇺🇸',
      primary: false,
      description: 'Eastern Time'
    },
    {
      location: 'London, UK',
      timezone: 'Europe/London',
      flag: '🇬🇧',
      primary: false,
      description: 'Greenwich Mean Time'
    },
    {
      location: 'Tokyo, Japan',
      timezone: 'Asia/Tokyo',
      flag: '🇯🇵',
      primary: false,
      description: 'Japan Standard Time'
    },
    {
      location: 'Sydney, Australia',
      timezone: 'Australia/Sydney',
      flag: '🇦🇺',
      primary: false,
      description: 'Australian Eastern Time'
    },
    {
      location: 'Dubai, UAE',
      timezone: 'Asia/Dubai',
      flag: '🇦🇪',
      primary: false,
      description: 'Gulf Standard Time'
    }
  ];

  const formatTime = (timezone) => {
    return currentTime?.toLocaleTimeString('en-US', {
      timeZone: timezone,
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (timezone) => {
    return currentTime?.toLocaleDateString('en-US', {
      timeZone: timezone,
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const getWorkingHoursStatus = (timezone) => {
    const timeInZone = new Date()?.toLocaleString("en-US", {timeZone: timezone});
    const hour = new Date(timeInZone)?.getHours();
    
    if (hour >= 9 && hour < 18) {
      return { status: 'working', color: 'green', text: 'Working Hours' };
    } else if (hour >= 18 && hour < 22) {
      return { status: 'evening', color: 'amber', text: 'Evening' };
    } else {
      return { status: 'night', color: 'slate', text: 'Night Time' };
    }
  };

  const getTimezoneOffset = (timezone) => {
    const now = new Date();
    const utc = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));
    const targetTime = new Date(utc.toLocaleString("en-US", {timeZone: timezone}));
    const cambodiaTime = new Date(utc.toLocaleString("en-US", {timeZone: "Asia/Phnom_Penh"}));
    
    const diffMs = targetTime?.getTime() - cambodiaTime?.getTime();
    const diffHours = Math.round(diffMs / (1000 * 60 * 60));
    
    if (diffHours === 0) return 'Same time';
    if (diffHours > 0) return `+${diffHours}h`;
    return `${diffHours}h`;
  };

  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Global Availability & Time Zones
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I work with clients worldwide. Here's my current time and how it compares to major business centers.
          </p>
        </div>

        {/* Primary Location */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-200">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🇰🇭</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Phnom Penh, Cambodia
              </h3>
              <p className="text-slate-600 mb-6">My Current Location</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {formatTime('Asia/Phnom_Penh')}
                  </div>
                  <div className="text-sm text-slate-500">
                    {formatDate('Asia/Phnom_Penh')}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-semibold text-slate-900 mb-2">
                    UTC+7
                  </div>
                  <div className="text-sm text-slate-500">
                    Indochina Time
                  </div>
                </div>
                
                <div className="text-center">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                    getWorkingHoursStatus('Asia/Phnom_Penh')?.status === 'working'
                      ? 'bg-green-100 text-green-700' : getWorkingHoursStatus('Asia/Phnom_Penh')?.status === 'evening'
                      ? 'bg-amber-100 text-amber-700' :'bg-slate-100 text-slate-700'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      getWorkingHoursStatus('Asia/Phnom_Penh')?.status === 'working'
                        ? 'bg-green-500' : getWorkingHoursStatus('Asia/Phnom_Penh')?.status === 'evening'
                        ? 'bg-amber-500' :'bg-slate-500'
                    } animate-pulse`}></div>
                    {getWorkingHoursStatus('Asia/Phnom_Penh')?.text}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Time Zones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timezones?.filter(tz => !tz?.primary)?.map((timezone, index) => {
            const status = getWorkingHoursStatus(timezone?.timezone);
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="text-center">
                  <div className="text-2xl mb-3">{timezone?.flag}</div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    {timezone?.location}
                  </h4>
                  <p className="text-sm text-slate-500 mb-4">
                    {timezone?.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="text-xl font-bold text-slate-900">
                      {formatTime(timezone?.timezone)}
                    </div>
                    <div className="text-sm text-slate-500">
                      {formatDate(timezone?.timezone)}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">
                        {getTimezoneOffset(timezone?.timezone)} from me
                      </span>
                      <div className={`w-2 h-2 rounded-full ${
                        status?.status === 'working' ?'bg-green-500'
                          : status?.status === 'evening' ?'bg-amber-500' :'bg-slate-400'
                      }`}></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Meeting Coordination */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Meeting Coordination
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              I'm flexible with meeting times to accommodate different time zones. 
              Here are the best times to schedule calls based on your location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Sun" size={24} color="rgb(34 197 94)" />
                <h4 className="font-semibold text-green-900">
                  Best Meeting Times
                </h4>
              </div>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• 9:00 AM - 12:00 PM (Cambodia Time)</li>
                <li>• 2:00 PM - 6:00 PM (Cambodia Time)</li>
                <li>• Perfect for Asia-Pacific clients</li>
                <li>• Good for European morning meetings</li>
              </ul>
            </div>

            <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Sunset" size={24} color="rgb(245 158 11)" />
                <h4 className="font-semibold text-amber-900">
                  Flexible Hours
                </h4>
              </div>
              <ul className="space-y-2 text-sm text-amber-700">
                <li>• 6:00 PM - 9:00 PM (Cambodia Time)</li>
                <li>• Available for urgent discussions</li>
                <li>• Good for US East Coast meetings</li>
                <li>• European afternoon calls</li>
              </ul>
            </div>

            <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Calendar" size={24} color="rgb(37 99 235)" />
                <h4 className="font-semibold text-blue-900">
                  Weekend Availability
                </h4>
              </div>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• Saturday: 10:00 AM - 2:00 PM</li>
                <li>• Emergency support available</li>
                <li>• Project milestone discussions</li>
                <li>• By appointment only</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Map Integration */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            My Location
          </h3>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 w-full">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Phnom Penh, Cambodia"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=11.5564,104.9282&z=12&output=embed"
                className="border-0"
              ></iframe>
            </div>
            <div className="p-6 bg-slate-50">
              <div className="flex items-center justify-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Phnom Penh, Cambodia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Globe" size={16} />
                  <span>UTC+7 (Indochina Time)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Wifi" size={16} />
                  <span>High-speed internet available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationTimezone;