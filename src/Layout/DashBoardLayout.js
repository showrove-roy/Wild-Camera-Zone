import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/AuthProvider";
import Loading from "../Pages/Share/Loading/Loading";
import NavBar from "../Pages/Share/NavBar/NavBar";

const DashBoardLayout = () => {
  const sidebar = true;
  const { loading } = useAuth();

  if (loading) {
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
            <li>
              <Link>My Orders</Link>
            </li>
            <li>
              <Link>My Products</Link>
            </li>
            <li>
              <Link>Add Product</Link>
            </li>
            <li>
              <Link>All Sellers</Link>
            </li>
            <li>
              <Link>All Buyers</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
