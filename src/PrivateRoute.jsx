import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getUserToken, getType } from "./utils";
import UserLayout from "./components/layouts/UserLayout";
import AdminLayout from "./views/admin/Dashboard";

const PrivateRoute = () => {
  const location = useLocation();

  const auth = getUserToken();
  const type = getType("type");
  return auth && type === "student" ? (
    <UserLayout />
  ) : auth && type === "admin" ? (
    <AdminLayout />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
