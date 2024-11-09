import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        {/* Left Side: Text */}
        <div className="flex justify-center items-center">
          <div id="hero" className="text-left">
            <p className="text-gray-400 font-roboto text-6xl font-thin ml-0 pl-0">
              PROJECT
            </p>
            <p className="text-black font-roboto font-bold text-5xl">Lorum</p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div
          id="hero-image"
          className="bg-no-repeat bg-right bg-cover w-770 h-829"
          style={{
            backgroundImage: "url(/building.png)",
            backgroundSize: "90%",
          }}
        >
          {/* You can adjust the w and h values or the container as needed */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
