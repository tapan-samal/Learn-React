import React, { useState } from "react";

const UseStateBoolean = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkTheme, setDarktheme] = useState(false);

  const theme = {
    darkTheme: {
      backgroundColor: "grey",
      color: "white",
    },
    lightTheme: {
      backgroundColor: "white",
      color: "black",
      padding: "12px",
    },
  };
  return (
    <div style={darkTheme ? theme.darkTheme : theme.lightTheme}>
      <h3>UseState Boolean :</h3>
      {/* <button onClick={() => setIsLoading(!isLoading)}>Toggle</button> */}
      <button onClick={() => setIsLoading((prevState) => !prevState)}>
        Toggle
      </button>
      {isLoading ? <h4>Loading...</h4> : <h4>Result Displayed!</h4>}

      <h4>
        Enable Drk Theme:
        <input
          type="checkbox"
          checked={darkTheme}
          onChange={() => setDarktheme((prevTheme) => !prevTheme)}
        />
      </h4>
    </div>
  );
};

export default UseStateBoolean;
