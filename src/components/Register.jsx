import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import carImage from '../assets/car.png';
import skylineImage from '../assets/skyline.png';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Password validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        window.location.href = '/dashboard';
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative lg:fixed lg:inset-0 w-full min-h-screen bg-gradient-to-r from-blue-200 to-blue-50 overflow-hidden">
      {/* Animation Keyframes & Class */}
      <style>
        {`
          @keyframes slideInFromRight {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .slide-in-right {
            animation: slideInFromRight 1s ease-out forwards;
          }
        `}
      </style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Registration Form */}
          <div className="relative z-20">
            <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
                <p className="text-gray-600 mt-2">Join us and start your journey</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 
                      focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 
                      focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 
                      focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Create a password"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 
                      focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Confirm your password"
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-sm text-center">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
                    shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </button>

                <div className="text-center text-sm">
                  <span className="text-gray-600">Already have an account? </span>
                  <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                    Sign in
                  </Link>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Car and Skyline Images */}
                   <div className="relative z-10 flex justify-end mt-8 lg:mt-0">
                     <div className="relative w-full flex justify-end">
                       {/* Skyline (Behind Car) */}
                       <img 
                         src={skylineImage} 
                         alt="City Skyline" 
                         className="absolute bottom-8 lg:bottom-16 left-1/2 transform -translate-x-56 lg:-translate-x-56 w-[120%] opacity-30"
                       />
         
                       {/* Car (In Front) */}
                       <div className="relative w-full max-w-sm lg:max-w-lg slide-in-right">
                         <img 
                           src={carImage} 
                           alt="Car Image" 
                           className="w-full object-contain transform translate-x-4 lg:translate-x-16
                             hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                         />
                       </div>
                     </div>
                   </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
