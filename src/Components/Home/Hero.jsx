import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import img1 from "../../assets/product-02.jpg";
import img2 from "../../assets/product-01.jpg";
import img3 from "../../assets/product-10.jpg";

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  cssEase: "ease-in-out",
  pauseOnHover: true,
};

const Hero = () => {

  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAfterChange = (current) => {
    setCurrentSlide(current);
  };

  function handlenaviagte(){
    navigate("/shop")
  }

  const slideText = [
    {
      title: "Discover the New Collection",
      subtitle: "Stylish Jackets & Coats",
      buttonText: "Shop Now",
    },
    {
      title: "Warm Up Your Winter",
      subtitle: "Cozy Winter Coats",
      buttonText: "Explore Now",
    },
    {
      title: "Elevate Your Style",
      subtitle: "Elegant Leather Jackets",
      buttonText: "Browse Collection",
    },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden md:mt-16 mt-12">
      {/* Image Slider */}
      <div className="absolute inset-0">
        <Slider
          {...settings}
          className="w-full md:h-full h-screen"
          afterChange={handleAfterChange}
        >
          <div className="w-full md:h-full h-screen">
            <img
              src={img1}
              alt="Stylish jacket in black color"
              className="w-full md:h-full h-screen object-cover"
            />
          </div>
          <div className="w-full md:h-full h-screen">
            <img
              src={img2}
              alt="Cozy winter coat in grey"
              className="w-full md:h-full h-screen object-cover"
            />
          </div>
          <div className="w-full md:h-full h-screen">
            <img
              src={img3}
              alt="Elegant leather jacket"
              className="w-full md:h-full h-screen object-cover"
            />
          </div>
        </Slider>
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center md:items-center md:justify-start p-6 md:p-12 lg:p-16 bg-gradient-to-r  text-white">
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {slideText[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase mb-6 leading-tight">
            {slideText[currentSlide].subtitle}
          </p>
          <button onClick={handlenaviagte} className="bg-blue-700 text-white py-3 px-8 rounded-full shadow-md hover:bg-blue-800 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            {slideText[currentSlide].buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
