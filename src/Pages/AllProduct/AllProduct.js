import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import BookingModal from "../../Components/BookingModal/BookingModal";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Loading from "../Share/Loading/Loading";
import Login from "../Sign-IN-UP/Login";

const AllProduct = () => {
  const [selectProduct, setSelectProduct] = useState(null);
  const { isLoading, data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("http://localhost:5000/product", {
        headers: {
          authorization: `bearer ${localStorage.getItem("jwToken")}`,
        },
      }).then((res) => res.json()),
  });

  if (isLoading) return <Loading></Loading>;

  if (products?.message) {
    return <Login>We did not recognize you! Please Login/SignUp</Login>;
  }

  return (
    <section className='m-5'>
      <h2 className='text-center font-semibold text-3xl'>
        Choose your best product
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-y-5 my-3'>
        {products?.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            setSelectProduct={setSelectProduct}></ProductCard>
        ))}
      </div>
      {selectProduct && (
        <BookingModal
          selectProduct={selectProduct}
          setSelectProduct={setSelectProduct}></BookingModal>
      )}
    </section>
  );
};

export default AllProduct;
