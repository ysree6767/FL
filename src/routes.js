import React from 'react';
import Dashboard from './views/dashboard';
import { Route, Routes } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/Login" element={<Dashboard />} />
    </Routes>
  );
}
