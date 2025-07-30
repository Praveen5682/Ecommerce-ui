import { IoFilter } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import productsData from "../ProductsData";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Search from "../Search/Search"
import {Link} from "react-router-dom";
import { toast } from 'react-toastify';



const Product = () => {
  
  const [search,setSearch] = useState("");
  const [activeCategory, setActiveCaegory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const navigate = useNavigate();
  const {id} = useParams();

  console.log("id:",id)


  const womenCategory = () => {
    const filtered = productsData.filter((product) => {
      return product.category === "female";
    });
    setFilteredProducts(filtered);
    setActiveCaegory("women");
  };

  const showAll = () => {
    setFilteredProducts(productsData);
    setActiveCaegory("all");
  };

  const menCategory = () => {
    const filtered = productsData.filter((product) => {
      return product.category === "male";
    });
    setFilteredProducts(filtered);
    setActiveCaegory("male");
  };

  const bagCategory = () => {
    const filtered = productsData.filter((product) => {
      return product.category === "bag";
    });
    setFilteredProducts(filtered);
    setActiveCaegory("bag");
  };

  const shoeCategory = () => {
    const filtered = productsData.filter((product) => {
      return product.category === "shoe";
    });
    setFilteredProducts(filtered);
    setActiveCaegory("shoe");
  };

  const watchCategory = () => {
    const filtered = productsData.filter((product) => {
      return product.category === "watch";
    });
    setFilteredProducts(filtered);
    setActiveCaegory("watch");
  };

  function productRouteHandler(product){
    navigate(`/product/${product.id}`)
  }

  function cartHandler(){
    toast.success("Cart Added Successfully",{
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    })
  }

  function gotoshopHandler(){
    navigate("/shop")
  }

  return (
    <section className="bg-white">
      <div className="container mx-auto py-12 md:px-[80px] px-5">
        <h1 className="uppercase md:text-4xl text-3xl text-left md:text-left font-bold py-6">
          Product Overview
        </h1>
        <div className=" justify-between items-center md:flex">
          <ul className=" gap-4 text-gray-500 flex flex-wrap">
            <li
              className={`cursor-pointer ${
                activeCategory === "all" ? "text-blue-500" : ""
              }`}
              onClick={showAll}
            >
              All Products
            </li>
            <li
              className={`cursor-pointer ${
                activeCategory === "women" ? "text-blue-500" : ""
              }`}
              onClick={womenCategory}
            >
              Women 
            </li>
            <li
              className={`cursor-pointer ${
                activeCategory === "male" ? "text-blue-500" : ""
              }`}
              onClick={menCategory}
            >
              Men
            </li>
            <li
              className={`cursor-pointer ${
                activeCategory === "bag" ? "text-blue-500" : ""
              }`}
              onClick={bagCategory}
            >
              Bag
            </li>
            <li
              className={`cursor-pointer ${
                activeCategory === "shoe" ? "text-blue-500" : ""
              }`}
              onClick={shoeCategory}
            >
              Shoes
            </li>
            <li
              className={`cursor-pointer ${
                activeCategory === "watch" ? "text-blue-500" : ""
              }`}
              onClick={watchCategory}
            >
              Watches
            </li>
          </ul>
          <div className="flex gap-2 mt-5 md:mt-0">
            <div className="border flex items-center justify-center px-6 py-2 gap-2 cursor-pointer hover:bg-blue-500 hover:text-white rounded-md transition-all ease-in-out">
              <IoFilter />
              <p className="">Filter</p>
            </div>
            <div className="border flex items-center justify-center px-6 py-2 gap-2 cursor-pointer rounded-md hover:bg-blue-500 hover:text-white transition-all ease-in-out">
              <IoSearchOutline />
              <p className="">Search</p>
            </div>
          </div>
        </div>
        <div className="h-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {filteredProducts.length === 0 ? (
            <p className="container w-[89vw] text-center py-12">
              No Products Available
            </p>
          ) : (
            <>
              {filteredProducts.slice(0,4).map((product, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden group flex flex-col h-[500px]"
                >
                  <img
                    src={product.image}
                    alt={`Product ${index + 1}`}
                    className="transition-transform duration-500 ease-linear hover:scale-105 w-full h-[350px] object-cover cursor-pointer"
                    onClick={() => productRouteHandler(product)}
                  />
                  <div className="flex-1 p-4 bg-white flex justify-between">
                    <div>
                      <Link to={`/product/${product.id}`}><p className="text-lg font-semibold cursor-pointer hover:text-blue-500">{product.name}</p></Link>
                      <p className="text-gray-500">{product.price}</p>
                    </div>
                    <div className="flex justify-end mt-2 text-gray-500 hover:text-blue-500">
                      <FaRegHeart onClick={cartHandler} className="text-2xl cursor-pointer" />
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      {/*Load More */}
      <div className="h-[100px] flex justify-center items-center">
        <button onClick={gotoshopHandler} className="bg-neutral-200 px-12 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
          Go To Shop
        </button>
      </div>
    </section>
  );
};

export default Product;
