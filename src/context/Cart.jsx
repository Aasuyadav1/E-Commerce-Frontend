import React, { createContext,  useState } from 'react'


export const cartContext = createContext();

function Cart({children}) {
  const [cartItems ,setCartItems] = useState([]);
  return (
    <cartContext.Provider value={{ cartItems, setCartItems }}>
        {children}
    </cartContext.Provider>
  )
}

export default Cart;