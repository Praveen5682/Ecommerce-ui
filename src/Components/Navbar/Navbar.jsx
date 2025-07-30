import { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { FaRegHeart, FaBars } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SearchComponent from "../Search/Search";

const Navbar = ({ setSearchTerm,searchTerm, cartcount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isSearch, setIsSearch] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = () => {
    navigate("/features");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  function showSearch() {
    setIsSearch((prev) => !prev);
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  const navigatetoFav = () => {
    navigate("/wishlist");
  };

  return (
    <div
      className={`w-full fixed top-0 left-0 transition-colors duration-300 z-50 ${
        isScrolled ? "bg-white shadow-md" : "bg-neutral-200"
      }`}
    >
      <nav className="container mx-auto flex items-center py-4 px-5 md:px-[80px] select-none">
        <h1
          className=" cursor-pointer text-bold lg:text-2xl font-medium text-md"
          onClick={() => {
            navigate("/");
          }}
        >
          <span className="text-blue-500">Praveen</span>Kart
        </h1>
        <div className="ml-auto flex items-center gap-6 md:hidden">
          <IoSearchSharp className="text-xl hover:cursor-pointer" />
          <IoMdCart
            onClick={handleCartClick}
            className="text-xl hover:cursor-pointer"
          />
          <FaRegHeart className="text-xl hover:cursor-pointer" />
          <FaBars
            onClick={toggleMenu}
            className="text-xl hover:cursor-pointer"
          />
        </div>
        <div
          className={`absolute top-16 left-0 w-full md:flex md:items-center md:gap-6 md:static md:bg-transparent md:shadow-none md:flex-row ${
            isMenuOpen ? "bg-blue-500 text-white" : "hidden"
          }`}
        >
          {/* <div className="md:hidden flex justify-end p-4">
            <FaTimes onClick={toggleMenu} className="text-xl cursor-pointer" />
          </div> */}
          <ul className="flex flex-col md:flex-row items-center py-4 md:py-0 pl-5 font-medium text-neutral-600">
            <li
              className={`py-2 md:py-1 cursor-pointer px-4 ${
                isActive("/")
                  ? "bg-blue-500 rounded-full text-white"
                  : "hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-500"
              }`}
            >
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li
              className={`py-2 md:py-1 cursor-pointer px-4 ${
                isActive("/shop")
                  ? "bg-blue-500 rounded-full text-white"
                  : "hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-500"
              }`}
            >
              <Link to="/shop" onClick={closeMenu}>
                Shop
              </Link>
            </li>
            {/* <li
              className={`py-2 md:py-1 cursor-pointer px-4 ${
                isActive("/customdesign")
                  ? "bg-blue-500 rounded-full text-white"
                  : "hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-500"
              }`}
            >
              <Link to="/customdesign" onClick={closeMenu}>
                Custom
              </Link>
            </li> */}
            <li
              className={`py-2 md:py-1 cursor-pointer px-4 ${
                isActive("/blog")
                  ? "bg-blue-500 rounded-full text-white"
                  : "hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-500"
              }`}
            >
              <Link to="/blog" onClick={closeMenu}>
                Blog
              </Link>
            </li>
            <li
              className={`py-2 md:py-1 cursor-pointer px-4 ${
                isActive("/about")
                  ? "bg-blue-500 rounded-full text-white"
                  : "hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-500"
              }`}
            >
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li
              className={`py-2 md:py-1 cursor-pointer px-4 ${
                isActive("/contact")
                  ? "bg-blue-500 rounded-full text-white"
                  : "hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-500"
              }`}
            >
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex ml-auto gap-6 items-center">
          <div
            className={`transition-all duration-300 ease-linear overflow-hidden ${
              isSearch ? "w-[400px] opacity-100" : "w-0 opacity-0"
            }`}
          >
            {/* <SearchComponent onChange={handleSearch} value={searchTerm}/> */}
          </div>
          <IoSearchSharp
            onClick={showSearch}
            className="text-xl hover:cursor-pointer hover:text-blue-500 duration-300"
          />
          <IoMdCart
            onClick={handleCartClick}
            className="text-xl hover:cursor-pointer hover:text-blue-500 duration-300 relative"
          />
          <span className="absolute top-2 right-[110px] bg-blue-500 px-2 rounded-full text-white">
            {cartcount}
          </span>
          <FaRegHeart
            onClick={navigatetoFav}
            className="text-xl hover:cursor-pointer hover:text-blue-500 duration-300"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;