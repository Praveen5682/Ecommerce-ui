import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import Product from '../Home/Product';

const Detailsfillingpage = () => {


  const [form,SetForm] = useState({
    fullname:"",
    address:"",
    city:"",
    state:"",
    zipcode:"",
    phonenumber:"",
    email:""
  })

  const location = useLocation();

  const product = location.state?.product;
  const navigate = useNavigate();
  const {id} = useParams()
  console.log(id)

function handleChange(e){
  const {name,value} = e.target;
  SetForm((prevform)=>({
    ...prevform,
    [name]:value
  }));
}

const handleConfirmOrder = (e) => {
  e.preventDefault();

  if (
    form.fullname === '' ||
    form.address === '' ||
    form.city === '' ||
    form.state === '' ||
    form.zipcode === '' ||
    form.phonenumber === '' ||
    form.email === ''
  ) {
    alert("Please fill in all fields to proceed further");
    return;
  }

  navigate(`/buynow/${product.id}`, { state: { product, form } });
};


  return (
    <div className="container mx-auto md:px-[80px] px-5 mt-[100px]">
        <div className="container mx-auto p-6">
  <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Fill Your Details</h1>
  
  <form className="bg-white p-8 rounded-lg shadow-lg">
    {/* Name Field */}
    <div className="mb-6">
      <label className="block text-gray-700 text-lg mb-2">Full Name</label>
      <input
        type="text"
        name='fullname'
        id="fullname"
        className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your Full Name"
        onChange={handleChange}
        value={form.fullname}
        
      />
    </div>

    {/* Address Field */}
    <div className="mb-6">
      <label className="block text-gray-700 text-lg mb-2">Address</label>
      <input
        type="text"
        className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your Address"
        onChange={handleChange}
        name='address'
        id="address"
        value={form.address}
      />
    </div>

    {/* City Field */}
    <div className="mb-6">
      <label className="block text-gray-700 text-lg mb-2">City</label>
      <input
        type="text"
        className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your City"
        name="city"
        id='city'
        onChange={handleChange}
        value={form.city}

      />
    </div>

    {/* State Field */}
    <div className="mb-6">
      <label className="block text-gray-700 text-lg mb-2">State</label>
      <input
        type="text"
        className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your State"
        name="state"
        id="state"
        onChange={handleChange}
        value={form.state}
      />
    </div>

    {/* Zip Code Field */}
    <div className="mb-6">
      <label className="block text-gray-700 text-lg mb-2">Zip Code</label>
      <input
        type="text"
        className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your Zip Code"
        name="zipcode"
        id="zipcode"
        onChange={handleChange}
        value={form.zipcode}
      />
    </div>

    {/* Phone Number Field */}
    <div className="mb-6">
      <label className="block text-gray-700 text-lg mb-2">Phone Number</label>
      <input
        type="tel"
        className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your Phone Number"
        name="phonenumber"
        id="phonenumber"
        onChange={handleChange}
        value={form.phonenumber}
      />
    </div>

    {/* Email Field */}
    <div className="mb-6">
      <label className="block text-gray-700 text-lg mb-2">Email</label>
      <input
        type="email"
        className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your Email"
        name="email"
        id="email"
        onChange={handleChange}
        value={form.email}
      />
    </div>

    {/* Order Confirmation Button */}
    <div className="flex justify-center">
      <button className="bg-yellow-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300 shadow-lg transform hover:scale-105"
      onClick={handleConfirmOrder}
      >
        Confirm Order
      </button>
    </div>
  </form>
</div>

    </div>
  )
}

export default Detailsfillingpage;