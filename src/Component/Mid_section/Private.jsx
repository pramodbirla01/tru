import React from 'react';

function Private() {
  return (
    <div className="w-screen md:w-full md:max-w-[90%] -mt-6 md:ml-20 rounded-3xl bg-gradient-to-br from-green-700 via-green-500 to-green-600 py-10">
      {/* Main Container */}
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-5xl font-semibold text-white mb-4">
          Stay Private and Secure
        </h1>

        {/* Description */}
        <p className="text-lg text-white mb-10 px-3">
          Rest easy knowing that our privacy and security measures keep you in control of your data and digital assets, while also keeping them safe.
        </p>

        {/* Content Section */}
        <div className="bg-white rounded-2xl p-8 mx-3 md:mx-0 flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left Side Content */}
          <div className="md:w-2/5 h-2/3 text-start pr-4">
            <h2 className="text-2xl font-semibold mb-4">
              True Ownership of Your Crypto Assets
            </h2>
            <p className="mb-4">
              We secure your wallet, but don't control or have access to your private keys or secret phrase - only you do.
            </p>
            <button className="bg-blue-700 text-white rounded-full px-6 py-2 hover:bg-yellow-200 hover:text-black transition-colors duration-300">
              Get Started
            </button>
          </div>

          {/* Right Side Image */}
          <div className="md:w-1/2 h-1/3 pl-10">
            <img
              src="https://trustwallet.com/_next/static/media/raw.0acff7b3.svg"
              alt="Privacy and Security"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-4 mx-3 md:mx-0 shadow-md">
            <h3 className="text-xl font-semibold mb-2">Added security with encryption</h3>
            <img
              src="https://trustwallet.com/_next/static/media/raw.323e03ee.svg"
              alt="Card Image 1"
              className="mb-2 rounded-2xl h-1/3 pl-20 my-10"
            />
            <p className="text-gray-700">
            Use our Encrypted Cloud Backup for increased wallet security.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl mx-3 md:mx-0 p-4 shadow-md ">
            <h3 className="text-xl font-semibold mb-2">Zero personal tracking</h3>
            <img
              src="https://trustwallet.com/_next/static/media/raw.16e2b8fb.svg"
              alt="Card Image 2"
              className="mb-2 rounded-lg h-1/3 pl-20 mt-10"
            />
            <p className="text-gray-700">
            We don't track any personal information, including your IP address or balances
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl mx-3 md:mx-0 p-4 shadow-md">
            <h3 className="text-xl font-semibold mb-2">Proactive alerts for risky transactions</h3>
            <img
              src="https://trustwallet.com/_next/static/media/raw.f17c90c5.svg"
              alt="Card Image 3"
              className="mb-2 rounded-lg h-1/3 pl-20 mt-10"
            />
            <p className="text-gray-700">
            Stay safe with alerts for risky address and dApp connections
            </p>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="mt-8">
          <button className="bg-transparent border border-black text-black hover:bg-black hover:text-white transition-all ease-in-out duration-300 rounded-full px-6 py-2">
            Learn More About Privacy & Security
          </button>
        </div>
      </div>
    </div>
  );
}

export default Private;
