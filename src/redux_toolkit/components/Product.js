import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";

const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((results) => setProducts(results));
  }, []);

  const addToCart = (product) => {
    //Dispatch an add action
    dispatch(add(product))
  };

  const cards = products.map((product) => (
    <>
      <div
        key={product.id}
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
            src={product.image}
            alt="image"
          />
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>{product.title}</h3>
        </div>
        <div>
          <h3 style={{ margin: "5px" }}>INR: {product.price}</h3>
        </div>
        <div>
          <button
            onClick={() => addToCart(product)}
            style={{
              cursor: "pointer",
              color: "white",
              backgroundColor: "#2980B9",
              borderRadius: "10px",
              padding: "8px",
              border: "none",
              fontSize: "17px",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  ));
  return (
    <>
      <h2>Product Dashboard</h2>
      {/* {JSON.stringify(products)} */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>{cards}</div>
    </>
  );
};

export default Product;
