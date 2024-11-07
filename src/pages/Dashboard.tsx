import React from 'react';
import { Users, BookOpen, Calendar, CreditCard } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { name: 'Total Students', value: '2,500', icon: Users },
    { name: 'Active Classes', value: '48', icon: BookOpen },
    { name: "Today's Classes", value: '12', icon: Calendar },
    { name: 'Fee Collection', value: '$25,000', icon: CreditCard },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="bg-white overflow-hidden shadow rounded-lg p-4 sm:p-5"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
              </div>
              <div className="ml-3 sm:ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-xs sm:text-sm font-medium text-gray-500 truncate">
                    {item.name}
                  </dt>
                  <dd className="text-base sm:text-lg font-semibold text-gray-900">
                    {item.value}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-medium text-gray-900">Recent Activities</h3>
            <div className="mt-4 sm:mt-6 flow-root">
              <ul className="-my-4 sm:-my-5 divide-y divide-gray-200">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        New student enrollment
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        Fee payment received
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">4 hours ago</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-medium text-gray-900">Upcoming Events</h3>
            <div className="mt-4 sm:mt-6 flow-root">
              <ul className="-my-4 sm:-my-5 divide-y divide-gray-200">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        Parent-Teacher Meeting
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">Tomorrow, 10:00 AM</p>
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        Annual Sports Day
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">Next Week</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;