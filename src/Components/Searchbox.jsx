import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../Productdata";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { cartContext } from "../Cart";


function Searchbox() {
  const {cartItems, setCartItems} = useContext(cartContext)
  const [cartCount, setCartCount] = useState(0);

  const { productData, setSearchToggle } = useContext(dataContext);
  const [searchProduct, setSearchProduct] = useState(
    productData.filter((cur) => cur.desire)
  );
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (!searchInput.trim()) {
      // If no search input, display default data
      const topSearch = productData.filter((cur) => cur.desire);
      setSearchProduct(topSearch);
    }
  }, [searchInput, productData]);

  useEffect(()=>{
    let length = cartItems.length;
    setCartCount(length)
  },[setCartItems,cartItems])

  const searchHandle = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (!value.trim()) {
      const topSearch = productData.filter((cur) => cur.desire);
      setSearchProduct(topSearch);
    } else {
      const filteredData = productData.filter((cur) =>
        cur.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchProduct(filteredData);
    }
  };

  const handleOver = () => {
    setSearchToggle(false);
  };
  return (
    <div className="fixed z-[9999] serachheight overflow-hidden overflow-y-auto top-0">
      <div
        className="fixed top-0 left-0 w-full h-full bg-black opacity-60 -z-10 cursor-pointer"
        onClick={handleOver}
      ></div>

      <div className="px-[10px] pt-[30px] pb-[10px] shadow-sm bg-[#FFFFFF] flex justify-between items-center fixed z-50 top-0  gap-2 w-full">
        <i
          className="ri-close-fill absolute -top-[1px] right-1 text-3xl cursor-pointer opacity-90"
          onClick={handleOver}
        ></i>

        <Link className="logo max-w-full hidden lg:block" to="/">
          <img
            src="https://umino.mageblueskytech.com/media/logo/default/logo_umino.png"
            alt="logo"
            className="max-w-[100px] h-auto"
          />
        </Link>
        <ul
          className={` text-[1.1rem]  itms-center leading-none tracking-wide flex flex-col  w-full bg-white  text-xl  justify-center items-center  
          }`}
        >
          <h1 className="font-semibold block lg:hidden">Search our site</h1>
          <div className="relative max-w-[600px] w-full mt-4 ">
            
            <input
              type="text"
              className="border-[1px] border-solid border-black cursor-pointer px-3 py-2 w-full text-lg font-normal outline-none rounded-full"
              placeholder="looking for..."
              onChange={(e) => searchHandle(e)}
              value={searchInput}
              id="search"
            />
            <label
              htmlFor="search"
              className="absolute top-[12px] right-[15px] cursor-pointer"
            >
              <i className="ri-search-line "></i>
            </label>
          </div>
        </ul>
        <div className=" gap-[5px] justify-around items-center text-[1.3rem] sm:gap-[20px] hidden lg:flex">
          <Link to='/login'>
            <i className="ri-user-line"></i>
          </Link>
          <Link to="/shoppingCart" className="hidden lg:block">
            <div className="relative hidden lg:block">
              <i className="ri-shopping-cart-line"></i>
              <div className="absolute top-0 right-0 w-[15px] h-[15px] bg-red-600 flex justify-center items-center text-white rounded-full text-[10px] ">{cartCount}</div>
            </div>
          </Link>
        </div>
      </div>

      <div className=" bg-white overflow-hidden overflow-y-auto w-screen py-4 mt-0 top-0">
        <div>
          <p className="mt-32 text-center z-50 text-black">
             Suggest : jacket, bag, table, watch
          </p>
          <h1 className="mt-4 text-xl font-semibold px-5">Top search </h1>
          <div className="w-full grid grid-cols-2 mt-[10px] gap-x-4 place-items-center place-content-center place-self-center px-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {searchProduct.map((cur, index) => (
              <div key={index} className="w-fit h-full overflow-hidden">
                <Link to={`/products/${cur.id}`}>
                  <div className="overflow-hidden max-w-[300px] w-full aspect-[1/1.2]   object-cover rounded-lg">
                    <img
                      src={cur.productImage}
                      alt={cur.name}
                      className="w-full h-full object-cover duration-500 ease-in-out grayscale-[50%] hover:grayscale-0 hover:scale-110"
                    />
                  </div>
                  <div className="w-full">
                    <p className="mt-3 font-medium text-xl leading-none ">
                      {cur.name || <Skeleton height={30} />}
                    </p>
                    <p className=" text-red-400 text-xl">
                      $ {cur.afterDiscountamt || <Skeleton />}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchbox;
