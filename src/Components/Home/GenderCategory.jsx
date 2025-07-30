import Banner1 from "../../assets/banner-01.jpg";
import Banner2 from "../../assets/banner-02.jpg";
import Banner3 from "../../assets/banner-03.jpg";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    image: Banner1,
    title: "Women",
    subtitle: "Spring 2018",
  },
  {
    image: Banner2,
    title: "Men",
    subtitle: "Spring 2018",
  },
  {
    image: Banner3,
    title: "Kids",
    subtitle: "New Trend",
  },
];

const GenderCategory = () => {

  const navigate = useNavigate();
  
  return (
    <div className="h-full w-full bg-white py-10">
      <div className="container mx-auto md:px-[80px] px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              onClick={() => navigate("/shop",{state:{category:"women"}})}
              key={index}
              className="relative h-[240px] border cursor-pointer group overflow-hidden hover:text-white"
            >
              <img
                src={category.image}
                alt={`Banner ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 "
              />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="text-left z-10">
                  <h1 className="text-3xl font-bold transition-opacity duration-300">{category.title}</h1>
                  <p className="text-md transition-opacity duration-300">{category.subtitle}</p>
                </div>
                <div className="text-left z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-md font-bold text-white transform translate-y-10 group-hover:translate-y-0 transition-transform duration-700">Shop Now</p>
                  <hr className="border border-white mt-1 w-20" />
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-60 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenderCategory;
