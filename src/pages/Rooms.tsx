import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Coffee, Tv, Bath } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Suite',
    description: 'Spacious suite with city views and premium amenities',
    price: 299,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    amenities: ['King Size Bed', 'City View', 'Mini Bar', 'Room Service']
  },
  {
    id: 2,
    name: 'Executive Room',
    description: 'Modern room with workspace and luxury bathroom',
    price: 199,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    amenities: ['Queen Size Bed', 'Work Desk', 'Rain Shower', 'Coffee Maker']
  },
  {
    id: 3,
    name: 'Premium Suite',
    description: 'Luxurious suite with separate living area',
    price: 399,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    amenities: ['King Size Bed', 'Living Room', 'Jacuzzi', 'Balcony']
  }
];

const amenityIcons = {
  wifi: <Wifi className="h-5 w-5" />,
  coffee: <Coffee className="h-5 w-5" />,
  tv: <Tv className="h-5 w-5" />,
  bath: <Bath className="h-5 w-5" />
};

export default function Rooms() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Rooms</h1>
          <p className="text-xl text-gray-600">Choose from our selection of luxury accommodations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h2>
                <p className="text-gray-600 mb-4">{room.description}</p>
                
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Room Amenities:</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {room.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="mr-2">{amenityIcons.wifi}</span>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-gray-900">${room.price}<span className="text-sm text-gray-600">/night</span></p>
                  <Link
                    to="/booking"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}