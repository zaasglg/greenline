"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar, MapPin, Phone, Mail, User, CheckCircle, ArrowRight, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookingPage() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [hasDiscount, setHasDiscount] = useState(false);
  const [formData, setFormData] = useState({
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      apartmentUnit: ""
    },
    selectedDate: null,
    selectedTime: "",
    services: [],
    contact: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      notes: ""
    }
  });

  const services = [
    { id: "carpet-cleaning", name: "Carpet Cleaning", price: "Starting at $150", discountPrice: "Starting at $105" },
    { id: "rug-cleaning", name: "Rug Cleaning", price: "Starting at $80", discountPrice: "Starting at $56" },
    { id: "upholstery-cleaning", name: "Upholstery Cleaning", price: "Starting at $120", discountPrice: "Starting at $84" },
    { id: "carpet-sanitizer", name: "Carpet Sanitizer", price: "Add $50", discountPrice: "Add $35" }
  ];

  useEffect(() => {
    const discount = searchParams.get('discount');
    if (discount === '30') {
      setHasDiscount(true);
    }
  }, [searchParams]);

  const timeSlots = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleServiceToggle = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const isStepComplete = (step) => {
    switch (step) {
      case 1:
        return formData.address.street && formData.address.city && formData.address.zipCode;
      case 2:
        return formData.selectedDate && formData.selectedTime;
      case 3:
        return formData.services.length > 0;
      case 4:
        return formData.contact.firstName && formData.contact.lastName && formData.contact.email && formData.contact.phone;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (currentStep < 4 && isStepComplete(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateCalendar = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const current = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return days;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isDateAvailable = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today && date.getDay() !== 0; // Not Sunday and not in the past
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Book Your Service</h1>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>

          {/* Discount Banner */}
          {hasDiscount && (
            <div className="bg-red-600 text-white px-6 py-3 rounded-lg inline-flex items-center space-x-2 mb-6">
              <Tag className="w-5 h-5" />
              <span className="font-bold">30% DISCOUNT APPLIED!</span>
              <span className="text-red-100">Free Consultation Special</span>
            </div>
          )}

          {/* Progress Bar */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  currentStep >= step
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}>
                  {isStepComplete(step) && currentStep > step ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    step
                  )}
                </div>
                {step < 4 && (
                  <div className={`w-12 h-1 mx-2 ${
                    currentStep > step ? 'bg-emerald-600' : 'bg-slate-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <div className="text-lg text-slate-600">
            {currentStep === 1 && "Step 1: Service Address"}
            {currentStep === 2 && "Step 2: Select Date & Time"}
            {currentStep === 3 && "Step 3: Choose Services"}
            {currentStep === 4 && "Step 4: Contact Information"}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Step 1: Address */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-8 h-8 text-emerald-600" />
                <h2 className="text-2xl font-bold text-slate-900">Service Address</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    value={formData.address.street}
                    onChange={(e) => handleInputChange('address', 'street', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="123 Main Street"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Apartment/Unit
                  </label>
                  <input
                    type="text"
                    value={formData.address.apartmentUnit}
                    onChange={(e) => handleInputChange('address', 'apartmentUnit', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Apt 4B"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    value={formData.address.city}
                    onChange={(e) => handleInputChange('address', 'city', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Denver"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    State *
                  </label>
                  <select
                    value={formData.address.state}
                    onChange={(e) => handleInputChange('address', 'state', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select State</option>
                    <option value="CO">Colorado</option>
                    <option value="CA">California</option>
                    <option value="TX">Texas</option>
                    <option value="NY">New York</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    value={formData.address.zipCode}
                    onChange={(e) => handleInputChange('address', 'zipCode', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="80202"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Calendar */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="w-8 h-8 text-emerald-600" />
                <h2 className="text-2xl font-bold text-slate-900">Select Date & Time</h2>
              </div>

              {/* Calendar */}
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </h3>
                </div>

                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-sm font-medium text-slate-600 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {generateCalendar().map((date, index) => {
                    const isCurrentMonth = date.getMonth() === new Date().getMonth();
                    const isAvailable = isDateAvailable(date);
                    const isSelected = formData.selectedDate &&
                      date.toDateString() === formData.selectedDate.toDateString();

                    return (
                      <button
                        key={index}
                        onClick={() => isAvailable && setFormData(prev => ({ ...prev, selectedDate: date }))}
                        disabled={!isAvailable}
                        className={`h-12 text-sm rounded-lg transition-colors ${
                          !isCurrentMonth
                            ? 'text-slate-300 cursor-not-allowed'
                            : !isAvailable
                            ? 'text-slate-400 cursor-not-allowed'
                            : isSelected
                            ? 'bg-emerald-600 text-white'
                            : 'hover:bg-emerald-100 text-slate-700'
                        }`}
                      >
                        {date.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>

              {formData.selectedDate && (
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">
                    Available Times for {formatDate(formData.selectedDate)}
                  </h4>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {timeSlots.map(time => (
                      <button
                        key={time}
                        onClick={() => setFormData(prev => ({ ...prev, selectedTime: time }))}
                        className={`py-3 px-4 rounded-lg border text-sm font-medium transition-colors ${
                          formData.selectedTime === time
                            ? 'bg-emerald-600 text-white border-emerald-600'
                            : 'border-slate-300 text-slate-700 hover:bg-emerald-50 hover:border-emerald-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Services */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
                <h2 className="text-2xl font-bold text-slate-900">Choose Services</h2>
              </div>

              <div className="space-y-4">
                {services.map(service => (
                  <div
                    key={service.id}
                    className={`border rounded-lg p-6 cursor-pointer transition-colors ${
                      formData.services.includes(service.id)
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-slate-200 hover:border-emerald-300'
                    }`}
                    onClick={() => handleServiceToggle(service.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          formData.services.includes(service.id)
                            ? 'border-emerald-500 bg-emerald-500'
                            : 'border-slate-300'
                        }`}>
                          {formData.services.includes(service.id) && (
                            <CheckCircle className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">{service.name}</h3>
                        </div>
                      </div>
                      <div className="text-emerald-600 font-semibold">
                        {hasDiscount ? (
                          <div className="flex flex-col items-end">
                            <span className="text-slate-400 line-through text-sm">{service.price}</span>
                            <span className="text-red-600">{service.discountPrice}</span>
                          </div>
                        ) : (
                          service.price
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Contact */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <User className="w-8 h-8 text-emerald-600" />
                <h2 className="text-2xl font-bold text-slate-900">Contact Information</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.contact.firstName}
                    onChange={(e) => handleInputChange('contact', 'firstName', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.contact.lastName}
                    onChange={(e) => handleInputChange('contact', 'lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.contact.email}
                    onChange={(e) => handleInputChange('contact', 'email', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.contact.phone}
                    onChange={(e) => handleInputChange('contact', 'phone', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Special Instructions (Optional)
                </label>
                <textarea
                  value={formData.contact.notes}
                  onChange={(e) => handleInputChange('contact', 'notes', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Any special instructions or notes..."
                />
              </div>

              {/* Summary */}
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Booking Summary</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Address:</strong> {formData.address.street}, {formData.address.city}, {formData.address.state} {formData.address.zipCode}</p>
                  {formData.selectedDate && (
                    <p><strong>Date & Time:</strong> {formatDate(formData.selectedDate)} at {formData.selectedTime}</p>
                  )}
                  <p><strong>Services:</strong> {formData.services.map(id => services.find(s => s.id === id)?.name).join(', ')}</p>
                  {hasDiscount && (
                    <div className="flex items-center space-x-2 mt-3 p-3 bg-red-50 rounded-lg border border-red-200">
                      <Tag className="w-4 h-4 text-red-600" />
                      <span className="text-red-600 font-semibold">30% Discount Applied - Free Consultation Special!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-8 border-t border-slate-200">
            <Button
              onClick={prevStep}
              disabled={currentStep === 1}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>

            {currentStep < 4 ? (
              <Button
                onClick={nextStep}
                disabled={!isStepComplete(currentStep)}
                className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                disabled={!isStepComplete(currentStep)}
                className="bg-emerald-600 hover:bg-emerald-700"
                onClick={() => alert('Booking submitted!')}
              >
                Complete Booking
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
