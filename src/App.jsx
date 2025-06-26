// src/App.jsx
import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import { SearchProvider } from './context/SearchContext';

const App = () => {
  return (
    <AuthProvider>
      <SearchProvider>
        <AppRoutes />
      </SearchProvider>
    </AuthProvider>
  );
};

export default App;
