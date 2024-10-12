import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './views/Login';
import SignUpPage from './views/SignUp';
import ForgotPassword from './views/ForgotPassword';
import Dashboard from './views/Dashboard';
import NotFoundPage from './views/NotFoundPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
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
