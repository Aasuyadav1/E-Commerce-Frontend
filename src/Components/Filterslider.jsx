import React, { useState } from "react";

function Filterslider() {
    const [categoryTrack, setCategoryTrack] = useState(false);
    const [sortedTrack, setSortedTrack] = useState(true);
  return (
    <div className="max-w-[400px] w-full h-screen sticky top-20 left-0 bg-white z-[10] py-4 px-4">
      <div>
        <h2 className="text-3xl font-semibold uppercase ">Filter</h2>
      </div>
      <div className={`duration-300 transition-all ease-in-out overflow-hidden ${categoryTrack ? 'h-fit' : 'h-[50px]' } `}>
        <div className="flex gap-2 justify-between items-center text-xl mt-4" onClick={()=>setCategoryTrack(!categoryTrack)}>
          <h2 className="uppercase">Category</h2>
          <i className={`ri-arrow-up-s-line duration-300 transition-all ease-linear ${categoryTrack ? 'rotate-180' : 'rotate-0'} cursor-pointer`}></i>
        </div>
        <div className={`mt-2 select-none px-3 transition-all duration-300 ease-in-out ${categoryTrack ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-4 items-center opa text-lg mt-2">
            <input type="radio" name="select" id="all" />
            <label htmlFor="all" className="cursor-pointer">
              All
            </label>
          </div>
          <div className="flex gap-4 items-center text-lg mt-2">
            <input type="radio" name="select" id="elc" />
            <label htmlFor="elc" className="cursor-pointer">
              Electronics
            </label>
          </div>
          <div className="flex gap-4 items-center text-lg mt-2">
            <input type="radio" name="select" id="sho" />
            <label htmlFor="sho" className="cursor-pointer">
              Shoes
            </label>
          </div>
          <div className="flex gap-4 items-center text-lg mt-2">
            <input type="radio" name="select" id="dre" />
            <label htmlFor="dre" className="cursor-pointer">
              Dress
            </label>
          </div>
          <div className="flex gap-4 items-center text-lg mt-2">
            <input type="radio" name="select" id="bag" />
            <label htmlFor="bag" className="cursor-pointer">
              Bags
            </label>
          </div>
          <div className="flex gap-4 items-center text-lg mt-2">
            <input type="radio" value="" name="select" id="toy" />
            <label htmlFor="toy" className="cursor-pointer">
              Toys
            </label>
          </div>
        </div>
      </div>
      <div className={`duration-300 transition-all ease-in-out overflow-hidden ${sortedTrack ? 'h-fit' : 'h-[50px]' } `}>
        <div className="flex gap-2 justify-between items-center text-xl mt-4" onClick={()=>setSortedTrack(!sortedTrack)}>
          <h2 className="uppercase">sorted-by</h2>
          <i className={`ri-arrow-up-s-line duration-300 transition-all ease-linear ${sortedTrack ? 'rotate-180' : 'rotate-0'} cursor-pointer`}></i>
        </div>
        <div className={`mt-2 select-none px-3 transition-all duration-300 ease-in-out ${sortedTrack ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-4 items-center text-lg mt-2">
            <input type="radio" name="sort" id="asc" />
            <label htmlFor="asc" className="cursor-pointer">
              Ascending order (A-Z)
            </label>
          </div>
          <div className="flex gap-4 items-center text-lg mt-2">
            <input type="radio" name="sort" id="dsc" />
            <label htmlFor="dsc" className="cursor-pointer">
              Descending order (Z-A)
            </label>
          </div>
          <div className="flex gap-4 items-center text-lg mt-2">
            <input type="radio" name="sort" id="high" />
            <label htmlFor="high" className="cursor-pointer">
              Price (high to low)
            </label>
          </div>
          <div className="flex gap-4 items-center text-lg mt-2">
            <input type="radio" name="sort" id="low" />
            <label htmlFor="low" className="cursor-pointer">
              Price (low to high)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filterslider;
