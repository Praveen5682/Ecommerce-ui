import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Img1 from "../../assets/product-detail-02.jpg";
import Img2 from "../../assets/product-detail-000003.jpg";

const Features = () => {
  const [quantityValue, setQuantityValue] = useState(1);
  const [price, setPrice] = useState(250);
  const [total, setTotal] = useState(0);

  let stock = 5;

  useEffect(() => {
    setTotal(quantityValue * price);
  }, [quantityValue, price]);

  function increment() {
    setQuantityValue((prev) => {
      if (prev < stock) {
        return prev + 1;
      } else if (prev === stock) {
        return stock;
      } else {
        return 1;
      }
    });
  }

  function decrement() {
    setQuantityValue((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return 1;
      }
    });
  }

  return (
    <div className="mt-16 w-full">
      <div className="container mx-auto md:px-20 px-5">
        <div className="flex items-center gap-2 py-6">
          <p className="text-sm hover:text-blue-500">
            <Link to="/">Home</Link>
          </p>
          <span className="text-gray-500">/</span>
          <p className="text-gray-500 text-sm">Shopping Cart</p>
        </div>

        <div className="lg:flex gap-8 mt-0 py-0">
          {/* Product List Section */}
          <div className="lg:w-3/5">
            {/* Single Product Card */}
            <div className="border p-4 rounded-lg shadow-sm mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={Img2}
                  alt="Fresh Strawberries"
                  className="h-20 w-20 object-cover rounded-sm"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">Fresh Strawberries</h2>
                  <p className="text-gray-600">${price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <button
                    onClick={decrement}
                    className="px-4 py-2 border hover:bg-blue-500 hover:text-white transition-all duration-300 text-lg"
                  >
                    -
                  </button>
                  <div className="px-4 py-2 text-lg">{quantityValue}</div>
                  <button
                    onClick={increment}
                    className="px-4 py-2 border hover:bg-blue-500 hover:text-white transition-all duration-300 text-lg"
                  >
                    +
                  </button>
                </div>
                <p className="text-lg font-medium">${total}</p>
              </div>
            </div>

            {/* Second Product Card */}
            <div className="border p-4 rounded-lg shadow-sm mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={Img1}
                  alt="Lightweight Jacket"
                  className="h-20 w-20 object-cover rounded-sm"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">Lightweight Jacket</h2>
                  <p className="text-gray-600">$16.00</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      setQuantityValue((prev) => Math.max(prev - 1, 1))
                    }
                    className="px-4 py-2 border hover:bg-blue-500 hover:text-white transition-all duration-300 text-lg"
                  >
                    -
                  </button>
                  <div className="px-4 py-2 text-lg">{quantityValue}</div>
                  <button
                    onClick={() => setQuantityValue((prev) => prev + 1)}
                    className="px-4 py-2 border hover:bg-blue-500 hover:text-white transition-all duration-300 text-lg"
                  >
                    +
                  </button>
                </div>
                <p className="text-lg font-medium">$32.00</p>
              </div>
            </div>
          </div>

          {/* Checkout Section */}
          <div className="lg:w-2/5">
            <div className="sticky top-0 bg-white border p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
              <p className="mb-2 text-gray-600">Subtotal: $79.65</p>
              <p className="mb-4 text-gray-600">Shipping: Free</p>

              <hr className="mb-4" />

              <p className="text-lg font-semibold mb-6">Total: $79.65</p>

              <button className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
