import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import './pf.css';

function PaymentForm({ car }) {
  const { name, price } = car;

  // Define your publishable Stripe key here
  const stripeKey = 'pk_test_51NyMAYLMvvDsseFp9CMOC6XoIB6syECWHnGEUmffLxfGaEGNIRA6rckpSJPdOYWedzr7WF1fUYI45NDoYWzBn8dH00xyAEfbNg';

  // Callback function to handle the payment success
  const handleToken = async (token) => {
    try {
      // Send a POST request to your server to process the payment
      const response = await axios.post('/api/payment', {
        token,
        amount: price * 100, // Convert price to cents
        carName: name,
      });

      // Handle the response from the server (e.g., show a success message)
      console.log(response.data);
    } catch (error) {
      // Handle payment error (e.g., display an error message)
      console.error(error);
    }
  };

  return (
    <StripeCheckout
      stripeKey={stripeKey}
      token={handleToken}
      name="Car Rental Payment"
      description={`Rent ${name}`}
      amount={price * 100}
      currency="USD"
      billingAddress={true}
      shippingAddress={false}
    >
      <button className="rent-button">Rent Now</button>
    </StripeCheckout>
  );
}

export default PaymentForm;