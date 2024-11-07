import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Fee } from '../../types';
import { DollarSign, Calendar, Clock, CheckCircle, XCircle } from 'lucide-react';

const FeeList = () => {
  const { fees, loading } = useSelector((state: RootState) => state.fees);

  const getStatusColor = (status: Fee['status']) => {
    switch (status) {
      case 'paid':
        return 'text-green-600 bg-green-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'overdue':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: Fee['status']) => {
    switch (status) {
      case 'paid':
        return <CheckCircle className="h-5 w-5" />;
      case 'pending':
        return <Clock className="h-5 w-5" />;
      case 'overdue':
        return <XCircle className="h-5 w-5" />;
      default:
        return null;
    }
  };

  if (loading) {
    return <div>Loading fees...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">Fee Management</h2>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          <DollarSign className="h-5 w-5 mr-2" />
          Add Fee
        </button>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Fee Records</h3>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {fees.map((fee) => (
              <li key={fee.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <DollarSign className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {fee.type.charAt(0).toUpperCase() + fee.type.slice(1)} Fee
                      </div>
                      <div className="text-sm text-gray-500">
                        Amount: ${fee.amount}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-5 w-5 mr-1" />
                      {new Date(fee.dueDate).toLocaleDateString()}
                    </div>
                    <div className={`flex items-center px-3 py-1 rounded-full ${getStatusColor(fee.status)}`}>
                      {getStatusIcon(fee.status)}
                      <span className="ml-2 text-sm font-medium">
                        {fee.status.charAt(0).toUpperCase() + fee.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeeList;