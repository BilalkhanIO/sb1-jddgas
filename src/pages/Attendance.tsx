import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { markAttendance } from '../store/slices/attendanceSlice';
import AttendanceSheet from '../components/attendance/AttendanceSheet';
import { Calendar } from 'lucide-react';

const Attendance = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const { loading } = useSelector((state: RootState) => state.attendance);

  // Mock data - replace with actual API data
  const students = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Alice Johnson' },
  ];

  const handleAttendanceSubmit = async (attendanceData: any) => {
    try {
      await dispatch(markAttendance(attendanceData) as any);
      alert('Attendance marked successfully');
    } catch (error) {
      alert('Failed to mark attendance');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">Attendance</h2>
        <div className="flex items-center space-x-4">
          <Calendar className="h-5 w-5 text-gray-400" />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>

      <AttendanceSheet
        students={students}
        date={selectedDate}
        onSubmit={handleAttendanceSubmit}
      />
    </div>
  );
};

export default Attendance;