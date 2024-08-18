import React, { useState, useEffect } from 'react';

const words = [
    'Nearest Hospitals',
    'Vacant Beds',
    'Best Facilities',
    'Estimated Time',
    'Available Surgery'
];

function CustomTypewriter() {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const word = words[index];
        const timeout = setTimeout(() => {
            setText(word.substring(0, charIndex));
            if (!isDeleting && charIndex < word.length) {
                setCharIndex(charIndex + 1);
            } else if (isDeleting && charIndex > 0) {
                setCharIndex(charIndex - 1);
            } else {
                setIsDeleting(!isDeleting);
                if (charIndex === 0) {
                    setIndex((index + 1) % words.length);
                }
            }
        }, isDeleting ? 100 : 200   );
        
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index]);

    return (
        <div className='text-pretty font-Raleway font-black leading-[1] tracking-tighter translate-y-[40%] ml-[10%]'>
            <h1 className='text-[600%]'>FIND</h1>
            <div className='text-[800%] text-blue-800'>
                {text || 'AND'}
            </div>
            <div className='text-[600%]'>SEAMLESSLY AND</div>
            <div className='text-[600%]'>CONSISTENTLY</div>
        </div>
    );
}

export default CustomTypewriter;
