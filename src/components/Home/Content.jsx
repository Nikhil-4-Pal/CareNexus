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
        }, isDeleting ? 200 : 100   );
        
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index]);

    return (
        <div className='text-pretty font-Raleway font-black leading-[1] tracking-tighter translate-y-[20%] ml-[10%]'>
            <h1 className='text-[550%] text-slate-700 '>CareNexus</h1>
            <h1 className='text-[550%]'>helps you</h1>
            <h1 className='text-[550%]'>find...</h1>
            <div className='text-[800%] text-blue-900  '>
                {text || 'AND'}
            </div>
            <div className='text-[550%]'>seamlessly and</div>
            <div className='text-[550%]'>consistently</div>
        </div>
    );
}

export default CustomTypewriter;
