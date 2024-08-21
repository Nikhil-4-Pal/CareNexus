import React from 'react';
import { Link } from 'react-router-dom';

function DropdownItem({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="p-2 m-1 w-full rounded-lg cursor-pointer "
    >
      <Link to={`/${children}`} >{children}</Link>
    </div>
  );
}

export default DropdownItem;
