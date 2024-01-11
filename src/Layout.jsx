import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Scrolltop from './Components/Scrolltop';
import Searchbox from './Components/Searchbox';
import Cart from './Cart';
import { dataContext } from './Productdata';
import ScrollToTop from "react-scroll-to-top";

function Layout() {
  const {searchToggle, setSearchToggle} = useContext(dataContext);
  
  return (
    <>
      <ScrollToTop smooth style={{ color:'white', width:40, height:40, display:'flex', justifyContent:'center', alignItems:'center', borderRadius:100, bottom:60, right:10 }}/>
      <Cart>
      <Scrolltop />
      {
        searchToggle ? <Searchbox/> : <Header />
      }
      <Outlet />
      <Footer />
      </Cart>
      
      
    </>
  );
}

export default Layout;
