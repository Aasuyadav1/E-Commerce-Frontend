import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../Productdata';

function shuffleArray(array) {
  // it generate random data from array when page renders this methods called as Fisher-Yates
  
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Shop() {
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    // Shuffle the data array when the component mounts or when data changes
    setShuffledData(shuffleArray(data));
  }, [data]);

  return (
    <div>
      <div className="w-full grid grid-cols-2 mt-[150px] gap-x-4 place-items-center place-content-center place-self-center px-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
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
