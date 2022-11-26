import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/AuthProvider";
import Footer from "../Pages/Share/Footer/Footer";
import Loading from "../Pages/Share/Loading/Loading";
import NavBar from "../Pages/Share/NavBar/NavBar";

const Main = () => {
  const { loading } = useAuth();

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
