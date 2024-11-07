import React, { useState } from 'react';
import { Class, ClassSchedule } from '../../types';
import { X, Plus, Trash2 } from 'lucide-react';

interface ClassFormProps {
  onSubmit: (classData: Partial<Class>) => void;
  onClose: () => void;
  initialData?: Partial<Class>;
}

const ClassForm = ({ onSubmit, onClose, initialData }: ClassFormProps) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    teacherId: initialData?.teacherId || '',
    schedule: initialData?.schedule || [],
  });

  const [scheduleItem, setScheduleItem] = useState<Partial<ClassSchedule>>({
    day: '',
    startTime: '',
    endTime: '',
    subject: '',
  });

  const addScheduleItem = () => {
    if (!scheduleItem.day || !scheduleItem.startTime || !scheduleItem.endTime || !scheduleItem.subject) {
      alert('Please fill all schedule fields');
      return;
    }
    setFormData({
      ...formData,
      schedule: [...formData.schedule, scheduleItem as ClassSchedule],
    });
    setScheduleItem({ day: '', startTime: '', endTime: '', subject: '' });
  };

  const removeScheduleItem = (index: number) => {
    setFormData({
      ...formData,
      schedule: formData.schedule.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {initialData ? 'Edit Class' : 'Add New Class'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Class Name</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Teacher</label>
            <select
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.teacherId}
              onChange={(e) => setFormData({ ...formData, teacherId: e.target.value })}
            >
              <option value="">Select Teacher</option>
              {/* TODO: Add teacher options from API */}
              <option value="1">John Doe</option>
              <option value="2">Jane Smith</option>
            </select>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Class Schedule</h3>
            <div className="grid grid-cols-5 gap-3 mb-4">
              <select
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={scheduleItem.day}
                onChange={(e) => setScheduleItem({ ...scheduleItem, day: e.target.value })}
              >
                <option value="">Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
              </select>

              <input
                type="time"
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={scheduleItem.startTime}
                onChange={(e) => setScheduleItem({ ...scheduleItem, startTime: e.target.value })}
              />

              <input
                type="time"
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={scheduleItem.endTime}
                onChange={(e) => setScheduleItem({ ...scheduleItem, endTime: e.target.value })}
              />

              <input
                type="text"
                placeholder="Subject"
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={scheduleItem.subject}
                onChange={(e) => setScheduleItem({ ...scheduleItem, subject: e.target.value })}
              />

              <button
                type="button"
                onClick={addScheduleItem}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add
              </button>
            </div>

            <div className="mt-4">
              {formData.schedule.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b">
                  <div className="flex space-x-4">
                    <span className="text-sm font-medium">{item.day}</span>
                    <span className="text-sm text-gray-500">
                      {item.startTime} - {item.endTime}
                    </span>
                    <span className="text-sm">{item.subject}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeScheduleItem(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              {initialData ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClassForm;