import React from "react";
import AboutBanner from "../../assets/pexels-designecologist-975657.jpg";
import About1 from "../../assets/about-01.jpg";
import About2 from "../../assets/about-02.jpg";

const About = () => {
  return (
    <div className="md:mt-16 mt-12 mb-28">
      {/* Banner Section */}
      <div className="relative">
        <img
          src={AboutBanner}
          alt="About Banner"
          className="object-cover w-full h-[250px] shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 p-4">
          <h1 className="text-5xl font-extrabold">About</h1>
        </div>
      </div>

      {/* First Content Section */}
      <div className="w-full my-16">
        <div className="container mx-auto px-5 md:px-10 flex flex-col md:flex-row gap-16">
          {/* Text Section */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-md text-gray-600 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              consequat consequat enim, non auctor massa ultrices non. Morbi sed
              odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Maecenas varius egestas diam, eu sodales metus
              scelerisque congue. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Maecenas gravida
              ligula ac ligula.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nisi
              asperiores, tempore id soluta doloribus aliquam nesciunt veritatis
              omnis in architecto odit at quod illo quis iusto perferendis totam
              nobis? Nisi officiis, non ad placeat ullam suscipit eveniet qui
              omnis? Placeat maxime, autem, ipsa perferendis minima id saepe
              odit deserunt ducimus optio eveniet qui corporis non. Officiis
              eligendi velit maxime?
              <br />
              <br />
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/3">
            <div className="relative border-4 border-gray-300 rounded-lg overflow-hidden">
              <img
                src={About1}
                alt="About Image 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Content Section */}
      <div className="w-full my-16">
        <div className="container mx-auto px-5 md:px-10 flex flex-col-reverse md:flex-row gap-16">
          {/* Image Section */}
          <div className="w-full md:w-1/3">
            <div className="relative border-4 border-gray-300 rounded-lg overflow-hidden">
              <img
                src={About2}
                alt="About Image 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-md text-gray-600 leading-6">
              Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum
              rhoncus dignissim risus, sed consectetur erat. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Nullam maximus mauris sit amet odio convallis, in
              pharetra magna gravida. Praesent sed nunc fermentum mi molestie
              tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas,
              luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat
              odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in,
              porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec
              venenatis nulla lobortis. Proin at gravida ante. Mauris auctor
              purus at lacus maximus euismod. Pellentesque vulputate massa ut
              nisl hendrerit, eget elementum libero iaculis.
              <br />
              <br />
              <div className="flex items-center">
                <div className="flex-grow border-t border-gray-300 my-8"></div>
                <p className="pl-4 text-gray-700 italic">
                  "Creativity is just connecting things. When you ask creative
                  people how they did something, they feel a little guilty
                  because they didn't really do it, they just saw something. It
                  seemed obvious to them after a while."
                </p>
              </div>
              <div className="text-right mt-4">
                <p className="text-gray-700">- Steve Jobs</p>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
