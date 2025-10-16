import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { useAppSelector } from '../../store/hooks';
import logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
  const { isAuthenticated } = useAppSelector(state => state.auth);
  
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="EV Charge Logo" className="h-10 w-auto" />
              <span className="ml-2 text-xl font-medium text-gray-900">EV Charge</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</Link>
            <Link to="/stations" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Stations</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">About</Link>
          </nav>
          
          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Dashboard</Link>
                <Button variant="outline">Sign Out</Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="outline">Log in</Button>
                </Link>
                <Link to="/register">
                  <Button>Sign up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;