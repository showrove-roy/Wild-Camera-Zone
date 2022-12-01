import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthProvider";
import Loading from "../../Pages/Share/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  let location = useLocation();
  if (loading) return <Loading></Loading>;

  if (user?.uid) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;
