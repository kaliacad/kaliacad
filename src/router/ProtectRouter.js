import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectRoutes() {
  const [isAuth] = React.useState(localStorage.getItem("isAuth"));
  return isAuth === "true" ? <Outlet /> : <Navigate to={"/error"} />;
}

export default ProtectRoutes;
