import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [consultationType, setConsultationType] = useState('');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });
  const [isBooking, setIsBooking] = useState(false);
  const [bookingStatus, setBookingStatus] = useState(null);

  // Generate available dates (next 14 days, excluding weekends)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let currentDate = new Date(today);
    currentDate?.setDate(currentDate?.getDate() + 1); // Start from tomorrow

    while (dates?.length < 10) {
      const dayOfWeek = currentDate?.getDay();
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates?.push({
          value: currentDate?.toISOString()?.split('T')?.[0],
          label: currentDate?.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })
        });
      }
      currentDate?.setDate(currentDate?.getDate() + 1);
    }
    return dates;
  };

  const availableTimes = [
    { value: '09:00', label: '9:00 AM (Cambodia Time)' },
    { value: '10:00', label: '10:00 AM (Cambodia Time)' },
    { value: '11:00', label: '11:00 AM (Cambodia Time)' },
    { value: '14:00', label: '2:00 PM (Cambodia Time)' },
    { value: '15:00', label: '3:00 PM (Cambodia Time)' },
    { value: '16:00', label: '4:00 PM (Cambodia Time)' },
    { value: '17:00', label: '5:00 PM (Cambodia Time)' }
  ];

  const consultationTypes = [
    { 
      value: 'project-discussion', 
      label: 'Project Discussion (30 min)',
      description: 'Discuss your project requirements and get initial estimates'
    },
    { 
      value: 'technical-consultation', 
      label: 'Technical Consultation (45 min)',
      description: 'Deep dive into technical architecture and implementation'
    },
    { 
      value: 'code-review', 
      label: 'Code Review Session (60 min)',
      description: 'Review existing code and provide improvement recommendations'
    },
    { 
      value: 'career-mentoring', 
      label: 'Career Mentoring (30 min)',
      description: 'Career guidance for developers and technical professionals'
    }
  ];

  const handleInputChange = (field, value) => {
    setContactInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBooking = async (e) => {
    e?.preventDefault();
    setIsBooking(true);

    try {
      // Simulate booking process
      await new Promise(resolve => setTimeout(resolve, 2000));
      setBookingStatus('success');
      
      // Reset form
      setSelectedDate('');
      setSelectedTime('');
      setConsultationType('');
      setContactInfo({
        name: '',
        email: '',
        company: '',
        phone: ''
      });
    } catch (error) {
      setBookingStatus('error');
    } finally {
      setIsBooking(false);
    }
  };

  if (bookingStatus === 'success') {
    return (
      <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Calendar" size={32} color="rgb(34 197 94)" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Consultation Booked Successfully!
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Your consultation has been scheduled. You'll receive a confirmation email with the meeting link 
              and agenda within the next few minutes.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-blue-900 mb-2">What's Next?</h4>
              <ul className="text-sm text-blue-700 space-y-1 text-left">
                <li>• Check your email for the meeting confirmation and calendar invite</li>
                <li>• Prepare any questions or materials you'd like to discuss</li>
                <li>• Join the meeting 5 minutes early to test your connection</li>
                <li>• If you need to reschedule, reply to the confirmation email</li>
              </ul>
            </div>
            <Button
              variant="default"
              onClick={() => setBookingStatus(null)}
              iconName="Calendar"
              iconPosition="left"
            >
              Book Another Consultation
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Schedule a Technical Consultation
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Book a one-on-one session to discuss your project requirements, get technical advice, 
            or explore collaboration opportunities.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Consultation Types */}
            <div className="p-8 bg-slate-50">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                Choose Consultation Type
              </h3>
              <div className="space-y-4">
                {consultationTypes?.map((type) => (
                  <div
                    key={type?.value}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      consultationType === type?.value
                        ? 'border-blue-500 bg-blue-50' :'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                    onClick={() => setConsultationType(type?.value)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 mt-1 ${
                        consultationType === type?.value
                          ? 'border-blue-500 bg-blue-500' :'border-slate-300'
                      }`}>
                        {consultationType === type?.value && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">
                          {type?.label}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {type?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <Icon name="Info" size={20} color="rgb(245 158 11)" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">
                      Free Consultation
                    </h4>
                    <p className="text-sm text-amber-700">
                      All consultation sessions are complimentary. If we decide to work together, 
                      we'll discuss project terms and pricing separately.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                Select Date & Time
              </h3>
              
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <Select
                    label="Preferred Date"
                    placeholder="Select a date"
                    options={getAvailableDates()}
                    value={selectedDate}
                    onChange={setSelectedDate}
                    required
                  />
                  
                  <Select
                    label="Preferred Time"
                    placeholder="Select a time"
                    options={availableTimes}
                    value={selectedTime}
                    onChange={setSelectedTime}
                    required
                    disabled={!selectedDate}
                  />
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h4 className="font-semibold text-slate-900 mb-4">
                    Contact Information
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <Input
                      label="Full Name"
                      type="text"
                      placeholder="Your full name"
                      value={contactInfo?.name}
                      onChange={(e) => handleInputChange('name', e?.target?.value)}
                      required
                    />
                    
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="your.email@company.com"
                      value={contactInfo?.email}
                      onChange={(e) => handleInputChange('email', e?.target?.value)}
                      required
                    />
                    
                    <Input
                      label="Company/Organization"
                      type="text"
                      placeholder="Your company (optional)"
                      value={contactInfo?.company}
                      onChange={(e) => handleInputChange('company', e?.target?.value)}
                    />
                    
                    <Input
                      label="Phone Number"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={contactInfo?.phone}
                      onChange={(e) => handleInputChange('phone', e?.target?.value)}
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    fullWidth
                    loading={isBooking}
                    iconName="Calendar"
                    iconPosition="left"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={!consultationType || !selectedDate || !selectedTime}
                  >
                    {isBooking ? 'Booking Consultation...' : 'Book Consultation'}
                  </Button>
                  
                  <p className="text-xs text-slate-500 text-center mt-3">
                    By booking, you agree to receive meeting confirmations and reminders via email.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBooking;