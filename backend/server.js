import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';

const app = express();
const PORT = process.env.PORT || 5000;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15', // or your preferred API version
});

app.use(cors());
app.use(express.json());

// Example route to create payment intent
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
