import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuth } from "../../Contexts/AuthProvider";

const BookingModal = ({ selectProduct, setSelectProduct, refetch }) => {
  const { user } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let productId;
  if (selectProduct?.product_Id) {
    productId = selectProduct?.product_Id;
  } else {
    productId = selectProduct?._id;
  }

  const handleBooking = (data) => {
    const book = {
      productId,
      productName: selectProduct.product_name,
      productPrice: selectProduct.resell_price,
      productStatues: selectProduct.product_statues,
      meetLocation: data.meet_location,
      buyerPhone: data.buyerPhone_number,
      sellerEmail: selectProduct.seller_email,
      buyerEmail: user.email,
    };
    fetch(
      `http://localhost:5000/booking?email=${user.email}&pid=${productId}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(book),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "booked") {
          toast.error(" Already You Have Booked this Product", {
            duration: 5000,
          });
        }
        if (data.acknowledged) {
          toast.success(" Successfully You Have Booked this Product", {
            duration: 4000,
          });
          refetch();
        }
        setSelectProduct(null);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <input type='checkbox' id='booking-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='booking-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <h3 className='text-lg font-bold'>{selectProduct?.product_name}</h3>

          <h3 className=''>
            Price:
            <span className=' font-semibold text-primary ml-2'>
              {selectProduct?.resell_price}
            </span>
            <span className='text-red-600 text-2xl'> ৳</span>
          </h3>

          <form className='' onSubmit={handleSubmit(handleBooking)}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                defaultValue={user?.displayName}
                placeholder='Type here'
                readOnly
                className='input input-bordered '
                {...register("buyer_name", {
                  required: "Please Provide Your  Name",
                })}
              />
              {errors.buyer_name && (
                <p className='text-error mt-1' role='alert'>
                  {errors.buyer_name?.message}
                </p>
              )}
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                defaultValue={user?.email}
                readOnly
                placeholder='Type here'
                className='input input-bordered '
                {...register("buyer_email", {
                  required: "Please Provide Your  Email",
                })}
              />
              {errors.buyer_email && (
                <p className='text-error mt-1' role='alert'>
                  {errors.buyer_email?.message}
                </p>
              )}
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Phone Number</span>
              </label>
              <input
                type='tel'
                placeholder='Type here'
                className='input input-bordered '
                {...register("buyerPhone_number", {
                  required: "Please Provide Your  Phone Number",
                })}
              />
              {errors.buyerPhone_number && (
                <p className='text-error mt-1' role='alert'>
                  {errors.buyerPhone_number?.message}
                </p>
              )}
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Location</span>
              </label>
              <input
                type='text'
                placeholder='Type here'
                className='input input-bordered '
                {...register("meet_location", {
                  required: "Please Provide Meeting  Location",
                })}
              />
              {errors.meet_location && (
                <p className='text-error mt-1' role='alert'>
                  {errors.meet_location?.message}
                </p>
              )}
            </div>
            <div className='flex justify-center'>
              <input
                type='submit'
                value='Confirm Booking'
                className='btn btn-primary mt-5'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
