import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dataContext } from '../Productdata';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


function Searchbox() {
  const { productData, setProductData, searchToggle, setSearchToggle } = useContext(dataContext);
  const [searchProduct, setSearchProduct] = useState([]);


  useEffect(() => {
    if (!searchProduct.length) {
      // If no search input, display default data
      const topSearch = productData.filter((cur) => cur.desire);
      setSearchProduct(topSearch);
    }
  }, [searchProduct, productData]);


  const searchHandle = (e) => {
    const value = e.target.value;
    if (value.trim() === '') {
      const topSearch = productData.filter((cur) => cur.desire);
      setSearchProduct(topSearch);
    } else {
      const filteredData = productData.filter((cur) => cur.name.includes(value));
      setSearchProduct(filteredData);
    }
  };

  const handleOver = ()=>{
    setSearchToggle(!searchToggle)
  }

  return (
    <div className='fixed z-50 top-0'> 
       <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-60 -z-10 cursor-pointer"
          onClick={handleOver}
        ></div>
      
           <div className="px-[10px] py-[30px] bg-[#FFFFFF] flex justify-between items-center fixed z-50 top-0  gap-2 w-full">
           <i className="ri-close-fill absolute -top-[1px] right-1 text-2xl cursor-pointer opacity-90" onClick={handleOver}></i>
           
        <Link className="logo max-w-full" to='/'>
          <img
            src="https://umino.mageblueskytech.com/media/logo/default/logo_umino.png"
            alt="logo"
            className="max-w-[100px] h-auto"
          />
        </Link>
        <ul
          className={` text-[1.1rem]  itms-center leading-none tracking-wide flex-col  w-full bg-white  text-xl  sm:justify-center  sm:flex-row sm:bg-transparent sm:h-fit sm:flex 
          }`}
        >
          <div className='relative max-w-[600px] w-full'>
          <input type="search" className='border-[2px] border-solid border-black cursor-pointer px-3 py-2 w-full rounded-full' placeholder='looking for...' onChange={(e)=>searchHandle(e)} id='search'/>
          <label htmlFor="search" className='absolute top-[13px] right-[15px] cursor-pointer'> <i className="ri-search-line"></i></label>
         
          </div>
        </ul>
        <div className="flex gap-[5px] justify-around items-center text-[1.3rem] sm:gap-[20px]">
          <Link>
            <i className="ri-user-line"></i>
          </Link>
          <Link to="/shoppingCart">
            <div className="relative">
            <i className="ri-shopping-cart-line"></i>
            <div className="absolute top-0 right-0 w-[15px] h-[15px] bg-red-600 flex justify-center items-center text-white rounded-full text-[14px] "></div>
            </div>
          </Link>
        </div>
      </div>
      
      <div className='h-[600px] bg-white overflow-hidden overflow-y-auto w-screen py-4 mt-0 top-0'>
      
      <div>
      <p className='mt-24 text-center z-50 text-red-500'>Quick search: Chair, Lamp, Armchair</p>
      <h1 className='mt-4 text-xl font-semibold px-5'>Top search </h1>
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
                    { cur.name ||<Skeleton height={30}/>}
                  </p>
                  <p className=" text-red-400 text-xl">
                    $ {cur.afterDiscountamt || <Skeleton/>}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      </div>
     
     
    </div>
  )
}

export default Searchbox 