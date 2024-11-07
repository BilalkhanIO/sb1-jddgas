import React from 'react';
import { useSelector } from 'react-redux';
import { Class } from '../../types';
import { RootState } from '../../store';
import { BookPlus, Users, Clock } from 'lucide-react';

const ClassList = () => {
  const { classes, loading } = useSelector((state: RootState) => state.classes);

  if (loading) {
    return <div>Loading classes...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">Classes</h2>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          <BookPlus className="h-5 w-5 mr-2" />
          Add Class
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {classes.map((classItem: Class) => (
          <div key={classItem.id} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">{classItem.name}</h3>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <Users className="h-5 w-5 mr-2" />
                {classItem.students.length} Students
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <Clock className="h-5 w-5 mr-2" />
                {classItem.schedule.length} Sessions
              </div>
              <div className="mt-4">
                <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassList;