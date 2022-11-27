import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo1.png";
import { useAuth } from "../../../Contexts/AuthProvider";

const NavBar = ({ children }) => {
  const { user, logOut } = useAuth();

  const roele = "seller";

  // LogOut
  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => alert(err.message));
  };
  const menu = (
    <>
      <li className='font-semibold'>
        <Link to='/'>Home</Link>
      </li>
      {user?.uid && (
        <>
          <li className='font-semibold'>
            <Link to='/product/all'>All Products</Link>
          </li>
          {roele === "seller" && (
            <li className='font-semibold'>
              <Link to='/dashboard/add-product'>Dashboard</Link>
            </li>
          )}
        </>
      )}
      <li className='font-semibold'>
        <Link to='/blogs'>Blogs</Link>
      </li>
      <li className='font-semibold'>
        {user?.uid ? (
          <button onClick={handelLogOut}>Logout</button>
        ) : (
          <Link to='/login'>Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className='navbar bg-base-200 sticky top-0 justify-between z-50 px-5'>
      <div className='navbar-start lg:hidden'>
        {children && (
          <label
            htmlFor='dashBoard-drawer'
            className='btn btn-square btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#fff'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <circle cx='12' cy='12' r='1'></circle>
              <circle cx='19' cy='12' r='1'></circle>
              <circle cx='5' cy='12' r='1'></circle>
            </svg>
          </label>
        )}
      </div>
      <div className=' md:navbar-center navbar-start'>
        <Link to='/'>
          <img src={logo} alt='' className='h-10 cursor-pointer' />
        </Link>
      </div>
      <div className='dropdown'>
        <label tabIndex={0} className='btn btn-ghost lg:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h8m-8 6h16'
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52 right-0'>
          {menu}
        </ul>
      </div>
      <div className='hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>{menu}</ul>
      </div>
    </div>
  );
};

export default NavBar;
