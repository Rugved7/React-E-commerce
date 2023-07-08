import React from 'react'
import { createContext,  useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null) 

const getDefaultCart = () => {
  let cart = {}
  for (let i = 0; i < PRODUCTS.length +1; i++)  {
    cart[i] = 0;
  }
  return cart;
}

export const ShopContextProvider = (props) =>{
    const [cartItems, setcartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
      setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };
  
    const removeFromCart = (itemId) => {
      setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };
    
    const contextValue = {cartItems,addToCart,removeFromCart}
    console.log(cartItems)
  return<ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  }

export default ShopContext