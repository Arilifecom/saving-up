import React from "react";

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="max-w-md bg-light border-[3px] border-headline text-headline px-4 py-3 rounded shadow-md">
        <div className="flex justify-between items-center">
          <span>{message}</span>
          <button
            onClick={onClose}
            className="text-red-700 hover:text-red-500 ml-4"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;
