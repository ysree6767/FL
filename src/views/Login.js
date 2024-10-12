// src/views/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Assuming you're using AuthContext for authentication

const LoginPage = () => {
  const [email, setEmail] = useState(''); // Track email input
  const [password, setPassword] = useState(''); // Track password input
  const [passwordVisible, setPasswordVisible] = useState(false); // Toggle password visibility
  const [error, setError] = useState(''); // To show error if credentials are incorrect
  const { login } = useAuth(); // Assuming you're using context for authentication
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the user exists in localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email) {
      // If user exists and credentials match, log them in
      login(); // Call login function from AuthContext (this will set user as authenticated)
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      // If user doesn't exist or credentials are wrong, show error
      setError('User not found or incorrect credentials');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-100'>
      <div className='bg-white rounded-lg shadow-lg p-8 max-w-md w-full'>
        <div className='flex justify-center mb-6'>
          {/* Logo Placeholder */}
          <img src='https://via.placeholder.com/80' alt='logo' className='w-16 h-16 rounded-full' />
        </div>
        <h2 className='text-2xl font-bold text-center'>Welcome back</h2>
        <p className='text-gray-500 text-center mb-6'>Please enter your details to sign in</p>

        <form onSubmit={handleLogin}>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-600 text-sm font-medium mb-1'>
              Email address
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Handle email input
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
              placeholder='Enter your email'
              required
            />
          </div>

          {/* Password input */}
          <div className='mb-4 relative'>
            <label htmlFor='password' className='block text-gray-600 text-sm font-medium mb-1'>
              Password
            </label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Handle password input
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
              placeholder='Enter your password'
              required
            />
            <button type='button' onClick={togglePasswordVisibility} className='absolute right-3 top-3 text-gray-400'>
              {passwordVisible ? (
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 16l-4-4m0 0l4-4m-4 4h12' />
                </svg>
              ) : (
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 16l-4-4m0 0l4-4m-4 4h12' />
                </svg>
              )}
            </button>
          </div>

          {/* Display error message if any */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Forgot password */}
          <div className='flex items-center justify-between mb-6'>
            <a href='/forgot-password' className='text-blue-500 text-sm'>
              Forgot password?
            </a>
          </div>

          {/* Sign in button */}
          <button
            type="submit"
            className='w-full bg-gradient-to-r from-purple-400 to-blue-500 text-white py-2 rounded-lg hover:from-purple-500 hover:to-blue-600'>
            Sign in
          </button>
        </form>

        {/* Create account link */}
        <p className='text-center text-gray-500 text-sm mt-4'>
          Don't have an account?{' '}
          <a href='/sign-up' className='text-blue-500'>
            Create account
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
