import React from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

function Platform() {
  return (
    <div className="w-screen md:w-[90%] -mt-5 md:ml-20 rounded-t-3xl bg-gradient-to-bl from-orange-600 via-yellow-800 to-indigo-950 py-10 tablet:rounded-2xl tablet:px-10 tablet:py-20 -z-20 min-h-screen">

      {/* Heading */}
      <h1 className="text-center text-4xl font-bold px-4 text-white mb-6">
        One Platform, Millions of Assets
      </h1>

      {/* Description */}
      <p className="text-center text-lg text-white mb-10 px-5 tablet:px-20">
        As a leading self-custody multi-chain platform, we support millions of assets across 100+ blockchains. From Bitcoin, Ethereum, and Solana, to Cosmos, Optimism, and much more.
      </p>

      {/* Search Input */}
      <div className="flex justify-center mx-5 mb-10">
        <input
          type="text"
          placeholder="Search Chain..."
          className="w-full max-w-full py-3 px-5 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto md:px-10">
        <table className="w-fit md:w-full bg-white rounded-2xl">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Chain</th>
              <th className="px-4 py-2">Buy</th>
              <th className="px-4 py-2">Sell</th>
              <th className="px-4 py-2">Swap</th>
              <th className="px-4 py-2">Earn</th>
              <th className="px-4 py-2">dApps</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td className="px-2 py-2 flex items-center">
                <img src="https://trustwallet.com/_next/image?url=https%3A%2F%2Fassets-cdn.trustwallet.com%2Fblockchains%2Fbitcoin%2Finfo%2Flogo.png&w=48&q=75" alt="Logo 1" className="h-8 w-8 mr-2" />
                Bitcoin
              </td>
              <td className="pl-2 py-2 text-center"><FaCheckCircle color="blue" className="mx-auto" /></td>
              <td className="px-4 py-2 text-center"><FaCheckCircle color="blue" className="mx-auto" /></td>
              <td className="px-4 py-2 text-center"><FaCheckCircle color="blue" className="mx-auto" /></td>
              <td className="px-4 py-2 text-center"><FaCheckCircle color="blue" className="mx-auto" /></td>
              <td className="px-4 py-2 text-center"><FaTimes color='black' className="mx-auto border border-black rounded-full font-thin" /></td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td className="px-4 py-2 flex items-center">
                <img src="https://trustwallet.com/_next/image?url=https%3A%2F%2Fassets-cdn.trustwallet.com%2Fblockchains%2Fethereum%2Finfo%2Flogo.png&w=48&q=75" alt="Logo 2" className="h-8 w-8 mr-2" />
                Ethereum
              </td>
              <td className="px-4 py-2 text-center"><FaCheckCircle color="blue" className="mx-auto" /></td>
              <td className="px-4 py-2 text-center"><FaCheckCircle color="blue" className="mx-auto" /></td>
              <td className="px-4 py-2 text-center"><FaCheckCircle color="blue" className="mx-auto" /></td>
              <td className="px-4 py-2 text-center"><FaCheckCircle color="blue" className="mx-auto" /></td>
              <td className="px-4 py-2 text-center"><FaCheckCircle color="blue" className="mx-auto" /></td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td className="px-4 py-2 flex items-center">
                <img src="https://trustwallet.com/_next/image?url=https%3A%2F%2Fassets-cdn.trustwallet.com%2Fblockchains%2Fcosmos%2Finfo%2Flogo.png&w=48&q=75" alt="Logo 3" className="h-8 w-8 mr-2" />
                Cosmos
              </td>
              <td className="px-4 py-2 text-center"><FaCheckCircle color="blue" className="mx-auto " /></td>
              <td className="px-4 py-2 text-center"><FaTimes color="black" className="mx-auto border border-black rounded-full font-thin" /></td>
              <td className="px-4 py-2 text-center"><FaCheckCircle color="blue" className="mx-auto" /></td>
              <td className="px-4 py-2 text-center"><FaCheckCircle color="blue" className="mx-auto" /></td>
              <td className="px-4 py-2 text-center"><FaTimes color="black" className="mx-auto border border-black rounded-full font-thin" /></td>
            </tr>

            {/* Row 4 */}
            <tr>
              <td className="px-4 py-2 flex items-center">
                <img src="https://trustwallet.com/_next/image?url=https%3A%2F%2Fassets-cdn.trustwallet.com%2Fblockchains%2Fsmartchain%2Finfo%2Flogo.png&w=48&q=75" alt="Logo 4" className="h-8 w-8 mr-2" />
                BNB
              </td>
              <td className="px-4 py-2 text-center"><FaCheckCircle color="blue" className="mx-auto " /></td>
              <td className="px-4 py-2 text-center"><FaCheckCircle color="blue" className="mx-auto " /></td>
              <td className="px-4 py-2 text-center"><FaTimes color="black" className="mx-auto border border-black rounded-full font-thin" /></td>
              <td className="px-4 py-2 text-center"><FaCheckCircle color="blue" className="mx-auto " /></td>
              <td className="px-4 py-2 text-center"><FaTimes color="black" className="mx-auto border border-black rounded-full font-thin" /></td>
            </tr>

            {/* Row 5 */}
            <tr>
              <td className="px-4 py-2 flex items-center">
                <img src="https://trustwallet.com/_next/image?url=https%3A%2F%2Fassets-cdn.trustwallet.com%2Fblockchains%2Fpolkadot%2Finfo%2Flogo.png&w=48&q=75" alt="Logo 5" className="h-8 w-8 mr-2" />
                Polkadot
              </td>
              <td className="px-4 py-2 text-center"><FaCheckCircle color="blue" className="mx-auto" /></td>
              <td className="px-4 py-2 text-center"><FaTimes color="black" className="mx-auto border border-black rounded-full font-thin" /></td>
              <td className="px-4 py-2 text-center"><FaCheckCircle color="blue" className="mx-auto" /></td>
              <td className="px-4 py-2 text-center"><FaTimes color="black" className="mx-auto border border-black rounded-full font-thin" /></td>
              <td className="px-4 py-2 text-center"><FaCheckCircle color="blue" className="mx-auto" /></td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* Stats Section */}
      <div className="flex justify-around mt-10 text-white">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">10M+</h2>
          <p className="text-lg">Assets</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">600M+</h2>
          <p className="text-lg">NFTs</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">100+</h2>
          <p className="text-lg">Blockchains</p>
        </div>
      </div>

    </div>
  );
}

export default Platform;
