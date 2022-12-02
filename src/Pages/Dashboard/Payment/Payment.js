import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { useAuth } from "../../../Contexts/AuthProvider";
import PaymentCard from "./PaymentCard";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const data = useLoaderData();
  const { user } = useAuth();
  let product = data.data;
  const [payLoading, setPayLoading] = useState(false);

  const handlePayment = () => {
    setPayLoading(true);
    fetch(
      `https://wild-camera-zone-server.vercel.app/payment/${product._id}?email=${user.email}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          toast.success("Payment Successfully Done");
          setPayLoading(false);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setPayLoading(false);
      });
  };

  return (
    <section>
      <h2 className='text-3xl'>Checkout Now</h2>
      <h2 className='text-3xl text-center mt-10'>{product.product_name}</h2>
      <h2 className='text-2xl text-center my-1'>
        Price: {product.resell_price}
        <span className='text-red-600 text-4xl'> ৳</span>
      </h2>
      <div className='max-w-sm my-10 mx-auto'>
        <Elements stripe={stripePromise}>
          <PaymentCard
            product={product}
            handlePayment={handlePayment}
            payLoading={payLoading}></PaymentCard>
        </Elements>
      </div>
    </section>
  );
};

export default Payment;
