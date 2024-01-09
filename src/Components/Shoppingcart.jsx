import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../Cart";
import Button from "./Button";

function Shoppingcart() {
  const { cartItems, setCartItems } = useContext(cartContext);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [subTotal, setSubTotal] = useState(0);

  const handleSub = (productId) => {
    setCartItems((prev) =>
      prev.map((cur) =>
        cur.id === productId
          ? {
              ...cur,
              quantity: cur.quantity > 1 ? cur.quantity - 1 : cur.quantity,
            }
          : cur
      )
    );
  };

  const handleAdd = (productId) => {
    setCartItems((prev) =>
      prev.map((cur) =>
        cur.id === productId ? { ...cur, quantity: cur.quantity + 1 } : cur
      )
    );
  };

  const deleteHandle = (productId) => {
    setCartItems((prev) => prev.filter((cur) => cur.id !== productId));
  };

  const shippingHandle = () => {
    setShippingToggle(!shippingToggle);
  };
  useEffect(()=>{
      const total = cartItems.reduce((acc,cur)=> acc + cur.afterDiscountamt * cur.quantity,0)
     setSubTotal(total)
  },[deleteHandle,handleAdd])

  return (
    <div className="mt-[150px]">
      <h3 className="text-5xl font-medium text-center">Shopping Cart</h3>
      <div className="text-xl text-center justify-center items-center flex gap-1 mt-2 cursor-pointer">
        <Link to="/">Home</Link> /{" "}
        <span className="opacity-70"> Shopping Cart</span>
      </div>

      <div className="mt-24 w-full  flex-col-reverse flex gap-6 px-6 lg:flex-row lg:flex">
        <table className="w-full h-fit">
          <thead>
            <tr>
              <th className="border-[#d5d2d2] border-solid border-[1px] py-6 px-4 text-2xl text-left hidden  lg:table-cell">
                Items
              </th>
              <th className="border-[#d5d2d2] border-solid border-[1px] py-6 px-4 text-2xl text-left hidden  lg:table-cell">
                Price
              </th>
              <th className="border-[#d5d2d2] border-solid border-[1px] py-6 px-4 text-2xl text-left hidden  lg:table-cell">
                Qty
              </th>
              <th className="border-[#d5d2d2] border-solid border-[1px] py-6 px-4 text-2xl text-left hidden  lg:table-cell">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems &&
              cartItems.map((cur) => (
                <>
                  <tr key={cur.id} >
                  <td className="border-[#d5d2d2] border-solid border-[1px] px-4 py-5 mt-4 "  >
                    <div className="flex gap-4 items-center">
                      <div className="w-[100px] h-[130px] rounded-xl overflow-hidden cursor-pointer ">
                        <img
                          src={cur.productImage}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-2xl">{cur.name}</p>
                        <div className="flex items-center gap-3 text-xl text-[#3f3e3e] mt-2">
                          <Link to={`/products/${cur.id}`}>
                            <i className="ri-pencil-line"></i>
                          </Link>
                          <i
                            className="ri-delete-bin-line cursor-pointer"
                            onClick={() => deleteHandle(cur.id)}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="border-[#d5d2d2] border-solid border-[1px] px-4 hidden  lg:table-cell">
                    <p className="text-2xl">${cur.afterDiscountamt}</p>
                  </td>
                  <td className="border-[#d5d2d2] border-solid border-[1px] px-4 hidden  lg:table-cell">
                    <div className="flex gap-6 justify-center items-center text-xl bg-[rgb(242,242,242)] w-fit py-2 px-6 rounded-full shadow-md">
                      <i
                        className="ri-subtract-fill text-2xl cursor-pointer"
                        onClick={() => handleSub(cur.id)}
                      ></i>
                      <p>{cur.quantity}</p>
                      <i
                        className="ri-add-line cursor-pointer"
                        onClick={() => handleAdd(cur.id)}
                      ></i>
                    </div>
                  </td>
                  <td className="border-[#d5d2d2] border-solid border-[1px] px-4 hidden  lg:table-cell">
                    <p className="text-2xl">
                      ${cur.afterDiscountamt * cur.quantity}
                    </p>
                  </td>
        
                </tr>
                <div className="borderdiv flex w-full overflow-hidden mb-4  lg:hidden  py-3 ">
                <div className=" px-1  lg:hiddenl w-full flex justify-center items-center">
                    <p className="text-2xl">${cur.afterDiscountamt}</p>
                  </div>
                  <div className=" px-1  lg:hidden w-full flex justify-center items-center">
                    <div className="flex gap-6 justify-center items-center text-xl bg-[rgb(242,242,242)] w-fit py-2 px-3 rounded-full ">
                      <i
                        className="ri-subtract-fill text-2xl cursor-pointer"
                        onClick={() => handleSub(cur.id)}
                      ></i>
                      <p>{cur.quantity}</p>
                      <i
                        className="ri-add-line cursor-pointer"
                        onClick={() => handleAdd(cur.id)}
                      ></i>
                    </div>
                  </div>
                  <div className=" px-1   lg:hidden w-full flex justify-center items-center">
                    <p className="text-2xl">
                      ${cur.afterDiscountamt * cur.quantity}
                    </p>
                  </div>
                </div>
                </>
              
                
              ))}
          </tbody>
        </table>
        <div className=" w-full bg-[rgb(245,245,245)] py-10 px-8 rounded-lg h-fit select-none lg:max-w-[400px]">
          <div className="h-1 w-full bg-[rgb(156,109,58)] rounded-full relative flex justify-center items-center">
            <i className="ri-truck-line absolute w-[35px] h-[35px] flex justify-center items-center rounded-full border-[2px] border-solid border-[rgb(156,109,58)] -top-3 text-xl text-[rgb(156,109,58)] bg-white right-0"></i>
          </div>
          <p className="mt-4">
            Congrats! You are eligible for{" "}
            <b className="text-[rgb(156,109,58)]">FREE</b>
          </p>
          <b className="mt-4 text-lg text-[rgb(156,109,58)]">SHIPPING!</b>
          <p className="mt-4 text-2xl">Summary</p>
          <div>
            <div
              className="mt-8 flex cursor-pointer justify-between text-lg"
              onClick={shippingHandle}
            >
              <p>Estimate Shipping and Tax</p>
              <i
                className={`ri-${
                  shippingToggle ? "arrow-up" : "arrow-down"
                }-s-line`}
              ></i>
            </div>
            {shippingToggle ? (
              <div>
                <p className="mt-4 text-sm">
                  Enter your destination to get a shipping estimate.
                </p>
                <div className="mt-8">

                <label htmlFor="state">State/Province</label>
                <input type="text" className="w-full px-2 py-3 rounded-full border-solid border-[2px] mt-2 border-[grey]" placeholder="State" id="state"/>
                </div>
                
              </div>
            ) : null}
            <div className="mt-8">
                <table className="w-full bg-white ">
                  <tr >
                    <td className="border-[#aca9a9] border-solid border-[1px] px-4 py-3 opacity-90">Subtotal</td>
                    <td className="border-[#aca9a9] border-solid border-[1px] px-4 py-3 opacity-90" >${subTotal}</td>
                  </tr>
                  <tr>
                    <td className="border-[#aca9a9] border-solid border-[1px] px-4 py-3 text-lg font-semibold">Order total</td>
                    <td className="border-[#aca9a9] border-solid border-[1px] px-4 py-3 text-lg font-semibold">${subTotal}</td>
                  </tr>
                </table>
            </div>
           
              <button className="px-[20px] mt-8 py-[10px]  border-solid border-[2px] border-black text-white rounded-full bg-black w-full font-semibold">PROCEED TO CHECKOUT</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shoppingcart;
