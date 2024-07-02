import * as React from "react";
import { Link,NavLink, useNavigate} from "react-router-dom";
import '../App.css';
import { cartContext } from "../context/Cart";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { dataContext } from "../context/Productdata";

function Header() {
  const navigate = useNavigate()
  const {searchToggle, setSearchToggle} = useContext(dataContext);
  const {cartItems, setCartItems} = useContext(cartContext)
  console.log(cartItems)
  const [toggle, setToggle] = React.useState(false);
  const [cartCount, setCartCount] = useState(0);

    useEffect(()=>{
      let length = cartItems.length;
      setCartCount(length)
    },[setCartItems,cartItems])
  const navHandle = () => {
    setToggle(!toggle);
  };

 const createAccount = ()=>{
  navigate('/createaccount')
  toogleFalse();
 }

  const sigin = ()=>{
    navigate('/login')
    toogleFalse()
  }

const toogleFalse = ()=>{
  setToggle(false);
}
  const handleResize = () => {
    if (window.innerWidth >= 640) {
      setToggle(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <>
            <div className="px-[10px] py-[20px] bg-[#FFFFFF] flex justify-between items-center fixed w-full z-50 top-0 shadow-md">
        <i
          className="ri-menu-line text-[1.5rem] cursor-pointer block sm:hidden"
            
          onClick={navHandle}
        ></i>
        <Link className="logo max-w-full" to='/'>
          <img
            src="https://umino.mageblueskytech.com/media/logo/default/logo_umino.png"
            alt="logo"
            className="max-w-[100px] h-auto"
          />
        </Link>
        <ul
          className={`  text-[1.1rem]  itms-center leading-none tracking-wide absolute  left-0 flex-col max-w-[425px] w-full bg-white text-xl h-screen sm:justify-center sm:static sm:flex-row sm:bg-transparent z-[999] sm:h-fit sm:w-fit sm:flex ${
            toggle ? "flex active-nav top-0 gap-3" : "hidden top-[70px] gap-[0px]"
          }`}
        >
          {
            toggle ? <div className="flex justify-between items-center bg-black text-white px-4 py-5">
            <li className="uppercase text-sm">Menu</li>
            <li><i className="ri-close-fill text-[1.5rem] cursor-pointer" onClick={navHandle}></i></li>
          </div> :null
          }
          <NavLink to='/' className="px-4 py-1" onClick={toogleFalse}>
            <li>Home</li>
          </NavLink>
          <NavLink to='shop' className="px-4 py-1" onClick={toogleFalse}>
            <li>Shop</li>
          </NavLink>
          <Link className="px-4 py-1" onClick={toogleFalse}>
            <li>Blog</li>
          </Link>
          <Link className="px-4 py-1" onClick={toogleFalse}>
            <li>Services</li>
          </Link>
          {
            toggle ?
            <div className="px-4 py-1">
              <button className="uppercase w-full bg-black outline-none text-white py-4 px-4 rounded-full mt-6 text-sm " onClick={sigin}>SIGN IN</button>
              <p className="text-center mt-8 uppercase text-[0.9rem] text-black" onClick={createAccount}>create an account</p>
            </div>
             :null
          }
        </ul>
        <div className="flex gap-[5px] justify-around items-center text-[1.3rem] sm:gap-[20px]">
          <Link>
            <i className="ri-search-line" onClick={()=>setSearchToggle(!searchToggle)}></i>
          </Link>
          <NavLink to='/login'>
            <i className="ri-user-line hidden sm:block"></i>
          </NavLink>
          
          <NavLink to="/shoppingCart">
            <div className="relative">
            <i className="ri-shopping-cart-line"></i>
            <div className="absolute top-0 right-0 w-[15px] h-[15px] bg-[#9C6D3A] flex justify-center items-center text-white rounded-full text-[10px] ">{cartCount}</div>
            </div>
          </NavLink>
        </div>
      </div>
      {/* Overlay */}
      {toggle && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={navHandle}
        ></div>
      )}
      <div className="fixed sm:hidden  bg-white w-full bottom-0 flex justify-around px-1 py-2 items-center left-0 gap-2 leading-none shadow-2xl shadow-black  z-10">
        <NavLink to='/' onClick={toogleFalse} className="flex justify-center items-center flex-col">
          <i className="ri-home-4-line text-[1.3rem]"></i>
          <p>Home</p>
        </NavLink>
        <Link className="flex justify-center items-center flex-col" onClick={navHandle}>
          <i className="ri-menu-line text-[1.3rem]"></i>
          <p>Menu</p>
        </Link>
        <NavLink to='/login' onClick={toogleFalse} className="flex justify-center items-center flex-col">
          <i className="ri-user-line text-[1.3rem]"></i>
          <p>Account</p>
        </NavLink>
        <NavLink to='/shoppingCart' className="flex justify-center items-center flex-col">
          <i className="ri-shopping-cart-line text-[1.3rem]"></i>
          <p>Cart</p>
        </NavLink>
      </div>

    </>
  );
}

export default Header;
