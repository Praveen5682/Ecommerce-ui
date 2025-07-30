import { TiDelete } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Wishlist = ({ favproduct,setFavProducts }) => {

  console.log(favproduct)
  const navigate = useNavigate();

  function removeFavProduct(product){
    const removed = favproduct.filter((item) => item.id !== product.id);
    setFavProducts(removed)
    console.log(removed)
  }

  const Handlenavigatetoproductdetails = (product) => {
    navigate(`/product/${product.id}`)
  } 

  return (
    <div className="mt-24 h-auto w-full">
      <div className="container mx-auto md:px-[80px] px-5">
        <h1 className="text-3xl font-semibold mb-8">Your Wishlist</h1>

        {favproduct.length > 0 ? (  // Check if the wishlist is not empty
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favproduct.map((product) => (
              <div
                key={product.id}
                className="relative overflow-hidden group flex flex-col h-[500px]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="transition-transform duration-500 ease-linear hover:scale-105 w-full h-[350px] object-cover cursor-pointer"
                  onClick={()=>Handlenavigatetoproductdetails(product)}
                />
                <div className="flex-1 p-4 bg-white flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold">{product.name}</p>
                    <p className="text-gray-500">{product.price}</p>
                  </div>
                  <div className="flex justify-end mt-2 text-red-500 hover:text-red-700 duration-300">
                    <TiDelete
                      className="text-2xl cursor-pointer"
                      title="Remove from Wishlist"
                      onClick={()=>removeFavProduct(product)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-xl mb-4">Your wishlist is currently empty.</p>
            <button
              onClick={() => navigate("/shop")}
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300"
            >
              Back to Shop
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
