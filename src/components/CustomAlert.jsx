import React from "react";

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="text-lg bg-[#ffffff] text-headline border-r-headline border-solid border-[2px] px-8 py-10 rounded shadow-md">
        <div className="flex justify-between items-center">
          <span>{message}</span>
          <button onClick={onClose} className="text-4xl ml-4 text-">
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;
