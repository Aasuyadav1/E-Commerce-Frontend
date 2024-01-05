import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../Productdata";
import Button from "./Button";

function Singleproduct() {
  let { id } = useParams();
  const [activeData, setActiveData] = useState([]);
  let date = new Date();
  let wholeDate = date.getDate()
  let month = date.getMonth() + 1;
  let year = date.getFullYear()

  useEffect(() => {
    const filteredData = data.filter((cur) => cur.id == id);
    setActiveData(filteredData);
  }, [id]);

  return (
    <div className="mt-[150px]">
      {activeData.length > 0 ? (
        <div className="px-4 flex flex-col md:flex-row items-start gap-8">
          <div className="max-w-[650px] w-full aspect-[1/1.2] rounded overflow-hidden cursor-pointer object-cover">
            <img
              src={activeData[0].productImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-xl bg-[#9C6D3A] text-white rounded-full flex justify-center items-center px-4 py-0 flex-wrap w-fit">
              -{activeData[0].discountPercentage}%
            </div>
            <p className="text-4xl mt-3 ">{activeData[0].name}</p>
            <div className="flex mt-1 items-center gap-2">
              <div className="flex text-xl text-black">
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
              </div>
              <div>
                <p className="opacity-70 text-[1.2rem]"> 1 Review </p>
              </div>
            </div>
            <p className="text-4xl mt-6 text-[#B6783A] font-semibold l">
              $ {activeData[0].afterDiscountamt}
            </p>
            <p className="mt-8 text-xl">{activeData[0].description}</p>
            <p className="text-xl mt-5">
              {Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000} people are
              viewing this right now
            </p>
            <div className="text-xl flex gap-8 mt-8">
              <div className="flex gap-3 items-center">
                <label htmlFor="que">
                  <i className="ri-question-line"></i>
                </label>
                <p id="que"> Ask a Question</p>
              </div>
              <div className="flex gap-3 items-center">
                <label htmlFor="share">
                  <i className="ri-share-line"></i>
                </label>
                <p id="share"> Share</p>
              </div>
            </div>
            <p className="text-xl font-semibold block mt-16 ">
              Hurry Up! Only{" "}
              <small className="text-[#B6783A] text-xl"> 1000 </small> left in
              stock!
            </p>
            <div className="w-full rounded-full h-[6px] bg-[#B6783A] mt-4"></div>
            <div className="flex sm:gap-10 mt-6 gap-2">
              <div className="flex gap-6 justify-center items-center text-xl bg-[rgb(242,242,242)] w-fit py-0 px-6 rounded-full shadow-md">
                <i className="ri-subtract-fill text-2xl cursor-pointer"></i>
                <p>{activeData[0].quantity}</p>
                <i className="ri-add-line cursor-pointer"></i>
              </div>
              <Button
                title="ADD TO CART"
                class="w-full bg-black text-white py-4"
              />
            </div>
            <Button
              title="BUY IT NOW"
              class="w-full bg-[rgb(156,109,58)] text-white py-4 mt-4 border-none"
            />
            <hr className="mt-8" />
            <div className="max-w-[280px] w-full text-xl mt-4">
              <div className="grid grid-cols-2 justify-between items-center">
                <p className="opacity-80">Availbility :</p>
                <p className="text-xl ">In stock</p>
              </div>
              <div className="grid grid-cols-2 justify-between items-center">
                <p className="opacity-80">SKU :</p>
                <p className="text-xl ">f00{activeData[0].id}</p>
              </div>
              <div className="grid grid-cols-2 justify-between items-center">
                <p className="opacity-80">Categories :</p>
                <p className="text-xl ">{activeData[0].category}</p>
              </div>
            </div>
            <hr className="mt-8" />
            <div className="text-xl mt-4">
            <div className="flex gap-2 items-center">
                <p className="opacity-80">Estimated Delivery:</p>
                <p className="text-xl ">{`${wholeDate} - ${month} - ${year}`}</p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="opacity-80">Estimated Delivery:</p>
                <p className="text-xl ">On all orders over $350</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
}

export default Singleproduct;
