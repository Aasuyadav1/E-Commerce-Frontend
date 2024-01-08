import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cart from './ContextApi/cart.jsx'
import Productdata from './Productdata.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Productdata>
   <Cart>
    <App />
    </Cart>
    </Productdata>
   
  </React.StrictMode>,
)
