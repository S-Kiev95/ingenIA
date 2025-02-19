import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-900">IngenIA Labs</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className={`text-gray-700 hover:text-purple-600 ${location.pathname === '/' ? 'text-purple-600' : ''}`}>
              Inicio
            </Link>
            <Link to="/privacy" className={`text-gray-700 hover:text-purple-600 ${location.pathname === '/privacy' ? 'text-purple-600' : ''}`}>
              Privacidad
            </Link>
            <Link to="/terms" className={`text-gray-700 hover:text-purple-600 ${location.pathname === '/terms' ? 'text-purple-600' : ''}`}>
              Términos
            </Link>
            <Link to="/contact" className={`text-gray-700 hover:text-purple-600 ${location.pathname === '/contact' ? 'text-purple-600' : ''}`}>
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;