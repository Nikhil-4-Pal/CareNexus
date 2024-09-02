import React from 'react';

function DropdownContent({ children, open }) {
  return (
    <div
      className={`absolute flex flex-col mt-2  justify-center items-center max-h-[40vh] overflow-none bg-blue-600 rounded-lg shadow-lg transition-opacity duration-200 ${
        open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {children}
    </div>
  );
}

export default DropdownContent;
