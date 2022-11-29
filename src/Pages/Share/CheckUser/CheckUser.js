import React from "react";
import Login from "../../Sign-IN-UP/Login";

const CheckUser = () => {
  return (
    <div>
      <h3 className='text-3xl text-center my-5'>
        We did not recognize you! Please Login/SignUp
      </h3>
      <Login></Login>
    </div>
  );
};

export default CheckUser;
