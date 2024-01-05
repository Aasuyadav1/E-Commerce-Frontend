import * as React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Header() {
  const [toggle, setToggle] = React.useState(false);

  const navHandle = () => {
    setToggle(!toggle);
  };

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
          className={`${
            toggle ? "ri-close-fill" : "ri-menu-line"
          } text-[1.5rem] cursor-pointer block sm:hidden `}
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
          className={` gap-[20px] text-[1.1rem]  itms-center leading-none tracking-wide absolute top-[70px] left-0 flex-col max-w-[425px] w-full bg-white px-4 py-3 text-xl h-screen sm:justify-center sm:static sm:flex-row sm:bg-transparent sm:h-fit sm:w-fit sm:flex ${
            toggle ? "flex active-nav " : "hidden"
          }`}
        >
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='shop'>
            <li>Shop</li>
          </Link>
          <Link>
            <li>Blog</li>
          </Link>
          <Link>
            <li>Services</li>
          </Link>
        </ul>
        <div className="flex gap-[5px] justify-around items-center text-[1.3rem] sm:gap-[20px]">
          <Link>
            <i className="ri-search-line"></i>
          </Link>
          <Link>
            <i className="ri-user-line hidden sm:block"></i>
          </Link>
          <Link>
            <i className="ri-heart-line hidden sm:block"></i>
          </Link>
          <Link>
            <i className="ri-shopping-cart-line"></i>
          </Link>
        </div>
      </div>
      {/* Overlay */}
      {toggle && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={navHandle}
        ></div>
      )}
      <div className="fixed sm:hidden z-40 bg-white w-full bottom-0 flex justify-around px-1 py-2 items-center left-0 gap-2 leading-none shadow-2xl shadow-black ">
        <Link className="flex justify-center items-center flex-col">
          <i className="ri-home-4-line text-[1.3rem]"></i>
          <p>Home</p>
        </Link>
        <Link className="flex justify-center items-center flex-col" onClick={navHandle}>
          <i className="ri-menu-line text-[1.3rem]"></i>
          <p>Menu</p>
        </Link>
        <Link className="flex justify-center items-center flex-col">
          <i className="ri-user-line text-[1.3rem]"></i>
          <p>Account</p>
        </Link>
        <Link className="flex justify-center items-center flex-col">
          <i className="ri-shopping-cart-line text-[1.3rem]"></i>
          <p>Cart</p>
        </Link>
      </div>
    </>
  );
}

export default Header;
