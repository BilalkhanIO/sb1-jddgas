import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, BookOpen, Calendar, CreditCard } from 'lucide-react';

const MobileNav = () => {
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Users, label: 'Users', path: '/users' },
    { icon: BookOpen, label: 'Classes', path: '/classes' },
    { icon: Calendar, label: 'Attendance', path: '/attendance' },
    { icon: CreditCard, label: 'Fees', path: '/fees' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 sm:hidden">
      <div className="grid grid-cols-5">
        {navItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center py-2 px-1 ${
                isActive ? 'text-indigo-600' : 'text-gray-600'
              }`
            }
          >
            <Icon className="h-6 w-6" />
            <span className="text-xs mt-1">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;