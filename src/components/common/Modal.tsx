import React, { Fragment } from 'react';
import { X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../store/slices/uiSlice';

interface ModalProps {
  id: string;
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Modal = ({ id, title, children, onClose, size = 'md' }: ModalProps) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    onClose?.();
    dispatch(closeModal(id));
  };

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  return (
    <Fragment>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity z-40" />
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full ${sizeClasses[size]}`}>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <button
                  onClick={handleClose}
                  className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;