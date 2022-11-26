import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  // error message storage
  const [signUPError, setSignUPError] = useState("");

  // get From-hook function
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // sign up handel
  const handelSignUP = (data) => {
    console.log(data);
  };
  return (
    <div className='md:my-5 my-3 mx-2'>
      <div className='card w-full max-w-md mx-auto shadow-md rounded-xl'>
        <form className='card-body pt-1' onSubmit={handleSubmit(handelSignUP)}>
          <h3 className='text-xl text-center'>Register Now!</h3>
          {signUPError && (
            <p className='text-error mt-1 capitalize text-center font-semibold'>
              {signUPError}
            </p>
          )}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              className='input input-bordered'
              {...register("name", {
                required: "Full Name is required",
                minLength: {
                  value: 4,
                  message: "Name Length Must be 4 Characters",
                },
                maxLength: {
                  value: 20,
                  message: "Name Length Must be under 24 Characters",
                },
              })}
            />
            {errors.name && (
              <p className='text-error mt-1' role='alert'>
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>User Type</span>
            </label>
            <select
              {...register("user_role", {
                required: "User Type is required",
              })}
              className='select select-bordered'>
              <option value='buyer'>Buyer</option>
              <option value='seller'>Seller</option>
            </select>
            {errors.user_role && (
              <p className='text-error mt-1' role='alert'>
                {errors.user_role?.message}
              </p>
            )}
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              className='input input-bordered'
              {...register("email", {
                required: "Email Address is required",
              })}
            />
            {errors.email && (
              <p className='text-error mt-1' role='alert'>
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='password'
              className='input input-bordered'
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password Length Must be 6 Characters",
                },
                // pattern: {
                //   value: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
                //   message:
                //     "Password must have at least one number, one special character, one uppercase & lowercase",
                // },
              })}
            />
            {errors.password && (
              <p className='text-error mt-1' role='alert'>
                {errors.password?.message}
              </p>
            )}
          </div>

          <div className='form-control mt-2'>
            <input className='btn btn-accent' type='submit' value='Register' />
            <label className='label'>
              <p className='text-center'>
                Already have an account?{" "}
                <Link
                  to='/login'
                  className='link link-hover text-center text-primary'>
                  Login
                </Link>
              </p>
            </label>
          </div>

          <div className='divider'>OR</div>
          <span className='btn btn-outline btn-accent'>
            CONTINUE WITH GOOGLE
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
