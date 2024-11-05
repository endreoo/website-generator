import React from 'react';
import { Wifi, Coffee, Dumbbell, Utensils, Waves, Tv } from 'lucide-react';

export default function Amenities() {
  const amenities = [
    {
      icon: <Wifi className="w-8 h-8" />,
      name: 'High-Speed WiFi',
      description: 'Stay connected with complimentary high-speed internet access throughout the property'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      name: 'Coffee Bar',
      description: '24/7 access to premium coffee and refreshments'
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      name: 'Fitness Center',
      description: 'State-of-the-art fitness equipment and personal training services'
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      name: 'Restaurant',
      description: 'Fine dining experience with international cuisine'
    },
    {
      icon: <Waves className="w-8 h-8" />,
      name: 'Swimming Pool',
      description: 'Heated indoor pool and jacuzzi with stunning views'
    },
    {
      icon: <Tv className="w-8 h-8" />,
      name: 'Entertainment',
      description: 'Smart TVs with streaming services in all rooms'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Hotel Amenities</h1>
          <p className="text-xl text-gray-600">Experience luxury with our world-class amenities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-blue-600 mb-4">
                {amenity.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{amenity.name}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Additional Services</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>24/7 Room Service</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Concierge Services</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Valet Parking</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Laundry Service</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Airport Shuttle</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Business Center</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}