import React, { useState } from "react";
import { json } from "react-router-dom";

const UseStateArray = () => {
  const userLists = [{ id: 1, name: "Anamika" }];

  const [user, setUser] = useState([userLists]);

  const updateUserList = (newUser) => {
    setUser([...user, { id: user.length + 1, name: newUser }]);
  };
  return (
    <>
      <h3>UseState Array:</h3>
      <form>
        <label>
          {" "}
          User Lists: {}
          <input
            type="text"
            name="name"
            onBlur={(e) => updateUserList(e.target.value)}
          />
        </label>
      </form>{" "}
      <br />
      {JSON.stringify(user)}
    </>
  );
};

export default UseStateArray;
