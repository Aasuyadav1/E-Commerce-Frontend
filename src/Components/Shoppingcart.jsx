import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../ContextApi/cart";

function Shoppingcart() {
  const { cartItems, setCartItems } = useContext(cartContext);

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

  const deleteHandle = (productId) =>{
    setCartItems((prev)=>
      prev.filter((cur)=> cur.id !== productId)
    )
  }

  return (
    <div className="mt-[150px]">
      <h3 className="text-5xl font-medium text-center">Shopping Cart</h3>
      <div className="text-xl text-center justify-center items-center flex gap-1 mt-2 cursor-pointer">
        <Link to="/">Home</Link> /{" "}
        <span className="opacity-70"> Shopping Cart</span>
      </div>

      <table className="w-full mt-32">
        <thead>
          <tr>
            <th className="border-[#d5d2d2] border-solid border-[2px] py-6 px-4 text-2xl text-left">
              Items
            </th>
            <th className="border-[#d5d2d2] border-solid border-[2px] py-6 px-4 text-2xl text-left">
              Price
            </th>
            <th className="border-[#d5d2d2] border-solid border-[2px] py-6 px-4 text-2xl text-left">
              Qty
            </th>
            <th className="border-[#d5d2d2] border-solid border-[2px] py-6 px-4 text-2xl text-left">
              Subtotal
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems &&
            cartItems.map((cur) => (
              <tr key={cur.id}>
                <td className="border-[#d5d2d2] border-solid border-[2px] px-4 py-5">
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
                <td className="border-[#d5d2d2] border-solid border-[2px] px-4">
                  <p className="text-2xl">${cur.afterDiscountamt}</p>
                </td>
                <td className="border-[#d5d2d2] border-solid border-[2px] px-4">
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
                <td className="border-[#d5d2d2] border-solid border-[2px] px-4">
                  <p className="text-2xl">
                    ${cur.afterDiscountamt * cur.quantity}
                  </p>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Shoppingcart;
