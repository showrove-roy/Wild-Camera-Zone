import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../../Share/Loading/Loading";

const AllSellers = () => {
  const {
    isLoading,
    data: sellers = [],
    refetch,
  } = useQuery({
    queryKey: ["all_sellers"],
    queryFn: () =>
      fetch("http://localhost:5000/users?role=seller").then((res) =>
        res.json()
      ),
  });

  const handelVerify = (sellerEmail) => {
    fetch(`http://localhost:5000/users/${sellerEmail}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Seller Verified Done ");
        }
      })
      .catch((err) => console.error(err));
  };

  if (isLoading) return <Loading></Loading>;
  return (
    <section>
      <h2 className='text-3xl'>All Sellers</h2>

      <table className='table table-zebra w-full my-3'>
        <thead>
          <tr>
            <th className='bg-base-300' style={{ position: "revert" }}></th>
            <th className='bg-base-300'>Name</th>
            <th className='bg-base-300'>Email</th>
            <th className='bg-base-300'>AC-Statues</th>
            <th className='bg-base-300'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {sellers?.map((seller, i) => (
            <tr key={seller._id}>
              <td>{i + 1}</td>
              <td className='font-semibold text-sm'>{seller.name}</td>
              <td className='font-semibold text-sm'>{seller.email}</td>
              <td className='font-semibold text-sm capitalize text-success'>
                {seller?.seller_type === "verified" ? (
                  "Verified"
                ) : (
                  <button
                    onClick={() => handelVerify(seller.email)}
                    disabled={seller?.seller_type}
                    className='btn btn-info btn-xs text-white'>
                    Mk Verify
                  </button>
                )}
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
    </section>
  );
};

export default AllSellers;
