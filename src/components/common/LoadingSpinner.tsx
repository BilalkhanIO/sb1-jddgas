import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
}

const LoadingSpinner = ({ fullScreen = false }: LoadingSpinnerProps) => {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <Loader2 className="h-8 w-8 text-white animate-spin" />
      </div>
    );
  }

  return <Loader2 className="h-5 w-5 text-indigo-600 animate-spin" />;
};

export default LoadingSpinner;