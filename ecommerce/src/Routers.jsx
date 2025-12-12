import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import App from "./App";
import Cart from "./pages/Cart";
import ProtectedRoutes from "./ProtectedRoutes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Routers = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Routers;
