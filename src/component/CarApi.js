const express = require('express');
const stripe = require('stripe')('pk_test_51NyMAYLMvvDsseFp9CMOC6XoIB6syECWHnGEUmffLxfGaEGNIRA6rckpSJPdOYWedzr7WF1fUYI45NDoYWzBn8dH00xyAEfbNg');
const router = express.Router();

router.post('/api/payment', async (req, res) => {
  try {
    const { token, amount, carName } = req.body;

    // Create a payment using the Stripe API
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: `Payment for ${carName}`,
      payment_method_types: ['card'],
      receipt_email: token.email,
      confirm: true,
    });

    // Handle successful payment and send a response
    res.json({ success: true, message: 'Payment succeeded' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Payment failed' });
  }
});

module.exports = router;
