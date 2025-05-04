// src/pages/Login.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const { login, user } = useAuth();
  const navigate = useNavigate();

  // Navigate to dashboard after login
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full text-center">
        <h1 className="text-3xl font-extrabold mb-4 text-gray-800">Welcome Back</h1>
        <p className="text-gray-600 mb-8">Sign in to access your workspace</p>

        <button
          onClick={login}
          className="flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-5 rounded-lg shadow-sm transition-all w-full"
        >
          <FcGoogle className="text-2xl" />
          <span>Sign in with Google</span>
        </button>

        <div className="mt-8 text-sm text-gray-400">
          By signing in, you agree to our{' '}
          <a href="#" className="text-blue-500 hover:underline">Terms</a> and{' '}
          <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
};

export default Login;
