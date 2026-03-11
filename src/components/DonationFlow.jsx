import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { FaMobileAlt, FaMoneyBillWave, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const stripePromise = loadStripe("");

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
            <div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm">
                <CardElement
                    options={{
                        style: {
                            base: { fontSize: "16px", color: "#424770", "::placeholder": { color: "#aab7c4" } },
                            invalid: { color: "#9e2146" },
                        },
                    }}
                />
            </div>
            <button
                type="submit"
                disabled={!stripe || processing}
                className="w-full bg-[#14b8a6] text-white py-4 rounded-full font-bold hover:bg-[#0f8c7e] transition-colors shadow-lg shadow-teal-500/30"
            >
                {processing ? "Processing..." : donationType === "monthly" ? "Become a Monthly Supporter" : "Make a Donation"}
            </button>
            {error && <div className="text-red-500 mt-2 text-sm text-center">{error}</div>}
            {success && <div className="text-green-500 mt-2 text-sm text-center bg-green-50 p-3 rounded-lg border border-green-100">Payment Successful! Thank you!</div>}
        </form>
    );
}

export function DonationFlow() {
    const [donationType, setDonationType] = useState("monthly");
    const [currency, setCurrency] = useState("USD");
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [formData, setFormData] = useState({
        name: "", surname: "", email: "", phone: "",
    });
    const [amount, setAmount] = useState(100);
    const [showLocalPayments, setShowLocalPayments] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const donationGoal = 10000;
    const amountDonated = 4500;
    const progressPercentage = Math.min((amountDonated / donationGoal) * 100, 100);

    return (
        <section className="bg-[#fcfcfa] px-[5%] py-16 md:py-24" id="donate">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">

                    {/* Left Section - Motivational Content */}
                    <div className="w-full lg:w-[45%] bg-[#113d29] text-white p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10 w-full">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="w-12 h-px bg-[#14b8a6]"></span>
                                <p className="font-bold text-[#14b8a6] uppercase tracking-[0.2em] text-sm">
                                    Support Us
                                </p>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10 leading-tight">
                                Your Donation <br /> Makes a Difference
                            </h2>

                            <div className="space-y-8 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-full shrink-0">
                                        <svg className="w-6 h-6 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 font-serif text-white">Transform Lives</h3>
                                        <p className="text-gray-300 font-light text-sm">Every donation helps us provide critical services to those affected by HIV/AIDS.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-full shrink-0">
                                        <svg className="w-6 h-6 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 font-serif text-white">Sustainable Impact</h3>
                                        <p className="text-gray-300 font-light text-sm">Your support enables long-term programs that create lasting change.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Progress Bar Container */}
                            <div className="bg-black/20 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
                                <h4 className="font-bold text-white mb-4">Donation Progress</h4>
                                <div className="w-full bg-white/10 rounded-full h-3 mb-3 shrink-0">
                                    <div
                                        className="bg-[#14b8a6] h-full rounded-full transition-all duration-1000 relative"
                                        style={{ width: `${progressPercentage}%` }}
                                    >
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow blur-[2px]"></div>
                                    </div>
                                </div>
                                <div className="flex justify-between text-sm font-light">
                                    <span className="text-gray-300">${amountDonated.toLocaleString()} Raised</span>
                                    <span className="text-[#14b8a6] font-medium">${donationGoal.toLocaleString()} Goal</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Donation Form */}
                    <div className="w-full lg:w-[55%] p-10 lg:p-14 bg-white flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-2 text-gray-900 font-serif">
                            Make a contribution
                        </h3>
                        <p className="text-gray-500 mb-8 font-light">
                            {donationType === "monthly"
                                ? "Join our monthly supporters to create sustainable change."
                                : "Make a one-time donation to support our critical work."}
                        </p>

                        {/* Donation Toggle */}
                        <div className="flex p-1 bg-gray-100 rounded-full mb-8 shrink-0">
                            <button
                                onClick={() => setDonationType("monthly")}
                                className={`flex-1 py-3 rounded-full text-sm font-bold transition-all ${donationType === "monthly"
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                Monthly Support
                            </button>
                            <button
                                onClick={() => setDonationType("one-time")}
                                className={`flex-1 py-3 rounded-full text-sm font-bold transition-all ${donationType === "one-time"
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                One-time Donation
                            </button>
                        </div>

                        {/* Amount & Currency */}
                        <div className="mb-6">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Amount</label>
                            <div className="flex border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#14b8a6] focus-within:border-transparent transition-all">
                                <span className="px-5 py-4 bg-gray-50 text-gray-500 border-r border-gray-200 font-medium">$</span>
                                <input
                                    type="number"
                                    value={amount}
                                    min={1}
                                    onChange={(e) => setAmount(Number(e.target.value))}
                                    className="flex-1 px-4 py-4 outline-none font-medium text-gray-900 text-lg"
                                    required
                                />
                                <select
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value)}
                                    className="px-5 py-4 outline-none border-l border-gray-200 bg-gray-50 font-medium text-gray-700 cursor-pointer"
                                    required
                                >
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                    <option value="ZWL">ZWL</option>
                                </select>
                            </div>
                        </div>

                        {/* User Details */}
                        <div className="space-y-4 mb-8">
                            <div class="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="First Name *"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent outline-none transition-all placeholder:font-light"
                                />
                                <input
                                    type="text"
                                    name="surname"
                                    placeholder="Last Name *"
                                    value={formData.surname}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent outline-none transition-all placeholder:font-light"
                                />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address *"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent outline-none transition-all placeholder:font-light"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number *"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent outline-none transition-all placeholder:font-light"
                            />
                        </div>

                        {/* Payment Method Toggle & Rendering */}
                        <div className="mb-6">
                            <div className="flex gap-3 mb-6">
                                <button
                                    onClick={() => setPaymentMethod("card")}
                                    className={`px-4 py-2 border rounded-full text-sm font-bold transition-all ${paymentMethod === 'card' ? 'border-[#14b8a6] bg-teal-50 text-[#0f8c7e]' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                                >
                                    Credit Card
                                </button>
                                <button
                                    onClick={() => setPaymentMethod("local")}
                                    className={`px-4 py-2 border rounded-full text-sm font-bold transition-all ${paymentMethod === 'local' ? 'border-[#14b8a6] bg-teal-50 text-[#0f8c7e]' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                                >
                                    Local / Mobile Money
                                </button>
                            </div>

                            <div className="min-h-[150px]">
                                {paymentMethod === "card" ? (
                                    <Elements stripe={stripePromise}>
                                        <CheckoutForm
                                            donationType={donationType}
                                            currency={currency.toLowerCase()}
                                            amount={amount}
                                            formData={formData}
                                        />
                                    </Elements>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                        className="p-6 bg-gray-50 rounded-xl border border-gray-200"
                                    >
                                        <h4 className="font-bold text-gray-900 mb-4">Local Payment Instructions</h4>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <FaMobileAlt className="text-[#14b8a6] mt-1 shrink-0" />
                                                <div>
                                                    <p className="font-bold text-sm text-gray-800">EcoCash / Mobile Money</p>
                                                    <p className="text-xs text-gray-500">Dial *151# → Send Money → Enter our Biller Code: 12345 → Follow Prompts.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 mt-2">
                                                <FaMoneyBillWave className="text-[#14b8a6] mt-1 shrink-0" />
                                                <div>
                                                    <p className="font-bold text-sm text-gray-800">Bank Transfer</p>
                                                    <p className="text-xs text-gray-500">Account: BHASO Trust, Bank: Local Bank, Acc: 123456789 (Use Name as Ref)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        <p className="text-xs text-gray-400 text-center mt-4">
                            Your donation is secure and tax-deductible. BHASO is a 501(c)(3) nonprofit organization.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
