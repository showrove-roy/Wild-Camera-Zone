import React from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const Advertised = () => {
  return (
    <div className='lg:mx-5 mx-2 my-10'>
      <h3 className='capitalize mb-2 font-semibold text-2xl'>
        All advertised products
      </h3>
      <div className='divider'></div>
      <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-y-5'>
          {/* <ProductCard></ProductCard> */}
        </div>
      </div>
      <div className='divider'></div>
    </div>
  );
};

export default Advertised;
