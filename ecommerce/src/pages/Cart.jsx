import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQty,
  decrementQty,
  removeFromCart,
} from "../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  // console.log('cartItems: ', cartItems);
  const totalQty = useSelector((state) => state.cart.totalQty);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {/* Empty Cart */}
      {cartItems.length === 0 && (
        <div className="text-center text-gray-500 text-lg mt-10">
          Your cart is empty 😔
        </div>
      )}

      {/* Cart Items */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-5 bg-white shadow-md rounded-xl p-4"
            >
              {/* Product Image */}
              <div className="w-28 h-28 overflow-hidden rounded-lg">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-500">₹ {item.price}</p>

                {/* Qty Controls */}
                <div className="flex items-center gap-4 mt-3">
                  <button
                    className="bg-gray-300 px-2 rounded text-white"
                    onClick={() => dispatch(decrementQty(item.id))}
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{item.qty}</span>
                  <button
                    className="bg-gray-300 px-2 rounded text-white"
                    onClick={() => dispatch(incrementQty(item.id))}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Remove Button */}
              <button
                className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-500"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Right Side: Summary */}
        <div className="bg-white shadow-lg rounded-xl p-5 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between text-lg mb-3">
            <span>Total Items:</span>
            <span>{totalQty}</span>
          </div>

          <div className="flex justify-between text-lg mb-3">
            <span>Total Price:</span>
            <span className="font-semibold">₹ {totalPrice.toFixed(2)}</span>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-500"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
