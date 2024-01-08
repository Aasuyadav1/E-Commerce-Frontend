import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { dataContext } from "../Productdata";

function Singlecategory() {
  const {productData} = useContext(dataContext)
 
  let { name } = useParams(); // used for getting the url data
  const [filtered, setFilteredCategory] = useState([]);

  useEffect(() => {
    const filteredCategory = productData.filter((cur) => cur.category === name);
    console.log(filteredCategory);
    setFilteredCategory(filteredCategory);
  }, [name]);

  return (
    <div className=" mt-32">
      <h3 className="text-6xl font-medium text-center ">{name}</h3>
      <div className="text-xl text-center justify-center items-center flex gap-1 mt-1 cursor-pointer">
        <Link to="/">Home</Link> / <span className="opacity-70"> {name}</span>
      </div>
      <div className="mt-10">
        <div className="w-full grid grid-cols-2 mt-[60px] gap-x-4 place-items-center place-content-center place-self-center px-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((cur, index) => (
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
                  <p className=" text-red-400 text-xl">
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

export default Singlecategory;
