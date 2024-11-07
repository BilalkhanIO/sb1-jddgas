import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import UserForm from '../users/UserForm';
import ClassForm from '../classes/ClassForm';
import FeeForm from '../fees/FeeForm';

const ModalManager = () => {
  const activeModals = useSelector((state: RootState) => state.ui.activeModals);

  return (
    <>
      {activeModals.map(modalId => {
        switch (modalId) {
          case 'add-user':
            return <UserForm key={modalId} onClose={() => {}} />;
          case 'add-class':
            return <ClassForm key={modalId} onClose={() => {}} />;
          case 'add-fee':
            return <FeeForm key={modalId} onClose={() => {}} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default ModalManager;