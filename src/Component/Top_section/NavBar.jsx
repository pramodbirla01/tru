import React, { useState } from 'react';

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
        <img src="https://trustwallet.com/_next/static/media/raw.4edbb099.svg" alt="Logo" className="h-14 w-auto" />
      </div>

      {/* Hamburger Icon for Mobile */}
      <button onClick={toggleMenu} className="md:hidden text-black">
        <i className={`ri-${isOpen ? 'close' : 'menu'}-line text-2xl`}></i>
      </button>

      {/* Menu items */}
      <div className={`flex items-center font-medium space-x-6 ${isOpen ? 'flex flex-col animate-slide-in -ml-10 mt-96  justify-center items-center gap-6 pb-5 absolute bg-white text-black w-full rounded-xl z-10 p-2 shadow-lg' : 'hidden'} md:flex`}>
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
          <button onClick={closeMenu} className="text-black rounded-full px-4 py-2">Wallet</button>
          <div className="absolute hidden group-hover:flex w-screen top-20 -left-[609px] bg-white text-black p-0">
            <div className="flex gap-10 flex-wrap w-screen bg-white p-5 justify-center">
              <img src="https://trustwallet.com/_next/static/media/raw.4edbb099.svg" alt="Wallet" className="w-full h-10 md:h-auto md:w-1/4 object-cover" />
              <div className="flex flex-wrap gap-10 w-full md:w-2/4">
                <div className="w-full md:w-1/3">
                  <h3 className="font-semibold text-gray-900">Mobile App</h3>
                  <p className="text-gray-600">The world of Web3 in your pocket</p>
                </div>
                <div className="w-full md:w-1/3">
                  <h3 className="font-semibold text-gray-900">Browser Extension</h3>
                  <p className="text-gray-600">An optimized Web3 experience for desktop</p>
                </div>
                <div className="w-full md:w-1/3">
                  <h3 className="font-semibold text-gray-900">SWIFT: Smart Contract Wallet</h3>
                  <p className="text-gray-600">Explore Web3 easily with account abstraction features</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="relative group">
          <button onClick={closeMenu} className="text-black rounded-full px-4 py-2">Features</button>
          <div className="absolute hidden group-hover:flex w-screen top-20 -left-[609px] bg-white text-black p-0">
            <div className="flex gap-10 flex-wrap w-screen bg-white p-5 justify-center">
              <img src="https://trustwallet.com/_next/static/media/raw.e7c57d68.svg" alt="Features" className="w-full h-10 md:h-auto md:w-1/4 object-cover" />
              <div className="flex flex-wrap gap-10 w-full md:w-2/4">
                <div className="w-full md:w-1/3">
                  <h3 className="font-semibold text-gray-900">Swaps</h3>
                  <p className="text-gray-600">Swap securely and seamlessly</p>
                </div>
                <div className="w-full md:w-1/3">
                  <h3 className="font-semibold text-gray-900">Staking</h3>
                  <p className="text-gray-600">Earn crypto rewards while securing networks</p>
                </div>
                <div className="w-full md:w-1/3">
                  <h3 className="font-semibold text-gray-900">NFTs</h3>
                  <p className="text-gray-600">Explore the world of NFTs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Build */}
        <div className="relative group">
          <button onClick={closeMenu} className="text-black rounded-full px-4 py-2">Build</button>
          <div className="absolute hidden group-hover:flex w-screen top-20 -left-[609px] bg-white text-black p-0">
            <div className="flex gap-10 flex-wrap w-screen bg-white p-5 justify-center">
              <img src="https://trustwallet.com/_next/static/media/raw.e7c57d68.svg" alt="Build" className="w-full h-10 md:h-auto md:w-1/4 object-cover" />
              <div className="flex flex-wrap gap-10 w-full md:w-2/4">
                <div className="w-full md:w-1/3">
                  <h3 className="font-semibold text-gray-900">Swaps</h3>
                  <p className="text-gray-600">Swap securely and seamlessly</p>
                </div>
                <div className="w-full md:w-1/3">
                  <h3 className="font-semibold text-gray-900">Staking</h3>
                  <p className="text-gray-600">Earn crypto rewards while securing networks</p>
                </div>
                <div className="w-full md:w-1/3">
                  <h3 className="font-semibold text-gray-900">NFTs</h3>
                  <p className="text-gray-600">Explore the world of NFTs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="relative group">
          <button onClick={closeMenu} className="text-black rounded-full px-4 py-2">Support</button>
          <div className="absolute hidden group-hover:flex w-screen top-20 -left-[609px] bg-white text-black p-0">
            <div className="flex gap-10 flex-wrap w-screen bg-white p-5 justify-center">
              <img src="https://trustwallet.com/_next/static/media/raw.b373ab3f.svg" alt="Support" className="w-full h-10 md:h-auto md:w-1/4 object-cover" />
              <div className="flex flex-wrap gap-10 w-full md:w-2/4">
                <div className="w-full md:w-1/3">
                  <h3 className="font-semibold text-gray-900">Security</h3>
                  <p className="text-gray-600">Learn how we keep your assets safe</p>
                </div>
                <div className="w-full md:w-1/3">
                  <h3 className="font-semibold text-gray-900">Buy Crypto</h3>
                  <p className="text-gray-600">Buy crypto in under five minutes</p>
                </div>
                <div className="w-full md:w-1/3">
                  <h3 className="font-semibold text-gray-900">Submit dApp</h3>
                  <p className="text-gray-600">Get your dApp in front of millions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="relative group">
          <button onClick={closeMenu} className="text-black rounded-full px-4 py-2">About</button>
          <div className="absolute hidden group-hover:flex w-screen top-20 -left-[609px] bg-white text-black p-0">
            <div className="flex gap-10 flex-wrap w-screen bg-white p-5 justify-center">
              <img src="https://trustwallet.com/_next/static/media/raw.9a6dd06f.svg" alt="About" className="w-full h-10 md:h-auto md:w-1/4 object-cover" />
              <div className="flex flex-wrap gap-10 w-full md:w-2/4">
                <div className="w-full md:w-1/3">
                  <h3 className="font-semibold text-gray-900">About Us</h3>
                  <p className="text-gray-600">Discover who we are and what drives us</p>
                </div>
                <div className="w-full md:w-1/3">
                  <h3 className="font-semibold text-gray-900">Careers</h3>
                  <p className="text-gray-600">Join us in shaping the future of Web3</p>
                </div>
                <div className="w-full md:w-1/3">
                  <h3 className="font-semibold text-gray-900">Press Kit</h3>
                  <p className="text-gray-600">Download our official logo and media assets</p>
                </div>
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
