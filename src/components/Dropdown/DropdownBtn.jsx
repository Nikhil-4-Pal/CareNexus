import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function DropdownBtn({ children, open, toggle }) {
  return (
    <div onClick={toggle} className={`flex items-center w-max ${open ? '' : ''}`}>
      {children}
      <span className="ml-2">
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </span>
    </div>
  );
}

export default DropdownBtn;
