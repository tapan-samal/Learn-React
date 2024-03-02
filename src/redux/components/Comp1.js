import React from 'react';
import { useDispatch } from "react-redux";

const Comp1 = () => {
    const dispatch = useDispatch();

    const addFun = ()=> {
        dispatch({
            type: "increment"
        })
    };

    const addByValue = ()=> {
        dispatch({
            type: "incrementByValue",
            payload: 5
        })
    };

    return (
        <div style={{ backgroundColor: "blue", height: "70px", color: "white" }}>
            <h2>Comp1</h2>
            <button onClick={addFun}>Add</button>
            <button onClick={addByValue}>Add by Value</button>
        </div>
    )
};

export default Comp1;