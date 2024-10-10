import React from 'react';

function Expe() {
  return (
    <div className="px-20 py-10">
      {/* Heading and Description */}
      <div className="">
        <h1 className="font-bold text-3xl py-3">
          Enjoy a Web3 experience <br />
          powered by community
        </h1>
        <p className="text-xl">
          Join our vibrant and diverse community to learn about the power <br />
          of self-custody, crypto, and Web3.
        </p>
      </div>

      {/* Image and Description Grid */}
      <div className="flex flex-col gap-10 mt-8 md:flex-row md:justify-between">
        {/* Image 1 */}
        <div className="flex flex-col items-center w-full md:w-1/4">
          <img src="https://trustwallet.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.73b058c8.png&w=384&q=75" alt="Juan" className="h-96 w-full object-cover rounded-2xl" />
          <p className=" text-justify mt-4">
            <strong>Juan</strong>: <br /> The easiest way to understand DeFi is to get your hands dirty. The Trust Wallet dApp Browser helped me to use protocols with small amounts and learn what works and what doesn't work.
          </p>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center w-full md:w-1/4">
          <img src="https://trustwallet.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.04269c24.png&w=384&q=75" alt="Jen" className="h-96 w-full object-cover rounded-2xl" />
          <p className="text-justify mt-4">
            <strong>Jen</strong>: <br /> Secure your private keys like your life depends on it. #DoNotShare 🔑
          </p>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center w-full md:w-1/4">
          <img src="https://trustwallet.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.04269c24.png&w=384&q=75" alt="Harry" className="h-96 w-full object-cover rounded-2xl" />
          <p className="text-justify mt-4">
            <strong>Harry</strong>: <br /> As a newcomer in this field, the introduction of blockchain technology has had a profound and transformative impact on my life. It has opened up an entirely new realm of possibilities that I am eager to explore.
          </p>
        </div>

        {/* Image 4 */}
        <div className="flex flex-col items-center w-full md:w-1/4">
          <img src="https://trustwallet.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.73b058c8.png&w=384&q=75" alt="Esmart" className="h-96 w-full object-cover rounded-2xl" />
          <p className="text-justify mt-4">
            <strong>Esmart</strong>: <br /> I thoroughly enjoy engaging with DeFi and have developed a passion for minting NFTs. However, I always make it a point to conduct my own research and consistently check the Trust Wallet Security Scanner prior to any acquisition. By following these Web3 security practices, I ensure my safety and stay #SAFU. 🛡️
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-10">
        <button className="bg-blue-700 text-white px-6 py-3 border border-transparent rounded-full hover:bg-yellow-200 hover:border-black hover:text-black transition-all">
          Join Our Community on Telegram
        </button>
      </div>
    </div>
  );
}

export default Expe;
