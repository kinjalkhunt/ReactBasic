import React, { useRef } from 'react';

function HookUseRef() {
    const inputRef = useRef(null);
    const headingRef = useRef(null);

    const inputHandler = () => {
        console.log(">>>>>>", inputRef);
        inputRef.current.focus();
        inputRef.current.style.color = 'green';
        inputRef.current.placeholder = 'Enter Your Good Name';
        // inputRef.current.value = '123';
    };

    const toggleHandler = () => {
        if (inputRef.current.style.display !== 'none') {
            inputRef.current.style.display = 'none';
        } else {
            inputRef.current.style.display = 'inline';
        }
    };

    const handleH1 = () => {
        if (headingRef.current.style.color !== 'red') {
            headingRef.current.style.color = 'red';
        } else {
            headingRef.current.style.color = 'blue';
        }
    };

    return (
        <div>
            <h1>useRef</h1>
            <button onClick={toggleHandler} className='border'>Toggle</button>
            <input ref={inputRef} type='text' placeholder='Enter Your Name' className='border' />
            <button onClick={inputHandler} className='border'>Focus On Input Field</button>

            <h1 ref={headingRef}>USE REF IS A BEST HOOK FOR DOM MANIPULATION</h1>
            <button onClick={handleH1} className='border'>Handler</button>
        </div>
    );
}

export default HookUseRef;
