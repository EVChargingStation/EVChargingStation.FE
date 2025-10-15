import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { useAppSelector } from '../../store/hooks';

const Header: React.FC = () => {
  const { isAuthenticated } = useAppSelector(state => state.auth);
  
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.375 23.25h-1.5c-.619 0-1.125-.506-1.125-1.125v-1.5c0-.619.506-1.125 1.125-1.125h1.5c.619 0 1.125.506 1.125 1.125v1.5c0 .619-.506 1.125-1.125 1.125zM18.75 18v-4.875c0-.619-.506-1.125-1.125-1.125h-1.5c-.619 0-1.125.506-1.125 1.125V18m-9-6v10.125c0 .619.506 1.125 1.125 1.125h1.5c.619 0 1.125-.506 1.125-1.125V12m-3 7.125h4.5M13.5 12V8.25m0 0V6.375c0-.621-.504-1.125-1.125-1.125h-1.5c-.621 0-1.125.504-1.125 1.125v1.875m3.75 0a1.875 1.875 0 01-1.875 1.875h0a1.875 1.875 0 01-1.875-1.875v0C10.875 7.264 11.639 6.5 12.625 6.5h0c.986 0 1.75.764 1.75 1.75v0z" />
              </svg>
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