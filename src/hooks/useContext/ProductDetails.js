import React, { useContext } from 'react';
import {ProductContext} from '../createContext/CreateContext'

const ProductDetails = () => {
    const data = useContext(ProductContext);
  return (
    <>
    <h3>Product Component:</h3>
    <p>Product Name: {data}</p>

    </>
  )
}

export default ProductDetails