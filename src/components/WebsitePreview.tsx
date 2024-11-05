import React, { useState } from 'react';
import { BedDouble, Wifi, Coffee, Car, Star, ChevronRight } from 'lucide-react';
import { PageConfig, Amenity } from '../types';
import * as Icons from 'lucide-react';

interface WebsitePreviewProps {
  hotelName: string;
  primaryColor: string;
  style: string;
  pages: PageConfig[];
  selectedAmenities: Amenity[];
}

export default function WebsitePreview({ 
  hotelName, 
  primaryColor, 
  style,
  pages,
  selectedAmenities 
}: WebsitePreviewProps) {
  const [activePage, setActivePage] = useState('home');
  const previewName = hotelName || 'Your Luxury Hotel';
  
  const renderPageContent = () => {
    switch (activePage) {
      case 'amenities':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Hotel Amenities</h2>
            <div className="grid grid-cols-2 gap-4">
              {selectedAmenities.map(amenity => {
                const IconComponent = Icons[amenity.icon as keyof typeof Icons];
                return (
                  <div key={amenity.id} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    {IconComponent && (
                      <div className="flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-teal-600" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{amenity.name}</h3>
                      <p className="text-sm text-gray-500">{amenity.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      
      default:
        return (
          <>
            <div className="flex justify-center space-x-4">
              {[BedDouble, Wifi, Coffee, Car].map((Icon, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: primaryColor }}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current text-yellow-400" />
                ))}
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Check-in</label>
                    <input
                      type="date"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Check-out</label>
                    <input
                      type="date"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                </div>
                
                <button
                  className="mt-4 w-full py-2 px-4 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2"
                  style={{ backgroundColor: primaryColor }}
                >
                  <span>Check Availability</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="relative h-64">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
          alt="Hotel preview"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white text-center px-4">{previewName}</h1>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <nav className="flex overflow-x-auto">
          {pages
            .filter(page => page.enabled)
            .map(page => {
              const IconComponent = Icons[page.icon as keyof typeof Icons];
              return (
                <button
                  key={page.id}
                  onClick={() => setActivePage(page.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap ${
                    activePage === page.id
                      ? 'border-teal-600 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {IconComponent && <IconComponent className="h-4 w-4" />}
                  {page.name}
                </button>
              );
            })}
        </nav>
      </div>

      <div className="p-6">
        {renderPageContent()}
      </div>
    </div>
  );
}