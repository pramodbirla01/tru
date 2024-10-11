import React, { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex fixed bg-white justify-between z-10 items-center px-10 py-8 w-screen text-white">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://trustwallet.com/_next/static/media/raw.4edbb099.svg"
          alt="Logo"
          className="h-14 w-auto"
        />
      </div>

      {/* Hamburger Icon for Mobile */}
      <button onClick={toggleMenu} className="md:hidden text-black">
        <i className={`ri-${isOpen ? "close" : "menu"}-line text-2xl`}></i>
      </button>

      {/* Menu items */}
      <div
        className={`flex items-center font-medium space-x-6 ${
          isOpen
            ? "flex flex-col animate-slide-in -ml-10 mt-96  justify-center items-center gap-6 pb-5 absolute bg-white text-black w-full rounded-xl z-10 p-2 shadow-lg"
            : "hidden"
        } md:flex`}
      >
        {isOpen && (
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-black"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
        )}
        {/* Wallet with full-screen dropdown */}
        <div className="relative group">
          <button onClick={closeMenu} className="text-black  px-4 py-4 ">
            Wallet
          </button>
          <div className="absolute animate-slide-in hidden group-hover:flex w-screen top-14 -left-[555px] bg-white text-black p-0">
            <div className="flex gap-10 flex-wrap w-screen bg-white p-5 items-center justify-center">
              <img
                src="https://trustwallet.com/_next/static/media/raw.4edbb099.svg"
                alt="Wallet"
                className="w-full h-10 md:h-auto md:w-1/12 py-10 object-cover"
              />
              <div className="flex flex-wrap gap-10 w-full md:w-2/4">
              <a href="https://trustwallet.com/download" target="">
                <div className="w-full hover:underline text-gray-400 md:w-2/3">
                  <h3 className="font-semibold text-gray-900">Mobile App</h3>
                  <p className="text-gray-400">
                    The world of Web3 in your pocket
                  </p>
                </div>
                </a>
                <a href="https://trustwallet.com/browser-extension" target="">
                <div className="w-full hover:underline text-gray-400 md:w-2/3">
                  <h3 className="font-semibold text-gray-900">
                    Browser Extension
                  </h3>
                  <p className="text-gray-400">
                    An optimized Web3 experience for desktop
                  </p>
                </div>
                </a>
                
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="relative group">
          <button onClick={closeMenu} className="text-black  px-4 py-4 ">
            Features
          </button>
          <div className="absolute animate-slide-in hidden group-hover:flex w-screen top-14 -left-[666px] bg-white text-black p-0">
            <div className="flex gap-5 flex-wrap w-screen bg-white p-10 items-center justify-center">
              <img
                src="https://trustwallet.com/_next/static/media/raw.e7c57d68.svg"
                alt="Features"
                className="w-full h-10 md:h-auto md:w-1/6 object-cover"
              />
              <div className="flex flex-wrap gap-10 w-full md:w-2/4">
              <a href="https://trustwallet.com/swap">
                <div className="w-full hover:underline text-gray-400 md:w-fit">
                  <h3 className="font-semibold text-gray-900">Swaps</h3>
                  <p className="text-gray-400">Swap securely and seamlessly</p>
                </div>
                </a>
                <a href="https://trustwallet.com/staking">
                <div className="w-full hover:underline text-gray-400 md:w-fit">
                  <h3 className="font-semibold  text-gray-900">Staking</h3>
                  <p className="text-gray-400">
                    Earn crypto rewards while securing networks
                  </p>
                </div>
                </a>
                <a href="https://trustwallet.com/nft">
                <div className="w-full hover:underline text-gray-400 md:w-fit">
                  <h3 className="font-semibold text-gray-900">NFTs</h3>
                  <p className="text-gray-400">Explore the world of NFTs</p>
                </div>
                </a>
                <a href="https://trustwallet.com/security">
                <div className="w-full hover:underline text-gray-400 md:w-fit">
                  <h3 className="font-semibold text-gray-900">Security</h3>
                  <p className="text-gray-400">Learn how we keep your assets WEB3 safe</p>
                </div>
                </a>
                <a href="https://trustwallet.com/buy-crypto">
                <div className="w-full hover:underline text-gray-400 md:w-full">
                  <h3 className="font-semibold text-gray-900">Buy crypto</h3>
                  <p className="text-gray-400">Buy crypto in under 5 minutes</p>
                </div>
                </a>
                <a href="">
                <div className="w-full hover:underline text-gray-400 md:w-screen">
                  <h3 className="font-semibold text-gray-900">SWIFT: Smart Contract Wallet</h3>
                  <p className="text-gray-400">
                  Explore Web3 easily with account abstraction features</p>
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Build */}
        <div className="relative group">
          <button onClick={closeMenu} className="text-black  px-4 py-4 ">
            Build
          </button>
          <div className="absolute animate-slide-in hidden group-hover:flex w-screen top-14 -left-[777px] bg-white text-black p-0">
            <div className="flex gap-10 flex-wrap w-screen bg-white p-5 justify-center">
              <img
                src="https://trustwallet.com/_next/static/media/raw.e7c57d68.svg"
                alt="Build"
                className="w-full h-10 md:h-auto md:w-1/6 object-cover"
              />
              <div className="flex flex-wrap gap-10 w-full md:w-2/4">
              <a href="https://developer.trustwallet.com/developer">
                <div className="w-full hover:underline text-gray-400 md:w-full">
                  <h3 className="font-semibold text-gray-900">Developer Docs</h3>
                  <p className="text-gray-600">
                  Get guides for building powerful Web3 applications</p>
                </div>
                </a>
                <a href="https://developer.trustwallet.com/developer/wallet-core">
                <div className="w-full hover:underline text-gray-400 md:w-full">
                  <h3 className="font-semibold  text-gray-900">Wallet Core
                  </h3>
                  <p className="text-gray-600">
                  Open-source, mobile-focused crypto wallet library
                  </p>
                </div>
                </a>
                <a href="https://developer.trustwallet.com/developer/listing-new-dapps">
                <div className="w-full hover:underline text-gray-400 md:w-full">
                  <h3 className="font-semibold text-gray-900">Submit dApp</h3>
                  <p className="text-gray-400">
                  Get your dApp in front of millions</p>
                </div>
                </a>
                <a href="https://developer.trustwallet.com/developer/listing-new-assets">
                <div className="w-full hover:underline text-gray-400 md:w-full">
                  <h3 className="font-semibold text-gray-900">Submit dApp</h3>
                  <p className="text-gray-400">
                  Get your dApp in front of millions</p>
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="relative group">
          <button onClick={closeMenu} className="text-black  px-4 py-4">
            Support
          </button>
          <div className="absolute animate-slide-in hidden group-hover:flex w-screen top-14 -left-[888px] bg-white text-black p-0">
            <div className="flex gap-10  flex-wrap w-screen bg-white p-5 justify-center">
              <img
                src="https://trustwallet.com/_next/static/media/raw.1211abf0.svg"
                alt="Support"
                className="w-full h-10 md:h-auto md:w-1/6 object-cover"
              />
             <div className="flex flex-wrap gap-10 w-full md:w-2/4">
             <a href="https://community.trustwallet.com/c/helpcenter/8" target="_blank">
                <div className="w-full hover:underline text-gray-400 md:w-2/3 cursor-pointer">
                  <h3 className="font-bold text-gray-900">FAQ</h3>
                  <p className="text-gray-400">
                    Get answers to your most pressing questions
                  </p>
                </div>
             </a> 
             <a href="https://community.trustwallet.com/" target="_blank"> 
                <div className="w-full hover:underline text-gray-400 md:w-2/3 cursor-pointer">
                  <h3 className="font-bold text-gray-900">Community Forum</h3>
                  <p className="text-gray-400">
                  Connect with our vibrant and diverse community
                  </p>
                </div>
                </a>
                <a href="https://support.trustwallet.com/en/support/home" target="_blank"> 
                <div className="w-full hover:underline text-gray-400 md:w-2/3 cursor-pointer">
                  <h3 className="font-bold text-gray-900">Contact Us</h3>
                  <p className="text-gray-400">
                  Reach out for personalized support
                  </p>
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="relative group">
          <button onClick={closeMenu} className="text-black px-4 py-4  ">
            About
          </button>
          <div className="absolute animate-slide-in hidden group-hover:flex w-screen top-14 -left-[999px] bg-white text-black p-0">
            <div className="flex gap-10 flex-wrap w-screen bg-white p-5 items-center justify-center">
              <img
                src="https://trustwallet.com/_next/static/media/raw.9a6dd06f.svg"
                alt="About"
                className="w-full h-10 md:h-auto md:w-1/5 object-cover"
              />

              <div className="flex flex-wrap gap-10 w-full md:w-2/4">
              <a href="https://trustwallet.com/about-us">
                <div className="w-full hover:underline text-gray-400 md:w-full">
                  <h3 className="font-semibold text-gray-600">About Us</h3>
                  <p className="text-gray-400">
                    Discover who we are and what drives us
                  </p>
                </div>
                </a>
                <a href="https://trustwallet.com/careers"> 
                <div className="w-full hover:underline text-gray-400 md:w-full">
                  <h3 className="font-semibold text-gray-600">Careers</h3>
                  <p className="text-gray-400">
                    Join us in shaping the future of Web3
                  </p>
                </div>
                </a>
                <a href="https://trustwallet.com/press">
                <div className="w-full hover:underline text-gray-400 md:w-full">
                  <h3 className="font-semibold text-gray-600">Press Kit</h3>
                  <p className="text-gray-400">
                    Download our official logo and media assets
                  </p>
                </div>
                </a>
                <a href="https://trustwallet.com/blog"> 
                <div className="w-full hover:underline text-gray-400 md:w-full">
                  <h3 className="font-semibold text-gray-600">Blog</h3>
                  <p className="text-gray-400">
                  Stay up-to-date on Web3 trends and insights
                  </p>
                </div>
                </a>
                <a href="https://trustwallet.com/terms-of-service">
                <div className="w-full hover:underline text-gray-400 md:w-full">
                  <h3 className="font-semibold text-gray-600">Terms of Service</h3>
                  <p className="text-gray-400">
                  What you need to know to use our services
                  </p>
                </div>
                </a>
                <a href="https://trustwallet.com/privacy-policy">
                <div className="w-full hover:underline text-gray-400 md:w-full">
                  <h3 className="font-semibold text-gray-600">Privacy Policy</h3>
                  <p className="text-gray-400">
                  Your privacy matters, learn how we protect it
                  </p>
                </div>
                </a>
                
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <button className="rounded-full p-2">
          <i className="ri-moon-clear-line text-black text-2xl font-thin"></i>
        </button>

        {/* Language Button */}
        <button className="ho rounded-full p-0 flex items-center gap-3 bg-transparent text-blue-600 border hover:bg-blue-600 hover:text-white border-blue-600 px-4">
          <i className="ri-global-line text-2xl font-thin"></i>
          Language
        </button>

        {/* Download Button */}
        <button className="bg-blue-600 hover:bg-blue-700 rounded-full px-4 py-1 flex items-center space-x-2">
          <span>Download</span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
