import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { data } from '../Productdata'

function Desireproduct() {
    const desireProducts = data.filter((cur)=>
        cur.desire ? cur : null
    )
    let [desireData, setDesireData] = useState(desireProducts)
    
  return (
    <div className='mt-[50px]'>
      <h3 className="text-center mt-[100px] text-[3rem] font-medium leading-none">
      You Must Have
      </h3>
      <p className="text-center text-[1.1rem] leading-none mt-[20px]">
      Here’s some of our most popular products people are in love with.
      </p>
      <div className="w-full grid grid-cols-2 mt-[60px] gap-x-4 place-items-center place-content-center place-self-center px-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {
            desireData.map((cur,index)=>
                <div key={index} className="w-fit h-full overflow-hidden">
                    <Link to={`/products/${cur.id}`}>
                        <div className="overflow-hidden max-w-[300px] w-full aspect-[1/1.2]  object-cover rounded-lg">
                            <img src={cur.productImage} alt={cur.name} className="w-full h-full object-cover duration-500 ease-in-out grayscale-[50%] hover:grayscale-0 hover:scale-110" />
                        </div>
                        <div className="w-full">
                            <p className="mt-3 font-medium text-xl leading-none ">{cur.name}</p>
                            <p className=" text-red-400 text-xl">$ {cur.afterDiscountamt}</p>
                        </div>
                    </Link>
                </div>
            )
        }
      </div>
    </div>
  )
}

export default Desireproduct