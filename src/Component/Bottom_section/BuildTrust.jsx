import React from 'react';

function BuildTrust() {
  return (
    <div className="bg-blue-800 md:ml-20 rounded-3xl w-screen md:w-[90%] text-white px-10 py-10  flex flex-col md:flex-row items-center justify-between">
      {/* Left Side: Heading and Description */}
      <div className="w-screen md:w-3/4 px-20">
        <h1 className="text-3xl font-bold mb-4">Building on Trust</h1>
        <p className="text-lg mb-6 font-semibold">
          We know that working together as a community is better for everyone. Our platform enables blockchain developers to build their dApps and wallets natively and connect with millions of users, without having to worry about the low-level implementation details.
        </p>
        <button className="bg-white text-blue-700 py-3 px-6 rounded-full font-semibold hover:bg-gray-200 transition-all">
          Check out our developer docs
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/4 mt-8 md:mt-0">
        <img src="https://trustwallet.com/_next/static/media/raw.b373ab3f.svg" alt="Developer working" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  );
}

export default BuildTrust;
