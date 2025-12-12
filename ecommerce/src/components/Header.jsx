import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const Header = ({ onSearch }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const cartCount = useSelector((state) => state.cart.totalQty);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    onSearch(searchValue);
  };

  const handleLogout = () => {
    toast.success("user login Sucessfully");
    localStorage.removeItem("user");
    dispatch({ type: "RESET_ALL" });

    navigate("/login");
  };

  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sticky top-0 z-50">
      {/* APP NAME */}
      <div className="text-2xl font-bold text-blue-600">MyStore</div>

      {/* SEARCH BAR */}
      <div className="flex items-center w-full sm:w-1/2 bg-gray-100 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 p-2 bg-transparent outline-none"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);

            // Auto reset when empty
            if (e.target.value.trim() === "") {
              onSearch(""); // resets to default product list
            }
          }}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2"
        >
          Search
        </button>
      </div>

      {/* CART + LOGOUT */}
      <div className="flex items-center gap-6">
        {/* CART ICON WITH BADGE */}
        <div className="relative cursor-pointer">
          <ShoppingCart size={28} onClick={() => navigate("/cart")} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </div>

        {/* LOGOUT BUTTON */}
        <Button text="Logout" onClick={handleLogout} />
        {/* <button 
        
        className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
          Logout
        </button> */}
      </div>
    </header>
  );
};

export default Header;
