import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../../Contexts/AuthProvider";
import Loading from "../../Share/Loading/Loading";
import Login from "../../Sign-IN-UP/Login";

const MyProducts = () => {
  const { user } = useAuth();
  const {
    isLoading,
    data: products = [],
    refetch,
  } = useQuery({
    queryKey: ["myproducts"],
    queryFn: () =>
      fetch(
        `https://wild-camera-zone-server.vercel.app/product?email=${user.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("jwToken")}`,
          },
        }
      ).then((res) => res.json()),
  });

  // Add product on on advertise list
  const handelAD = (id) => {
    const ad_status = { ad_status: "ad" };
    fetch(`https://wild-camera-zone-server.vercel.app/product/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ad_status),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Product is Added on advertise list");
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  // delete product
  const handelDelete = (id) => {
    const conformation = window.confirm("Want to Delete?");
    if (conformation) {
      fetch(`https://wild-camera-zone-server.vercel.app/product/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            refetch();
            toast.success("Delete Successfully");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  if (isLoading) return <Loading></Loading>;
  if (products?.message) {
    return <Login>We did not recognize you! Please Login/SignUp</Login>;
  }

  return (
    <section>
      <h2 className='text-3xl'>My Product</h2>

      <table className='table table-zebra w-full my-3'>
        <thead>
          <tr>
            <th className='bg-base-300' style={{ position: "revert" }}></th>
            <th className='bg-base-300'>Product Name</th>
            <th className='bg-base-300'>Posted Date</th>
            <th className='bg-base-300'>Resell Price</th>
            <th className='bg-base-300'>Statues</th>
            <th className='bg-base-300'>Ad</th>
            <th className='bg-base-300'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={product._id}>
              <td>{i + 1}</td>
              <td className='font-semibold text-sm'>{product.product_name}</td>
              <td className='font-semibold text-sm'>
                {format(new Date(product.upload_time), "PP")}
              </td>
              <td className='font-semibold text-sm'>
                {product.resell_price}
                <span className='text-red-600 text-2xl'> ???</span>
              </td>
              <td className='font-semibold text-sm capitalize text-warning'>
                {product.product_statues}
              </td>
              <td className='font-semibold text-sm capitalize text-success'>
                <button
                  onClick={() => handelAD(product._id)}
                  disabled={
                    product.ad_status || product.product_statues === "sold"
                  }
                  className='btn btn-square btn-info btn-xs'>
                  AD
                </button>
              </td>

              <td>
                <button
                  disabled={product.product_statues === "sold"}
                  onClick={() => handelDelete(product._id)}
                  className='btn btn-square btn-outline btn-error btn-xs'>
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
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MyProducts;
