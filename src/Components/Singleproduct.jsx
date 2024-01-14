import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../Productdata";
import Button from "./Button";
import { Link } from "react-router-dom";
import { cartContext } from "../Cart";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



function Singleproduct() {
  const {productData, setProductData} = useContext(dataContext)
  
 
  const {cartItems, setCartItems} = useContext(cartContext)



  let { id } = useParams();
  const [activeData, setActiveData] = useState([]);
  let date = new Date();
  let wholeDate = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let [relatedProduct, setRelatedProduct] = useState(null)
  const [ActiveImage, setActiveImage] = useState('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

  useEffect(() => {
    const filteredData = productData.filter((cur) => cur.id == id);
    setActiveData(filteredData);
    const category = filteredData[0].category;
    const datas = productData.filter((cur)=>
        cur.category == category
    )
    let slicedData = datas.slice(1,9);
    setRelatedProduct(slicedData)
    
  
  }, [id,location.path]);
  const handleAdd = (productId) => {
    setActiveData((prev) =>
      prev.map((cur) =>
        cur.id === productId
          ? { ...cur, quantity: (cur.quantity || 0) + 1 }
          : cur
      )
    );
  };
  
  const handleSub = (productId) => {
    setActiveData((prev) =>
      prev.map((cur) =>
        cur.id === productId
          ? { ...cur, quantity: cur.quantity && cur.quantity > 1 ? cur.quantity - 1 : 1 }
          : cur
      )
    );
  };

  const handleCart = (productId) => {
    const currentProduct = activeData.find((cur) => cur.id === productId);

    if (currentProduct) {
      const isProductInCart = cartItems.find(
        (item) => item.id === currentProduct.id
      );

      if (isProductInCart) {
        setCartItems((prev) =>
          prev.filter((item) => item.id !== currentProduct.id)
        );
      } else {
        setCartItems((prev) => [...prev, currentProduct]);
        console.log(cartItems)
      }
    }
  };
  // useEffect(()=>{
  //   activeData.length > 0 ? setActiveImage(activeData[0].productImage) : setActiveImage('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
  // },[activeData])
  // const acuurentImage = (imageUrl)=>{
  //     setActiveImage(imageUrl)

  // }
  
 
  
  

  return (
    <div className="mt-[150px]">
      {activeData.length > 0 ? (
        <div>
          <div className="px-4 flex flex-col md:flex-row items-start gap-8">
            <div>
            <div className="max-w-[650px] w-full aspect-[1/1.2] rounded overflow-hidden cursor-pointer object-cover">
              <img
                src={activeData[0].productImage || <Skeleton /> }
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div className="flex gap-4 mt-4 cursor-pointer">
              {
                activeData[0].images.map((curimage,index)=>
                  <div key={index} onClick={()=>acuurentImage(curimage.url)} className="w-[80px] rounded-md overflow-hidden aspect-[1/1.2] object-cover">
                    <img src={curimage.url} className="w-full h-full object-cover" alt="" />
                  </div>
                )
              }
            </div> */}
            </div>
            <div>
              <div className="text-xl bg-[#9C6D3A] text-white rounded-full flex justify-center items-center px-4 py-0 flex-wrap w-fit">
                -{activeData[0].discountPercentage || <Skeleton />}%
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
                $ {activeData[0].afterDiscountamt || <Skeleton />}
              </p>
              <p className="mt-8 text-xl">{activeData[0].description || <Skeleton />}</p>
              <p className="text-xl mt-5">
                {5000} people
                are viewing this right now
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
                <div className="flex gap-6 justify-center items-center text-xl bg-[rgb(242,242,242)] max-w-[150px] py-0 px-6 rounded-full shadow-md">
                  <i className="ri-subtract-fill text-2xl cursor-pointer" onClick={()=>handleSub(activeData[0].id)}></i>
                  <p>{activeData[0].quantity || <Skeleton />}</p>
                  <i className="ri-add-line cursor-pointer" onClick={()=>handleAdd(activeData[0].id)}></i>
                </div>
                <button className=" px-[10px] py-[10px]  border-solid border-[2px] border-black text-black rounded-full block w-full bg-black text-white py-4" onClick={()=>handleCart(activeData[0].id)}>{
                  cartItems.some((item) => item.id === activeData[0].id)
                    ? "Remove from cart"
                    : "Add to Cart"
                }</button>
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
                  <p className="text-xl ">f00{activeData[0].id || <Skeleton />}</p>
                </div>
                <div className="grid grid-cols-2 justify-between items-center">
                  <p className="opacity-80">Categories :</p>
                  <p className="text-xl ">{activeData[0].category || <Skeleton />}</p>
                </div>
              </div>
              <hr className="mt-8" />
              <div className="text-xl mt-4">
                <div className="flex gap-2 items-center">
                  <p className="opacity-80">Estimated Delivery:</p>
                  <p className="text-xl ">{`${wholeDate} - ${month} - ${year}`}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <p className="opacity-80">Free Shipping :</p>
                  <p className="text-xl ">On all orders over $350</p>
                </div>
              </div>
            </div>
          </div>

          
          <h3 className="text-center mt-[100px] text-[3rem] font-medium leading-none">
          Related Products
      </h3>
      <p className="text-center text-[1.1rem] leading-none mt-[20px]">
      Here’s some of our most popular products people are in love with.
      </p>
          <div className="w-full grid grid-cols-2 mt-[80px] gap-x-4 place-items-center place-content-center place-self-center px-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {relatedProduct.map((cur, index) => (
          <div key={index} className="w-fit h-full overflow-hidden">
            <Link to={`/products/${cur.id}`}>
              <div className="overflow-hidden max-w-[300px] w-full aspect-[1/1.2]  object-cover rounded-lg">
                <img
                  src={cur.productImage || <Skeleton />}
                  alt={cur.name || <Skeleton />}
                  className="w-full h-full object-cover duration-500 ease-in-out grayscale-[50%] hover:grayscale-0 hover:scale-110"
                />
              </div>
              <div className="w-full">
                <p className="mt-3 font-medium text-xl leading-none ">{cur.name || <Skeleton />}</p>
                <p className="text-red-400 text-xl">$ {cur.afterDiscountamt || <Skeleton />}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
     
        </div>
        
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
}

export default Singleproduct;
