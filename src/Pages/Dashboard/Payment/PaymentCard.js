import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Contexts/AuthProvider";

const PaymentCard = ({ product, handlePayment, payLoading }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionID, setTransactionID] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://wild-camera-zone-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ resell_price: product.resell_price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [product.resell_price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setSuccess("");
    setLoading(true);
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      setLoading(false);
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      setLoading(false);
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setLoading(false);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      setLoading(false);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      axios
        .post("https://wild-camera-zone-server.vercel.app/payment", {
          name: user.displayName,
          email: user.email,
          transaction_ID: paymentIntent.id,
          productID: product._id,
          paying_time: new Date(),
        })
        .then((res) => {
          if (res?.data?.acknowledged) {
            setSuccess("Congrats! Your Payment Completed");
            setTransactionID(paymentIntent.id);
            setLoading(false);
            handlePayment();
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      {cardError && (
        <h3 className='mb-3 text-center text-error font-semibold'>
          {cardError}
        </h3>
      )}

      <form className='bg-base-300 p-5 rounded' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className='flex justify-center mt-10'>
          <button
            className='btn btn-info btn-sm'
            type='submit'
            disabled={!stripe || !clientSecret || loading || transactionID}>
            Pay {product.resell_price}
            <span className='text-red-600 text-3xl mx-1 -mt-2'> ৳</span>
          </button>
        </div>
      </form>
      {success && !payLoading && (
        <div className='my-5'>
          <p>{success}</p>
          <p>
            Transaction ID: <strong>{transactionID}</strong>
          </p>

          <Link to='/dashboard/my-orders'>
            <button className='btn btn-info btn-sm my-3'>Back To Order</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default PaymentCard;
