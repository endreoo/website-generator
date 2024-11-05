import React, { useState } from 'react';
import { Calendar, Users, CreditCard } from 'lucide-react';

export default function Booking() {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Book Your Stay</h1>
          <p className="text-xl text-gray-600">Complete your reservation in simple steps</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          <div className={`flex-1 text-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
            <Calendar className="w-6 h-6 mx-auto mb-2" />
            <span className="text-sm">Select Dates</span>
          </div>
          <div className={`flex-1 text-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
            <Users className="w-6 h-6 mx-auto mb-2" />
            <span className="text-sm">Room Details</span>
          </div>
          <div className={`flex-1 text-center ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
            <CreditCard className="w-6 h-6 mx-auto mb-2" />
            <span className="text-sm">Payment</span>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-1">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    id="check-in"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-1">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    id="check-out"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="room-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Room Type
                  </label>
                  <select
                    id="room-type"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select a room type</option>
                    <option value="deluxe">Deluxe Room</option>
                    <option value="executive">Executive Suite</option>
                    <option value="penthouse">Penthouse</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    id="guests"
                    min="1"
                    max="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="card-number"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      placeholder="123"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-4">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Previous
                </button>
              )}
              
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ml-auto"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ml-auto"
                >
                  Complete Booking
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}