import React from 'react';
import { useDispatch } from "react-redux";


const Comp2 = () => {
  const dispatch = useDispatch();

  const removeFun = () => {
    dispatch({
      type: "decrement"
    })
  };

  const removeByValue = () => {
    dispatch({
      type: "decrementByValue",
      payload: 5
    })
  };

  return (
    <div style={{ backgroundColor: "tomato", height: "70px", color: "white" }}>
      <h2>Comp2</h2>
      <button onClick={removeFun}>Remove</button>
      <button onClick={removeByValue}>Remove by Value</button>
    </div>
  )
};

export default Comp2;