import React from 'react';
import { DumbbellIcon } from 'lucide-react';
import { Amenity } from '../types';

interface AmenitySelectorProps {
  amenities: Amenity[];
  selectedAmenities: string[];
  onChange: (amenities: string[]) => void;
}

export default function AmenitySelector({ amenities, selectedAmenities, onChange }: AmenitySelectorProps) {
  const categories = ['room', 'property', 'service'];
  
  const handleToggle = (amenityId: string) => {
    const updated = selectedAmenities.includes(amenityId)
      ? selectedAmenities.filter(id => id !== amenityId)
      : [...selectedAmenities, amenityId];
    onChange(updated);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <DumbbellIcon className="h-5 w-5 text-teal-600" />
        Amenities Configuration
      </h3>

      {categories.map(category => (
        <div key={category} className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3 capitalize">{category} Amenities</h4>
          <div className="grid grid-cols-2 gap-3">
            {amenities
              .filter(amenity => amenity.category === category)
              .map(amenity => (
                <div
                  key={amenity.id}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    id={amenity.id}
                    checked={selectedAmenities.includes(amenity.id)}
                    onChange={() => handleToggle(amenity.id)}
                    className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label
                    htmlFor={amenity.id}
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    {amenity.name}
                  </label>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}