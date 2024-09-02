import React, { useState , useEffect , useRef } from 'react';
import DropdownBtn from './DropdownBtn';
import DropdownContent from './DropdownContent';
import { Link } from 'react-router-dom';


function Dropdown({ btnText, content }) {
  const [open, setOpen] = useState(false);

  const dropdownRef =useRef()

  const toggleDropdown = () => {
    setOpen(prev => !prev);
  };

  useEffect(() => {
    const handler = (event)=>{
      if(dropdownRef.current && !dropdownRef.current.contains(event.target) ){
        setOpen(false)
      }

      document.addEventListener("click" , handler)

      return () =>{
        document.removeEventListener("click" , handler)
      }
    }
  }, [dropdownRef])
  

  return (
    <div className="relative">
      <div
        className="cursor-pointer p-2 "
      >
        <DropdownBtn open={open} toggle={toggleDropdown}>
          {btnText}
        </DropdownBtn>
      </div>
      <DropdownContent children={content} open={open} />
        
    </div>
  );
}

export default Dropdown;
