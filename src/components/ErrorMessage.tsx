import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="font-poppins flex items-center justify-center h-full">
      <div className="text-lg text-red-600 bg-red-100 border border-red-400 rounded p-4 shadow-md">
        {message}
      </div>
    </div>
  );
};