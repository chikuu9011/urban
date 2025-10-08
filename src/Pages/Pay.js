import React from "react";
import { useLocation } from "react-router-dom";

const Pay = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const total = queryParams.get("total");

  return (
    <div className="container py-5 text-center">
      <h2 className="mb-4">Payment Page</h2>

      {total ? (
        <p className="lead">
          Total Amount: <strong>${total}</strong>
        </p>
      ) : (
        <p className="text-danger">Total not found in cart</p>
      )}

      {/* ✅ UPI Image Display */}
      <div className="my-4">
        <img
          src="/images/QR.jpeg" // 🧾 Your UPI image path here
          alt="Scan to Pay"
          style={{ maxWidth: "300px", width: "100%", borderRadius: "8px" }}
        />
        <p className="mt-2">Scan this QR code with your UPI app to pay</p>
      </div>
    </div>
  );
};

export default Pay;
