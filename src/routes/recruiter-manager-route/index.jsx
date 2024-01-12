import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isLoggedIn } from "../../authentication/auth";

export const RecruiterManagerRoute = () => {
  if (isLoggedIn()) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} />;
  }
};
