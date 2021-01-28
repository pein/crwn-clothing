import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey =
    "pk_test_51IDm3wKUEkuGk5wO5Sd4yztGP38iNocHKnnkBTGVUTSSft5aCzWc4xEOIOkQM7UW9W6NpARQkvYIfa7zRmJaeRPN00O3DRPwqa";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWEN Clothing Lts."
      billindAdress
      shippigAdress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amoount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
