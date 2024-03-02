import React from 'react';
import {useSelector} from "react-redux";

const Comp4 = () => {
  const value = useSelector(state=>state.demoReducer.x);

  return (
    <div style={{ backgroundColor: "green", height: "70px", width:"50%", color: "white"}}>
      <h2>Component 4</h2>
      <button style={{width: "50px", height: "30px", marginTop: "-10px", fontSize: "26px"}}>{value}</button>
      </div>
  )
};

export default Comp4;