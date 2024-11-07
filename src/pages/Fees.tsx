import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FeeList from '../components/fees/FeeList';
import FeeForm from '../components/fees/FeeForm';
import { createFee } from '../store/slices/feeSlice';
import { Fee } from '../types';

const Fees = () => {
  const dispatch = useDispatch();
  const [showFeeForm, setShowFeeForm] = useState(false);

  const handleCreateFee = async (feeData: Partial<Fee>) => {
    try {
      await dispatch(createFee(feeData) as any);
      setShowFeeForm(false);
    } catch (error) {
      alert('Failed to create fee');
    }
  };

  return (
    <div>
      <FeeList />
      {showFeeForm && (
        <FeeForm
          onSubmit={handleCreateFee}
          onClose={() => setShowFeeForm(false)}
        />
      )}
    </div>
  );
};

export default Fees;