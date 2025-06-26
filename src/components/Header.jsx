import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { FiSearch, FiLogOut, FiMenu, FiX } from 'react-icons/fi';
import { useSearch } from '../context/SearchContext';

const Header = ({ toggleSidebar }) => {
  const { user, logout } = useAuth();
  const { handleSearch } = useSearch();
  const [query, setQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const onInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value); // 👈 real-time search
  };

  return (
    <header className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-white px-4 py-3 shadow-xl flex items-center justify-between gap-4 transition-all duration-300">
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="text-2xl text-indigo-200 hover:text-white focus:outline-none md:hidden"
      >
        <FiMenu />
      </button>

      {/* Search bar */}
      <div className="flex-1 max-w-lg relative">
        <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-indigo-200 text-lg" />
        <input
          type="text"
          placeholder="Search files, emails, or links..."
          value={query}
          onChange={onInputChange}
          className={`w-full pl-10 pr-4 py-2 bg-indigo-800/30 border ${isSearchFocused ? 'border-indigo-400' : 'border-indigo-600'} rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-indigo-300 text-white transition-all duration-300`}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
      </div>

      {/* User info */}
      <div className="flex items-center gap-3">
        {user?.avatar ? (
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover border-2 border-indigo-400 shadow-sm"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white text-base font-bold shadow-sm">
            {user?.name?.charAt(0).toUpperCase() || '?'}
          </div>
        )}

        <div className="hidden sm:flex flex-col items-start">
          <span className="text-sm font-medium text-indigo-100">{user?.name || 'Guest'}</span>
          <button
            onClick={logout}
            className="flex items-center gap-1 text-xs text-indigo-200 hover:text-white focus:outline-none transition-colors duration-200"
          >
            <FiLogOut className="text-sm" />
            Logout
          </button>
        </div>

        {/* Mobile logout */}
        <button
          onClick={logout}
          className="sm:hidden text-indigo-200 hover:text-white focus:outline-none"
        >
          <FiLogOut className="text-xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;