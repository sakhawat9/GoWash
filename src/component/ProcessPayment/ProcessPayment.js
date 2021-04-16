import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimpleCardForm";

const stripePromise = loadStripe(
  "pk_test_51Ie9ZXBjQKjl2gnMRtnIKkQcSkKRYqFUkMbvF0tC2w5BIxmC9muLrYSGR9PJOCqnl7liWXY9j1dlMW0Is1xXqdZQ00bQLvMW3m"
);

const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm />
    </Elements>
  );
};

export default ProcessPayment;
