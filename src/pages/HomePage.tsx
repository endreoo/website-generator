import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Coffee } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="h-[70vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to LuxStay</h1>
            <p className="text-xl md:text-2xl mb-8">Experience luxury like never before</p>
            <Link 
              to="/booking" 
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-700 transition duration-300"
            >
              Book Your Stay
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Star className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">5-Star Luxury</h3>
              <p className="text-gray-600">Experience world-class service and amenities</p>
            </div>
            <div className="text-center p-6">
              <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
              <p className="text-gray-600">Recognized for excellence in hospitality</p>
            </div>
            <div className="text-center p-6">
              <Coffee className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Premium Services</h3>
              <p className="text-gray-600">24/7 concierge and room service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rooms Preview */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Deluxe Room"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Deluxe Room</h3>
                <p className="text-gray-600 mb-4">Perfect for solo travelers or couples</p>
                <Link to="/booking" className="text-blue-600 hover:text-blue-700">Book Now →</Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Suite"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Executive Suite</h3>
                <p className="text-gray-600 mb-4">Spacious comfort with premium amenities</p>
                <Link to="/booking" className="text-blue-600 hover:text-blue-700">Book Now →</Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Penthouse"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Penthouse</h3>
                <p className="text-gray-600 mb-4">Ultimate luxury with panoramic views</p>
                <Link to="/booking" className="text-blue-600 hover:text-blue-700">Book Now →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}