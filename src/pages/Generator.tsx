import React, { useState } from 'react';
import { defaultPages } from '../data/defaultPages';
import WebsitePreview from '../components/WebsitePreview';
import ColorPicker from '../components/ColorPicker';
import PageConfigurator from '../components/PageConfigurator';
import AmenitySelector from '../components/AmenitySelector';
import AIConfigurator from '../components/AIConfigurator';
import { PageConfig, Amenity } from '../types';

const defaultAmenities: Amenity[] = [
  { id: 'wifi', name: 'Free WiFi', description: 'High-speed internet throughout', icon: 'Wifi', category: 'property' },
  { id: 'pool', name: 'Swimming Pool', description: 'Outdoor infinity pool', icon: 'Pool', category: 'property' },
  { id: 'spa', name: 'Luxury Spa', description: 'Full-service spa treatments', icon: 'Heart', category: 'service' },
  { id: 'gym', name: 'Fitness Center', description: '24/7 gym access', icon: 'Dumbbell', category: 'property' },
  { id: 'restaurant', name: 'Restaurant', description: 'Fine dining experience', icon: 'UtensilsCrossed', category: 'service' },
  { id: 'room-service', name: 'Room Service', description: '24/7 room service', icon: 'Bell', category: 'service' },
  { id: 'parking', name: 'Valet Parking', description: 'Secure parking service', icon: 'Car', category: 'service' },
  { id: 'bar', name: 'Bar & Lounge', description: 'Sophisticated bar area', icon: 'Wine', category: 'service' },
  { id: 'minibar', name: 'Minibar', description: 'In-room refreshments', icon: 'Beer', category: 'room' },
  { id: 'tv', name: 'Smart TV', description: 'HD TV with streaming', icon: 'Tv', category: 'room' },
  { id: 'ac', name: 'Climate Control', description: 'Individual AC control', icon: 'Thermometer', category: 'room' },
  { id: 'safe', name: 'In-room Safe', description: 'Digital safety box', icon: 'Lock', category: 'room' }
];

export default function Generator() {
  const [hotelName, setHotelName] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#0f766e');
  const [style, setStyle] = useState('modern');
  const [pages, setPages] = useState<PageConfig[]>(defaultPages);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hotel Website Generator</h1>
          <p className="text-xl text-gray-600">Create your custom hotel website in minutes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="hotelName" className="block text-sm font-medium text-gray-700">
                    Hotel Name
                  </label>
                  <input
                    type="text"
                    id="hotelName"
                    value={hotelName}
                    onChange={(e) => setHotelName(e.target.value)}
                    placeholder="Enter your hotel name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>

                <ColorPicker color={primaryColor} onChange={setPrimaryColor} />

                <div>
                  <label htmlFor="style" className="block text-sm font-medium text-gray-700">
                    Website Style
                  </label>
                  <select
                    id="style"
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  >
                    <option value="modern">Modern & Minimal</option>
                    <option value="luxury">Luxury & Elegant</option>
                    <option value="boutique">Boutique & Artistic</option>
                    <option value="resort">Resort & Relaxed</option>
                  </select>
                </div>
              </div>
            </div>

            <PageConfigurator pages={pages} onChange={setPages} />
            
            <AmenitySelector
              amenities={defaultAmenities}
              selectedAmenities={selectedAmenities}
              onChange={setSelectedAmenities}
            />

            <AIConfigurator />
          </div>

          {/* Preview Panel */}
          <div className="lg:sticky lg:top-6">
            <WebsitePreview
              hotelName={hotelName}
              primaryColor={primaryColor}
              style={style}
              pages={pages}
              selectedAmenities={defaultAmenities.filter(a => selectedAmenities.includes(a.id))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}