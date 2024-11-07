import React from 'react';
import { useDispatch } from 'react-redux';
import { Bell, LogOut, User, Menu } from 'lucide-react';
import { logout } from '../store/slices/authSlice';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={onMenuClick}
              className="sm:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-shrink-0 flex items-center ml-2 sm:ml-0">
              <h1 className="text-xl font-bold text-gray-900">School MS</h1>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-6 w-6 text-gray-500" />
            </button>
            <div className="relative">
              <div className="flex items-center">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <User className="h-6 w-6 text-gray-500" />
                </button>
                <button
                  onClick={handleLogout}
                  className="hidden sm:flex ml-2 p-2 rounded-full hover:bg-gray-100"
                >
                  <LogOut className="h-6 w-6 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;