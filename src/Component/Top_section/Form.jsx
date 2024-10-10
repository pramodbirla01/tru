import React, { useState } from 'react';

function Form() {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ phone, email, name });
  };

  return (
    <div className="flex flex-col items-center justify-center ml-0 md:ml-20 w-screen md:w-[90%] bg-purple-800 rounded-t-3xl  p-10  h-auto md:min-h-screen">
      <h1 className="text-3xl font-bold mb-20  text-gray-200">Get a Callback for Query</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-md space-y-6 ">
      <label htmlFor="Name" className='font-semibold text-xl text-gray-200'>Enter Full Name:</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2  rounded-full w-full py-3 text-center border border-gray-300 focus:outline-none focus:border-blue-600"
          required
        />
        <label htmlFor="phone" className='font-semibold text-xl text-gray-200'>Enter Mobile Number:</label>
        {/* Phone Input */}
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-2 rounded-full w-full py-3 text-center border border-gray-300 focus:outline-none focus:border-blue-600"
          required
        />

        {/* Email Input */}
        <label htmlFor="email" className='font-semibold text-xl text-gray-200'>Enter Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded-full w-full py-3 text-center border border-gray-300 focus:outline-none focus:border-blue-600"
          required
        />
      

        {/* Name Input */}

        {/* Get a Call Button */}

        <button
          type="submit"
          className="bg-green-600 w-full  text-white rounded-full px-20 py-3  transition-all duration-300 ease-in-out hover:border border-black hover:text-black hover:bg-orange-400"
        >
          Get a Call
        </button>
      </form>
    </div>
  );
}

export default Form;
