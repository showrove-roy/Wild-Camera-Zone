import { format } from "date-fns";
import React from "react";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import tick from "../../assets/check.png";
import { useAuth } from "../../Contexts/AuthProvider";

const ProductCard = ({ product, setSelectProduct }) => {
  const { user } = useAuth();
  const {
    category,
    condition,
    location,
    original_price,
    product_description,
    product_name,
    product_statues,
    product_url,
    resell_price,
    seller_email,
    seller_name,
    seller_phone_num,
    seller_type,
    upload_time,
    years_of_use,
    _id,
  } = product;

  // add wish list handel
  const handelAddWishList = (id) => {
    const wish = {
      product_Id: id,
      product_name,
      resell_price,
      product_statues,
      seller_email,
      buyerEmail: user.email,
    };
    fetch(`http://localhost:5000/wishlist?email=${user.email}&pid=${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wish),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "booked") {
          toast.error(" Already this Product On Your Orders List", {
            duration: 5000,
          });
          <Navigate to='/dashboard/my-orders'></Navigate>;
        }
        if (data.message === "wished") {
          toast.error(" Already this Product On Your WishList", {
            duration: 5000,
          });
          <Navigate to='/dashboard/my-wishlist'></Navigate>;
        }
        if (data.acknowledged) {
          toast.success(" Successfully You Have add WishList", {
            duration: 4000,
          });
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='card card-compact bg-base-300 shadow-xl w-fit'>
      <div className='p-3 flex justify-between'>
        <div className=''>
          <div className='font-semibold capitalize'>
            <span className='font-semibold text-sm opacity-50'>
              For Sale By{" "}
            </span>
            {seller_name}{" "}
            {product?.seller_type ? (
              <div className='badge p-0'>
                <img className='h-4 w-4' src={tick} alt='' />
              </div>
            ) : (
              <div className='badge badge-info text-xs'>NEW</div>
            )}
          </div>
          <div className='text-sm mt-2 flex items-center flex-wrap'>
            <span className='opacity-50 mr-1'>Posted on </span>
            {format(new Date(upload_time), "PPp")} -
            <span className='font-semibold  text-base flex items-center'>
              <svg
                className='mx-1'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#f28c18'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <path d='M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z' />
                <circle cx='12' cy='10' r='3' />
              </svg>{" "}
              {location}
            </span>
          </div>
        </div>
        <div onClick={() => handelAddWishList(_id)} className='flex h-6'>
          <svg
            className='hover:fill-red-600 hover:stroke-red-600  hover:h-5 ease-in-out duration-300 cursor-pointer'
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            viewBox='0 0 24 24'
            fill='#fff'
            stroke='#fff'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
          </svg>
        </div>
      </div>
      <figure>
        <img src={product_url} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{product_name}</h2>

        <div className='stats shadow rounded'>
          <div className='stat place-items-center p-2'>
            <div className='stat-title'>Resell Price</div>
            <div className='font-semibold text-primary'>
              {resell_price}
              <span className='text-red-600 text-2xl'> ৳</span>
            </div>
            <div className='stat-title'>Original Price</div>
            <div className='font-semibold text-primary'>
              {original_price}
              <span className='text-red-600 text-2xl'> ৳</span>
            </div>
          </div>

          <div className='stat place-items-center p-2'>
            <div className='stat-title'>Years Of Use</div>
            <div className='font-semibold text-primary'>{years_of_use}</div>
            <div className='stat-title'>Condition</div>
            <div className='font-semibold text-primary capitalize'>
              {condition}
            </div>
          </div>
        </div>
        <p className='opacity-80 my-2'>
          {product_description.slice(0, 200)} ...
        </p>
        <div className='card-actions justify-center'>
          {!user?.uid ? (
            <>
              <Link to='/login' className='btn btn-secondary'>
                Login
              </Link>
              <label
                disabled
                htmlFor='booking-modal'
                className='btn btn-primary'>
                Book Now
              </label>
            </>
          ) : (
            <label
              onClick={() => setSelectProduct(product)}
              htmlFor='booking-modal'
              className='btn btn-primary btn-wide'>
              Book Now
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
