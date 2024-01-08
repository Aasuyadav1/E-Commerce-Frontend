import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Scrolltop from './Components/Scrolltop'

function Layout() {
  return (
    <> 
        <Header/>
        
        <Outlet/>
        <Footer/>
        
       
    </>
  )
}

export default Layout