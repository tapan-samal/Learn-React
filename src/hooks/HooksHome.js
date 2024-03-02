import React from "react";
import UseEffect from "./useEffects/UseEffect";
import UseRef from "./useRef/UseRef";
import UseStateNumber from "./useState/UseStateNumber";
import UseStateObject from "./useState/UseStateObject";
import UseStateString from "./useState/UseStateString";
import UseContext from "./useContext/ContextHome";
import UseStateBoolean from "./useState/UseStateBoolean";
import UseStateArray from "./useState/UseStateArray";
import UseReducerNumber from "./useReducer/useReducerNumber";

const HooksHome = () => {
  return (
    <>
      <h1>Hooks in React :</h1>
      <UseStateNumber />
      <UseStateBoolean />
      <UseStateString />
      <UseStateArray />
      <UseStateObject />
      <UseEffect />
      <UseRef />
      <UseContext />
      <UseReducerNumber />
    </>
  );
};

export default HooksHome;

//Hooks are the functions to use some react features in functional components. In other word, it make functinal components work like class components.
