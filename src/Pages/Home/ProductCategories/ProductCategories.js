import React from "react";
import category1 from "../../../assets/categorys/1.jpg";
import category2 from "../../../assets/categorys/2.jpg";
import category3 from "../../../assets/categorys/3.jpg";
import category4 from "../../../assets/categorys/4.jpg";

const ProductCategories = () => {
  return (
    <section className='lg:mx-5 mx-2 my-10'>
      <h3 className='capitalize mb-2 font-semibold text-2xl'>Categories</h3>
      <div className='my-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-10'>
        <div className='card bg-base-100 shadow-xl image-full hover:scale-95 ease-in-out duration-300 cursor-pointer'>
          <figure>
            <img src={category1} alt='Shoes' />
          </figure>
          <div
            className='card-body justify-center items-center
        p-0'>
            <h2 className='text-center font-bold md:text-4xl text-3xl uppercase h-full w-full flex justify-center items-center hover:text-red-600'>
              SONY
            </h2>
          </div>
        </div>
        <div className='card bg-base-100 shadow-xl image-full hover:scale-95 ease-in-out duration-300 cursor-pointer'>
          <figure>
            <img src={category4} alt='Shoes' />
          </figure>
          <div
            className='card-body justify-center items-center
        p-0'>
            <h2 className='text-center font-bold md:text-4xl text-3xl uppercase h-full w-full flex justify-center items-center hover:text-red-600'>
              Canon
            </h2>
          </div>
        </div>
        <div className='card bg-base-100 shadow-xl image-full hover:scale-95 ease-in-out duration-300 cursor-pointer'>
          <figure>
            <img src={category3} alt='Shoes' />
          </figure>
          <div
            className='card-body justify-center items-center
        p-0'>
            <h2 className='text-center font-bold md:text-4xl text-3xl uppercase h-full w-full flex justify-center items-center hover:text-red-600'>
              Nikon
            </h2>
          </div>
        </div>
        <div className='card bg-base-100 shadow-xl image-full hover:scale-95 ease-in-out duration-300 cursor-pointer'>
          <figure>
            <img src={category2} alt='Shoes' />
          </figure>
          <div
            className='card-body justify-center items-center
        p-0'>
            <h2 className='text-center font-bold md:text-4xl text-3xl uppercase h-full w-full flex justify-center items-center hover:text-red-600'>
              GoPro
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
