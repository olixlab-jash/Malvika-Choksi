import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const CardDetails = ({ item }) => {

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg" >
      <img class="w-full" src={item.images[0]} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{item.title}</div>
        <p class="text-gray-700 text-base">{item.price}</p>
        <p class="text-gray-700 text-base">{item.category}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <Button text="Add to cart"  onClick={() => handleAddToCart(item)}></Button>
      </div>
    </div>
  );
};

export default CardDetails;
