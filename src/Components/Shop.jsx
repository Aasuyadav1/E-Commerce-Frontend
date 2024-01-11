import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dataContext } from '../Productdata';
import Filterslider from './Filterslider';

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
  

  return (
    <div className='mt-[120px] '>
      
      <h3 className="text-5xl font-medium text-center px-3">Shop</h3>
      <div className="text-xl text-center justify-center items-center flex gap-1 mt-2 cursor-pointer px-3">
        <Link to="/">Home</Link> /{" "}
        <span className="opacity-70">Shop</span>
      </div>
      <div className="w-full grid grid-cols-2 mt-[50px] gap-x-4 place-items-center place-content-center place-self-center px-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        
        <Filterslider/>
        
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
                <p className="mt-3 font-medium text-xl leading-none ">{cur.name}</p>
                <p className="text-red-400 text-xl">$ {cur.afterDiscountamt}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
