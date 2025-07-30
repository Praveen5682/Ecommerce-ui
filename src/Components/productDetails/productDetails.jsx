import { useParams,useNavigate } from "react-router-dom";
import productsData from "../ProductsData";

const ProductDetails = ({ setCartCount }) => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id.toString() === id);
  const navigate = useNavigate();

  function cartCountHandler() {
    setCartCount((prev) => prev + 1);
  }

  if (!product) {
    return (
      <p className="mt-[100px] h-[80vh] flex items-center justify-center text-2xl">
        Product not found
      </p>
    );
  }

  function handleBuyNow(product){
    navigate(`/detailsfillingpage/${product.id}`, { state: { product } });
  }

  return (
    <div className="container mx-auto px-4 md:px-[80px] h-auto mt-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section: Product Image */}
        <div className="col-span-1 flex justify-center items-start">
          <img
            src={product?.image}
            alt={product?.name}
            className="h-[500px] w-[400px] shadow-lg rounded-lg object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Middle Section: Product Details */}
        <div className="col-span-2 flex flex-col">
          <div className="mb-4">
            <h1 className="text-4xl font-bold mb-2">{product?.name}</h1>
            <p className="text-lg text-gray-500 mb-2 capitalize">
              Category: {product?.category}
            </p>
            <p className="text-2xl font-semibold text-blue-600 mb-4">
              Price: {product?.price}
            </p>

            {/* Product Rating */}
            <div className="flex items-center mb-6">
              <span className={"text-yellow-500 text-2xl"}>★★★★★</span>
              <span className="ml-2 text-gray-500">({product?.reviewsCount} reviews)</span>
            </div>

            {/* Product Availability */}
            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-700">
                {product.stock > 0 ? (
                  <span className="text-green-600">In Stock</span>
                ) : (
                  <span className="text-red-600">Out of Stock</span>
                )}
              </p>
            </div>

            {/* Product Description */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Product Description</h3>
              <p className="text-lg text-gray-700">
                {product.description ||
                  "This is an amazing product offering great value. It features a premium build and is designed for comfort and style."}
              </p>
            </div>

            {/* Action Buttons */}

            <div className="flex space-x-4 mt-8">
              <button className={`bg-yellow-500 text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-yellow-600 transition duration-300 shadow-lg`}
              onClick={()=>handleBuyNow(product)}
              >
                Buy Now
              </button>
            
              <button
                onClick={cartCountHandler}
                className="bg-gray-200 text-black px-6 py-3 rounded-md text-lg font-bold hover:bg-gray-300 transition duration-300 shadow-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Product Specifications</h2>
            <ul className="text-lg text-gray-700 leading-relaxed list-disc ml-8 space-y-2">
              <li>Product ID: {product?.id}</li>
              <li>Category: {product?.category}</li>
              <li>Price: ${product?.price}</li>
              <li>Stock: {product.stock > 0 ? "Available" : "Out of Stock"}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700">
            "Great product! Value for money, and the quality is excellent."
          </p>
          <p className="text-right text-sm text-gray-500">- John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
