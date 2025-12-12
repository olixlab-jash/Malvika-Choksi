import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const userdata = localStorage.getItem("user");
  return userdata ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
