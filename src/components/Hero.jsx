import React from 'react';
import carImage from '../assets/car.png';
import skylineImage from '../assets/skyline.png';

const Hero = () => {
  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-r from-blue-50 to-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 text-left">
            <h2 className="text-lg font-medium text-blue-600">Plan your trip now</h2>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Save <span className="text-blue-600">big</span> with our
              <br /> car rental
            </h1>

            <p className="text-lg text-gray-700 max-w-lg">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-md 
                hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 text-lg font-medium">
                Book Ride
                <span className="w-2 h-2 bg-white rounded-full"></span>
              </button>

              <button className="px-8 py-4 bg-gray-900 text-white rounded-md 
                hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2 text-lg font-medium">
                Learn More
                <span className="transform rotate-90">›</span>
              </button>
            </div>
          </div>

          {/* Right Column - Car and Skyline Images */}
          <div className="relative z-10 flex justify-center">
            {/* Skyline (Behind Car) */}
            <img 
              src={skylineImage} 
              alt="City Skyline" 
              className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-[100%] opacity-30"
            />

            {/* Car (In Front) */}
            <img 
              src={carImage} 
              alt="Car Image" 
              className="relative w-full max-w-lg object-contain transform 
                hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;