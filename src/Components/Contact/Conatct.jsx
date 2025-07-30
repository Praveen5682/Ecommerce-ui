import AboutBanner from "../../assets/about-01.jpg";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { BsEnvelopeOpen } from "react-icons/bs";
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  function clickHandler() {
    const email = emailInput.trim();
    const msg = messageInput.trim();

    if (email.length > 0 && msg.length > 0) {
      toast.success(
        `Thank you for your message. We will get back to you shortly.`,{
          position:"top-center"
        }
      );
    } else {
      alert("Please enter valid email and message");
    }
  }

  return (
    <div className="md:mt-16 mt-12 mb-28">
      {/* Banner Section */}
      <div className="relative">
        <img
          src={AboutBanner}
          alt="Contact Banner"
          className="object-cover w-full h-[250px] shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 p-4">
          <h1 className="text-5xl font-extrabold">Contact</h1>
        </div>
      </div>

      {/* Contact Form and Information */}
      <div className="container mx-auto px-5 md:px-[80px] mt-16">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Contact Form */}
          <div className="flex-1 border rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-center mb-4">Send Us A Message</h2>
            <div className="relative mb-4">
              <BsEnvelopeOpen className="absolute top-3 left-3 text-gray-500" />
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full border py-2 pl-12 pr-4 rounded-md outline-none"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <textarea
              placeholder="How Can We Help?"
              className="w-full p-4 border border-gray-200 rounded-md outline-none resize-none min-h-[150px]"
              required
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <button
              onClick={clickHandler}
              className="bg-black text-white py-3 px-6 mt-4 rounded-full font-semibold uppercase w-full hover:bg-blue-500 transition-colors duration-300"
            >
              Submit
            </button>
          </div>

          {/* Contact Information */}
          <div className="flex-1 border rounded-lg shadow-md p-6 h-auto">
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <SlLocationPin className="md:text-lg text-4xl text-gray-600" />
                <div>
                  <h3 className="md:text-xl text-lg mb-2">Address</h3>
                  <p className="text-gray-600 text-sm">
                    Coza Store Center 8th floor, 379 Hudson St, New York, NY
                    10018 US
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <IoCallOutline className="text-lg text-gray-600" />
                <div>
                  <h3 className="md:text-xl text-lg mb-2">Let's Talk</h3>
                  <p className="text-blue-500 cursor-pointer text-sm">
                    +1 800 123 6879
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <FaRegEnvelope className="text-lg text-gray-600" />
                <div>
                  <h3 className="md:text-xl text-lg mb-2">Sales Support</h3>
                  <p className="text-blue-500 cursor-pointer text-sm">
                    contact@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="h-[400px] w-full bg-neutral-500 mt-24 rounded-lg shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.5945344444444!2d-74.00602248427111!3d40.71314487932709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083d%3A0x88206c6ae5e6441e!2sCoza%20Store!5e0!3m2!1sen!2sbd!4v1664904723326!5m2!1sen!2sbd"
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
