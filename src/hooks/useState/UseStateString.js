import React, { useState } from "react";

const UseStateString = () => {
  const [wish, setWish] = useState("Hello React!");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const displayData = (event) => {
    event.preventDefault();
    setFirstName(event.target[0].value);
    setLastName(event.target[1].value);
    setEmail(event.target[2].value);
    setNumber(event.target[3].value);
  };
  return (
    <>
      <h3>UseState String :</h3>
      <h3>{wish}</h3>
      <button onClick={() => setWish("Learning useState!")}>Click</button>
      <form onSubmit={displayData}>
        <h4>Fill up the Form:</h4>
        <input type="text" placeholder="Enter your first name" /> <br /> <br />
        <input type="text" placeholder="Enter your last name" /> <br /> <br />
        <input type="email" placeholder="Enter your email" /> <br /> <br />
        <input type="text" placeholder="Enter your phone number" /> <br />{" "}
        <br />
        <button>Submit</button> <br />
      </form>
      <div>
        First Name: {firstName} <br />
        Last Name: {lastName} <br />
        Email: {email} <br />
        Phone Number: {number}
      </div>
    </>
  );
};

export default UseStateString;
