import React, { useState } from "react";

const UseStateObject = () => {
  const initialData = {
    username: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialData);

  const handleUpdate = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h3>UseState Object : </h3>
      <h4>Personal Details:</h4>
      <label>
        User Name: &nbsp;
        <input type="text" name="username" onChange={handleUpdate} />
      </label>{" "}
      &nbsp;
      <label>
        Email: &nbsp;
        <input type="email" name="email" onChange={handleUpdate} />
      </label>{" "}
      &nbsp;
      <label>
        Password: &nbsp;
        <input type="password" name="password" onChange={handleUpdate} />
      </label>{" "}
      <br /> <br />
      {JSON.stringify(data)}
    </>
  );
};

export default UseStateObject;
