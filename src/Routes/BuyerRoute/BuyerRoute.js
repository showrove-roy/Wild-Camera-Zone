import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthProvider";
import useUserType from "../../Hooks/useUserType/useUserType";
import Loading from "../../Pages/Share/Loading/Loading";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  let location = useLocation();
  const [userType, userLoading] = useUserType(user.email);
  if (userLoading || loading) return <Loading></Loading>;

  if (user?.uid && userType?.role === "buyer") {
    return children;
  }

  if (!userType.role) return <Loading></Loading>;

  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default BuyerRoute;
