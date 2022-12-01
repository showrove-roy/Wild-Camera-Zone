import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Navigate, useLoaderData } from "react-router-dom";

const Payment = () => {
  const data = useLoaderData();
  let product = data.data;
  //   console.log("🚀 ~ file: Payment.js:6 ~ Payment ~ data", product);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handlePayment = (data) => {
    fetch(`https://wild-camera-zone-server.vercel.app/payment/${product._id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          toast.success("Payment Successfully Done");
          reset();
          <Navigate to='/'></Navigate>;
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <section>
      <h2 className='text-3xl'>Checkout Now</h2>
      <h2 className='text-3xl text-center mt-10'>{product.product_name}</h2>
      <h2 className='text-2xl text-center my-1'>
        Price: {product.resell_price}
        <span className='text-red-600 text-4xl'> ৳</span>
      </h2>
      <div className='max-w-md mx-auto my-10'>
        <form onSubmit={handleSubmit(handlePayment)} className='card-body pt-1'>
          <h2 className='text-xl text-center'>Please Provide Payment Info</h2>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Card Number</span>
            </label>
            <input
              type='number'
              className='input input-bordered'
              {...register("cardNumber", {
                required: "Card Number is required",
              })}
            />
            {errors.cardNumber && (
              <p className='text-error mt-1' role='alert'>
                {errors.cardNumber?.message}
              </p>
            )}
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Cardholder's Name</span>
            </label>
            <input
              type='text'
              className='input input-bordered'
              {...register("cardholderName", {
                required: "Cardholder's Name is required",
              })}
            />
            {errors.cardholderName && (
              <p className='text-error mt-1' role='alert'>
                {errors.cardholderName?.message}
              </p>
            )}
          </div>
          <div className='flex gap-2 sm:flex-nowrap flex-wrap'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Expiration</span>
              </label>
              <input
                type='date'
                className='input input-bordered'
                {...register("expiration", {
                  required: "Expiration Date is required",
                })}
              />
              {errors.expiration && (
                <p className='text-error mt-1' role='alert'>
                  {errors.expiration?.message}
                </p>
              )}
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>CVV</span>
              </label>
              <input
                type='number'
                className='input input-bordered'
                {...register("cvvNum", {
                  required: "CVV Number is required",
                })}
              />
              {errors.cvvNum && (
                <p className='text-error mt-1' role='alert'>
                  {errors.cvvNum?.message}
                </p>
              )}
            </div>
          </div>

          <div className='form-control mt-2'>
            <input className='btn btn-accent' type='submit' value='Pay' />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Payment;
