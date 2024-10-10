import React from 'react';
import YouTube from 'react-youtube';

const Video = () => {
  const videoOptions = {
    playerVars: {
      autoplay: 1, // Set to 1 to autoplay the video
    },
  };

  return (
    <div className="flex flex-col items-center justify-center md:p-10 pt-20 min-h-screen">
      {/* YouTube Video Container */}
      <div className="relative w-full  bg-blue-600 max-w-[90%] rounded-3xl overflow-hidden -top-20 md:top-20" style={{ paddingBottom: '56.25%' }}>
        {/* 16:9 aspect ratio */}
        <YouTube
          videoId="3DkOv5VyulU"
          opts={{
            ...videoOptions,
            width: '100%',
            height: '100%',
          }}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      {/* Centered Text */}
      <div className="text-center mt-0 md:mt-24">
        <h1 className="md:text-4xl text-2xl font-semibold md:font-bold">In Freedom We Trust</h1>
        <p className="text-2xl font-thin mt-2">Join 140 million people and take back control</p>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row space-y-3 px-5 md:space-x-4 mt-5">
        {/* Learn More Button */}
        <button className="bg-blue-600 text-white rounded-full px-6 py-2 transition-all duration-300 ease-in-out hover:bg-green-600">
          Learn More
        </button>

        {/* Download Mobile App Button */}
        <button className="bg-transparent text-blue-600 flex items-center justify-center border border-blue-600 rounded-full px-6 py-2">
          <i className="ri-mobile-line mr-2"></i> {/* Mobile Icon */}
          Download Mobile App
        </button>

        {/* Download Desktop Extension Button */}
        <button className="bg-transparent text-blue-600 flex items-center justify-center border border-blue-600 rounded-full px-6 py-2">
          <i className="ri-desktop-line mr-2"></i> {/* Desktop Icon */}
          Download Extension
        </button>
      </div>
    </div>
  );
};

export default Video;
