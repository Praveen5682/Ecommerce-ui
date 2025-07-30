import { IoFilter } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import productsData from "../ProductsData";
import { FaRegHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Shop = ({ searchTerm, setSearchTerm, setFavProducts, favproduct }) => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [activecategory, setActiveCategory] = useState("all");
  const [visiblecount, setVisibleCount] = useState(8);
  const [loadmorebtn, setShowMoreBtn] = useState(true);
  const location = useLocation();
  const category = location.state?.category;
  const navigate = useNavigate();

  useEffect(() => {
    let filtered = productsData;
  
    // Filter by category if specified
    if (category) {
      filtered = filtered.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    }
  
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    setFilteredProducts(filtered);
  }, [searchTerm, category]);
  

  // Navigation and category filtering functions...

  const favproductHandler = (product) => {
    setFavProducts((prevFavProducts) => {
      const isProductInFav = prevFavProducts.some(
        (item) => item.id === product.id
      );
      if (!isProductInFav) {
        toast.success(
          `Your Product ${product.name} Has Been Added To Wishlist`,
          {
            position: "top-center",
            autoClose: 2500,
          }
        );
        return [...prevFavProducts, product];
      }
      return prevFavProducts;
    });
  };

  function productdetailsrouter(product){
    navigate(`/product/${product.id}`);
  }

  const loadmoreHandler = () => {
    const productTotalCount = filteredProducts.length;
    const balanceCount = productTotalCount - visiblecount;
    if (balanceCount > 8) {
      setVisibleCount((prevcount) => prevcount + 8);
    } else {
      setVisibleCount(productTotalCount);
      setShowMoreBtn(false);
    }
  };

  return (
    <div className="mt-24 h-auto w-full">
      <div className="container mx-auto md:px-[80px] px-5 md:flex items-center justify-center">
        <ul className="flex gap-4 text-gray-500 flex-wrap">
          {/* Category filters */}
        </ul>
        <div className="flex gap-2 ml-auto mt-5 mb-14 md:mt-0 md:mb-0">
          {/* Filter and Search buttons */}
        </div>
      </div>

      {/* Products */}
      {filteredProducts.length === 0 ? (
        <p className="container w-[98vw] text-center py-12">
          No Products Available
        </p>
      ) : (
        <div className="h-auto w-full">
          <div className="container mx-auto md:px-[80px] px-5">
            <div className="h-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:pt-10 pt-0">
              {filteredProducts.slice(0, visiblecount).map((product, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden group flex flex-col h-[500px]"
                >
                  <img
                    src={product.image}
                    alt={`Product ${index + 1}`}
                    className="transition-transform duration-500 ease-linear hover:scale-105 w-full h-[350px] object-cover cursor-pointer"
                    onClick={() => productdetailsrouter(product)}
                  />
                  <div className="flex-1 p-4 bg-white flex justify-between">
                    <div>
                      <p className="text-lg font-semibold">{product.name}</p>
                      <p className="text-gray-500">{product.price}</p>
                    </div>
                    <div className="flex justify-end mt-2 text-gray-500 hover:text-blue-500 duration-300">
                      <FaRegHeart
                        className={`text-2xl cursor-pointer ${
                          favproduct.some((item) => item.id === product.id)
                            ? "text-red-500"
                            : ""
                        }`}
                        onClick={() => favproductHandler(product)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="h-[150px] flex justify-center items-center">
        {loadmorebtn ? (
          <button
            className="bg-neutral-200 px-12 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
            onClick={loadmoreHandler}
          >
            Load More
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Shop;
