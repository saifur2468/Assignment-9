import React from 'react';
import auth from '../../assets/Auth.JPG'
const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white rounded-2xl shadow-lg flex max-w-4xl p-8">
        {/* Left side - form */}
        <div className="w-full md:w-1/2 pr-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign up</h2>
          <form className="space-y-4">
            <div className="flex items-center border rounded px-3 py-2">
             
              <input
                type="text"
                placeholder="Your Name"
                className="w-full outline-none"
              />
            </div>
            <div className="flex items-center border rounded px-3 py-2">
             
              <input
                type="email"
                placeholder="Your Email"
                className="w-full outline-none"
              />
            </div>
            <div className="flex items-center border rounded px-3 py-2">
          
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none"
              />
            </div>
            <div className="flex items-center border rounded px-3 py-2">
            
              <input
                type="password"
                placeholder="Repeat your password"
                className="w-full outline-none"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label>
                I agree all statements in{' '}
                <a href="#" className="text-blue-600">Terms of service</a>
              </label>
            </div>
            <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700">
              REGISTER
            </button>
          </form>
        </div>

        {/* Right side - illustration */}
        <div className="hidden md:block w-1/2">
          <img
            src={auth}
            alt="Sign Up"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
