import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../Productdata";


function shuffleArray(array) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Shop() {
  const { productData } = useContext(dataContext);
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    // Shuffle the data array when the component mounts or when data changes
    setShuffledData(shuffleArray(productData));
  }, [productData]);

  const [categoryTrack, setCategoryTrack] = useState(false);
    const [sortedTrack, setSortedTrack] = useState(true);
    const [activeFilter, setActiveFilter] = useState(false);
    // useEffect(() => {
    //   const handleResize = () => {
    //     setActiveFilter(window.innerWidth <= 1024);
    //   };
    //   handleResize();
    //   window.addEventListener("resize", handleResize);
    //   return () => {
    //     window.removeEventListener("resize", handleResize);
    //   };
    // }, []);
    


    const categoryChange = (e) => {
      const selectedCategory = e.target.value;
    
      if (selectedCategory === "all") {
        setShuffledData(shuffleArray(productData));
        setActiveFilter(false)
      } else {
        const filtered = productData.filter((cur) => cur.category === selectedCategory);
        setShuffledData(filtered);
        setActiveFilter(false)
      }
    };
    
    const sortedchnage = (e) => {
      const selectedSort = e.target.value;
    
      if (selectedSort === 'normal') {
        // If 'normal' is selected, shuffle the data
        setShuffledData(shuffleArray(productData));
      } else {
        let sorted;
    
        if (selectedSort === 'ascending') {
          sorted = [...shuffledData].sort((a, b) => a.name.localeCompare(b.name));
        } else if (selectedSort === 'descending') {
          sorted = [...shuffledData].sort((a, b) => b.name.localeCompare(a.name));
        } else if (selectedSort === 'high') {
          sorted = [...shuffledData].sort((a, b) => b.afterDiscountamt - a.afterDiscountamt);
        } else if (selectedSort === 'low') {
  
          sorted = [...shuffledData].sort((a, b) => a.afterDiscountamt - b.afterDiscountamt);
        }
    
        setShuffledData(sorted);
      }
    
      setActiveFilter(false);
    };
    

  
  return (
    <div className="mt-[120px] ">
      <h3 className="text-5xl font-medium text-center px-3">Shop</h3>
      <div className="text-xl text-center justify-center items-center flex gap-1 mt-2 cursor-pointer px-3">
        <Link to="/">Home</Link> / <span className="opacity-70">Shop</span>
      </div>

      <div className="block lg:flex">
       <>
       <div  className={`max-w-[350px] overflow-y-auto w-full h-screen sticky top-20 left-0 bg-white duration-300 transition-all ease-in-out transform z-[999] ${
        activeFilter ? "translate-x-0 actfi block" : "-translate-x-[400px] hidden"
      }  lg:translate-x-0 lg:block`}>
      
      <div className="lg:hidden flex justify-between bg-black text-white items-center  py-4 px-4">
        <h2 className="text-2xl mt-2 uppercase ">Filter</h2>
        <i className="ri-close-line block lg:hidden  text-3xl right-1" onClick={() => setActiveFilter(!activeFilter)}></i>
      </div>
      <div className={`duration-300 transition-all ease-in-out overflow-hidden  py-1 px-4 ${categoryTrack ? 'h-fit' : 'h-[50px]' } `}>
        <div className="flex gap-2 justify-between items-center text-xl  mt-4" onClick={()=>setCategoryTrack(!categoryTrack)}>
          <h2 className="uppercase">Category</h2>
          <i className={`ri-arrow-up-s-line duration-300 transition-all ease-linear ${categoryTrack ? 'rotate-180' : 'rotate-0'} cursor-pointer`}></i>
        </div>
        <div className={`mt-2 select-none px-3 transition-all duration-300 ease-in-out ${categoryTrack ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-4 items-center opa text-sm mt-2">
            <input type="radio" name="select" value="all" id="all" onChange={(e)=>categoryChange(e)}/>
            <label htmlFor="all"  className="cursor-pointer">
              All
            </label>
          </div>
          <div className="flex gap-4 items-center text-lg mt-2">
            <input type="radio" name="select" value="electronic" id="elc" onChange={(e)=>categoryChange(e)}/>
            <label htmlFor="elc" className="cursor-pointer">
              Electronics
            </label>
          </div>
          <div className="flex gap-4 items-center text-lg mt-2">
            <input type="radio" value="tables" name="select" id="tab" onChange={(e)=>categoryChange(e)}/>
            <label htmlFor="tab" className="cursor-pointer">
            Tables
            </label>
          </div>
          <div className="flex gap-4 items-center text-lg mt-2">
            <input type="radio" name="select" value="boots" id="sho" onChange={(e)=>categoryChange(e)} />
            <label htmlFor="sho" className="cursor-pointer">
              Shoes
            </label>
          </div>
          <div className="flex gap-4 items-center text-lg mt-2">
            <input type="radio" name="select" value="male" id="dre"  onChange={(e)=>categoryChange(e)}/>
            <label htmlFor="dre" className="cursor-pointer">
              Dress
            </label>
          </div>
          <div className="flex gap-4 items-center text-lg mt-2">
            <input type="radio" name="select" value="bags" id="bag" onChange={(e)=>categoryChange(e)} />
            <label htmlFor="bag" className="cursor-pointer">
              Bags
            </label>
          </div>
          <div className="flex gap-4 items-center text-lg mt-2">
            <input type="radio" value="toys" name="select" id="toy" onChange={(e)=>categoryChange(e)}/>
            <label htmlFor="toy" className="cursor-pointer">
              Toys
            </label>
          </div>
        </div>
      </div>
      <div className={`duration-300 transition-all ease-in-out overflow-hidden  py-4 px-4 ${sortedTrack ? 'h-fit' : 'h-[50px]' } `}>
        <div className="flex gap-2 justify-between items-center text-xl mt-1" onClick={()=>setSortedTrack(!sortedTrack)}>
          <h2 className="uppercase">sorted-by</h2>
          <i className={`ri-arrow-up-s-line duration-300 transition-all ease-linear ${sortedTrack ? 'rotate-180' : 'rotate-0'} cursor-pointer`}></i>
        </div>
        <div className={`mt-2 select-none px-3 transition-all duration-300 ease-in-out ${sortedTrack ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex gap-4 items-center text-lg mt-2">
            <input type="radio" name="sort" value="normal" id="nor" onChange={(e)=>sortedchnage(e)}/>
            <label htmlFor="nor" className="cursor-pointer">
              Normal
            </label>
          </div>
          <div className="flex gap-4 items-center text-lg mt-2">
            <input type="radio" name="sort" id="asc" value="ascending" onChange={(e)=>sortedchnage(e)}/>
            <label htmlFor="asc" className="cursor-pointer">
              Ascending order (A-Z)
            </label>
          </div>
          <div className="flex gap-4 items-center text-lg mt-2">
            <input type="radio" value="descending" name="sort" id="dsc" onChange={(e)=>sortedchnage(e)}/>
            <label htmlFor="dsc" className="cursor-pointer">
              Descending order (Z-A)
            </label>
          </div>
          <div className="flex gap-4 items-center text-lg mt-2">
            <input type="radio" value="high" name="sort" id="high" onChange={(e)=>sortedchnage(e)}/>
            <label htmlFor="high" className="cursor-pointer">
              Price (high to low)
            </label>
          </div>
          <div className="flex gap-4 items-center text-lg mt-2">
            <input type="radio" name="sort" value="low" id="low" onChange={(e)=>sortedchnage(e)}/>
            <label htmlFor="low" className="cursor-pointer">
              Price (low to high)
            </label>
          </div>
        </div>
      </div>
    </div>
    {activeFilter && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 duration-300 transition-all ease-in-out z-[500]"
          onClick={()=>setActiveFilter(!activeFilter)}
        ></div>
      )}
    <div>
      <button className="uppercase bg-black text-white px-7 py-1 block lg:hidden fixed rotate-90 z-40 -left-10 top-[50%] -translate-y-[50%] rounded-md tracking-wider" onClick={() => setActiveFilter(!activeFilter)}>FILTER</button>
    </div>
       </>
        <div className="w-full grid grid-cols-2 mt-[50px] gap-x-4 place-items-center place-content-center place-self-center px-4 gap-y-10 md:grid-cols-3 lg:grid-cols-3">
          {shuffledData.map((cur, index) => (
            <div key={index} className="w-fit h-full overflow-hidden">
              <Link to={`/products/${cur.id}`}>
                <div className="overflow-hidden max-w-[300px] w-full aspect-[1/1.2]  object-cover rounded-lg">
                  <img
                    src={cur.productImage}
                    alt={cur.name}
                    className="w-full h-full object-cover duration-500 ease-in-out grayscale-[50%] hover:grayscale-0 hover:scale-110"
                  />
                </div>
                <div className="w-full">
                  <p className="mt-3 font-medium text-xl leading-none ">
                    {cur.name}
                  </p>
                  <p className="text-red-400 text-xl">
                    $ {cur.afterDiscountamt}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
