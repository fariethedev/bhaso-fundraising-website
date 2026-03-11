import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check local storage after short delay to allow UI to render first
        const timer = setTimeout(() => {
            const consent = localStorage.getItem("bhaso-cookie-consent");
            if (!consent) {
                setIsVisible(true);
            }
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("bhaso-cookie-consent", "accepted");
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem("bhaso-cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pb-6"
                >
                    <div className="max-w-4xl mx-auto bg-gray-900/95 backdrop-blur-md text-white rounded-2xl shadow-2xl p-6 md:px-8 border border-white/10 flex flex-col md:flex-row items-center gap-6 justify-between">
                        <div className="flex-1 text-center md:text-left">
                            <h4 className="font-bold text-lg mb-1 flex items-center justify-center md:justify-start gap-2">
                                <span className="text-xl">🍪</span> We respect your privacy
                            </h4>
                            <p className="text-sm text-gray-300 font-light leading-relaxed">
                                We use cookies to improve your experience on our site and deliver personalized content. By continuing to use our website, you agree to our use of cookies.
                            </p>
                        </div>

                        <div className="flex gap-4 shrink-0 w-full md:w-auto">
                            <button
                                onClick={declineCookies}
                                className="flex-1 md:flex-none px-6 py-3 font-semibold text-gray-300 border border-gray-600 rounded-full hover:bg-white/10 hover:text-white transition-colors"
                            >
                                Decline
                            </button>
                            <button
                                onClick={acceptCookies}
                                className="flex-1 md:flex-none px-6 py-3 font-bold text-gray-900 bg-[#14b8a6] hover:bg-[#0f8c7e] hover:text-white rounded-full transition-colors shadow-lg shadow-teal-500/30"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
