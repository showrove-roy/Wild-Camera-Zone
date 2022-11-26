import { format, formatDistanceToNow, formatISO9075 } from "date-fns";
import React from "react";
import tick from "../../../assets/check.png";

const ProductCard = () => {
  var d1 = new Date("2022-11-27 00:30:22");

  const result5 = formatDistanceToNow(new Date(d1), {
    includeSeconds: true,
  });

  return (
    <div className='card card-compact bg-base-300 shadow-xl w-fit'>
      <div className='p-3 flex justify-between'>
        <div className=''>
          <p className='font-semibold capitalize'>
            <span className='font-semibold text-sm opacity-50'>
              For Sale By{" "}
            </span>
            Showrove Roy <div className='badge badge-info text-xs'>NEW</div>
            <div className='badge p-0'>
              <img className='h-4 w-4' src={tick} alt='' />
            </div>
          </p>
          <p className='text-sm mt-2 flex items-center flex-wrap'>
            <span className='opacity-50 mr-1'>Posted on </span>
            {format(new Date(), "PPp")} -
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
              Dhaka
            </span>
          </p>
        </div>
        <div className='flex h-6'>
          <svg
            className='hover:stroke-primary hover:h-5 ease-in-out duration-300 cursor-pointer'
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#fff'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
          </svg>
        </div>
      </div>
      <figure>
        <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>Shoes!</h2>

        <div className='stats shadow rounded'>
          <div className='stat place-items-center p-2'>
            <p className='stat-title'>Downloads</p>
            <p className='font-semibold text-primary'>$ 31K</p>
            <p className='stat-title'>Downloads</p>
            <p className='font-semibold text-primary'>$ 31K</p>
          </div>

          <div className='stat place-items-center p-2'>
            <p className='stat-title'>Downloads</p>
            <p className='font-semibold text-primary'>$ 31K</p>
            <p className='stat-title'>Downloads</p>
            <p className='font-semibold text-primary'>$ 31K</p>
          </div>
        </div>
        <p className='opacity-80 my-2'>
          If a dog chews shoes whose shoes does he choose?If a dog chews shoes
          whose shoes does he choose? If a dog chews shoes whose shoes does he
          choose? If a dog chews shoes whose shoes does he choose? If a dog
          chews shoes whose shoes does he choose? If a dog chews shoes whose
          shoes does he choose?
        </p>
        <div className='card-actions justify-center'>
          <button className='btn btn-primary btn-wide'>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
