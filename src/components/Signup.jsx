import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const switchToLogin = () => {
    navigate('/login'); // This will go to Login page which has the same modal structure
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white border border-gray-300 shadow-lg rounded-xl p-8">
        {/* Close Button */}
        <div className="absolute right-4 top-4">
          <button
            onClick={() => navigate('/')}
            className="btn btn-sm btn-circle btn-ghost text-gray-500 hover:bg-gray-200"
          >
            ✕
          </button>
        </div>

        <h3 className="font-bold text-2xl text-center mb-6">Create Account</h3>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-200 font-medium">
            Signup
          </button>

          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={switchToLogin}
              className="text-blue-600 underline font-medium hover:text-blue-800 cursor-pointer"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;