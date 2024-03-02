import React from "react";
import { useState } from "react";

const UseStateNumber = () => {
  // const array = useState(0);
  // const counter = array[0];
  // const setCounter = array[1];

  // const [counter, setCounter] = useState(0);      //De-structure the above 3 statements
  // const [name, setName] = useState("");

  const [count, setCount] = useState(10);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  const incrementByAdding = () => {
    if (count < 49) setCount(count + 5);
  };

  return (
    <>
      <h2>1. useState :</h2>
      <>
        <h3>UseState Number :</h3>
        <button onClick={handleIncrement} disabled={count > 49}>
          Plus
        </button>{" "}
        &nbsp;
        <button onClick={handleDecrement}>Add by Number</button>
        <h2>{count}</h2>
        <button onClick={decrementNumber} disabled={count === 10}>
          Minus
        </button>
      </>
    </>
  );
};

export default UseStateNumber;

// UseState hook is a function to add state in functional component.
//State is nohting but just values or variables of our component.
