import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './views/Login';
import SignUpPage from './views/SignUp';
import ForgotPassword from './views/ForgotPassword';
import Dashboard from './views/Dashboard';
import NotFoundPage from './views/NotFoundPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Only redirect when on the root ("/") or dashboard page
    if (location.pathname === '/' || location.pathname === '/dashboard') {
      if (storedUser) {
        const { expirationTime } = storedUser;

        // If session has expired, clear storage and navigate to login
        if (Date.now() > expirationTime) {
          localStorage.removeItem('user');
          navigate('/login');
        } else {
          // If session is valid, redirect to dashboard
          navigate('/dashboard');
        }
      } else {
        // No user logged in, navigate to login
        navigate('/login');
      }
    }
  }, [location, navigate]);

  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route
        path='/dashboard'
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
