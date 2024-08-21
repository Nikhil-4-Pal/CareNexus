import React, { useState , useEffect , useRef } from 'react';
import DropdownBtn from './DropdownBtn';
import DropdownContent from './DropdownContent';

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
        className="cursor-pointer p-2 rounded-full border-x-2 border-y-2 border-x-black border-y-black"
      >
        <DropdownBtn open={open} toggle={toggleDropdown}>
          {btnText}
        </DropdownBtn>
      </div>
      <DropdownContent open={open}>
        {content}
      </DropdownContent>
    </div>
  );
}

export default Dropdown;
