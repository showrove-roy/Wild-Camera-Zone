import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthProvider";
import useUserType from "../../Hooks/useUserType/useUserType";

const SellerRoute = ({ children }) => {
  const { user } = useAuth();
  let location = useLocation();
  const [userType] = useUserType(user.email);

  if (user?.uid && userType?.role === "seller") {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace />;
};
export default SellerRoute;
