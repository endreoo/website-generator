import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Hotel className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">LuxStay</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link to="/" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/rooms" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Rooms
            </Link>
            <Link to="/amenities" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Amenities
            </Link>
            <Link to="/contact" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            <Link to="/booking" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
              Book Now
            </Link>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/rooms"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Rooms
            </Link>
            <Link
              to="/amenities"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Amenities
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/booking"
              className="block px-3 py-2 text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}