import React from 'react';

function Footer() {
  return (
    <div className="border mt-20 md:ml-20 rounded-2xl w-screen  md:w-[90%] border-gray-300 bg-gray-200 p-10 flex flex-col md:flex-row">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <img src="https://trustwallet.com/_next/static/media/raw.4edbb099.svg" alt="Logo" className="md:w-full  md:h-auto p-10" /> {/* Replace with actual image */}
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-3/4 flex flex-col md:space-y-8">
        {/* Top Section: Grid with 5 Columns */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 pb-4">
          <div>
            <h3 className="font-bold text-lg">Wallet</h3>
            <p>Mobile App</p>
            <p>Browser Extension</p>
            <p>Features</p>
            <p>Buy Crypto</p>
            <p>Swaps</p>
            <p>Staking</p>
            <p>NFTs</p>
            <p>Security</p>
            <p>SWIFT: Smart Contract Wallet</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Build</h3>
            <p>Developer Docs</p>
            <p>Wallet Core</p>
            <p>Submit dApp</p>
            <p>Get assets listed</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Support</h3>
            <p>FAQ</p>
            <p>Community Forum</p>
            <p>Contact Us</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">About</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Kit</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Blog</p>
          </div>
          <div className='flex justify-start items-start gap-4'>
            <img src="https://trustwallet.com/_next/static/media/image.8354ab2c.svg" alt="" className='w-14' />
            <img src="https://trustwallet.com/_next/static/media/image.7f0b3bc9.svg" alt="" className='w-14'/>
          </div>
        </div>

        {/* Buttons for Download */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-transparent text-blue-700 py-2 px-4 border border-blue-700 rounded-full hover:text-white hover:bg-blue-700 transition-all">
            Download for iOS
          </button>
          <button className="bg-transparent text-blue-700 py-2 px-4 border border-blue-700  hover:text-white rounded-full hover:bg-blue-700 transition-all">
            Download Extension for Chrome
          </button>
          <button className="bg-transparent text-blue-700 py-2 px-4 border border-blue-700 hover:text-white rounded-full hover:bg-blue-700 transition-all">
            Download for Android
          </button>
          <button className="bg-transparent text-blue-700 py-2 px-4 border border-blue-700  hover:text-white rounded-full hover:bg-blue-700 transition-all">
            Download APK
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4">
          <i className="ri-facebook-circle-fill text-3xl"></i>
          <i className="ri-github-fill text-3xl"></i>
          <i className="ri-instagram-line text-3xl"></i>
          <i className="ri-twitter-fill text-3xl"></i>
          <i className="ri-discord-fill text-3xl"></i>
          <i className="ri-reddit-fill text-3xl"></i>
          <i className="ri-tiktok-line text-3xl"></i>
        </div>

        {/* Image Below (Optional) */}
        
      </div>
    </div>
  );
}

export default Footer;
