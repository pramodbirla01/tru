import React from 'react';

function Simple_seam() {
  return (
    <div className=" w-screen md:w-full md:max-w-[90%] mx-auto -mt-5 md:ml-20 bg-gradient-to-bl from-pink-400 via-purple-700 to-indigo-950 p-10 pb-20 rounded-t-3xl">
      {/* Heading */}
      <h1 className="text-center text-6xl font-semibold text-white mb-6">
        Simple. Seamless.
      </h1>

      {/* Description */}
      <p className="text-center text-lg text-gray-200 mb-20">
        Enjoy a smooth mobile app and desktop experience with easy-to-use, powerful tools to support your entire Web3 journey.
      </p>

      {/* Content Section */}
      <div className="flex flex-col  md:flex-row justify-between items-center bg-white  md:p-6 rounded-2xl shadow-md">
        {/* Left Side Content */}
        <div className="md:w-1/3 p-4">
          <h2 className="text-3xl font-bold mb-5">Deposit Crypto Easily from Exchanges</h2>
          <p className="mb-4">
            Take control of your crypto. Avoid complicated steps and deposit directly to your wallet from exchanges like Binance and Coinbase.
          </p>
          <button className="bg-transparent border border-blue-700 text-blue-700  rounded-full px-6 py-2 hover:bg-blue-700 hover:text-white  transition-colors duration-300">
            Get Started with Deposits
          </button>
        </div>

        {/* Right Side Image */}
        <div className="md:w-2/5">
          <img src="https://trustwallet.com/_next/static/media/raw.d927cfe4.svg" alt="Deposit Crypto" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Simple_seam;
