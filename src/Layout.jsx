import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Scrolltop from './Components/Scrolltop';
import Cart from './Cart';

function Layout() {
  return (
    <>
      <Cart>
      <Scrolltop />
      <Header />
      <Outlet />
      <Footer />
      </Cart>
    </>
  );
}

export default Layout;
