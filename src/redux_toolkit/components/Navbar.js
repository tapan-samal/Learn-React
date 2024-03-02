import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {

  const cartProducts = useSelector((state) => state.cart);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "5px 25px",
        backgroundColor: "black",
        color: "white",
        height: "60px",
      }}
    >
      <div>
        <h2 style={{ color: "blue" }}>Redux Toolkit</h2>
      </div>
      <div
        style={{
          display: "flex",
          gap: "28px",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <Link to="/product" style={{ textDecoration: "none", color: "white" }}>
          <h3>Product</h3>
        </Link>
        <Link to="/myCart" style={{ textDecoration: "none", color: "white" }}>
          <h3>Cart {cartProducts.length}</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
