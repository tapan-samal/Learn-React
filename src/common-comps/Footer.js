import React from 'react';

export const Footer = function () {
  const styles = {
    backgroundColor: "black",
    color: "white", 
    textAlign: "center",
    height: "70px",
  };

  return (
    <div style={styles}>
      <h1 style={{margin: "6px"}}>I am Footer !!</h1>
      <p style={{margin: "6px", fontFamily: "serif"}}> Check how I use CSS and  export component</p>
    </div>
  )
};
