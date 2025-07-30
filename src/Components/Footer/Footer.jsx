import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import PayIcon1 from "../../assets/icon-pay-01.png";
import PayIcon2 from "../../assets/icon-pay-02.png";
import PayIcon3 from "../../assets/icon-pay-03.png";
import PayIcon4 from "../../assets/icon-pay-04.png";
import PayIcon5 from "../../assets/icon-pay-05.png";

const Footer = () => {
  return (
    <footer className="bg-black h-auto w-full py-16 px-6 md:px-20 mt-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Categories Section */}
          <div >
            <h2 className="font-bold uppercase text-white">Categories</h2>
            <ul className="pt-6 space-y-4 text-gray-400 text-sm">
              <li className="cursor-pointer hover:text-blue-500">Women</li>
              <li className="cursor-pointer hover:text-blue-500">Men</li>
              <li className="cursor-pointer hover:text-blue-500">Shoes</li>
              <li className="cursor-pointer hover:text-blue-500">Watches</li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h2 className="font-bold uppercase text-white">Help</h2>
            <ul className="pt-6 space-y-4 text-gray-400 text-sm">
              <li className="cursor-pointer hover:text-blue-500">Track Order</li>
              <li className="cursor-pointer hover:text-blue-500">Returns</li>
              <li className="cursor-pointer hover:text-blue-500">Shipping</li>
              <li className="cursor-pointer hover:text-blue-500">FAQs</li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div className="text-sm">
            <h2 className="font-bold uppercase text-white">Get In Touch</h2>
            <p className="pt-6 w-full max-w-xs text-gray-400">
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
            <div className="flex gap-4 pt-10">
              <FaFacebookF className="text-gray-400 cursor-pointer hover:text-blue-500 text-lg" />
              <FaInstagram className="text-gray-400 cursor-pointer hover:text-blue-500 text-lg" />
              <FaPinterestP className="text-gray-400 cursor-pointer hover:text-blue-500 text-lg" />
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="font-bold uppercase text-white">Newsletter</h2>
            <input
              type="email"
              placeholder="email@example.com"
              className="bg-black border-b border-b-neutral-700 py-2 mt-6 outline-none w-full max-w-xs text-white"
            />
            <button className="uppercase bg-blue-500 text-white py-3 px-12 rounded-full my-6 hover:bg-white hover:text-blue-500 transition-all duration-300 ease-in-out font-medium md:">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="h-auto w-full flex gap-1 items-center justify-center mt-20">
        <img src={PayIcon1} alt="" className="h-6 cursor-pointer" />
        <img src={PayIcon2} alt="" className="h-6 cursor-pointer" />
        <img src={PayIcon3} alt="" className="h-6 cursor-pointer" />
        <img src={PayIcon4} alt="" className="h-6 cursor-pointer" />
        <img src={PayIcon5} alt="" className="h-6 cursor-pointer" />
      </div>
      <div>
        <p className="text-center text-gray-400 pt-5 text-sm">
        Copyright © 2024 All rights reserved | Made with ❤️ by 
          <span className="text-blue-500 cursor-pointer " > Praveen Kumar</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
