
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { Menu, X } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import { SignIn, useUser } from '@clerk/clerk-react';

const Layout = () => {
  const navigate = useNavigate();
  const { user, isLoaded } = useUser();
  const [sidebar, setSidebar] = useState(false);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return user ? (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200 bg-white">
        <img
          src={assets.logo}
          alt="Logo"
          onClick={() => navigate('/')}
          className="cursor-pointer w-32 sm:w-44"
        />

        {sidebar ? (
          <X
            onClick={() => setSidebar(false)}
            className="w-6 h-6 text-gray-600 sm:hidden cursor-pointer"
          />
        ) : (
          <Menu
            onClick={() => setSidebar(true)}
            className="w-6 h-6 text-gray-600 sm:hidden cursor-pointer"
          />
        )}
      </nav>

      {/* Main Layout */}
      <div className="flex flex-1 w-full min-h-0">
        {/* Sidebar */}
        <Sidebar
          sidebar={sidebar}
          setSidebar={setSidebar}
        />

        {/* Page Content */}
        <div className="flex-1 min-w-0 bg-[#F4F7FB] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <SignIn />
    </div>
  );
};

export default Layout;