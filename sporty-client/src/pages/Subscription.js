import React, { useEffect } from "react";
import "./Subscription.css";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

const Subscription = () => {
  useEffect(() => {
    const existingScript = document.getElementById("razorpay-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.setAttribute("data-payment_button_id", "pl_OejyxHFBqctKle");
      script.id = "razorpay-script";
      script.async = true;
      document.getElementById("razorpay-button-form").appendChild(script);
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="subscription-container">
        <h1>Subscription Pricing</h1>
        <p>For Sellers</p>
        <p>
          Get the best value for your beat-selling business and unlock a range
          of exclusive features with our subscription plans.
        </p>
        <div className="plans">
          <div className="plan">
            <h2>Basic</h2>
            <h3>Plan Already In Use</h3>
            <p>Suite for the new comers:</p>
            <ul>
              <li>Unlimited Live score</li>
              <li>Best live scores</li>
              <li>Cannot Add Social Media & Website Links</li>
              <li>Cannot Add To Watch Later</li>
            </ul>
            <button type="button" className="btn btn-success btn-lg" disabled>
              IN USE
            </button>
          </div>
          <div className="plan recommended">
            <h2>Premium</h2>
            <h3>₹1/month</h3>
            <p>Get 100% whatever you Earn. And Grow.</p>
            <ul>
              <li>Unlimited Live Score</li>
              <li>Unlimited Sports News</li>
              <li>Receive 100% of App Utilization*</li>
              <li>Can Add Social Media & Website Links</li>
              <li>Can Add To Watch Later</li>
            </ul>
            <form id="razorpay-button-form"></form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Subscription;
