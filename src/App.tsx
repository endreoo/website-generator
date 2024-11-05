import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import HomePage from './pages/HomePage';
import Amenities from './pages/Amenities';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Generator from './pages/Generator';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-gray-800">
                  LuxStay
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                <Link to="/amenities" className="text-gray-600 hover:text-gray-900">Amenities</Link>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
                <Link to="/generator" className="text-gray-600 hover:text-gray-900">Generator</Link>
                <Link to="/booking" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Book Now
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Home</Link>
                <Link to="/amenities" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Amenities</Link>
                <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</Link>
                <Link to="/generator" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Generator</Link>
                <Link to="/booking" className="block px-3 py-2 bg-blue-600 text-white rounded-md">Book Now</Link>
              </div>
            </div>
          )}
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/generator" element={<Generator />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">LuxStay</h3>
                <p className="text-gray-300">Experience luxury and comfort at its finest.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                  <li><Link to="/amenities" className="text-gray-300 hover:text-white">Amenities</Link></li>
                  <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="text-gray-300">123 Luxury Avenue<br />Paradise City, PC 12345<br />+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p className="text-gray-300">&copy; {new Date().getFullYear()} LuxStay. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;