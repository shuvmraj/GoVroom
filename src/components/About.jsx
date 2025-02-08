import React from "react";
import { Globe, ShieldCheck, Users, Star } from "lucide-react";
import cars from "../assets/cars.png";

const About = () => {
  return (
    <section id="about" className="h-screen bg-white">
      <div className="h-full flex flex-col pt-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-7xl font-bold text-gray-900">
            Why Choose <span className="text-blue-600">Us</span>?
          </h2>
          <p className="mt-2 text-gray-700">
            Drive your dream car with the best offers, unbeatable service, and top-rated customer experience.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex-1 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-6 mt-0">
          {/* Left - Image Section */}
          <div className="flex items-center">
            <img 
              src={cars} 
              alt="Luxury Cars" 
              className="w-full object-contain max-h-[400px] mx-auto"
            />
          </div>

          {/* Right - Features List */}
          <div className="flex flex-col justify-center space-y-3 mt-0">
            {aboutPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{point.title}</h3>
                  <p className="text-sm text-gray-700">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Data
const aboutPoints = [
  {
    icon: <Globe size={20} />,
    title: "Global Availability",
    description: "Find rentals in multiple locations worldwide for a seamless experience."
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Full Insurance Coverage",
    description: "Drive with peace of mind with our comprehensive insurance policies."
  },
  {
    icon: <Users size={20} />,
    title: "24/7 Customer Support",
    description: "We are here for you anytime, anywhere."
  },
  {
    icon: <Star size={20} />,
    title: "Top-Rated Service",
    description: "Highly rated by our customers for exceptional service and quality."
  }
];

export default About;