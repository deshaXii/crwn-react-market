import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StribePayButton = ({ price }) => {
  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert("pay done");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey="pk_test_51J4yqmDz5RghjDgUueswj0foHJ5XdImf7bm3PVkVBOPWelkdsUDHvSxrNQPoNcxANWP8wUXvHgjoO4PHnXQQh2ch00t9DSwOOP"
    />
  );
};

export default StribePayButton;
