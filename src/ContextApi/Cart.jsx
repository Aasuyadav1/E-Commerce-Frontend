import React, { createContext,  useState } from 'react'
export const cartContext = createContext();

function Cart({children}) {
  let [cartItems ,setCartItems] = useState([]);
  return (
    <cartContext.Provider value={{cartItems, setCartItems}}>
        {children}
    </cartContext.Provider>
  )
}

export default Cart