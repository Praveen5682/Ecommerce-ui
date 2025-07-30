import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BuyNow = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  const tax = 10;
  const totalPrice = parseInt(product.price) + tax;

  // Loader state
  const [loading, setLoading] = useState(false);

  // Function to handle "Place Order"
  function handlePlaceOrder(product) {
    // Set sessionStorage to indicate loader should be shown
    sessionStorage.setItem('isLoading', 'true');
    navigate(`/placeorderpage/${product.id}`, { state: { product } });
  }

  return (
    <div className="container mx-auto md:px-[80px] px-5 mt-[100px]">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Place Your Order
        </h1>

        {/* Order Summary Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="flex items-center">
            <img
              src={product.image}
              alt="Product Image"
              className="w-32 h-32 object-fit rounded-lg shadow-md mr-6"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-500">{product.name}</h3>
              <p className="text-gray-600">Quantity: 1</p>
              <p className="text-gray-600">Price: {product.price}</p>
            </div>
          </div>
        </div>

        {/* Delivery Address Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold mb-4">Delivery Address</h2>
          <div>
            <p className="text-gray-700">John Doe</p>
            <p className="text-gray-700">1234 Main St</p>
            <p className="text-gray-700">City, State, 56789</p>
            <p className="text-gray-700">Phone: (123) 456-7890</p>
            <button className="text-blue-500 hover:underline mt-2">Change</button>
          </div>
        </div>

        {/* Payment Method Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
          <div className="flex items-center justify-between">
            <p className="text-gray-700">Credit Card ending in 1234</p>
            <button className="text-blue-500 hover:underline">Change</button>
          </div>
        </div>

        {/* Order Total */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold mb-4">Order Total</h2>
          <div className="flex justify-between">
            <p className="text-lg text-gray-700">Subtotal:</p>
            <p className="text-lg font-semibold">{product.price}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg text-gray-700">Shipping:</p>
            <p className="text-lg font-semibold">Free</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg text-gray-700">Taxes:</p>
            <p className="text-lg font-semibold">$10.00</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-2xl font-bold">Total:</p>
            <p className="text-2xl font-bold text-green-500">{totalPrice}</p>
          </div>
        </div>

        {/* Place Order Button */}
        <div className="flex justify-end">
          <button
            className="bg-yellow-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300 shadow-lg transform hover:scale-105"
            onClick={() => handlePlaceOrder(product)}
            disabled={loading} // Disable button while loading
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>

        {/* Loader */}
        {loading && (
          <div className="flex justify-center mt-6">
            <div className="loader"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyNow;
