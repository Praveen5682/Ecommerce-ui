import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Components/Shop/Shop";
import ErrorPage from "./Components/404/Error404";
import Features from "./Components/Features/Features";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Conatct";
import CustomDesign from "./Components/CustomDesign/CustomDesign";
import ProductDetails from "./Components/productDetails/productDetails";
import BuyNow from "./Components/BuyNow/BuyNow";
import Detailsfillingpage from "./Components/Detailsfillingpage/Detailsfillingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createContext, useState } from "react";
// import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../src/Components/scrollToTop/scrollToTop";
import Wishlist from "./Components/wishlist/wishList";
import PlaceOrderPage from "./Components/PlaceOrderPage/PlaceOrderPage";
import Search from "./Components/Search/Search";

export const searchContext = createContext();

const App = () => {

  const [searchterm, setSearchTerm] = useState("");
  const [cartcount, setCartCount] = useState(0);
  const [favproduct, setFavProducts] = useState([]);


  return (
<searchContext.Provider value={{ searchterm, setSearchTerm }}>
<BrowserRouter>
      <Navbar
         setSearchTerm={setSearchTerm}
         searchterm={searchterm}
         cartcount={cartcount}
         setFavProducts={setFavProducts}
      />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop searchterm={searchterm} setFavProducts={setFavProducts} favproduct={favproduct} />} />

        <Route path="/features" element={<Features />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/customdesign" element={<CustomDesign />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/product/:id"
          element={<ProductDetails setCartCount={setCartCount} />}
        />
        <Route
          path="/wishlist"
          element={
            <Wishlist favproduct={favproduct} setFavProducts={setFavProducts} />
          }
        />
        <Route path="/search" element={<Search searchTerm={searchterm} setSearchTerm={setSearchTerm}/>}/>

        <Route path="*" element={<ErrorPage />} />
        <Route path="/buynow/:id" element={<BuyNow />}/>
        <Route path="/detailsfillingpage/:id" element={<Detailsfillingpage />}/>
        <Route path="/placeorderpage/:id" element={<PlaceOrderPage />}/>
      </Routes> 
      <ScrollToTop />
      <Footer />
    </BrowserRouter>
    </searchContext.Provider>
  );
};

export default App;
