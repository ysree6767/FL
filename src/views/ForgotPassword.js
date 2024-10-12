import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-100'>
      <div className='bg-white rounded-lg shadow-lg px-8 py-4 max-w-md w-full'>
        <div className='flex justify-center mb-6'>
          <img src='https://via.placeholder.com/80' alt='logo' className='w-16 h-16 rounded-full' />
        </div>
        <h2 className='text-2xl font-bold text-center'>Forgot Password</h2>
        <p className='text-gray-500 text-center mb-6'>Enter your email address to receive a password reset link</p>

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-600 text-sm font-medium mb-1'>
              Email address
            </label>
            <input type='email' id='email' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <button type='submit' className='mt-4 btn btn-primary border-none w-full bg-gradient-to-r from-purple-400 to-blue-500 text-white py-2 rounded-lg hover:from-purple-500 hover:to-blue-600'>
            Send password reset email
          </button>
        </form>

        <p className='text-center text-gray-500 text-sm mt-4'>
          Remembered your password?
          <a href='/login' className='text-blue-500 btn btn-sm btn-link no-underline leading-none p-0 m-0 ml-2'>
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
