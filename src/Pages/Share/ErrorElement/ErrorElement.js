import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { useAuth } from "../../../Contexts/AuthProvider";

const ErrorElement = () => {
  const error = useRouteError();
  console.error(error);
  const { logOut } = useAuth();

  // LogOut
  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => alert(err.message));
  };

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
        <i>
          Please <span onClick={handelLogOut}>Sign out</span> And{" "}
          <Link to='/login' className='link link-primary'>
            Login
          </Link>
        </i>
      </p>
    </div>
  );
};

export default ErrorElement;
