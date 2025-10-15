import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import Button from '../../components/ui/Button';

const HomePage: React.FC = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Charge Your EV <span className="text-blue-600">Anywhere</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Find and access charging stations for your electric vehicle with ease.
              Join our network for a seamless charging experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/stations">
                <Button>Find Stations</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline">Create Account</Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <svg className="w-full h-auto max-w-lg text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18.375 23.25h-1.5c-.619 0-1.125-.506-1.125-1.125v-1.5c0-.619.506-1.125 1.125-1.125h1.5c.619 0 1.125.506 1.125 1.125v1.5c0 .619-.506 1.125-1.125 1.125zM18.75 18v-4.875c0-.619-.506-1.125-1.125-1.125h-1.5c-.619 0-1.125.506-1.125 1.125V18m-9-6v10.125c0 .619.506 1.125 1.125 1.125h1.5c.619 0 1.125-.506 1.125-1.125V12m-3 7.125h4.5M13.5 12V8.25m0 0V6.375c0-.621-.504-1.125-1.125-1.125h-1.5c-.621 0-1.125.504-1.125 1.125v1.875m3.75 0a1.875 1.875 0 01-1.875 1.875h0a1.875 1.875 0 01-1.875-1.875v0C10.875 7.264 11.639 6.5 12.625 6.5h0c.986 0 1.75.764 1.75 1.75v0z" fill="currentColor" />
              </svg>
              <div className="absolute inset-0 bg-blue-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 border-t border-gray-200">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Find Stations</h3>
            <p className="text-gray-600">
              Easily locate charging stations near you with our simple station finder.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Scan QR Code</h3>
            <p className="text-gray-600">
              Start charging by simply scanning the station's QR code with your smartphone.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Pay with Ease</h3>
            <p className="text-gray-600">
              Simple, transparent pricing based on the energy you use with easy payment options.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 text-center border-t border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Ready to Get Started?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our network of EV drivers and enjoy seamless charging experiences across the country.
        </p>
        <Link to="/register">
          <Button size="lg">Create Free Account</Button>
        </Link>
      </div>
    </PageLayout>
  );
};

export default HomePage;