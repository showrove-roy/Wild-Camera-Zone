import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import BookingModal from "../../../Components/BookingModal/BookingModal";
import { useAuth } from "../../../Contexts/AuthProvider";
import Loading from "../../Share/Loading/Loading";
import Login from "../../Sign-IN-UP/Login";

const MyWishList = () => {
  const [selectProduct, setSelectProduct] = useState(null);
  const { user } = useAuth();
  const {
    isLoading,
    data: wishlists = [],
    refetch,
  } = useQuery({
    queryKey: ["wishlist", user.email],
    queryFn: () =>
      fetch(`http://localhost:5000/wishlist?email=${user.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("jwToken")}`,
        },
      }).then((res) => res.json()),
  });
  if (isLoading) return <Loading></Loading>;
  if (wishlists?.message) {
    return <Login>We did not recognize you! Please Login/SignUp</Login>;
  }
  return (
    <section>
      <h2 className='text-3xl'>My Wish List</h2>
      <table className='table table-zebra w-full my-3'>
        <thead>
          <tr>
            <th className='bg-base-300' style={{ position: "revert" }}></th>
            <th className='bg-base-300'>Product Name</th>
            <th className='bg-base-300'>Price</th>
            <th className='bg-base-300'>Statues</th>
            <th className='bg-base-300'>Book</th>
            <th className='bg-base-300'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {wishlists?.map((wish, i) => (
            <tr key={wish._id}>
              <td>{i + 1}</td>
              <td className='font-semibold text-sm'>{wish.product_name}</td>
              <td className='font-semibold text-sm'>
                {wish.resell_price}
                <span className='text-red-600 text-2xl'> ৳</span>
              </td>
              <td className='font-semibold text-sm uppercase text-primary'>
                {wish.product_statues}
              </td>
              <td>
                <label
                  onClick={() => setSelectProduct(wish)}
                  htmlFor='booking-modal'
                  className='btn btn-info btn-xs'>
                  Book
                </label>
              </td>
              <td>
                <button className='btn btn-square btn-outline btn-error btn-xs'>
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
      {selectProduct && (
        <BookingModal
          selectProduct={selectProduct}
          setSelectProduct={setSelectProduct}
          refetch={refetch}></BookingModal>
      )}
    </section>
  );
};

export default MyWishList;
