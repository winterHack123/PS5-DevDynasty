import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-semibold mb-4 text-center">Mess Management System</h1>
        <p className="text-gray-600 text-center mb-8">Choose your role to log in:</p>

        <div className="grid grid-cols-1 gap-6">
          <div className="text-center">
          <Link to="/hostel-warden" className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg w-full py-2 px-4">Hostel Warden</Link>
          </div>

          <div className="text-center">
          <Link to="/manager" className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white  rounded-lg w-full py-2 px-4">Mess Incharge</Link>
          </div>

          <div className="text-center">
          <Link to="/student" className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg w-full py-2 px-4">Student</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
