// src/Payment.js
import React from 'react';
import './Payment.css'; // Optional: Add styling for the payment page

const Payment = () => {
  return (
    <div className="payment">
      <h2>Select Payment Method</h2>
      <div className="payment-options">
        <div className="payment-option">
          <h3>Credit Card</h3>
          <p>Pay securely using your credit card.</p>
        </div>
        <div className="payment-option">
          <h3>Amazon Pay</h3>
          <p>Pay using your Amazon account.</p>
        </div>
        <div className="payment-option">
          <h3>UPI Bank Transfer</h3>
          <p>Transfer the payment directly from your bank account.</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
