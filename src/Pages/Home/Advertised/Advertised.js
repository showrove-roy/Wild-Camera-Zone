import React from "react";

const Advertised = () => {
  return (
    <div className='lg:mx-5 mx-2 my-10'>
      <h3 className='capitalize mb-2 font-semibold text-2xl'>
        All advertised products
      </h3>
      <div className='divider'></div>
      <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-y-5'>
          <div className='card card-compact w-fit bg-base-100 shadow-xl rounded-md indicator'>
            <span className='indicator-item indicator-top indicator-end top-5 right-8'>
              <button className='btn btn-outline btn-sm'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  />
                </svg>
              </button>
            </span>
            <figure>
              <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='divider'></div>
    </div>
  );
};

export default Advertised;
