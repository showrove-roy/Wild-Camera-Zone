import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/AuthProvider";
import useUserType from "../Hooks/useUserType/useUserType";
import Loading from "../Pages/Share/Loading/Loading";
import NavBar from "../Pages/Share/NavBar/NavBar";

const DashBoardLayout = () => {
  const sidebar = true;
  const { loading, user } = useAuth();

  const [userType, userLoading] = useUserType(user?.email);

  if (loading || userLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className=''>
      <NavBar>{sidebar}</NavBar>
      <div className='drawer drawer-mobile'>
        <input
          id='dashBoard-drawer'
          type='checkbox'
          className='drawer-toggle'
        />
        <div className='drawer-content p-5'>
          <Outlet></Outlet>
        </div>
        <div className='drawer-side'>
          <label htmlFor='dashBoard-drawer' className='drawer-overlay'></label>
          <ul className='menu p-4 w-60 bg-base-300 text-base-content font-semibold'>
            {userType?.role === "buyer" && (
              <li>
                <Link to='/dashboard/my-orders'>My Orders</Link>
              </li>
            )}
            {userType?.role === "seller" && (
              <>
                <li>
                  <Link to='/dashboard/my-products'>My Products</Link>
                </li>
                <li>
                  <Link to='/dashboard/add-product'>Add Product</Link>
                </li>
              </>
            )}
            {userType?.role === "admin" && (
              <>
                <li>
                  <Link to='/dashboard/all-sellers'>All Sellers</Link>
                </li>
                <li>
                  <Link to='/dashboard/all-buyers'>All Buyers</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
