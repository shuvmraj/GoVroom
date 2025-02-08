import React from 'react';
import carFleetImage from '../assets/cars.png';

const About = () => {
  const stats = [
    { number: '20+', text: 'Car Types' },
    { number: '5+', text: 'Rental Outlets' },
    { number: '15+', text: 'Repair Shops' }
  ];

  return (
    // The main container uses conditional positioning based on screen size
    // On mobile (default): relative positioning with normal document flow
    // On larger screens (lg:): fixed positioning with hidden overflow
    <div className="relative min-h-screen lg:fixed lg:inset-0 bg-gradient-to-r from-blue-50 to-white lg:overflow-hidden overflow-auto">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        {/* Main content container */}
        <div className="h-full flex flex-col justify-center">
          {/* Centered About Us heading */}
          <h2 className="text-2xl font-medium text-blue-600 text-center mb-12 pt-8 lg:pt-0">
            <span className="text-black text-5xl lg:text-6xl font-bold">About</span>
            <span className="text-blue-600 text-5xl lg:text-6xl font-bold"> Us</span>
          </h2>

          {/* Grid container for main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Image and Stats */}
            <div className="relative">
              <div className="space-y-8">
                {/* Main car fleet image */}
                <img 
                  src={carFleetImage}
                  alt="Our Car Fleet"
                  className="w-full rounded-lg shadow-xl object-contain max-h-[40vh]"
                />
                
                {/* Statistics section */}
                <div className="bg-white p-6 rounded-lg shadow-xl w-full">
                  <div className="grid grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <p className="text-2xl lg:text-3xl font-bold text-blue-600">{stat.number}</p>
                        <p className="text-xs lg:text-sm text-gray-600">{stat.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="space-y-6 lg:pl-8">
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                You start the engine and
                <br /> your adventure <span className="text-blue-600">begins</span>
              </h1>

              <p className="text-base lg:text-lg text-gray-700">
                Discover the best deals you'll ever find with our unbeatable offers. 
                We're dedicated to providing you with the best value for your money, 
                so you can enjoy high-quality services and products without breaking the bank.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Select Car</h3>
                    <p className="text-sm text-gray-600">We offer a wide range of vehicles</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Contact Operator</h3>
                    <p className="text-sm text-gray-600">Our team is ready to help 24/7</p>
                  </div>
                </div>
              </div>

              <button className="mt-6 px-6 py-3 lg:px-8 lg:py-4 bg-blue-600 text-white rounded-md 
                hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 text-base lg:text-lg font-medium">
                Find Details
                <span className="transform rotate-90">›</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;