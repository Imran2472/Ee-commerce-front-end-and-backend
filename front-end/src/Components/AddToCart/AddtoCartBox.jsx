import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../../context/AppContext";
function AddtoCartBox() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);
  const {
    cart,
    product,
    DicreaseQuantity,
    AddtoCart,
    RemoveItemstoCart,
    ClearCart,
    user,
  } = useContext(AppContext);

  useEffect(() => {
    let price = 0;
    let quantity = 0;
    for (let i = 0; i < cart?.items?.length; i++) {
      price += cart?.items[i].price;
      quantity += cart?.items[i].quantity;
    }
    setCartPrice(price);
    setCartQuantity(quantity);
  }, [cart]);

  return (
    <div className="add_to_cart_row grid grid-cols-3 max-[800px]:grid-cols-2 gap-3 my-8 max-[650px]:grid-cols-1 max-[550px]:flex max-[550px]:flex-col-reverse">
      <div className="add_to_cart_col col-span-2 max-[800px]:col-span-1 flex flex-col gap-4">
        {cart?.items.length > 0 ? (
          <>
            {cart?.items?.map((data) => (
              <div
                className="cart_item border-[1px] border-gray-200 rounded-lg p-5"
                key={data?._id}
              >
                <div className="image_info flex lg:items-center gap-4">
                  <div className="image max-[650px]:w-[30%] max-[400px]:w-[40%]">
                    <img
                      src={data?.imageSrc}
                      alt=""
                      className="w-[130px] h-[130px] max-[700px]:w-[100%] max-[700px]:h-[100%]"
                    />
                  </div>
                  <div className="info_cart max-[650px]:w-[70%] max-[400px]:w-[60%]">
                    <h1 className="title font-semibold text-slate-700 max-[700px]:text-[14px] max-[400px]:text-[12px]">
                      {data.title}
                    </h1>
                    <div className="seller_name text-[13px] text-gray-400 font-medium mt-2">
                      Seller : {user?.fullname}
                    </div>
                    <div className="price flex items-center gap-3 pt-2">
                      <span className="new_price text-gray-700 text-base font-medium max-[700px]:text-[13px]">
                        ${data?.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6 mt-3">
                  <div className="quantity flex items-center gap-3">
                    <button
                      className="
                border-2
                border-slate-300
                text-slate-300
                rounded-full
                text-[10px]
                p-2
                w-3
                h-3
                flex
                justify-center
                items-center
                max-[650px]:w-2
                max-[650px]:h-2
                max-[650px]:p-[7px]
                "
                      onClick={() => DicreaseQuantity(data?.productId, 1)}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <div className="border p-[3px] px-[15px] text-[20px] font-normal max-[400px]:px-[8px] max-[400px]:text-[13px]">
                      {data?.quantity}
                    </div>
                    <button
                      className="
                border-2
                border-purple-600
                text-purple-600
                text-[10px]
                rounded-full
                p-2
                w-3
                h-3
                flex
                justify-center
                items-center
                max-[650px]:w-2
                max-[650px]:h-2
                max-[650px]:p-[7px]
                "
                      onClick={() =>
                        AddtoCart(
                          data?.productId,
                          data?.title,
                          1,
                          data?.price / data?.quantity,
                          data?.imageSrc
                        )
                      }
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <div className="remove_btn">
                    <button
                      className="lg:text-base text-primary font-medium max-[600px]:text-[12px]"
                      onClick={() => {
                        if (confirm("Are you sure you want to remove")) {
                          RemoveItemstoCart(data?.productId);
                        }
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="flex flex-col gap-3 text-center justify-center items-center">
              <div className="text-center text-gray-600 font-medium py-8">
                Add products to your cart to proceed to checkout.
              </div>
              <Link
                to="/"
                className="bg-primary px-[25px] py-[10px] text-white text-[17px] font-medium w-[max-content] rounded-lg"
              >
                Go back To Home
              </Link>
            </div>
          </>
        )}
      </div>

      <div className="add_to_cart_col">
        <div className="box border-[1px] border-gray-200 rounded-lg p-5 sticky top-0">
          <div className="title_box text-[22px] text-gray-600 font-semibold py-3 border-b-[1px] border-gray-200 max-[580px]:text-[18px]">
            product Details
          </div>
          <div className="cart_price py-2 flex items-center justify-between">
            <span className="text-base max-[580px]:text-[13px] font-medium text-slate-800">
              Cart Quantity
            </span>
            <span className="text-base max-[580px]:text-[13px] font-medium text-green-600">
              {cartQuantity}
            </span>
          </div>
          <div className="diccount_total py-2 flex items-center justify-between mb-4">
            <span className="text-base max-[580px]:text-[13px] font-medium text-slate-800">
              Total Amount
            </span>
            <span className="text-base max-[580px]:text-[13px] font-medium text-green-600">
              {cartPrice.toFixed(2)}
            </span>
          </div>
          {cart?.items.length > 0 && (
            <div className="flex items-center gap-2">
              <Link
                to="/checkout?step=2"
                className="w-full p-2 bg-green-500 text-white text-sm rounded-lg capitalize hover:bg-green-600 transition-all duration-300 ease-in-out max-[580px]:text-[12px] text-center"
              >
                checkout now
              </Link>
              <button
                className="w-full p-2 bg-green-500 text-white text-sm rounded-lg capitalize hover:bg-green-600 transition-all duration-300 ease-in-out max-[580px]:text-[12px] text-center"
                onClick={() => {
                  if (confirm("Are you sure you want To Clear the Cart")) {
                    ClearCart();
                  }
                }}
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddtoCartBox;
