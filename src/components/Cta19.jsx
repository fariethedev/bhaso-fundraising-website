"use client";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { FaMobileAlt, FaMoneyBillWave, FaArrowRight } from "react-icons/fa";

const stripePromise = loadStripe(""); // your Stripe public key

function CheckoutForm({ donationType, currency, amount, formData }) {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setError(null);
    setSuccess(false);

    if (!stripe || !elements) {
      setError("Stripe.js has not loaded yet.");
      setProcessing(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency }),
      });
      const { clientSecret, error: backendError } = await response.json();

      if (backendError) {
        setError(backendError);
        setProcessing(false);
        return;
      }

      const cardElement = elements.getElement(CardElement);
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: `${formData.name} ${formData.surname}`,
            email: formData.email,
            phone: formData.phone,
          },
        },
      });

      if (paymentResult.error) {
        setError(paymentResult.error.message);
        setProcessing(false);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        setSuccess(true);
        setProcessing(false);
      }
    } catch (err) {
      setError(err.message);
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement
        options={{
          style: {
            base: { fontSize: "16px", color: "#424770", "::placeholder": { color: "#aab7c4" } },
            invalid: { color: "#9e2146" },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full bg-green-900 text-white py-4 rounded-lg font-semibold hover:bg-green-800 transition-colors"
      >
        {processing ? "Processing..." : donationType === "monthly" ? "Become a Monthly Supporter" : "Make a Donation"}
      </button>
      {error && <div className="text-red-600 mt-2">{error}</div>}
      {success && <div className="text-green-600 mt-2">Payment Successful! Thank you!</div>}
    </form>
  );
}

export function Cta19() {
  const [donationType, setDonationType] = useState("monthly");
  const [currency, setCurrency] = useState("USD");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });
  const [amount, setAmount] = useState(100);
  const [showLocalPayments, setShowLocalPayments] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const donationGoal = 10000; // example value
  const amountDonated = 4500; // example value
  const progressPercentage = Math.min((amountDonated / donationGoal) * 100, 100);

  return (
    <section className="flex flex-col lg:flex-row min-h-screen bg-white" id="Cta19">
      {/* Left Section - Motivational Content */}
      <div className="w-full lg:w-1/2 bg-green-900 text-white p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-4xl font-bold mb-6">Your Donation Makes a Difference</h2>
          {/* Existing motivational content with icons */}
          <div className="mb-8">
            {/* Transform Lives */}
            <div className="flex items-start mb-6">
              <div className="bg-green-700 rounded-full p-2 mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Transform Lives</h3>
                <p className="text-green-100">
                  Every donation helps us provide critical services to those affected by HIV/AIDS and other health challenges.
                </p>
              </div>
            </div>
            {/* Sustainable Impact */}
            <div className="flex items-start mb-6">
              <div className="bg-green-700 rounded-full p-2 mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sustainable Impact</h3>
                <p className="text-green-100">
                  Your support enables long-term programs that create lasting change in vulnerable communities.
                </p>
              </div>
            </div>
            {/* Community Strength */}
            <div className="flex items-start">
              <div className="bg-green-700 rounded-full p-2 mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Community Strength</h3>
                <p className="text-green-100">
                  Together, we're building healthier, more resilient communities through education and support.
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden h-64">
            <img 
              src="src/assets/image43.jpeg" 
              alt="Community support"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-green-900 bg-opacity-30 flex items-center justify-center">
              <p className="text-white text-lg font-medium px-6 text-center">
                Join over 5,000 donors who are making an impact every month
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Donation Form */}
      <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">
            Support BHASO's <span className="text-green-700">Mission</span>
          </h1>
          <p className="text-gray-600 mb-6">
            {donationType === "monthly" 
              ? "Join our monthly supporters to create sustainable change."
              : "Make a one-time donation to support our critical work."}
          </p>

          {/* Donation type buttons */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setDonationType("monthly")}
              className={`px-6 py-3 rounded-lg text-sm font-semibold flex-1 ${
                donationType === "monthly"
                  ? "bg-green-100 text-green-900 border-2 border-green-900"
                  : "bg-gray-100 text-gray-700 border border-gray-300"
              }`}
            >
              Monthly Support
            </button>
            <button
              onClick={() => setDonationType("one-time")}
              className={`px-6 py-3 rounded-lg text-sm font-semibold flex-1 ${
                donationType === "one-time"
                  ? "bg-green-100 text-green-900 border-2 border-green-900"
                  : "bg-gray-100 text-gray-700 border border-gray-300"
              }`}
            >
              One-time Donation
            </button>
          </div>

          {/* Amount + Currency */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Donation Amount</label>
            <div className="flex border border-gray-300 rounded-lg overflow-hidden w-full">
              <span className="px-4 py-3 bg-gray-100 text-gray-600">$</span>
              <input
                type="number"
                value={amount}
                min={1}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="flex-1 px-4 py-3 outline-none"
                required
              />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="px-4 py-3 outline-none border-l border-gray-300 bg-white"
                required
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="ZWL">ZWL</option>
              </select>
            </div>
          </div>

          {/* User info inputs */}
          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="First Name*"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent"
              />
              <input
                type="text"
                name="surname"
                placeholder="Last Name*"
                value={formData.surname}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent"
            />
          </div>

          {/* Payment Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Payment Method</h3>
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => setPaymentMethod("card")}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  paymentMethod === "card"
                    ? "bg-green-100 text-green-900 border-2 border-green-900"
                    : "bg-gray-100 text-gray-700 border border-gray-300"
                }`}
              >
                Credit Card
              </button>
              <button
                onClick={() => setPaymentMethod("paypal")}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  paymentMethod === "paypal"
                    ? "bg-green-100 text-green-900 border-2 border-green-900"
                    : "bg-gray-100 text-gray-700 border border-gray-300"
                }`}
              >
                PayPal
              </button>
            </div>

            {paymentMethod === "card" && (
              <Elements stripe={stripePromise}>
                <CheckoutForm
                  donationType={donationType}
                  currency={currency.toLowerCase()}
                  amount={amount}
                  formData={formData}
                />
              </Elements>
            )}
          </div>

          {/* Local Payment Toggle */}
          <div className="text-center mt-6">
            <button
              className="text-green-900 underline font-semibold hover:text-green-700 transition"
              onClick={() => setShowLocalPayments(!showLocalPayments)}
            >
              {showLocalPayments
                ? "Hide Zimbabwe Local Payment Methods"
                : "Zimbabwe Local Payment Methods"}
            </button>
          </div>

          {/* Zimbabwe Local Payments Section */}
          {showLocalPayments && (
            <div className="mt-6 grid md:grid-cols-2 gap-8 items-start bg-green-50 text-green-900 p-6 rounded-lg shadow-lg">
              {/* Left: Instructions */}
              <div>
                <h3 className="text-2xl font-bold mb-4">How to Pay Locally</h3>
                <div className="flex items-start mb-4">
                  <FaMobileAlt size={24} className="mr-3 mt-1 text-green-900" />
                  <div>
                    <h4 className="font-semibold mb-1">EcoCash</h4>
                    <p className="text-sm">
                      Dial *151# → Select "Send Money" → Enter our EcoCash number → Enter amount → Confirm with PIN.
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <FaMoneyBillWave size={24} className="mr-3 mt-1 text-green-900" />
                  <div>
                    <h4 className="font-semibold mb-1">Mukuru</h4>
                    <p className="text-sm">
                      Log in to your Mukuru app → Select "Send Money" → Enter recipient details → Enter amount → Confirm.
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <FaArrowRight size={24} className="mr-3 mt-1 text-green-900" />
                  <div>
                    <h4 className="font-semibold mb-1">Bank Transfer</h4>
                    <p className="text-sm">
                      Use your bank app or internet banking to transfer directly to our designated bank account. Include your name in the reference.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Donation Progress */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Donation Progress</h3>
                <div className="w-full bg-green-200 rounded-full h-6 mb-2">
                  <div
                    className="bg-green-900 h-6 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-green-900 mb-2">
                  ${amountDonated.toLocaleString()} donated of ${donationGoal.toLocaleString()} goal
                </p>
              </div>
            </div>
          )}

          <p className="text-sm text-gray-500 mt-6">
            Your donation is secure and tax-deductible. BHASO is a 501(c)(3) nonprofit organization.
          </p>
        </div>
      </div>
    </section>
  );
}
