import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/CartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    //Dispatch an action to remove
    dispatch(remove(id));
  };
  const cards = products.map((item) => (
    <div
      key={item.id}
      style={{
        height: "340px",
        width: "288px",
        border: "8px solid #F2F3F4",
        margin: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "10px",
        padding: "4px",
      }}
    >
      <div>
        <img
          style={{ height: "140px", width: "140px" }}
          src={item.image}
          alt="image"
        />
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>{item.title}</h3>
      </div>
      <div>
        <h3 style={{ margin: "5px" }}>INR: {item.price}</h3>
      </div>
      <div>
        <button
          onClick={() => removeFromCart(item.id)}
          style={{
            cursor: "pointer",
            color: "white",
            backgroundColor: "red",
            borderRadius: "10px",
            padding: "8px",
            border: "none",
            fontSize: "17px",
          }}
        >
          Remove
        </button>
      </div>
    </div>
  ));
  return (
    <>
      <h2>Cart Lists</h2> <br />
      {/* {JSON.stringify(dispalyCart)} */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>{cards}</div>
    </>
  );
};

export default Cart;
