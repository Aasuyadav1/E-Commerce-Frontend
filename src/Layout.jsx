import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Scrolltop from './Components/Scrolltop';
import Searchbox from './Components/Searchbox';
import Cart from './Cart';
import { dataContext } from './Productdata';

function Layout() {
  const {searchToggle, setSearchToggle} = useContext(dataContext);
  
  return (
    <>
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
