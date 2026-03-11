import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Ensure Stripe secret key exists at startup
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
let stripe = null;
if (!STRIPE_SECRET_KEY) {
  console.warn('Warning: STRIPE_SECRET_KEY not set. Server will start, but payment endpoints will return configuration errors until you set backend/.env');
} else {
  stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2022-11-15',
  });
}

app.use(cors());
app.use(express.json());

// Simple health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Route to create payment intent
app.post('/create-payment-intent', async (req, res) => {
  try {
    if (!stripe) {
      return res.status(500).json({ error: 'Payments not configured. Set STRIPE_SECRET_KEY in backend/.env and restart the server.' });
    }

    let { amount, currency } = req.body || {};

    if (amount == null) {
      return res.status(400).json({ error: 'amount is required (in smallest currency unit, e.g., cents)' });
    }
    if (!Number.isInteger(amount) || amount <= 0) {
      return res.status(400).json({ error: 'amount must be a positive integer in the smallest currency unit' });
    }

    // Default currency if not provided
    if (!currency) {
      currency = 'usd';
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      // Enable automatic payment methods for broader coverage
      automatic_payment_methods: { enabled: true },
    });

    return res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});

// Global error handler (fallback)
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
