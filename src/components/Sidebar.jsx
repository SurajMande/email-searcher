import React, { useState } from 'react';
import { FiFolder, FiMail, FiLink, FiFileText, FiX } from 'react-icons/fi';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeTab, setActiveTab] = useState('All Files');

  const navItems = [
    { name: 'All Files', icon: <FiFolder /> },
    { name: 'From Gmail', icon: <FiMail /> },
    { name: 'Slack Links', icon: <FiLink /> },
    { name: 'Outlook Files', icon: <FiFileText /> },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-gray-100 shadow-2xl transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="p-6 text-2xl font-bold border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-indigo-400">Email</span> Searcher
        </div>
        <button
          onClick={toggleSidebar}
          className="text-indigo-200 hover:text-white focus:outline-none md:hidden"
        >
          <FiX className="text-2xl" />
        </button>
      </div>
      <nav className="p-6">
        <ul className="space-y-3">
          {navItems.map((item) => (
            <li
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                activeTab === item.name
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-300 hover:text-indigo-400 hover:bg-gray-800/50'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
