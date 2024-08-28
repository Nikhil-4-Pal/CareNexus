import React from 'react';

function DropdownContent({ children, open }) {
  return (
    <div
      className={`absolute mt-2 max-w-max justify-center items-center max-h-[40vh] overflow-none bg-black/30  rounded-lg shadow-lg transition-opacity duration-200 ${
        open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {children}
    </div>
  );
}

export default DropdownContent;
