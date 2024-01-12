import React from "react";
import { Outlet, Navigate } from "react-router";
import { isLoggedIn } from "../../authentication/auth";
export const ClientManagerRoute = () => {
  if (isLoggedIn()) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} />;
  }
};
