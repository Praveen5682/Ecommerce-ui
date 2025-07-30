import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PlaceOrderPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isLoadingFlag = sessionStorage.getItem('isLoading');

    if (isLoadingFlag === 'true') {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.removeItem('isLoading');
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  function handleContinueShopping() {
    navigate('/shop');
  }

  return (
    <div className="container mx-auto px-5 pt-[100px] text-center h-auto">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader border-t-4 border-blue-500 w-16 h-16 rounded-full animate-spin"></div>
          <p className="ml-4 text-lg font-semibold">Processing your order...</p>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto py-[80px]">
          <svg className="mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="64" height="64" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <h1 className="text-4xl font-bold text-green-500 mb-4">Order Placed Successfully!</h1>
          <p className="text-lg text-gray-700 mb-6">Thank you for your order. Your order number is <span className="font-semibold">#123456</span>.</p>

          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="border-t border-b py-4 mb-4">
            <p className="text-lg">Product Name: <span className="font-medium">{product?.name || 'Product'}</span></p>
            <p className="text-lg">Total Amount: <span className="font-medium">{product?.price || 'Amount'}</span></p>
          </div>

          <div className="mt-8">
            <button
              className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaceOrderPage;
