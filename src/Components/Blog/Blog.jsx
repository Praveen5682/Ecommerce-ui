import BannerImg from "../../assets/taylor-grote-pSXh2jlUBG0-unsplash.jpg";
import BlogImg1 from "../../assets/blog-01.jpg.jpg";
import BlogImg2 from "../../assets/blog-02.jpg.jpg";
import BlogImg3 from "../../assets/blog-03.jpg.webp";
import { MdArrowRightAlt } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import Productimg1 from "../../assets/product-02.jpg";


const Blog = () => {
  return (
    <div
      className="md:mt-16 mt-12 h-auto"
    >
      <div className="relative">
        <img
          src={BannerImg}
          alt="Blog Banner"
          className="object-cover w-full h-[250px] shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 p-4">
          <h1 className="text-5xl font-extrabold">Blog</h1>
        </div>
      </div>

      {/* Blog Contents */}

      <div className="h-full w-full">
        <div className="container mx-auto md:px-[80px] px-5 mt-10 md:flex flex-row gap-12">
          <div className="md:w-[70%] text-justify relative w-full">
            <div className="overflow-hidden inline-block ">
              <img
                src={BlogImg1}
                alt="Blog"
                className="cursor-pointer transition-transform transform hover:scale-105 duration-700"
              />
            </div>
            <div className="absolute top-2 left-2 h-20 w-20 cursor-pointer bg-white opacity-80 flex flex-col items-center justify-center">
              <h1 className="text-3xl font-medium">22</h1>
              <p className="text-gray-500">Jan 2018</p>
            </div>
            <p className="py-4 md:text-2xl font-bold text-xl">
              8 Inspiring Ways to Wear Dresses in the Winter
            </p>
            <p className="text-gray-500 py-4 md:text-left text-left">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec
              dictum vitae sapien eu varius
            </p>

            <div className="md:flex items-center justify-between">
              <p>By Admin | StreetStyle, Fashion, Couple | 8 Comments</p>
              <div className="md:flex items-center justify-center space-x-2 hover:text-blue-500 transition-all duration-300">
                <h1 className="font-medium uppercase cursor-pointer flex items-center md:text-lg pt-8 md:pt-0 text-sm">
                  Continue Reading
                  <MdArrowRightAlt className="ml-2 text-xl" />
                </h1>
              </div>
            </div>

            {/* Content2 */}
            <div className="overflow-hidden inline-block mt-10">
              <img
                src={BlogImg2}
                alt="Blog"
                className="cursor-pointer transition-transform transform hover:scale-105 duration-700"
              />
            </div>
            <div className="absolute md:top-[600px] top-[535px] left-2 h-20 w-20 cursor-pointer bg-white opacity-80 flex flex-col items-center justify-center">
              <h1 className="text-3xl font-medium">22</h1>
              <p className="text-gray-500">Jan 2018</p>
            </div>
            <p className="py-4 md:text-2xl text-xl font-bold">
              8 Inspiring Ways to Wear Dresses in the Winter
            </p>
            <p className="text-gray-500 py-6 md:text-left text-left">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec
              dictum vitae sapien eu varius
            </p>

            <div className="md:flex items-center justify-between">
              <p>By Admin | StreetStyle, Fashion, Couple | 8 Comments</p>
              <div className="md:flex items-center justify-center space-x-2 hover:text-blue-500 transition-all duration-300">
                <h1 className="font-medium uppercase cursor-pointer flex items-center md:text-lg pt-8 md:pt-0 text-sm">
                  Continue Reading
                  <MdArrowRightAlt className="ml-2 text-xl" />
                </h1>
              </div>
            </div>

            {/* Content 3 */}

            <div className="overflow-hidden inline-block mt-14">
              <img
                src={BlogImg3}
                alt="Blog"
                className="cursor-pointer transition-transform transform hover:scale-105 duration-700"
              />
            </div>
            <div className="absolute md:top-[1225px] top-[1090px] left-2 h-20 w-20 cursor-pointer bg-white opacity-80 flex flex-col items-center justify-center">
              <h1 className="text-3xl font-medium">22</h1>
              <p className="text-gray-500">Jan 2018</p>
            </div>
            <p className="py-4 md:text-2xl font-bold text-xl">
              8 Inspiring Ways to Wear Dresses in the Winter
            </p>
            <p className="text-gray-500 py-6 md:text-left text-left">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec
              dictum vitae sapien eu varius
            </p>

            <div className="md:flex items-center justify-between">
              <p>By Admin | StreetStyle, Fashion, Couple | 8 Comments</p>
              <div className="md:flex items-center justify-center space-x-2 hover:text-blue-500 transition-all duration-300">
                <h1 className="font-medium uppercase cursor-pointer flex items-center md:text-lg pt-8 md:pt-0 text-sm">
                  Continue Reading
                  <MdArrowRightAlt className="ml-2 text-xl" />
                </h1>
              </div>
            </div>
          </div>

          {/* Right Side Contents */}

          <div className="md:w-[30%] text-justify md:pl-6  pl-0 relative w-full mt-10 md:mt-0">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-6 py-3 border rounded-full"
            />
            <IoIosSearch className="absolute top-5 right-12 text-gray-500 cursor-pointer hover:text-blue-500 transition-all duration-300" />

            <div>
              <h1 className="text-2xl font-bold pt-8">Categories</h1>
              <hr className="mt-7" />

              {/* Categories */}
              <ul>
                <li className="py-2 hover:text-blue-500 text-md transition-all text-gray-500 duration-300 cursor-pointer">
                  Fashion
                </li>
                <hr className="" />
                <li className="py-2 hover:text-blue-500 text-md transition-all text-gray-500 duration-300 cursor-pointer">
                  Beauty
                </li>
                <hr className="" />
                <li className="py-2 hover:text-blue-500 text-md transition-all text-gray-500 duration-300 cursor-pointer">
                  Street Style
                </li>
                <hr className="" />
                <li className="py-2 hover:text-blue-500 text-md transition-all text-gray-500 duration-300 cursor-pointer">
                  Life Style
                </li>
                <hr className="" />
                <li className="py-2 hover:text-blue-500 text-md transition-all text-gray-500 duration-300 cursor-pointer">
                  DIY & Crafts
                </li>
                <hr className="" />
              </ul>
            </div>

            {/* Featured Products */}
            <div className="flex flex-col items-start justify-center">
              <h1 className="text-2xl font-bold text-center mb-8 pt-8">
                Featured Products
              </h1>
              <div className="flex items-start justify-between mt-8">
                <div className="w-1/2 pr-4">
                  <img
                    src={Productimg1}
                    alt="Featured Product"
                    className="md:w-full h-auto cursor-pointer object-cover w-28"
                  />
                </div>
                <div className="w-1/2 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-500 text-lg mb-2">
                      White Shirt With Pleat Detail Back
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className="text-gray-400 text-xl">$19.00</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between mt-8">
                <div className="w-1/2 pr-4">
                  <img
                    src={Productimg1}
                    alt="Featured Product"
                    className="md:w-full h-auto cursor-pointer object-cover w-28"
                  />
                </div>
                <div className="w-1/2 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-500 text-lg mb-2">
                      White Shirt With Pleat Detail Back
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className="text-gray-400 text-xl">$19.00</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between mt-8">
                <div className="w-1/2 pr-4">
                  <img
                    src={Productimg1}
                    alt="Featured Product"
                    className="md:w-full h-auto cursor-pointer object-cover w-28"
                  />
                </div>
                <div className="w-1/2 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-500 text-lg mb-2">
                      White Shirt With Pleat Detail Back
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className="text-gray-400 text-xl">$19.00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Archive */}
            <div>
              <h1 className="text-2xl font-bold pt-8 py-4">Archive</h1>
              <ul>
                <div className="flex items-center justify-between my-2 text-gray-500 cursor-pointer hover:text-blue-500 transition-all duration-300">
                  <li>July 2018</li>
                  <p>(9)</p>
                </div>
                <div className="flex items-center justify-between mb-2 text-gray-500 cursor-pointer hover:text-blue-500 transition-all duration-300">
                  <li>June 2018</li>
                  <p>(39)</p>
                </div>
                <div className="flex items-center justify-between mb-2 text-gray-500 cursor-pointer hover:text-blue-500 transition-all duration-300">
                  <li>May 2018</li>
                  <p>(29)</p>
                </div>
                <div className="flex items-center justify-between mb-22 text-gray-500 cursor-pointer hover:text-blue-500 transition-all duration-300">
                  <li>April 2018</li>
                  <p>(35)</p>
                </div>
                <div className="flex items-center justify-between mb-2 text-gray-500 cursor-pointer hover:text-blue-500 transition-all duration-300">
                  <li>March 2018</li>
                  <p>(22)</p>
                </div>
                <div className="flex items-center justify-between mb-2 text-gray-500 cursor-pointer hover:text-blue-500 transition-all duration-300">
                  <li>February 2018</li>
                  <p>(32)</p>
                </div>
                <div className="flex items-center justify-between mb-2 text-gray-500 cursor-pointer hover:text-blue-500 transition-all duration-300">
                  <li>January 2018</li>
                  <p>(21)</p>
                </div>
                <div className="flex items-center justify-between mb-2 text-gray-500 cursor-pointer hover:text-blue-500 transition-all duration-300">
                  <li>December 2017</li>
                  <p>(26)</p>
                </div>
              </ul>
            </div>

            {/* Tags */}

            <div>
              <h1 className="text-2xl font-bold pt-8">Tags</h1>
              <div>
                <ul className="flex flex-wrap gap-x-1 gap-y-2 mt-5">
                  <li className="border text-gray-500 px-3 py-1 rounded-full mr-2">
                    Fashion
                  </li>
                  <li className="border text-gray-500 px-3 py-1 rounded-full mr-2">
                    Lifestyle
                  </li>
                  <li className="border text-gray-500 px-3 py-1 rounded-full mr-2">
                    Denim
                  </li>
                  <li className="border text-gray-500 px-3 py-1 rounded-full mr-2">
                    Streetstyle
                  </li>
                  <li className="border text-gray-500 px-3 py-1 rounded-full mr-2">
                    Crafts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
