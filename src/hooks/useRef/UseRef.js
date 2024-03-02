import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const UseRef = () => {

    const [name, setName] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1
    });
    //////////
    const inputEle = useRef();
    const handleClick = () => {
        inputEle.current.style.width = "250px";
        inputEle.current.focus();
    }

    return (
        <>
            <h2>4. useRef :</h2>
            <div>
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <h3>Name: {name}</h3>
                <h3>Renders: {count.current}</h3>
            </div>
            <div>
                <input type="text" ref={inputEle} /> <br />
                <button onClick={handleClick}>Click Here</button>
            </div>
        </>
    )
};

export default UseRef;

// For creating mutable variables which will not re-render the component.
// UseRef allows us to access DOM elememts.