import React, {createContext, useState} from 'react';

export const CartContext = createContext( {} );

export const CartContextProvider = ( {children} ) => {
  const [cart, setCart] = useState({});

  const addToCart = (id) => {
    const newCart = { ...cart };
    newCart[id] = newCart[id] ? newCart[id] + 1 : 1;
    setCart(newCart);
  }

  const dropFromCart = (id) => {
    const newCart = { ...cart };
    if (newCart[id] > 1) {
      newCart[id] -= 1;
    }
    else {
      delete newCart[id];
    }
    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{
      cart, addToCart, dropFromCart
    }}>
      {children}
    </CartContext.Provider>
  )
}