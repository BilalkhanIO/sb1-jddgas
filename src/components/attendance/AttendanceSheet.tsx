import React, { useState } from 'react';
import { Attendance } from '../../types';
import { Check, X, Minus } from 'lucide-react';

interface AttendanceSheetProps {
  students: Array<{ id: string; name: string }>;
  date: string;
  onSubmit: (attendance: Partial<Attendance>[]) => void;
}

const AttendanceSheet = ({ students, date, onSubmit }: AttendanceSheetProps) => {
  const [attendance, setAttendance] = useState<Record<string, 'present' | 'absent' | 'late'>>({});

  const handleStatusChange = (studentId: string, status: 'present' | 'absent' | 'late') => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: status,
    }));
  };

  const handleSubmit = () => {
    const attendanceData = Object.entries(attendance).map(([studentId, status]) => ({
      studentId,
      date,
      status,
    }));
    onSubmit(attendanceData);
  };

  const getStatusButton = (studentId: string, status: 'present' | 'absent' | 'late') => {
    const isSelected = attendance[studentId] === status;
    const baseClasses = "p-2 rounded-full";
    const statusClasses = {
      present: isSelected ? "bg-green-100 text-green-600" : "text-gray-400 hover:text-green-600",
      absent: isSelected ? "bg-red-100 text-red-600" : "text-gray-400 hover:text-red-600",
      late: isSelected ? "bg-yellow-100 text-yellow-600" : "text-gray-400 hover:text-yellow-600",
    };

    return (
      <button
        type="button"
        className={`${baseClasses} ${statusClasses[status]}`}
        onClick={() => handleStatusChange(studentId, status)}
      >
        {status === 'present' && <Check className="h-5 w-5" />}
        {status === 'absent' && <X className="h-5 w-5" />}
        {status === 'late' && <Minus className="h-5 w-5" />}
      </button>
    );
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Attendance Sheet - {new Date(date).toLocaleDateString()}
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {students.map((student) => (
            <li key={student.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8 rounded-full"
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}`}
                      alt={student.name}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{student.name}</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {getStatusButton(student.id, 'present')}
                  {getStatusButton(student.id, 'late')}
                  {getStatusButton(student.id, 'absent')}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-4 py-4 sm:px-6 border-t border-gray-200">
        <button
          onClick={handleSubmit}
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Attendance
        </button>
      </div>
    </div>
  );
};

export default AttendanceSheet;