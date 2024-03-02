import React, { useState } from "react";
import Users from "./Users";
import {UserContext, ProductContext } from "../createContext/CreateContext";
import ProductDetails from "./ProductDetails";

const UseContext = () => {

  const [user, setUser] = useState("Kumar");
  const users = {
    userName: user,
    updateName: setUser
  };
  const product = "Laptop";

  return (
    <UserContext.Provider value={users}>
      <h2>5. useContext() :</h2>
      <h3>Home Component:</h3>
      <button onClick={() => setUser('Tapan Samal')}>Update Name</button>
      <Users />
    <ProductContext.Provider value= {product}>
      <ProductDetails/>
    </ProductContext.Provider>

    </UserContext.Provider>
  );
};

export default UseContext;
