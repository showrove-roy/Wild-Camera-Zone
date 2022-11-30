import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import Loading from "../../Share/Loading/Loading";

const JustForYou = ({ setSelectProduct }) => {
  const { isLoading, data: products = [] } = useQuery({
    queryKey: ["jsproducts"],
    queryFn: () =>
      fetch("https://wild-camera-zone-server.vercel.app/product", {
        headers: {
          authorization: `bearer ${localStorage.getItem("jwToken")}`,
        },
      }).then((res) => res.json()),
  });

  if (isLoading) return <Loading></Loading>;

  if (products.message) {
    return;
  }
  return (
    <section className='lg:mx-5 mx-2 my-10'>
      <h3 className='capitalize mb-2 font-semibold text-2xl'>JustForYou</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-y-5 my-3'>
        {products.slice(0, 4).map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            setSelectProduct={setSelectProduct}></ProductCard>
        ))}
      </div>
    </section>
  );
};

export default JustForYou;
