import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, BookOpen, Calendar, CreditCard, X } from 'lucide-react';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar = ({ open, onClose }: SidebarProps) => {
  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Users', path: '/users' },
    { icon: BookOpen, label: 'Classes', path: '/classes' },
    { icon: Calendar, label: 'Attendance', path: '/attendance' },
    { icon: CreditCard, label: 'Fees', path: '/fees' },
  ];

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 sm:hidden z-20"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed sm:sticky top-0 left-0 h-full w-64 bg-white shadow-sm transform 
          ${open ? 'translate-x-0' : '-translate-x-full'} 
          sm:translate-x-0 transition-transform duration-300 ease-in-out z-30
        `}
      >
        <div className="h-16 flex items-center justify-between px-4 sm:hidden">
          <h2 className="text-xl font-bold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-5 px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => onClose()}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm font-medium rounded-md mb-1 ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <item.icon className="mr-3 h-6 w-6" />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;