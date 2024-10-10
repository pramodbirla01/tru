import React, { useState } from 'react';

function One_stop() {
  const [isMobile, setIsMobile] = useState(true);

  return (
    <div className="w-screen md:pl-20 md:w-[90%] mx-auto md:p-10">
      {/* Container for Left and Right Divs */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Div */}
        <div className="w-full h-auto md:w-full border rounded-2xl border-gray-300 bg-gray-100 p-10">
          {/* Heading */}
          <h1 className="text-3xl font-bold mb-2">Your One-stop, Web3 Wallet</h1>

          {/* Description */}
          <p className="mb-4">
            Buy, sell, and swap crypto, earn rewards, manage NFTs, and discover DApps, all in one place.
          </p>

          {/* Toggle Button */}
          <div className="flex items-center mb-4 border border-black rounded-full p-1 w-fit">
            <button
              onClick={() => setIsMobile(true)}
              className={`rounded-full px-4 py-2 transition-colors duration-300 ${
                isMobile ? 'bg-blue-700 text-white' : 'bg-transparent text-black'
              }`}
            >
              Mobile
            </button>
            <button
              onClick={() => setIsMobile(false)}
              className={`rounded-full px-4 py-2 ml-2 transition-colors duration-300 ${
                !isMobile ? 'bg-blue-700 text-white' : 'bg-transparent text-black'
              }`}
            >
              Extension
            </button>
          </div>

          {/* Download Button */}
          <button className="bg-blue-700 text-white border border-transparent rounded-full px-6 py-2 hover:bg-yellow-200 hover:text-black hover:border hover:border-black transition-all duration-300">
            Download Mobile App
          </button>
        </div>

        {/* Right Div */}
        <div className="w-full md:w-full p-0 border rounded-2xl border-gray-300">
          {/* Gif Section */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://trustwallet.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmobile-application.85aab932.gif&w=828&q=75" // Replace with your GIF path
              alt="Web3 Wallet Gif"
              className="w-fit h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default One_stop;
