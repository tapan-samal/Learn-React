import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "../redux_toolkit/store/Store.js";

const ToolkitHome = () => {
  return (
    <>
      <Provider store={store}>
        <h1>Redux Toolkit :</h1>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/product" element={<Product />} />
            <Route path="/myCart" element={<Cart />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default ToolkitHome;
